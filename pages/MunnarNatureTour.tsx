import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function MunnarNatureTour() {
  const itinerary = getItinerary('Munnar');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Munnar',
        title: 'Munnar Nature Tour Itinerary - Kerala\'s Tea Paradise',
        description: 'Explore the verdant hills of Munnar surrounded by endless tea gardens and misty mountains. Visit scenic waterfalls, national parks, and photo points while experiencing the natural beauty of God\'s Own Country.',
        image: '/munnar.jpg',
        fleetInfo: {
          sedan: 'AC sedan for scenic Munnar journey (2-4 passengers) with experienced hill drivers.',
          suv: 'Comfortable AC SUV for hill terrain with superior suspension (4-6 passengers).',
          minibus: 'Well-equipped minibus perfect for group nature tours in Munnar (8-13 passengers).'
        }
      }}
      itinerary={itinerary}
    />
  );
}
