import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  // Get current path to set active tab automatically
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // This useEffect will run on client-side and determine the active tab based on URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') setActiveTab('dashboard');
    else if (path.includes('/flights')) setActiveTab('flights');
    else if (path.includes('/passengers')) setActiveTab('passengers');
    else if (path.includes('/bookings')) setActiveTab('bookings');
    else if (path.includes('/reports')) setActiveTab('reports');
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (userMenuOpen) setUserMenuOpen(false);
  };
  
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    if (isOpen) setIsOpen(false);
  };

  // Handle tab navigation
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-blue-800 to-blue-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/">
            <div className="flex-shrink-0 flex items-center">
              <div className="p-1.5 bg-white rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 16H4C4 11.5 7 8 12 8C13.3 8 14.5 8.3 15.6 8.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 19.5L18.5 19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12L17 17L14 16L18 12L14 8L17 7L22 12Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-3 text-white font-bold text-xl tracking-wide hover:text-blue-200 transition-colors duration-300">JetSetGo</span>
            </div>
            </Link>
            {/* Desktop Nav Links - with animated active tab indicator */}
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('dashboard');
                  window.location.href = '/';
                }}
                className={`px-3 py-2 rounded-sm font-medium transition-all duration-300 ease-in-out relative ${
                  activeTab === 'dashboard' 
                    ? 'text-white' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Dashboard
                {activeTab === 'dashboard' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-md shadow-md transform origin-left animate-grow"></span>
                )}
              </a>
              <a 
                href="/flights"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('flights');
                  window.location.href = '/flights';
                }} 
                className={`px-3 py-2 rounded-sm font-medium transition-all duration-300 ease-in-out relative ${
                  activeTab === 'flights' 
                    ? 'text-white' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Flights
                {activeTab === 'flights' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-md shadow-md transform origin-left animate-grow"></span>
                )}
              </a>
              <a 
                href="/passengers" 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('passengers');
                  window.location.href = '/passengers';
                }}
                className={`px-3 py-2 rounded-sm font-medium transition-all duration-300 ease-in-out relative ${
                  activeTab === 'passengers' 
                    ? 'text-white' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Passengers
                {activeTab === 'passengers' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-md shadow-md transform origin-left animate-grow"></span>
                )}
              </a>
              <a 
                href="/bookings" 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('bookings');
                  window.location.href = '/bookings';
                }}
                className={`px-3 py-2 rounded-sm font-medium transition-all duration-300 ease-in-out relative ${
                  activeTab === 'bookings' 
                    ? 'text-white' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Bookings
                {activeTab === 'bookings' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-md shadow-md transform origin-left animate-grow"></span>
                )}
              </a>
              <a 
                href="/reports" 
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick('reports');
                  window.location.href = '/reports';
                }}
                className={`px-3 py-2 rounded-sm font-medium transition-all duration-300 ease-in-out relative ${
                  activeTab === 'reports' 
                    ? 'text-white' 
                    : 'text-blue-100 hover:text-white'
                }`}
              >
                Reports
                {activeTab === 'reports' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-t-md shadow-md transform origin-left animate-grow"></span>
                )}
              </a>
            </div>
          </div>
          
          {/* Right side items */}
          <div className="flex items-center space-x-3">
            {/* Search Box */}
            <div className="hidden md:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-blue-800 bg-opacity-70 text-white placeholder-blue-200 rounded-full pl-10 pr-4 py-1.5 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ease-in-out w-36 focus:w-48"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Notification Bell - with enhanced animation */}
            <button className="relative p-1.5 text-blue-100 hover:text-white hover:bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-indigo-900 animate-ping-slow"></span>
            </button>
            
            {/* User Profile */}
            <div className="relative">
              <div>
                <button 
                  onClick={toggleUserMenu} 
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110"
                >
                  <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="font-semibold">AM</span>
                  </div>
                </button>
              </div>
              <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-10 transition-all duration-300 ease-in-out transform ${
                userMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                <div className="py-1 border-b border-gray-100">
                  <p className="block px-4 py-1 text-xs text-gray-400">Signed in as</p>
                  <p className="block px-4 py-1 text-sm font-medium text-gray-700">admin@jetsetgo.com</p>
                </div>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem">
                  <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Your Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem">
                  <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </a>
                <div className="border-t border-gray-100 mt-1"></div>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors duration-200" role="menuitem">
                  <svg className="mr-2 h-4 w-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign out
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              >
                <svg 
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transform transition-transform duration-300`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg 
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transform transition-transform duration-300 rotate-90`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - animated slide down */}
      <div 
        className={`md:hidden shadow-lg border-t border-blue-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="/" 
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('dashboard');
              window.location.href = '/';
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeTab === 'dashboard' 
                ? 'text-white bg-blue-800 shadow-inner transform translate-x-1' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
            }`}
          >
            Dashboard
          </a>
          <a 
            href="/flights" 
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('flights');
              window.location.href = '/flights';
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeTab === 'flights' 
                ? 'text-white bg-blue-800 shadow-inner transform translate-x-1' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
            }`}
          >
            Flights
          </a>
          <a 
            href="/passengers" 
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('passengers');
              window.location.href = '/passengers';
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeTab === 'passengers' 
                ? 'text-white bg-blue-800 shadow-inner transform translate-x-1' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
            }`}
          >
            Passengers
          </a>
          <a 
            href="/bookings" 
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('bookings');
              window.location.href = '/bookings';
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeTab === 'bookings' 
                ? 'text-white bg-blue-800 shadow-inner transform translate-x-1' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
            }`}
          >
            Bookings
          </a>
          <a 
            href="/reports" 
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('reports');
              window.location.href = '/reports';
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
              activeTab === 'reports' 
                ? 'text-white bg-blue-800 shadow-inner transform translate-x-1' 
                : 'text-blue-100 hover:bg-blue-800 hover:text-white'
            }`}
          >
            Reports
          </a>
        </div>
      </div>
    </nav>
  );
};

// Add these custom animations to your CSS or in a style tag
const customStyles = `
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-grow {
  animation: grow 0.3s ease-out forwards;
}
`;

// You need to add this style to your app
const StylesComponent = () => {
  return <style>{customStyles}</style>;
};

export default Navbar;