import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin } from 'lucide-react';
import { reviews, Review } from '../data/reviews';

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, slidesPerView]);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - slidesPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - slidesPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const toggleReadMore = (reviewId: number) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const maxDots = reviews.length - slidesPerView + 1;

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            CUSTOMER TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by travelers across India from Chennai, Delhi, Bangalore, Dindigul, and beyond
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / slidesPerView}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col p-6 md:p-8 border-t-4 border-green-500">
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="text-green-500 opacity-20" size={48} />
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex-grow mb-4">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {expandedReviews.has(review.id)
                          ? review.review
                          : truncateText(review.review, 180)}
                      </p>
                      {review.review.length > 180 && (
                        <button
                          onClick={() => toggleReadMore(review.id)}
                          className="text-green-600 hover:text-green-700 font-semibold text-sm mt-2 transition-colors"
                        >
                          {expandedReviews.has(review.id) ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {review.tripType}
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {review.serviceType}
                      </span>
                    </div>

                    <div className="border-t pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-gray-800 text-lg">{review.name}</p>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <MapPin size={14} className="mr-1 text-green-600" />
                            <span>{review.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-green-500 text-gray-800 hover:text-white p-3 md:p-4 rounded-full shadow-xl transition-all transform hover:scale-110 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-green-500 text-gray-800 hover:text-white p-3 md:p-4 rounded-full shadow-xl transition-all transform hover:scale-110 z-10"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxDots)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-green-600 w-8 h-3'
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap justify-center gap-3 md:gap-4">
            {['Chennai', 'Delhi', 'Bangalore', 'Dindigul', 'Palani', 'Kodaikanal', 'Munnar', 'Yercaud'].map((city) => (
              <span
                key={city}
                className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
