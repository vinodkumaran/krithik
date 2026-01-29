import { X, Phone, Car, Users, Bus, Globe, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [language, setLanguage] = useState<'EN' | 'TA'>('EN');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent, packageType: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      package: packageType,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', package: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Hire a Cab</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Car size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">4 Hours – ₹3,599</h3>
                    <p className="text-sm text-gray-600">Up to 80 kms</p>
                    <p className="text-xs text-orange-600 mt-1">Extra fare: ₹20/km</p>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  const form = document.getElementById('booking-form-4hrs') as HTMLFormElement;
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
              >
                Book Now
              </button>

              <form id="booking-form-4hrs" onSubmit={(e) => handleSubmit(e, '4 Hours - ₹3,599')} className="mt-4 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  name="message"
                  placeholder="Additional requirements"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm text-center">Booking request sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm text-center">Failed to send. Please try again.</p>
                )}
              </form>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Car size={24} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">8 Hours – ₹5,999</h3>
                    <p className="text-sm text-gray-600">Up to 100 kms</p>
                    <p className="text-xs text-orange-600 mt-1">Extra fare: ₹20/km</p>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  const form = document.getElementById('booking-form-8hrs') as HTMLFormElement;
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                Book Now
              </button>

              <form id="booking-form-8hrs" onSubmit={(e) => handleSubmit(e, '8 Hours - ₹5,999')} className="mt-4 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Additional requirements"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Car size={24} className="text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">1 Day – ₹7,599</h3>
                    <p className="text-sm text-gray-600">Up to 140 kms</p>
                    <p className="text-xs text-orange-600 mt-1">Extra fare: ₹20/km</p>
                  </div>
                </div>
              </div>
              <button
                onClick={(e) => {
                  const form = document.getElementById('booking-form-1day') as HTMLFormElement;
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
              >
                Book Now
              </button>

              <form id="booking-form-1day" onSubmit={(e) => handleSubmit(e, '1 Day - ₹7,599')} className="mt-4 space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  placeholder="Additional requirements"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
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
