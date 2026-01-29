import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function PilgrimageSpecialTour() {
  const itinerary = getItinerary('Pilgrimage Special Tour');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Pilgrimage Special Tour',
        title: 'Pilgrimage Special Tour Package - For Malaysia / Singapore / NRI Travelers',
        description: 'Experience a comprehensive 7-day spiritual journey covering the most sacred temples of Tamil Nadu. This specially curated pilgrimage tour includes visits to Palani, Thiruparankundram, Pazhamudircholai, Tiruchendur, Swamimalai, Thiruthani and other renowned temples, with comfortable accommodation in star hotels and complete travel arrangements.',
        image: '/palani.jpg',
        fleetInfo: {
          sedan: 'Comfortable AC sedan for families (2-4 people). Package price: ₹52,000/- per vehicle.',
          suv: 'Spacious AC SUV for larger families (4-6 people). Best for family groups with luggage. Contact for pricing.',
          minibus: 'Well-equipped minibus for large groups (8-13 people). Ideal for group pilgrimages. Contact for pricing.'
        }
      }}
      itinerary={itinerary}
      showHeroBanner={false}
      preFooterImage="/malaysia_to_india_and_tamil_nadu_tour.png"
      preFooterImageLink="https://wa.me/918925001292"
    />
  );
}
