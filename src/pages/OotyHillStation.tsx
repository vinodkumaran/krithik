import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function OotyHillStation() {
  const itinerary = getItinerary('Ooty');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Ooty',
        title: 'Ooty Hill Station Itinerary - Queen of the Nilgiris',
        description: 'Experience the charm of Ooty, famous for its botanical gardens, scenic tea gardens, and cool climate. Enjoy boating on the lake, visit the largest rose garden in Asia, and explore the surrounding hill stations.',
        image: '/ooty.jpg',
        fleetInfo: {
          sedan: 'AC sedan for Ooty travel (2-4 passengers) with scenic route expertise.',
          suv: 'Comfortable AC SUV for hill station exploration (4-6 passengers) with superior suspension.',
          minibus: 'Minibus for group tours in Ooty and nearby attractions (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
