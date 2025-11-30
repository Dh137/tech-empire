import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Article } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Heart, MessageCircle, Share } from "lucide-react";

async function getArticle(slug: string): Promise<Article | null> {
  const res = await fetch(`${process.env.SCRAPER_URL}/articles`);
  if (!res.ok) return null;
  const list: Article[] = await res.json();
  return list.find((a) => a.slug === slug) ?? null;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ← unwrap the Promise
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-cyan-950">
      {/* sticky back button */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-white/60 text-sm">Back to feed</span>
        </div>
      </div>

      {/* hero section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src={article.cover}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-6 pb-10">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">{article.source}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{article.title}</h1>
            <p className="mt-4 text-lg text-white/80">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-white/60 text-sm">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <Link
                href={`https://${article.source.replace(/\s+/g, "-").toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm"
              >
                View original <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* content sections */}
      <section className="container mx-auto px-6 py-12 max-w-4xl space-y-12">
        {/* AI Summary */}
        <div className="prose prose-invert prose-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">AI Summary</h2>
          <p className="text-white/80">{article.aiSummary}</p>
        </div>

        {/* Why it matters */}
        <div className="prose prose-invert prose-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">Why this matters</h2>
          <p className="text-white/80">{article.whyItMatters}</p>
        </div>

        {/* Counter-perspective */}
        <div className="prose prose-invert prose-lg">
          <h2 className="text-2xl font-semibold text-white mb-3">Counter-perspective</h2>
          <p className="text-white/80">{article.counterPerspective}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {/* Emoji reactions bar */}
        <div className="flex items-center gap-6 text-white/60">
          <button className="flex items-center gap-2 hover:text-red-400 transition">
            <Heart className="w-5 h-5" /> <span>42</span>
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400 transition">
            <MessageCircle className="w-5 h-5" /> <span>7</span>
          </button>
          <button className="flex items-center gap-2 hover:text-green-400 transition">
            <Share className="w-5 h-5" /> <span>Share</span>
          </button>
        </div>
      </section>
    </main>
  );
}