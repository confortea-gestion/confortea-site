export async function GET() {
  const pages = [
    "https://confortea.net/",
    "https://confortea.net/services",
    "https://confortea.net/solutions",
    "https://confortea.net/solutions/particuliers",
    "https://confortea.net/solutions/professionnels",
    "https://confortea.net/contact",
    "https://confortea.net/a-propos",
    "https://confortea.net/mentions-legales",
    "https://confortea.net/confidentialite",
    "https://confortea.net/reglementation",
  ];

  const urls = pages
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
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
      "Content-Type": "application/xml",
    },
  });
}