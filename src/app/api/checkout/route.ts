import { NextRequest, NextResponse } from "next/server";

const PLANS: Record<string, { priceEnv: string; name: string }> = {
  featured: { priceEnv: "STRIPE_FEATURED_PRICE_ID", name: "Featured Listing" },
  sponsored: { priceEnv: "STRIPE_SPONSORED_PRICE_ID", name: "Sponsored Listing" },
};

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(key);

    const body = await req.json();
    const { plan, agentName, email } = body;

    const selectedPlan = PLANS[plan];
    const priceId = selectedPlan ? process.env[selectedPlan.priceEnv] : undefined;
    if (!selectedPlan || !priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const baseUrl = req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { plan, agentName: agentName || "" },
      success_url: `${baseUrl}/submit?success=true&plan=${plan}`,
      cancel_url: `${baseUrl}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
