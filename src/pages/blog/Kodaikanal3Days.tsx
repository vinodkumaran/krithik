import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip",
      "description": "Plan the perfect Kodaikanal 3 days 2 nights itinerary covering Kodai Lake, Pillar Rocks, Berijam Lake, Bear Shola Falls. Budget breakdown included. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Itineraries", "item": "https://www.krithiktours.com/blog/itineraries" },
        { "@type": "ListItem", "position": 4, "name": "Kodaikanal 3 Days Itinerary", "item": "https://www.krithiktours.com/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is 3 days enough for Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 3 days and 2 nights is the ideal duration to cover all major attractions in Kodaikanal comfortably — including Kodaikanal Lake, Coaker's Walk, Pillar Rocks, Silver Cascade, Berijam Lake, Bear Shola Falls, and the town market area." } },
        { "@type": "Question", "name": "What is the best way to travel from Chennai to Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "The best option from Chennai is an overnight bus to Madurai (7–8 hrs) and then a cab to Kodaikanal (3.5 hrs). Alternatively, you can take an overnight cab directly from Chennai (9–10 hrs). For comfort, Krithik Tours provides A/C cabs with experienced drivers for the full journey." } },
        { "@type": "Question", "name": "How much does a Kodaikanal 3-day trip cost per person?", "acceptedAnswer": { "@type": "Answer", "text": "Budget: approximately ₹4,000–₹6,000/person for 3 days (shared transport, budget stay, local food). Mid-range: ₹8,000–₹15,000/person (private cab, comfortable hotel with breakfast, restaurant meals). Luxury: ₹20,000–₹35,000/person (premium bungalow, fine dining, private guided tours)." } }
      ]
    }
  ]
};

const days = [
  {
    day: "Day 0 (Night Departure)",
    title: "Depart from Chennai / Coimbatore / Madurai",
    activities: [
      "Depart on an overnight bus or cab to reach Kodaikanal early morning",
      "From Chennai: 9–10 hrs by cab or overnight Volvo bus to Madurai, then cab (3.5 hrs)",
      "From Coimbatore: 4 hrs by cab — arrive at Kodaikanal by 7–8 AM",
      "From Madurai: 3.5 hrs by cab — perfect for a pre-dawn departure",
      "Check in to hotel upon arrival and rest for 1–2 hours",
    ]
  },
  {
    day: "Day 1",
    title: "Kodaikanal Lake, Pillar Rocks & Berijam Lake",
    activities: [
      "Morning: Visit Kodaikanal Lake (7–9 AM is magical — cool, misty, quiet)",
      "Morning: Rent a bicycle (₹50–100/hr) and cycle the 9 km lake road",
      "Morning: Bryant Park — ornamental garden open from 8:30 AM",
      "Morning: Coaker's Walk — 1 km promenade with panoramic valley views",
      "Midday: Head to Pillar Rocks (15 km from town) — dramatic rock formations",
      "Afternoon: Berijam Lake forest drive — book Forest Department permit in advance (private vehicles Mon–Sat only)",
      "Evening: Return to Kodaikanal Lake for a peaceful boat ride (6–8 PM)",
    ]
  },
  {
    day: "Day 2",
    title: "Waterfalls, Temples & Town Shopping",
    activities: [
      "Morning: Bear Shola Falls — a short pleasant trek through shola forest",
      "Morning: Silver Cascade — 55m waterfall on the Batlagundu highway",
      "Midday: Kurinji Andavar Temple — dedicated to Lord Murugan with valley garden views",
      "Afternoon: Green Valley View (Suicide Point) — breathtaking 2,000m drop view",
      "Late Afternoon: Fairy Falls — small but beautiful hidden waterfall",
      "Evening: Kodaikanal town shopping — chocolate, eucalyptus products, Kodai wine, homemade jams",
      "Evening: Dinner at local restaurant — try the Kodai chocolate fondue experience",
    ]
  },
  {
    day: "Day 3 (Departure)",
    title: "Dolphin's Nose, Sunrise & Checkout",
    activities: [
      "Early Morning: Dolphin's Nose viewpoint (8 km from town) for sunrise views",
      "Morning: Fairy Falls (if missed on Day 2)",
      "Morning: Last walk around Kodaikanal Lake for morning photos",
      "Late Morning: Checkout from hotel (most checkouts by 11 AM)",
      "Afternoon: Begin return journey",
      "Optional: Stop at Silver Cascade waterfall on the way down for photos",
    ]
  }
];

export default function Kodaikanal3Days() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop"
          alt="Kodaikanal 3 days 2 nights itinerary weekend trip Tamil Nadu hill station"
          title="Kodaikanal 3 Days 2 Nights — Perfect Weekend Trip"
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
            Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 8 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Kodaikanal, Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-teal-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-teal-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Itineraries</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Kodaikanal 3 Days 2 Nights</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            This <strong>Kodaikanal 3 days 2 nights itinerary</strong> is designed as the perfect weekend escape to Tamil Nadu's most beloved hill station. At <strong>2,133 metres</strong> in the Palani Hills, Kodaikanal offers a complete hill station experience — mist-covered lake mornings, dramatic rock formations, cascading waterfalls, dense shola forests, and delightful local chocolates. Whether you're travelling from Chennai, Coimbatore, or Madurai, this 3-day plan maximizes your time and ensures you see the very best of Kodai.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to book your Kodaikanal trip? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — We'll build your perfect Kodaikanal weekend itinerary!</p>
          </div>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?w=1200&h=675&fit=crop"
              alt="Kodaikanal lake morning mist weekend trip 3 days itinerary"
              title="Morning mist at Kodaikanal Lake"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Morning mist at a serene hill station lake | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-10 border-b-2 border-teal-200 pb-2">
            Kodaikanal 3 Days 2 Nights Itinerary
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
            <p className="font-semibold text-teal-800 m-0">Book this Kodaikanal itinerary with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — A/C cabs, experienced drivers, best Kodaikanal packages!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Budget Breakdown for Kodaikanal 3 Days
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
                  ["Accommodation (2 nights)", "₹1,600–₹3,000", "₹5,000–₹10,000", "₹14,000–₹40,000"],
                  ["Food (3 days)", "₹900–₹1,500", "₹2,100–₹3,600", "₹4,500–₹9,000"],
                  ["Local transport/sightseeing", "₹500–₹800", "₹1,500–₹3,000", "₹4,000–₹8,000"],
                  ["Entry tickets & permits", "₹300–₹500", "₹300–₹500", "₹500–₹800"],
                  ["Shopping (chocolates, etc.)", "₹500–₹1,000", "₹1,000–₹2,000", "₹2,000–₹5,000"],
                  ["Total per person (approx.)", "₹4,000–₹6,800", "₹9,900–₹19,100", "₹25,000–₹62,800"],
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
            Pro Tips for This Kodaikanal Itinerary
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { tip: "Book Berijam Lake permit early", desc: "Permits are issued on a first-come basis from the Forest Range Office near the lake. Book the day before or arrive early on the day (permits often fill by 9 AM)." },
              { tip: "Cycle the Lake Road at dawn", desc: "Rent a bicycle near the lake boathouse and cycle the 9 km road between 7–9 AM for the most magical misty experience before tourists arrive." },
              { tip: "Buy chocolates on Day 2", desc: "Shop for homemade chocolates on Day 2 evening so they stay fresh for the journey home. Keep them cool and away from direct sunlight." },
              { tip: "Carry warm layers for evenings", desc: "Even in summer, Kodaikanal evenings drop to 12–15°C. A light jacket or fleece is essential for the evening boat ride and market walk." },
            ].map((t) => (
              <div key={t.tip} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-teal-700 mb-2">{t.tip}</h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=675&fit=crop"
              alt="Kodaikanal Pillar Rocks weekend trip hill station forest"
              title="Dramatic forest landscapes of Kodaikanal"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">The dramatic forested landscape of Kodaikanal | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-teal-200 pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Is 3 days enough for Kodaikanal?", a: "Yes, 3 days 2 nights is ideal to cover all major attractions comfortably including Kodai Lake, Coaker's Walk, Pillar Rocks, Silver Cascade, Berijam Lake, Bear Shola Falls, and the town market area." },
              { q: "What is the best way to travel from Chennai to Kodaikanal?", a: "Best option from Chennai: overnight Volvo bus to Madurai (7–8 hrs) + cab to Kodaikanal (3.5 hrs). Or an overnight cab directly (9–10 hrs). Krithik Tours provides A/C cabs for the full journey." },
              { q: "How much does a Kodaikanal 3-day trip cost per person?", a: "Budget: ₹4,000–₹6,800/person. Mid-range: ₹9,900–₹19,100/person. Luxury: ₹25,000–₹62,800/person. These estimates include accommodation, food, local transport, and entry tickets." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-teal-800 m-0">Ready to book your Kodaikanal 3-day trip?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-teal-700 font-bold">8925001292</a> — Krithik Tours handles cabs, hotels, and the full itinerary!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Book This Kodaikanal 3D2N Package</h3>
          <p className="text-teal-100 mb-6">Krithik Tours & Travels offers customized Kodaikanal weekend packages from Coimbatore, Madurai, and Chennai.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors shadow">
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
            <Link to="/blog/hill-stations/kodaikanal-travel-guide" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
            </Link>
            <Link to="/blog/travel-tips/kodaikanal-travel-tips" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              15 Essential Travel Tips for Kodaikanal First-Timers
            </Link>
            <Link to="/blog/history-culture/kodaikanal-history" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Kodaikanal History: From Palani Hills to British Hill Resort
            </Link>
            <Link to="/blog/itineraries/yercaud-2-days-1-night-itinerary" className="block text-teal-700 hover:text-teal-800 font-medium hover:underline">
              Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem
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
