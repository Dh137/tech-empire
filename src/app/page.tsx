import NewsCard from "@/components/cards/NewsCard";
import { mockArticles } from "@/lib/mock/seed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-cyan-950">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Tech Empire</h1>
          <p className="text-white/60 mt-2">AI-curated. Human-approved. Zero fluff.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.map((a, i) => (
            <NewsCard key={a.id} article={a} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}