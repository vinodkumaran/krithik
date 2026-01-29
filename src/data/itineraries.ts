interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  accommodation?: string;
}

interface PackageItinerary {
  name: string;
  duration: string;
  itinerary: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
}

export const itineraries: PackageItinerary[] = [
  {
    name: 'Palani One Day Trip',
    duration: '1 Day Trip',
    itinerary: [
      {
        day: 1,
        title: 'Full Day Temple Tour',
        activities: [
          'Pickup from Railway Junction / Hotel / Bus Stand (as per your preference)',
          '6:00 AM - Palani Hill Temple: Early morning darshan of Lord Murugan',
          'Winch / Rope Car / Steps access (as preferred)',
          'Special darshan available (optional)',
          'Duration: 1.5–2 hours at main temple',
          'Shopping: Palani Panchamirtham purchase & local handicrafts',
          'Thiruavinanagudi Temple - Ancient Murugan temple (20–30 mins)',
          'Mariyamman Kovil - Temple for protective blessings (15 mins)',
          'Periya Nayaki Amman Kovil - Peaceful divine ambience (15–20 mins)',
          'Lunch break (meals not included)',
          'Periyaudaiyar Kovil - Historic Shiva temple (20 mins)',
          'Saakkadai Sithar Kovil - Siddhar temple with healing vibrations (15 mins)',
          'Kannakampatti Sarguru Jeeva Samadhi - Meditation-friendly samadhi (20 mins)',
          'Rediyarchathiram Pathala Sembumruga Kovil - Rare underground Murugan temple (20 mins)',
          'Return journey - Drop at Railway Junction / Hotel / Bus Stand'
        ]
      }
    ],
    inclusions: [
      'AC Vehicle (Car / Van / Tempo based on group size)',
      'Driver Bata',
      'Parking & Toll charges',
      'Full-day temple trip assistance'
    ],
    exclusions: [
      'Special Darshan Tickets',
      'Rope car / Winch tickets to Palani Hills',
      'Meals (Breakfast / Lunch / Dinner)'
    ]
  },
  {
    name: 'Alleppey Boat Stay',
    duration: '2 Days / 1 Night',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Houseboat Check-in',
        activities: [
          'Pickup from home/railway station',
          'Drive to Alleppey (approx 5-6 hours from Tamil Nadu)',
          'Check-in to traditional Kerala houseboat',
          'Welcome drink and lunch onboard',
          'Cruise through scenic backwaters of Vembanad Lake',
          'Watch sunset over the backwaters',
          'Traditional Kerala dinner',
          'Overnight stay on houseboat'
        ],
        accommodation: 'Houseboat with all amenities'
      },
      {
        day: 2,
        title: 'Backwaters Exploration & Return',
        activities: [
          'Wake up to beautiful backwater views',
          'Traditional Kerala breakfast onboard',
          'Visit local villages and coir-making units',
          'Check-out from houseboat',
          'Visit Alleppey Beach',
          'Lunch at local restaurant',
          'Shopping for Kerala spices and handicrafts',
          'Return journey - Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Kodaikanal',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Lake View',
        activities: [
          'Pickup from home/railway station',
          'Drive to Kodaikanal (scenic hill drive)',
          'Check-in to hotel and freshen up',
          'Visit Kodaikanal Lake - Boating and lakeside walk',
          'Explore Bryant Park with beautiful flowers',
          'Visit Coakers Walk for panoramic valley views',
          'Evening shopping at local markets',
          'Dinner and overnight stay at hotel'
        ],
        accommodation: 'Comfortable hotel in Kodaikanal'
      },
      {
        day: 2,
        title: 'Sightseeing Tour',
        activities: [
          'Breakfast at hotel',
          'Visit Pillar Rocks - 400 feet tall rock formations',
          'Explore Guna Caves (Devil\'s Kitchen)',
          'Visit Green Valley View (Suicide Point)',
          'Lunch break',
          'Visit Bear Shola Falls',
          'Explore Pine Forest for photography',
          'Visit Kurinji Andavar Temple',
          'Return to hotel for dinner and rest'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'More Attractions & Return',
        activities: [
          'Breakfast and hotel check-out',
          'Visit Silver Cascade Falls',
          'Stop at Dolphin Nose viewpoint',
          'Visit Berijam Lake (permit required)',
          'Lunch at local restaurant',
          'Shopping for homemade chocolates and essential oils',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Yercaud',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Local Sightseeing',
        activities: [
          'Pickup from home/railway station',
          'Drive to Yercaud via 20 hairpin bends',
          'Check-in to hotel',
          'Visit Yercaud Lake - Boating and gardens',
          'Explore Anna Park',
          'Visit Lady\'s Seat viewpoint for sunset',
          'Evening stroll in local market',
          'Dinner and overnight stay at hotel'
        ],
        accommodation: 'Hotel in Yercaud'
      },
      {
        day: 2,
        title: 'Nature & Viewpoints',
        activities: [
          'Early breakfast at hotel',
          'Visit Shevaroy Temple (highest point)',
          'Explore Killiyur Falls',
          'Visit Pagoda Point for panoramic views',
          'Lunch break',
          'Visit Bear Cave',
          'Explore Coffee Plantations',
          'Visit Botanical Garden',
          'Return to hotel for dinner'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'Final Exploration & Departure',
        activities: [
          'Breakfast and check-out',
          'Visit Deer Park',
          'Explore Rose Garden',
          'Visit Gents Seat viewpoint',
          'Shopping for coffee, spices, and handmade items',
          'Lunch at local restaurant',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Munnar',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Journey to Munnar',
        activities: [
          'Pickup from home/railway station',
          'Scenic drive to Munnar through tea gardens',
          'Stop at Cheeyappara Waterfalls for photos',
          'Visit Valara Waterfalls',
          'Check-in to hotel in Munnar',
          'Evening visit to Munnar town',
          'Explore local markets',
          'Dinner and overnight stay'
        ],
        accommodation: 'Hotel in Munnar'
      },
      {
        day: 2,
        title: 'Munnar Sightseeing',
        activities: [
          'Early morning visit to Tea Museum',
          'Breakfast at hotel',
          'Visit Mattupetty Dam and Echo Point',
          'Boating at Mattupetty Lake',
          'Visit Kundala Lake',
          'Lunch break',
          'Explore Photo Point',
          'Visit Eravikulam National Park (Nilgiri Tahr sanctuary)',
          'Return to hotel for dinner'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'Top Station & Return',
        activities: [
          'Breakfast and check-out',
          'Visit Top Station (Indo-Tamil Nadu border)',
          'Panoramic views of Western Ghats',
          'Visit Attukal Waterfalls',
          'Shopping for tea, spices, and chocolates',
          'Lunch at local restaurant',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Mysore',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Palace Tour',
        activities: [
          'Pickup from home/railway station',
          'Drive to Mysore',
          'Check-in to hotel',
          'Visit Mysore Palace - Marvel at Indo-Saracenic architecture',
          'Explore palace museum and royal artifacts',
          'Visit Chamundi Hills and Chamundeshwari Temple',
          'See giant Nandi statue',
          'Evening visit to Brindavan Gardens',
          'Watch musical fountain show',
          'Return to hotel for dinner'
        ],
        accommodation: 'Hotel in Mysore'
      },
      {
        day: 2,
        title: 'Cultural Exploration',
        activities: [
          'Breakfast at hotel',
          'Visit Mysore Zoo - One of India\'s best zoos',
          'Explore St. Philomena\'s Cathedral',
          'Visit Jaganmohan Palace Art Gallery',
          'Lunch break',
          'Visit Railway Museum',
          'Explore Sand Sculpture Museum',
          'Shopping at Devaraja Market for silk and sandalwood',
          'Return to hotel for dinner'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'Day Trip & Return',
        activities: [
          'Breakfast and check-out',
          'Visit Srirangapatna - Historical capital',
          'Explore Ranganathaswamy Temple',
          'Visit Tipu Sultan\'s Summer Palace',
          'See Gumbaz (Tipu Sultan\'s mausoleum)',
          'Lunch at local restaurant',
          'Shopping for Mysore Pak and silk sarees',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Ooty',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Botanical Gardens',
        activities: [
          'Pickup from home/railway station',
          'Scenic drive to Ooty',
          'Check-in to hotel',
          'Visit Government Botanical Gardens',
          'Boating at Ooty Lake',
          'Visit Rose Garden - Asia\'s largest rose park',
          'Evening shopping at Commercial Road',
          'Dinner and overnight stay'
        ],
        accommodation: 'Hotel in Ooty'
      },
      {
        day: 2,
        title: 'Coonoor & Tea Estates',
        activities: [
          'Breakfast at hotel',
          'Drive to Coonoor via scenic route',
          'Visit Sim\'s Park',
          'Explore Dolphin\'s Nose viewpoint',
          'Visit Lamb\'s Rock',
          'Lunch break',
          'Tour of Tea Factory and Museum',
          'Visit Doddabetta Peak - Highest point in Nilgiris',
          'Return to hotel in Ooty'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'Pykara & Departure',
        activities: [
          'Breakfast and check-out',
          'Visit Pykara Lake and Waterfalls',
          'Explore Pykara Dam',
          'Visit Shooting Point (Film City)',
          'Visit Avalanche Lake',
          'Lunch at local restaurant',
          'Shopping for homemade chocolates and tea',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Coorg',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Coffee Plantations',
        activities: [
          'Pickup from home/railway station',
          'Drive to Coorg (Scotland of India)',
          'Check-in to resort/homestay',
          'Visit Coffee Plantation - Learn coffee-making process',
          'Explore spice gardens',
          'Visit Raja\'s Seat for sunset views',
          'Evening at leisure in Madikeri town',
          'Dinner and overnight stay'
        ],
        accommodation: 'Resort/Homestay in Coorg'
      },
      {
        day: 2,
        title: 'Waterfalls & Temples',
        activities: [
          'Breakfast at resort',
          'Visit Abbey Falls - Stunning waterfall',
          'Explore Omkareshwara Temple',
          'Visit Madikeri Fort and Museum',
          'Lunch break',
          'Visit Dubare Elephant Camp - Elephant interactions',
          'River Kaveri views',
          'Visit Golden Temple (Namdroling Monastery)',
          'Return to resort for dinner'
        ],
        accommodation: 'Same resort'
      },
      {
        day: 3,
        title: 'Nature & Return',
        activities: [
          'Breakfast and check-out',
          'Visit Talacauvery - Origin of River Kaveri',
          'Explore Bhagamandala Temple',
          'Visit Iruppu Falls',
          'Shopping for Coorg coffee, honey, and homemade chocolates',
          'Lunch at local restaurant',
          'Begin return journey',
          'Drop at home/railway station'
        ]
      }
    ]
  },
  {
    name: 'Valparai',
    duration: '3 Days / 2 Nights',
    itinerary: [
      {
        day: 1,
        title: 'Journey & Wildlife',
        activities: [
          'Pickup from home/railway station',
          'Drive to Valparai via 40 hairpin bends',
          'En route visit Athirapally Waterfalls',
          'Check-in to hotel in Valparai',
          'Visit tea estates and plantations',
          'Explore Nallamudi Viewpoint',
          'Evening wildlife spotting (Bison, elephants)',
          'Dinner and overnight stay'
        ],
        accommodation: 'Hotel in Valparai'
      },
      {
        day: 2,
        title: 'Nature Exploration',
        activities: [
          'Early morning bird watching',
          'Breakfast at hotel',
          'Visit Sholayar Dam',
          'Explore Aliyar Dam and Gardens',
          'Visit Monkey Falls',
          'Lunch break',
          'Tour of tea factory',
          'Visit Balaji Temple',
          'Explore Chinnakallar Falls',
          'Return to hotel for dinner'
        ],
        accommodation: 'Same hotel'
      },
      {
        day: 3,
        title: 'Scenic Views & Departure',
        activities: [
          'Breakfast and check-out',
          'Visit Grass Hills - Trekking and views',
          'Explore Loam\'s Viewpoint',
          'Visit Nirar Dam',
          'Shopping for tea, coffee, and spices',
          'Lunch at local restaurant',
          'Scenic drive back with photo stops',
          'Drop at home/railway station'
        ]
      }
    ]
  }
];

export function getItinerary(packageName: string): PackageItinerary | undefined {
  return itineraries.find(itin => itin.name === packageName);
}
