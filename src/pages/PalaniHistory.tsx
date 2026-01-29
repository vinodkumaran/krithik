import { Link } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';

export default function PalaniHistory() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://krithiktravels.com/palani-history-temple-history/#blogpost",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://krithiktravels.com/palani-history-temple-history/"
    },
    "headline": "History of Palani Temple: The Sacred Story of Lord Murugan",
    "description": "Explore the ancient history, legends, and spiritual significance of Palani Murugan Temple, one of the six Arupadai Veedu shrines.",
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
      "Palani Temple history",
      "Palani Murugan",
      "Arupadai Veedu",
      "South India temples",
      "Tamil Nadu spirituality",
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
        "name": "Malaysia"
      }
    ],
    "potentialAction": {
      "@type": "ReadAction",
      "target": [
        "https://krithiktravels.com/palani-history-temple-history/"
      ]
    }
  });

  return (
    <BlogLayout
      title="History of Palani Temple: The Sacred Story of Lord Murugan"
      description="Discover the ancient legends, architectural heritage, and spiritual significance of Palani Murugan Temple."
      schemaMarkup={schemaMarkup}
    >
      <div className="space-y-6">
        <img
          src="/palani.jpg"
          alt="Palani Temple History"
          className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        <p className="text-lg leading-relaxed">
          The history of Palani is inseparable from Tamil spiritual identity. Palani Murugan Temple stands as one of the six sacred Arupadai Veedu temples of Lord Murugan.
        </p>

        <p className="text-lg leading-relaxed">
          Legend says Murugan renounced divine fruits and worldly attachments, choosing Palani as a place of wisdom and penance. This philosophy continues to attract devotees seeking clarity, humility, and inner strength.
        </p>

        <p className="text-lg leading-relaxed">
          Historically, the temple evolved through contributions from Chera, Chola, and Pandya kings. Its unique Navapashanam idol, crafted with medicinal substances, adds to its spiritual and cultural significance.
        </p>

        <p className="text-lg leading-relaxed">
          Pilgrims believe that climbing the hill barefoot or fasting before darshan deepens the spiritual reward. These traditions have been passed down for centuries without interruption. To <Link to="/palani-temple-one-day-trip" className="text-green-600 hover:text-green-700 font-semibold underline">plan a one-day Palani Temple visit</Link>, travelers can experience these ancient rituals firsthand with guided support from Krithik Tours & Travels.
        </p>

        <p className="text-lg leading-relaxed">
          To experience Palani beyond rituals, <Link to="/kodaikanal-two-days-trip" className="text-green-600 hover:text-green-700 font-semibold underline">many pilgrims relax in Kodaikanal after darshan</Link>, combining spiritual fulfillment with natural beauty in the nearby hill station.
        </p>

        <p className="text-lg leading-relaxed">
          <Link to="/malaysia-to-south-india-tour-package" className="text-green-600 hover:text-green-700 font-semibold underline">International devotees visiting Palani Temple</Link>, especially from Malaysia and Singapore, find deep cultural connections through Tamil heritage and spiritual traditions preserved at this sacred site.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Palani Temple with Us</h2>
          <p className="text-gray-700 mb-4">
            Experience the sacred history and spiritual energy of Palani Murugan Temple with Krithik Tours & Travels.
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Why is Palani Temple historically significant?</h3>
              <p className="text-gray-700">
                Palani Temple is one of the six Arupadai Veedu shrines of Lord Murugan and represents renunciation and wisdom. It has been a pilgrimage center for over 2000 years with contributions from Chera, Chola, and Pandya dynasties.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is the legend behind Palani Temple?</h3>
              <p className="text-gray-700">
                According to legend, Lord Murugan renounced the divine fruit offered by Sage Narada and chose Palani Hill, declaring that true wisdom lies in renunciation, not in worldly possessions. He is worshipped here as Dhandayuthapani.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What is special about the Palani idol?</h3>
              <p className="text-gray-700">
                The Palani idol is made of Navapashanam, a unique amalgamation of nine medicinal herbs and minerals. It was created by Siddhar Bogar and is believed to have healing properties and spiritual energy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Who built Palani Temple?</h3>
              <p className="text-gray-700">
                While the temple's origins date back thousands of years, it was significantly developed by Chera kings and later expanded by Chola and Pandya rulers. The current structure shows contributions from various dynasties over centuries.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What are the major festivals at Palani Temple?</h3>
              <p className="text-gray-700">
                Thai Poosam, Panguni Uthiram, and Vaikasi Visakam are major festivals attracting millions of devotees. The temple also celebrates monthly festivals on Sashti days dedicated to Lord Murugan.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Can I learn about temple history during my visit?</h3>
              <p className="text-gray-700">
                Yes, Krithik Tours & Travels provides knowledgeable guides who explain the temple's history, legends, architectural significance, and spiritual practices during your pilgrimage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
}
