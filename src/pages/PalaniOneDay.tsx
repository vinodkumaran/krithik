import DestinationPage from '../components/DestinationPage';
import { getItinerary } from '../data/itineraries';

export default function PalaniOneDay() {
  const itinerary = getItinerary('Palani One Day Trip');

  if (!itinerary) return <div>Package not found</div>;

  return (
    <DestinationPage
      destination={{
        name: 'Palani One Day Trip',
        title: 'Palani One Day Temple Trip - Sacred Murugan Darshan',
        description: 'Experience a spiritually enriching one-day journey to the sacred Palani Murugan Temple. Begin with an early morning pickup and spend the day visiting multiple temples, performing rituals, and immersing yourself in divine blessings.',
        image: '/palani.jpg',
        fleetInfo: {
          sedan: 'Comfortable AC sedan for small groups (2-4 people). Perfect for couple travelers or small families.',
          suv: 'Spacious AC SUV for medium groups (4-6 people). Best for family holidays with luggage.',
          minibus: 'Well-equipped minibus for large groups (8-13 people). Ideal for corporate trips and pilgrimages.'
        }
      }}
      itinerary={itinerary}
    />
  );
}
