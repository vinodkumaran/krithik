import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, MapPin, Tag, Phone, Car, User, Home, Brain as Train, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';

const faqs = [
  {
    q: 'What is Arupadai Veedu?',
    a: 'Arupadai Veedu refers to the six sacred abodes of Lord Murugan located across Tamil Nadu. These are Thiruchendur, Palani, Swamimalai, Thiruttani, Pazhamudircholai, and Thiruparankundram. Visiting all six temples is considered one of the most auspicious pilgrimage journeys in South India.',
  },
  {
    q: 'How many days does the Arupadai Veedu tour take?',
    a: 'Our Arupadai Veedu package covers all 6 Murugan temples in 3 Days and 2 Nights. The itinerary is carefully planned to minimize travel time while giving you quality darshan time at each temple.',
  },
  {
    q: 'Is transportation included in the Arupadai Veedu package?',
    a: 'Yes, the package includes a private air-conditioned car with an experienced driver-cum-guide for the entire 3-day journey. Pickup from your home or railway station is also included.',
  },
  {
    q: 'Which hotels are included in the stay?',
    a: 'The tour includes 2 nights of hotel accommodation — Night 1 in Madurai and Night 2 in Thanjavur. Hotels are clean, comfortable, and conveniently located near the pilgrimage route.',
  },
  {
    q: 'Are meals included in the Arupadai Veedu tour package?',
    a: 'Meals are not included in the base package. However, all six temple towns have excellent vegetarian restaurants and temple prasad facilities. Our driver will guide you to the best local eateries.',
  },
  {
    q: 'Can the itinerary be customized?',
    a: 'Absolutely. We can customize the itinerary based on your group size, travel dates, preferred hotel budget, and any additional temples or sightseeing stops you wish to include.',
  },
  {
    q: 'Is this tour suitable for elderly pilgrims?',
    a: 'Yes. Our driver-guides are experienced with senior travelers. We plan temple darshans during less crowded hours and assist with special darshan queues. Palani hill is accessible via rope car or winch — no climbing required.',
  },
  {
    q: 'What is the best time of year to do the Arupadai Veedu pilgrimage?',
    a: 'The tour can be done year-round. The most auspicious times are during Thai Poosam (January–February), Panguni Uttaram (March–April), and Skanda Sashti (October–November). Weekday travel is recommended to avoid large temple crowds.',
  },
  {
    q: 'How do I book the Arupadai Veedu package?',
    a: 'You can book by calling or WhatsApp-ing us at +91 89250 01292. We confirm your booking immediately and share the detailed itinerary. No advance payment required to confirm your slot.',
  },
  {
    q: 'What is included in Krithik Travels Arupadai Veedu package?',
    a: 'The package includes: private A/C car, experienced driver-cum-guide, home/station pickup and drop, 2 nights hotel accommodation, toll and parking charges. Meals, temple entrance fees, and personal expenses are excluded.',
  },
];

const temples = [
  {
    name: 'Palani Murugan Temple',
    location: 'Palani, Dindigul District',
    day: 'Day 1',
    image: '/palani.jpg',
    desc: 'One of the most visited pilgrimage centres in India, perched atop Sivagiri Hill. Accessible by rope car, winch, or 659 steps.',
  },
  {
    name: 'Pazhamudircholai',
    location: 'Alagar Koil Road, Madurai',
    day: 'Day 1',
    image: '/palani.jpg',
    desc: 'The only Arupadai Veedu located in a forest setting, nestled amid the lush Alagar Hills near Madurai.',
  },
  {
    name: 'Thiruparankundram',
    location: 'Thiruparankundram, Madurai',
    day: 'Day 1',
    image: '/palani.jpg',
    desc: 'A rock-cut cave temple dating back to the Pandya era, believed to be the site of Lord Murugan\'s divine wedding.',
  },
  {
    name: 'Thiruchendur Murugan Temple',
    location: 'Thiruchendur, Thoothukudi District',
    day: 'Day 2',
    image: '/palani.jpg',
    desc: 'The only Arupadai Veedu situated on the seashore. The sight of the temple against the Bay of Bengal is unforgettable.',
  },
  {
    name: 'Swamimalai Murugan Temple',
    location: 'Swamimalai, Kumbakonam',
    day: 'Day 2',
    image: '/palani.jpg',
    desc: 'Where Murugan taught the meaning of the Pranava mantra (Om) to Lord Shiva — hence the name Swaminatha (teacher of the father).',
  },
  {
    name: 'Tiruttani Murugan Temple',
    location: 'Tiruttani, Tiruvallur District',
    day: 'Day 3',
    image: '/palani.jpg',
    desc: 'The final stop on the Arupadai Veedu circuit, situated atop Tiruttani Hill. Believe to grant relief from the malefic effects of Rahu and Ketu.',
  },
];

export default function ArupadaiVeeduTour() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const tourSchema = {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Arupadai Veedu Tour Package – All 6 Murugan Temples in 3 Days',
      description:
        'Complete Arupadai Veedu pilgrimage package visiting all 6 sacred abodes of Lord Murugan in Tamil Nadu in 3 days and 2 nights. Includes private A/C car, driver-cum-guide, hotel stay in Madurai and Thanjavur, home pickup and drop.',
      url: 'https://www.krithiktoursandtravels.com/arupadai-veedu-murugan-temple-tour',
      touristType: ['Pilgrims', 'Families', 'Devotees', 'Spiritual Seekers'],
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 6,
        itemListElement: temples.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'TouristAttraction',
            name: t.name,
            description: t.desc,
            address: {
              '@type': 'PostalAddress',
              addressLocality: t.location,
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN',
            },
          },
        })),
      },
      provider: {
        '@type': 'TravelAgency',
        name: 'Krithik Tours and Travels',
        telephone: '+918925001292',
        url: 'https://www.krithiktoursandtravels.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Palani',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'TravelAgency',
          name: 'Krithik Tours and Travels',
        },
      },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.krithiktoursandtravels.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.krithiktoursandtravels.com/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Arupadai Veedu Tour',
          item: 'https://www.krithiktoursandtravels.com/arupadai-veedu-murugan-temple-tour',
        },
      ],
    };

    const scripts = [tourSchema, faqSchema, breadcrumbSchema].map((schema) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.text = JSON.stringify(schema);
      document.head.appendChild(el);
      return el;
    });

    document.title = 'Arupadai Veedu Tour Package | All 6 Murugan Temples in 3 Days | Krithik Travels';

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute(
      'content',
      'Best Arupadai Veedu tour package from Tamil Nadu — visit all 6 sacred Murugan temples (Palani, Thiruchendur, Swamimalai, Thiruparankundram, Pazhamudircholai, Tiruttani) in 3 Days 2 Nights with private A/C car, driver-guide, hotel stay. Book at +91 89250 01292.'
    );
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDesc);

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[540px] overflow-hidden">
        <img
          src="/palani.jpg"
          alt="Arupadai Veedu Murugan Temple Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 text-sm font-medium mb-4 transition-colors"
          >
            <ChevronLeft size={16} /> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Itineraries</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Pilgrimage</span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">3 Days / 2 Nights</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            Arupadai Veedu — Best Travel Agency in Tamil Nadu
          </h1>
          <p className="text-gray-200 mt-2 text-lg max-w-2xl">
            All 6 Sacred Murugan Temples in 3 Days with Private A/C Car, Driver &amp; Hotel Stay
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Clock size={14} /> 8 min read</span>
            <span>March 14, 2026</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> Tamil Nadu</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Arupadai Veedu', 'Murugan Temples', 'Tamil Nadu Pilgrimage', '3 Days Tour', 'Krithik Travels', 'Temple Tour Package'].map((tag) => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full">
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>

        {/* Intro */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-10">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            The <strong>Arupadai Veedu</strong> — the six sacred abodes of Lord Murugan — represent the holiest pilgrimage circuit in Tamil Nadu. Krithik Tours and Travels offers a carefully crafted <strong>3 Days / 2 Nights private tour package</strong> that covers all six temples in comfort, with an experienced driver-guide, AC car, hotel stays in Madurai and Thanjavur, and door-to-door service from your home.
          </p>
        </div>

        {/* Package Highlights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Package Includes</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Car size={20} className="text-amber-600" />, title: 'A/C Car', desc: 'Comfortable air-conditioned vehicle throughout the tour' },
              { icon: <User size={20} className="text-amber-600" />, title: 'Driver cum Guide', desc: 'Experienced driver and local temple guide' },
              { icon: <Home size={20} className="text-amber-600" />, title: 'Home Pickup', desc: 'Convenient pickup from your home or preferred location' },
              { icon: <Train size={20} className="text-amber-600" />, title: 'Station Pickup/Drop', desc: 'Railway station transfers included at no extra cost' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 6 Temples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">The 6 Sacred Temples</h2>
          <p className="text-gray-600 mb-6">Each temple on the Arupadai Veedu circuit has a unique mythology, architecture, and spiritual significance.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {temples.map((temple) => (
              <div key={temple.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={temple.image} alt={temple.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {temple.day}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-base">{temple.name}</h3>
                  <p className="text-xs text-amber-600 font-medium mb-2 flex items-center gap-1">
                    <MapPin size={11} /> {temple.location}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">{temple.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Day-wise Itinerary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Day-wise Itinerary</h2>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-amber-500 text-white px-6 py-3">
                <h3 className="font-bold text-lg">Day 1 — Palani | Pazhamudircholai | Thiruparankundram</h3>
                <p className="text-amber-100 text-sm">Night Stay: Hotel in Madurai</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Arrival at Palani Railway Junction — private car pickup',
                    'Direct transfer to Palani Murugan Temple for morning darshan',
                    'Hotel fresh-up facility',
                    'Evening visit to Pazhamudircholai Murugan Temple (forest shrine near Madurai)',
                    'Visit Thiruparankundram Murugan Temple — ancient rock-cut cave temple',
                    'Night stay at hotel in Madurai',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-amber-600 text-white px-6 py-3">
                <h3 className="font-bold text-lg">Day 2 — Thiruchendur | Swamimalai</h3>
                <p className="text-amber-100 text-sm">Night Stay: Hotel in Thanjavur</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Morning departure from Madurai to Thiruchendur by private car',
                    '10:00 AM — Darshan at Thiruchendur Murugan Temple (seaside temple on Bay of Bengal)',
                    '5:00 PM — Visit Swamimalai Murugan Temple near Kumbakonam',
                    '8:00 PM — Reach hotel in Thanjavur',
                    'Overnight stay at hotel in Thanjavur',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-amber-700 text-white px-6 py-3">
                <h3 className="font-bold text-lg">Day 3 — Tiruttani</h3>
                <p className="text-amber-200 text-sm">Tour concludes with divine blessings</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    'Morning departure from Thanjavur to Tiruttani',
                    'Darshan at Tiruttani Murugan Temple — sixth and final Arupadai Veedu',
                    'Drop at your home by private car',
                    'Tour concludes with divine blessings',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="mb-12">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                <CheckCircle size={20} /> Inclusions
              </h3>
              <ul className="space-y-2">
                {[
                  'Private A/C car throughout the tour',
                  'Hotel accommodation for 2 nights',
                  'Experienced driver-cum-guide',
                  'Toll charges',
                  'Parking charges',
                  'Home pickup and drop',
                  'Railway station pickup and drop',
                ].map((item) => (
                  <li key={item} className="text-sm text-green-800 flex items-start gap-2">
                    <CheckCircle size={14} className="shrink-0 mt-0.5 text-green-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                <XCircle size={20} /> Exclusions
              </h3>
              <ul className="space-y-2">
                {[
                  'Meals (Breakfast / Lunch / Dinner)',
                  'Temple entrance fees',
                  'Special darshan charges',
                  'Personal expenses',
                  'Tips for driver',
                ].map((item) => (
                  <li key={item} className="text-sm text-red-800 flex items-start gap-2">
                    <XCircle size={14} className="shrink-0 mt-0.5 text-red-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <strong>Note:</strong> Itinerary can be customized based on your preferences, travel dates, and group size. Contact us for a personalized trip plan.
          </p>
        </section>

        {/* Why Krithik Travels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Krithik Travels for Arupadai Veedu?</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              Krithik Tours and Travels is a <strong>Palani-based travel agency</strong> with deep roots in South India's pilgrimage circuit. Our drivers are not just experienced road travelers — they are dedicated guides who have completed the Arupadai Veedu circuit dozens of times and can provide insight into each temple's history, rituals, and best darshan timings.
            </p>
            <p>
              We are one of the few travel agencies in Tamil Nadu that offers a <strong>fully private, door-to-door Arupadai Veedu package</strong> — no shared buses, no fixed group departures. Your family travels on your schedule, in your own private A/C car.
            </p>
            <p>
              Our packages are transparent with <strong>no hidden charges</strong>. Toll, parking, and all road expenses are covered. You only pay for meals and temple special darshans, which we recommend budgeting separately for the best experience.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-amber-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="shrink-0 text-amber-600" />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-gray-400" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Begin Your Arupadai Veedu Yatra?</h2>
          <p className="text-amber-100 mb-6 max-w-xl mx-auto">
            Call us now to confirm your dates. No advance payment required. We handle everything from pickup to darshan guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8925001292"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-all shadow-lg"
            >
              <Phone size={20} /> Call 89250 01292
            </a>
            <a
              href="https://wa.me/918925001292"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-amber-800 transition-all shadow-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
