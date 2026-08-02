export const BASE_URL = 'https://www.krithiktoursandtravels.com';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export type RouteCategory =
  | 'home'
  | 'language'
  | 'service'
  | 'tour'
  | 'blog'
  | 'blog-post';

export interface RouteEntry {
  path: string;
  category: RouteCategory;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly';
  title: string;
  description: string;
}

export const routes: RouteEntry[] = [
  {
    path: '/',
    category: 'home',
    priority: 1.0,
    changefreq: 'weekly',
    title: 'Krithik Tours & Travels | Best Taxi Service in Palani | South India Tour Packages 2026',
    description:
      'Krithik Tours & Travels Palani — leading taxi service and tour operator in Tamil Nadu offering affordable car rentals, customized South India tour packages, and pilgrimage tours. Call 8925001292.',
  },
  {
    path: '/tamil',
    category: 'language',
    priority: 0.9,
    changefreq: 'weekly',
    title: 'கிருத்திக் டாஸ் & டிராவல்ஸ் | பழனி டாக்ஸி | தென்னிந்திய சுற்றுலா தொகுப்புகள்',
    description:
      'பழனியில் சிறந்த டாக்ஸி மற்றும் சுற்றுலா சேவை. தென்னிந்திய மலைவாழிட சுற்றுலா, கோயில் சுற்றுலா தொகுப்புகள். இப்போதே அழைக்கவும் 8925001292.',
  },
  {
    path: '/hindi',
    category: 'language',
    priority: 0.9,
    changefreq: 'weekly',
    title: 'कृथिक टूर्स एंड ट्रैवल्स | पलानी टैक्सी | दक्षिण भारत यात्रा पैकेज',
    description:
      'पलानी में सर्वश्रेष्ठ टैक्सी और यात्रा सेवा। दक्षिण भारत के हिल स्टेशन टूर, तीर्थ यात्रा पैकेज। अभी कॉल करें 8925001292।',
  },
  {
    path: '/telugu',
    category: 'language',
    priority: 0.9,
    changefreq: 'weekly',
    title: 'కృథిక్ టూర్స్ & ట్రావెల్స్ | పలాని టాక్సీ | దక్షిణ భారత పర్యాటక ప్యాకేజీలు',
    description:
      'పలానిలో ఉత్తమ టాక్సీ మరియు పర్యాటక సేవ. దక్షిణ భారత హిల్ స్టేషన్ టూర్లు, ఆలయ పర్యాటక ప్యాకేజీలు. ఇప్పుడే కాల్ చేయండి 8925001292.',
  },
  {
    path: '/kannada',
    category: 'language',
    priority: 0.9,
    changefreq: 'weekly',
    title: 'ಕೃಥಿಕ್ ಟೂರ್ಸ್ & ಟ್ರಾವೆಲ್ಸ್ | ಪಾಲನಿ ಟ್ಯಾಕ್ಸಿ | ದಕ್ಷಿಣ ಭಾರತ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳು',
    description:
      'ಪಾಲನಿಯಲ್ಲಿ ಅತ್ಯುತ್ತಮ ಟ್ಯಾಕ್ಸಿ ಮತ್ತು ಪ್ರವಾಸ ಸೇವೆ. ದಕ್ಷಿಣ ಭಾರತದ ಬೆಟ್ಟದ ತಾಣ ಪ್ರವಾಸ, ದೇವಾಲಯ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳು. ಈಗಲೇ ಕರೆ ಮಾಡಿ 8925001292.',
  },
  {
    path: '/hire',
    category: 'service',
    priority: 0.9,
    changefreq: 'monthly',
    title: 'Hire a Cab | AC Car, SUV, Traveller & Bus Rental — Krithik Tours & Travels',
    description:
      'Book AC cabs, SUVs, tempo travellers, and buses for local and outstation trips. Dzire from ₹3,599, Innova from ₹5,999, Traveller from ₹7,599. Call 8925001292.',
  },
  {
    path: '/customer-testimonials',
    category: 'service',
    priority: 0.7,
    changefreq: 'weekly',
    title: 'Customer Testimonials | Krithik Tours & Travels Reviews',
    description:
      'Read real customer reviews and testimonials for Krithik Tours & Travels. 500+ happy travelers, 5-star rated taxi and tour service in Palani, Tamil Nadu.',
  },
  {
    path: '/videos',
    category: 'service',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Video Testimonials | Krithik Tours & Travels',
    description:
      'Watch real video experiences from our happy travelers. See why 500+ customers rated Krithik Tours & Travels 5 stars for South India tour packages.',
  },
  {
    path: '/palani-temple-one-day-trip',
    category: 'tour',
    priority: 0.9,
    changefreq: 'monthly',
    title: 'Palani Temple One Day Trip | Murugan Temple Tour — Krithik Tours',
    description:
      'Sacred one-day journey to Lord Murugan\'s hill shrine at Palani. Driver-cum-guide, toll charges, and pickup anywhere in Tamil Nadu included. Book now — 8925001292.',
  },
  {
    path: '/kodaikanal-two-days-trip',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Kodaikanal Two Days Trip | Hill Station Tour Package — Krithik Tours',
    description:
      'Two-day hill station getaway to the Princess of Hill Stations. Hotel stay, driver, and pickup/drop included. Weekend ₹14,999. Call 8925001292.',
  },
  {
    path: '/yercaud-tour-package-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Yercaud Tour Package Itinerary | Hill Station Trip — Krithik Tours',
    description:
      'Affordable hill station tour package to Yercaud with complete itinerary. Lake, viewpoints, and coffee plantations. Weekend ₹12,999. Call 8925001292.',
  },
  {
    path: '/palani-history-temple-history',
    category: 'tour',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Palani History & Temple History | Murugan Shrine Heritage — Krithik Tours',
    description:
      'Explore the ancient history of Palani and its famous Murugan temple. Learn about centuries of devotion, architecture, and pilgrimage tradition.',
  },
  {
    path: '/coimbatore-marudhamalai-one-day-trip',
    category: 'tour',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Coimbatore Marudhamalai One Day Trip | Murugan Temple — Krithik Tours',
    description:
      'One-day pilgrimage trip to Marudhamalai Murugan Temple near Coimbatore. Driver-cum-guide and pickup/drop included. Call 8925001292.',
  },
  {
    path: '/nri-south-india-tour-pickup-drop-ooty',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'NRI South India Tour with Pickup & Drop to Ooty — Krithik Tours',
    description:
      'Tailored South India tour package for NRI visitors with Ooty pickup and drop. Temples, hill stations, and heritage tours. Call 8925001292.',
  },
  {
    path: '/malaysia-to-south-india-tour-package',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Malaysia to South India Tour Package | Temple & Hill Station — Krithik Tours',
    description:
      'Comprehensive South India temple and hill station tour for visitors from Malaysia. Airport pickup, hotel stay, and driver included. Call 8925001292.',
  },
  {
    path: '/singapore-to-south-india-tour-package',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Singapore to South India Tour Package | Pilgrimage & Sightseeing — Krithik Tours',
    description:
      'Curated South India pilgrimage and sightseeing tour for visitors from Singapore. Airport transfers, hotel, and driver included. Call 8925001292.',
  },
  {
    path: '/palani-one-day-temple-trip',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Palani One Day Temple Trip | Full-Day Pilgrimage — Krithik Tours',
    description:
      'Full-day pilgrimage tour to Palani Murugan Temple from Palani railway station. Visit multiple temples with driver-cum-guide. Call 8925001292.',
  },
  {
    path: '/alleppey-overnight-houseboat-stay',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Alleppey Overnight Houseboat Stay | Kerala Backwaters — Krithik Tours',
    description:
      'Overnight houseboat experience on Kerala\'s iconic backwaters in Alleppey. Vembanad Lake cruise, sunset, and traditional meals. ₹14,999. Call 8925001292.',
  },
  {
    path: '/yercaud-hill-station-tour-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Yercaud Hill Station Tour Itinerary | Salem Hill Station — Krithik Tours',
    description:
      'Complete Yercaud hill station tour with lake, viewpoints, and coffee plantations. 3 days/2 nights from ₹12,999. Call 8925001292.',
  },
  {
    path: '/munnar-nature-tour-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Munnar Nature Tour Itinerary | Kerala Tea Gardens — Krithik Tours',
    description:
      'Kerala\'s tea country — Munnar tour with tea gardens, waterfalls, and Eravikulam National Park. 3 days/2 nights from ₹14,999. Call 8925001292.',
  },
  {
    path: '/kodaikanal-2-day-sightseeing-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Kodaikanal 2 Day Sightseeing Itinerary | Pillar Rocks & Lake — Krithik Tours',
    description:
      'Detailed 2-day sightseeing itinerary covering Kodaikanal lake, Pillar Rocks, Coaker\'s Walk, and more. From ₹14,999. Call 8925001292.',
  },
  {
    path: '/mysore-heritage-tour-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Mysore Heritage Tour Itinerary | Palace & Temples — Krithik Tours',
    description:
      'Royal city of Mysore — palace, Chamundeshwari temple, Brindavan gardens tour. 3 days/2 nights from ₹14,999. Call 8925001292.',
  },
  {
    path: '/ooty-hill-station-itinerary',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Ooty Hill Station Itinerary | Botanical Gardens & Doddabetta — Krithik Tours',
    description:
      'Queen of Hill Stations — Ooty tour with botanical garden, Doddabetta peak, and lake. 3 days/2 nights from ₹14,999. Call 8925001292.',
  },
  {
    path: '/coorg-coffee-estate-tour-plan',
    category: 'tour',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Coorg Coffee Estate Tour Plan | Scotland of India — Krithik Tours',
    description:
      'Scotland of India — Coorg tour with coffee estates, Abbey Falls, and Raja\'s Seat. 3 days/2 nights from ₹14,999. Call 8925001292.',
  },
  {
    path: '/valparai-tea-estate-sightseeing-tour',
    category: 'tour',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Valparai Tea Estate Sightseeing Tour | Annamalai Hills — Krithik Tours',
    description:
      'Valparai hill station tour with tea and coffee plantations and wildlife sightings. 3 days/2 nights from ₹14,999. Call 8925001292.',
  },
  {
    path: '/pilgrimage-special-tour-malaysia-singapore-nri',
    category: 'tour',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Pilgrimage Special Tour for Malaysia, Singapore & NRI — Krithik Tours',
    description:
      'Special pilgrimage package covering major South India temples for overseas Tamil community. 7 days/6 nights. Call 8925001292.',
  },
  {
    path: '/palani-tourist-places',
    category: 'tour',
    priority: 0.9,
    changefreq: 'monthly',
    title: 'Palani Tourist Places | Complete Guide to Palani Attractions — Krithik Tours',
    description:
      'Comprehensive guide to all tourist attractions in and around Palani — temples, viewpoints, and pilgrimage sites. Plan your Palani trip today.',
  },
  {
    path: '/arupadai-veedu-murugan-temple-tour',
    category: 'tour',
    priority: 0.8,
    changefreq: 'monthly',
    title: 'Arupadai Veedu Murugan Temple Tour | Six Abodes Pilgrimage — Krithik Tours',
    description:
      'Pilgrimage tour to all six abodes of Lord Murugan in Tamil Nadu. Private car, hotel, and driver included. 3 days/2 nights. Call 8925001292.',
  },
  {
    path: '/blog',
    category: 'blog',
    priority: 0.8,
    changefreq: 'weekly',
    title: 'Travel Blog | South India Travel Guides & Tips — Krithik Tours & Travels',
    description:
      'Travel stories, destination guides, tips, and itineraries for South India trips. Expert advice on Kodaikanal, Munnar, Ooty, Yercaud, Mysore, and more.',
  },
  {
    path: '/blog/palani-temple-history',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Palani Temple: 100 Years of History, Devotion & Sacred Heritage',
    description:
      'Discover the rich historical legacy of Arulmigu Dhandayuthapani Swamy Temple — one of the six abodes of Lord Murugan.',
  },
  {
    path: '/blog/hill-stations/kodaikanal-travel-guide',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu',
    description:
      'Discover Kodaikanal — the Princess of Hill Stations at 2,133m in Tamil Nadu. Top 10 attractions, best time to visit, how to reach, where to stay.',
  },
  {
    path: '/blog/hill-stations/yercaud-travel-guide',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: "Yercaud Travel Guide: Salem's Hidden Hill Station Gem",
    description:
      "Discover Yercaud — Salem's hidden hill station at 1,515m in the Shevaroy Hills. Top attractions, coffee estates, best season, and how to reach.",
  },
  {
    path: '/blog/hill-stations/munnar-travel-guide',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: "Munnar Travel Guide: Kerala's Most Stunning Hill Station",
    description:
      "Explore Munnar — Kerala's most breathtaking hill station at 1,600m with sweeping tea gardens, Eravikulam National Park, and Anamudi Peak.",
  },
  {
    path: '/blog/travel-tips/kodaikanal-travel-tips',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: '15 Essential Travel Tips for Kodaikanal First-Timers',
    description:
      'Planning your first Kodaikanal trip? 15 essential travel tips covering what to pack, best roads, permits, food, photography spots, and budget planning.',
  },
  {
    path: '/blog/travel-tips/munnar-travel-tips',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Munnar Travel Tips: Complete Planning Guide for 2025',
    description:
      'Everything you need to plan the perfect Munnar trip — seasonal guide, transport options, accommodation zones, wildlife permits, and budget breakdown.',
  },
  {
    path: '/blog/travel-tips/alleppey-houseboat-tips',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Alleppey Boat Stay Tips: How to Plan the Perfect Houseboat Trip',
    description:
      'Plan the perfect Alleppey houseboat trip with expert tips on choosing a boat, best seasons, food on board, safety, and budget breakdown.',
  },
  {
    path: '/blog/travel-tips/mysore-travel-tips',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Mysore Travel Tips: Everything You Need to Know Before You Visit',
    description:
      'Plan your perfect Mysore trip with expert travel tips — best time to visit, Dasara festival, Mysore Palace, shopping for silk and sandalwood.',
  },
  {
    path: '/blog/history-culture/kodaikanal-history',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Kodaikanal History: From Palani Hills to British Hill Resort',
    description:
      'Explore the rich history of Kodaikanal — from indigenous Palaiyar tribes to American missionaries in 1845 and the creation of Kodai Lake in 1863.',
  },
  {
    path: '/blog/history-culture/mysore-history',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Mysore History: The Royal City of Wadiyars and Tipu Sultan',
    description:
      'Trace the magnificent history of Mysore — from ancient Mahishamati to the Vijayanagara Empire, Tipu Sultan, the Wadiyar dynasty, and modern era.',
  },
  {
    path: '/blog/history-culture/munnar-history-culture',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: 'Munnar History and Culture: Tea, Tribes and Colonial Legacy',
    description:
      'Discover the fascinating history and culture of Munnar — from the Muthuvan tribes and colonial tea planters to the Tata Tea era and Neelakurinji bloom.',
  },
  {
    path: '/blog/history-culture/alleppey-history',
    category: 'blog-post',
    priority: 0.6,
    changefreq: 'monthly',
    title: "Alleppey History: The Venice of the East and Kerala's Backwater Heritage",
    description:
      "Explore the rich history of Alleppey (Alappuzha) — from Raja Kesavadas's 1762 port town to the coir industry and Nehru Trophy Boat Race.",
  },
  {
    path: '/blog/itineraries/kodaikanal-3-days-2-nights-itinerary',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip',
    description:
      'Plan the perfect Kodaikanal weekend getaway with our detailed 3 days 2 nights itinerary — Kodai Lake, Pillar Rocks, Berijam Lake, and more.',
  },
  {
    path: '/blog/itineraries/yercaud-2-days-1-night-itinerary',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem',
    description:
      'Escape to Yercaud with our perfect 2 days 1 night itinerary — Yercaud Lake, Pagoda Point, Shevaroy Temple, Killiyur Falls, and coffee plantations.',
  },
  {
    path: '/blog/itineraries/alleppey-houseboat-2-days-1-night',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience',
    description:
      'Experience the magic of Kerala backwaters with our Alleppey houseboat 2 days 1 night itinerary — Vembanad Lake cruise, sunset, and traditional meals.',
  },
  {
    path: '/blog/itineraries/mysore-3-days-itinerary',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage',
    description:
      'Explore royal Mysore with our perfect 3 days itinerary — Mysore Palace, Chamundi Hill, Srirangapatna, Brindavan Gardens, and optional Coorg extension.',
  },
  {
    path: '/blog/travel-tips/ooty-toy-train-timings-2027',
    category: 'blog-post',
    priority: 0.7,
    changefreq: 'monthly',
    title: 'Ooty Toy Train Timings 2027: Nilgiri Mountain Railway Complete Guide',
    description:
      'Complete Ooty toy train timings for 2027 — Mettupalayam to Ooty and Coonoor to Ooty schedules, ticket prices, booking tricks, and journey tips.',
  },
];

export const EXCLUDED_PATHS = ['*', '/404', '/admin', '/dashboard', '/login', '/api'];

export function getSitemapRoutes(): RouteEntry[] {
  return routes.filter(
    (r) => !EXCLUDED_PATHS.includes(r.path) && !r.path.includes(':')
  );
}

export function getRouteByPath(path: string): RouteEntry | undefined {
  return routes.find((r) => r.path === path);
}
