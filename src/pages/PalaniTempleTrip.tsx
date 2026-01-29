import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function PalaniTempleTrip() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/palani-temple-one-day-trip/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/palani-temple-one-day-trip/"
    },
    "headline": "Palani Temple One Day Trip: A Sacred Journey to Lord Murugan's Hill Shrine",
    "description": "Complete guide to Palani Temple one-day trip with darshan, rituals, and travel tips from Krithik Tours & Travels.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/palani.jpg",
      "width": 1200,
      "height": 675
    },
    "author": {
      "@type": "Organization",
      "name": "Krithik Tours & Travels",
      "url": "https://krithiktravels.com/"
    },
    "publisher": {
      "@type": "TravelAgency",
      "name": "Krithik Tours & Travels",
      "url": "https://krithiktravels.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://krithiktravels.com/krithik_travels_logo.png",
        "width": 300,
        "height": 100
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "about": {
      "@type": "TouristDestination",
      "name": "Palani Murugan Temple",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "Palani Temple trip",
      "Palani one day trip",
      "Palani Murugan Temple",
      "South India tour",
      "Tamil Nadu travel",
      "Krithik Tours and Travels"
    ],
    "articleSection": "Travel Guide",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "Blog",
      "name": "Krithik Tours & Travels Blog",
      "url": "https://krithiktravels.com/blog/"
    },
    "mentions": [
      {
        "@type": "Place",
        "name": "Kodaikanal"
      },
      {
        "@type": "Place",
        "name": "Coimbatore"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/palani-temple-one-day-trip/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Palani Temple One Day Trip: A Sacred Journey to Lord Murugan's Hill Shrine"
      description="Discover the spiritual journey to Palani Murugan Temple with complete travel guide, rituals, and darshan details."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/palani.jpg"
          alt="Palani Temple"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          Palani is not just a destination—it is a spiritual awakening. A one-day trip to Palani Murugan Temple offers pilgrims a deeply rooted connection to Tamil spiritual history, devotion, and tradition. Perched atop the Palani Hills, this sacred shrine draws millions who seek peace, blessings, and clarity.
        </p>

        <p className="text-lg leading-relaxed">
          The temple is dedicated to Lord Murugan in his unique Dhandayuthapani form, symbolizing renunciation and wisdom. According to legend, Murugan chose Palani after renouncing material wealth, making this hill a powerful symbol of inner realization. The rituals, chants, and temple architecture reflect centuries of uninterrupted devotion.
        </p>

        <p className="text-lg leading-relaxed">
          A one-day Palani trip with Krithik Tours & Travels is designed for comfort and devotion. From early-morning pickup to darshan coordination, rope-car or footpath options, and timely return, every detail is planned for a smooth spiritual experience—ideal for families and senior citizens.
        </p>

        <p className="text-lg leading-relaxed">
          Beyond darshan, Palani offers sacred surroundings like Thiru Avinankudi Temple, Idumban Hill lore, and serene hill views. Travelers often combine this journey with nearby hill destinations or cultural stops for a fulfilling day. To understand <Link to="/palani-history-temple-history" className="text-green-600 hover:text-green-700 font-semibold underline">the deeper spiritual history of Palani Temple</Link>, explore the legends and architectural heritage that make this shrine unique.
        </p>

        <p className="text-lg leading-relaxed">
          If you're planning a longer pilgrimage, many devotees choose to <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">extend your journey into the nearby hill station of Kodaikanal</Link> for a peaceful retreat after darshan. This combination creates a perfect balance of spirituality and nature in a single journey.
        </p>

        <p className="text-lg leading-relaxed">
          For those exploring <Link to="/coimbatore-marudhamalai-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">other popular one-day spiritual trips in Tamil Nadu</Link>, Marudhamalai Temple near Coimbatore offers another powerful Murugan shrine experience with medicinal herb surroundings and Siddha traditions.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Palani Temple Trip</h2>
          <p className="text-gray-700 mb-4">
            Experience a comfortable and spiritually fulfilling journey to Palani Murugan Temple with Krithik Tours & Travels.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Book Now
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long does a Palani Temple one-day trip take?</h3>
              <p className="text-gray-700">
                A complete one-day trip typically takes 8-10 hours, including travel time, darshan, and nearby temple visits. Early morning starts ensure you return comfortably by evening.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is the best time to visit Palani Temple?</h3>
              <p className="text-gray-700">
                Early morning hours (6 AM - 9 AM) are ideal for peaceful darshan. Festival periods like Thai Poosam and Panguni Uthiram see large crowds but offer unique spiritual experiences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is there a rope car facility at Palani Temple?</h3>
              <p className="text-gray-700">
                Yes, Palani Temple offers rope car (winch) facilities for easy access to the hilltop shrine. Alternatively, devotees can climb the 659 steps on foot for a traditional pilgrimage experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I combine Palani Temple trip with Kodaikanal?</h3>
              <p className="text-gray-700">
                Absolutely! Many travelers combine Palani darshan with a Kodaikanal hill station visit. Krithik Tours & Travels offers customized packages that include both destinations for a complete spiritual and scenic experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What facilities are available for senior citizens?</h3>
              <p className="text-gray-700">
                Palani Temple provides wheelchair assistance, rope car access, and rest areas. Krithik Tours & Travels ensures comfortable transport with senior-friendly vehicles and flexible schedules for elderly pilgrims.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What should I wear for Palani Temple visit?</h3>
              <p className="text-gray-700">
                Traditional attire is recommended. Men should wear dhoti or traditional clothes, while women should wear sarees or churidars. Modest clothing that covers shoulders and knees is appropriate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
