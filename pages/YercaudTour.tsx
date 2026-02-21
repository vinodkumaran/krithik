import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function YercaudTour() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/yercaud-tour-package-itinerary/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/yercaud-tour-package-itinerary/"
    },
    "headline": "Yercaud Tour Package: A Peaceful Hill Escape with a Perfect Itinerary",
    "description": "Discover Yercaud's serene coffee estates, panoramic viewpoints and colonial charm with detailed tour package and itinerary.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/Yercaud.jpg",
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
      "name": "Yercaud",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "Yercaud tour package",
      "Yercaud itinerary",
      "Shevaroy Hills",
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
        "name": "Coimbatore"
      },
      {
        "@type": "Place",
        "name": "Palani"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/yercaud-tour-package-itinerary/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Yercaud Tour Package: A Peaceful Hill Escape with a Perfect Itinerary"
      description="Experience the serene beauty of Yercaud with a complete tour package covering coffee estates, viewpoints, and botanical gardens."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/Yercaud.jpg"
          alt="Yercaud Hill Station"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          For travelers seeking serenity over crowds, Yercaud is a hidden gem. Located in the Shevaroy Hills, Yercaud offers quiet roads, coffee estates, and panoramic viewpoints—ideal for slow, meaningful travel.
        </p>

        <p className="text-lg leading-relaxed">
          Historically developed during the British era, Yercaud was known for coffee and spice cultivation. The remnants of colonial bungalows and planned plantations still define its calm charm today.
        </p>

        <p className="text-lg leading-relaxed">
          Krithik Tours & Travels offers a thoughtfully planned Yercaud tour package covering Yercaud Lake, Lady's Seat, Pagoda Point, and botanical gardens—perfectly paced for families and senior travelers.
        </p>

        <p className="text-lg leading-relaxed">
          Unlike commercial hill stations, Yercaud allows you to hear the wind, watch the mist roll in, and truly disconnect. It's ideal for weekend travelers from Tamil Nadu and neighboring states. Travelers exploring <Link to="/coimbatore-marudhamalai-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">nearby spiritual destinations from Yercaud</Link> can easily visit Marudhamalai Temple or other sacred sites in the region.
        </p>

        <p className="text-lg leading-relaxed">
          <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">For travelers comparing hill station experiences</Link>, Kodaikanal offers more tourist attractions and colonial architecture, while Yercaud provides intimate, uncrowded natural beauty.
        </p>

        <p className="text-lg leading-relaxed">
          Many devotees <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">combine hill travel with spiritual visits like Palani</Link>, creating a balanced journey of inner peace and scenic rejuvenation.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Yercaud Tour Package</h2>
          <p className="text-gray-700 mb-4">
            Discover the peaceful charm of Yercaud with a customized tour package from Krithik Tours & Travels.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">How many days are needed for Yercaud trip?</h3>
              <p className="text-gray-700">
                A 2-day trip is ideal to explore Yercaud comfortably. This allows time for lake visits, viewpoint tours, coffee plantation walks, and relaxation without rushing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is special about Yercaud?</h3>
              <p className="text-gray-700">
                Yercaud is known for its peaceful atmosphere, coffee and spice plantations, colonial heritage, and less crowded environment compared to other hill stations. It's perfect for travelers seeking quiet retreats.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What are the must-visit places in Yercaud?</h3>
              <p className="text-gray-700">
                Top attractions include Yercaud Lake, Lady's Seat, Pagoda Point, Shevaroy Temple, Killiyur Falls, Botanical Gardens, and coffee estates. The scenic ghat road offers 20 hairpin bends with beautiful views.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is Yercaud suitable for senior citizens?</h3>
              <p className="text-gray-700">
                Yes, Yercaud is perfect for seniors with its gentle climate, easy-access viewpoints, and relaxed pace. Krithik Tours & Travels provides comfortable vehicles and customized itineraries for elderly travelers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">When is the best time to visit Yercaud?</h3>
              <p className="text-gray-700">
                October to June is ideal. The Summer Festival in May showcases flowers, cultural programs, and local products. Monsoon (July-September) brings lush greenery but can have heavy rains.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can Yercaud be combined with other destinations?</h3>
              <p className="text-gray-700">
                Yes, Yercaud pairs well with Salem (nearby city), Coimbatore, or Palani Temple visits. Many travelers combine hill station relaxation with spiritual temple tours for a complete experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
