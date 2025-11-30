export async function GET() {
    const res = await fetch(`${process.env.SCRAPER_URL}/articles`);
    if (!res.ok) return new Response("Scraper error", { status: 500 });
    const data = await res.json();
    return Response.json(data);
  }