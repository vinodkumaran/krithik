import { Link } from 'react-router-dom';
import { Clock, Tag, ChevronLeft, MapPin, Phone } from 'lucide-react';
import Header from '../../components/Header';

export default function PalaniTempleHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="/palani.jpg"
          alt="Palani Temple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 text-sm font-medium mb-4 transition-colors"
          >
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              History & Culture
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Pilgrimage
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Palani Temple: 100 Years of History, Devotion &amp; Sacred Heritage
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
            <span>March 14, 2026</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Palani, Tamil Nadu</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Palani', 'Murugan Temple', 'Tamil Nadu', 'Pilgrimage', 'History', 'Dhandayuthapani'].map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>

        {/* Introduction */}
        <div className="prose max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
            <p className="text-gray-700 text-lg leading-relaxed font-medium">
              Perched atop the Sivagiri Hill in Palani, Tamil Nadu, the <strong>Arulmigu Dhandayuthapani Swamy Temple</strong> is one of the most revered shrines in South India. As one of the six canonical abodes (<em>Arupadai Veedu</em>) of Lord Murugan, this temple has witnessed over a millennium of unbroken devotion — but the past 100 years alone tell a remarkable story of transformation, administration, and enduring spiritual significance.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            The Origins: A Temple Older Than Time
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The temple's origin is rooted in the Puranic legend of Lord Murugan, who, after renouncing the world following a dispute with his parents, settled on the Sivagiri Hill in Palani. He is said to have declared <em>"Palam Nee, Nee Palam"</em> — "You are the fruit, you are the fruit" — referring to Lord Shiva. This gave the town its name: <strong>Palani</strong>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            The idol of Dhandayuthapani — carved from a unique compound of nine herbs (<em>navapashanam</em>) by the sage Bhogar — is believed to be over 2,000 years old. This idol is scientifically notable: ablution waters that wash over the idol are collected as sacred medicine (<em>Panchamirtham</em>), believed to carry healing properties from the herbs embedded in the stone.
          </p>

          {/* Historical Timeline Table */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Key Historical Milestones: 1924 – 2024
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The modern era of Palani Temple administration and infrastructure began in the early 20th century. The following table summarises the most significant developments over the last 100 years:
          </p>

          <div className="overflow-x-auto rounded-xl shadow mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                  <th className="px-4 py-3 text-left font-bold w-24">Year</th>
                  <th className="px-4 py-3 text-left font-bold">Event / Milestone</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Significance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { year: '1920s', event: 'British-era formal administration records first standardised', sig: 'Systematic records of temple revenue and rituals began under Madras Presidency oversight' },
                  { year: '1935', event: 'Construction of the winch car (rope car) system initiated', sig: 'First mechanised access to the hilltop temple, reducing pilgrim hardship' },
                  { year: '1951', event: 'Temple handed to Dharmapuram Adheenam administration', sig: 'Significant shift from hereditary trust to a major Shaivite mutt administration' },
                  { year: '1959', event: 'Tamil Nadu HR&CE Act brings temple under State Board', sig: 'The Hindu Religious and Charitable Endowments Department takes charge, professionalising management' },
                  { year: '1965', event: 'Rope car fully operational with modern wire winch system', sig: 'Pilgrims above 100,000 per day could now access the temple more safely' },
                  { year: '1983', event: 'First major Kumbabishekam (consecration) of the modern era', sig: 'Temple towers and shrines were re-consecrated with Vedic rites, attracting over 5 lakh devotees' },
                  { year: '1991', event: 'Silver chariot procession route formalised', sig: 'Annual Thaipusam chariot procession route standardised, becoming one of India\'s largest religious gatherings' },
                  { year: '2000', event: 'Heritage trail and 659-step pathway restored', sig: 'Steps to the hilltop renovated; steel railings and resting shelters added for safety' },
                  { year: '2005', event: 'Panchamirtham receives Geographical Indication (GI) tag', sig: 'GI tag No. 16 issued to Palani Panchamirtham — the first temple offering to receive GI status in India' },
                  { year: '2010', event: 'New aerial ropeway (cable car) commissioned', sig: 'Modern cable car added for physically challenged pilgrims; capacity increased to 3,000 pilgrims/hour' },
                  { year: '2015', event: 'Solar power project installed on temple premises', sig: 'First major South Indian hill temple to use solar energy for its administrative buildings' },
                  { year: '2019', event: 'Digital queue management system introduced', sig: 'Online darshan booking reduces wait times; over 10,000 online bookings made in first month' },
                  { year: '2022', event: 'Major Gopuram renovation completed', sig: 'The 7-tiered Rajagopuram was fully restored with traditional Dravidian artwork and gold-plated finials' },
                  { year: '2024', event: '100-Year Centenary celebrations of formal governance', sig: 'Special centenary Kumbabishekam and cultural programmes held; over 20 lakh devotees visited within the year' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}>
                    <td className="px-4 py-3 font-bold text-amber-700 whitespace-nowrap border-b border-gray-100">{row.year}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.event}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell border-b border-gray-100">{row.sig}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section: Architecture */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Architecture & Sacred Spaces
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The temple complex follows classic <strong>Dravidian architecture</strong>, characterised by tiered pyramidal towers (<em>Gopurams</em>), sculpted corridors (<em>Mandapams</em>), and a sacred tank (<em>Theertham</em>). The main shrine sits at 1,567 feet above sea level, commanding a sweeping view of the Palani plains.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            {[
              { title: 'Rajagopuram', desc: 'The seven-tiered main entrance tower, restored in 2022, rising 128 feet with intricate stucco sculptures of deities from Shaiva tradition.' },
              { title: 'Bhogar\'s Cave (Siddhar Kovil)', desc: 'A rare underground cave shrine where the sage Bhogar is believed to have meditated. Devotees descend steep steps to receive blessings from the Siddhar\'s statue.' },
              { title: 'Navapashanam Idol', desc: 'The presiding deity, crafted from nine medicinal herbs by Bhogar, is unique in the world. The idol is neither stone, metal, nor clay — its exact composition remains a subject of scientific curiosity.' },
              { title: 'Panchamirtham Shrine', desc: 'The GI-tagged sacred offering — made from banana, jaggery, cardamom, honey, and ghee — is prepared daily by licensed vendors following a recipe unchanged for centuries.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow border border-amber-100">
                <h3 className="font-bold text-amber-700 text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Section: Pilgrimage Stats */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Pilgrimage Statistics: A Temple That Grows Every Decade
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            The growth in annual pilgrim footfall at Palani reflects both India's rising spiritual tourism and the temple's expanding infrastructure:
          </p>

          <div className="overflow-x-auto rounded-xl shadow mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-green-700 to-teal-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Decade</th>
                  <th className="px-4 py-3 text-right font-bold">Est. Annual Pilgrims</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Key Infrastructure Development</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { decade: '1920s', pilgrims: '~2 lakh', infra: 'Foot path and palanquin access only' },
                  { decade: '1940s', pilgrims: '~5 lakh', infra: 'Early winch car construction begins' },
                  { decade: '1960s', pilgrims: '~15 lakh', infra: 'Full winch car operation; state administration' },
                  { decade: '1970s', pilgrims: '~25 lakh', infra: 'Expanded dormitories and dharamshalas' },
                  { decade: '1980s', pilgrims: '~40 lakh', infra: 'Thaipusam crowd management formalised' },
                  { decade: '1990s', pilgrims: '~60 lakh', infra: 'Chariot procession route expanded' },
                  { decade: '2000s', pilgrims: '~80 lakh', infra: 'Step renovation, new cable car planning' },
                  { decade: '2010s', pilgrims: '~1 crore+', infra: 'Cable car, solar power, digital queue system' },
                  { decade: '2020s', pilgrims: '~1.5 crore+', infra: 'Gopuram restoration, online bookings, centenary events' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-50/40'}>
                    <td className="px-4 py-3 font-bold text-green-800 border-b border-gray-100">{row.decade}</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold text-right border-b border-gray-100">{row.pilgrims}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell border-b border-gray-100">{row.infra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section: Festivals */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Major Festivals & Their Historical Significance
          </h2>

          <div className="space-y-5 mb-10">
            {[
              {
                festival: 'Thaipusam',
                month: 'January / February',
                desc: 'The most important festival at Palani, observed on the full moon day of the Tamil month Thai. Devotees carry Kavadi (ornate burdens) in fulfilment of vows, walking from distant towns to the temple. This tradition has been documented as far back as the early 1800s. Today, over 10 lakh devotees participate annually, making it one of the largest single-day religious gatherings in Asia.',
                color: 'border-amber-500 bg-amber-50',
              },
              {
                festival: 'Vaikasi Visakam',
                month: 'May / June',
                desc: 'Celebrates the birth star of Lord Murugan. A grand 10-day chariot festival. The silver chariot procession through Palani town has been a central feature since at least the 1920s, when the chariot was first fitted with silver plating donated by devotees from Ceylon (Sri Lanka).',
                color: 'border-orange-500 bg-orange-50',
              },
              {
                festival: 'Panguni Uthiram',
                month: 'March / April',
                desc: "Celebrates the divine marriage of Murugan with Devasena and Valli. The festival's Kalyanam (wedding ceremony) rites follow a liturgical tradition believed to date back to the Sangam age, preserved in the temple's ancient manuscript collection.",
                color: 'border-red-400 bg-red-50',
              },
              {
                festival: 'Skanda Sashti',
                month: 'October / November',
                desc: "Six-day festival celebrating Murugan's victory over Soorapadman. Enacted through dramatic performances of the Soorasamharam, this festival draws pilgrims from across Tamil Nadu and the Tamil diaspora worldwide.",
                color: 'border-teal-500 bg-teal-50',
              },
            ].map((f) => (
              <div key={f.festival} className={`border-l-4 ${f.color} p-5 rounded-r-xl`}>
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-bold text-gray-800 text-lg">{f.festival}</h3>
                  <span className="text-xs font-medium text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200">{f.month}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Section: Navapashanam */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            The Navapashanam Idol: Science Meets Spirituality
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Perhaps the most scientifically intriguing aspect of Palani Temple is the presiding deity — a six-inch statue made from <strong>Navapashanam</strong> (nine poisonous substances that, when combined, become medicinal). The composition is credited to the Siddhar sage <strong>Bhogar</strong>, one of the 18 Siddhars of Tamil tradition.
          </p>

          <div className="overflow-x-auto rounded-xl shadow my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-bold">#</th>
                  <th className="px-4 py-3 text-left font-bold">Substance (Tamil Name)</th>
                  <th className="px-4 py-3 text-left font-bold">Believed Property</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Veeram (Mercuric Chloride)', 'Anti-bacterial, traditionally used to treat skin ailments'],
                  ['2', 'Pooram (Arsenic Trisulphide)', 'Antipyretic, used in Siddha medicine for fever'],
                  ['3', 'Rasam (Mercuric Sulphide)', 'Rejuvenation and anti-ageing properties in Siddha texts'],
                  ['4', 'Jathilingam (Ferrous Sulphate)', 'Iron supplement; anti-anaemic properties'],
                  ['5', 'Silaasathu (Mica)', 'Nerve tonic, memory enhancer'],
                  ['6', 'Mridharsingh (Lead Oxide)', 'Used in Siddha compounds for pain relief'],
                  ['7', 'Lingam (Cinnabar)', 'Antimicrobial properties in traditional use'],
                  ['8', 'Kandagam (Sulphur)', 'Anti-fungal and antiseptic'],
                  ['9', 'Vellai Paadanam (Arsenic)', 'Used in micro-doses in Siddha toxicology for immunity'],
                ].map(([num, sub, prop]) => (
                  <tr key={num} className={parseInt(num) % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-gray-500 font-bold border-b border-gray-100">{num}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{sub}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs border-b border-gray-100">{prop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs italic mb-8">
            Note: The above is based on traditional Siddha texts and historical accounts. The exact composition of the idol remains unconfirmed by modern scientific analysis as the idol is sacred and cannot be subjected to invasive testing.
          </p>

          {/* Section: Panchamirtham */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Panchamirtham: India's First Temple Offering with a GI Tag
          </h2>
          <div className="flex gap-4 items-start bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">GI</div>
            <div>
              <p className="font-bold text-green-800 mb-1">Geographical Indication Tag No. 16 — Issued 2005</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The <em>Panchamirtham</em> of Palani Murugan Temple became the <strong>first temple Prasadam in India</strong> to receive a Geographical Indication (GI) tag. Prepared from five sacred ingredients — ripe banana, jaggery, honey, cardamom, and ghee — using a centuries-old formula, this offering is prepared daily by licensed vendors who follow strict standards supervised by the temple administration. The GI tag protects its authenticity and ensures that only genuinely prepared Panchamirtham carries the Palani name.
              </p>
            </div>
          </div>

          {/* Section: How to Reach */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            How to Reach Palani Temple
          </h2>

          <div className="overflow-x-auto rounded-xl shadow mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
                  <th className="px-4 py-3 text-left font-bold">Mode</th>
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance / Time</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mode: 'By Road', from: 'Coimbatore', dist: '100 km / ~2.5 hrs', note: 'NH 83; frequent buses and cabs available' },
                  { mode: 'By Road', from: 'Madurai', dist: '120 km / ~3 hrs', note: 'NH 44; direct buses from Madurai bus stand' },
                  { mode: 'By Road', from: 'Chennai', dist: '450 km / ~7 hrs', note: 'NH 44 and NH 83; overnight bus services available' },
                  { mode: 'By Train', from: 'Coimbatore', dist: '100 km / ~2 hrs', note: 'Trains to Palani station; then auto-rickshaw to temple' },
                  { mode: 'By Train', from: 'Dindigul', dist: '65 km / ~1.5 hrs', note: 'Regular passenger trains; Palani is a railway junction' },
                  { mode: 'By Air', from: 'Coimbatore Airport', dist: '100 km / ~2.5 hrs', note: 'Nearest airport; cab hire recommended' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                    <td className="px-4 py-3 font-bold text-teal-700 border-b border-gray-100">{row.mode}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row.from}</td>
                    <td className="px-4 py-3 text-gray-700 font-medium border-b border-gray-100">{row.dist}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell border-b border-gray-100">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Ascent to Temple */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Ascending the Hill: Your Three Options
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { title: '659 Steps', desc: 'The traditional pilgrimage route on foot. Devotees climb barefoot as a form of devotion. Steps renovated with granite flooring and equipped with handrails and rest shelters.', tag: 'Traditional' },
              { title: 'Winch Car', desc: 'The original cable-assisted cart system that has been in operation since 1935. Holds up to 4 persons. Still functional and popular for a nostalgic experience.', tag: 'Historic' },
              { title: 'Cable Car (Ropeway)', desc: 'Modern aerial ropeway inaugurated in 2010. Cabins hold up to 12 passengers with panoramic views of the Palani plains. Special lifts available for senior citizens.', tag: 'Modern' },
            ].map((opt) => (
              <div key={opt.title} className="bg-white rounded-xl p-5 shadow border border-gray-100 text-center">
                <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{opt.tag}</span>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{opt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>

          {/* Visiting Tips */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-amber-200 pb-2">
            Practical Visitor Information
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Detail</th>
                  <th className="px-4 py-3 text-left font-bold">Information</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { detail: 'Temple Opening Hours', info: '4:30 AM – 12:30 PM and 4:00 PM – 9:00 PM (daily)' },
                  { detail: 'Dress Code', info: 'Dhoti or lunghi for men; saree or salwar kameez for women. Western formals not permitted in inner sanctum.' },
                  { detail: 'Best Time to Visit', info: 'October to February (cool weather). Avoid peak festival season unless specifically visiting for Thaipusam.' },
                  { detail: 'Online Darshan Booking', info: 'Available at the temple\'s official website. Recommended for weekends to skip queues.' },
                  { detail: 'Panchamirtham Purchase', info: 'Available at licensed stalls in the temple complex. Sealed containers available for travel.' },
                  { detail: 'Photography', info: 'Permitted in outer precincts; not allowed inside the main sanctum.' },
                  { detail: 'Nearest Hospital', info: 'Government Hospital, Palani – 1.5 km from temple base' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-gray-700 border-b border-gray-100 w-48">{row.detail}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{row.info}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Closing */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mt-10">
            <h3 className="font-bold text-gray-800 text-xl mb-3">A Temple That Transcends Time</h3>
            <p className="text-gray-600 leading-relaxed">
              From the sage Bhogar's ancient herbal idol to the GI-tagged Panchamirtham, from a colonial-era winch car to a modern cable ropeway — Palani Temple is a living institution that has adapted to every era while keeping its spiritual heart unchanged. Whether you are a devoted pilgrim, a history enthusiast, or a curious traveller, the Sivagiri Hill offers an experience that is both profoundly sacred and historically extraordinary.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>The next 100 years of Palani's story are still being written — and you can be part of it.</strong>
            </p>
          </div>
        </div>

        {/* CTA Block */}
        <div className="mt-12 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Plan Your Palani Temple Visit</h3>
          <p className="text-green-100 mb-6">
            Krithik Tours & Travels offers dedicated Palani temple tour packages with comfortable cabs, experienced drivers, and local guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8925001292"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors shadow"
            >
              <Phone size={18} />
              Call 8925001292
            </a>
            <Link
              to="/palani-tourist-places"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <MapPin size={18} />
              View Palani Tour Packages
            </Link>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
