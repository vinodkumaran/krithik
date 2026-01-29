import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import HireCab from './HireCab.tsx';
import PalaniTempleTrip from './pages/PalaniTempleTrip.tsx';
import KodaikanalTrip from './pages/KodaikanalTrip.tsx';
import YercaudTour from './pages/YercaudTour.tsx';
import PalaniHistory from './pages/PalaniHistory.tsx';
import CoimbatoreMarudhamalai from './pages/CoimbatoreMarudhamalai.tsx';
import NRISouthIndiaTour from './pages/NRISouthIndiaTour.tsx';
import MalaysiaTour from './pages/MalaysiaTour.tsx';
import SingaporeTour from './pages/SingaporeTour.tsx';
import CustomerTestimonials from './pages/CustomerTestimonials.tsx';
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
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hire" element={<HireCab />} />
        <Route path="/customer-testimonials" element={<CustomerTestimonials />} />
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
;
