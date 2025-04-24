import React, { useEffect, useState } from 'react';
import { AlertTriangle, Home, ArrowLeft, Search, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Error = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [showPlane, setShowPlane] = useState(false);
  const [planePath, setPlanePath] = useState(0);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setShowPlane(true);
    }, 800);

    const planeInterval = setInterval(() => {
      setPlanePath((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(planeInterval);
    };
  }, []);

  const getPlanePosition = () => {
    const x = Math.sin(planePath * 0.05) * 40;
    const y = Math.sin(planePath * 0.03) * 20;
    return { x, y };
  };

  const planePosition = getPlanePosition();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient and floating elements */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-block mb-4">
            <AlertTriangle 
              className="h-16 w-16 text-yellow-300" 
              style={{ 
                animation: 'pulse 2s infinite ease-in-out',
              }}
            />
          </div>
          <h1 className="text-7xl font-bold mb-4 text-white" 
              style={{ 
                animation: 'fadeInDown 0.8s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>404</h1>
          <h2 className="text-3xl font-bold mb-6 text-white"
              style={{ 
                animation: 'fadeInUp 1s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>Page Not Found</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg mb-6"
             style={{ animation: 'fadeInUp 1.2s ease-out' }}>
            Looks like you've ventured into uncharted airspace. The page you're looking for doesn't exist or may have been moved.
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-12 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Error Visualization */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100 text-center"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative h-64 w-full max-w-lg">
              {/* Cloud elements */}
              <div className="absolute left-1/4 top-1/4 w-24 h-12 bg-gray-100 rounded-full" 
                   style={{ animation: 'float 10s ease-in-out infinite' }}></div>
              <div className="absolute left-1/2 top-1/3 w-32 h-16 bg-gray-200 rounded-full" 
                   style={{ animation: 'floatReverse 12s ease-in-out infinite' }}></div>
              <div className="absolute right-1/4 top-1/2 w-28 h-14 bg-gray-100 rounded-full" 
                   style={{ animation: 'float 8s ease-in-out infinite' }}></div>
              
              {/* Error path */}
              <div className="absolute top-1/2 w-full h-1 bg-gray-200">
                <div className="absolute w-full h-full animate-pulse">
                  <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <div className="absolute left-1/4 top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <div className="absolute left-1/2 top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <div className="absolute left-3/4 top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <div className="absolute right-0 top-0 w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Animated plane */}
              {showPlane && (
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                  style={{ 
                    transform: `translate(${planePosition.x}px, ${planePosition.y}px)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  <div className="relative">
                    <div 
                      className="w-16 h-16 flex items-center justify-center bg-indigo-600 rounded-full shadow-lg text-white"
                      style={{ animation: 'pulse 3s infinite ease-in-out' }}
                    >
                      <span className="text-lg font-bold">404</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">We seem to be off course</h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-8">
            The destination you're looking for is not on our flight path. Let us help you find your way back.
          </p>
          
          {/* Search area */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex shadow-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
              <input
                type="text"
                placeholder="Search for destinations..."
                className="flex-grow px-4 py-3 focus:outline-none border-y border-l border-gray-200 rounded-l-lg"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="bg-indigo-600 px-4 py-3 text-white flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <button className="flex items-center gap-2 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <Home className="h-5 w-5" />
                Back to Home
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>
        
        {/* Quick Links */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-12 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h3 className="text-xl font-bold text-center text-gray-800 mb-6">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 text-center">
                <span className="font-medium text-indigo-800">Home</span>
              </div>
            </Link>
            <Link to="/flights">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 text-center">
                <span className="font-medium text-indigo-800">Flights</span>
              </div>
            </Link>
            <Link to="/europe">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 text-center">
                <span className="font-medium text-indigo-800">Destinations</span>
              </div>
            </Link>
            <Link to="/contact">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 text-center">
                <span className="font-medium text-indigo-800">Contact Us</span>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Refresh prompt */}
        <div 
          className="bg-gradient-to-r from-indigo-800 to-blue-700 rounded-xl shadow-xl p-8 mb-12 text-center"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-center mb-4">
            <RefreshCw className="h-10 w-10 text-white animate-spin-slow" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Still Looking?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
            If you believe this page should exist, try refreshing or contact our support team for assistance.
          </p>
          <div className="flex justify-center">
            <button onClick={() => window.location.reload()} className="bg-white text-indigo-700 py-2 px-6 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Refresh Page
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
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

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatReverse {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Error;