
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import { Home } from "./pages/home/Home";
import Company from "./pages/company/Company";
import FindJob from "./pages/findJob/FindJob";
import CareerTips from "./pages/careerTips/CareerTips";
import LearnMoreSection from "./pages/careerTips/components/LearnMoreSection";
import About from "./pages/about/About";
import LoginForm from "./components/registration/LoginForm";
import RegisterForm from "./components/registration/RegisterForm";
import TalentForm from "./components/registration/TalentForm";
import ScrollToTop from "./components/constant/ScrollToTop";
import JobDataPage from "./pages/findJob/job-details/JobDataPage";
import AdminLayout from "./components/candidate-admin/AdminLayout";
import ProfileDetails from "./components/candidate-admin/ProfileDetails";
import ResumeSection from "./components/candidate-admin/ResumeSection";
import Message from "./components/candidate-admin/message/Message";
import JobAlert from "./components/candidate-admin/job-alert/JobAlert";
import SavedJobs from "./components/candidate-admin/saved-job/SavedJobs";
import AccountSettings from "./components/candidate-admin/account-settings/AccountSettings";
import DeletePage from "./components/candidate-admin/delete-account/DeletePage";
import EmployersLayout from "./components/employer-admin/EmployersLayout";
import CandidateDashboard from "./components/candidate-admin/CandidateDashboard";
import EmployersDashboard from "./components/employer-admin/dashboard/EmployersDashboard";
import EmployerProfile from "./components/employer-admin/profile/EmployerProfile";
import MyJobs from "./components/employer-admin/my-jobs/MyJobs";
import EmployersMessage from "./components/employer-admin/message/EmployersMessage";
import SubmitJobs from "./components/employer-admin/submit-job/SubmitJobs";
import SavedCandidate from "./components/employer-admin/saved-candidate/SavedCandidate";
import EmployersAccountSettings from "./components/employer-admin/account-settings/EmplyersAccountSetting";
import EmployersDeleteAccount from "./components/employer-admin/delete-account/EmployersDeleteAccount";
import CandidatesHireTalent from "./components/hire-talent/HireTalent";



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
  const hideNavbarPaths = [
    "/login",
    "/register",
    "/dashboard",
    "/profile-list",
    "/resume-page",
    "/messages",
    "/job-alerts",
    "/saved-jobs",
    "/account-setting",
    "/delete-account",
    "/employers-dashboard",
    "/employers-profile",
    "/submit-jobs",
    "/saved-candidate"
  ];

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
        <Route path="hire-talent" element={<CandidatesHireTalent />} />
        {/* <Route path="job-details" element={<JobDataPage />} /> */}
        <Route path="job-details/:slug" element={<JobDataPage />} />
        <Route path="application-details" element={<JobDataPage />} />
        {/* Candidates Admin routing section */}
        <Route
          path="candidate-dashboard"
          element={<AdminLayout element={<CandidateDashboard />} />}
        />
        <Route
          path="profile-list"
          element={<AdminLayout element={<ProfileDetails />} />}
        />
        <Route
          path="resume-page"
          element={<AdminLayout element={<ResumeSection />} />}
        />
        <Route
          path="messages"
          element={<AdminLayout element={<Message />} />}
        />
        <Route
          path="job-alerts"
          element={<AdminLayout element={<JobAlert />} />}
        />
        <Route
          path="saved-jobs"
          element={<AdminLayout element={<SavedJobs />} />}
        />
        <Route
          path="account-setting"
          element={<AdminLayout element={<AccountSettings />} />}
        />
        <Route
          path="delete-account"
          element={<AdminLayout element={<DeletePage />} />}
        />
        {/* Employers Admin routing section */}
        <Route
          path="employers-dashboard"
          element={<EmployersLayout element={<EmployersDashboard />} />}
        />
        <Route
          path="employers-profile"
          element={<EmployersLayout element={<EmployerProfile />} />}
        />
        <Route
          path="my-jobs"
          element={<EmployersLayout element={<MyJobs />} />}
        />
        <Route
          path="employers-messages"
          element={<EmployersLayout element={<EmployersMessage />} />}
        />
        <Route
          path="submit-jobs"
          element={<EmployersLayout element={<SubmitJobs />} />}
        />
        <Route
          path="saved-candidate"
          element={<EmployersLayout element={<SavedCandidate />} />}
        />
        <Route
          path="employers-account-settings"
          element={<EmployersLayout element={<EmployersAccountSettings/>} />}
        />
         <Route
          path="employers-delete-account"
          element={<EmployersLayout element={<EmployersDeleteAccount/>} />}
        />
      </Routes>
    </div>
  );
}

export default App;
