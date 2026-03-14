import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem",
      "description": "Perfect Yercaud 2 days 1 night itinerary — Yercaud Lake, Pagoda Point, Shevaroy Temple, Killiyur Falls, coffee plantations. For families, couples, and solo travellers. Call 8925001292.",
      "image": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/itineraries/yercaud-2-days-1-night-itinerary" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Itineraries", "item": "https://www.krithiktours.com/blog/itineraries" },
        { "@type": "ListItem", "position": 4, "name": "Yercaud 2 Days Itinerary", "item": "https://www.krithiktours.com/blog/itineraries/yercaud-2-days-1-night-itinerary" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is 2 days enough for Yercaud?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 2 days 1 night is the ideal duration for Yercaud. The hill station is compact and all major attractions — Yercaud Lake, Lady's Seat, Shevaroy Temple, Killiyur Falls, coffee plantations, Anna Park, and Bear's Cave — can be comfortably covered in 2 days." } },
        { "@type": "Question", "name": "How to reach Yercaud from Chennai?", "acceptedAnswer": { "@type": "Answer", "text": "Yercaud is 340 km from Chennai. The best option is to drive or take a cab to Salem (approximately 5.5 hrs) and then drive up the ghat road to Yercaud (32 km, ~1 hr). Trains from Chennai to Salem run regularly; from Salem you can hire a local cab to Yercaud." } },
        { "@type": "Question", "name": "Is Yercaud suitable for families with children?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Yercaud is excellent for families with children. The Yercaud Lake boating, Anna Park with play areas, Botanical Garden, and the scenic drives are all family-friendly. The hill station is safe, uncrowded, and the cool climate is refreshing for children." } }
      ]
    }
  ]
};

export default function Yercaud2Days() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?w=1200&h=675&fit=crop"
          alt="Yercaud 2 days 1 night itinerary Salem hill station weekend trip"
          title="Yercaud 2 Days 1 Night — Quick Salem Escape"
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
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Tamil Nadu</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 7 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Yercaud, Salem, Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-teal-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-teal-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Itineraries</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Yercaud 2 Days 1 Night</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            This <strong>Yercaud 2 days 1 night itinerary</strong> is the perfect quick escape from Salem, Chennai, or Bangalore. <strong>Yercaud</strong> — set in the Shevaroy Hills at <strong>1,515 metres</strong> — is Tamil Nadu's best-kept hill station secret. Unlike the crowded Ooty or Kodaikanal, Yercaud rewards visitors with peaceful coffee plantation walks, misty lake mornings, and genuine hill-country charm — all within easy reach and completely uncrowded. This 2-day plan covers every key attraction without rushing.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to plan your Yercaud trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — We'll build your perfect Yercaud itinerary!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-10 border-b-2 border-teal-200 pb-2">
            Yercaud 2 Days 1 Night Itinerary
          </h2>

          <div className="space-y-6 mb-10">
            {[
              {
                day: "Day 1 Morning",
                title: "Arrive Yercaud & Lake Morning",
                activities: [
                  "Arrive Yercaud from Salem (32 km ghat road — ~1 hr) by 8–9 AM",
                  "Check in to hotel; freshen up",
                  "Yercaud Lake — peaceful boating and lakeside garden walk (8:30–10 AM)",
                  "Pagoda Point viewpoint — panoramic 270-degree valley views (10:30–11:30 AM)",
                  "Lady's Seat — famous sunrise and valley viewpoint (stunning even midday)",
                ]
              },
              {
                day: "Day 1 Afternoon",
                title: "Temple & Gardens",
                activities: [
                  "Shevaroy Hills Temple — ancient tribal deity shrine at the highest peak (1,623m)",
                  "Short drive or trek to the temple — allow 1–1.5 hours",
                  "Botanical Garden — rare shola flora, orchids, and tree ferns",
                  "Late Afternoon: Killiyur Falls — 300-foot waterfall inside the forest",
                  "Evening: Return to Lady's Seat for sunset views — one of Yercaud's finest moments",
                  "Dinner at a local Yercaud restaurant — try the fresh vegetables and local cuisine",
                ]
              },
              {
                day: "Day 2 Morning",
                title: "Coffee Plantation & Anna Park",
                activities: [
                  "Early morning (7–8 AM): Coffee plantation walk — smell fresh roasted coffee beans",
                  "Ask your hotel to arrange a guided plantation walk for an immersive experience",
                  "Anna Park — colourful flower garden with children's play area (great for families)",
                  "Late Morning: Bear's Cave — natural cave formation with interesting rock shapes",
                  "Local market at Yercaud town — buy fresh coffee, spices, and local honey",
                ]
              },
              {
                day: "Day 2 Late Morning",
                title: "Departure",
                activities: [
                  "Final drive back down the 20-hairpin-bend ghat road to Salem",
                  "Stop at viewpoints along the ghat road for dramatic valley photographs",
                  "Return to Salem for onward journey to Chennai, Bangalore, or Coimbatore",
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
            <p className="font-semibold text-teal-800 m-0">Book this Yercaud 2-day itinerary with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — Comfortable cabs, curated itineraries!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            How to Reach Yercaud
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance</th>
                  <th className="px-4 py-3 text-left font-bold">Time</th>
                  <th className="px-4 py-3 text-left font-bold">Best Option</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Salem", "32 km", "~1 hr", "Cab or local bus (20 hairpin bends ghat road)"],
                  ["Chennai", "340 km", "~6.5 hrs", "Cab to Salem, then cab to Yercaud"],
                  ["Bangalore", "230 km", "~4.5 hrs", "Cab via NH 44 to Salem, then ghat road"],
                  ["Coimbatore", "170 km", "~3.5 hrs", "Cab via Erode and Salem"],
                ].map(([from, dist, time, opt], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                    <td className="px-4 py-3 font-bold text-teal-700 border-b border-gray-100">{from}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dist}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{time}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Budget Breakdown for Yercaud 2 Days
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Expense</th>
                  <th className="px-4 py-3 text-left font-bold">Budget</th>
                  <th className="px-4 py-3 text-left font-bold">Mid-Range</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accommodation (1 night)", "₹800–₹1,500", "₹2,500–₹4,000"],
                  ["Food (2 days)", "₹600–₹1,000", "₹1,400–₹2,400"],
                  ["Local transport", "₹300–₹500", "₹800–₹1,500"],
                  ["Entry tickets", "₹100–₹200", "₹200–₹300"],
                  ["Total per person", "₹1,800–₹3,200", "₹4,900–₹8,200"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/30'}>
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
              { q: "Is 2 days enough for Yercaud?", a: "Yes, 2 days 1 night comfortably covers all major Yercaud attractions — Yercaud Lake, Lady's Seat, Shevaroy Temple, Killiyur Falls, coffee plantations, Anna Park, and Bear's Cave. Yercaud is compact and easy to explore." },
              { q: "How to reach Yercaud from Chennai?", a: "Drive or take a cab to Salem (~5.5 hrs via NH 44). From Salem, it's 32 km to Yercaud (~1 hr on the ghat road). Trains from Chennai to Salem run regularly; hire a local cab at Salem for the ghat road." },
              { q: "Is Yercaud suitable for families with children?", a: "Yercaud is excellent for families. Yercaud Lake boating, Anna Park with play areas, Botanical Garden, and scenic drives are all family-friendly. The hill station is safe, uncrowded, and the cool climate is refreshing for children." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Book your Yercaud trip with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — We'll plan the perfect Yercaud escape for you!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Book This Yercaud 2D1N Package</h3>
          <p className="text-teal-100 mb-6">Krithik Tours & Travels offers Yercaud weekend packages from Salem, Chennai, Coimbatore, and Bangalore.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors shadow">
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
            <Link to="/blog/hill-stations/yercaud-travel-guide" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Yercaud Travel Guide: Salem's Hidden Hill Station Gem
            </Link>
            <Link to="/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip
            </Link>
            <Link to="/blog/hill-stations/kodaikanal-travel-guide" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
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
