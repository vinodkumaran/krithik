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
    slug: 'palani-tourist-places',
    title: 'Top Tourist Places in Palani You Must Visit',
    excerpt:
      'From the sacred hilltop Murugan temple to hidden Siddhar caves and ancient samadhis — explore the best places to visit in Palani, Tamil Nadu for a complete spiritual and cultural experience.',
    category: 'temples',
    date: 'March 14, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Palani', 'Temple', 'Murugan', 'Tamil Nadu', 'History', 'Pilgrimage'],
    path: '/blog/palani-temple-history',
  },
];
