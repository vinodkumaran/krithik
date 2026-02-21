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
