export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
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
    slug: 'palani-temple-history',
    title: 'Palani Temple: 100 Years of History, Devotion & Sacred Heritage',
    excerpt:
      'Discover the rich historical legacy of Arulmigu Dhandayuthapani Swamy Temple — one of the six abodes of Lord Murugan — spanning over a century of faith, architecture, and pilgrimage tradition.',
    category: 'history',
    date: 'March 14, 2026',
    readTime: '12 min read',
    image: '/Palani.png',
    tags: ['Palani', 'Temple', 'Murugan', 'Tamil Nadu', 'History', 'Pilgrimage'],
  },
];
