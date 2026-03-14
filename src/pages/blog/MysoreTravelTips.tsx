import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Mysore Travel Tips: Everything You Need to Know Before You Visit",
      "description": "Complete Mysore travel tips — best time, Dasara festival, Palace visit, day trips to Coorg and Ooty, shopping for silk and sandalwood, food guide. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/travel-tips/mysore-travel-tips" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Travel Tips", "item": "https://www.krithiktours.com/blog/travel-tips" },
        { "@type": "ListItem", "position": 4, "name": "Mysore Travel Tips", "item": "https://www.krithiktours.com/blog/travel-tips/mysore-travel-tips" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best time to visit Mysore?", "acceptedAnswer": { "@type": "Answer", "text": "October is the absolute best time to visit Mysore for the world-famous Dasara Festival — a 10-day celebration with illuminated palace, processions, and cultural events. October to March is the best overall period with pleasant temperatures (15–28°C). Avoid April to June when it can be very hot." } },
        { "@type": "Question", "name": "How do I get to Mysore from Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Mysore is 145 km from Bangalore. The fastest option is the Namma Metro or private cab via the Mysore–Bangalore expressway (3 hours). KSRTC buses run frequently from Bangalore's Kempegowda Bus Stand. The Shatabdi Express train covers the distance in 2 hours." } },
        { "@type": "Question", "name": "What should I buy in Mysore?", "acceptedAnswer": { "@type": "Answer", "text": "Mysore is famous for: Mysore Silk Sarees (buy from government-run Cauvery Emporium or Mysore Silk Factory), Sandalwood products (soaps, oil, carvings), Mysore jasmine (Mallige) flowers and garlands, Mysore agarbathi (incense), and the famous Mysore Pak sweet." } }
      ]
    },
    {
      "@type": "TouristAttraction",
      "name": "Mysore Palace",
      "description": "Mysore Palace is one of India's most visited monuments, the official residence of the Wadiyar dynasty in Mysore, Karnataka.",
      "address": { "@type": "PostalAddress", "addressLocality": "Mysore", "addressRegion": "Karnataka", "addressCountry": "India" }
    }
  ]
};

export default function MysoreTravelTips() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&h=675&fit=crop"
          alt="Mysore Palace travel tips Karnataka tourism guide illuminated"
          title="Mysore Palace — Karnataka's Royal Heritage"
          loading="lazy"
          width="1200"
          height="675"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <Link to="/blog" className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 text-sm font-medium mb-4 transition-colors">
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Travel Tips</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Karnataka</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Mysore Travel Tips: Everything You Need to Know Before You Visit
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 9 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Mysore, Karnataka</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-blue-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Travel Tips</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Mysore Travel Tips</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Mysore</strong> — the cultural capital of Karnataka and home to one of India's most magnificent palaces — is a city that rewards careful planning. These <strong>Mysore travel tips</strong> will help you make the most of your visit, whether you're attending the legendary <strong>Dasara Festival</strong>, exploring the Wadiyar royal heritage, planning day trips to Coorg or Ooty, or shopping for world-famous Mysore silk. At just 145 km from Bangalore, Mysore is an ideal short break or an enriching stop on a South India grand tour.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready to plan your Mysore trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We'll build your perfect Mysore itinerary!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Why Visit Mysore: A Cultural Capital of South India
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mysore is the <strong>cultural capital of Karnataka</strong> — a city steeped in royal heritage, classical arts, and a standard of living that has historically set it apart from other Indian cities. The <strong>Mysore Palace (Amba Vilas)</strong>, illuminated by nearly 100,000 light bulbs every Sunday evening and during Dasara, is the second most visited monument in India after the Taj Mahal. The city is also celebrated for its silk weaving industry, sandalwood products, Dasara procession, and the legendary Mysore Pak — a rich ghee-based sweet.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>UNESCO-recognised Dasara celebrations</strong> — a 10-day festival in October — transform Mysore into a city of lights, music, and processions that attract over a million visitors annually. The sight of the gold-howdah elephant carrying the Chamundeshwari deity on the final procession day is an unforgettable spectacle.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            The Mysore Dasara celebration has a history of over 400 years, dating back to the Vijayanagara Empire. It was declared the state festival of Karnataka and attracts over 1 million visitors during the 10-day event in October. The palace illumination uses 97,000 bulbs that are switched on every Sunday evening and during special occasions.
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Best Time to Visit Mysore
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { period: "October (Dasara)", label: "Unmissable", desc: "The world-famous Dasara Festival transforms Mysore. Book hotels 3–4 months in advance. Witness the Jambu Savari procession, cultural events, and illuminated palace." },
              { period: "October – March", label: "Best Overall", desc: "Pleasant temperatures 15–28°C. Clear skies. Comfortable for sightseeing, day trips, and outdoor exploration. October and November are especially beautiful." },
              { period: "April – June", label: "Hot Season", desc: "Temperatures can reach 35–38°C. Not ideal for extensive sightseeing. Indoor attractions (Palace, museums, silk factory) remain comfortable." },
              { period: "July – September", label: "Monsoon", desc: "Moderate rainfall. Gardens are lush and green. Brindavan Gardens is particularly beautiful. Some outdoor activities may be limited." },
            ].map((s) => (
              <div key={s.period} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-bold text-gray-800">{s.period}</h3>
                  <span className="text-xs font-bold text-blue-600">{s.label}</span>
                </div>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Plan your Mysore trip with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Customized Mysore packages with comfortable cabs!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Top Things to Do in Mysore
          </h2>
          <div className="space-y-3 mb-8">
            {[
              { thing: "Mysore Palace Tour", desc: "Open daily 10AM–5:30PM. The palace is grandest on Sunday evenings and festivals when 97,000 bulbs illuminate the exterior. Audio guides available. Allow 1.5–2 hours." },
              { thing: "Chamundeshwari Temple", desc: "Atop Chamundi Hill (13 km from town). The 1,000-step climb to the goddess temple is a rewarding pilgrimage. The Nandi bull statue en route is one of Karnataka's most photographed landmarks." },
              { thing: "Brindavan Gardens", desc: "Musical fountain garden near KRS Dam, 19 km from Mysore. The illuminated fountain show runs every evening — arrive before sunset for the full experience." },
              { thing: "Mysore Zoo", desc: "One of India's oldest and best-maintained zoos, housing 168 species including white tigers, giraffes, and gorillas. Allow 2–3 hours." },
              { thing: "Devaraja Market", desc: "Mysore's iconic covered market overflowing with jasmine flowers, silk, spices, and fresh produce. A sensory feast — best visited in the morning." },
              { thing: "St Philomena's Church", desc: "A stunning neo-Gothic cathedral inspired by Cologne Cathedral, built in 1933. One of the largest churches in India with 175-foot twin spires." },
            ].map((t, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{t.thing}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Day Trips from Mysore
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { dest: "Coorg (Kodagu)", dist: "120 km / ~3 hrs", desc: "The 'Scotland of India' — coffee estates, misty hills, Namdroling Monastery (Golden Temple), and Abbey Falls." },
              { dest: "Ooty (Udhagamandalam)", dist: "165 km / ~4 hrs", desc: "Tamil Nadu's queen of hill stations. Botanical garden, Nilgiri Mountain Railway, and Ooty Lake." },
              { dest: "Srirangapatna", dist: "15 km / ~30 min", desc: "Tipu Sultan's capital. Ranganthittu Bird Sanctuary, Tipu Sultan's summer palace (Daria Daulat Bagh), and the historic fort." },
              { dest: "Wayanad (Kerala)", dist: "115 km / ~3 hrs", desc: "Tribal communities, tea plantations, Edakkal Caves, and wildlife sanctuaries of northern Kerala." },
            ].map((d) => (
              <div key={d.dest} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-700 mb-1">{d.dest}</h3>
                <div className="text-xs text-gray-500 mb-2">{d.dist}</div>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Shopping in Mysore: What to Buy
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { item: "Mysore Silk Sarees", tip: "Buy from the government-run Cauvery Emporium or the Mysore Silk Factory on Mananthody Road for guaranteed authentic quality." },
              { item: "Sandalwood Products", tip: "Pure sandalwood oil, soaps, and carvings from Government Sandal Oil Factory or Karnataka Soaps and Detergents Limited (KSDL) outlets." },
              { item: "Mysore Jasmine (Mallige)", tip: "Mysore jasmine is world-famous for its fragrance. Buy fresh garlands at Devaraja Market in the morning — they make wonderful offerings." },
              { item: "Mysore Pak (Sweet)", tip: "The original Mysore Pak is sold at Sri Krishna Sweets on Sayyaji Road — considered the most authentic version. Buy extra — they sell out fast." },
            ].map((s) => (
              <div key={s.item} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-blue-700 mb-2">{s.item}</h3>
                <p className="text-gray-600 text-sm">{s.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Getting to Mysore: Transport Tips
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance</th>
                  <th className="px-4 py-3 text-left font-bold">Best Option</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bangalore", "145 km", "Shatabdi Express (2 hrs) or expressway cab (3 hrs)"],
                  ["Chennai", "490 km", "Overnight train or cab (8 hrs)"],
                  ["Coimbatore", "200 km", "Cab via Ooty (4.5 hrs) or direct cab (5 hrs)"],
                  ["Bengaluru Airport (BLR)", "170 km", "Cab (3.5 hrs) — most convenient"],
                  ["Ooty", "165 km", "Cab via Gudalur (4 hrs)"],
                ].map(([from, dist, opt], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                    <td className="px-4 py-3 font-bold text-blue-700 border-b border-gray-100">{from}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dist}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm border-b border-gray-100">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=1200&h=675&fit=crop"
              alt="Mysore Brindavan Gardens night fountain Karnataka travel tips"
              title="Brindavan Gardens illuminated fountain"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Illuminated garden in Karnataka | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions about Mysore Travel Tips
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the best time to visit Mysore?", a: "October for Dasara Festival is unmissable. October to March overall is the best period with pleasant temperatures. Avoid April to June when temperatures can reach 38°C." },
              { q: "How do I get to Mysore from Bangalore?", a: "Mysore is 145 km from Bangalore. The Shatabdi Express covers the distance in 2 hours. By road via the expressway takes about 3 hours. KSRTC buses run frequently from Kempegowda Bus Stand." },
              { q: "What should I buy in Mysore?", a: "Top buys: Mysore silk sarees (from Cauvery Emporium), sandalwood products (from KSDL outlets), jasmine garlands (Devaraja Market), and Mysore Pak sweet (Sri Krishna Sweets)." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Book your Mysore trip with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We'll plan your perfect Mysore heritage tour!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Plan Your Mysore Trip Now</h3>
          <p className="text-blue-100 mb-6">Krithik Tours & Travels provides Mysore tour packages with comfortable A/C cabs, experienced local drivers, and optional Coorg/Ooty extensions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow">
              <Phone size={18} /> Call 8925001292
            </a>
            <Link to="/mysore-heritage-tour-itinerary" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              <MapPin size={18} /> View Mysore Packages
            </Link>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
          <div className="space-y-3">
            <Link to="/blog/history-culture/mysore-history" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Mysore History: The Royal City of Wadiyars and Tipu Sultan
            </Link>
            <Link to="/blog/itineraries/mysore-3-days-itinerary" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage
            </Link>
            <Link to="/blog/hill-stations/yercaud-travel-guide" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Yercaud Travel Guide: Salem's Hidden Hill Station Gem
            </Link>
            <Link to="/blog/travel-tips/alleppey-houseboat-tips" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Alleppey Boat Stay Tips: How to Plan the Perfect Houseboat Trip
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
