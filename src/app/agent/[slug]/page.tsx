import { agents, categories } from "@/data/agents";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) return {};
  return {
    title: `${agent.name} — AI Agents Directory`,
    description: agent.tagline,
    openGraph: {
      title: `${agent.name} — ${agent.tagline}`,
      description: agent.description,
    },
  };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = agents.find((a) => a.slug === slug);
  if (!agent) notFound();

  const category = categories.find((c) => c.slug === agent.category);
  const related = agents.filter((a) => a.category === agent.category && a.slug !== agent.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: agent.name,
    description: agent.description,
    url: agent.url,
    applicationCategory: "BusinessApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: agent.rating,
      reviewCount: agent.reviewCount,
    },
    offers: agent.priceFrom
      ? { "@type": "Offer", price: agent.priceFrom, priceCurrency: "USD" }
      : undefined,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/category/${category.slug}`} className="hover:text-white transition">
              {category.name}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-gray-300">{agent.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shrink-0">
          {agent.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold text-white">{agent.name}</h1>
            {agent.featured && (
              <span className="text-xs bg-amber-900/40 text-amber-400 border border-amber-800 px-2 py-0.5 rounded-full font-medium">
                FEATURED
              </span>
            )}
          </div>
          <p className="text-lg text-gray-400">{agent.tagline}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4 mb-10">
        <a
          href={agent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl font-medium transition"
        >
          Visit {agent.name} &rarr;
        </a>
        <div className="text-sm text-gray-400">
          {agent.priceFrom && <span className="text-white font-medium">{agent.priceFrom}</span>}
          {agent.priceFrom && <span className="mx-2">|</span>}
          <span className="capitalize">{agent.pricing}</span>
        </div>
      </div>

      {/* Description */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-3">About {agent.name}</h2>
        <p className="text-gray-300 leading-relaxed">{agent.description}</p>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-3">Key Features</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {agent.features.map((f) => (
            <div key={f} className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-gray-300">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-white mb-3">Use Cases</h2>
        <ul className="space-y-2">
          {agent.useCases.map((u) => (
            <li key={u} className="flex items-center gap-2 text-gray-300">
              <svg className="w-4 h-4 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {u}
            </li>
          ))}
        </ul>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-gray-800 pt-10">
          <h2 className="text-lg font-semibold text-white mb-4">
            Similar {category?.name} Agents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/agent/${a.slug}`}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition"
              >
                <h3 className="font-medium text-white mb-1">{a.name}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{a.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
