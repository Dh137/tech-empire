export async function POST() {
    const res = await fetch(`${process.env.SCRAPER_URL}/scrape`, { method: "POST" });
    if (!res.ok) return new Response("Scrape failed", { status: 500 });
    const data = await res.json();
    return Response.json(data);
  }