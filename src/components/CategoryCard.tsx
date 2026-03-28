import Link from "next/link";
import { Category } from "@/data/agents";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 hover:border-gray-600 transition-all"
    >
      <span className="text-2xl">{category.icon}</span>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-gray-500 truncate">{category.description}</p>
      </div>
      <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">
        {category.count}
      </span>
    </Link>
  );
}
