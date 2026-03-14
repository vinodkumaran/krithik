import { MapPin, Phone, Mail, Calendar, FileText, Car, Bus, Instagram, Facebook, Youtube, MessageCircle, Hotel, Brain as Train, UtensilsCrossed, MapPinned } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BookingModal from '../components/BookingModal';
import ItineraryModal from '../components/ItineraryModal';
import ReviewSlider from '../components/ReviewSlider';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { getItinerary } from '../data/itineraries';

function HindiHomepage() {
  useEffect(() => {
    document.documentElement.lang = 'hi';
    document.documentElement.style.fontFamily = "'Noto Sans Devanagari', sans-serif";
    document.body.style.fontFamily = "'Noto Sans Devanagari', sans-serif";

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap';
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

    document.title = 'Krithik Tours & Travels | हिन्दी - दक्षिण भारत पर्यटन पैकेज 2026';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Krithik Tours & Travels पलानी - दक्षिण भारत पर्यटन पैकेज, अल्लेप्पी नाव ठहरना, मैसूर विरासत पर्यटन। 24/7 टैक्सी सेवा। आज ही बुक करें!');
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
      name: 'पलानी एक दिन की यात्रा',
      price: 4999,
      duration: '1 दिन',
      image: '/palani.jpg'
    },
    {
      name: 'अल्लेप्पी नाव ठहरना',
      price: 14999,
      duration: 'एक रात परिवार ठहरना',
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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
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
                alt="अरुपदै वीडु"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">अरुपदै वीडु</h3>
                <p className="text-xs text-green-100">मंदिर पर्यटन</p>
              </div>
            </button>
            <button
              onClick={() => handleViewItinerary('Kodaikanal')}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <img
                src="/bus-card.jpg"
                alt="Chennai/Bangalore बस"
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="font-bold text-base">दैनिक बस</h3>
                <p className="text-xs text-green-100">आज रात निकलने वाली</p>
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
                    alt="अरुपदै वीडु"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">अरुपदै वीडु</h3>
                    <p className="text-sm text-green-100">मंदिर पर्यटन</p>
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
                    <p className="text-sm text-green-100">ठहरना + चालक शामिल</p>
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
                    alt="Chennai/Bangalore बस"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">दैनिक बस</h3>
                    <p className="text-sm text-green-100">आज रात निकलने वाली</p>
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
                    <p className="text-sm text-green-100">ठहरना + चालक शामिल</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - Text with Scroll Animation */}
            <div className="space-y-4 md:space-y-8 animate-fade-in md:order-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight animate-slide-up relative">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent animate-shine bg-[length:200%_100%]">
                  तमिलनाडु में पलनी, कोडईकनाल और येरकाड को शामिल करने वाली यात्रा
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
                    कॉल करें 8925001292
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-3 md:pt-6 animate-fade-in-stats">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">20+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">गंतव्य</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">500+</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">खुश यात्री</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold">5★</div>
                  <div className="text-sm md:text-base text-green-200 mt-1">रेटिंग</div>
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
                <p className="text-xs text-green-100">ठहरना + चालक शामिल</p>
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
                <p className="text-xs text-green-100">ठहरना + चालक शामिल</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          विशेष पर्यटन
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
                  गाइड शामिल
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                <div className="text-sm text-green-700 font-semibold mb-3">
                  चालक शामिल • टोल शुल्क • परिवार सुरक्षा पहले
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
                    यात्रा सूची
                  </button>
                  <button
                    onClick={() => handleBooking(dest.name)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                  >
                    अभी बुक करें
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
              प्राथमिक पर्यटन पैकेज
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              सबसे लोकप्रिय गंतव्य
            </h2>
            <p className="text-gray-600 text-lg">
              सप्ताहांत या विस्तारित छुट्टी के पैकेजों के बीच चुनें
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
                      रेलवे स्टेशन / हवाई अड्डे से पिकअप और ड्रॉप शामिल
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">सप्ताहांत यात्रा</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        होटल ठहरना शामिल • चालक शामिल • पिकअप और ड्रॉप उपलब्ध
                      </p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <p className="text-gray-800 font-semibold text-sm mb-1">छुट्टी की यात्रा</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        होटल + चालक शामिल • हवाई अड्डा / रेलवे ट्रांसफर
                      </p>
                    </div>
                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-600 font-medium">
                        ठहरना + चालक + पिकअप और ड्रॉप
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={20} />
                      यात्रा सूची
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all"
                    >
                      अभी बुक करें
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
              माध्यमिक पर्यटन पैकेज
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              अधिक आश्चर्यजनक गंतव्य
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
                      ठहरना शामिल
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="border-l-4 border-teal-500 pl-3">
                      <p className="text-gray-800 font-semibold text-xs mb-1">सप्ताहांत यात्रा</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        होटल ठहरना + चालक + पिकअप और ड्रॉप
                      </p>
                    </div>
                    <div className="border-l-4 border-teal-600 pl-3">
                      <p className="text-gray-800 font-semibold text-xs mb-1">छुट्टी की यात्रा</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        होटल + चालक + हवाई अड्डा ट्रांसफर
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => handleViewItinerary(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText size={18} />
                      यात्रा सूची
                    </button>
                    <button
                      onClick={() => handleBooking(pkg.name)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-semibold transition-all"
                    >
                      अभी बुक करें
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
            हमारी वाहन संपत्ति
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            अपनी यात्रा के लिए अच्छी तरह से बनाए रखे गए वाहनों की एक विस्तृत श्रृंखला से चुनें
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Dzire यात्रा</h3>
              <p className="text-green-600 font-bold text-center mb-3">₹3,599 से शुरू</p>
              <p className="text-gray-600 text-sm text-center">छोटे समूहों के लिए आरामदायक सेडान</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-green-600">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Car size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Tavera या Innova</h3>
              <p className="text-green-600 font-bold text-center mb-3">₹5,999 से शुरू</p>
              <p className="text-gray-600 text-sm text-center">पारिवारिक यात्रा के लिए विशाल SUVs</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">यात्री किराया</h3>
              <p className="text-purple-600 font-bold text-center mb-3">₹7,599 से शुरू</p>
              <p className="text-gray-600 text-sm text-center">मध्यम आकार के समूहों के लिए परिपूर्ण</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 mx-auto">
                <Bus size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">कोच और पर्यटन बसें</h3>
              <p className="text-orange-600 font-bold text-center mb-3">लोगों की संख्या के आधार पर</p>
              <p className="text-gray-600 text-sm text-center">बड़े समूह परिवहन</p>
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
              ग्राहक वीडियो गवाहियां
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              हमारे खुश यात्रियों से वास्तविक अनुभव देखें
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="grid grid-rows-2 grid-flow-col gap-4 w-max">
                {[
                  { id: 'mkXwgeOoJcw', title: 'ग्राहक गवाही' },
                  { id: 'vBgOT0SVn9o', title: 'ग्राहक गवाही 1' },
                  { id: 'gLlWCa6gva8', title: 'ग्राहक गवाही 3' },
                  { id: 'Y0QLknVh_l0', title: 'ग्राहक गवाही 5' }
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
                  { id: 'dEk4SZk9AHs', title: 'ग्राहक गवाही 2' },
                  { id: 'XJyPE98saaY', title: 'ग्राहक गवाही 4' },
                  { id: 'IuV68idN6X0', title: 'ग्राहक गवाही 6' },
                  { id: 'dTlh37mZ2D8', title: 'ग्राहक गवाही 8' }
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
                सभी वीडियो देखें
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
                आरामदायक यात्रा के लिए प्रतिबद्ध। अविस्मरणीय यात्राओं के लिए आपका विश्वसनीय यात्रा साथी।
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">हमसे संपर्क करें</h3>
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
                  Google मानचित्र पर देखें
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">हमें फॉलो करें</h3>
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
            <p>&copy; 2025 Krithik Tours & Travels. सभी अधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918925001292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
        aria-label="WhatsApp पर चैट करें"
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

export default HindiHomepage;
