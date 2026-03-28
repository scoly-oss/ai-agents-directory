import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — AI Agents Directory",
  description: "Get your AI agent featured in the largest directory. Boost visibility, drive traffic, and acquire users.",
};

const plans = [
  {
    name: "Free Listing",
    price: "$0",
    period: "forever",
    description: "Get listed in our directory",
    features: [
      "Basic listing with description",
      "Category placement",
      "Link to your website",
      "User ratings & reviews",
    ],
    cta: "Submit for Free",
    href: "/submit",
    highlighted: false,
  },
  {
    name: "Featured",
    price: "$49",
    period: "/month",
    description: "Maximum visibility and traffic",
    features: [
      "Everything in Free",
      "Featured badge on listing",
      "Homepage featured section",
      "Priority in category pages",
      "Highlighted border & styling",
      "Analytics dashboard",
      "Do-follow backlink",
    ],
    cta: "Get Featured",
    href: "/submit?plan=featured",
    highlighted: true,
  },
  {
    name: "Sponsored",
    price: "$199",
    period: "/month",
    description: "Own your category",
    features: [
      "Everything in Featured",
      "Top of category page",
      "Homepage hero placement",
      "Dedicated review/comparison page",
      "Newsletter mention (monthly)",
      "Social media shoutout",
      "Custom CTA button",
    ],
    cta: "Contact Us",
    href: "mailto:hello@example.com?subject=Sponsored%20Listing",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-white mb-3">Get More Eyes on Your AI Agent</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Our directory gets thousands of visits from people actively looking for AI agents.
          Featured listings get 10x more clicks than standard ones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 ${
              plan.highlighted
                ? "bg-blue-950/50 border-2 border-blue-500 ring-1 ring-blue-500/20"
                : "bg-gray-900 border border-gray-800"
            }`}
          >
            {plan.highlighted && (
              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                MOST POPULAR
              </span>
            )}
            <h2 className="text-xl font-bold text-white mt-3">{plan.name}</h2>
            <div className="flex items-baseline gap-1 mt-2 mb-1">
              <span className="text-3xl font-bold text-white">{plan.price}</span>
              <span className="text-gray-500">{plan.period}</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg
                    className="w-4 h-4 text-green-400 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={`block text-center py-2.5 rounded-xl font-medium transition ${
                plan.highlighted
                  ? "bg-blue-600 hover:bg-blue-500 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          Need a custom plan or bulk listings?{" "}
          <a href="mailto:hello@example.com" className="text-blue-400 hover:text-blue-300">
            Get in touch &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}
