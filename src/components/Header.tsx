import { Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  isDestinationPage?: boolean;
}

export default function Header({ isDestinationPage = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogsDropdownOpen, setBlogsDropdownOpen] = useState(false);
  const [destinationDropdownOpen, setDestinationDropdownOpen] = useState(false);

  return (
    <>
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
              <div className="relative">
                <button
                  onMouseEnter={() => setDestinationDropdownOpen(true)}
                  onMouseLeave={() => setDestinationDropdownOpen(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  Destinations
                  <ChevronDown size={18} />
                </button>
                {destinationDropdownOpen && (
                  <div
                    onMouseEnter={() => setDestinationDropdownOpen(true)}
                    onMouseLeave={() => setDestinationDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-2 z-50"
                  >
                    <a
                      href="/palani-one-day-temple-trip"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Palani One Day Temple Trip
                    </a>
                    <a
                      href="/alleppey-overnight-houseboat-stay"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Alleppey Overnight Houseboat Stay
                    </a>
                    <a
                      href="/yercaud-hill-station-tour-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Yercaud Hill Station Tour
                    </a>
                    <a
                      href="/munnar-nature-tour-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Munnar Nature Tour
                    </a>
                    <a
                      href="/kodaikanal-2-day-sightseeing-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Kodaikanal 2 Day Sightseeing
                    </a>
                    <a
                      href="/mysore-heritage-tour-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Mysore Heritage Tour
                    </a>
                    <a
                      href="/ooty-hill-station-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Ooty Hill Station
                    </a>
                    <a
                      href="/coorg-coffee-estate-tour-plan"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Coorg Coffee Estate Tour
                    </a>
                    <a
                      href="/valparai-tea-estate-sightseeing-tour"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Valparai Tea Estate Tour
                    </a>
                    <a
                      href="/pilgrimage-special-tour-malaysia-singapore-nri"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Pilgrimage Special Tour (NRI/Malaysia/Singapore)
                    </a>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onMouseEnter={() => setBlogsDropdownOpen(true)}
                  onMouseLeave={() => setBlogsDropdownOpen(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  Blogs
                  <ChevronDown size={18} />
                </button>
                {blogsDropdownOpen && (
                  <div
                    onMouseEnter={() => setBlogsDropdownOpen(true)}
                    onMouseLeave={() => setBlogsDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl py-2 z-50"
                  >
                    <a
                      href="/palani-temple-one-day-trip"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Palani Temple One Day Trip
                    </a>
                    <a
                      href="/kodaikanal-two-days-trip"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Kodaikanal Two Days Trip
                    </a>
                    <a
                      href="/yercaud-tour-package-itinerary"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Yercaud Tour Package
                    </a>
                    <a
                      href="/palani-history-temple-history"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Palani Temple History
                    </a>
                    <a
                      href="/coimbatore-marudhamalai-one-day-trip"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Coimbatore & Marudhamalai Trip
                    </a>
                    <a
                      href="/nri-south-india-tour-pickup-drop-ooty"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      NRI South India Tour
                    </a>
                    <a
                      href="/malaysia-to-south-india-tour-package"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Malaysia to South India Tour
                    </a>
                    <a
                      href="/singapore-to-south-india-tour-package"
                      className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Singapore to South India Tour
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/customer-testimonials"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Videos
              </a>
              <a
                href="/hire"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Hire a Cab
              </a>
              <a
                href="/"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
