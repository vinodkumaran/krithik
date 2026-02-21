import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function MysoreHeritageTour() {
  const itinerary = getItinerary('Mysore');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Mysore',
        title: 'Mysore Heritage Tour Itinerary - City of Palaces',
        description: 'Discover the royal splendor of Mysore with its magnificent palace, ancient temples, and cultural heritage. Visit one of India\'s best zoos, explore bustling markets, and experience the grandeur of South India\'s palace city.',
        image: '/Mysore.jpg',
        fleetInfo: {
          sedan: 'AC sedan for heritage tours in Mysore (2-4 passengers) with knowledge of historical sites.',
          suv: 'Spacious AC SUV for comfortable city exploration (4-6 passengers) with ample luggage space.',
          minibus: 'Minibus perfect for guided heritage tours in Mysore (8-13 passengers) with expert drivers.'
        }
      }}
      itinerary={itinerary}
    />
  );
}
