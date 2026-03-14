import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Mysore History: The Royal City of Wadiyars and Tipu Sultan",
      "description": "Trace the history of Mysore from ancient Mahishamati to the Vijayanagara Empire, legendary Tipu Sultan, Wadiyar dynasty, and Sir M. Visvesvaraya. Call 8925001292.",
      "image": "https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2025-01-01",
      "dateModified": "2025-06-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktours.com/blog/history-culture/mysore-history" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktours.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktours.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "History & Culture", "item": "https://www.krithiktours.com/blog/history-culture" },
        { "@type": "ListItem", "position": 4, "name": "Mysore History", "item": "https://www.krithiktours.com/blog/history-culture/mysore-history" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the history of Mysore Palace?", "acceptedAnswer": { "@type": "Answer", "text": "The original Mysore Palace was built in the 14th century but burned down in 1897 during a royal wedding. The present magnificent Amba Vilas Palace was built between 1897–1912 by renowned British architect Henry Irwin in the Indo-Saracenic style. It features ornate interiors, golden throne, and stained glass ceilings." } },
        { "@type": "Question", "name": "Who was Tipu Sultan?", "acceptedAnswer": { "@type": "Answer", "text": "Tipu Sultan (1750–1799), known as the Tiger of Mysore, was the ruler of the Kingdom of Mysore from 1782 to 1799. He is remembered for his fierce resistance against British colonialism, innovations in military technology including rocket artillery, and administrative reforms. He died in the Fourth Anglo-Mysore War (1799) defending his capital Srirangapatna." } },
        { "@type": "Question", "name": "What was the contribution of Sir M. Visvesvaraya to Mysore?", "acceptedAnswer": { "@type": "Answer", "text": "Sir Mokshagundam Visvesvaraya (1860–1962) served as the Dewan (Prime Minister) of Mysore from 1912 to 1918. He transformed Mysore into a model princely state by establishing industries, educational institutions, and the Krishna Raja Sagara dam. He is regarded as one of India's greatest engineers and statesmen. His birthday (September 15) is celebrated as Engineers' Day in India." } }
      ]
    }
  ]
};

const timeline = [
  { year: "Ancient Era", event: "Mahishamati — origin of Mysore's ancient name", detail: "Named after the demon Mahisha killed by Goddess Chamundeshwari on Chamundi Hill" },
  { year: "1399", event: "Kingdom of Mysore founded by Yaduraya", detail: "Established as a vassal to the Vijayanagara Empire; the Wadiyar dynasty begins" },
  { year: "1565", event: "Battle of Talikota — fall of Vijayanagara", detail: "Mysore becomes increasingly independent after Vijayanagara's collapse" },
  { year: "1761", event: "Hyder Ali seizes power in Mysore", detail: "Military commander Hyder Ali overthrows the weakened Wadiyar regents and establishes his own rule" },
  { year: "1782", event: "Tipu Sultan succeeds his father Hyder Ali", detail: "The Tiger of Mysore launches aggressive campaigns against British interests in South India" },
  { year: "1799", event: "Fall of Srirangapatna — Tipu Sultan dies", detail: "The Fourth Anglo-Mysore War ends with Tipu's death; the British restore the Wadiyar dynasty" },
  { year: "1912", event: "Present Mysore Palace completed by Henry Irwin", detail: "The original palace burned in 1897; the current Indo-Saracenic masterpiece is inaugurated" },
  { year: "1912–1918", event: "Sir M. Visvesvaraya serves as Dewan of Mysore", detail: "Transforms Mysore into a model state with industries, dams, and educational institutions" },
  { year: "1947", event: "Indian Independence; Mysore becomes part of India", detail: "The Maharaja of Mysore signs the instrument of accession to the Indian Union" },
  { year: "1956", event: "Karnataka Reorganization — Mysore becomes state capital", detail: "Under States Reorganization Act, the Mysore State is expanded to include Kannada-speaking regions" },
];

export default function MysoreHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592639296346-560c37a0f711?w=1200&h=675&fit=crop"
          alt="Mysore Palace history Wadiyar dynasty Tipu Sultan Karnataka heritage"
          title="Mysore Palace — Royal Heritage of Karnataka"
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
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Karnataka</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Mysore History: The Royal City of Wadiyars and Tipu Sultan
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 11 min read</span>
            <span>January 1, 2025</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Mysore, Karnataka</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-amber-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-amber-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">History & Culture</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Mysore History</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            Few cities in India carry the weight of history as magnificently as <strong>Mysore</strong>. The <strong>Mysore history</strong> is a 600-year saga of royal dynasties, military genius, colonial intrigue, and renaissance-era development — a story that spans from the demon-slaying goddess on Chamundi Hill to the rockets of Tipu Sultan, the architectural splendour of the Wadiyar palace, and the industrialising vision of Sir M. Visvesvaraya. Today, this heritage lives and breathes in the city's palaces, temples, monuments, and the incomparable Dasara festival.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Ready to explore royal Mysore? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — We'll build your perfect Mysore heritage tour!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Historical Background: Ancient Origins of Mysore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The city of Mysore takes its name from <strong>Mahisuru</strong> — derived from <em>Mahisha</em>, the buffalo-headed demon of Hindu mythology. According to legend, <strong>Goddess Chamundeshwari</strong> slew the demon Mahisha on the hill now called <strong>Chamundi Hill</strong>, liberating the people of the region. This mythological event is celebrated to this day through the Dasara festival, which re-enacts the victory of good over evil.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The ancient city of <strong>Mahishamati</strong> is mentioned in the <em>Mahabharata</em> — one of Hinduism's great epics — suggesting Mysore\'s historical significance dates back to at least the early centuries of the Common Era. The Chamundeshwari Temple atop the hill is one of Karnataka's most ancient and venerated shrines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            In <strong>1399</strong>, <strong>Yaduraya</strong> (also called Vijaya) founded the <strong>Kingdom of Mysore</strong> as a feudatory of the great <strong>Vijayanagara Empire</strong> — the last great Hindu empire of South India that ruled from Hampi. The Wadiyar dynasty that Yaduraya founded would rule Mysore — with interruptions — for over 600 years, making it one of the longest-reigning royal dynasties in Indian history.
          </p>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <strong>Did You Know?</strong><br />
            The Mysore Dasara celebration has a history of over 400 years, predating even the current palace. The present Mysore Palace (Amba Vilas) was built between 1897 and 1912 after the original palace burned down during a royal wedding. Designed by British architect Henry Irwin, it is now the second most visited monument in India after the Taj Mahal.
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Hyder Ali: The Military Commander Who Reshaped Mysore (1761–1782)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The 18th century brought a dramatic disruption to Wadiyar rule. <strong>Hyder Ali</strong> (c. 1720–1782), a military commander of humble origins, rose through the Mysore army ranks and by <strong>1761</strong> had effectively seized power from the Wadiyar regents, who retained nominal title while Hyder Ali governed in practice. A brilliant military strategist, Hyder Ali rapidly modernized the Mysore army with French military assistance, developed a rocket corps, and successfully fought two Anglo-Mysore Wars against the British East India Company.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hyder Ali was also an astute administrator who developed trade, expanded Mysore's territory dramatically, and introduced systematic revenue collection. He established good relations with the French — a relationship his son Tipu Sultan would continue as the primary counterweight to British power in South India.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Tipu Sultan: The Tiger of Mysore (1782–1799)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Tipu Sultan</strong> (1750–1799) is one of Indian history's most celebrated and complex figures. Succeeding his father Hyder Ali, Tipu transformed the Kingdom of Mysore into one of the most powerful states in 18th-century India. His military innovations were remarkable: he pioneered the use of <strong>iron-cased rocket artillery</strong> — a technology that influenced the development of military rocketry in Europe and is recognized by NASA as a precursor to modern rocketry.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tipu Sultan built his capital at <strong>Srirangapatna</strong> (15 km from Mysore), developing it into a fortified island city. His magnificent summer palace <strong>Daria Daulat Bagh</strong> (Sea of Wealth) still stands as a testament to his refined aesthetic sensibility. He introduced a new calendar, a new coinage system, and promoted sericulture (silk production) — laying the foundation for Mysore's world-famous silk industry.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tipu Sultan died defending Srirangapatna in the <strong>Fourth Anglo-Mysore War on May 4, 1799</strong> — a date that marked the end of significant Indian resistance to British expansion in South India. He was 48 years old. His death shocked even his British adversaries, who had referred to him with respect as the "Tiger of Mysore."
          </p>

          <figure className="my-8">
            <img
              src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=1200&h=675&fit=crop"
              alt="Mysore Karnataka historical palace heritage royal architecture"
              title="Royal heritage architecture in Mysore"
              loading="lazy"
              width="1200"
              height="675"
              className="w-full rounded-xl shadow"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">Heritage architecture in Karnataka | Source: Unsplash</figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            The Wadiyar Restoration and the Modern Palace (1799–1947)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            After Tipu Sultan's death, the British restored the <strong>Wadiyar dynasty</strong> to the Mysore throne — albeit as a dependent princely state. Under British protection, Mysore became a model of administrative development. The original Mysore Palace, a 14th-century structure at the heart of the fort, burned down in <strong>1897</strong> during the wedding celebrations of Maharaja Chamaraja Wadiyar's daughter.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The present <strong>Amba Vilas Palace</strong> — one of the most spectacular royal buildings in Asia — was designed by renowned British architect <strong>Henry Irwin</strong> and completed in <strong>1912</strong>. Built in the <em>Indo-Saracenic</em> style that blends Hindu, Islamic, and Gothic architectural elements, the palace features a golden throne, stained glass ceilings, ornate durbar halls, and is illuminated by 97,000 light bulbs during Dasara and on Sunday evenings.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Sir M. Visvesvaraya: The Builder of Modern Mysore
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The period from <strong>1912 to 1918</strong> saw the most transformative chapter in Mysore's modern history under the stewardship of <strong>Sir Mokshagundam Visvesvaraya</strong> as Dewan (Prime Minister) of Mysore. Visvesvaraya was one of India's greatest civil engineers and administrators. He built the <strong>Krishna Raja Sagara (KRS) Dam</strong> across the Cauvery River — one of the largest dams in Asia at the time — providing irrigation, power, and drinking water to the region.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under his leadership, Mysore established premier educational institutions, industrial enterprises, and public works that made it a byword for progressive governance in colonial India. The <strong>Visvesvaraya Industrial and Technological Museum</strong> in Bangalore is named in his honour. His birthday, September 15, is celebrated as <strong>Engineers' Day</strong> across India.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Mysore Historical Timeline
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-amber-600 text-white">
                  <th className="px-4 py-3 text-left font-bold w-28">Year</th>
                  <th className="px-4 py-3 text-left font-bold">Event</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Significance</th>
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

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Frequently Asked Questions about Mysore History
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: "What is the history of Mysore Palace?", a: "The original palace was built in the 14th century and burned in 1897. The current Amba Vilas Palace was built 1897–1912 by architect Henry Irwin in the Indo-Saracenic style. It is now India's second most visited monument after the Taj Mahal." },
              { q: "Who was Tipu Sultan?", a: "Tipu Sultan (1750–1799), the Tiger of Mysore, was the ruler of Mysore 1782–1799. He pioneered iron-cased rocket artillery, fiercely resisted British colonialism, and died defending his capital Srirangapatna in the Fourth Anglo-Mysore War." },
              { q: "What was the contribution of Sir M. Visvesvaraya to Mysore?", a: "Visvesvaraya served as Dewan of Mysore 1912–1918 and transformed it into a model state with the KRS Dam, industries, and educational institutions. His birthday (September 15) is celebrated as Engineers' Day in India." },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-amber-800 m-0">Ready to explore royal Mysore?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-amber-700 font-bold">8925001292</a> — Krithik Tours will plan your perfect Mysore heritage experience!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Explore Royal Mysore</h3>
          <p className="text-amber-100 mb-6">Krithik Tours & Travels offers heritage-focused Mysore tour packages with comfortable cabs and expert local guides.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 font-bold px-8 py-3 rounded-full hover:bg-amber-50 transition-colors shadow">
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
            <Link to="/blog/travel-tips/mysore-travel-tips" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Mysore Travel Tips: Everything You Need to Know Before You Visit
            </Link>
            <Link to="/blog/itineraries/mysore-3-days-itinerary" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage
            </Link>
            <Link to="/blog/history-culture/alleppey-history" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Alleppey History: The Venice of the East and Kerala's Backwater Heritage
            </Link>
            <Link to="/blog/history-culture/kodaikanal-history" className="block text-amber-700 hover:text-amber-800 font-medium hover:underline">
              Kodaikanal History: From Palani Hills to British Hill Resort
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
