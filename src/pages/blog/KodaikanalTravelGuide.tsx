import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu",
      "description": "Discover Kodaikanal — the Princess of Hill Stations at 2,133m in Tamil Nadu. Explore top 10 attractions, best time to visit, how to reach, and local food. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/hill-stations/kodaikanal-travel-guide" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Hill Stations", "item": "https://www.krithiktours.com/blog/hill-stations" },
        { "@type": "ListItem", "position": 4, "name": "Kodaikanal Travel Guide", "item": "https://www.krithiktours.com/blog/hill-stations/kodaikanal-travel-guide" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is Kodaikanal safe for solo travellers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Kodaikanal is considered one of the safest hill stations in Tamil Nadu. It is well-patrolled by local police, and the town is tourist-friendly. Solo travellers, especially women, should avoid isolated trails after dark." } },
        { "@type": "Question", "name": "What is the best season to visit Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "The best time to visit Kodaikanal is April to June (pleasant summer weather, ideal for sightseeing) and September to November (post-monsoon greenery). December to February can be very cold with fog." } },
        { "@type": "Question", "name": "How many days are needed for Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "A minimum of 2 nights and 3 days is recommended to cover all major attractions comfortably. If you plan to visit Berijam Lake and explore the forest areas, an extra day is advisable." } },
        { "@type": "Question", "name": "What is the nearest city to Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "Madurai is the nearest major city to Kodaikanal, approximately 120 km away. Dindigul (64 km) is the nearest town. The nearest railway station is Kodai Road (80 km) and nearest airport is Madurai International Airport." } }
      ]
    },
    {
      "@type": "TouristAttraction",
      "name": "Kodaikanal",
      "description": "Kodaikanal is a hill station in the Dindigul district of Tamil Nadu at an altitude of 2,133 metres, known as the Princess of Hill Stations.",
      "address": { "@type": "PostalAddress", "addressLocality": "Kodaikanal", "addressRegion": "Tamil Nadu", "addressCountry": "India" }
    }
  ]
};

export default function KodaikanalTravelGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop"
          alt="Kodaikanal lake aerial drone view Tamil Nadu hill station"
          title="Kodaikanal Lake — Princess of Hill Stations"
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
            Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 10 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Kodaikanal, Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-green-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-green-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Hill Stations</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Kodaikanal Travel Guide</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            Nestled in the <strong>Palani Hills of Dindigul district</strong> at an altitude of <strong>2,133 metres (6,998 feet)</strong>, <strong>Kodaikanal</strong> — fondly called the <em>Princess of Hill Stations</em> — is Tamil Nadu's most celebrated hill retreat. With its mist-draped valleys, star-shaped lake, cascading waterfalls, and a charming British colonial character, a Kodaikanal travel guide is the first thing every South India traveller needs. The best seasons are <strong>April–June</strong> (pleasant, ideal for sightseeing) and <strong>September–November</strong> (lush post-monsoon greenery).
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready to plan your Kodaikanal trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We'll build your perfect itinerary!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Historical Background of Kodaikanal
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Long before the British arrived, the <strong>Palaiyar and Pulayar tribes</strong> inhabited the dense Palani forests, living in harmony with the rich biodiversity of the hills. The recorded modern history of Kodaikanal begins in <strong>1845</strong>, when <strong>American Madura Mission missionaries</strong> — seeking relief from the scorching plains of Madurai — established a health retreat on these heights. The name "Kodai" is derived from the Tamil word meaning <em>"gift"</em>, while "kanal\" means <em>"forest"</em> — together: "Gift of the Forest."
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The town grew steadily under British patronage through the 1860s. In <strong>1863</strong>, the Collector of Madurai, <strong>Sir Vere Henry Levinge</strong>, ordered the construction of the now-iconic Kodaikanal Lake — an artificial star-shaped reservoir spread across 60 acres. Coaker's Walk, one of the most beloved viewpoints, was built in <strong>1872</strong> by <strong>Lieutenant Coaker</strong> of the British Civil Service. The Kodaikanal School, established in <strong>1901</strong>, is one of the oldest residential schools in India. By the early 20th century, Kodaikanal had become the preferred summer retreat for British officials from across South India.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            The Kurinji flower (Strobilanthes kunthiana) blooms once every 12 years, turning the Kodaikanal hills into a vast purple carpet. The last bloom was in 2018, and the next is expected in 2030. The Kurinji Andavar Temple is dedicated to Lord Murugan, the deity associated with this rare flower.
          </div>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=675&fit=crop"
              alt="Kodaikanal Pillar Rocks viewpoint Tamil Nadu hill station scenic view"
              title="Pillar Rocks, Kodaikanal"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Scenic valleys of Kodaikanal | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Top 10 Places to Visit in Kodaikanal
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { name: "Kodaikanal Lake", desc: "The crown jewel of Kodaikanal — a star-shaped artificial lake spread over 60 acres. Boating, cycling on the lakeside road, and morning walks are the highlights." },
              { name: "Coaker's Walk", desc: "A 1 km paved pedestrian path offering breathtaking panoramic views of the Palani Hills and plains below, especially magical during sunrise." },
              { name: "Pillar Rocks", desc: "Three giant vertical rocks rising 400 feet (122m) from a deep valley — one of Kodaikanal's most dramatic landscapes. Best at sunrise with misty surroundings." },
              { name: "Bear Shola Falls", desc: "A beautiful waterfall named after the bears that once roamed here. A pleasant short trek through shola forest leads to this serene cascade." },
              { name: "Silver Cascade", desc: "A 55-metre waterfall on the highway up to Kodaikanal — often the first waterfall visitors see. Best during and after monsoon." },
              { name: "Berijam Lake", desc: "A pristine reservoir inside Kodaikanal forest — requires a Forest Department permit. Famous for migratory birds, exotic orchids, and total serenity." },
              { name: "Fairy Falls", desc: "A small but picturesque waterfall surrounded by dense forest. A popular picnic spot ideal for families." },
              { name: "Green Valley View", desc: "Formerly called Suicide Point — a vertigo-inducing viewpoint looking over a 2,000-metre drop into the Vaigai dam valley." },
              { name: "Dolphin's Nose", desc: "A unique rock formation resembling a dolphin's nose, with sweeping views of the surrounding hills. Located 8 km from town." },
              { name: "Kurinji Andavar Temple", desc: "A Murugan temple dedicated to the rare Kurinji flower. Located 3 km from town with a peaceful garden setting and excellent valley views." }
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
            <p className="font-semibold text-blue-800 m-0">Plan your Kodaikanal trip with experts!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Customized packages, comfortable cabs, experienced drivers!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Best Time to Visit Kodaikanal
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { season: "April – June", label: "Summer (Best)", desc: "Most popular season. Pleasant 12–20°C. Ideal for sightseeing, cycling, and boat rides. Expect some crowds.", color: "bg-green-50 border-green-300" },
              { season: "July – September", label: "Monsoon", desc: "Heavy rains make the hills extraordinarily green. Waterfalls are full. Some roads may be slippery. Fewer tourists.", color: "bg-blue-50 border-blue-300" },
              { season: "Oct – Nov", label: "Post-Monsoon (Good)", desc: "Lush green landscapes, clear skies, moderate temperatures. Excellent photography season. Less crowded.", color: "bg-teal-50 border-teal-300" },
            ].map((s) => (
              <div key={s.season} className={`border rounded-xl p-4 ${s.color}`}>
                <div className="text-xs font-bold text-gray-500 mb-1">{s.label}</div>
                <div className="font-bold text-gray-800 mb-2">{s.season}</div>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            How to Reach Kodaikanal
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Mode</th>
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance / Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["By Road", "Madurai", "120 km / ~3.5 hrs"],
                  ["By Road", "Coimbatore", "175 km / ~4 hrs"],
                  ["By Road", "Chennai", "530 km / ~9 hrs"],
                  ["By Train", "Kodai Road Station", "80 km from Kodaikanal (nearest railhead)"],
                  ["By Air", "Madurai Airport", "120 km / ~3.5 hrs by cab"],
                ].map(([mode, from, dist], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/30'}>
                    <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{mode}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{from}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=1200&h=675&fit=crop"
              alt="Kodaikanal misty mountain view Tamil Nadu travel guide"
              title="Misty hills of Kodaikanal"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Misty mountains of South India | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Where to Stay in Kodaikanal
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { type: "Budget", range: "₹800 – ₹1,500/night", areas: "Kodaikanal town centre, near Lake Road", tip: "Dormitory hostels and basic guesthouses near the lake" },
              { type: "Mid-Range", range: "₹2,000 – ₹5,000/night", areas: "Club Road, Lake Road, Coaker's Walk area", tip: "Comfortable hotels with valley views and included breakfast" },
              { type: "Luxury", range: "₹6,000 – ₹20,000/night", areas: "Club Road, Forest area, Berijam end", tip: "Heritage bungalows and resort-style stays with scenic gardens" },
            ].map((h) => (
              <div key={h.type} className="bg-white rounded-xl p-4 shadow border border-gray-100">
                <div className="font-bold text-green-700 text-base mb-1">{h.type}</div>
                <div className="text-gray-800 font-semibold text-sm mb-2">{h.range}</div>
                <p className="text-gray-500 text-xs">{h.areas}</p>
                <p className="text-gray-600 text-xs mt-2">{h.tip}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Local Food and What to Buy in Kodaikanal
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kodaikanal has a thriving local produce economy centered around its cool climate. The most famous local products include <strong>homemade chocolates</strong> — sold at dozens of small shops along Club Road and Lake Road. These hand-crafted chocolates come in flavours unique to Kodai including eucalyptus, cardamom, and dark cocoa varieties.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Eucalyptus oil</strong> and related products (soaps, balms, candles) are another Kodaikanal specialty — the eucalyptus forests around Kodai produce some of the finest quality oil in South India. <strong>Kodai wine</strong>, made from local fruits including plum, elderberry, and passion fruit, is a beloved souvenir. You'll also find fresh organic vegetables, homemade jams, honey, and handmade woolens in the local market.
          </p>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=675&fit=crop"
              alt="Kodaikanal green valley forest landscape Tamil Nadu"
              title="Green forests of Kodaikanal"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Green valleys and shola forests of Kodaikanal | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-green-200 pb-2">
            Frequently Asked Questions about Kodaikanal
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Is Kodaikanal safe for solo travellers?", a: "Yes, Kodaikanal is one of the safest hill stations in Tamil Nadu. The town is well-patrolled and tourist-friendly. Solo travellers should avoid isolated forest trails after dark." },
              { q: "What is the best season to visit Kodaikanal?", a: "April to June offers pleasant weather ideal for sightseeing. September to November offers lush post-monsoon greenery. Avoid January–February if you're sensitive to cold, as temperatures can drop below 5°C." },
              { q: "How many days are needed for Kodaikanal?", a: "A minimum of 2 nights 3 days is recommended to cover all major attractions. If you plan to visit Berijam Lake (requires a forest permit), add an extra half day." },
              { q: "What is the nearest city to Kodaikanal?", a: "Madurai is the nearest major city (120 km). Dindigul (64 km) is the nearest town. The nearest railway station is Kodai Road (80 km), and the nearest airport is Madurai International Airport." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready to book your Kodaikanal trip?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Krithik Tours will plan your perfect Kodaikanal itinerary!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Plan Your Kodaikanal Trip Now</h3>
          <p className="text-green-100 mb-6">Krithik Tours & Travels offers customized Kodaikanal tour packages with comfortable A/C cabs and experienced local drivers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow">
              <Phone size={18} /> Call 8925001292
            </a>
            <Link to="/kodaikanal-two-days-trip" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              <MapPin size={18} /> View Kodaikanal Packages
            </Link>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
          <div className="space-y-3">
            <Link to="/blog/travel-tips/kodaikanal-travel-tips" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              15 Essential Travel Tips for Kodaikanal First-Timers
            </Link>
            <Link to="/blog/history-culture/kodaikanal-history" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Kodaikanal History: From Palani Hills to British Hill Resort
            </Link>
            <Link to="/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip
            </Link>
            <Link to="/blog/hill-stations/yercaud-travel-guide" className="block text-green-700 hover:text-green-800 font-medium hover:underline">
              Yercaud Travel Guide: Salem's Hidden Hill Station Gem
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
