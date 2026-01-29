import { X, MapPin, Car, User, Home, Train, Calendar, Clock, Utensils, Hotel, CheckCircle, XCircle } from 'lucide-react';

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  accommodation?: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  itinerary: ItineraryDay[];
  duration: string;
  inclusions?: string[];
  exclusions?: string[];
}

function ItineraryModal({ isOpen, onClose, packageName, itinerary, duration, inclusions, exclusions }: ItineraryModalProps) {
  if (!isOpen) return null;

  const getActivityIcon = (activity: string) => {
    const lowerActivity = activity.toLowerCase();
    if (lowerActivity.includes('pickup') || lowerActivity.includes('drive') || lowerActivity.includes('drop')) {
      return <Car size={14} className="text-green-600 mt-0.5 flex-shrink-0" />;
    }
    if (lowerActivity.includes('lunch') || lowerActivity.includes('dinner') || lowerActivity.includes('breakfast')) {
      return <Utensils size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />;
    }
    if (lowerActivity.includes('check-in') || lowerActivity.includes('hotel') || lowerActivity.includes('stay')) {
      return <Hotel size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />;
    }
    return <MapPin size={14} className="text-green-600 mt-0.5 flex-shrink-0" />;
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] overflow-y-auto">
      <div className="min-h-screen py-8 px-4 flex items-start justify-center">
        <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full relative">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-5 rounded-t-xl">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors bg-white/20 rounded-full p-1.5"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <MapPin size={24} className="flex-shrink-0" />
              <h2 className="text-2xl font-bold">{packageName}</h2>
            </div>
            <div className="flex items-center gap-2 text-green-100">
              <Clock size={16} />
              <span className="text-sm">{duration}</span>
            </div>
          </div>

          <div className="p-5 max-h-[70vh] overflow-y-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 mb-5">
              <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Car size={18} className="text-blue-600" />
                Package Includes
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Car size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">A/C Car</p>
                    <p className="text-xs text-gray-600">Comfortable air-conditioned vehicle</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Driver cum Guide</p>
                    <p className="text-xs text-gray-600">Experienced driver and local guide</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Home size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Home Pickup</p>
                    <p className="text-xs text-gray-600">Convenient pickup from your location</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Train size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Station Pickup/Drop</p>
                    <p className="text-xs text-gray-600">Railway station transfers included</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-green-600" />
              Day-wise Itinerary
            </h3>

            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <div key={index} className="border-l-3 border-green-500 pl-4 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 shadow-sm">
                    <h4 className="text-base font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-green-600" />
                      Day {day.day}: {day.title}
                    </h4>

                    <ul className="space-y-1.5">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          {getActivityIcon(activity)}
                          <span className="text-gray-700 text-sm leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>

                    {day.accommodation && (
                      <div className="bg-white rounded-lg p-3 mt-3 border border-green-200">
                        <div className="flex items-center gap-2 text-green-700">
                          <Hotel size={16} />
                          <span className="font-semibold text-sm">Night Stay:</span>
                          <span className="text-sm">{day.accommodation}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {inclusions && inclusions.length > 0 && (
              <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <h4 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-600" />
                  Inclusions
                </h4>
                <ul className="space-y-2">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exclusions && exclusions.length > 0 && (
              <div className="mt-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 border border-red-200">
                <h4 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <XCircle size={18} className="text-red-600" />
                  Exclusions
                </h4>
                <ul className="space-y-2">
                  {exclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
              <p className="text-gray-700 text-center text-sm">
                <span className="font-bold text-gray-800">Note:</span> Itinerary can be customized based on your preferences.
                Contact us for personalized trip planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryModal;
