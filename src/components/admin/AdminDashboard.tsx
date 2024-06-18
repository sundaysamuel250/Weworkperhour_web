import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import ProfileList from './ProfileList';
import SidebarNavigation from './SideBar';

import ProfileDetails from './ProfileDetails';



const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5E2EF]">
      <Header />
      <div className="flex flex-1">
        <SidebarNavigation />
        <main className="flex-1 p-4">
            <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='profile-list' element={<ProfileList />} />
            <Route path='profile-details' element={<ProfileDetails />} />
          {/* Uncomment the component you want to display */}
    
            </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
