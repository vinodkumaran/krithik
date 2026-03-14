import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Yercaud Travel Guide: Salem's Hidden Hill Station Gem",
      "description": "Discover Yercaud — Salem's hidden hill station in the Shevaroy Hills at 1,515m. Top attractions, best season, coffee estates, and travel tips. Call 8925001292 to plan your trip.",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/hill-stations/yercaud-travel-guide" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Hill Stations", "item": "https://www.krithiktours.com/blog/hill-stations" },
        { "@type": "ListItem", "position": 4, "name": "Yercaud Travel Guide", "item": "https://www.krithiktours.com/blog/hill-stations/yercaud-travel-guide" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "How far is Yercaud from Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yercaud is approximately 340 km from Chennai. The drive takes about 5.5 to 6.5 hours via NH 44 to Salem and then up the Shevaroy Hills road. Salem is just 32 km from Yercaud." } },
        { "@type": "Question", "name": "How to reach Yercaud from Salem?", "acceptedAnswer": { "@type": "Answer", "text": "Yercaud is 32 km from Salem. You can take a local bus from Salem new bus stand, hire a cab, or drive yourself. The ghat road has 20 hairpin bends and takes about 45 minutes to an hour to climb." } },
        { "@type": "Question", "name": "Is Yercaud better than Ooty?", "acceptedAnswer": { "@type": "Answer", "text": "Yercaud is called the 'Poor Man's Ooty' because it is less commercialized and more affordable. While Ooty has more tourist attractions, Yercaud offers a more peaceful, uncrowded experience with beautiful coffee and spice plantations, making it ideal for those seeking tranquility." } }
      ]
    },
    {
      "@type": "TouristAttraction",
      "name": "Yercaud",
      "description": "Yercaud is a hill station in the Shevaroy Hills of the Eastern Ghats in Salem district, Tamil Nadu, at an altitude of 1,515 metres.",
      "address": { "@type": "PostalAddress", "addressLocality": "Yercaud", "addressRegion": "Tamil Nadu", "addressCountry": "India" }
    }
  ]
};

export default function YercaudTravelGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=1200&h=675&fit=crop"
          alt="Yercaud hill station Shevaroy Hills Salem Tamil Nadu aerial view"
          title="Yercaud — Salem's Hill Station Gem"
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
            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Hill Stations</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Tamil Nadu</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Yercaud Travel Guide: Salem's Hidden Hill Station Gem
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 9 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Yercaud, Salem, Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-green-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-green-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Hill Stations</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Yercaud Travel Guide</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            Tucked in the <strong>Shevaroy Hills of the Eastern Ghats</strong> in <strong>Salem district, Tamil Nadu</strong>, <strong>Yercaud</strong> sits at <strong>1,515 metres (4,970 feet)</strong> above sea level. Affectionately called the <em>"Poor Man's Ooty"</em>, this Yercaud travel guide reveals a hill station that is refreshingly uncrowded, intensely green, and deeply rich in coffee, spice, and citrus plantations. The name Yercaud derives from the Tamil words <em>"Yeri"</em> (lake) and <em>"Kadu"</em> (forest) — literally meaning <strong>"Lake Forest"</strong>. The best time to visit Yercaud is <strong>October to February</strong> when the climate is cool and clear.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready to plan your Yercaud trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We'll build your perfect itinerary!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Historical Background of Yercaud
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The history of Yercaud is intertwined with the broader story of British colonial development in South India. The region's recorded history begins with <strong>Major Galloway</strong>, who first cut a road to the Shevaroy Hills in <strong>1820</strong>, opening up the area to British administrators seeking respite from the plains. The British quickly recognized the potential of the cool Shevaroy Hills for coffee cultivation — and by the mid-19th century, the area had become a thriving coffee and orange plantation zone.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The British developed Yercaud as a <strong>sanatorium and hill retreat</strong> during the 19th century, planting coffee, pepper, jackfruit, and extensive orange orchards. The Shevaroy Temple, dedicated to the tribal deity Shevari or Servarayan, predates British settlement and represents the indigenous heritage of the Malai Vellalar community who have inhabited these hills for centuries. The Yercaud Summer Festival, celebrated every May, was established to showcase the region's horticulture and has grown into one of Tamil Nadu's beloved annual events.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The region gained administrative importance under the Madras Presidency, and post-independence it became part of Salem district of Tamil Nadu. The coffee estates of Yercaud — many still operational — offer a living connection to the colonial agricultural heritage of the Shevaroy Hills.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            Yercaud is home to the famous Shevaroy Hills Rose Park and hosts the only major Summer Festival in Tamil Nadu's lesser-known hill stations. The festival in May showcases local roses, coffee, and spices alongside cultural programmes.
          </div>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=675&fit=crop"
              alt="Yercaud coffee plantation Shevaroy Hills Salem Tamil Nadu"
              title="Coffee plantations of Yercaud"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Lush plantation forests in the Shevaroy Hills | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Top Attractions in Yercaud
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { name: "Yercaud Lake", desc: "A picturesque natural lake at the heart of the hill station. Boating is available and the lakeside garden is perfect for a leisurely stroll in the morning mist." },
              { name: "Lady's Seat", desc: "A stunning viewpoint offering panoramic views of the Salem plains and the distant reservoir. Famous for sunrise views — arrive early for the best experience." },
              { name: "Shevaroy Temple", desc: "An ancient temple dedicated to the tribal deity Shevari/Servarayan, located atop the highest peak of the Shevaroy Hills at 1,623m. Accessible by a short trek." },
              { name: "Botanical Garden", desc: "A well-maintained garden showcasing the rich flora of the Shevaroy Hills including rare orchids, tree ferns, and endemic plant species." },
              { name: "Killiyur Falls", desc: "A 300-foot waterfall hidden inside the forest, accessible via a scenic trek. Best during and after monsoon when it is in full flow." },
              { name: "Bear's Cave", desc: "A natural cave formation once used by bears, now a popular tourist spot with interesting rock formations and a cool, mystical atmosphere." },
              { name: "Anna Park", desc: "A public park with colourful flower gardens, children's play areas, and benches overlooking the valley — ideal for a relaxed afternoon." },
              { name: "Coffee and Spice Plantations", desc: "Several estates offer guided walks through coffee, pepper, cardamom, and vanilla plantations. Fresh coffee tasting is a highlight." },
              { name: "Pagoda Point", desc: "A scenic viewpoint shaped like a pagoda, offering 270-degree views of the surrounding valleys and the distant plains of Salem." }
            ].map((place, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{place.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Plan your Yercaud trip with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Comfortable cabs, expert local guidance!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Best Time to Visit Yercaud
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The ideal time for a Yercaud travel guide visit is <strong>October to February</strong> when the climate is pleasantly cool (12–20°C), the skies are clear, and the landscape is at its greenest after the monsoon. The <strong>Yercaud Summer Festival</strong> in <strong>May</strong> is a great time to experience local culture, flower exhibitions, and the annual parade. Monsoon (June–September) brings heavy rains and mist — beautiful but some roads can be slippery.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            How to Reach Yercaud
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance</th>
                  <th className="px-4 py-3 text-left font-bold">Travel Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Salem (nearest city)", "32 km", "~1 hr (ghat road)"],
                  ["Chennai", "340 km", "~6 hrs via NH 44"],
                  ["Bangalore", "230 km", "~4 hrs via NH 44"],
                  ["Coimbatore", "170 km", "~3.5 hrs"],
                  ["Madurai", "280 km", "~5 hrs"],
                ].map(([from, dist, time], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/30'}>
                    <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{from}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dist}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?w=1200&h=675&fit=crop"
              alt="Yercaud lake view hill station Tamil Nadu travel"
              title="Serene lake in the Shevaroy Hills"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Peaceful lake in the hills | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Yercaud: Known For
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { item: "Coffee", desc: "Yercaud coffee is famous across Tamil Nadu. Estate-grown Arabica and Robusta blends are available for purchase directly." },
              { item: "Pepper & Spices", desc: "Black pepper, cardamom, and vanilla grown on the hillside estates are available in local markets at farm-fresh prices." },
              { item: "Oranges", desc: "The oranges of Yercaud are exceptionally sweet due to the cool climate. The orange season peaks October–December." },
              { item: "Roses", desc: "Yercaud's cool climate is perfect for rose cultivation. The Shevaroy Hills Rose Park showcases hundreds of varieties." },
            ].map((p) => (
              <div key={p.item} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-green-700 mb-2">{p.item}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Frequently Asked Questions about Yercaud
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "How far is Yercaud from Chennai?", a: "Yercaud is approximately 340 km from Chennai. The drive takes about 5.5 to 6.5 hours via NH 44 to Salem, then the scenic ghat road to Yercaud." },
              { q: "How to reach Yercaud from Salem?", a: "Yercaud is 32 km from Salem. You can take a local bus from Salem new bus stand, hire a cab, or drive. The ghat road has 20 hairpin bends and takes about 45 minutes." },
              { q: "Is Yercaud better than Ooty?", a: "Yercaud is less commercialized and more peaceful than Ooty — ideal for travellers seeking tranquility and natural beauty without the tourist crowds. Ooty has more developed infrastructure; Yercaud offers a more authentic hill experience." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready to visit Yercaud?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Krithik Tours will plan your perfect Yercaud escape!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Plan Your Yercaud Trip Now</h3>
          <p className="text-green-100 mb-6">Krithik Tours & Travels offers customized Yercaud tour packages from Coimbatore, Salem, Chennai and Bangalore.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow">
              <Phone size={18} /> Call 8925001292
            </a>
            <Link to="/yercaud-tour-package-itinerary" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              <MapPin size={18} /> View Yercaud Packages
            </Link>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
          <div className="space-y-3">
            <Link to="/blog/hill-stations/kodaikanal-travel-guide" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
            </Link>
            <Link to="/blog/itineraries/yercaud-2-days-1-night-itinerary" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem
            </Link>
            <Link to="/blog/hill-stations/munnar-travel-guide" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Munnar Travel Guide: Kerala's Most Stunning Hill Station
            </Link>
            <Link to="/blog/travel-tips/mysore-travel-tips" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Mysore Travel Tips: Everything You Need to Know Before You Visit
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors">
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
