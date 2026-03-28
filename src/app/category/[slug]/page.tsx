import { agents, categories } from "@/data/agents";
import { notFound } from "next/navigation";
import AgentCard from "@/components/AgentCard";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `Best AI Agents for ${cat.name} — AI Agents Directory`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryAgents = agents.filter((a) => a.category === slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span>/</span>
        <span className="text-gray-300">{category.name}</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{category.icon}</span>
          <h1 className="text-3xl font-bold text-white">
            Best AI Agents for {category.name}
          </h1>
        </div>
        <p className="text-gray-400 text-lg">{category.description}</p>
        <p className="text-sm text-gray-500 mt-2">{categoryAgents.length} agents listed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryAgents.map((agent) => (
          <AgentCard key={agent.slug} agent={agent} />
        ))}
      </div>

      {categoryAgents.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No agents in this category yet.</p>
          <Link href="/submit" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">
            Submit one &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
