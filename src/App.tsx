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
import JobDataPage from './pages/findJob/job-details/JobDataPage';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ProfileDetails from './components/admin/ProfileDetails';
import ResumeSection from './components/admin/ResumeSection';
import Message from './components/admin/message/Message';
import JobAlert from './components/admin/job-alert/JobAlert';
import SavedJobs from './components/admin/saved-job/SavedJobs';
import AccountSettings from './components/admin/account-settings/AccountSettings';
import DeleteModal from './components/admin/delete-account/DeleteModal';
import DeletePage from './components/admin/delete-account/DeletePage';


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
  const hideNavbarPaths = ['/login', '/register', '/dashboard', '/profile-list', '/resume-page', '/messages', '/job-alerts',  '/saved-jobs', '/account-setting', '/delete-account'];

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

        {/* <Route path="job-details" element={<JobDataPage />} /> */}
        <Route path="job-details/:slug" element={<JobDataPage />} />
        <Route path="application-details" element={<JobDataPage />} />
        <Route path="dashboard" element={<AdminLayout element={<Dashboard />} />} />
        <Route path="profile-list" element={<AdminLayout element={<ProfileDetails />} />} />
        <Route path="resume-page" element={<AdminLayout element={<ResumeSection />} />} />
        <Route path="messages" element={<AdminLayout element={<Message />} />} />
        <Route path="job-alerts" element={<AdminLayout element={<JobAlert />} />} />
        <Route path="saved-jobs" element={<AdminLayout element={<SavedJobs />} />} />
        <Route path="account-setting" element={<AdminLayout element={<AccountSettings />} />} />
        <Route path="delete-account" element={<AdminLayout element={<DeletePage />} />} />
      </Routes>
    </div>
  );
}

export default App;
