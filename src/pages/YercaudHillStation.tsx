import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function YercaudHillStation() {
  const itinerary = getItinerary('Yercaud');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Yercaud',
        title: 'Yercaud Hill Station Tour Itinerary - Nature Paradise in Salem',
        description: 'Discover the scenic beauty of Yercaud, known for its lush landscapes, coffee plantations, and stunning viewpoints. Navigate 20 hairpin bends to reach this hill station and explore lakes, gardens, and ancient temples.',
        image: '/Yercaud.jpg',
        fleetInfo: {
          sedan: 'AC sedan for comfortable hill station travel (2-4 passengers) with experienced drivers.',
          suv: 'Premium AC SUV perfect for hill terrain with ample luggage space (4-6 passengers).',
          minibus: 'Minibus with expert drivers for group tours navigating Yercaud\'s hairpin bends (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
