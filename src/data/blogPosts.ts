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
