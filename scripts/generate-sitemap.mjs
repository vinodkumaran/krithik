import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.krithiktoursandtravels.com';

const HREFLANG_ROUTES = [
  { path: '/', hreflang: 'en' },
  { path: '/tamil', hreflang: 'ta' },
  { path: '/hindi', hreflang: 'hi' },
  { path: '/telugu', hreflang: 'te' },
  { path: '/kannada', hreflang: 'kn' },
];

const EXCLUDED = ['*', '/404', '/admin', '/dashboard', '/login', '/api'];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly', hreflang: true },
  { path: '/tamil', priority: '0.9', changefreq: 'weekly', hreflang: true },
  { path: '/hindi', priority: '0.9', changefreq: 'weekly', hreflang: true },
  { path: '/telugu', priority: '0.9', changefreq: 'weekly', hreflang: true },
  { path: '/kannada', priority: '0.9', changefreq: 'weekly', hreflang: true },
  { path: '/hire', priority: '0.9', changefreq: 'monthly', hreflang: false },
  { path: '/customer-testimonials', priority: '0.7', changefreq: 'weekly', hreflang: false },
  { path: '/videos', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/palani-temple-one-day-trip', priority: '0.9', changefreq: 'monthly', hreflang: false },
  { path: '/kodaikanal-two-days-trip', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/yercaud-tour-package-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/palani-history-temple-history', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/coimbatore-marudhamalai-one-day-trip', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/nri-south-india-tour-pickup-drop-ooty', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/malaysia-to-south-india-tour-package', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/singapore-to-south-india-tour-package', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/palani-one-day-temple-trip', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/alleppey-overnight-houseboat-stay', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/yercaud-hill-station-tour-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/munnar-nature-tour-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/kodaikanal-2-day-sightseeing-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/mysore-heritage-tour-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/ooty-hill-station-itinerary', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/coorg-coffee-estate-tour-plan', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/valparai-tea-estate-sightseeing-tour', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/pilgrimage-special-tour-malaysia-singapore-nri', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/palani-tourist-places', priority: '0.9', changefreq: 'monthly', hreflang: false },
  { path: '/arupadai-veedu-murugan-temple-tour', priority: '0.8', changefreq: 'monthly', hreflang: false },
  { path: '/blog', priority: '0.8', changefreq: 'weekly', hreflang: false },
  { path: '/blog/palani-temple-history', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/hill-stations/kodaikanal-travel-guide', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/hill-stations/yercaud-travel-guide', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/hill-stations/munnar-travel-guide', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/travel-tips/kodaikanal-travel-tips', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/travel-tips/munnar-travel-tips', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/travel-tips/alleppey-houseboat-tips', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/travel-tips/mysore-travel-tips', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/history-culture/kodaikanal-history', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/history-culture/mysore-history', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/history-culture/munnar-history-culture', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/history-culture/alleppey-history', priority: '0.6', changefreq: 'monthly', hreflang: false },
  { path: '/blog/itineraries/kodaikanal-3-days-2-nights-itinerary', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/itineraries/yercaud-2-days-1-night-itinerary', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/itineraries/alleppey-houseboat-2-days-1-night', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/itineraries/mysore-3-days-itinerary', priority: '0.7', changefreq: 'monthly', hreflang: false },
  { path: '/blog/travel-tips/ooty-toy-train-timings-2027', priority: '0.7', changefreq: 'monthly', hreflang: false },
];

const validRoutes = routes.filter((r) => !EXCLUDED.includes(r.path) && !r.path.includes(':'));

if (validRoutes.length === 0) {
  throw new Error('[sitemap] No routes found — refusing to generate empty sitemap.');
}

const today = new Date().toISOString().split('T')[0];

const hreflangLinks = (route) => {
  if (!route.hreflang) return '';
  return HREFLANG_ROUTES.map(
    (h) =>
      `\n    <xhtml:link rel="alternate" hreflang="${h.hreflang}" href="${BASE_URL}${h.path}"/>`
  ).join('') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/"/>`;
};

const urlEntries = validRoutes.map((route) => {
  const loc = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;
  return `  <url>
    <loc>${loc}</loc>${hreflangLinks(route)}
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
});

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
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

console.log(`[sitemap] Generated sitemap.xml with ${validRoutes.length} URLs`);
console.log('[sitemap] Generated robots.txt');
