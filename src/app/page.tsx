import NewsCard from "@/components/cards/NewsCard";

async function getArticles() {
  const res = await fetch(`${process.env.SCRAPER_URL}/articles`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Scraper unreachable");
  return res.json();
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-cyan-950">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Tech Empire</h1>
          <p className="text-white/60 mt-2">AI-curated. Human-approved. Zero fluff.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a: any, i: number) => (
            <NewsCard key={a.id} article={a} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}