import React from 'react';
import { MapPin, Clock, Star, Phone, Mail, Navigation } from 'lucide-react';

const PalaniTouristPlaces = () => {
  // Structured Data for SEO and AI/LLM optimization
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristDestination",
        "@id": "https://yourwebsite.com/palani-tourist-places#destination",
        "name": "Palani Tourist Places",
        "description": "Explore the spiritual and cultural tourist places in Palani, Tamil Nadu. Visit the famous Palani Murugan Temple, ancient temples, and sacred sites with our comprehensive 2-day tour package.",
        "url": "https://yourwebsite.com/palani-tourist-places",
        "image": "https://yourwebsite.com/images/palani-hill-temple.jpg",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.4522",
          "longitude": "77.5156"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palani",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "touristType": ["Religious Tourism", "Cultural Tourism", "Spiritual Tourism"],
        "includesAttraction": [
          {
            "@type": "TouristAttraction",
            "@id": "#palani-hill-temple",
            "name": "Palani Hill Temple (Arulmigu Dhandayuthapani Swamy Temple)",
            "description": "Famous Murugan temple atop Palani Hill, one of the six abodes of Lord Murugan. Early morning darshan with winch, rope car, or steps access available.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "10.4524",
              "longitude": "77.5165"
            },
            "publicAccess": true,
            "isAccessibleForFree": true,
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Rope Car Access",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Winch Access",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Steps Access",
                "value": true
              }
            ]
          },
          {
            "@type": "TouristAttraction",
            "@id": "#thiruavinangudi-temple",
            "name": "Thiruavinangudi Temple",
            "description": "Ancient Murugan temple with historical and spiritual significance, located near Palani."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#mariyamman-kovil",
            "name": "Mariyamman Kovil",
            "description": "Temple dedicated to Goddess Mariyamman, offering protective blessings to devotees."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#periya-nayaki-amman",
            "name": "Periya Nayaki Amman Kovil",
            "description": "Peaceful temple with divine ambience, perfect for family visits and spiritual seekers."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#periyaudaiyar-kovil",
            "name": "Periyaudaiyar Kovil",
            "description": "Historic Shiva temple showcasing ancient Tamil Nadu architecture and spiritual heritage."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#saakkadai-sithar",
            "name": "Saakkadai Sithar Kovil",
            "description": "Siddhar temple known for healing vibrations and spiritual energy, popular among meditation practitioners."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#kannakampatti-samadhi",
            "name": "Kannakampatti Sarguru Jeeva Samadhi",
            "description": "Meditation-friendly samadhi site offering peaceful environment for spiritual contemplation."
          },
          {
            "@type": "TouristAttraction",
            "@id": "#pathala-sembumruga",
            "name": "Rediyarchathiram Pathala Sembumruga Kovil",
            "description": "Rare underground Murugan temple, one of the unique tourist places near Palani offering extraordinary spiritual experience."
          }
        ]
      },
      {
        "@type": "TravelAgency",
        "@id": "https://yourwebsite.com/#organization",
        "name": "Krithik Tours and Travels",
        "description": "Professional tour operator offering comprehensive Palani temple tour packages with family-friendly accommodations.",
        "url": "https://yourwebsite.com",
        "logo": "https://yourwebsite.com/logo.png",
        "telephone": "+91-XXXXXXXXXX",
        "email": "info@krithiktours.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palani",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "10.4522",
          "longitude": "77.5156"
        },
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "10.4522",
            "longitude": "77.5156"
          },
          "geoRadius": "100000"
        },
        "priceRange": "$$",
        "paymentAccepted": "Cash, UPI, Card",
        "currenciesAccepted": "INR"
      },
      {
        "@type": "Product",
        "@id": "#palani-tour-package",
        "name": "Palani Temple Tour Package - 2 Days 1 Night",
        "description": "Complete Palani tourist places tour covering all major temples with family stay in best hotel. Includes Palani Hill Temple darshan, nearby temples, and comfortable accommodation.",
        "brand": {
          "@type": "Organization",
          "name": "Krithik Tours and Travels"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "Contact for pricing",
          "priceCurrency": "INR",
          "seller": {
            "@id": "https://yourwebsite.com/#organization"
          },
          "itemOffered": {
            "@type": "TouristTrip",
            "name": "2 Days 1 Night Palani Temple Tour",
            "duration": "P2D",
            "itinerary": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Place",
                    "name": "Palani Hill Temple"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Place",
                    "name": "Thiruavinangudi Temple"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Place",
                    "name": "Mariyamman Kovil"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Place",
                    "name": "Periya Nayaki Amman Kovil"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Place",
                    "name": "Periyaudaiyar Kovil"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "item": {
                    "@type": "Place",
                    "name": "Saakkadai Sithar Kovil"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "item": {
                    "@type": "Place",
                    "name": "Kannakampatti Sarguru Jeeva Samadhi"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 8,
                  "item": {
                    "@type": "Place",
                    "name": "Rediyarchathiram Pathala Sembumruga Kovil"
                  }
                }
              ]
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "250"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the best tourist places to visit in Palani?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best tourist places in Palani include the famous Palani Hill Temple (Arulmigu Dhandayuthapani Swamy Temple), Thiruavinangudi Temple, Mariyamman Kovil, Periya Nayaki Amman Kovil, Periyaudaiyar Kovil, Saakkadai Sithar Kovil, Kannakampatti Sarguru Jeeva Samadhi, and the unique underground Rediyarchathiram Pathala Sembumruga Kovil."
            }
          },
          {
            "@type": "Question",
            "name": "What are the famous places near Palani for a one-day trip?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a one-day trip near Palani, you can visit the Palani Murugan Temple, Thiruavinangudi Temple, and other nearby temples. Our tour package covers all major Palani tourist places in a comprehensive 2-day itinerary with comfortable accommodation."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best places to visit in Palani with family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Palani is perfect for family visits with peaceful temples like Periya Nayaki Amman Kovil, the famous Palani Hill Temple with convenient rope car access, and spiritual sites like Kannakampatti Sarguru Jeeva Samadhi. Our family-friendly tour package includes stay in the best hotels in Palani."
            }
          },
          {
            "@type": "Question",
            "name": "How many tourist places are there in Palani?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Palani has 8+ major tourist places including the renowned Palani Hill Temple, several ancient temples, siddhar temples, and rare underground temples. Our comprehensive tour package covers all significant Palani visiting places."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://yourwebsite.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tamil Nadu Tourist Places",
            "item": "https://yourwebsite.com/tamil-nadu"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Palani Tourist Places",
            "item": "https://yourwebsite.com/palani-tourist-places"
          }
        ]
      }
    ]
  };

  const touristPlaces = [
    {
      id: 1,
      name: "Palani Hill Temple",
      fullName: "Arulmigu Dhandayuthapani Swamy Temple",
      description: "Early morning darshan of Lord Murugan at the famous Palani Hill Temple, one of the six abodes of Lord Murugan",
      features: ["Winch Access", "Rope Car", "Steps", "Special Darshan Available"],
      timing: "Early Morning",
      highlight: "Most Famous"
    },
    {
      id: 2,
      name: "Thiruavinangudi Temple",
      description: "Ancient Murugan temple with rich historical significance",
      features: ["Ancient Architecture", "Historical Importance"],
      category: "Ancient Temple"
    },
    {
      id: 3,
      name: "Mariyamman Kovil",
      description: "Temple dedicated to Goddess Mariyamman for protective blessings",
      features: ["Protective Blessings", "Divine Energy"],
      category: "Amman Temple"
    },
    {
      id: 4,
      name: "Periya Nayaki Amman Kovil",
      description: "Peaceful temple with divine ambience, perfect for meditation",
      features: ["Peaceful Atmosphere", "Family-Friendly"],
      category: "Amman Temple"
    },
    {
      id: 5,
      name: "Periyaudaiyar Kovil",
      description: "Historic Shiva temple showcasing ancient Tamil architecture",
      features: ["Historic Architecture", "Spiritual Significance"],
      category: "Shiva Temple"
    },
    {
      id: 6,
      name: "Saakkadai Sithar Kovil",
      description: "Siddhar temple known for healing vibrations and spiritual energy",
      features: ["Healing Vibrations", "Meditation", "Spiritual Energy"],
      category: "Siddhar Temple"
    },
    {
      id: 7,
      name: "Kannakampatti Sarguru Jeeva Samadhi",
      description: "Meditation-friendly samadhi site with peaceful environment",
      features: ["Meditation-Friendly", "Peaceful", "Spiritual"],
      category: "Samadhi"
    },
    {
      id: 8,
      name: "Rediyarchathiram Pathala Sembumruga Kovil",
      description: "Rare underground Murugan temple, a unique spiritual experience",
      features: ["Underground Temple", "Rare Experience", "Unique Architecture"],
      category: "Unique Temple",
      highlight: "Rare Underground Temple"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags - Add to head section */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="palani-page">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lora:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .palani-page {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f0f9f6 0%, #ffffff 50%, #f5faf8 100%);
            min-height: 100vh;
            color: #1a5841;
          }

          /* Top Navigation Bar */
          .top-nav {
            background: white;
            padding: 15px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .logo-section {
            display: flex;
            flex-direction: column;
          }

          .logo-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 700;
            color: #1b7a5c;
            letter-spacing: 0.5px;
          }

          .logo-tagline {
            font-size: 0.75rem;
            color: #25956f;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-top: -2px;
          }

          .social-icons {
            display: flex;
            gap: 12px;
          }

          .social-icon {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            cursor: pointer;
            color: white;
          }

          .social-icon.instagram {
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          }

          .social-icon.facebook {
            background: #1877f2;
          }

          .social-icon.youtube {
            background: #ff0000;
          }

          .social-icon.whatsapp {
            background: #25d366;
          }

          .social-icon:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .palani-page {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #f0f9f6 0%, #ffffff 50%, #f5faf8 100%);
            min-height: 100vh;
            color: #1a5841;
          }

          /* Hero Section */
          .hero-section {
            position: relative;
            background: linear-gradient(135deg, #1b7a5c 0%, #25956f 50%, #2eaa82 100%);
            padding: 120px 20px 80px;
            text-align: center;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
            opacity: 0.6;
          }

          .hero-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px);
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
          }

          .hero-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2.5rem, 6vw, 4.5rem);
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 20px;
            text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
            line-height: 1.2;
          }

          .hero-subtitle {
            font-family: 'Lora', serif;
            font-size: clamp(1.1rem, 2.5vw, 1.6rem);
            color: #fef5e7;
            margin-bottom: 15px;
            font-weight: 500;
            text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
          }

          .hero-description {
            font-size: clamp(0.95rem, 2vw, 1.1rem);
            color: #fff9e6;
            max-width: 800px;
            margin: 0 auto 30px;
            line-height: 1.7;
            font-weight: 400;
          }

          .hero-badges {
            display: flex;
            justify-content: center;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 25px;
          }

          .badge {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(10px);
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 500;
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.3);
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
          }

          .badge:hover {
            background: rgba(255, 255, 255, 0.35);
            transform: translateY(-2px);
          }

          /* Container */
          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Tour Package Section */
          .tour-package-section {
            padding: 80px 20px;
            background: #ffffff;
          }

          .section-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .section-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #1b7a5c;
            margin-bottom: 15px;
            font-weight: 700;
          }

          .section-subtitle {
            font-family: 'Lora', serif;
            font-size: clamp(1rem, 2vw, 1.3rem);
            color: #2d6a53;
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .package-card {
            background: linear-gradient(135deg, #f0fdf9 0%, #ffffff 100%);
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 10px 40px rgba(27, 122, 92, 0.1);
            border: 2px solid #2eaa82;
            position: relative;
            overflow: hidden;
          }

          .package-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(46, 170, 130, 0.05) 0%, transparent 70%);
          }

          .package-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 20px;
            position: relative;
            z-index: 1;
          }

          .package-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.5rem, 3vw, 2.2rem);
            color: #1b7a5c;
            font-weight: 700;
          }

          .package-duration {
            background: linear-gradient(135deg, #25956f 0%, #1b7a5c 100%);
            color: white;
            padding: 12px 28px;
            border-radius: 30px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 15px rgba(27, 122, 92, 0.3);
          }

          .package-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
            position: relative;
            z-index: 1;
          }

          .feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 18px;
            background: white;
            border-radius: 12px;
            border-left: 4px solid #2eaa82;
            transition: all 0.3s ease;
          }

          .feature-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 20px rgba(27, 122, 92, 0.15);
          }

          .feature-icon {
            color: #25956f;
            flex-shrink: 0;
            margin-top: 2px;
          }

          .feature-text {
            font-size: 0.95rem;
            color: #2d6a53;
            line-height: 1.6;
          }

          /* Tourist Places Grid */
          .places-section {
            padding: 80px 20px;
            background: linear-gradient(135deg, #f8fcfb 0%, #f0fdf9 100%);
          }

          .places-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 30px;
            margin-top: 50px;
          }

          .place-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            border: 1px solid rgba(27, 122, 92, 0.1);
          }

          .place-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 50px rgba(27, 122, 92, 0.2);
          }

          .place-header {
            background: linear-gradient(135deg, #1b7a5c 0%, #25956f 100%);
            padding: 25px;
            position: relative;
            overflow: hidden;
          }

          .place-header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          }

          .place-number {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.25);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.1rem;
            border: 2px solid rgba(255, 255, 255, 0.4);
          }

          .place-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: white;
            margin-bottom: 5px;
            font-weight: 700;
            position: relative;
            z-index: 1;
          }

          .place-fullname {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.9);
            font-style: italic;
            position: relative;
            z-index: 1;
          }

          .place-highlight {
            position: absolute;
            top: 15px;
            left: 15px;
            background: #2eaa82;
            color: white;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 2;
          }

          .place-body {
            padding: 25px;
          }

          .place-category {
            display: inline-block;
            background: #f0fdf9;
            color: #1b7a5c;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .place-description {
            color: #2d6a53;
            line-height: 1.7;
            margin-bottom: 20px;
            font-size: 0.95rem;
          }

          .place-features {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .feature-tag {
            background: linear-gradient(135deg, #f0fdf9 0%, #f8fcfb 100%);
            color: #1b7a5c;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
            border: 1px solid #2eaa82;
          }

          /* FAQ Section */
          .faq-section {
            padding: 80px 20px;
            background: white;
          }

          .faq-container {
            max-width: 900px;
            margin: 0 auto;
          }

          .faq-item {
            background: #f8fcfb;
            border-radius: 12px;
            margin-bottom: 20px;
            overflow: hidden;
            border: 1px solid #2eaa82;
            transition: all 0.3s ease;
          }

          .faq-item:hover {
            box-shadow: 0 5px 20px rgba(27, 122, 92, 0.1);
          }

          .faq-question {
            font-family: 'Lora', serif;
            font-size: 1.15rem;
            color: #1b7a5c;
            padding: 25px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .faq-answer {
            padding: 0 25px 25px;
            color: #2d6a53;
            line-height: 1.8;
            font-size: 1rem;
          }

          /* CTA Section */
          .cta-section {
            background: linear-gradient(135deg, #1b7a5c 0%, #25956f 50%, #2eaa82 100%);
            padding: 80px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
              radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
          }

          .cta-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
          }

          .cta-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: white;
            margin-bottom: 20px;
            font-weight: 700;
          }

          .cta-text {
            font-size: 1.2rem;
            color: #fff9e6;
            margin-bottom: 35px;
            line-height: 1.7;
          }

          .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }

          .cta-button {
            background: white;
            color: #1b7a5c;
            padding: 16px 40px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.05rem;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          }

          .cta-button.secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
          }

          .cta-button.secondary:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          /* SEO Content Section */
          .seo-content {
            padding: 80px 20px;
            background: #fefefe;
          }

          .seo-text {
            max-width: 900px;
            margin: 0 auto;
            line-height: 1.9;
            color: #2d6a53;
            font-size: 1.05rem;
          }

          .seo-text h2 {
            font-family: 'Playfair Display', serif;
            color: #1b7a5c;
            font-size: 2rem;
            margin: 40px 0 20px;
            font-weight: 700;
          }

          .seo-text h3 {
            font-family: 'Lora', serif;
            color: #25956f;
            font-size: 1.5rem;
            margin: 30px 0 15px;
            font-weight: 600;
          }

          .seo-text p {
            margin-bottom: 20px;
          }

          .seo-text strong {
            color: #1b7a5c;
            font-weight: 600;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero-section {
              padding: 80px 20px 50px;
            }

            .package-card {
              padding: 30px 20px;
            }

            .package-header {
              flex-direction: column;
              align-items: flex-start;
            }

            .places-grid {
              grid-template-columns: 1fr;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: stretch;
            }

            .cta-button {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .hero-badges {
              flex-direction: column;
              align-items: stretch;
            }

            .badge {
              justify-content: center;
            }

            .top-nav {
              padding: 12px 20px;
              flex-wrap: wrap;
              gap: 15px;
            }

            .logo-title {
              font-size: 1.3rem;
            }

            .logo-tagline {
              font-size: 0.65rem;
            }

            .social-icons {
              gap: 8px;
            }

            .social-icon {
              width: 38px;
              height: 38px;
            }
          }
        `}</style>

        {/* Top Navigation Bar */}
        <nav className="top-nav" role="navigation" aria-label="Main Navigation">
          <div className="logo-section">
            <div className="logo-title">KRITHIK TOURS & TRAVELS</div>
            <div className="logo-tagline">COMMIT TO COMFORT TRAVEL</div>
          </div>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://wa.me/918925001292" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero-section" role="banner">
          <div className="hero-pattern"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              Palani Tourist Places
            </h1>
            <p className="hero-subtitle">
              Discover the Divine: Complete Temple Tour of Sacred Palani
            </p>
            <p className="hero-description">
              Explore the most famous tourist places in Palani and nearby temples with our comprehensive 2-day tour package. Visit the renowned Palani Hill Temple, ancient spiritual sites, and rare underground temples with comfortable family accommodation.
            </p>
            <div className="hero-badges">
              <div className="badge">
                <MapPin size={18} />
                8+ Sacred Places
              </div>
              <div className="badge">
                <Clock size={18} />
                2 Days 1 Night
              </div>
              <div className="badge">
                <Star size={18} />
                Best Hotel Stay
              </div>
            </div>
          </div>
        </header>

        {/* Tour Package Section */}
        <section className="tour-package-section" aria-label="Tour Package Details">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Complete Palani Temple Tour Package
              </h2>
              <p className="section-subtitle">
                All-inclusive 2 Days 1 Night package covering every major tourist place in Palani with family-friendly accommodation by Krithik Tours and Travels
              </p>
            </div>

            <article className="package-card">
              <div className="package-header">
                <h3 className="package-title">Palani Spiritual Journey</h3>
                <div className="package-duration">
                  <Clock size={20} />
                  2 Days 1 Night
                </div>
              </div>

              <div className="package-features">
                <div className="feature-item">
                  <Navigation className="feature-icon" size={24} />
                  <div className="feature-text">
                    <strong>Convenient Pickup:</strong> Railway Junction / Hotel / Bus Stand (as per your preference)
                  </div>
                </div>
                <div className="feature-item">
                  <Star className="feature-icon" size={24} />
                  <div className="feature-text">
                    <strong>Premium Stay:</strong> Family accommodation in best hotel in Palani
                  </div>
                </div>
                <div className="feature-item">
                  <MapPin className="feature-icon" size={24} />
                  <div className="feature-text">
                    <strong>Complete Coverage:</strong> All 8+ major Palani visiting places included
                  </div>
                </div>
                <div className="feature-item">
                  <Clock className="feature-icon" size={24} />
                  <div className="feature-text">
                    <strong>Early Darshan:</strong> Special access to Palani Hill Temple during morning hours
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Tourist Places Section */}
        <section className="places-section" aria-label="Places to Visit in Palani">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Famous Places to Visit in Palani
              </h2>
              <p className="section-subtitle">
                Explore the best tourist places near Palani including ancient temples, siddhar kovils, and rare spiritual sites
              </p>
            </div>

            <div className="places-grid">
              {touristPlaces.map((place) => (
                <article key={place.id} className="place-card">
                  {place.highlight && (
                    <div className="place-highlight">
                      <Star size={14} />
                      {place.highlight}
                    </div>
                  )}
                  <div className="place-header">
                    <div className="place-number">{place.id}</div>
                    <h3 className="place-name">{place.name}</h3>
                    {place.fullName && (
                      <p className="place-fullname">{place.fullName}</p>
                    )}
                  </div>
                  <div className="place-body">
                    {place.category && (
                      <span className="place-category">{place.category}</span>
                    )}
                    <p className="place-description">{place.description}</p>
                    <div className="place-features">
                      {place.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" aria-label="Frequently Asked Questions">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                Frequently Asked Questions
              </h2>
              <p className="section-subtitle">
                Everything you need to know about Palani tourist places
              </p>
            </div>

            <div className="faq-container">
              <div className="faq-item">
                <div className="faq-question">
                  What are the best tourist places to visit in Palani?
                </div>
                <div className="faq-answer">
                  The best tourist places in Palani include the famous Palani Hill Temple (Arulmigu Dhandayuthapani Swamy Temple), Thiruavinangudi Temple, Mariyamman Kovil, Periya Nayaki Amman Kovil, Periyaudaiyar Kovil, Saakkadai Sithar Kovil, Kannakampatti Sarguru Jeeva Samadhi, and the unique underground Rediyarchathiram Pathala Sembumruga Kovil. Our tour package covers all these significant Palani visiting places.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  What are the famous places near Palani for a one-day trip?
                </div>
                <div className="faq-answer">
                  For a one-day trip near Palani, you can visit the Palani Murugan Temple, Thiruavinangudi Temple, and other nearby temples. However, to fully experience all the Palani nearest tourist places, our comprehensive 2-day tour package is recommended, which includes comfortable accommodation and covers all major attractions.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  What are the best places to visit in Palani with family?
                </div>
                <div className="faq-answer">
                  Palani is perfect for family visits with peaceful temples like Periya Nayaki Amman Kovil, the famous Palani Hill Temple with convenient rope car access, and spiritual sites like Kannakampatti Sarguru Jeeva Samadhi. Our family-friendly tour package includes stay in the best hotels in Palani with comfortable amenities suitable for all age groups.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  How do I reach Palani Hill Temple?
                </div>
                <div className="faq-answer">
                  Palani Hill Temple can be accessed through three convenient options: winch (mechanized lift), rope car (cable car), or by climbing the steps. Our tour package includes early morning darshan with your preferred access method, and special darshan is also available for devotees.
                </div>
              </div>

              <div className="faq-item">
                <div className="faq-question">
                  How many tourist places are covered in the Palani tour package?
                </div>
                <div className="faq-answer">
                  Our comprehensive Palani tour package covers 8+ major tourist places including the renowned Palani Hill Temple, ancient temples, amman kovils, siddhar temples, meditation samadhis, and rare underground temples. This ensures you experience all significant Palani nearby tourist places in a well-organized 2-day itinerary.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="seo-content" aria-label="About Palani Tourism">
          <div className="container">
            <div className="seo-text">
              <h2>Discover Palani Tourist Places: A Complete Spiritual Journey</h2>
              
              <p>
                <strong>Palani</strong>, located in Tamil Nadu, is one of the most sacred pilgrimage destinations in South India. Known for the famous <strong>Palani Hill Temple</strong> dedicated to Lord Murugan, this spiritual town attracts millions of devotees and tourists annually. Our comprehensive guide to <strong>places to visit in Palani</strong> helps you explore the divine energy and cultural heritage of this holy town.
              </p>

              <h3>Famous Tourist Places in Palani</h3>
              
              <p>
                The <strong>Palani Murugan Temple</strong> (Arulmigu Dhandayuthapani Swamy Temple) stands atop the Palani Hill and is one of the six abodes of Lord Murugan. This ancient temple can be reached via winch, rope car, or by climbing 659 steps. The early morning darshan offers a peaceful and divine experience that draws spiritual seekers from around the world.
              </p>

              <p>
                Beyond the main hill temple, <strong>Palani near tourist places</strong> include numerous ancient temples, each with unique spiritual significance. The Thiruavinangudi Temple, an ancient Murugan shrine, showcases classical Tamil temple architecture. The Mariyamman Kovil and Periya Nayaki Amman Kovil provide protective blessings and peaceful environments perfect for meditation and family visits.
              </p>

              <h3>Unique Places to Visit Near Palani</h3>
              
              <p>
                One of the most extraordinary <strong>tourist places near Palani</strong> is the Rediyarchathiram Pathala Sembumruga Kovil - a rare underground Murugan temple that offers a unique spiritual experience. The Saakkadai Sithar Kovil is renowned for its healing vibrations and attracts those seeking spiritual energy and wellness. The Kannakampatti Sarguru Jeeva Samadhi provides a meditation-friendly environment for contemplation and inner peace.
              </p>

              <h3>Best Palani Visiting Places for Families</h3>
              
              <p>
                When planning <strong>places to visit in Palani with family</strong>, the tour covers temples that are accessible and welcoming to all age groups. The Palani Hill Temple's rope car facility makes it convenient for elderly family members and children. The peaceful atmosphere of Periya Nayaki Amman Kovil and the historic Periyaudaiyar Kovil (Shiva temple) provide enriching cultural experiences for the entire family.
              </p>

              <h3>Palani Near Tourist Places for One Day Trip</h3>
              
              <p>
                While a one-day visit to <strong>Palani tourist places</strong> is possible, we recommend our 2-day tour package to fully experience all the sacred sites. The package includes comfortable accommodation in the best hotel in Palani, convenient pickup from railway junction, hotel, or bus stand, and expertly planned visits to all major temples and spiritual locations.
              </p>

              <h3>Why Choose Krithik Tours and Travels?</h3>
              
              <p>
                Our <strong>Palani tour package</strong> is designed to provide a comprehensive spiritual journey covering all <strong>Palani famous places</strong>. We ensure comfortable family stays, convenient transportation, and well-timed temple visits including early morning darshan at the Palani Hill Temple. Whether you're seeking the <strong>nearest tourist places to Palani</strong> or want to explore the complete spiritual circuit, our package offers the perfect blend of devotion, culture, and comfort.
              </p>

              <p>
                Book your <strong>Palani tourist place</strong> tour today and embark on a divine journey through one of Tamil Nadu's most revered pilgrimage destinations. Experience the spiritual energy, ancient architecture, and peaceful ambiance that make Palani a must-visit destination for devotees and cultural enthusiasts alike.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" aria-label="Book Your Tour">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Experience Palani's Divine Energy?
            </h2>
            <p className="cta-text">
              Book your comprehensive 2-day Palani temple tour package with family accommodation and explore all the sacred tourist places in comfort and style.
            </p>
            <div className="cta-buttons">
              <button className="cta-button">
                <Phone size={20} />
                Contact Us Now
              </button>
              <button className="cta-button secondary">
                <Mail size={20} />
                Get Quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PalaniTouristPlaces;
