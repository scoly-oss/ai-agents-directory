export type Agent = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: "free" | "freemium" | "paid" | "open-source";
  priceFrom?: string;
  url: string;
  logo?: string;
  features: string[];
  useCases: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  addedAt: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
};

export const categories: Category[] = [
  { slug: "customer-support", name: "Customer Support", description: "AI agents that handle customer inquiries, tickets, and live chat automatically.", icon: "🎧", count: 0 },
  { slug: "sales-outreach", name: "Sales & Outreach", description: "AI agents that prospect, qualify leads, and close deals on autopilot.", icon: "💰", count: 0 },
  { slug: "content-creation", name: "Content Creation", description: "AI agents that write blog posts, social media content, and marketing copy.", icon: "✍️", count: 0 },
  { slug: "coding-dev", name: "Coding & Dev", description: "AI agents that write, review, and debug code autonomously.", icon: "💻", count: 0 },
  { slug: "data-analysis", name: "Data & Analytics", description: "AI agents that analyze data, generate reports, and surface insights.", icon: "📊", count: 0 },
  { slug: "marketing", name: "Marketing & SEO", description: "AI agents that run marketing campaigns, SEO, and growth experiments.", icon: "📣", count: 0 },
  { slug: "productivity", name: "Productivity", description: "AI agents that manage tasks, schedules, emails, and workflows.", icon: "⚡", count: 0 },
  { slug: "research", name: "Research", description: "AI agents that conduct deep research, summarize papers, and find information.", icon: "🔍", count: 0 },
  { slug: "hr-recruiting", name: "HR & Recruiting", description: "AI agents that screen resumes, schedule interviews, and onboard employees.", icon: "👥", count: 0 },
  { slug: "finance", name: "Finance & Accounting", description: "AI agents that handle bookkeeping, invoicing, and financial analysis.", icon: "🏦", count: 0 },
  { slug: "legal", name: "Legal", description: "AI agents that draft contracts, review documents, and ensure compliance.", icon: "⚖️", count: 0 },
  { slug: "general-purpose", name: "General Purpose", description: "Versatile AI agents that can handle a wide range of tasks.", icon: "🤖", count: 0 },
];

// Seed data — will be replaced by Supabase later
export const agents: Agent[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    tagline: "Anthropic's autonomous coding agent in your terminal",
    description: "Claude Code is an agentic coding tool by Anthropic that lives in your terminal. It can understand your codebase, make edits across multiple files, run commands, and handle complex software engineering tasks autonomously. It uses Claude's 200K context window to deeply understand project context.",
    category: "coding-dev",
    pricing: "paid",
    priceFrom: "$20/mo",
    url: "https://claude.ai",
    features: ["Multi-file editing", "Terminal integration", "Git-aware", "200K context", "Autonomous debugging", "Test generation"],
    useCases: ["Build full features from scratch", "Debug complex issues", "Refactor codebases", "Write tests"],
    rating: 4.8,
    reviewCount: 2340,
    featured: true,
    addedAt: "2025-01-15",
  },
  {
    slug: "devin",
    name: "Devin",
    tagline: "The first AI software engineer",
    description: "Devin is an autonomous AI software engineer by Cognition Labs. It can plan, code, debug, and deploy entire projects. It has its own code editor, browser, and terminal, working like a junior developer on your team.",
    category: "coding-dev",
    pricing: "paid",
    priceFrom: "$500/mo",
    url: "https://devin.ai",
    features: ["Full IDE environment", "Browser access", "Autonomous planning", "Git integration", "Deployment", "Multi-step reasoning"],
    useCases: ["Build MVPs", "Fix GitHub issues", "Automate DevOps", "Code migrations"],
    rating: 4.2,
    reviewCount: 890,
    featured: true,
    addedAt: "2024-12-01",
  },
  {
    slug: "intercom-fin",
    name: "Intercom Fin",
    tagline: "AI customer service agent that resolves 50%+ of queries instantly",
    description: "Fin is Intercom's AI agent that resolves customer support queries using your existing help center content. It provides accurate, conversational answers and seamlessly hands off to human agents when needed.",
    category: "customer-support",
    pricing: "paid",
    priceFrom: "$0.99/resolution",
    url: "https://intercom.com/fin",
    features: ["Knowledge base RAG", "Multi-language", "Handoff to humans", "Custom personas", "Analytics dashboard", "Omnichannel"],
    useCases: ["Reduce support ticket volume", "24/7 customer support", "Scale without hiring", "Multilingual support"],
    rating: 4.5,
    reviewCount: 1560,
    featured: true,
    addedAt: "2024-11-20",
  },
  {
    slug: "11x-alice",
    name: "11x Alice",
    tagline: "AI SDR that books meetings while you sleep",
    description: "Alice by 11x is an AI Sales Development Representative. She researches prospects, writes personalized emails, handles follow-ups, and books meetings directly on your calendar. Works 24/7 with zero management overhead.",
    category: "sales-outreach",
    pricing: "paid",
    priceFrom: "$5,000/mo",
    url: "https://11x.ai",
    features: ["Prospect research", "Personalized emails", "Auto follow-ups", "Calendar booking", "CRM integration", "A/B testing"],
    useCases: ["Outbound sales automation", "Lead qualification", "Meeting booking", "Pipeline generation"],
    rating: 4.3,
    reviewCount: 420,
    featured: false,
    addedAt: "2024-10-15",
  },
  {
    slug: "jasper-ai",
    name: "Jasper AI",
    tagline: "AI marketing agent for enterprise content teams",
    description: "Jasper is an AI marketing platform that helps teams create on-brand content at scale. It includes an AI agent that can research topics, write blog posts, create social media content, and maintain brand voice consistency across all channels.",
    category: "content-creation",
    pricing: "paid",
    priceFrom: "$49/mo",
    url: "https://jasper.ai",
    features: ["Brand voice", "SEO optimization", "Multi-channel", "Team collaboration", "Template library", "Analytics"],
    useCases: ["Blog writing", "Social media", "Email campaigns", "Ad copy"],
    rating: 4.4,
    reviewCount: 3200,
    featured: false,
    addedAt: "2024-09-01",
  },
  {
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "AI research agent with real-time web access",
    description: "Perplexity is an AI-powered research and answer engine. It searches the web in real-time, synthesizes information from multiple sources, and provides cited answers. Its Pro Search feature acts as a research agent, breaking complex queries into sub-questions.",
    category: "research",
    pricing: "freemium",
    priceFrom: "Free / $20/mo Pro",
    url: "https://perplexity.ai",
    features: ["Real-time web search", "Source citations", "Pro Search", "File upload", "API access", "Collections"],
    useCases: ["Market research", "Competitive analysis", "Academic research", "Fact-checking"],
    rating: 4.7,
    reviewCount: 5600,
    featured: true,
    addedAt: "2024-08-15",
  },
  {
    slug: "lindy-ai",
    name: "Lindy.ai",
    tagline: "Build your own AI workforce — no code required",
    description: "Lindy lets you create custom AI agents (called Lindies) that automate any workflow. Connect to 3000+ integrations, chain agents together, and build an entire AI workforce. From email triage to meeting scheduling to CRM updates.",
    category: "productivity",
    pricing: "freemium",
    priceFrom: "Free / $49/mo",
    url: "https://lindy.ai",
    features: ["No-code builder", "3000+ integrations", "Agent chaining", "Custom triggers", "Human-in-the-loop", "Templates"],
    useCases: ["Email management", "Meeting scheduling", "CRM automation", "Customer onboarding"],
    rating: 4.6,
    reviewCount: 780,
    featured: false,
    addedAt: "2024-11-01",
  },
  {
    slug: "harvey-ai",
    name: "Harvey AI",
    tagline: "AI agent for legal professionals",
    description: "Harvey is an AI platform built specifically for legal work. It can draft contracts, review documents, conduct legal research, and ensure regulatory compliance. Used by top law firms including Allen & Overy.",
    category: "legal",
    pricing: "paid",
    priceFrom: "Custom pricing",
    url: "https://harvey.ai",
    features: ["Contract drafting", "Document review", "Legal research", "Compliance checks", "Case analysis", "Citation verification"],
    useCases: ["Contract review", "Due diligence", "Legal research", "Regulatory compliance"],
    rating: 4.5,
    reviewCount: 340,
    featured: false,
    addedAt: "2024-07-20",
  },
  {
    slug: "julius-ai",
    name: "Julius AI",
    tagline: "AI data analyst that turns spreadsheets into insights",
    description: "Julius is an AI data analysis agent. Upload any dataset — CSV, Excel, Google Sheets — and ask questions in plain English. It writes Python/R code, creates visualizations, and generates reports automatically.",
    category: "data-analysis",
    pricing: "freemium",
    priceFrom: "Free / $20/mo",
    url: "https://julius.ai",
    features: ["Natural language queries", "Auto-visualization", "Python/R execution", "Excel/CSV support", "Report generation", "Chart export"],
    useCases: ["Data exploration", "Business reporting", "Statistical analysis", "Dashboard creation"],
    rating: 4.6,
    reviewCount: 1200,
    featured: false,
    addedAt: "2024-10-01",
  },
  {
    slug: "crew-ai",
    name: "CrewAI",
    tagline: "Open-source framework for orchestrating AI agent teams",
    description: "CrewAI is an open-source Python framework for building and orchestrating teams of AI agents. Each agent has a role, backstory, and tools. They collaborate to complete complex tasks. 44K+ GitHub stars.",
    category: "general-purpose",
    pricing: "open-source",
    url: "https://crewai.com",
    features: ["Multi-agent orchestration", "Role-based agents", "Memory system", "Tool integration", "Process types", "Human-in-the-loop"],
    useCases: ["Research automation", "Content pipelines", "Data processing", "Custom workflows"],
    rating: 4.4,
    reviewCount: 2100,
    featured: true,
    addedAt: "2024-06-01",
  },
  {
    slug: "bland-ai",
    name: "Bland AI",
    tagline: "AI phone agent that makes and receives calls",
    description: "Bland AI provides AI-powered phone agents that can make and receive phone calls. They sound natural, handle objections, and integrate with your CRM. Used for sales calls, appointment scheduling, and customer follow-ups.",
    category: "sales-outreach",
    pricing: "paid",
    priceFrom: "$0.09/min",
    url: "https://bland.ai",
    features: ["Natural voice", "Inbound & outbound", "CRM integration", "Call transcripts", "Custom scripts", "Transfer to human"],
    useCases: ["Cold calling", "Appointment booking", "Follow-up calls", "Lead qualification"],
    rating: 4.1,
    reviewCount: 560,
    featured: false,
    addedAt: "2024-09-15",
  },
  {
    slug: "relevance-ai",
    name: "Relevance AI",
    tagline: "Build and deploy AI agents for any business process",
    description: "Relevance AI is a no-code platform for building AI agents and automations. Create agents that can research, analyze, write, and take actions across your tools. Features a visual builder and pre-built templates.",
    category: "general-purpose",
    pricing: "freemium",
    priceFrom: "Free / $19/mo",
    url: "https://relevanceai.com",
    features: ["No-code builder", "Visual workflows", "API integrations", "Templates", "Team collaboration", "Custom tools"],
    useCases: ["Sales research", "Content generation", "Data enrichment", "Process automation"],
    rating: 4.3,
    reviewCount: 450,
    featured: false,
    addedAt: "2024-08-01",
  },
];

// Compute category counts
categories.forEach((cat) => {
  cat.count = agents.filter((a) => a.category === cat.slug).length;
});
