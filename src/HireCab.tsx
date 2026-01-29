import { MapPin, Phone, Mail, Car, Menu, X } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './components/BookingModal';

function HireCab() {
  const whatsappNumber = '918925001292';
  const whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleBooking = (packageName: string) => {
    setSelectedPackage(packageName);
    setBookingModalOpen(true);
  };

  const services = [
    {
      title: 'Pick-up & drop',
      icon: Car
    },
    {
      title: 'Airport transfers',
      icon: Car
    },
    {
      title: 'Hotel transfers',
      icon: Car
    },
    {
      title: 'Taxi rentals',
      icon: Car
    }
  ];

  const tourPackages = [
    'Palani - One Day Trip',
    'Kodaikanal / Yercaud',
    'Arupadai Veedu',
    'Kerala Tours'
  ];

  const fleet = [
    'Dzire Tour',
    'Tavera or Innova',
    'Coach & Tourist Buses',
    'Traveller Rental'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img
                src="/krithik_travels_logo.png"
                alt="Krithik Tours & Travels"
                className="h-12 md:h-16 lg:h-20"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Home
              </a>
              <button
                onClick={() => handleBooking('Cab Hire')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Phone size={20} />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="/"
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBooking('Cab Hire');
                }}
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Book Now
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Car Rental & Cab Services
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Bus Booking, Tour Packages, and Personalized Travel Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Services */}
          <div className="space-y-8">
            {/* Vehicle Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Car size={32} className="text-green-600" />
                Vehicle Services
              </h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tour Packages */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-green-600">
                Tour Packages
              </h2>
              <ul className="space-y-4">
                {tourPackages.map((pkg, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    {pkg}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Fleet */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-green-600">
                Our Fleet
              </h2>
              <ul className="space-y-4">
                {fleet.map((vehicle, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                    <Car size={20} className="text-blue-600" />
                    {vehicle}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-green-200 transition-colors"
                >
                  <Phone size={24} />
                  8925001292
                </a>
                <div className="flex items-start gap-3 text-lg">
                  <MapPin size={24} className="mt-1 flex-shrink-0" />
                  <div>
                    163 Palani Andavar Steel Building<br />
                    Near SBI Town Branch, Dindigul Road<br />
                    Palani HO-624601
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            {/* Weekend Package Image */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/Hill stations set-1 4 personals.png"
                alt="Weekend Package - Yercaud or Kodaikanal"
                className="w-full h-auto"
              />
            </div>

            {/* Services Overview Image */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/Krithik - print march 4.png"
                alt="Krithik Tours & Travels Services"
                className="w-full h-auto"
              />
            </div>

            {/* About Company */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Company</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At Krithik Tours & Travels Palani, we create personalized itineraries tailored to your unique travel style, whether you seek relaxation or adventure.
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-blue-700 mb-1">Personalized Itineraries</h3>
                    <p>We tailor travel plans to match your unique style, whether you prefer relaxation or adventure.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 mb-1">Diverse Travel Options</h3>
                    <p>Enjoy luxurious getaways or budget-friendly trips, all offering great value and quality.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 mb-1">Hassle-Free Travel</h3>
                    <p>Our team handles everything from planning to logistics, ensuring a stress-free journey.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 mb-1">Unforgettable Experiences</h3>
                    <p>Trust us to create meaningful journeys that leave lasting memories.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Fill out a quick form and we'll contact you shortly
          </p>
          <button
            onClick={() => handleBooking('Cab Hire')}
            className="inline-flex items-center gap-3 bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            <Phone size={28} />
            Book Now
          </button>
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
                  href="mailto:info@krithiktravels.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} className="mr-3" />
                  info@krithiktravels.com
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
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><button onClick={() => handleBooking('Cab Hire')} className="text-gray-300 hover:text-white transition-colors">Book Now</button></li>
                <li><a href="https://share.google/7d6cvuPYRa27zVHO2" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Krithik Tours & Travels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={selectedPackage}
      />
    </div>
  );
}

export default HireCab;
