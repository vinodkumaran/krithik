import { useLocation } from 'react-router-dom';

export default function LanguageSwitcher() {
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English', path: '/' },
    { code: 'ta', name: 'தமிழ்', path: '/tamil' },
    { code: 'hi', name: 'हिन्दी', path: '/hindi' },
    { code: 'te', name: 'తెలుగు', path: '/telugu' },
    { code: 'kn', name: 'ಕನ್ನಡ', path: '/kannada' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-center gap-2 md:gap-6 flex-wrap">
        {languages.map((lang) => (
          <a
            key={lang.code}
            href={lang.path}
            className={`px-3 md:px-4 py-1 rounded-lg transition-all font-semibold text-sm md:text-base ${
              isActive(lang.path)
                ? 'bg-white text-green-600 shadow-lg'
                : 'bg-white/20 hover:bg-white/30 text-white'
            }`}
          >
            {lang.name}
          </a>
        ))}
      </div>
    </div>
  );
}
