import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCircle, FaBars, FaTimes, FaFileAlt } from 'react-icons/fa';
import { UilCreateDashboard, UilSetting, UilTrash } from '@iconscout/react-unicons';
import Images from '../constant/Images';
import { FaBarsStaggered, FaEnvelope, FaRegUser } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoBookmarkOutline, IoNotificationsOutline } from 'react-icons/io5';

import { Progress } from '@chakra-ui/react'

const SideNav: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [progress, setProgress] = useState(50);

  const isActive = (path: string) => location.pathname === path;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(event.target.value));
  };


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="lg:hidden p-4 text-white absolute left-0 top-2 flex justify-between items-center">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes size={24} /> : < FaBarsStaggered  size={25}  color='#2aa100' className='font-bold'/>}
        </button>
      </div>
      <div className={`h-screen w-60 bg-[#f5f5f5] text-white flex flex-col fixed lg:static transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 flex items-center flex-col ">
          <div  onClick={toggleSidebar} className='lg:hidden block'>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <img src={Images.Logo} alt="logo" className="w-full max-w-[150px] h-auto mb-4" />
          <FaCircle className="relative w-[10px] h-[10px] top-6 left-6 text-[#40e6b9]" size={20} />
          <img className="h-[50px] w-[50px] rounded-full mb-4" src={Images.ProfileImage} alt="Profile" />
          <div className='flex items-center gap-[0.3rem]'>
            <h1 className="text-md font-bold text-[#2aa100] cursor-pointer" onClick={toggleDropdown}>Jeff Samuel</h1>
            <button className="mt-2 text-gray-400 hover:text-white" onClick={toggleDropdown}>
              <IoMdArrowDropdown size="25" color='#2aa100' />
            </button>
          </div>
          {isDropdownOpen && (
            <div className="absolute bg-gray-700 text-white rounded shadow-md mt-[12rem] w-48 z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-600 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
        <nav className="mt-4 flex-1">
          <ul>
            <Link to='/dashboard'>
              <li className={`py-2 hover:bg-[#F5E2EF] hover:rounded-lg hover:px-[1rem] text-[16px]  font-sans font-semibold flex items-center gap-[1rem] ${isActive('/dashboard') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] mx-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <UilCreateDashboard size={25} color={isActive('/dashboard') ? '#2aa100' : '#2aa100'} /> Dashboard
              </li>
            </Link>
            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <FaRegUser size={25} /> My Profile
              </li>
            </Link>
            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <FaFileAlt  size={25} /> Resume
              </li>
            </Link>
            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <FaEnvelope  size={25} /> Message
              </li>
            </Link>
            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <IoNotificationsOutline size={25} /> Job Alert
              </li>
            </Link>

            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <IoBookmarkOutline size={25} /> Saved Job
              </li>
            </Link>

            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <UilSetting size={25} /> Account Settings
              </li>
            </Link>
            
            <Link to='/profile-list'>
              <li className={`py-2 hover:text-[#2aa100] mt-[1.5rem] hover:rounded-lg mx-[2rem] text-[16px] font-sans font-semibold  flex items-center gap-[1rem] ${isActive('/profile-list') ? 'bg-[#F5E2EF] rounded-lg px-[1rem] text-[#2aa100]' : 'text-[#ee009d] hover:text-[#2aa100]'}`}>
                <UilTrash size={25} /> Delete Account
              </li>
            </Link>
          </ul>
          <Progress value={80} />
        </nav>
      </div>
    </div>
  );
};

export default SideNav;