import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.krithiktoursandtravels.com';

const urls = [
  { loc: '/', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/palani-temple-one-day-trip', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/palani-one-day-temple-trip', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/palani-tourist-places', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/palani-history-temple-history', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/arupadai-veedu-murugan-temple-tour', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/kodaikanal-two-days-trip', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/kodaikanal-2-day-sightseeing-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/yercaud-tour-package-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/yercaud-hill-station-tour-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/ooty-hill-station-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/munnar-nature-tour-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/alleppey-overnight-houseboat-stay', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/mysore-heritage-tour-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/coorg-coffee-estate-tour-plan', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/valparai-tea-estate-sightseeing-tour', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/coimbatore-marudhamalai-one-day-trip', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/nri-south-india-tour-pickup-drop-ooty', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/malaysia-to-south-india-tour-package', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/singapore-to-south-india-tour-package', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/pilgrimage-special-tour-malaysia-singapore-nri', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/hire', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/blog', lastmod: '2026-08-03T00:22:54+01:00', priority: '1.0' },
  { loc: '/blog/palani-temple-history', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.8' },
  { loc: '/blog/hill-stations/kodaikanal-travel-guide', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/hill-stations/yercaud-travel-guide', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/hill-stations/munnar-travel-guide', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/travel-tips/kodaikanal-travel-tips', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/travel-tips/munnar-travel-tips', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/travel-tips/alleppey-houseboat-tips', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/travel-tips/mysore-travel-tips', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/history-culture/kodaikanal-history', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/history-culture/mysore-history', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/history-culture/munnar-history-culture', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/history-culture/alleppey-history', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/itineraries/kodaikanal-3-days-2-nights-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/itineraries/yercaud-2-days-1-night-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/itineraries/alleppey-houseboat-2-days-1-night', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/blog/itineraries/mysore-3-days-itinerary', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.6' },
  { loc: '/palani-temple-one-day-trip/', lastmod: '2026-08-03T00:22:54+01:00', priority: '0.8' },
  { loc: '/palani-history-temple-history/', lastmod: '2026-08-03T00:23:04+01:00', priority: '0.8' },
  { loc: '/kodaikanal-two-days-trip/', lastmod: '2026-08-03T00:23:04+01:00', priority: '0.8' },
  { loc: '/blog/', lastmod: '2026-08-03T00:23:05+01:00', priority: '0.8' },
  { loc: '/nri-south-india-tour-pickup-drop-ooty/', lastmod: '2026-08-03T00:23:05+01:00', priority: '0.8' },
  { loc: '/yercaud-tour-package-itinerary/', lastmod: '2026-08-03T00:23:05+01:00', priority: '0.8' },
  { loc: '/malaysia-to-south-india-tour-package/', lastmod: '2026-08-03T00:23:06+01:00', priority: '0.8' },
  { loc: '/blog/travel-tips', lastmod: '2026-08-03T00:23:06+01:00', priority: '0.8' },
  { loc: '/coimbatore-marudhamalai-one-day-trip/', lastmod: '2026-08-03T00:23:06+01:00', priority: '0.8' },
  { loc: '/blog/travel-tips/ooty-toy-train-timings-2027', lastmod: '2026-08-03T00:23:07+01:00', priority: '0.6' },
  { loc: '/singapore-to-south-india-tour-package/', lastmod: '2026-08-03T00:23:08+01:00', priority: '0.8' },
  { loc: '/blog/hill-stations', lastmod: '2026-08-03T00:23:08+01:00', priority: '0.8' },
  { loc: '/telugu', lastmod: '2026-08-03T00:23:08+01:00', priority: '1.0' },
  { loc: '/blog/history-culture', lastmod: '2026-08-03T00:23:08+01:00', priority: '0.8' },
  { loc: '/tamil', lastmod: '2026-08-03T00:23:09+01:00', priority: '1.0' },
  { loc: '/blog/itineraries', lastmod: '2026-08-03T00:23:09+01:00', priority: '0.8' },
  { loc: '/kannada', lastmod: '2026-08-03T00:23:10+01:00', priority: '1.0' },
  { loc: '/hindi', lastmod: '2026-08-03T00:23:11+01:00', priority: '1.0' },
  { loc: '/customer-testimonials', lastmod: '2026-08-03T00:23:15+01:00', priority: '1.0' },
  { loc: '/videos', lastmod: '2026-08-03T00:23:17+01:00', priority: '1.0' },
];

if (urls.length === 0) {
  throw new Error('[sitemap] No URLs found — refusing to generate empty sitemap.');
}

const urlEntries = urls.map((u) => {
  const loc = `${BASE_URL}${u.loc}`;
  return `<url>
\t<loc>${loc}</loc>
\t<lastmod>${u.lastmod}</lastmod>
\t<priority>${u.priority}</priority>
</url>`;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
\t\t<!--\tcreated by vinod kumaran\t-->
\t\t<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;

const robotsTxt = `# ============================================
# All search engine and LLM/AI bots allowed
# ============================================

User-agent: *
Allow: /

# --- Google ---
User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

# --- OpenAI / ChatGPT ---
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

# --- Anthropic / Claude ---
User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# --- Perplexity ---
User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

# --- Microsoft / Bing ---
User-agent: Bingbot
Allow: /

User-agent: BingPreview
Allow: /

# --- Amazon ---
User-agent: Amazonbot
Allow: /

# --- Apple ---
User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

# --- Meta / Facebook ---
User-agent: Meta-ExternalAgent
Allow: /

User-agent: Meta-ExternalFetcher
Allow: /

User-agent: FacebookBot
Allow: /

# --- ByteDance / TikTok ---
User-agent: Bytespider
Allow: /

# --- Common Crawl ---
User-agent: CCBot
Allow: /

# --- DuckDuckGo ---
User-agent: DuckDuckBot
Allow: /

# --- Yandex ---
User-agent: YandexBot
Allow: /

# --- Baidu ---
User-agent: Baiduspider
Allow: /

# --- Sogou ---
User-agent: Sogou
Allow: /

# --- Exalead ---
User-agent: Exabot
Allow: /

# --- Majestic ---
User-agent: MJ12bot
Allow: /

# --- Ahrefs ---
User-agent: AhrefsBot
Allow: /

# --- Semrush ---
User-agent: SemrushBot
Allow: /

# --- Mojeek ---
User-agent: MojeekBot
Allow: /

# --- You.com ---
User-agent: YouBot
Allow: /

# --- Cohere ---
User-agent: cohere-ai
Allow: /

# --- Diffbot ---
User-agent: Diffbot
Allow: /

# --- Imagesift ---
User-agent: ImagesiftBot
Allow: /

# --- Omigli ---
User-agent: OmigiliBot
Allow: /

# --- webz.io ---
User-agent: webz.io
Allow: /

# --- Zoominfobot ---
User-agent: Zoominfobot
Allow: /

# --- LLMs.txt ---
# Information for AI/LLM systems about this website
# https://www.krithiktoursandtravels.com/llms.txt

# --- Sitemap ---
Sitemap: ${BASE_URL}/sitemap.xml
`;

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');

console.log(`[sitemap] Generated sitemap.xml with ${urls.length} URLs`);
console.log('[sitemap] Generated robots.txt');
