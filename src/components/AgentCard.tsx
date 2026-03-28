import Link from "next/link";
import { Agent } from "@/data/agents";

function PricingBadge({ pricing, priceFrom }: { pricing: string; priceFrom?: string }) {
  const colors: Record<string, string> = {
    free: "bg-green-900/40 text-green-400 border-green-800",
    freemium: "bg-blue-900/40 text-blue-400 border-blue-800",
    paid: "bg-amber-900/40 text-amber-400 border-amber-800",
    "open-source": "bg-purple-900/40 text-purple-400 border-purple-800",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border ${colors[pricing] || colors.paid}`}>
      {priceFrom || pricing}
    </span>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-amber-400" : "text-gray-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500 ml-1">
        {rating} ({Intl.NumberFormat("en", { notation: "compact" }).format(0)})
      </span>
    </div>
  );
}

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agent/${agent.slug}`}
      className="group block bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-all hover:shadow-lg hover:shadow-gray-900/50"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-lg font-bold text-white">
            {agent.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                {agent.name}
              </h3>
              {agent.featured && (
                <span className="text-[10px] bg-amber-900/40 text-amber-400 border border-amber-800 px-1.5 py-0.5 rounded-full font-medium">
                  FEATURED
                </span>
              )}
            </div>
            <p className="text-xs text-gray-400">{agent.tagline}</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-400 line-clamp-2 mb-4">{agent.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {agent.features.slice(0, 3).map((f) => (
          <span key={f} className="text-[11px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-md">
            {f}
          </span>
        ))}
        {agent.features.length > 3 && (
          <span className="text-[11px] text-gray-600">+{agent.features.length - 3} more</span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Stars rating={agent.rating} />
        <PricingBadge pricing={agent.pricing} priceFrom={agent.priceFrom} />
      </div>
    </Link>
  );
}
