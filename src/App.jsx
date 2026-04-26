// Frontend Routing

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
// import ProfDashboard from './pages/ProfDashboard';
// import MainPage from './pages/MainPage';
// import WeeklySchedule from './pages/WeeklySchedule';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/main" element={<MainPage />} />
        <Route path="/weekly" element={<WeeklySchedule />} />
        <Route path="/dashboard" element={<ProfDashboard profName="ADMIN" />} />
        */}
        <Route path="/admin" element={<AdminDashboard />} />

        
       
        

        {/* default */}
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;