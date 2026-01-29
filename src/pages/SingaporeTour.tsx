import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function SingaporeTour() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/singapore-to-south-india-tour-package/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/singapore-to-south-india-tour-package/"
    },
    "headline": "Singapore to South India Tour: A Guided Journey Back to Traditions",
    "description": "Premium South India tour packages for Singapore travelers with personalized care, flexible itineraries, and cultural immersion.",
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
      "name": "South India",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "Singapore to South India tour",
      "Singapore travelers Tamil Nadu",
      "South India guided tour",
      "Temple tours from Singapore",
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
        "name": "Kodaikanal"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/singapore-to-south-india-tour-package/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Singapore to South India Tour: A Guided Journey Back to Traditions"
      description="Experience South India's rich heritage with premium tour packages designed for Singapore travelers seeking cultural connections."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/Kodaikanal.jpg"
          alt="South India Hill Station"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          For travelers from Singapore, South India offers familiarity blended with discovery. Krithik Tours & Travels designs premium Singapore to South India tours with personalized care and flexible itineraries.
        </p>

        <p className="text-lg leading-relaxed">
          From airport pickup to luxury stays and guided sightseeing, every detail is handled professionally—allowing travelers to focus on experience, not logistics.
        </p>

        <p className="text-lg leading-relaxed">
          Popular routes include temple pilgrimages, hill station retreats, and heritage towns, all paced comfortably for international travelers. <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">Must-visit spiritual destinations in Tamil Nadu</Link> like Palani Temple connect Singapore visitors to their cultural roots and Tamil spiritual traditions.
        </p>

        <p className="text-lg leading-relaxed">
          Our team understands the expectations of Singapore travelers—punctuality, cleanliness, safety, and clarity at every step. <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">Cool-climate hill stations loved by Singapore travelers</Link> provide refreshing escapes from tropical heat with misty valleys and colonial charm.
        </p>

        <p className="text-lg leading-relaxed">
          Many guests end their journey with a Chennai drop after visiting Palani, Ooty, or Kodaikanal—completing a meaningful South India experience. <Link to="/malaysia-to-south-india-tour-package" className="text-green-600 hover:text-green-700 font-semibold underline">Similar international South India tour experiences</Link> are designed for Malaysian travelers, offering comparable service quality and cultural sensitivity.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Singapore Tour Package</h2>
          <p className="text-gray-700 mb-4">
            Experience a premium, culturally immersive South India journey designed for Singapore travelers.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is included in Singapore to South India tour packages?</h3>
              <p className="text-gray-700">
                Packages include airport pickup, premium transportation, hotel accommodations (3-5 star), guided tours, temple visits, and drop services. Airfare, visa, travel insurance, and meals (unless specified) are excluded.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How does service quality compare to Singapore standards?</h3>
              <p className="text-gray-700">
                We maintain international standards of punctuality, vehicle cleanliness, professional communication, and safety protocols. Our team is trained to meet the expectations of overseas travelers.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Which airports do you provide pickup from?</h3>
              <p className="text-gray-700">
                We provide pickups from Chennai, Bangalore, Coimbatore, and Madurai airports. Drop services are available to any South Indian city based on your departure plans.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can itineraries be customized for families?</h3>
              <p className="text-gray-700">
                Absolutely! We specialize in customizing tours for multi-generational families, ensuring comfortable pacing for seniors and engaging activities for children.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What destinations are popular for Singapore travelers?</h3>
              <p className="text-gray-700">
                Popular destinations include Palani Temple, Kodaikanal, Ooty, Munnar, Coimbatore, Madurai Meenakshi Temple, and Rameswaram. Hill stations combined with temple tours are most preferred.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is vegetarian food readily available?</h3>
              <p className="text-gray-700">
                Yes, South India offers excellent vegetarian cuisine. Hotels and restaurants cater to various dietary preferences including Jain, vegan, and traditional South Indian vegetarian meals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
