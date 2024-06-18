import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navigation/Navbar'; 
import { Home } from './pages/home/Home';
import Company from './pages/company/Company';
import FindJob from './pages/findJob/FindJob';
import CareerTips from './pages/careerTips/CareerTips';
import LearnMoreSection from './pages/careerTips/components/LearnMoreSection';
import About from './pages/about/About';
import LoginForm from './components/registration/LoginForm';
import RegisterForm from './components/registration/RegisterForm';
import TalentForm from './components/registration/TalentForm';
import ScrollToTop from './components/constant/ScrollToTop';
import JobDetails from './pages/findJob/job-details/JobDetails';
import JobDataPage from './pages/findJob/job-details/JobDataPage';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register', '/dashboard'];

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="company" element={<Company />} />
        <Route path="find-job" element={<FindJob />} />
        <Route path="career-tips" element={<CareerTips />} />
        <Route path="learn-more" element={<LearnMoreSection />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="talent" element={<TalentForm />} />
        <Route path="application-details" element={<JobDataPage />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
