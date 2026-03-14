import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import HireCab from './HireCab.tsx';
import TamilHomepage from './pages/TamilHomepage.tsx';
import HindiHomepage from './pages/HindiHomepage.tsx';
import TeluguHomepage from './pages/TeluguHomepage.tsx';
import KannadaHomepage from './pages/KannadaHomepage.tsx';
import PalaniTempleTrip from './pages/PalaniTempleTrip.tsx';
import KodaikanalTrip from './pages/KodaikanalTrip.tsx';
import YercaudTour from './pages/YercaudTour.tsx';
import PalaniHistory from './pages/PalaniHistory.tsx';
import CoimbatoreMarudhamalai from './pages/CoimbatoreMarudhamalai.tsx';
import NRISouthIndiaTour from './pages/NRISouthIndiaTour.tsx';
import MalaysiaTour from './pages/MalaysiaTour.tsx';
import SingaporeTour from './pages/SingaporeTour.tsx';
import CustomerTestimonials from './pages/CustomerTestimonials.tsx';
import Videos from './pages/Videos.tsx';
import PalaniOneDay from './pages/PalaniOneDay.tsx';
import AlleppeyHouseboat from './pages/AlleppeyHouseboat.tsx';
import YercaudHillStation from './pages/YercaudHillStation.tsx';
import MunnarNatureTour from './pages/MunnarNatureTour.tsx';
import KodaikanalSightseeing from './pages/KodaikanalSightseeing.tsx';
import MysoreHeritageTour from './pages/MysoreHeritageTour.tsx';
import OotyHillStation from './pages/OotyHillStation.tsx';
import CoorgCoffeeEstate from './pages/CoorgCoffeeEstate.tsx';
import ValparaiTeaEstate from './pages/ValparaiTeaEstate.tsx';
import PilgrimageSpecialTour from './pages/PilgrimageSpecialTour.tsx';
import PalaniTouristPlaces from './pages/PalaniTouristPlaces.jsx';
import ArupadaiVeeduTour from './pages/ArupadaiVeeduTour.tsx';
import BlogIndex from './pages/BlogIndex.tsx';
import PalaniTempleHistory from './pages/blog/PalaniTempleHistory.tsx';
import KodaikanalTravelGuide from './pages/blog/KodaikanalTravelGuide.tsx';
import YercaudTravelGuide from './pages/blog/YercaudTravelGuide.tsx';
import MunnarTravelGuide from './pages/blog/MunnarTravelGuide.tsx';
import KodaikanalTravelTips from './pages/blog/KodaikanalTravelTips.tsx';
import MunnarTravelTips from './pages/blog/MunnarTravelTips.tsx';
import AlleppeyHouseboatTips from './pages/blog/AlleppeyHouseboatTips.tsx';
import MysoreTravelTips from './pages/blog/MysoreTravelTips.tsx';
import KodaikanalHistory from './pages/blog/KodaikanalHistory.tsx';
import MysoreHistory from './pages/blog/MysoreHistory.tsx';
import MunnarHistoryCulture from './pages/blog/MunnarHistoryCulture.tsx';
import AlleppeyHistory from './pages/blog/AlleppeyHistory.tsx';
import Kodaikanal3Days from './pages/blog/Kodaikanal3Days.tsx';
import Yercaud2Days from './pages/blog/Yercaud2Days.tsx';
import AlleppeyHouseboat2Days from './pages/blog/AlleppeyHouseboat2Days.tsx';
import Mysore3Days from './pages/blog/Mysore3Days.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tamil" element={<TamilHomepage />} />
        <Route path="/hindi" element={<HindiHomepage />} />
        <Route path="/telugu" element={<TeluguHomepage />} />
        <Route path="/kannada" element={<KannadaHomepage />} />
        <Route path="/hire" element={<HireCab />} />
        <Route path="/customer-testimonials" element={<CustomerTestimonials />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/palani-temple-one-day-trip" element={<PalaniTempleTrip />} />
        <Route path="/kodaikanal-two-days-trip" element={<KodaikanalTrip />} />
        <Route path="/yercaud-tour-package-itinerary" element={<YercaudTour />} />
        <Route path="/palani-history-temple-history" element={<PalaniHistory />} />
        <Route path="/coimbatore-marudhamalai-one-day-trip" element={<CoimbatoreMarudhamalai />} />
        <Route path="/nri-south-india-tour-pickup-drop-ooty" element={<NRISouthIndiaTour />} />
        <Route path="/malaysia-to-south-india-tour-package" element={<MalaysiaTour />} />
        <Route path="/singapore-to-south-india-tour-package" element={<SingaporeTour />} />
        <Route path="/palani-one-day-temple-trip" element={<PalaniOneDay />} />
        <Route path="/alleppey-overnight-houseboat-stay" element={<AlleppeyHouseboat />} />
        <Route path="/yercaud-hill-station-tour-itinerary" element={<YercaudHillStation />} />
        <Route path="/munnar-nature-tour-itinerary" element={<MunnarNatureTour />} />
        <Route path="/kodaikanal-2-day-sightseeing-itinerary" element={<KodaikanalSightseeing />} />
        <Route path="/mysore-heritage-tour-itinerary" element={<MysoreHeritageTour />} />
        <Route path="/ooty-hill-station-itinerary" element={<OotyHillStation />} />
        <Route path="/coorg-coffee-estate-tour-plan" element={<CoorgCoffeeEstate />} />
        <Route path="/valparai-tea-estate-sightseeing-tour" element={<ValparaiTeaEstate />} />
        <Route path="/pilgrimage-special-tour-malaysia-singapore-nri" element={<PilgrimageSpecialTour />} />
        <Route path="/palani-tourist-places" element={<PalaniTouristPlaces />} />
        <Route path="/arupadai-veedu-murugan-temple-tour" element={<ArupadaiVeeduTour />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/palani-temple-history" element={<PalaniTempleHistory />} />
        <Route path="/blog/hill-stations/kodaikanal-travel-guide" element={<KodaikanalTravelGuide />} />
        <Route path="/blog/hill-stations/yercaud-travel-guide" element={<YercaudTravelGuide />} />
        <Route path="/blog/hill-stations/munnar-travel-guide" element={<MunnarTravelGuide />} />
        <Route path="/blog/travel-tips/kodaikanal-travel-tips" element={<KodaikanalTravelTips />} />
        <Route path="/blog/travel-tips/munnar-travel-tips" element={<MunnarTravelTips />} />
        <Route path="/blog/travel-tips/alleppey-houseboat-tips" element={<AlleppeyHouseboatTips />} />
        <Route path="/blog/travel-tips/mysore-travel-tips" element={<MysoreTravelTips />} />
        <Route path="/blog/history-culture/kodaikanal-history" element={<KodaikanalHistory />} />
        <Route path="/blog/history-culture/mysore-history" element={<MysoreHistory />} />
        <Route path="/blog/history-culture/munnar-history-culture" element={<MunnarHistoryCulture />} />
        <Route path="/blog/history-culture/alleppey-history" element={<AlleppeyHistory />} />
        <Route path="/blog/itineraries/kodaikanal-3-days-2-nights-itinerary" element={<Kodaikanal3Days />} />
        <Route path="/blog/itineraries/yercaud-2-days-1-night-itinerary" element={<Yercaud2Days />} />
        <Route path="/blog/itineraries/alleppey-houseboat-2-days-1-night" element={<AlleppeyHouseboat2Days />} />
        <Route path="/blog/itineraries/mysore-3-days-itinerary" element={<Mysore3Days />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
