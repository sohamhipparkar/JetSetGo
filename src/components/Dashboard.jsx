import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Dashboard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activePerformanceSlide, setActivePerformanceSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(false);
  
  // Mock data
  const flightStats = [
    { status: 'On Time', count: 238, percentage: 84, color: 'bg-emerald-500' },
    { status: 'Delayed', count: 36, percentage: 12, color: 'bg-amber-500' },
    { status: 'Cancelled', count: 12, percentage: 4, color: 'bg-rose-500' }
  ];
  
  const recentFlights = [
    { id: 'JG1024', from: 'New York', to: 'London', departure: '09:45', status: 'On Time', gate: 'A12' },
    { id: 'JG3872', from: 'Dubai', to: 'Singapore', departure: '10:15', status: 'Delayed', gate: 'B8' },
    { id: 'JG2047', from: 'Paris', to: 'Tokyo', departure: '11:30', status: 'On Time', gate: 'C5' },
    { id: 'JG8734', from: 'Sydney', to: 'Los Angeles', departure: '14:00', status: 'On Time', gate: 'D3' }
  ];
  
  const topRoutes = [
    { route: 'New York - London', revenue: 1895000, flights: 178, fill: 92 },
    { route: 'Dubai - Singapore', revenue: 1432000, flights: 124, fill: 89 },
    { route: 'Paris - Tokyo', revenue: 2103000, flights: 112, fill: 94 },
    { route: 'Sydney - Los Angeles', revenue: 1764000, flights: 98, fill: 88 }
  ];
  
  const cabinCrewStats = [
    { position: 'Senior Flight Attendant', count: 124, available: 112, onDuty: 92, training: 8 },
    { position: 'Flight Attendant', count: 438, available: 387, onDuty: 342, training: 26 },
    { position: 'Purser', count: 67, available: 61, onDuty: 54, training: 4 },
    { position: 'First Officer', count: 86, available: 78, onDuty: 72, training: 5 }
  ];
  
  const upcomingMaintenance = [
    { aircraft: 'Boeing 787', registration: 'N7812A', scheduled: 'Apr 05, 2025', type: 'Regular Check', status: 'Pending' },
    { aircraft: 'Airbus A350', registration: 'N3502B', scheduled: 'Apr 08, 2025', type: 'Engine Inspection', status: 'Pending' },
    { aircraft: 'Boeing 777', registration: 'N7732C', scheduled: 'Apr 12, 2025', type: 'Regular Check', status: 'Scheduled' }
  ];
  
  const carouselItems = [
    {
      title: 'Cabin Crew Dashboard',
      content: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Cabin Crew Status</h3>
          <div className="space-y-6">
            {cabinCrewStats.map((crew, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.15}s both`,
                  opacity: 0
                }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{crew.position}</span>
                  <span className="text-indigo-600 font-bold">Total: {crew.count}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-emerald-50 rounded-lg p-3 text-center">
                    <p className="text-gray-500 mb-1">Available</p>
                    <p className="text-lg font-semibold text-emerald-700">{crew.available}</p>
                    <p className="text-xs text-emerald-600">{Math.round((crew.available/crew.count)*100)}%</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <p className="text-gray-500 mb-1">On Duty</p>
                    <p className="text-lg font-semibold text-blue-700">{crew.onDuty}</p>
                    <p className="text-xs text-blue-600">{Math.round((crew.onDuty/crew.count)*100)}%</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-3 text-center">
                    <p className="text-gray-500 mb-1">Training</p>
                    <p className="text-lg font-semibold text-amber-700">{crew.training}</p>
                    <p className="text-xs text-amber-600">{Math.round((crew.training/crew.count)*100)}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-lg p-4" style={{ animation: 'fadeInLeft 0.6s ease-out 0.6s both', opacity: 0 }}>
              <h4 className="text-sm font-semibold text-indigo-800 mb-2">Crew Scheduling</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Upcoming Rotations</span>
                <span className="font-medium text-indigo-700">128</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600">Pending Assignments</span>
                <span className="font-medium text-indigo-700">43</span>
              </div>
              <button className="mt-3 w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-2 px-3 rounded text-sm transition-colors duration-300">
                Manage Schedule
              </button>
            </div>
            <div className="bg-purple-50 rounded-lg p-4" style={{ animation: 'fadeInRight 0.6s ease-out 0.7s both', opacity: 0 }}>
              <h4 className="text-sm font-semibold text-purple-800 mb-2">Training Overview</h4>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Safety Training</span>
                <span className="font-medium text-purple-700">26 Crew</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-600">Service Excellence</span>
                <span className="font-medium text-purple-700">18 Crew</span>
              </div>
              <button className="mt-3 w-full bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-3 rounded text-sm transition-colors duration-300">
                View Training
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Top Revenue Routes',
      content: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Performing Flights</h3>
          <div className="space-y-4">
            {topRoutes.map((route, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeInRight 0.5s ease-out ${index * 0.15}s both`,
                  opacity: 0
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{route.route}</span>
                  <span className="text-indigo-600 font-bold">${(route.revenue / 1000000).toFixed(2)}M</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{route.flights} flights</span>
                  <span className="mr-2">Seat fill rate:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full" 
                      style={{ 
                        width: `${route.fill}%`,
                        animation: 'growWidth 1.5s ease-out forwards'
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 font-medium">{route.fill}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Maintenance Schedule',
      content: (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Upcoming Maintenance</h3>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aircraft</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingMaintenance.map((item, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50 transition-colors duration-200"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.2}s both`,
                      opacity: 0
                    }}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{item.aircraft}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.registration}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.scheduled}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.type}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  ];
  
  const performanceCards = [
    {
      title: "Total Passengers",
      value: "42,891",
      change: "+12.3%",
      isPositive: true,
      icon: (
        <svg className="h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Average Load Factor",
      value: "87.4%",
      change: "+3.6%",
      isPositive: true,
      icon: (
        <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "On-Time Performance",
      value: "84.2%",
      change: "-1.2%",
      isPositive: false,
      icon: (
        <svg className="h-10 w-10 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Total Revenue",
      value: "$24.6M",
      change: "+8.9%",
      isPositive: true,
      icon: (
        <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];
  
  // Animation on scroll effect
  const [flightsVisible, setFlightsVisible] = useState(false);
  
  useEffect(() => {
    // Initial animations
    setIsLoaded(true);
    
    // Trigger flight stats animation after initial load
    const statsTimer = setTimeout(() => {
      setAnimatedStats(true);
    }, 800);
    
    // Add scroll event listener to detect when elements are in viewport
    const flightsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFlightsVisible(true);
          flightsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const flightsElement = document.getElementById('recent-flights-section');
    if (flightsElement) {
      flightsObserver.observe(flightsElement);
    }
    
    // Automatic carousel rotation
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 8000);
    
    const performanceInterval = setInterval(() => {
      setActivePerformanceSlide((prev) => (prev + 1) % performanceCards.length);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(performanceInterval);
      clearTimeout(statsTimer);
      flightsObserver.disconnect();
    };
  }, [carouselItems.length, performanceCards.length]);
  
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          @keyframes growWidth {
            from { width: 0%; }
            to { width: 100%; }
          }
          
          @keyframes slideInFromRight {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideInFromLeft {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes slideCarousel {
            0% { transform: translateX(100%); opacity: 0; }
            10% { transform: translateX(0); opacity: 1; }
            90% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }
          
          @keyframes countUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes floatUp {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          
          .slide-transition {
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }
          
          .hover-float:hover {
            animation: floatUp 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <Navbar />
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-800 py-10 px-4 sm:px-6 lg:px-8 shadow-xl"
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 
            className="text-3xl font-bold text-white tracking-tight"
            style={{ 
              animation: isLoaded ? 'fadeInDown 0.5s ease-out' : 'none'
            }}
          >
            Welcome to JetSetGo Dashboard
          </h1>
          <p 
            className="mt-2 text-indigo-100 text-lg"
            style={{ 
              animation: isLoaded ? 'fadeInDown 0.5s ease-out 0.2s both' : 'none',
              opacity: 0
            }}
          >
            Overview of your airline performance and operations
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Performance Cards Carousel for Mobile */}
            <div 
              className="md:hidden relative bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100"
              style={{ 
                animation: isLoaded ? 'fadeIn 0.6s ease-out 0.3s both' : 'none',
                opacity: 0
              }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="animate-pulse">
                    {performanceCards[activePerformanceSlide].icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-sm font-medium text-gray-500">{performanceCards[activePerformanceSlide].title}</h3>
                    <div className="flex items-baseline">
                      <p className="text-2xl font-semibold text-gray-900">{performanceCards[activePerformanceSlide].value}</p>
                      <p className={`ml-2 text-sm font-medium ${performanceCards[activePerformanceSlide].isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {performanceCards[activePerformanceSlide].change}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                {performanceCards.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActivePerformanceSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === activePerformanceSlide ? 'w-6 bg-indigo-600' : 'w-2 bg-gray-300'}`}
                    aria-label={`Go to performance card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Performance Cards for Desktop */}
            {performanceCards.map((card, index) => (
              <div 
                key={index} 
                className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100 hover:shadow-xl transition-shadow duration-300"
                style={{ 
                  animation: isLoaded ? `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both` : 'none',
                  opacity: 0
                }}
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="animate-pulse">
                      {card.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
                      <div className="flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
                        <p className={`ml-2 text-sm font-medium ${card.isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {card.change}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Status Overview */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-50 hover:shadow-xl transition-shadow duration-300"
            style={{ 
              animation: isLoaded ? 'fadeInLeft 0.6s ease-out 0.4s both' : 'none',
              opacity: 0
            }}
          >
            <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
              <h2 className="text-lg font-medium text-indigo-900">Today's Flight Status</h2>
            </div>
            <div className="p-6">
              <div className="relative pt-1">
                <div className="flex mb-3 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100">
                      Status Overview
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      Total: {flightStats.reduce((acc, curr) => acc + curr.count, 0)} Flights
                    </span>
                  </div>
                </div>
                <div className="flex h-5 mb-4 overflow-hidden text-xs rounded-full shadow-inner">
                  {flightStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`${stat.color} flex flex-col text-center whitespace-nowrap justify-center transition-all duration-1000`}
                      style={{ 
                        width: animatedStats ? `${stat.percentage}%` : '0%'
                      }}
                      aria-label={`${stat.status}: ${stat.count} flights (${stat.percentage}%)`}
                    />
                  ))}
                </div>
                <div className="flex justify-between">
                  {flightStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="flex items-center"
                      style={{ 
                        animation: animatedStats ? `fadeIn 0.5s ease-out ${index * 0.2}s both` : 'none',
                        opacity: 0
                      }}
                    >
                      <div className={`w-3 h-3 ${stat.color} rounded-full mr-2`}></div>
                      <div>
                        <p className="text-xs text-gray-500">{stat.status}</p>
                        <p className="text-sm font-semibold text-gray-700">{stat.count} ({stat.percentage}%)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8" id="recent-flights-section">
                <h3 className="text-sm font-semibold text-gray-600 mb-4">Recent Flights</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentFlights.map((flight, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-indigo-50 transition-colors duration-200"
                          style={{ 
                            animation: flightsVisible ? `fadeInUp 0.4s ease-out ${index * 0.15}s both` : 'none',
                            opacity: 0
                          }}
                        >
                          <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-indigo-900">{flight.id}</td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">{flight.from} - {flight.to}</td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">{flight.departure}</td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 inline-flex text-xs font-medium rounded-full ${
                              flight.status === 'On Time' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {flight.status}
                            </span>
                          </td>
                          <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">{flight.gate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-right">
                  <Link to="/flights" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                    View all flights →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Carousel */}
          <div 
            className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-50 hover:shadow-xl transition-shadow duration-300"
            style={{ 
              animation: isLoaded ? 'fadeInRight 0.6s ease-out 0.5s both' : 'none',
              opacity: 0
            }}
          >
            <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-white">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-indigo-900">{carouselItems[activeSlide].title}</h2>
                <div className="flex space-x-2">
                  {carouselItems.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-indigo-600' : 'w-2.5 bg-gray-300'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden">
              {carouselItems.map((item, index) => (
                <div 
                  key={index}
                  className={`slide-transition ${index === activeSlide ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full absolute top-0 left-0 right-0'}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Quick Actions */}
        <div 
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ 
            animation: isLoaded ? 'fadeInUp 0.6s ease-out 0.7s both' : 'none',
            opacity: 0
          }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-lg overflow-hidden text-white hover-float">
            <Link to="/flights">
            <div className="p-5">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-indigo-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold">Scheduling</h3>
                  <p className="text-indigo-100 text-sm mt-1">Manage flight schedules</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                Open Schedule Manager
              </button>
            </div>
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl shadow-lg overflow-hidden text-white hover-float">
            <Link to="/reports">
            <div className="p-5">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-sky-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold">Analytics</h3>
                  <p className="text-sky-100 text-sm mt-1">View detailed reports</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                Open Analytics
              </button>
            </div>
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-lg overflow-hidden text-white hover-float">
            <Link to="/crew">
            <div className="p-5">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-emerald-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold">Crew</h3>
                  <p className="text-emerald-100 text-sm mt-1">Manage crew assignments</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                Open Crew Manager
              </button>
            </div>
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow-lg overflow-hidden text-white hover-float">
            <div className="p-5">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-purple-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-xl font-semibold">Maintenance</h3>
                  <p className="text-purple-100 text-sm mt-1">Aircraft maintenance</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors duration-300">
                Open Maintenance
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;