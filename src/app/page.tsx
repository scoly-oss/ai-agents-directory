import AgentCard from "@/components/AgentCard";
import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import { agents, categories } from "@/data/agents";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.toLowerCase() || "";

  const filtered = query
    ? agents.filter(
        (a) =>
          a.name.toLowerCase().includes(query) ||
          a.tagline.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.features.some((f) => f.toLowerCase().includes(query))
      )
    : agents;

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find the Best AI Agent
          <br />
          <span className="text-blue-400">for Any Task</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          The most comprehensive directory of AI agents. Compare {agents.length}+ autonomous tools
          for sales, support, coding, marketing, and more.
        </p>
        <SearchBar />
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            {agents.length} agents listed
          </span>
          <span>|</span>
          <span>{categories.length} categories</span>
          <span>|</span>
          <span>Updated daily</span>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold text-white mb-4">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {categories
            .filter((c) => c.count > 0)
            .map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold text-white">Featured Agents</h2>
            <span className="text-xs bg-amber-900/40 text-amber-400 border border-amber-800 px-2 py-0.5 rounded-full">
              SPONSORED
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((agent) => (
              <AgentCard key={agent.slug} agent={agent} />
            ))}
          </div>
        </section>
      )}

      {/* All Agents */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          {query ? `Results for "${q}"` : "All Agents"}
          <span className="text-sm text-gray-500 font-normal ml-2">({filtered.length})</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(query ? filtered : rest).map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No agents found for &ldquo;{q}&rdquo;</p>
            <p className="text-gray-600 text-sm mt-2">Try a different search term</p>
          </div>
        )}
      </section>
    </div>
  );
}
