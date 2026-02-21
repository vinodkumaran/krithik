import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function CoimbatoreMarudhamalai() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/coimbatore-marudhamalai-one-day-trip/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/coimbatore-marudhamalai-one-day-trip/"
    },
    "headline": "Coimbatore & Marudhamalai One Day Trip: Spirituality Meets City Life",
    "description": "Experience the perfect blend of spiritual devotion and urban culture with Marudhamalai Temple and Coimbatore city tour.",
    "image": {
      "@type": "ImageObject",
      "url": "https://krithiktravels.com/Coorg.jpg",
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
      "name": "Marudhamalai Temple",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "keywords": [
      "Marudhamalai Temple",
      "Coimbatore one day trip",
      "Tamil Nadu temples",
      "South India tour",
      "Murugan temples",
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
        "https://krithiktravels.com/coimbatore-marudhamalai-one-day-trip/"
      ]
    }
  });

  return (
    <BlogLayout
      title="Coimbatore & Marudhamalai One Day Trip: Spirituality Meets City Life"
      description="Explore the sacred Marudhamalai Temple and vibrant Coimbatore city in a perfectly planned one-day journey."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/Coorg.jpg"
          alt="Marudhamalai Temple"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          Coimbatore is a city of industry, culture, and devotion. A one-day trip combining the city with Marudhamalai Temple offers travelers a balanced spiritual and urban experience.
        </p>

        <p className="text-lg leading-relaxed">
          Marudhamalai Temple, dedicated to Lord Murugan, is surrounded by medicinal herbs and ancient Siddha traditions. It is believed that sages once meditated here, making it a powerful spiritual site even today.
        </p>

        <p className="text-lg leading-relaxed">
          Krithik Tours & Travels ensures smooth city pickups, temple visits, and optional sightseeing within Coimbatore—perfect for business travelers and short-stay visitors.
        </p>

        <p className="text-lg leading-relaxed">
          The hilltop views, calm chants, and fresh air contrast beautifully with Coimbatore's modern rhythm, offering a refreshing mental pause. For devotees seeking <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">other major Murugan temples like Palani</Link>, the journey creates a meaningful spiritual circuit across Tamil Nadu.
        </p>

        <p className="text-lg leading-relaxed">
          Travelers can <Link to="/yercaud-tour-package-itinerary" className="text-green-600 hover:text-green-700 font-semibold underline">extend your trip to a calm hill station near Coimbatore</Link> like Yercaud, combining temple devotion with peaceful natural surroundings.
        </p>

        <p className="text-lg leading-relaxed">
          This one-day trip is also <Link to="/nri-south-india-tour-pickup-drop-ooty" className="text-green-600 hover:text-green-700 font-semibold underline">ideal for NRIs arriving via Coimbatore</Link>, offering convenient airport pickups and flexible schedules for families visiting from abroad.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Your Coimbatore Trip</h2>
          <p className="text-gray-700 mb-4">
            Experience the perfect blend of spirituality and city culture with Krithik Tours & Travels.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is special about Marudhamalai Temple?</h3>
              <p className="text-gray-700">
                Marudhamalai Temple is surrounded by medicinal herbs and connected to ancient Siddha traditions. The temple sits atop a hill, offering peaceful surroundings and beautiful views, making it a serene spiritual destination.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">How long does a Coimbatore one-day trip take?</h3>
              <p className="text-gray-700">
                A one-day trip covering Marudhamalai Temple and key Coimbatore attractions takes 6-8 hours, including travel, darshan, and optional city sightseeing like museums or shopping areas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What other places can be visited in Coimbatore?</h3>
              <p className="text-gray-700">
                Popular attractions include Marudhamalai Temple, Perur Pateeswarar Temple, Gass Forest Museum, VOC Park, Brookefields Mall, and traditional silk saree shops in Town Hall area.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Is Coimbatore suitable for business + temple visits?</h3>
              <p className="text-gray-700">
                Yes, many business travelers combine work with temple visits. Krithik Tours & Travels offers flexible timing, city pickups, and efficient scheduling perfect for short-stay visitors.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I combine Marudhamalai with Palani Temple visit?</h3>
              <p className="text-gray-700">
                Yes, Palani is approximately 120 km from Coimbatore. Many devotees visit both Murugan temples in a combined 2-day spiritual circuit with comfortable overnight stays.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is the best time to visit Marudhamalai Temple?</h3>
              <p className="text-gray-700">
                Early morning (6 AM - 9 AM) offers peaceful darshan and cooler temperatures. Thai Poosam and Panguni Uthiram are major festival periods attracting large crowds but providing unique spiritual experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
