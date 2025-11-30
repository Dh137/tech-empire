export default function NotFound() {
    return (
      <main className="min-h-screen grid place-content-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-cyan-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Article not found</h1>
          <p className="mt-2 text-white/60">The story may have moved.</p>
          <a href="/" className="mt-6 inline-block text-cyan-400 hover:text-cyan-300">← Back to feed</a>
        </div>
      </main>
    );
  }