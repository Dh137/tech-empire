import { Article } from "@/lib/types";

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "iPhone 17 Pro Leak: Solid-State Buttons Are Back",
    slug: "iphone-17-pro-leak-solid-state-buttons",
    excerpt: "Supply-chain report says Apple solved yield issues for haptic volume keys.",
    cover: "https://images.unsplash.com/photo-1603921327125-6e2b4f7a4be5?auto=format&fit=crop&w=1200&q=80",
    source: "9to5Mac",
    publishedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    aiSummary: "Apple will revert to solid-state buttons on iPhone 17 Pro after yield problems in ’25.",
    whyItMatters: "Fewer moving parts = better durability + bigger battery space.",
    counterPerspective: "Solid-state buttons still lack tactile feedback loved by power users.",
    tags: ["Mobile", "Apple"],
  },
  {
    id: "2",
    title: "Google’s Gemini 1.5 Beats GPT-4o on Code Generation",
    slug: "google-gemini-15-beats-gpt4o-code",
    excerpt: "New 2M context model scores 84 % on HumanEval, up from 74 %.",
    cover: "https://images.unsplash.com/photo-1677442135722-5f8ea49cec8a?auto=format&fit=crop&w=1200&q=80",
    source: "Ars Technica",
    publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    aiSummary: "Gemini 1.5 uses longer context window to outperform GPT-4o on coding benchmarks.",
    whyItMatters: "Cheaper, faster code assistance for indie hackers.",
    counterPerspective: "Benchmarks ≠ real-world IDE latency; GPT-4o still wins on UX polish.",
    tags: ["AI", "Dev"],
  },
];