import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function AlleppeyHouseboat() {
  const itinerary = getItinerary('Alleppey Boat Stay');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Alleppey Boat Stay',
        title: 'Alleppey Overnight Houseboat Stay - Kerala Backwaters Experience',
        description: 'Experience the serene beauty of Kerala\'s backwaters with an overnight stay on a traditional houseboat. Cruise through scenic waterways, enjoy authentic Kerala cuisine, and witness breathtaking sunsets over the lagoons.',
        image: '/allepey.jpg',
        fleetInfo: {
          sedan: 'AC sedan to transport you to the Alleppey houseboat terminal (2-4 passengers).',
          suv: 'Spacious AC SUV for comfortable journey to Alleppey (4-6 passengers) with luggage space.',
          minibus: 'Minibus transportation for larger groups heading to Alleppey with all amenities (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
