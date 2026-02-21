import { X, Phone, Bus, Globe, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [language, setLanguage] = useState<'EN' | 'TA'>('EN');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'TA' : 'EN');
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-[100] transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <img
              src="/krithik_travels_logo.png"
              alt="Krithik Travels"
              className="h-10"
            />

            <div className="flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <Globe size={16} />
                {language}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 py-6">
          <div className="mb-6 pb-4 border-b border-gray-200">
            <a
              href="tel:+918925001292"
              className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
            >
              <Phone size={20} />
              <span className="text-lg font-semibold">+91 89250 01292</span>
            </a>
          </div>


          <div className="mb-6 pb-4 border-b border-gray-200">
            <a
              href="/customer-testimonials"
              className="block w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-center transition-colors"
            >
              Videos
            </a>
          </div>


          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Fleet</h2>

          <div className="space-y-3 mb-8">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Car size={28} className="text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Dzire Tour</h3>
                  <p className="text-sm text-gray-600">Comfortable sedan for small groups</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Users size={28} className="text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Tavera or Innova</h3>
                  <p className="text-sm text-gray-600">Spacious SUVs for family trips</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Bus size={28} className="text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Coach & Tourist Buses</h3>
                  <p className="text-sm text-gray-600">Large group transportation</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <Bus size={28} className="text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800">Traveller Rental</h3>
                  <p className="text-sm text-gray-600">Perfect for medium-sized groups</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/krithik.tours.travels.palani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/krithik_tours_travels_palani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
