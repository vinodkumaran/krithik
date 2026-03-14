import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience",
      "description": "Alleppey houseboat itinerary 2 days 1 night — Vembanad Lake cruise, Kerala sunset, traditional fish curry dinner, fishing villages. Complete backwater experience. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/itineraries/alleppey-houseboat-2-days-1-night" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Itineraries", "item": "https://www.krithiktours.com/blog/itineraries" },
        { "@type": "ListItem", "position": 4, "name": "Alleppey Houseboat Itinerary", "item": "https://www.krithiktours.com/blog/itineraries/alleppey-houseboat-2-days-1-night" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the best time for an Alleppey houseboat itinerary?", "acceptedAnswer": { "@type": "Answer", "text": "November to February is the peak season with calm waters and pleasant weather — ideal for a 2-day houseboat itinerary. June to August offers monsoon magic at lower rates. March to May is hot and humid on the water. For the best experience, book November to February, ideally mid-week to avoid weekend pricing." } },
        { "@type": "Question", "name": "How much does a 1-night Alleppey houseboat cost?", "acceptedAnswer": { "@type": "Answer", "text": "A 1-night (24 hours) Alleppey houseboat costs approximately: Standard 1-bedroom: ₹5,000–₹8,000; Deluxe 2-bedroom: ₹10,000–₹18,000; Premium/Luxury: ₹20,000–₹50,000+. Prices are per boat (not per person) and include all meals and crew. Off-season rates (June–August) can be 30–40% lower." } },
        { "@type": "Question", "name": "Can I extend the Alleppey houseboat to 2 nights?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most houseboat operators offer 2-night packages as well. A 2-night itinerary allows you to cruise deeper into the backwaters, visit more remote villages, and experience more of the Kuttanad paddy field landscape. This is highly recommended if time permits." } }
      ]
    }
  ]
};

export default function AlleppeyHouseboat2Days() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=675&fit=crop"
          alt="Alleppey houseboat itinerary 2 days 1 night Kerala backwater experience"
          title="Alleppey Houseboat — 2 Days 1 Night Backwater Experience"
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
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Kerala</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 8 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Alleppey, Kerala</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-teal-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-teal-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Itineraries</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Alleppey Houseboat 2 Days 1 Night</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            The <strong>Alleppey houseboat itinerary</strong> for 2 days and 1 night is one of the most magical travel experiences in India. Drifting through the emerald backwaters of <strong>Kerala</strong> on a traditional kettuvallam — watching kingfishers dive, toddy tappers climb coconut palms, and the sun melt into the horizon over Vembanad Lake — is something that stays with you forever. This detailed day-by-day Alleppey backwater itinerary helps you make the most of every moment on the water.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to book your Alleppey houseboat experience? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — We'll book the perfect houseboat for you!</p>
          </div>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?w=1200&h=675&fit=crop"
              alt="Alleppey backwater sunset Kerala houseboat itinerary"
              title="Sunset on the Alleppey backwaters"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Sunset on Kerala's backwaters | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-10 border-b-2 border-teal-200 pb-2">
            Alleppey Houseboat 2 Days 1 Night Itinerary
          </h2>

          <div className="space-y-6 mb-10">
            {[
              {
                day: "Day 1 Morning",
                title: "Arrive Alleppey — Board Houseboat at Noon",
                activities: [
                  "Arrive Alleppey by morning (from Cochin: 1.5 hrs, Trivandrum: 2.5 hrs, Madurai: 4 hrs)",
                  "Explore Alleppey town in the morning — Alleppey lighthouse, beach promenade",
                  "Reach houseboat boarding point by 12 noon (standard check-in time)",
                  "Welcome drink on board — fresh coconut water or lime juice",
                  "Settle into cabin; meet the captain and cook",
                  "Lunch on board — traditional Kerala fish curry, rice, and vegetable dishes",
                ]
              },
              {
                day: "Day 1 Afternoon",
                title: "Vembanad Lake & Backwater Cruise",
                activities: [
                  "1 PM: Houseboat departs into the Vembanad Lake — Kerala's largest lake",
                  "Cruise through Punnamada Lake — venue of the famous Nehru Trophy Boat Race",
                  "Watch traditional Chinese fishing nets (cheena vala) being operated by local fishermen",
                  "Pass through narrow canals lined with coconut palms and paddy fields",
                  "4 PM: Pass through a local coir processing village — watch coir rope being woven",
                  "5 PM: Anchor at a scenic spot for the sunset — pure magic on open water",
                  "Evening snacks — Kerala banana chips, pazham pori, and hot tea",
                ]
              },
              {
                day: "Day 1 Night",
                title: "Overnight on the Backwaters",
                activities: [
                  "7 PM: Fresh Kerala dinner prepared by the boat's cook — fish curry, appam, vegetable thoran",
                  "8 PM: Star-gazing from the top deck — the backwaters have minimal light pollution",
                  "Watch the reflection of moonlight on the still water",
                  "Listen to the sounds of the backwater night — frogs, fish jumping, distant temple bells",
                  "Overnight mooring at a peaceful spot on the backwaters",
                ]
              },
              {
                day: "Day 2 Morning",
                title: "Sunrise, Village Visit & Checkout",
                activities: [
                  "6 AM: Wake up to sunrise over the backwaters — one of the most beautiful sights in Kerala",
                  "7 AM: Traditional Kerala breakfast — appam and fish curry, or puttu and egg curry",
                  "8 AM: Visit a local fishing village — see the morning catch and local life",
                  "9 AM: Optional visit to a coir factory — see coconut fiber being processed",
                  "10 AM: Toddy tapper sighting — skilled climbers harvesting palm toddy (kallu)",
                  "12 noon: Return to Alleppey boarding point and checkout",
                  "Post-checkout: Transfer to Marari Beach (13 km) or Kumarakom (30 km) for extension",
                ]
              }
            ].map((day, i) => (
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
            <p className="font-semibold text-teal-800 m-0">Book this Alleppey houseboat itinerary!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — Krithik Tours arranges certified Kerala houseboats!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            What to Look For on the Backwaters
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { thing: "Kingfisher Birds", desc: "The brilliant blue common kingfisher and the larger white-breasted kingfisher are both common on the backwaters — watch for their spectacular dives into the water." },
              { thing: "Cormorants & Darters", desc: "These fishing birds are frequently seen perched on canal posts with wings spread to dry — a quintessential Kerala backwater image." },
              { thing: "Chinese Fishing Nets", desc: "These large lever-operated nets, introduced by Chinese traders centuries ago, are one of Kerala's most iconic sights. Watch fishermen haul them in at dawn." },
              { thing: "Toddy Tappers", desc: "Skilled men who climb coconut palms to harvest neera (sweet sap) or toddy (fermented palm wine) — an ancient practice of coastal Kerala." },
            ].map((t) => (
              <div key={t.thing} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-teal-700 mb-2">{t.thing}</h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Budget Breakdown: 1-Night Houseboat Cost
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-4 py-3 text-left font-bold">Houseboat Type</th>
                  <th className="px-4 py-3 text-left font-bold">Peak Season</th>
                  <th className="px-4 py-3 text-left font-bold">Off Season</th>
                  <th className="px-4 py-3 text-left font-bold">Includes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard 1-Bedroom (Non-AC)", "₹4,000–₹5,500", "₹2,500–₹3,500", "All meals, crew"],
                  ["Standard 1-Bedroom (AC)", "₹6,000–₹8,000", "₹4,000–₹5,000", "All meals, crew, AC"],
                  ["Deluxe 2-Bedroom (AC)", "₹10,000–₹18,000", "₹7,000–₹12,000", "All meals, crew, AC, better interiors"],
                  ["Premium/Luxury", "₹20,000–₹50,000+", "₹15,000–₹35,000", "Gourmet meals, jacuzzi, sun deck"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 border-b border-gray-100 ${j === 0 ? 'font-bold text-gray-700' : 'text-gray-600 text-xs'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Add-On Options After Houseboat Checkout
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { option: "Marari Beach", dist: "13 km", desc: "Pristine uncrowded beach with coconut groves. Stay 1–2 nights for a perfect beach extension." },
              { option: "Kumarakom Bird Sanctuary", dist: "30 km", desc: "UNESCO-recognized bird sanctuary on Vembanad Lake shores. Best visited October–March for migratory birds." },
              { option: "Kuttanad Paddy Field Ride", dist: "10 km", desc: "Boat ride through the below-sea-level paddy fields — a unique agricultural landscape found nowhere else in India." },
            ].map((o) => (
              <div key={o.option} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-teal-700 mb-1">{o.option}</h3>
                <div className="text-xs text-gray-500 mb-2">{o.dist} from Alleppey</div>
                <p className="text-gray-600 text-sm">{o.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the best time for an Alleppey houseboat itinerary?", a: "November to February is the peak season with calm waters and pleasant weather. June to August offers monsoon magic at lower rates. Book November to February for the best experience, ideally mid-week." },
              { q: "How much does a 1-night Alleppey houseboat cost?", a: "Standard 1-bedroom: ₹5,000–₹8,000. Deluxe 2-bedroom: ₹10,000–₹18,000. Premium/Luxury: ₹20,000–₹50,000+. Prices per boat include all meals. Off-season rates (June–August) are 30–40% lower." },
              { q: "Can I extend the Alleppey houseboat to 2 nights?", a: "Yes, 2-night packages are available and highly recommended. They allow you to cruise deeper into the backwaters, visit more villages, and fully immerse in the Kuttanad landscape without rushing." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to experience the Alleppey backwaters?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — Krithik Tours will arrange your perfect Kerala houseboat experience!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-600 to-blue-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Book Your Alleppey Houseboat Now</h3>
          <p className="text-teal-100 mb-6">Krithik Tours & Travels arranges certified Kerala houseboats for an unforgettable backwater experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors shadow">
              <Phone size={18} /> Call 8925001292
            </a>
            <Link to="/alleppey-overnight-houseboat-stay" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              <MapPin size={18} /> View Alleppey Packages
            </Link>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
          <div className="space-y-3">
            <Link to="/blog/travel-tips/alleppey-houseboat-tips" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Alleppey Boat Stay Tips: How to Plan the Perfect Houseboat Trip
            </Link>
            <Link to="/blog/history-culture/alleppey-history" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Alleppey History: The Venice of the East and Kerala's Backwater Heritage
            </Link>
            <Link to="/blog/hill-stations/munnar-travel-guide" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Munnar Travel Guide: Kerala's Most Stunning Hill Station
            </Link>
            <Link to="/blog/itineraries/mysore-3-days-itinerary" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage
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
