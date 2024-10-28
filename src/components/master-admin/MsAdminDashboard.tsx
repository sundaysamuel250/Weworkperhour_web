import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';


const MsAdminDashboard: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="admin-jobs" element={<JobList />} />
        <Route path="job-details/:id" element={<JobDetails />} />
        <Route path="*" element={<Navigate to="admin-jobs" />} />
      </Routes>
    </Router>
  );
};

export default MsAdminDashboard;
