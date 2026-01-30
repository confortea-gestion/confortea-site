import { getCollection } from "astro:content";

export async function GET() {
  const pages = [
    "",
    "/services",
    "/solutions",
    "/solutions/particuliers",
    "/solutions/professionnels",
    "/contact",
    "/a-propos",
    "/mentions-legales",
    "/confidentialite",
    "/reglementation"
  ];

  const urls = pages
    .map(
      (path) => `
  <url>
    <loc>https://confortea.net${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}