import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function ValparaiTeaEstate() {
  const itinerary = getItinerary('Valparai');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Valparai',
        title: 'Valparai Tea Estate Sightseeing Tour - Wildlife & Nature',
        description: 'Discover the hidden gem of Valparai with its scenic tea estates, wildlife sanctuary, and pristine waterfalls. Navigate 40 hairpin bends to reach this pristine destination known for bison, elephant spotting, and tea plantations.',
        image: '/valparai.jpg',
        fleetInfo: {
          sedan: 'AC sedan for Valparai journey (2-4 passengers) with expert hill drivers.',
          suv: 'Premium AC SUV ideal for wildlife tour and estate exploration (4-6 passengers).',
          minibus: 'Minibus for group wildlife and nature tours in Valparai (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
