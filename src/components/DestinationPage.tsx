import { MapPin, Phone, Bus, CheckCircle, MessageCircle, Hotel, Navigation, Users, Shield, Banknote, MapPinned } from 'lucide-react';
import { useState } from 'react';
import Header from './Header';
import BookingModal from './BookingModal';
import { PackageItinerary } from '../data/itineraries';

function getInclusionIcon(inclusion: string) {
  const lowerInclusion = inclusion.toLowerCase();

  if (lowerInclusion.includes('hotel') || lowerInclusion.includes('accommodation')) {
    return <Hotel size={20} className="text-green-600 flex-shrink-0" />;
  } else if (lowerInclusion.includes('airport') || lowerInclusion.includes('railway') || lowerInclusion.includes('pickup')) {
    return <Navigation size={20} className="text-green-600 flex-shrink-0" />;
  } else if (lowerInclusion.includes('driver') || lowerInclusion.includes('guide')) {
    return <Users size={20} className="text-green-600 flex-shrink-0" />;
  } else if (lowerInclusion.includes('family') || lowerInclusion.includes('safe')) {
    return <Shield size={20} className="text-green-600 flex-shrink-0" />;
  } else if (lowerInclusion.includes('toll') || lowerInclusion.includes('charges')) {
    return <Banknote size={20} className="text-green-600 flex-shrink-0" />;
  } else if (lowerInclusion.includes('tamil') || lowerInclusion.includes('anywhere')) {
    return <MapPinned size={20} className="text-green-600 flex-shrink-0" />;
  }

  return <CheckCircle size={20} className="text-green-600 flex-shrink-0" />;
}

interface DestinationPageProps {
  destination: {
    name: string;
    title: string;
    description: string;
    image: string;
    fleetInfo: {
      sedan: string;
      suv: string;
      minibus: string;
    };
  };
  itinerary: PackageItinerary;
  showHeroBanner?: boolean;
  preFooterImage?: string;
  preFooterImageLink?: string;
}

export default function DestinationPage({
  destination,
  itinerary,
  showHeroBanner = true,
  preFooterImage,
  preFooterImageLink
}: DestinationPageProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header isDestinationPage={true} />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {destination.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{destination.description}</p>
          {showHeroBanner && (
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-96 object-cover rounded-2xl shadow-xl mb-8"
            />
          )}
        </div>

        {/* Fleet & Package Includes Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fleet Card */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-xl p-8 border-2 border-teal-200">
            <div className="flex items-center gap-3 mb-6">
              <Bus size={32} className="text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-800">Fleet Available</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Sedan (4-5 Seater)</h3>
                <p className="text-gray-600">{destination.fleetInfo.sedan}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">SUV (5-7 Seater)</h3>
                <p className="text-gray-600">{destination.fleetInfo.suv}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Minibus (8-13 Seater)</h3>
                <p className="text-gray-600">{destination.fleetInfo.minibus}</p>
              </div>
            </div>
          </div>

          {/* Package Includes Card */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Package Includes</h2>
            </div>
            <div className="space-y-3">
              {itinerary.inclusions?.map((inclusion, index) => (
                <div key={index} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mt-0.5">
                    {getInclusionIcon(inclusion)}
                  </div>
                  <p className="text-gray-700 font-medium">{inclusion}</p>
                </div>
              ))}
            </div>
            {itinerary.exclusions && itinerary.exclusions.length > 0 && (
              <div className="mt-6 pt-6 border-t-2 border-green-200">
                <h3 className="font-bold text-gray-800 mb-3 text-sm">Not Included:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {itinerary.exclusions.map((exclusion, index) => (
                    <li key={index}>• {exclusion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Day-wise Itinerary Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              {itinerary.duration} Itinerary
            </h2>
            <p className="text-gray-600 text-lg">Detailed day-by-day plan</p>
          </div>

          <div className="space-y-6">
            {itinerary.itinerary.map((day, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-green-600 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Day {day.day}: {day.title}</h3>
                  {day.accommodation && (
                    <div className="flex items-center gap-2 text-green-100">
                      <MapPin size={18} />
                      <span>{day.accommodation}</span>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600 font-bold text-sm">
                            {actIndex + 1}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="text-gray-700 leading-relaxed">{activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-2xl p-12 text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready for an Amazing Journey?</h2>
          <p className="text-xl mb-8 text-green-100">Book your {destination.name} tour with us today!</p>
          <button
            onClick={() => setBookingModalOpen(true)}
            className="bg-white text-green-600 hover:bg-green-50 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone className="inline mr-2" size={20} />
            Book This Tour
          </button>
        </div>
      </main>

      {/* Pre-Footer Promotional Image */}
      {preFooterImage && (
        <div className="w-full bg-gradient-to-b from-white to-gray-50 py-8">
          {preFooterImageLink ? (
            <a
              href={preFooterImageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full hover:opacity-95 transition-opacity"
            >
              <img
                src={preFooterImage}
                alt="Special Tour Package"
                className="w-full h-auto object-contain max-h-[600px] cursor-pointer"
              />
            </a>
          ) : (
            <img
              src={preFooterImage}
              alt="Special Tour Package"
              className="w-full h-auto object-contain max-h-[600px]"
            />
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/krithik_travels_logo.png"
                alt="Krithik Tours & Travels"
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">Your trusted travel partner for unforgettable journeys.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <div className="space-y-2">
                <a
                  href="https://wa.me/918925001292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Us
                </a>
                <a href="mailto:krithiktravels2607@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} className="mr-2" />
                  Email Us
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/krithik_tours_travels_palani" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/krithiktoursandtravels" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Krithik Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/918925001292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={destination.name}
      />
    </div>
  );
}
