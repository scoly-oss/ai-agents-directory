import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Agents Directory — Find the Best AI Agents for Any Task",
  description:
    "The most comprehensive directory of AI agents. Compare autonomous AI tools for sales, support, coding, marketing, and more. Updated daily.",
  keywords: [
    "AI agents",
    "AI tools",
    "autonomous AI",
    "AI automation",
    "best AI agents",
    "AI agent directory",
  ],
  openGraph: {
    title: "AI Agents Directory — Find the Best AI Agents for Any Task",
    description:
      "The most comprehensive directory of AI agents. Compare autonomous AI tools for sales, support, coding, marketing, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents Directory",
    description: "Find the best AI agents for any task.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen`}>
        {/* Nav */}
        <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-white hover:text-blue-400 transition">
              AI Agents Directory
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition">
                Get Featured
              </Link>
              <Link
                href="/submit"
                className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg transition"
              >
                Submit Agent
              </Link>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              AI Agents Directory — The most comprehensive database of AI agents.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/submit" className="hover:text-white transition">
                Submit
              </Link>
              <Link href="/pricing" className="hover:text-white transition">
                Pricing
              </Link>
              <a href="mailto:hello@example.com" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
