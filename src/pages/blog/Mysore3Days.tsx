import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage",
      "description": "Perfect Mysore 3 days itinerary — Mysore Palace, Chamundi Hill, Srirangapatna, Brindavan Gardens, optional Coorg extension. Best season and budget tips. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/itineraries/mysore-3-days-itinerary" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Itineraries", "item": "https://www.krithiktours.com/blog/itineraries" },
        { "@type": "ListItem", "position": 4, "name": "Mysore 3 Days Itinerary", "item": "https://www.krithiktours.com/blog/itineraries/mysore-3-days-itinerary" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is 3 days enough for Mysore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 3 days is the ideal duration for Mysore. It allows you to cover Mysore Palace, Chamundi Hill, Devaraja Market, Srirangapatna, Brindavan Gardens, Mysore Zoo, and St Philomena's Church comfortably. A 4th day extension allows day trips to Coorg or Ooty." } },
        { "@type": "Question", "name": "When is the best time to visit Mysore for Dasara?", "acceptedAnswer": { "@type": "Answer", "text": "Dasara in Mysore falls in October (date varies by the Hindu calendar). The 10-day festival culminates in the Jambu Savari procession on Vijayadashami day. Book hotels 3–4 months in advance as accommodation fills up completely during Dasara. The palace is illuminated with 97,000 bulbs throughout the festival." } },
        { "@type": "Question", "name": "Can I do a day trip to Coorg from Mysore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Coorg is 120 km from Mysore (approximately 3 hours by road). A day trip is possible but rushed — you'd cover Abbey Falls, Raja's Seat viewpoint, and Namdroling Monastery. For a more relaxed Coorg experience, add a night's stay. Krithik Tours provides comfortable cabs for the Mysore–Coorg–Ooty circuit." } }
      ]
    }
  ]
};

const days = [
  {
    day: "Day 1",
    title: "Mysore Palace, Market & Night Illumination",
    activities: [
      "Morning: Arrive Mysore; check in to hotel",
      "10 AM: Mysore Palace tour (Amba Vilas) — open daily 10 AM–5:30 PM; allow 1.5–2 hours",
      "Inside: Golden throne, Durbar Hall, stained glass ceilings, royal paintings gallery",
      "Midday: Devaraja Market — 150-year-old covered market with jasmine, spices, and silk",
      "Afternoon: Mysore Silk Factory on Mananthody Road — see silk weaving in action",
      "Afternoon: Cauvery Emporium — buy authentic Mysore silk sarees and sandalwood products",
      "Evening: Return to Mysore Palace for the Sunday/festival Night Illumination (97,000 bulbs)",
      "Dinner: Try Mysore Masala Dosa at a local darshini and Mysore Pak sweet",
    ]
  },
  {
    day: "Day 2",
    title: "Chamundi Hill, Srirangapatna & Brindavan Gardens",
    activities: [
      "Early Morning: Chamundeshwari Temple atop Chamundi Hill (13 km from town)",
      "Climb the 1,008 sacred steps for a morning pilgrimage (or drive up for sunrise views)",
      "See the massive Nandi bull carved from a single boulder on the way up",
      "Midday: Drive to Srirangapatna (15 km from Mysore) — Tipu Sultan's historic capital",
      "Tipu Sultan's Summer Palace (Daria Daulat Bagh) — stunning mural paintings and history",
      "Tipu Sultan's Fort and Ranganathaswamy Temple on the river island",
      "Ranganthittu Bird Sanctuary (near Srirangapatna) — boat ride to see nesting birds",
      "Evening: Brindavan Gardens (KRS Dam, 19 km) — famous musical fountain show (starts at 6:30 PM)",
      "Watch the colourful illuminated fountains after dark — a must-see evening",
    ]
  },
  {
    day: "Day 3",
    title: "Mysore Zoo, Church & Sandalwood Shopping",
    activities: [
      "Morning: Mysore Zoo — one of India's best, open 8:30 AM; 168 species including white tigers",
      "Allow 2–3 hours; don't miss the giraffes, gorillas, and rare birds section",
      "Midday: St Philomena's Church — stunning neo-Gothic cathedral with 175-foot twin spires",
      "Afternoon: Final shopping round",
      "Sandalwood products at Government Sandalwood Oil Factory or KSDL",
      "Mysore agarbathi (incense) at local wholesale shops near Devaraja Market",
      "Mysore Pak at Sri Krishna Sweets on Sayyaji Road — the most authentic version",
      "Evening: Depart Mysore for Bangalore (3 hrs) or continue tour",
    ]
  }
];

export default function Mysore3Days() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&h=675&fit=crop"
          alt="Mysore 3 days itinerary palace temples heritage Karnataka"
          title="Mysore 3 Days — Palaces, Temples and Royal Heritage"
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
            <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">Itineraries</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Karnataka</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage
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
          <Link to="/" className="hover:text-teal-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-teal-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Itineraries</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Mysore 3 Days Itinerary</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            This <strong>Mysore 3 days itinerary</strong> is designed to give you the complete royal experience of Karnataka's cultural capital. From the golden splendour of the <strong>Mysore Palace</strong> illuminated by 97,000 bulbs to the sacred steps of Chamundi Hill, the historic ramparts of Tipu Sultan's Srirangapatna, and the illuminated fountains of Brindavan Gardens — this 3-day Mysore travel plan covers the very best of this magnificent city. An optional 4th day allows you to extend into <strong>Coorg (120 km)</strong> or <strong>Ooty (165 km)</strong>.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to book your Mysore trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — We'll build your perfect Mysore heritage itinerary!</p>
          </div>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=1200&h=675&fit=crop"
              alt="Mysore Palace illuminated 3 days itinerary heritage Karnataka"
              title="Mysore's royal heritage"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Royal heritage architecture of Mysore | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-10 border-b-2 border-teal-200 pb-2">
            Mysore 3 Days Itinerary
          </h2>

          <div className="space-y-6 mb-10">
            {days.map((day, i) => (
              <div key={i} className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
                <div className="bg-teal-600 text-white px-6 py-4">
                  <div className="text-sm font-medium text-teal-200">{day.day}</div>
                  <div className="text-lg font-bold">{day.title}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {day.activities.map((act, j) => (
                      <li key={j} className="flex gap-3 text-gray-600 text-sm">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Book this Mysore 3-day itinerary with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — A/C cabs, experienced drivers, best Mysore packages!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Optional Day 4: Coorg or Ooty Extension
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { dest: "Coorg Extension (Day 4)", dist: "120 km from Mysore", activities: ["Abbey Falls — stunning 70m waterfall in coffee estate", "Raja's Seat viewpoint — sunset views over the hills", "Namdroling Monastery (Golden Temple) — Tibetan Buddhist monastery", "Coffee and cardamom plantation walk", "Return to Mysore same evening or stay overnight"] },
              { dest: "Ooty Extension (Day 4)", dist: "165 km from Mysore", activities: ["Nilgiri Mountain Railway (toy train) — UNESCO heritage", "Ooty Lake boating", "Botanical Garden — 150-year-old heritage garden", "Doddabetta Peak (2,637m) — highest point in Nilgiris", "Return to Mysore same evening or connect onwards"] },
            ].map((e) => (
              <div key={e.dest} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-teal-700 mb-1">{e.dest}</h3>
                <div className="text-xs text-gray-500 mb-3">{e.dist}</div>
                <ul className="space-y-1">
                  {e.activities.map((a, i) => (
                    <li key={i} className="flex gap-2 text-gray-600 text-xs">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Best Season to Visit: October Dasara
          </h2>
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-amber-800 text-base mb-2">October Dasara — The Ultimate Mysore Experience</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              The <strong>Mysore Dasara Festival</strong> (10 days in October) is one of India's greatest cultural spectacles. The Mysore Palace is illuminated every evening with 97,000 bulbs. The final day's <strong>Jambu Savari procession</strong> features a richly decorated elephant carrying the golden idol of Goddess Chamundeshwari through the streets of Mysore, accompanied by tableaux, folk artists, and thousands of devotees. Book hotels <strong>3–4 months in advance</strong> — they sell out completely. October is also the best weather month: pleasant 20–25°C, post-monsoon green landscapes.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Budget Breakdown for Mysore 3 Days
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-4 py-3 text-left font-bold">Expense</th>
                  <th className="px-4 py-3 text-left font-bold">Budget</th>
                  <th className="px-4 py-3 text-left font-bold">Mid-Range</th>
                  <th className="px-4 py-3 text-left font-bold">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accommodation (2 nights)", "₹1,600–₹3,000", "₹5,000–₹12,000", "₹15,000–₹40,000"],
                  ["Food (3 days)", "₹900–₹1,500", "₹2,100–₹4,500", "₹4,500–₹9,000"],
                  ["Local transport/cabs", "₹600–₹1,000", "₹1,500–₹3,000", "₹3,000–₹6,000"],
                  ["Entry tickets", "₹400–₹600", "₹400–₹600", "₹600–₹900"],
                  ["Shopping", "₹1,000–₹2,000", "₹3,000–₹6,000", "₹8,000–₹20,000"],
                  ["Total per person (approx.)", "₹4,500–₹8,100", "₹12,000–₹26,100", "₹31,100–₹75,900"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 border-b border-gray-100 ${j === 0 ? 'font-bold text-gray-700' : 'text-gray-600'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Is 3 days enough for Mysore?", a: "Yes, 3 days comfortably covers Mysore Palace, Chamundi Hill, Devaraja Market, Srirangapatna, Brindavan Gardens, Mysore Zoo, and St Philomena's Church. Add a 4th day for a Coorg or Ooty extension." },
              { q: "When is the best time to visit Mysore for Dasara?", a: "Dasara falls in October. The 10-day festival culminates in the Jambu Savari procession on Vijayadashami. Book hotels 3–4 months in advance. The palace is illuminated throughout the festival period." },
              { q: "Can I do a day trip to Coorg from Mysore?", a: "Yes, Coorg is 120 km (~3 hrs) from Mysore. A day trip covers Abbey Falls, Raja's Seat, and Namdroling Monastery. For a fuller Coorg experience, add a night's stay. Krithik Tours provides cabs for the full circuit." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to book your Mysore 3-day trip?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — Krithik Tours handles cabs, itinerary, and royal Mysore experience!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Book Your Mysore 3-Day Package</h3>
          <p className="text-teal-100 mb-6">Krithik Tours & Travels offers Mysore heritage packages with comfortable A/C cabs and optional Coorg/Ooty extensions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors shadow">
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
            <Link to="/blog/travel-tips/mysore-travel-tips" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Mysore Travel Tips: Everything You Need to Know Before You Visit
            </Link>
            <Link to="/blog/history-culture/mysore-history" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Mysore History: The Royal City of Wadiyars and Tipu Sultan
            </Link>
            <Link to="/blog/itineraries/alleppey-houseboat-2-days-1-night" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience
            </Link>
            <Link to="/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors">
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
