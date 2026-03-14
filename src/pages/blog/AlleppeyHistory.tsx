import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Alleppey History: The Venice of the East and Kerala's Backwater Heritage",
      "description": "Explore Alleppey's rich history from Raja Kesavadas's 1762 port to the coir industry, Lord Curzon's Venice remark, Nehru Trophy Boat Race, and Kerala backwater culture. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/history-culture/alleppey-history" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "History & Culture", "item": "https://www.krithiktours.com/blog/history-culture" },
        { "@type": "ListItem", "position": 4, "name": "Alleppey History", "item": "https://www.krithiktours.com/blog/history-culture/alleppey-history" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Why is Alleppey called the Venice of the East?", "acceptedAnswer": { "@type": "Answer", "text": "Alleppey is called the Venice of the East because of its extensive network of canals, lagoons, and waterways that crisscross the city and the surrounding Kuttanad region, resembling the canal city of Venice, Italy. The sobriquet is widely attributed to Lord Curzon, Viceroy of India, who used this phrase during his visit to the region." } },
        { "@type": "Question", "name": "When was the first Nehru Trophy Boat Race held?", "acceptedAnswer": { "@type": "Answer", "text": "The first Nehru Trophy Boat Race was held in 1952 on Punnamada Lake in Alleppey. It was inaugurated by Prime Minister Jawaharlal Nehru, who was deeply moved by the sight of traditional snake boats (Chundan Vallam) racing during his visit to Kerala. The race is held every second Saturday of August and is one of India's most spectacular sporting events." } },
        { "@type": "Question", "name": "What was the importance of Alleppey in Kerala's history?", "acceptedAnswer": { "@type": "Answer", "text": "Alleppey (Alappuzha) was historically one of the most important commercial ports in Kerala. Established by Raja Kesavadas of Travancore in 1762, it became the world's leading coir (coconut fiber) export hub in the 19th century. The backwater network was the trading lifeline of Kerala's spice, coir, and rice economy for centuries." } }
      ]
    }
  ]
};

export default function AlleppeyHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=675&fit=crop"
          alt="Alleppey history Venice of the East Kerala backwater heritage"
          title="Alleppey — The Venice of the East"
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
            <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">History & Culture</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Kerala</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Alleppey History: The Venice of the East and Kerala's Backwater Heritage
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 10 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Alleppey, Kerala</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-amber-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">History & Culture</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Alleppey History</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Alleppey (Alappuzha)</strong> — Kerala's <em>Venice of the East</em> — is a city whose identity is inseparable from its water. The <strong>Alleppey history</strong> spans from ancient Kuttanad rice cultivation, recorded in Tamil Sangam literature, to a 1762 commercial port established by a Travancore raja, to a 19th-century coir empire that made Kerala famous across the globe, and finally to the world-renowned houseboat tourism that draws visitors from every corner of the world today. This is the story of Kerala's backwater heritage.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Ready to explore historic Alleppey? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — We'll plan your perfect Kerala backwater experience!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Historical Background: Ancient Kuttanad and the Backwater Economy
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Kuttanad region</strong> — the vast lowland area surrounding Alleppey that sits below sea level — is one of the most extraordinary agricultural landscapes in Asia. Known as the <em>"rice bowl of Kerala"</em>, Kuttanad has been under rice cultivation for over 2,000 years, with farmers reclaiming land from the shallow backwaters and building elaborate paddy polders (kayal nilam) protected by bunds and sluice gates.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Kuttanad region is mentioned in ancient <strong>Tamil Sangam literature</strong> (c. 300 BCE – 300 CE) as a land of extraordinary fertility and abundance. The backwater network — a complex system of lagoons, rivers, and canals — served as the primary transportation and trade corridor for the entire region, connecting the fertile interior with the Arabian Sea coast.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Fishing communities</strong> have inhabited the Alleppey shoreline for millennia. The distinctive <strong>Chinese fishing nets</strong> (cheena vala) visible at Alleppey and Kochi were introduced to Kerala's coast by traders from China during the 13th or 14th century — a living artifact of Kerala\'s ancient maritime trade connections.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            The Nehru Trophy Boat Race, held annually on Punnamada Lake every second Saturday of August, was inaugurated in 1952 by Prime Minister Jawaharlal Nehru. The traditional snake boats (Chundan Vallam) racing on the backwaters moved Nehru so deeply that he donated a trophy — and the race has been held every year since. It is one of India's most spectacular sporting events, drawing thousands of spectators along the lakeshore.
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            1762: Raja Kesavadas Establishes Alleppey as a Commercial Port
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The recorded modern history of Alleppey begins in <strong>1762</strong> when <strong>Raja Kesavadas</strong>, the Diwan (Prime Minister) of the Kingdom of Travancore, established Alleppey as a commercial port town. Kesavadas recognized the strategic potential of the location — at the confluence of the backwater network and the Arabian Sea — and developed infrastructure to channel the region's trade through this new port.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under Kesavadas, Alleppey rapidly grew into a significant trading hub. Spices — pepper, cardamom, and cinnamon from the Western Ghats — were transported through the backwater network and exported through Alleppey to traders from Arabia, China, and Europe. The port also traded in coir, rice, and timber.
          </p>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?w=1200&h=675&fit=crop"
              alt="Alleppey backwaters Kerala history boat culture"
              title="Boat culture on the Alleppey backwaters"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">The timeless boat culture of Kerala's backwaters | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            The Coir Industry: Alleppey's Global Fame
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The product that would make Alleppey world-famous was <strong>coir</strong> — the fiber extracted from the husks of coconuts that grows abundantly along Kerala's coastal districts. By the mid-19th century, Alleppey had emerged as the <strong>world's leading coir export hub</strong>, with dozens of coir processing factories lining the canals and backwaters.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>British East India Company</strong> played a major role in developing Alleppey's coir trade. Coir products — doormats, rope, brushes, and matting — were exported from Alleppey to Britain, Europe, and beyond. The coir industry created employment for thousands of coastal families and generated significant revenue for the Travancore kingdom.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It was this period of commercial prominence that prompted <strong>Lord Curzon</strong>, Viceroy of India, to describe Alleppey as the <em>"Venice of the East"</em> — a phrase that captured the city's canal-threaded urban landscape and cosmopolitan trading character. The sobriquet has endured to this day.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            The Kettuvallam: From Cargo Boat to Luxury Houseboat
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The iconic <strong>kettuvallam</strong> (knotted boat) — the traditional Alleppey houseboat — has a remarkable history. Originally a working cargo vessel, the kettuvallam was designed to transport rice, spices, and coir through the backwater network. Built entirely from <strong>arene jack wood</strong> (anjili) without metal nails, held together with natural coir rope and sealed with black resin (chunnambu), these boats could carry up to 30 tonnes of cargo.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            As road networks expanded in the 20th century and bulk cargo shifted to trucks, the kettuvallam trade declined. In the <strong>1980s</strong>, the <strong>Kerala Tourism Development Corporation (KTDC)</strong> pioneered the conversion of old cargo boats into tourist houseboats — giving new life to these traditional vessels and creating an entirely new tourism industry. Today, over 1,500 houseboats operate on the Alleppey backwaters.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Alleppey Historical Timeline
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-bold w-28">Year</th>
                  <th className="px-4 py-3 text-left font-bold">Event</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ancient era", "Kuttanad rice cultivation recorded in Tamil Sangam literature"],
                  ["13th–14th C", "Chinese fishing nets introduced to Kerala coast by maritime traders"],
                  ["1762", "Raja Kesavadas establishes Alleppey as a commercial port town"],
                  ["19th century", "Alleppey becomes world's leading coir export hub"],
                  ["Late 19th C", "Lord Curzon calls Alleppey the 'Venice of the East'"],
                  ["1952", "First Nehru Trophy Boat Race on Punnamada Lake, inaugurated by Jawaharlal Nehru"],
                  ["1980s", "KTDC pioneers houseboat tourism — cargo boats converted for tourists"],
                  ["Present", "Over 1,500 houseboats operate on the Alleppey backwaters"],
                ].map(([year, event], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                    <td className="px-4 py-3 font-bold text-blue-700 border-b border-gray-100 whitespace-nowrap">{year}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Frequently Asked Questions about Alleppey History
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "Why is Alleppey called the Venice of the East?", a: "Alleppey is called the Venice of the East because of its extensive network of canals, lagoons, and waterways resembling Venice, Italy. The phrase is attributed to Lord Curzon, Viceroy of India, during his visit to the region." },
              { q: "When was the first Nehru Trophy Boat Race held?", a: "The first Nehru Trophy Boat Race was held in 1952 on Punnamada Lake, inaugurated by Prime Minister Jawaharlal Nehru who was moved by the sight of traditional snake boats (Chundan Vallam). It is held every second Saturday of August." },
              { q: "What was the importance of Alleppey in Kerala's history?", a: "Alleppey was established as a commercial port by Raja Kesavadas in 1762 and became the world's leading coir export hub in the 19th century. The backwater network was the trading lifeline of Kerala's spice, coir, and rice economy for centuries." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Experience historic Alleppey with Krithik Tours!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — We'll arrange the perfect Kerala backwater experience for you!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Experience the Venice of the East</h3>
          <p className="text-blue-100 mb-6">Krithik Tours & Travels offers Alleppey houseboat packages and Kerala backwater experiences — call us to plan your perfect trip.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow">
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
            <Link to="/blog/travel-tips/alleppey-houseboat-tips" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Alleppey Boat Stay Tips: How to Plan the Perfect Houseboat Trip
            </Link>
            <Link to="/blog/itineraries/alleppey-houseboat-2-days-1-night" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience
            </Link>
            <Link to="/blog/history-culture/munnar-history-culture" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Munnar History and Culture: Tea, Tribes and Colonial Legacy
            </Link>
            <Link to="/blog/history-culture/mysore-history" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Mysore History: The Royal City of Wadiyars and Tipu Sultan
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors">
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
