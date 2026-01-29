import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function KodaikanalTrip() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/kodaikanal-two-days-trip/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/kodaikanal-two-days-trip/"
    },
    "headline": "Kodaikanal Two Days Trip: Discover the Princess of Hill Stations",
    "description": "Complete 2-day Kodaikanal itinerary covering Pillar Rocks, Coaker's Walk, Bryant Park and more scenic destinations.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/Kodaikanal.jpg",
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
      "name": "Kodaikanal",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "Kodaikanal trip",
      "Kodaikanal two days",
      "Princess of Hill Stations",
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
        "name": "Palani"
      },
      {
        "@type": "Place",
        "name": "Yercaud"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/kodaikanal-two-days-trip/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Kodaikanal Two Days Trip: Discover the Princess of Hill Stations"
      description="Explore Kodaikanal's misty valleys, colonial heritage, and natural beauty with a complete 2-day travel guide."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/Kodaikanal.jpg"
          alt="Kodaikanal Hill Station"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          Nestled in the Western Ghats, Kodaikanal is where mist meets memory. A two-day trip allows travelers to truly absorb its cool climate, colonial history, and untouched natural beauty—making it one of South India's most loved hill stations.
        </p>

        <p className="text-lg leading-relaxed">
          Founded in 1845 as a retreat for missionaries, Kodaikanal still carries British architectural charm blended with Tamil hill culture. Iconic places like Coaker's Walk, Bryant Park, and Kodai Lake reflect how nature and history coexist harmoniously here.
        </p>

        <p className="text-lg leading-relaxed">
          Krithik Tours & Travels curates a relaxed two-day itinerary covering Pillar Rocks, Silver Cascade Falls, Pine Forests, and sunset viewpoints—without rushing. Comfortable stays, safe hill driving, and local guidance ensure a premium travel experience.
        </p>

        <p className="text-lg leading-relaxed">
          Kodaikanal is also a storyteller's paradise. The fog-covered valleys, eucalyptus air, and silent forest roads create moments that stay long after the trip ends. Couples, families, and photographers all find something deeply personal here. <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">Many travelers combine Kodaikanal with Palani Temple darshan</Link>, creating a perfect balance of spirituality and nature in a single journey.
        </p>

        <p className="text-lg leading-relaxed">
          For travelers seeking <Link to="/yercaud-tour-package-itinerary" className="text-green-600 hover:text-green-700 font-semibold underline">another peaceful hill station option in Tamil Nadu</Link>, Yercaud offers quiet coffee estates and serene lake views, ideal for those who prefer calm over crowds.
        </p>

        <p className="text-lg leading-relaxed">
          <Link to="/nri-south-india-tour-pickup-drop-ooty" className="text-green-600 hover:text-green-700 font-semibold underline">NRI travelers often include Kodaikanal in guided South India tours</Link> with complete pickup, hotel arrangements, and flexible itineraries designed for families visiting from abroad.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Kodaikanal Trip</h2>
          <p className="text-gray-700 mb-4">
            Experience the Princess of Hill Stations with a perfectly planned two-day itinerary from Krithik Tours & Travels.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is the best time to visit Kodaikanal?</h3>
              <p className="text-gray-700">
                April to June and September to October are ideal. Summer offers pleasant weather while monsoon brings lush greenery. Winter (December-February) can be quite cold with temperatures dropping to 8°C.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can we cover Kodaikanal in two days?</h3>
              <p className="text-gray-700">
                Yes, a two-day trip allows you to cover major attractions like Kodai Lake, Pillar Rocks, Coaker's Walk, Bryant Park, Pine Forests, and Silver Cascade Falls comfortably without rushing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What should I pack for Kodaikanal trip?</h3>
              <p className="text-gray-700">
                Pack warm clothing (jackets, sweaters), comfortable walking shoes, sunscreen, and camera. Even in summer, evenings can be cool. During winter, heavy woolens are essential.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is Kodaikanal suitable for families and senior citizens?</h3>
              <p className="text-gray-700">
                Absolutely! Kodaikanal offers easy-access viewpoints and gentle walks. Krithik Tours & Travels provides comfortable vehicles and paced itineraries perfect for all age groups.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can we combine Palani Temple and Kodaikanal in one trip?</h3>
              <p className="text-gray-700">
                Yes, Palani is approximately 65 km from Kodaikanal. Many pilgrims visit Palani Temple in the morning and continue to Kodaikanal for a two-day hill station retreat.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What are the must-visit places in Kodaikanal?</h3>
              <p className="text-gray-700">
                Top attractions include Kodai Lake, Pillar Rocks, Coaker's Walk, Bryant Park, Bear Shola Falls, Pine Forests, Silver Cascade Falls, and Guna Caves. Two days allow you to explore these at a comfortable pace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
