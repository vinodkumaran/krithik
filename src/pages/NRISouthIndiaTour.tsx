import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function NRISouthIndiaTour() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/nri-south-india-tour-pickup-drop-ooty/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/nri-south-india-tour-pickup-drop-ooty/"
    },
    "headline": "NRI South India Tour: Pickup, Star Hotels & Complete Guided Travel",
    "description": "Complete NRI tour packages for South India with airport pickup, premium hotels, and guided travel across Tamil Nadu destinations.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/ooty.jpg",
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
      "name": "Ooty",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "NRI South India tour",
      "Ooty tour package",
      "Tamil Nadu NRI travel",
      "Airport pickup South India",
      "South India guided tour",
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
        "name": "Palani"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/nri-south-india-tour-pickup-drop-ooty/"
      ]
    }
  });

  return (
    <BlogLayout
      title="NRI South India Tour: Pickup, Star Hotels & Complete Guided Travel"
      description="Experience hassle-free South India travel with complete airport pickup, premium accommodations, and expert guidance."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/ooty.jpg"
          alt="Ooty Hill Station"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          For NRIs visiting India, travel comfort and trust matter most. Krithik Tours & Travels specializes in end-to-end South India tours starting with airport or railway pickup to Ooty and seamless guided journeys.
        </p>

        <p className="text-lg leading-relaxed">
          From the misty hills of Ooty to cultural and spiritual destinations, we handle transport, premium hotel stays, and expert local guidance—excluding airfare.
        </p>

        <p className="text-lg leading-relaxed">
          Our tours are designed for families returning home after years abroad, ensuring safety, familiar language support, and relaxed schedules.
        </p>

        <p className="text-lg leading-relaxed">
          Every itinerary is flexible, whether you wish to visit temples, hill stations, or heritage cities across Tamil Nadu and beyond. <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">Popular hill station choice for NRI families</Link> includes Kodaikanal with its colonial charm and peaceful valleys perfect for multi-generational travel.
        </p>

        <p className="text-lg leading-relaxed">
          Many NRI travelers combine scenic destinations with <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">spiritual destinations included in NRI itineraries</Link> like Palani Temple, creating a meaningful connection to Tamil heritage and traditions.
        </p>

        <p className="text-lg leading-relaxed">
          <Link to="/singapore-to-south-india-tour-package" className="text-green-600 hover:text-green-700 font-semibold underline">Similar guided tours for overseas travelers</Link> from Singapore offer comparable service quality, cultural sensitivity, and flexible planning designed for international guests.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plan Your NRI South India Tour</h2>
          <p className="text-gray-700 mb-4">
            Experience a comfortable, culturally rich journey across South India with complete pickup and drop services.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is included in NRI South India tour packages?</h3>
              <p className="text-gray-700">
                Packages include airport/railway pickup, comfortable A/C vehicles, premium hotel accommodations, guided sightseeing, and drop services. Airfare, meals (unless specified), and personal expenses are excluded.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can itineraries be customized for NRI families?</h3>
              <p className="text-gray-700">
                Absolutely! We customize tours based on family preferences, age groups, interests, and travel pace. Flexible schedules accommodate senior citizens and children comfortably.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Which airports do you provide pickup services from?</h3>
              <p className="text-gray-700">
                We provide pickups from Chennai, Coimbatore, Bangalore, and Madurai airports. Drop services are available to any South Indian city based on your travel plans.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What type of accommodation is provided?</h3>
              <p className="text-gray-700">
                We arrange 3-star to 5-star hotels based on your preference. All accommodations are verified for cleanliness, safety, and comfort suitable for international standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is language support available during the tour?</h3>
              <p className="text-gray-700">
                Yes, our guides are fluent in English, Tamil, and Hindi. We ensure clear communication throughout the journey for a comfortable experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can temple visits be included in the itinerary?</h3>
              <p className="text-gray-700">
                Yes, we specialize in combining hill station tours with temple visits like Palani, Marudhamalai, and other significant spiritual sites across Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
