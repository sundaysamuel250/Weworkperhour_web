import React, { useState } from 'react';
import axios from 'axios';
import Images from '../constant/Images';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log('Account created:', response.data);
    } catch (err) {
      setError('An error occurred during registration.');
      console.error(err);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    // Add logic for Google login
  };

  const handleAppleLogin = () => {
    // Add logic for Apple ID login
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md xl:max-w-[1300px] lg:max-w-[900px] mx-auto p-8 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="text-2xl font-sans font-bold text-center mb-6">
              Welcome to <span className="text-[#ee009d]">WeWorkPerHour</span>
            </h2>
          </div>
          <h1 className="text-xl font-sans font-semibold text-center mb-6">Create an Account</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-6 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-6 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-6 py-2 mt-2 border-b-[1.5px] focus:outline-none focus:ring-2 focus:ring-[#2aa100]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-2 top-10 transform -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-white bg-[#ee009d] rounded-md hover:bg-[#2AA100] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={handleGoogleLogin}
              className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700"
            >
              <FaGoogle />
            </button>
            <button
              onClick={handleAppleLogin}
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <FaApple />
            </button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link></p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <img src={Images.LoginImage} alt="register" className="w-full rounded-[10px]" />
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
