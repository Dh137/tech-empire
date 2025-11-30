import NewsCard from "@/components/cards/NewsCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch(`/api/articles`);
      if (!res.ok) throw new Error("Failed to fetch articles");
      const data = await res.json();
      setArticles(data);
    }

    fetchArticles();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-cyan-950">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Tech Empire</h1>
            <p className="text-white/60 mt-2">AI-curated. Human-approved. Zero fluff.</p>
            <button
              onClick={() => fetch("/api/scrape", { method: "POST" })}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
            >
              Re-scrape
            </button>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any, i: number) => (
            <NewsCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}