import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Kodaikanal History: From Palani Hills to British Hill Resort",
      "description": "Explore the rich history of Kodaikanal — indigenous tribes, American missionaries in 1845, colonial bungalows, and the creation of Kodai Lake in 1863. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/history-culture/kodaikanal-history" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "History & Culture", "item": "https://www.krithiktours.com/blog/history-culture" },
        { "@type": "ListItem", "position": 4, "name": "Kodaikanal History", "item": "https://www.krithiktours.com/blog/history-culture/kodaikanal-history" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "When was Kodaikanal founded?", "acceptedAnswer": { "@type": "Answer", "text": "Kodaikanal was established as a hill station in 1845 by American Madura Mission missionaries who developed it as a health retreat. The British subsequently developed it as a colonial hill resort. Kodaikanal Lake was artificially created in 1863 by Collector Sir Vere Henry Levinge." } },
        { "@type": "Question", "name": "Who were the original inhabitants of Kodaikanal?", "acceptedAnswer": { "@type": "Answer", "text": "The Palaiyar (also called Paliyar) and Pulayar tribes were the original indigenous inhabitants of the Palani Hills where Kodaikanal is situated. They lived as forest dwellers, hunters, and gatherers in the dense shola forests long before colonial settlement." } },
        { "@type": "Question", "name": "What is the historical significance of Coaker's Walk?", "acceptedAnswer": { "@type": "Answer", "text": "Coaker's Walk is a 1 km pedestrian path built in 1872 by Lieutenant W. H. Coaker, a British civil servant. It was constructed as a morning promenade for British residents of the hill station and offers panoramic views of the Palani hills and plains. The walk is named after its creator and remains one of Kodaikanal's most beloved attractions." } }
      ]
    }
  ]
};

const timeline = [
  { year: "Pre-1845", event: "Palaiyar and Pulayar tribes inhabit the Palani Hills", detail: "The indigenous forest communities live in harmony with the dense shola forests" },
  { year: "1845", event: "American Madura Mission establishes Kodaikanal as a health retreat", detail: "Rev. John Rendall and Rev. Elias Mandeville of the American Mission are the first settlers" },
  { year: "1860s", event: "British colonial development begins in earnest", detail: "British officers and civil servants begin building summer bungalows in Kodaikanal" },
  { year: "1863", event: "Kodaikanal Lake created by Sir Vere Henry Levinge", detail: "The artificial star-shaped lake across 60 acres becomes the centrepiece of the hill station" },
  { year: "1872", event: "Coaker's Walk constructed by Lieutenant Coaker", detail: "A 1 km promenade with panoramic valley views built for British residents" },
  { year: "1901", event: "Kodaikanal School (KIS) established", detail: "One of India's oldest residential schools, originally serving children of foreign missionaries and officials" },
  { year: "1948", event: "Indian Independence — Kodaikanal transitions to independent India", detail: "The hill station continues as a premier tourist destination under the new government" },
  { year: "2001", event: "Hindustan Unilever mercury plant closed", detail: "Following public protests about mercury contamination, the controversial thermometer factory is shut down" },
];

export default function KodaikanalHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop"
          alt="Kodaikanal history Palani Hills colonial heritage Tamil Nadu"
          title="Kodaikanal — From Palani Hills to British Hill Resort"
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
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Tamil Nadu</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Kodaikanal History: From Palani Hills to British Hill Resort
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
          <Link to="/" className="hover:text-amber-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-amber-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">History & Culture</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Kodaikanal History</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            Long before the first British bungalow appeared on the mist-draped heights of <strong>Kodaikanal</strong>, the Palani Hills had a rich pre-colonial history stretching back thousands of years. The <strong>Kodaikanal history</strong> is a layered story — from indigenous forest communities and Tamil cultural traditions to American missionary settlements, British colonial hill resort development, and the modern era of tourism and environmental advocacy. This page traces that full arc.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Ready to explore historic Kodaikanal? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — We'll build your perfect Kodaikanal heritage itinerary!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Historical Background: The Palani Hills Before the British
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Palani Hills, in which Kodaikanal sits at 2,133 metres, were home to the <strong>Palaiyar (Paliyar) tribe</strong> — one of the oldest indigenous communities of South India, classified as a Scheduled Tribe under the Indian Constitution. The Palaiyar were forest-dwelling hunter-gatherers who inhabited the dense <em>shola</em> (evergreen montane) forests, living in small nomadic groups and possessing extraordinary knowledge of medicinal plants and the forest ecosystem.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Pulayar tribe</strong> also had a presence in the Palani Hills, primarily as agricultural communities in the lower slopes. Both communities had a deep spiritual relationship with the forest and the hills — the hills were considered sacred and associated with Lord Murugan, the Tamil deity who, according to Puranic legend, chose the Palani Hills as his abode after renouncing the world. The <strong>Kurinji Andavar Temple</strong> at Kodaikanal honours this tradition — it is dedicated to Murugan as the Lord of the Kurinji Hills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Palani Hills are part of the Western Ghats — one of the world's eight hottest biodiversity hotspots as identified by UNESCO. The <em>shola</em> forests and montane grasslands of the Palani Hills harbour hundreds of endemic species of plants, birds, and insects found nowhere else on Earth. This ecological richness was the backdrop against which human history here unfolded.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            The Kurinji flower (Strobilanthes kunthiana) that gives the Kurinji Andavar Temple its name blooms once every 12 years, turning the entire Kodaikanal hillside into a carpet of purple-blue. This extraordinary event, documented since ancient Tamil Sangam literature, was last witnessed in 2018 and will next occur in 2030.
          </div>

          <figure className="my-8">
            <img
              src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=1200&h=675&fit=crop"
              alt="Kodaikanal Palani Hills misty forest historical landscape Tamil Nadu"
              title="The Palani Hills — Kodaikanal's ancient landscape"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">The ancient shola forests of the Palani Hills | Source: Pexels</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            1845: American Missionaries and the Birth of a Hill Station
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The modern history of Kodaikanal begins in <strong>1845</strong> when members of the <strong>American Madura Mission</strong> — a Protestant missionary organization based in Madurai — first climbed the Palani Hills seeking relief from the sweltering plains and recurring illness. Reverends <strong>John Rendall and Elias Mandeville</strong> are credited as the first European settlers who identified the potential of the heights.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The missionaries established a small settlement initially intended as a health retreat. As word spread among the American and British community in South India, others followed. The early settlers found the cool climate (a remarkable contrast to the 40°C heat of Madurai below) to be life-changing. By the 1850s, a small community of European residents had established bungalows, a church, and the basic infrastructure of a hill station.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Colonial Era: British Development (1860s–1947)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The British colonial administration took an interest in Kodaikanal from the 1860s onwards, gradually transforming it into one of South India's premier hill resorts. In <strong>1863</strong>, the Collector of Madurai, <strong>Sir Vere Henry Levinge</strong>, ordered the construction of an artificial lake that would become Kodaikanal's most iconic landmark — the star-shaped <strong>Kodaikanal Lake</strong>, covering 60 acres and fed by the natural streams of the surrounding hills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            In <strong>1872</strong>, <strong>Lieutenant W. H. Coaker</strong> constructed the now-famous <strong>Coaker's Walk</strong> — a 1 km paved promenade along the hillside offering sweeping panoramic views of the Palani plains. Designed as a morning walk for British residents, it became (and remains) one of the most popular walks in India's hill stations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Kodaikanal International School (KIS)</strong>, established in <strong>1901</strong> by the American Mission, is one of the oldest and most prestigious residential schools in India. It attracted the children of foreign missionaries, British officials, and Indian elite — and continues to operate today as a leading international school.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The colonial era also saw the development of <strong>Bryant Park</strong> (a manicured botanical garden named after H. D. Bryant, a Madurai Collector), the Coaker's Walk telescope observatory, and numerous colonial bungalows — many of which still stand and some of which operate as heritage hotels.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Historical Timeline of Kodaikanal
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="px-4 py-3 text-left font-bold w-28">Year</th>
                  <th className="px-4 py-3 text-left font-bold">Event</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Detail</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/40'}>
                    <td className="px-4 py-3 font-bold text-amber-700 border-b border-gray-100 whitespace-nowrap">{row.year}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.event}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell border-b border-gray-100">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Plan your Kodaikanal heritage tour!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — Krithik Tours offers curated Kodaikanal history tours!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Cultural Traditions and the Kurinji Andavar Temple
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Despite the colonial overlay, Kodaikanal's Tamil cultural identity has remained strong. The <strong>Kurinji Andavar Temple</strong> — dedicated to Lord Murugan as the deity of the Kurinji hills — is a living expression of the ancient Tamil tradition that saw Murugan as the patron of mountainous regions. The temple is built near a Kurinji flower nursery and is particularly vibrant during the once-in-12-years bloom event.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Palani Hills also have a strong connection to the <strong>Murugan worship tradition</strong> — the great Palani Murugan temple, one of the six Arupadai Veedu (canonical abodes of Murugan), lies at the base of the hills. Many pilgrims who visit Palani also spend time in Kodaikanal, connecting the spiritual and the scenic in a single journey.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Modern Era: Environmental Controversies and Conservation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The post-independence era brought both tourism growth and environmental challenges. The most significant controversy was the <strong>Hindustan Unilever mercury thermometer factory</strong> — established in the 1980s and shut down in <strong>2001</strong> following sustained public protests and documented evidence of mercury pollution affecting the local environment and community health. The closure was a landmark moment for environmental activism in Tamil Nadu.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <strong>Palani Hills Conservation Council</strong> has been active in documenting the rich biodiversity of the Palani Hills and advocating for stronger protection measures. The shola forests and grasslands of the Palani Hills are recognized as part of one of the world's most important biodiversity hotspots, and ongoing conservation efforts seek to protect endemic species from the pressures of tourism and development.
          </p>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=675&fit=crop"
              alt="Kodaikanal historical landscape colonial era heritage"
              title="Kodaikanal's historical landscape"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">The timeless landscape of Kodaikanal | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Frequently Asked Questions about Kodaikanal History
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "When was Kodaikanal founded?", a: "Kodaikanal was established as a hill station in 1845 by American Madura Mission missionaries. The British subsequently developed it. Kodaikanal Lake was artificially created in 1863 by Collector Sir Vere Henry Levinge." },
              { q: "Who were the original inhabitants of Kodaikanal?", a: "The Palaiyar (Paliyar) and Pulayar tribes were the original indigenous inhabitants of the Palani Hills. They lived as forest dwellers in the dense shola forests long before colonial settlement." },
              { q: "What is the historical significance of Coaker's Walk?", a: "Coaker's Walk is a 1 km pedestrian path built in 1872 by Lieutenant W. H. Coaker. It was constructed as a morning promenade for British residents and offers panoramic views of the Palani hills and plains." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Ready to visit historic Kodaikanal?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — Krithik Tours will plan your perfect Kodaikanal trip!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Explore Historic Kodaikanal</h3>
          <p className="text-amber-100 mb-6">Krithik Tours & Travels offers curated Kodaikanal heritage tours with comfortable cabs and knowledgeable local guides.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors shadow">
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
            <Link to="/blog/hill-stations/kodaikanal-travel-guide" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
            </Link>
            <Link to="/blog/travel-tips/kodaikanal-travel-tips" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              15 Essential Travel Tips for Kodaikanal First-Timers
            </Link>
            <Link to="/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip
            </Link>
            <Link to="/blog/history-culture/munnar-history-culture" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Munnar History and Culture: Tea, Tribes and Colonial Legacy
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
