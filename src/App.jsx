import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Start from './pages/Start';
import RiskProfile from './pages/RiskProfile';
import Locations from './pages/Locations';
import EnsoForecasting from './pages/EnsoForecasting';
import YieldOptimizer from './pages/YieldOptimizer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Start />} />
      <Route path="/risk/:crop" element={<RiskProfile />} />
      <Route path="/risk/:crop/locations" element={<Locations />} />
      <Route path="/dashboard/enso-forecasting" element={<EnsoForecasting />} />
      <Route path="/dashboard/yield-optimizer" element={<YieldOptimizer />} />
    </Routes>
  );
}

export default App;
