import { Link } from 'react-router-dom';
import { Clock, ChevronLeft, MapPin, Phone, Brain as Train, Ticket, Calendar, Info } from 'lucide-react';
import Header from '../../components/Header';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Ooty Toy Train Timings 2027: Nilgiri Mountain Railway Complete Guide",
      "description": "Complete Ooty toy train timings for 2027 — Mettupalayam to Ooty and Coonoor to Ooty schedules, ticket prices, booking tricks, and journey tips for the Nilgiri Mountain Railway. Call 8925001292.",
      "image": "/krithik_tours_hero_background.jpg",
      "author": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "publisher": { "@type": "Organization", "name": "Krithik Tours and Travels" },
      "datePublished": "2026-08-01",
      "dateModified": "2026-08-01",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.krithiktoursandtravels.com/blog/travel-tips/ooty-toy-train-timings-2027" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.krithiktoursandtravels.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.krithiktoursandtravels.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Travel Tips", "item": "https://www.krithiktoursandtravels.com/blog/travel-tips" },
        { "@type": "ListItem", "position": 4, "name": "Ooty Toy Train Timings 2027", "item": "https://www.krithiktoursandtravels.com/blog/travel-tips/ooty-toy-train-timings-2027" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What are the Ooty toy train timings for 2027?", "acceptedAnswer": { "@type": "Answer", "text": "The main Nilgiri Mountain Railway train (56136) departs Mettupalayam at 07:10 and arrives Ooty at 11:55. The return service (56137) departs Ooty at 14:00 and arrives Mettupalayam at 17:30. Additional Coonoor-Ooty services run at 07:45, 12:35, and 16:00. Always confirm timings before travel as schedules may change seasonally." } },
        { "@type": "Question", "name": "How do I book Ooty toy train tickets?", "acceptedAnswer": { "@type": "Answer", "text": "Book tickets online through the IRCTC website (irctc.co.in) or the Railways counter at Mettupalayam, Coonoor, or Ooty stations. First class tickets sell out fast during peak season (April-June), so book at least 1-2 days in advance. Tatkal bookings open 24 hours before departure." } },
        { "@type": "Question", "name": "How long is the Ooty toy train journey from Mettupalayam?", "acceptedAnswer": { "@type": "Answer", "text": "The full Mettupalayam to Ooty journey covers 46 km and takes approximately 4 hours and 45 minutes. The train passes through Coonoor and climbs through 208 curves, 250 bridges, and 16 tunnels in the Nilgiri Mountains." } },
        { "@type": "Question", "name": "Which is better — first class or second class on the Ooty toy train?", "acceptedAnswer": { "@type": "Answer", "text": "First class offers cushioned seats, fewer passengers, and a quieter experience ideal for photography. Second class is more budget-friendly with open windows for unobstructed views. Both classes share the same blue and cream carriages and follow the same route." } },
        { "@type": "Question", "name": "Is the Ooty toy train a UNESCO World Heritage Site?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Nilgiri Mountain Railway was inscribed as a UNESCO World Heritage Site in 2005 as part of the Mountain Railways of India. It is the only daily-operating mountain railway in South India and uses a unique rack and pinion system." } },
        { "@type": "Question", "name": "What is the best time to take the Ooty toy train?", "acceptedAnswer": { "@type": "Answer", "text": "October to March offers the most pleasant weather with clear mountain views. April to June is peak summer season with extra train services, but tickets sell out quickly. Avoid heavy monsoon weeks (July-September) when services may be disrupted." } }
      ]
    },
    {
      "@type": "TrainTrip",
      "name": "Nilgiri Mountain Railway — Mettupalayam to Ooty",
      "provider": { "@type": "Organization", "name": "Indian Railways" },
      "departureStation": { "@type": "TrainStation", "name": "Mettupalayam (MTP)" },
      "arrivalStation": { "@type": "TrainStation", "name": "Ooty (UAM)" },
      "departureTime": "07:10",
      "arrivalTime": "11:55"
    }
  ]
};

const mettupalayamToOoty = [
  { trainNo: '56136', name: 'Mettupalayam-Ooty Passenger', from: 'Mettupalayam (MTP)', dep: '7:10', to: 'Ooty (UAM)', arr: '11:55', duration: '4h 45m', distance: '46 km' },
];

const coonoorToOoty = [
  { trainNo: '56141', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '7:45', to: 'Ooty (UAM)', arr: '9:00', duration: '1h 15m', distance: '19 km' },
  { trainNo: '56136', name: 'Mettupalayam-Ooty Passenger', from: 'Coonoor (ONR)', dep: '10:40', to: 'Ooty (UAM)', arr: '11:55', duration: '1h 15m', distance: '19 km' },
  { trainNo: '56143', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '12:35', to: 'Ooty (UAM)', arr: '13:45', duration: '1h 10m', distance: '19 km' },
  { trainNo: '56138', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '16:00', to: 'Ooty (UAM)', arr: '17:10', duration: '1h 10m', distance: '19 km' },
];

const returnTrains = [
  { trainNo: '56137', name: 'Ooty-Mettupalayam Passenger', from: 'Ooty (UAM)', dep: '14:00', to: 'Mettupalayam (MTP)', arr: '17:30', duration: '3h 30m', distance: '46 km' },
  { trainNo: '56142', name: 'Udagamandalam-Coonoor Passenger', from: 'Ooty (UAM)', dep: '9:15', to: 'Coonoor (ONR)', arr: '10:25', duration: '1h 10m', distance: '19 km' },
  { trainNo: '56140', name: 'Udagamandalam-Coonoor Passenger', from: 'Ooty (UAM)', dep: '15:00', to: 'Coonoor (ONR)', arr: '16:10', duration: '1h 10m', distance: '19 km' },
];

const ticketPrices = [
  { class: 'First Class (FC)', mettupalayamOoty: '₹600', coonoorOoty: '₹240', features: 'Cushioned seats, less crowded, panoramic windows' },
  { class: 'Second Class (2S)', mettupalayamOoty: '₹155', coonoorOoty: '₹60', features: 'Open windows, bench seating, budget-friendly' },
  { class: 'General (GS)', mettupalayamOoty: '₹35', coonoorOoty: '₹20', features: 'Unreserved, basic wooden seats, cheapest option' },
];

const bookingTricks = [
  { trick: 'Book on IRCTC 120 days ahead', detail: 'The Advance Reservation Period (ARP) for the Nilgiri Mountain Railway is 120 days. Book the moment bookings open at 8:00 AM IST for the best chance at first-class seats during peak season.' },
  { trick: 'Try the Tatkal quota', detail: 'If regular tickets are sold out, Tatkal bookings open 24 hours before departure at 10:00 AM IST. First class Tatkal costs roughly ₹750 for Mettupalayam-Ooty but guarantees a seat.' },
  { trick: 'Board at Coonoor instead', detail: 'If Mettupalayam tickets are full, book from Coonoor (ONR) instead. You can reach Coonoor by road from Mettupalayam or Coimbatore in about 1 hour and still enjoy the scenic upper section.' },
  { trick: 'Visit the station counter early', detail: 'A limited number of tickets are held back for the current-day counter booking at Mettupalayam and Ooty stations. Arrive 60-90 minutes before departure for a chance at these.' },
  { trick: 'Travel on weekdays', detail: 'Tuesday through Thursday see significantly lower demand. Weekend and holiday trains fill up days in advance, especially during April-June summer rush.' },
  { trick: 'Check for seasonal extra services', detail: 'During peak summer (April-June) and holiday weekends, Indian Railways adds special trains. Watch the IRCTC site and Southern Railway announcements for these temporary additions.' },
];

const journeyHighlights = [
  { highlight: 'Rack and Pinion System', desc: 'The Nilgiri Mountain Railway uses a unique rack-and-pinion system between Mettupalayam and Coonoor to climb steep gradients of up to 1 in 12.5 — one of only a handful in the world.' },
  { highlight: '208 Curves and 250 Bridges', desc: 'The 46 km route features 208 curves, 250 bridges, and 16 tunnels. The train winds through dense eucalyptus forests, tea estates, and deep valleys.' },
  { highlight: 'Steam and Diesel Locomotives', desc: 'Originally pulled entirely by steam locomotives, the section between Mettupalayam and Coonoor still uses a vintage steam engine for the steep climb. Diesel locomotives handle the Coonoor-Ooty section.' },
  { highlight: 'Coonoor Midway Stop', desc: 'Coonoor station is the midpoint and the main junction. The train halts here for 10-15 minutes — a great time to stretch, grab tea, and photograph the blue-cream carriages.' },
  { highlight: 'UNESCO World Heritage', desc: 'Inscribed in 2005 as part of the Mountain Railways of India, the NMR is recognised globally for its engineering heritage and cultural significance.' },
];

export default function OotyToyTrainTimings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="relative h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="/krithik_tours_hero_background.jpg"
          alt="Ooty toy train Nilgiri Mountain Railway timings 2027"
          title="Ooty Toy Train — Nilgiri Mountain Railway"
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
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Travel Tips</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Ooty</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Ooty Toy Train Timings 2027: Nilgiri Mountain Railway Complete Guide
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
            <span>August 1, 2026</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Ooty, Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link> &rsaquo;{' '}
          <Link to="/blog" className="hover:text-blue-600">Blog</Link> &rsaquo;{' '}
          <span className="text-gray-400">Travel Tips</span> &rsaquo;{' '}
          <span className="text-gray-700 font-medium">Ooty Toy Train Timings 2027</span>
        </nav>

        <div className="prose max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed">
            One thing that promises to be a highlight of your visit to Ooty is the <strong>Nilgiri Mountain Railway</strong> experience. If you are travelling from Mettupalayam to Ooty, go for the <strong>Ooty Mountain Railway</strong> rather than any other mode of transport. More commonly known as the <strong>Ooty Toy Train</strong>, the experience you get here is really out of the world.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            The Nilgiri Mountain Railway is the <strong>only mountain railway that operates on a daily basis in South India</strong>. The train runs one to-and-fro journey every day, and the frequency increases during peak summer to accommodate the heavy inflow of tourists. The train runs from <strong>Mettupalayam to Ooty via Coonoor</strong>.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Planning an Ooty trip with the toy train? Talk to our travel experts today!</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We'll handle your train tickets, cab, and hotel!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Why the Ooty Toy Train Is Unmissable
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The track is a total of <strong>46 kilometres</strong> and runs completely through the picturesque Nilgiri Mountains, and the journey is worth every minute spent on the train. You get both <strong>first class and second class tickets</strong> — and if you are a person who loves some quiet and calm, go for the first class tickets and enjoy the mountains and the beautiful scenery that whisks past you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Initially the mountain train was pulled by a <strong>steam locomotive</strong>, but now this is sometimes replaced by a diesel one to give the train more pull. The carriages have always remained the same <strong>blue and cream colour</strong> and are easily recognised from many South Indian movies. The Nilgiri Mountain Railway was inscribed as a <strong>UNESCO World Heritage Site in 2005</strong> as part of the Mountain Railways of India.
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            {journeyHighlights.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Train size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.highlight}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Ooty Toy Train Timetable 2027
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Nilgiri train timetable currently says that the train <strong>leaves Mettupalayam at 07:10 hours</strong> and reaches Ooty by <strong>11:55 hours</strong>. The return journey from Ooty starts at about <strong>14:00 hrs</strong> and reaches Mettupalayam by about <strong>17:30 hrs</strong>. Always confirm timings before you leave, as Indian Railways may adjust schedules seasonally.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8 flex items-center gap-2">
            <Train size={20} className="text-blue-600" /> Toy Train from Mettupalayam to Ooty
          </h3>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Train No / Name</th>
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Dep</th>
                  <th className="px-4 py-3 text-left font-bold">To</th>
                  <th className="px-4 py-3 text-left font-bold">Arr</th>
                  <th className="px-4 py-3 text-left font-bold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {mettupalayamToOoty.map((t, i) => (
                  <tr key={i} className="bg-white">
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{t.trainNo} / {t.name}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.from}</td>
                    <td className="px-4 py-3 font-bold text-blue-700 border-b border-gray-100">{t.dep}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.to}</td>
                    <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{t.arr}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{t.duration} / {t.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8 flex items-center gap-2">
            <Train size={20} className="text-blue-600" /> Toy Train from Coonoor to Ooty
          </h3>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Train No / Name</th>
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Dep</th>
                  <th className="px-4 py-3 text-left font-bold">To</th>
                  <th className="px-4 py-3 text-left font-bold">Arr</th>
                  <th className="px-4 py-3 text-left font-bold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {coonoorToOoty.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{t.trainNo} / {t.name}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.from}</td>
                    <td className="px-4 py-3 font-bold text-blue-700 border-b border-gray-100">{t.dep}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.to}</td>
                    <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{t.arr}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{t.duration} / {t.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8 flex items-center gap-2">
            <Train size={20} className="text-blue-600" /> Return Trains from Ooty
          </h3>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">Train No / Name</th>
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Dep</th>
                  <th className="px-4 py-3 text-left font-bold">To</th>
                  <th className="px-4 py-3 text-left font-bold">Arr</th>
                  <th className="px-4 py-3 text-left font-bold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {returnTrains.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{t.trainNo} / {t.name}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.from}</td>
                    <td className="px-4 py-3 font-bold text-teal-700 border-b border-gray-100">{t.dep}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.to}</td>
                    <td className="px-4 py-3 font-bold text-green-700 border-b border-gray-100">{t.arr}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{t.duration} / {t.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-400 p-4 rounded-xl my-6">
            <div className="flex items-start gap-3">
              <Info size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Important:</strong> Train timings are subject to change by Indian Railways. Always verify the latest schedule on the IRCTC website or at the station counter before your travel date. During monsoon (July-September), services may be cancelled or delayed due to landslides.
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Ooty Toy Train Ticket Prices 2027
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left font-bold">Class</th>
                  <th className="px-4 py-3 text-left font-bold">Mettupalayam → Ooty</th>
                  <th className="px-4 py-3 text-left font-bold">Coonoor → Ooty</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Features</th>
                </tr>
              </thead>
              <tbody>
                {ticketPrices.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-gray-800 border-b border-gray-100">{t.class}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.mettupalayamOoty}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{t.coonoorOoty}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell border-b border-gray-100">{t.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2 flex items-center gap-2">
            <Ticket size={24} className="text-blue-600" /> Ooty Train Booking Tricks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Getting a confirmed ticket on the Nilgiri Mountain Railway — especially first class during peak season — can be challenging. These <strong>booking tricks</strong> will help you secure your seat:
          </p>
          <div className="space-y-4 mb-8">
            {bookingTricks.map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.trick}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Want us to handle your Ooty toy train booking?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — We arrange train tickets, cabs from Coimbatore, and Ooty hotel stays!</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2 flex items-center gap-2">
            <Calendar size={24} className="text-blue-600" /> Best Time to Ride the Ooty Toy Train
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { period: 'October – March', label: 'Best Overall', desc: 'Pleasant weather (10-20°C), clear mountain views, and manageable crowds. Ideal for photography and comfortable travel.' },
              { period: 'April – June', label: 'Peak Summer', desc: 'Busiest season with extra train services added. Book 2-3 weeks ahead. Temperatures 15-25°C. Great for escaping the plains heat.' },
              { period: 'July – September', label: 'Monsoon', desc: 'Lush green landscapes but risk of service disruptions due to landslides. Fewer tourists — best for solitude seekers.' },
              { period: 'December – January', label: 'Winter', desc: 'Coldest months (5-15°C). Misty mountain views are magical but carry warm clothing. Book early for Christmas/New Year rush.' },
            ].map((s) => (
              <div key={s.period} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-bold text-gray-800">{s.period}</h3>
                  <span className="text-xs font-bold text-blue-600">{s.label}</span>
                </div>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            How to Reach Mettupalayam Railway Station
          </h2>
          <div className="overflow-x-auto rounded-xl shadow mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-bold">From</th>
                  <th className="px-4 py-3 text-left font-bold">Distance</th>
                  <th className="px-4 py-3 text-left font-bold">Travel Time</th>
                  <th className="px-4 py-3 text-left font-bold">Best Option</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Coimbatore Junction', '35 km', '~45 min', 'Cab or local train to Mettupalayam'],
                  ['Coimbatore Airport', '45 km', '~1 hr', 'Cab directly to Mettupalayam station'],
                  ['Ooty (by road)', '46 km', '~2 hrs (ghat road)', 'Cab down to Mettupalayam for return trip'],
                  ['Palani', '120 km', '~3 hrs', 'Cab via Dharapuram and Coimbatore'],
                  ['Bangalore', '410 km', '~8 hrs', 'Overnight bus/train to Coimbatore, then cab'],
                ].map(([from, dist, time, opt], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}>
                    <td className="px-4 py-3 font-bold text-blue-700 border-b border-gray-100">{from}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{dist}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{time}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm border-b border-gray-100">{opt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-10 border-b-2 border-blue-200 pb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'What are the Ooty toy train timings for 2027?', a: 'The main train (56136) departs Mettupalayam at 07:10 and arrives Ooty at 11:55. The return (56137) departs Ooty at 14:00 and arrives Mettupalayam at 17:30. Additional Coonoor-Ooty services run at 07:45, 12:35, and 16:00. Confirm before travel.' },
              { q: 'How do I book Ooty toy train tickets?', a: 'Book through IRCTC (irctc.co.in) or at station counters. First class sells out fast during peak season — book 1-2 days ahead. Tatkal opens 24 hours before departure at 10:00 AM IST.' },
              { q: 'How long is the journey from Mettupalayam to Ooty?', a: 'The full journey covers 46 km and takes about 4 hours 45 minutes. The train passes through 208 curves, 250 bridges, and 16 tunnels in the Nilgiri Mountains.' },
              { q: 'Which is better — first class or second class?', a: 'First class offers cushioned seats and a quieter ride ideal for photography. Second class is budget-friendly with open windows for unobstructed views. Both share the same blue-cream carriages.' },
              { q: 'Is the Ooty toy train a UNESCO World Heritage Site?', a: 'Yes. The Nilgiri Mountain Railway was inscribed as a UNESCO World Heritage Site in 2005 as part of the Mountain Railways of India. It is the only daily-operating mountain railway in South India.' },
              { q: 'What is the best time to take the Ooty toy train?', a: 'October to March is ideal with pleasant weather and clear views. April-June is peak summer with extra services but heavy demand. Avoid heavy monsoon weeks when services may be disrupted.' },
            ].map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-8">
            <p className="font-semibold text-blue-800 m-0">Ready for the Ooty toy train experience?</p>
            <p className="mt-2 m-0 text-gray-700">Call us: <a href="tel:+918925001292" className="text-blue-700 font-bold">8925001292</a> — Krithik Tours will plan your complete Ooty trip with train tickets, cab, and hotel!</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-2">Book Your Ooty Toy Train Trip</h3>
          <p className="text-blue-100 mb-6">Krithik Tours & Travels offers complete Ooty packages with toy train tickets, A/C cabs from Coimbatore, and hotel stays.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8925001292" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow">
              <Phone size={18} /> Call 8925001292
            </a>
            <Link to="/ooty-hill-station-itinerary" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              <MapPin size={18} /> View Ooty Packages
            </Link>
          </div>
        </div>

        <section className="mt-12 bg-white rounded-2xl p-8 shadow border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
          <div className="space-y-3">
            <Link to="/blog/hill-stations/kodaikanal-travel-guide" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu
            </Link>
            <Link to="/blog/hill-stations/yercaud-travel-guide" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Yercaud Travel Guide: Salem's Hidden Hill Station Gem
            </Link>
            <Link to="/blog/hill-stations/munnar-travel-guide" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Munnar Travel Guide: Kerala's Most Stunning Hill Station
            </Link>
            <Link to="/blog/travel-tips/mysore-travel-tips" className="block text-blue-700 hover:text-blue-800 font-medium hover:underline">
              Mysore Travel Tips: Everything You Need to Know Before You Visit
            </Link>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            <ChevronLeft size={18} /> Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
