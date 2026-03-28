import type { Metadata } from "next";
import { categories } from "@/data/agents";

export const metadata: Metadata = {
  title: "Submit Your AI Agent — AI Agents Directory",
  description: "List your AI agent in the largest directory of autonomous AI tools. Free and featured listings available.",
};

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-2">Submit Your AI Agent</h1>
      <p className="text-gray-400 mb-8">
        Get your AI agent listed in front of thousands of potential users. Free basic listing, or go
        featured for maximum visibility.
      </p>

      <form className="space-y-6">
        {/* Agent Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Agent Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. AutoGPT"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* URL */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Website URL *</label>
          <input
            type="url"
            required
            placeholder="https://youragent.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Tagline */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Tagline *</label>
          <input
            type="text"
            required
            placeholder="One line that describes what your agent does"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Description *</label>
          <textarea
            required
            rows={4}
            placeholder="Describe what your agent does, who it's for, and what makes it unique..."
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Category *</label>
          <select
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Pricing Model *</label>
            <select
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            >
              <option value="free">Free</option>
              <option value="freemium">Freemium</option>
              <option value="paid">Paid</option>
              <option value="open-source">Open Source</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">Starting Price</label>
            <input
              type="text"
              placeholder="e.g. $29/mo"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Your Email *</label>
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition"
          >
            Submit for Free Listing
          </button>
          <span className="text-sm text-gray-500">
            or{" "}
            <a href="/pricing" className="text-blue-400 hover:text-blue-300">
              get featured &rarr;
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}
