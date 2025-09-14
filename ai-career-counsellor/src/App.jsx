import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfileSetup from './pages/ProfileSetup';
import Dashboard from './pages/Dashboard';
import CareerExplorer from './pages/CareerExplorer';
import AIToolkit from './pages/AIToolkit';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/career-explorer" element={<CareerExplorer />} />
          <Route path="/ai-toolkit" element={<AIToolkit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;