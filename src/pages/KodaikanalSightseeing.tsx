import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function KodaikanalSightseeing() {
  const itinerary = getItinerary('Kodaikanal');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Kodaikanal',
        title: 'Kodaikanal 2 Day Sightseeing Itinerary - Lake Land Paradise',
        description: 'Immerse yourself in the pristine beauty of Kodaikanal, a hill station known for its serene lake, flower gardens, and unique rock formations. Enjoy boating, trekking, and shopping in this cool mountain retreat.',
        image: '/Kodaikanal.jpg',
        fleetInfo: {
          sedan: 'AC sedan for comfortable Kodaikanal travel (2-4 passengers) with scenic route knowledge.',
          suv: 'Premium AC SUV ideal for hill station exploration (4-6 passengers) with luggage space.',
          minibus: 'Minibus for group sightseeing tours in Kodaikanal (8-13 passengers) with experienced drivers.'
        }
      }}
      itinerary={itinerary}
    />
  );
}
