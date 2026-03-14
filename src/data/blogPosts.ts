export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  path?: string;
}

export const blogCategories = [
  { id: 'all', label: 'All Posts' },
  { id: 'temples', label: 'Temples & Pilgrimage' },
  { id: 'hill-stations', label: 'Hill Stations' },
  { id: 'travel-tips', label: 'Travel Tips' },
  { id: 'history', label: 'History & Culture' },
  { id: 'itineraries', label: 'Itineraries' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'kodaikanal-travel-guide',
    title: 'Kodaikanal Travel Guide: Best Hill Station in Tamil Nadu',
    excerpt:
      'Discover Kodaikanal — the Princess of Hill Stations at 2,133m in Tamil Nadu. Explore top 10 attractions, best time to visit, how to reach, where to stay, and local food. Plan your perfect Kodai trip now.',
    category: 'hill-stations',
    date: 'January 1, 2025',
    readTime: '10 min read',
    image: '/munnar.jpg',
    tags: ['Kodaikanal', 'Hill Station', 'Tamil Nadu', 'Travel Guide', 'Dindigul'],
    path: '/blog/hill-stations/kodaikanal-travel-guide',
  },
  {
    slug: 'yercaud-travel-guide',
    title: "Yercaud Travel Guide: Salem's Hidden Hill Station Gem",
    excerpt:
      "Discover Yercaud — Salem's hidden hill station at 1,515m in the Shevaroy Hills. Explore top attractions, coffee estates, best season, and how to reach the 'Poor Man's Ooty' of Tamil Nadu.",
    category: 'hill-stations',
    date: 'January 1, 2025',
    readTime: '9 min read',
    image: '/Yercaud.jpg',
    tags: ['Yercaud', 'Hill Station', 'Salem', 'Tamil Nadu', 'Travel Guide'],
    path: '/blog/hill-stations/yercaud-travel-guide',
  },
  {
    slug: 'munnar-travel-guide',
    title: "Munnar Travel Guide: Kerala's Most Stunning Hill Station",
    excerpt:
      "Explore Munnar — Kerala's most breathtaking hill station at 1,600m with sweeping tea gardens, Eravikulam National Park, and Anamudi Peak. Plan your Munnar trip with our complete 2025 guide.",
    category: 'hill-stations',
    date: 'January 1, 2025',
    readTime: '11 min read',
    image: '/munnar copy.jpg',
    tags: ['Munnar', 'Kerala', 'Hill Station', 'Tea Gardens', 'Travel Guide'],
    path: '/blog/hill-stations/munnar-travel-guide',
  },
  {
    slug: 'kodaikanal-travel-tips',
    title: '15 Essential Travel Tips for Kodaikanal First-Timers',
    excerpt:
      'Planning your first Kodaikanal trip? These 15 essential travel tips cover what to pack, best roads, permits, food, photography spots, budget planning, and how to avoid tourist traps.',
    category: 'travel-tips',
    date: 'January 1, 2025',
    readTime: '8 min read',
    image: '/Kodaikanal.jpg',
    tags: ['Kodaikanal', 'Travel Tips', 'First Timers', 'Trip Planning', 'Tamil Nadu'],
    path: '/blog/travel-tips/kodaikanal-travel-tips',
  },
  {
    slug: 'munnar-travel-tips',
    title: 'Munnar Travel Tips: Complete Planning Guide for 2025',
    excerpt:
      'Everything you need to plan the perfect Munnar trip in 2025 — seasonal guide, transport options, accommodation zones, wildlife permits, budget breakdown, packing list, and local shopping tips.',
    category: 'travel-tips',
    date: 'January 1, 2025',
    readTime: '9 min read',
    image: '/munnar copy.jpg',
    tags: ['Munnar', 'Travel Tips', 'Kerala', '2025', 'Trip Planning'],
    path: '/blog/travel-tips/munnar-travel-tips',
  },
  {
    slug: 'alleppey-houseboat-tips',
    title: 'Alleppey Boat Stay Tips: How to Plan the Perfect Houseboat Trip',
    excerpt:
      'Plan the perfect Alleppey houseboat trip with expert tips on choosing a boat, best seasons, what\'s included, food on board, safety, nearby attractions, and budget breakdown for Kerala backwaters.',
    category: 'travel-tips',
    date: 'January 1, 2025',
    readTime: '9 min read',
    image: '/allepey.jpg',
    tags: ['Alleppey', 'Houseboat', 'Kerala', 'Backwaters', 'Travel Tips'],
    path: '/blog/travel-tips/alleppey-houseboat-tips',
  },
  {
    slug: 'mysore-travel-tips',
    title: 'Mysore Travel Tips: Everything You Need to Know Before You Visit',
    excerpt:
      'Plan your perfect Mysore trip with expert travel tips — best time to visit, Dasara festival, Mysore Palace, day trips to Coorg and Ooty, shopping for silk and sandalwood, and food guide.',
    category: 'travel-tips',
    date: 'January 1, 2025',
    readTime: '9 min read',
    image: '/Mysore.jpeg',
    tags: ['Mysore', 'Travel Tips', 'Karnataka', 'Dasara', 'Trip Planning'],
    path: '/blog/travel-tips/mysore-travel-tips',
  },
  {
    slug: 'kodaikanal-history',
    title: 'Kodaikanal History: From Palani Hills to British Hill Resort',
    excerpt:
      'Explore the rich history of Kodaikanal — from indigenous Palaiyar tribes to American missionaries in 1845, colonial-era bungalows, and the creation of Kodai Lake in 1863. A complete historical guide.',
    category: 'history',
    date: 'January 1, 2025',
    readTime: '10 min read',
    image: '/Pillar_Rock_Kodaikanal.jpg',
    tags: ['Kodaikanal', 'History', 'Colonial Era', 'Tamil Nadu', 'Heritage'],
    path: '/blog/history-culture/kodaikanal-history',
  },
  {
    slug: 'mysore-history',
    title: 'Mysore History: The Royal City of Wadiyars and Tipu Sultan',
    excerpt:
      'Trace the magnificent history of Mysore — from ancient Mahishamati to the Vijayanagara Empire, the legendary Tipu Sultan, the Wadiyar dynasty, and the modern era of Sir M. Visvesvaraya.',
    category: 'history',
    date: 'January 1, 2025',
    readTime: '11 min read',
    image: '/Mysore.jpeg',
    tags: ['Mysore', 'History', 'Tipu Sultan', 'Wadiyar', 'Karnataka'],
    path: '/blog/history-culture/mysore-history',
  },
  {
    slug: 'munnar-history-culture',
    title: 'Munnar History and Culture: Tea, Tribes and Colonial Legacy',
    excerpt:
      'Discover the fascinating history and culture of Munnar — from the Muthuvan tribes and colonial tea planters to the Tata Tea era, Eravikulam National Park, and the rare Neelakurinji bloom.',
    category: 'history',
    date: 'January 1, 2025',
    readTime: '10 min read',
    image: '/munnar.jpg',
    tags: ['Munnar', 'History', 'Culture', 'Tea Estates', 'Kerala'],
    path: '/blog/history-culture/munnar-history-culture',
  },
  {
    slug: 'alleppey-history',
    title: "Alleppey History: The Venice of the East and Kerala's Backwater Heritage",
    excerpt:
      "Explore the rich history of Alleppey (Alappuzha) — from Raja Kesavadas's 1762 port town to the coir industry, Lord Curzon's Venice remark, the Nehru Trophy Boat Race, and Kerala's backwater heritage.",
    category: 'history',
    date: 'January 1, 2025',
    readTime: '10 min read',
    image: '/allepey.jpg',
    tags: ['Alleppey', 'History', 'Kerala', 'Backwaters', 'Coir'],
    path: '/blog/history-culture/alleppey-history',
  },
  {
    slug: 'kodaikanal-3-days-2-nights-itinerary',
    title: 'Kodaikanal 3 Days 2 Nights Itinerary: The Perfect Weekend Trip',
    excerpt:
      'Plan the perfect Kodaikanal weekend getaway with our detailed 3 days 2 nights itinerary — covering Kodai Lake, Pillar Rocks, Berijam Lake, Bear Shola Falls, Coaker\'s Walk, and more. Budget breakdown included.',
    category: 'itineraries',
    date: 'January 1, 2025',
    readTime: '8 min read',
    image: '/Kodaikanal.jpg',
    tags: ['Kodaikanal', 'Itinerary', '3 Days', 'Weekend Trip', 'Tamil Nadu'],
    path: '/blog/itineraries/kodaikanal-3-days-2-nights-itinerary',
  },
  {
    slug: 'yercaud-2-days-1-night-itinerary',
    title: 'Yercaud 2 Days 1 Night Itinerary: Quick Escape from Salem',
    excerpt:
      'Escape to Yercaud with our perfect 2 days 1 night itinerary — Yercaud Lake, Pagoda Point, Shevaroy Temple, Killiyur Falls, coffee plantations, and more. Ideal for families, couples, and solo travellers.',
    category: 'itineraries',
    date: 'January 1, 2025',
    readTime: '7 min read',
    image: '/Yercaud.jpg',
    tags: ['Yercaud', 'Itinerary', '2 Days', 'Weekend Trip', 'Salem'],
    path: '/blog/itineraries/yercaud-2-days-1-night-itinerary',
  },
  {
    slug: 'alleppey-houseboat-2-days-1-night',
    title: 'Alleppey Houseboat Itinerary: 2 Days 1 Night Backwater Experience',
    excerpt:
      'Experience the magic of Kerala backwaters with our Alleppey houseboat 2 days 1 night itinerary — Vembanad Lake cruise, sunset on backwaters, traditional Kerala meals, fishing villages, and more.',
    category: 'itineraries',
    date: 'January 1, 2025',
    readTime: '8 min read',
    image: '/allepey.jpg',
    tags: ['Alleppey', 'Houseboat', 'Itinerary', 'Kerala', 'Backwaters'],
    path: '/blog/itineraries/alleppey-houseboat-2-days-1-night',
  },
  {
    slug: 'mysore-3-days-itinerary',
    title: 'Mysore 3 Days Itinerary: Palaces, Temples and Royal Heritage',
    excerpt:
      'Explore royal Mysore with our perfect 3 days itinerary — Mysore Palace, Chamundi Hill, Srirangapatna, Brindavan Gardens, and optional Coorg or Ooty extension. Best season, budget, and booking tips included.',
    category: 'itineraries',
    date: 'January 1, 2025',
    readTime: '9 min read',
    image: '/Mysore.jpeg',
    tags: ['Mysore', 'Itinerary', '3 Days', 'Palace', 'Karnataka'],
    path: '/blog/itineraries/mysore-3-days-itinerary',
  },
  {
    slug: 'arupadai-veedu-murugan-temple-tour',
    title: 'Arupadai Veedu — Best Travel Agency in Tamil Nadu',
    excerpt:
      'Visit all 6 sacred Murugan temples — Palani, Thiruchendur, Swamimalai, Thiruparankundram, Pazhamudircholai, and Tiruttani — in a single 3 Days / 2 Nights private pilgrimage package with A/C car, driver-guide, and hotel stay.',
    category: 'itineraries',
    date: 'March 14, 2026',
    readTime: '8 min read',
    image: '/palani.jpg',
    tags: ['Arupadai Veedu', 'Murugan Temples', 'Tamil Nadu', 'Pilgrimage', '3 Days Tour', 'Itinerary'],
    path: '/arupadai-veedu-murugan-temple-tour',
  },
  {
    slug: 'palani-tourist-places',
    title: 'Top Tourist Places in Palani You Must Visit',
    excerpt:
      'From the sacred hilltop Murugan temple to hidden Siddhar caves and ancient samadhis — explore the best places to visit in Palani, Tamil Nadu for a complete spiritual and cultural experience.',
    category: 'temples',
    date: 'March 14, 2026',
    readTime: '6 min read',
    image: '/palani.jpg',
    tags: ['Palani', 'Tourist Places', 'Murugan Temple', 'Tamil Nadu', 'Pilgrimage'],
    path: '/palani-tourist-places',
  },
  {
    slug: 'palani-temple-history',
    title: 'Palani Temple: 100 Years of History, Devotion & Sacred Heritage',
    excerpt:
      'Discover the rich historical legacy of Arulmigu Dhandayuthapani Swamy Temple — one of the six abodes of Lord Murugan — spanning over a century of faith, architecture, and pilgrimage tradition.',
    category: 'history',
    date: 'March 14, 2026',
    readTime: '12 min read',
    image: '/palani.jpg',
    tags: ['Palani', 'Temple', 'Murugan', 'Tamil Nadu', 'History', 'Pilgrimage'],
    path: '/blog/palani-temple-history',
  },
];
