import { MapPin, Phone, Mail, Calendar, FileText, Car, Bus, Instagram, Facebook, Youtube, MessageCircle, Hotel, Brain as Train, UtensilsCrossed, MapPinned } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookingModal from '../components/BookingModal';
import ItineraryModal from '../components/ItineraryModal';
import ReviewSlider from '../components/ReviewSlider';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { getItinerary } from '../data/itineraries';

function TamilHomepage() {
  useEffect(() => {
    document.documentElement.lang = 'ta';
    document.documentElement.style.fontFamily = "'Noto Sans Tamil', sans-serif";
    document.body.style.fontFamily = "'Noto Sans Tamil', sans-serif";

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const hreflangLinks = [
      { rel: 'alternate', hreflang: 'en', href: '/' },
      { rel: 'alternate', hreflang: 'ta', href: '/tamil' },
      { rel: 'alternate', hreflang: 'hi', href: '/hindi' },
      { rel: 'alternate', hreflang: 'te', href: '/telugu' },
      { rel: 'alternate', hreflang: 'kn', href: '/kannada' }
    ];

    hreflangLinks.forEach(linkData => {
      const link = document.createElement('link');
      link.rel = linkData.rel;
      link.hreflang = linkData.hreflang;
      link.href = linkData.href;
      document.head.appendChild(link);
    });

    document.title = 'Krithik Tours & Travels | தமிழ் - தெற்கு இந்தியா சுற்றுலா 2026';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Krithik Tours & Travels பழனி - தெற்கு இந்தியா சுற்றுலா, ஆலப்புழ தங்கும் இடம், மைசூர் ஹெரிடேஜ் சுற்றுலா. 24/7 டாக்சி சேவை. இப்போதே பதிவு செய்யவும்!');
    }

    return () => {
      document.documentElement.lang = 'en';
      hreflangLinks.forEach(linkData => {
        const links = document.querySelectorAll(`link[hreflang="${linkData.hreflang}"]`);
        links.forEach(l => {
          if (l !== document.querySelector('link[rel="canonical"]')) {
            l.remove();
          }
        });
      });
    };
  }, []);

  const whatsappNumber = '918925001292';
  const whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [itineraryModalOpen, setItineraryModalOpen] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState<any>(null);

  const topDestinations = [
    {
      name: 'பழனி ஒரு நாள் சுற்றுலா',
      price: 4999,
      duration: '1 நாள்',
      image: '/palani.jpg'
    },
    {
      name: 'ஆலப்புழ படகு தங்கும் இடம்',
      price: 14999,
      duration: 'ஒரு இரவு குடும்ப தங்கும் இடம்',
      image: '/allepey.jpg'
    }
  ];

  const primaryPackages = [
    {
      name: 'Yercaud',
      weekend: 12999,
      holiday: 20999,
      image: '/Yercaud.jpg'
    },
    {
      name: 'Munnar',
      weekend: 14999,
      holiday: 22999,
      image: '/munnar.jpg'
    },
    {
      name: 'Kodaikanal',
      weekend: 14999,
      holiday: 22999,
      image: '/Kodaikanal.jpg'
    }
  ];

  const secondaryPackages = [
    {
      name: 'Mysore',
      weekend: 14999,
      holiday: 22999,
      image: '/Mysore.jpeg'
    },
    {
      name: 'Ooty',
      weekend: 14999,
      holiday: 23999,
      image: '/ooty.jpg'
    },
    {
      name: 'Coorg',
      weekend: 14999,
      holiday: 22999,
      image: '/Coorg.jpg'
    },
    {
      name: 'Valparai',
      weekend: 14999,
      holiday: 22999,
      image: '/valparai.jpg'
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
      <LanguageSwitcher />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="container mx-auto px-3 pt-4 pb-6 md:px-4 md:pt-12 md:pb-24">
          {/* Mobile: Top Destinations First */}
          <div className="md:hidden mb-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleViewItinerary('Arupadai Veedu')}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                src="/sabarimala_trip.jpg"
                alt="ஆறுபடை வீடு"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">ஆறுபடை வீடு</h3>
                <p className="text-xs text-green-100">கோயில் சுற்றுலா</p>
              </div>
            </button>
            <button
              onClick={() => handleViewItinerary('Kodaikanal')}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                src="/bus-card.jpg"
                alt="Chennai/Bangalore பஸ்"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">தினசரி பஸ்</h3>
                <p className="text-xs text-green-100">இன்றிரவு புறப்படுதல்</p>
              </div>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content - Image Grid (Desktop Only) */}
            <div className="hidden md:grid grid-cols-2 gap-4 md:order-1">
              <div className="space-y-4">
                <button
                  onClick={() => handleViewItinerary('Arupadai Veedu')}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer w-full text-left"
                >
                  <img
                    src="/sabarimala_trip.jpg"
                    alt="ஆறுபடை வீடு"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">ஆறுபடை வீடு</h3>
                    <p className="text-sm text-green-100">கோயில் சுற்றுலா</p>
                  </div>
                </button>
                <button
                  onClick={() => handleViewItinerary('Munnar')}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer w-full text-left"
                >
                  <img
                    src="/munnar.jpg"
                    alt="Munnar"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Munnar</h3>
                    <p className="text-sm text-green-100">தங்குமிடம் + car பயணம்</p>
                  </div>
                </button>
              </div>
              <div className="space-y-4 pt-8">
                <button
                  onClick={() => handleViewItinerary('Kodaikanal')}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer w-full text-left"
                >
                  <img
                    src="/bus-card.jpg"
                    alt="Chennai/Bangalore பஸ்"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">தினசரி பஸ்</h3>
                    <p className="text-sm text-green-100">இன்றிரவு புறப்படுதல்</p>
                  </div>
                </button>
                <button
                  onClick={() => handleViewItinerary('Ooty')}
                  className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all cursor-pointer w-full text-left"
                >
                  <img
                    src="/ooty.jpg"
                    alt="Ooty"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">Ooty</h3>
                    <p className="text-sm text-green-100">தங்குமிடம் + car பயணம்</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Text with Scroll Animation */}
            <div className="space-y-4 md:space-y-8 animate-fade-in md:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up relative">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-shine bg-[length:200%_100%]">
                  தமிழ்நாட்டில் பழனி, கொடைக்கானல் மற்றும் ஏற்காடு ஆகிய இடங்களை உள்ளடக்கிய சுற்றுலா
                </span>
              </h1>

              {/* Service Icons */}
              <div className="flex flex-wrap items-center justify-start gap-2 md:gap-6 py-2 md:py-4">
                <div className="group">
                  <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all hover:bg-white/30 hover:scale-110 animate-pulse">
                    <Hotel size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all hover:bg-white/30 hover:scale-110 animate-pulse" style={{ animationDelay: '0.2s' }}>
                    <Car size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all hover:bg-white/30 hover:scale-110 animate-pulse" style={{ animationDelay: '0.4s' }}>
                    <Train size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all hover:bg-white/30 hover:scale-110 animate-pulse" style={{ animationDelay: '0.6s' }}>
                    <MapPinned size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/20 backdrop-blur-sm p-2 md:p-3 rounded-full transition-all hover:bg-white/30 hover:scale-110 animate-pulse" style={{ animationDelay: '0.8s' }}>
                    <UtensilsCrossed size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>
              </div>

              <div className="pt-2 md:pt-4 animate-slide-up-delay">
                <a
                  href="tel:8925001292"
                  className="group relative inline-flex items-center justify-center bg-white text-green-600 px-10 py-5 rounded-lg font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone size={24} />
                    அழைப்பு 8925001292
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-3 md:pt-6 animate-fade-in-stats">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">20+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">இடங்கள்</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">500+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">சந்தோஷமான பயணிகள்</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">5★</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">மதிப்பீடு</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Other Destinations Below Stats */}
          <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleViewItinerary('Munnar')}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                src="/munnar.jpg"
                alt="Munnar"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">Munnar</h3>
                <p className="text-xs text-green-100">தங்குமிடம் + car பயணம்</p>
              </div>
            </button>
            <button
              onClick={() => handleViewItinerary('Ooty')}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                src="/ooty.jpg"
                alt="Ooty"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">Ooty</h3>
                <p className="text-xs text-green-100">தங்குமிடம் + car பயணம்</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          சிறப்பு சுற்றுலா
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
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-xs shadow-lg">
                  வழிகாட்டி சேர்க்கப்பட்டுள்ளது
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                <div className="text-sm text-green-700 font-semibold mb-3">
                  ஓட்டுநர் சேர்க்கப்பட்டுள்ளது • நுழைவுக் கட்டணம் • குடும்ப பாதுகாப்பு முதல்
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={20} className="mr-2" />
                  <span>{dest.duration}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewItinerary(dest.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <FileText size={20} />
                    சுற்றுலா திட்டம்
                  </button>
                  <button
                    onClick={() => handleBooking(dest.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    இப்போது பதிவு செய்யவும்
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
              முதன்மை சுற்றுலா
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              மிகவும் பிரபலமான இடங்கள்
            </h2>
            <p className="text-gray-600 text-lg">
              வாரத்தின் விடுமுறை அல்லது நீட்டிக்கப்பட்ட விடுமுறை சுற்றுலாவிற்கு தேர்வு செய்யவும்
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
                  <div className="mb-4 bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-green-700 font-semibold text-center">
                      இரயில்வே நிலையம் / விமான நிலையத்திற்கு பெக்கப் மற்றும் டிராப் சேர்க்கப்பட்டுள்ளது
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">வாரத்தின் விடுமுறை</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        ஹோட்டல் தங்கும் இடம் சேர்க்கப்பட்டுள்ளது • ஓட்டுநர் சேர்க்கப்பட்டுள்ளது • பெக்கப் மற்றும் டிராப் கிடைக்கும்
                      </p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">விடுமுறை சுற்றுலா</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        ஹோட்டல் + ஓட்டுநர் சேர்க்கப்பட்டுள்ளது • விமான நிலையம் / இரயில் Transfer
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-600 font-medium">
                        தங்கும் இடம் + ஓட்டுநர் + பெக்கப் மற்றும் டிராப்
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={20} />
                      சுற்றுலா திட்டம்
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                      இப்போது பதிவு செய்யவும்
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
              இரண்டாம் சுற்றுலா
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              மேலும் அசாதாரண இடங்கள்
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
                  <div className="mb-3 bg-teal-50 rounded-lg p-2 border border-teal-200">
                    <p className="text-xs text-teal-700 font-semibold text-center">
                      தங்கும் இடம் சேர்க்கப்பட்டுள்ளது
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="border-l-4 border-teal-500 pl-3">
                      <p className="text-gray-800 font-semibold text-xs mb-1">வாரத்தின் விடுமுறை</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        ஹோட்டல் தங்கும் இடம் + ஓட்டுநர் + பெக்கப் மற்றும் டிராப்
                      </p>
                    </div>
                    <div className="border-l-4 border-teal-600 pl-3">
                      <p className="text-gray-800 font-semibold text-xs mb-1">விடுமுறை சுற்றுலா</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        ஹோட்டல் + ஓட்டுநர் + விமான நிலையம் Transfer
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={18} />
                      சுற்றுலா திட்டம்
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-all"
                    >
                      இப்போது பதிவு செய்யவும்
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            எங்கள் வாகன தொகுப்பு
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            உங்கள் பயணத்திற்கு நன்கு பராமரிக்கப்பட்ட வாகனங்களின் பரந்த வரம்பிலிருந்து தேர்வு செய்யவும்
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Dzire சுற்றுலா</h3>
              <p className="text-green-600 font-bold text-center mb-3">₹3,599 இலிருந்து தொடங்கும்</p>
              <p className="text-gray-600 text-sm text-center">சிறிய குழுக்களுக்கு வசதியான சொகுசு கார்</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Tavera அல்லது Innova</h3>
              <p className="text-green-600 font-bold text-center mb-3">₹5,999 இலிருந்து தொடங்கும்</p>
              <p className="text-gray-600 text-sm text-center">குடும்ப சுற்றுலாவிற்கான விசாலமான SUV</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">பயணிக்கும் வாடகை</h3>
              <p className="text-blue-600 font-bold text-center mb-3">₹7,599 இலிருந்து தொடங்கும்</p>
              <p className="text-gray-600 text-sm text-center">நடுத்தர அளவிலான குழுக்களுக்கு சிறந்தது</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">பயணிகள் வாகனம் மற்றும் சுற்றுலா பஸ்</h3>
              <p className="text-orange-600 font-bold text-center mb-3">மக்கள் எண்ணிக்கையின் அடிப்படையில்</p>
              <p className="text-gray-600 text-sm text-center">பெரிய குழு பயணங்களுக்கு ஏற்றது</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <ReviewSlider />

      {/* Video Testimonials Slider */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              வாடிக்கையாளர் வீடியோ சாட்சியங்கள்
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              எங்கள் சந்தோஷமான பயணிகளிடமிருந்து உண்மையான அனுபவங்களைக் காணுங்கள்
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="grid grid-rows-2 grid-flow-col gap-4 w-max">
                {[
                  { id: 'mkXwgeOoJcw', title: 'வாடிக்கையாளர் சாட்சியம்' },
                  { id: 'vBgOT0SVn9o', title: 'வாடிக்கையாளர் சாட்சியம் 1' },
                  { id: 'gLlWCa6gva8', title: 'வாடிக்கையாளர் சாட்சியம் 3' },
                  { id: 'Y0QLknVh_l0', title: 'வாடிக்கையாளர் சாட்சியம் 5' }
                ].map((video) => (
                  <div key={video.id} className="w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
                {[
                  { id: 'dEk4SZk9AHs', title: 'வாடிக்கையாளர் சாட்சியம் 2' },
                  { id: 'XJyPE98saaY', title: 'வாடிக்கையாளர் சாட்சியம் 4' },
                  { id: 'IuV68idN6X0', title: 'வாடிக்கையாளர் சாட்சியம் 6' },
                  { id: 'dTlh37mZ2D8', title: 'வாடிக்கையாளர் சாட்சியம் 8' }
                ].map((video) => (
                  <div key={video.id} className="w-[300px] md:w-[400px] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}`}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <a
                href="https://www.youtube.com/@KrithikToursTravels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
              >
                அனைத்து வீடியோக்களைக் காணுங்கள்
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div>
              <img
                src="/krithik_travels_logo.png"
                alt="Krithik Tours & Travels"
                className="h-16 mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                உங்கள் நம்பகமான பயணக் கூட்டாளி மறக்கமுடியாத பயணங்களுக்கு.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">எங்களைத் தொடர்பு கொள்ளவும்</h3>
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
                  href="mailto:krithiktravels2607@gmail.com"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} className="mr-3" />
                  krithiktravels2607@gmail.com
                </a>
                <a
                  href="https://share.google/7d6cvuPYRa27zVHO2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <MapPin size={20} className="mr-3" />
                  Google Maps இல் பார்க்கவும்
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">நம்மைப் பின்தொடரவும்</h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/krithik_tours_travels_palani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={20} className="mr-3" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/krithiktoursandtravels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook size={20} className="mr-3" />
                  Facebook
                </a>
                <a
                  href="https://www.youtube.com/@KrithikToursTravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-red-400 transition-colors"
                >
                  <Youtube size={20} className="mr-3" />
                  YouTube
                </a>
                <a
                  href="https://web.whatsapp.com/send?phone=918925001292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle size={20} className="mr-3" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Krithik Tours & Travels. அனைத்து உரிமைகளும் Reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918925001292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
        aria-label="WhatsApp இல் தொடர்பு கொள்ளவும்"
      >
        <MessageCircle size={28} />
      </a>

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
    </div>
  );
}

export default TamilHomepage;
