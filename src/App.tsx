import { MapPin, Phone, Mail, Calendar, Menu, X, FileText, Car, Bus } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './components/BookingModal';
import ItineraryModal from './components/ItineraryModal';
import MobileMenu from './components/MobileMenu';
import { getItinerary } from './data/itineraries';

function App() {
  const whatsappNumber = '918925001292';
  const whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [itineraryModalOpen, setItineraryModalOpen] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState<any>(null);

  const topDestinations = [
    {
      name: 'Palani One Day Trip',
      price: 5999,
      duration: '1 Day',
      image: '/palani.jpg'
    },
    {
      name: 'Alleppey Boat Stay',
      price: 14999,
      duration: '2 Days',
      image: '/allepey.jpg'
    }
  ];

  const primaryPackages = [
    {
      name: 'Kodaikanal',
      weekend: 14999,
      holiday: 22999,
      image: '/Kodaikanal.jpg'
    },
    {
      name: 'Yercaud',
      weekend: 14999,
      holiday: 22999,
      image: '/Yercaud.jpg'
    },
    {
      name: 'Munnar',
      weekend: 14999,
      holiday: 22999,
      image: '/munnar copy.jpg'
    }
  ];

  const secondaryPackages = [
    {
      name: 'Mysore',
      weekend: 14999,
      holiday: 22999,
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Ooty',
      weekend: 14999,
      holiday: 22999,
      image: '/ooty.jpg'
    },
    {
      name: 'Coorg',
      weekend: 14999,
      holiday: 22999,
      image: 'https://images.pexels.com/photos/12344275/pexels-photo-12344275.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Valparai',
      weekend: 14999,
      holiday: 22999,
      image: 'https://images.pexels.com/photos/14355953/pexels-photo-14355953.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const handleBooking = (packageName: string) => {
    setSelectedPackage(packageName);
    setBookingModalOpen(true);
  };

  const handleViewItinerary = (packageName: string) => {
    const itinerary = getItinerary(packageName);
    if (itinerary) {
      setCurrentItinerary(itinerary);
      setItineraryModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 -mb-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img
              src="/krithik_travels_logo.png"
              alt="Krithik Tours & Travels"
              className="h-12 md:h-16 lg:h-20"
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/hire"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Hire a Cab
              </a>
              <button
                onClick={() => handleBooking('General Inquiry')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image Grid (On Mobile: Shows Second) */}
            <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                  <img
                    src="/Kodaikanal.jpg"
                    alt="Kodaikanal"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Kodaikanal</h3>
                    <p className="text-sm text-green-100">From ₹14,999</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                  <img
                    src="/munnar copy.jpg"
                    alt="Munnar"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Munnar</h3>
                    <p className="text-sm text-green-100">From ₹14,999</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                  <img
                    src="/Yercaud.jpg"
                    alt="Yercaud"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Yercaud</h3>
                    <p className="text-sm text-green-100">From ₹14,999</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                  <img
                    src="/ooty.jpg"
                    alt="Ooty"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Ooty</h3>
                    <p className="text-sm text-green-100">From ₹14,999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text (On Mobile: Shows First) */}
            <div className="space-y-6 animate-fade-in order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Commit to Comfort Travel
              </h1>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed">
                Discover amazing destinations across South India with our expertly curated tour packages. Experience comfort, reliability, and unforgettable memories.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#packages"
                  className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
                >
                  Explore Packages
                </a>
                <button
                  onClick={() => handleBooking('General Inquiry')}
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  <Phone size={20} className="mr-2" />
                  Book Now
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">10+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">500+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">5★</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Tours
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {topDestinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold">
                  ₹{dest.price.toLocaleString()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={20} className="mr-2" />
                  <span>{dest.duration}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewItinerary(dest.name)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <FileText size={20} />
                    Itinerary
                  </button>
                  <button
                    onClick={() => handleBooking(dest.name)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Primary Tour Packages */}
      <section id="packages" className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              PRIMARY TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Most Popular Destinations
            </h2>
            <p className="text-gray-600 text-lg">
              Choose between weekend getaways or extended holiday packages
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {primaryPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="relative h-56">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                    {pkg.name}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-gray-600 text-sm">2 Days 1 Night - Weekend Trip</p>
                      <p className="text-2xl font-bold text-gray-800">₹{pkg.weekend.toLocaleString()}</p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <p className="text-gray-600 text-sm">3 Days 2 Nights - Holiday Trip</p>
                      <p className="text-2xl font-bold text-gray-800">₹{pkg.holiday.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={20} />
                      Itinerary
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Tour Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              SECONDARY TOUR PACKAGES
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              More Amazing Destinations
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {secondaryPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {pkg.name}
                  </h3>
                </div>
                <div className="p-5">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Weekend</span>
                      <span className="text-lg font-bold text-gray-800">₹{pkg.weekend.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Holiday</span>
                      <span className="text-lg font-bold text-gray-800">₹{pkg.holiday.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={18} />
                      Itinerary
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-semibold transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Find Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4017831.435226106!2d73.04038802499997!3d10.448253400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df1d1a988ecf%3A0x9b59ceba4e38654f!2sKrithik%20Tours%20%26Travels%20Palani!5e0!3m2!1sen!2sin!4v1763308951484!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Fleet
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles for your journey
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Dzire Tour</h3>
              <p className="text-green-600 font-bold text-center mb-3">starts at ₹3,599</p>
              <p className="text-gray-600 text-sm text-center">Comfortable sedan for small groups</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Tavera or Innova</h3>
              <p className="text-blue-600 font-bold text-center mb-3">starts at ₹5,999</p>
              <p className="text-gray-600 text-sm text-center">Spacious SUVs for family trips</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Traveller Rental</h3>
              <p className="text-purple-600 font-bold text-center mb-3">starts at ₹7,599</p>
              <p className="text-gray-600 text-sm text-center">Perfect for medium-sized groups</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Coach & Tourist Buses</h3>
              <p className="text-orange-600 font-bold text-center mb-3">based on no of people</p>
              <p className="text-gray-600 text-sm text-center">Large group transportation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/krithik_travels_logo.png"
                alt="Krithik Tours & Travels"
                className="h-16 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                Commit to Comfort Travel. Your trusted travel partner for unforgettable journeys.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Phone size={20} className="mr-3" />
                  +91 89250 01292
                </a>
                <a
                  href="mailto:krithiktoursandtravels@gmail.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} className="mr-3" />
                  krithiktoursandtravels@gmail.com
                </a>
                <a
                  href="https://share.google/7d6cvuPYRa27zVHO2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <MapPin size={20} className="mr-3" />
                  View on Google Maps
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#packages" className="text-gray-300 hover:text-white transition-colors">Tour Packages</a></li>
                <li><button onClick={() => handleBooking('General Inquiry')} className="text-gray-300 hover:text-white transition-colors">Book Now</button></li>
                <li><a href="https://share.google/7d6cvuPYRa27zVHO2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Krithik Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <button
        onClick={() => handleBooking('General Inquiry')}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
        aria-label="Book Now"
      >
        <Phone size={28} />
      </button>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={selectedPackage}
      />

      {currentItinerary && (
        <ItineraryModal
          isOpen={itineraryModalOpen}
          onClose={() => setItineraryModalOpen(false)}
          packageName={currentItinerary.name}
          itinerary={currentItinerary.itinerary}
          duration={currentItinerary.duration}
          inclusions={currentItinerary.inclusions}
          exclusions={currentItinerary.exclusions}
        />
      )}

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
}

export default App;
