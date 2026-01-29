import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  schemaMarkup: string;
}

export default function BlogLayout({ children, title, description, schemaMarkup }: BlogLayoutProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaMarkup }}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <img
                  src="/krithik_travels_logo.png"
                  alt="Krithik Tours & Travels"
                  className="h-12 md:h-16"
                />
              </Link>
              <div className="flex items-center gap-4">
                <a
                  href="tel:8925001292"
                  className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg items-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{description}</p>

            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </article>
        </div>

        <a
          href="https://web.whatsapp.com/send?phone=918925001292&text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20tour%20packages"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </>
  );
}
