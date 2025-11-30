"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";
import { Article } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function NewsCard({ article, index }: { article: Article; index: number }) {
  return (
    <Link href={`/article/${article.slug}`} passHref>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
        className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
      >
        <div className="relative h-56 w-full">
          <img
            src={article.cover}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{article.source}</Badge>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">{article.title}</h3>
          <p className="mt-2 text-sm text-white/70 line-clamp-2">{article.excerpt}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {article.tags.map((t) => (
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-1 text-cyan-400 text-sm font-medium"
            >
              Read <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>

        {/* swipe hint on mobile */}
        <div className="absolute bottom-3 right-3 md:hidden text-white/40">
          <Bookmark className="w-5 h-5" />
        </div>
      </motion.div>
    </Link>
  );
}