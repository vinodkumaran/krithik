import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function CoorgCoffeeEstate() {
  const itinerary = getItinerary('Coorg');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Coorg',
        title: 'Coorg Coffee Estate Tour Plan - Scotland of India',
        description: 'Explore the lush coffee plantations, misty mountains, and vibrant culture of Coorg. Learn about coffee-making, visit ancient temples, interact with elephants, and taste homemade chocolates in this hill station paradise.',
        image: '/Coorg.jpg',
        fleetInfo: {
          sedan: 'AC sedan for Coorg tour (2-4 passengers) with plantation route knowledge.',
          suv: 'Spacious AC SUV for coffee estate exploration (4-6 passengers) ideal for families.',
          minibus: 'Minibus for group tours exploring Coorg\'s estates and attractions (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
