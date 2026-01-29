import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function MalaysiaTour() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/malaysia-to-south-india-tour-package/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/malaysia-to-south-india-tour-package/"
    },
    "headline": "Malaysia to South India Tour: Heritage, Hills & Spiritual Trails",
    "description": "Exclusive tour packages for Malaysian travelers exploring South India temples, hill stations, and cultural heritage.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/munnar.jpg",
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
      "Malaysia to South India tour",
      "Malaysian travelers Tamil Nadu",
      "South India heritage tour",
      "Temple tours from Malaysia",
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
        "https://krithiktravels.com/malaysia-to-south-india-tour-package/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Malaysia to South India Tour: Heritage, Hills & Spiritual Trails"
      description="Experience the cultural connection between Malaysia and South India with curated temple tours, hill stations, and heritage destinations."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/munnar.jpg"
          alt="South India Landscape"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          Travelers from Malaysia share a deep cultural connection with South India. Krithik Tours & Travels offers exclusive Malaysia to South India tour packages focused on comfort, heritage, and spirituality.
        </p>

        <p className="text-lg leading-relaxed">
          From arrival pickup to curated temple visits, hill stations, and star-category hotels, we manage everything except airfare—ensuring a stress-free journey.
        </p>

        <p className="text-lg leading-relaxed">
          Destinations often include Palani, Kodaikanal, Ooty, and Coimbatore, allowing travelers to reconnect with roots while exploring scenic landscapes. Understanding <Link to="/palani-history-temple-history" className="text-green-600 hover:text-green-700 font-semibold underline">temples deeply connected to Tamil spiritual heritage</Link> like Palani Murugan Temple creates meaningful experiences for Malaysian devotees.
        </p>

        <p className="text-lg leading-relaxed">
          Our multilingual guides and culturally aware planning make the journey smooth for families and elders. <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">Hill stations included in Malaysia guest itineraries</Link> offer comfortable climate and scenic beauty perfect for relaxation after temple visits.
        </p>

        <p className="text-lg leading-relaxed">
          The tour usually concludes with a comfortable drop to Chennai or any preferred South Indian city. <Link to="/nri-south-india-tour-pickup-drop-ooty" className="text-green-600 hover:text-green-700 font-semibold underline">Complete pickup and drop services across South India</Link> ensure international travelers experience hassle-free journeys from arrival to departure.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Malaysia Tour Package</h2>
          <p className="text-gray-700 mb-4">
            Experience a culturally rich South India journey designed specifically for Malaysian travelers.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is included in Malaysia to South India tour packages?</h3>
              <p className="text-gray-700">
                Packages include airport pickup from Chennai/Coimbatore/Bangalore, comfortable transportation, hotel accommodations, guided temple visits, sightseeing, and drop services. Airfare and meals (unless specified) are excluded.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Are guides fluent in Tamil?</h3>
              <p className="text-gray-700">
                Yes, all our guides are fluent in Tamil, English, and understand Malaysian Tamil cultural nuances. We ensure smooth communication and cultural comfort throughout your journey.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Which temples are typically included for Malaysian visitors?</h3>
              <p className="text-gray-700">
                Popular temples include Palani Murugan Temple, Marudhamalai Temple, Madurai Meenakshi Temple, Rameswaram, and Thiruchendur. Itineraries are customized based on your spiritual preferences.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can we include hill stations in the temple tour?</h3>
              <p className="text-gray-700">
                Absolutely! Many Malaysian travelers combine temple pilgrimages with hill station visits like Kodaikanal, Ooty, or Munnar for a balanced spiritual and leisure experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What type of accommodation is provided?</h3>
              <p className="text-gray-700">
                We arrange 3-star to 5-star hotels based on your preference and budget. All accommodations meet international cleanliness and safety standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long should we plan for a complete South India tour?</h3>
              <p className="text-gray-700">
                A comprehensive tour typically ranges from 7 to 14 days, covering major temples, hill stations, and cultural destinations. We customize duration based on your availability and interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
