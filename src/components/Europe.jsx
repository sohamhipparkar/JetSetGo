import React, { useState, useEffect } from 'react';
import { Plane, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Paris from '../assets/paris.jpg';
import Santorini from '../assets/santorini.jpg';
import Barcelona from '../assets/barcelona.jpeg';
import Venice from '../assets/venice.jpg';
import Amsterdam from '../assets/amsterdam.jpeg';
import Prague from '../assets/prague.jpg';
import Europe1 from '../assets/europe1.jpg';
import Europe2 from '../assets/europe2.jpg';

const Europe = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleDestinations, setVisibleDestinations] = useState([]);
  
  // Sample European destinations data
  const destinations = [
    {
      id: 1,
      city: "Paris",
      country: "France",
      image: Paris,
      description: "Experience the romance of the City of Light with its iconic landmarks and charming cafés.",
      price: "$514",
      feature: "Cultural"
    },
    {
      id: 2,
      city: "Santorini",
      country: "Greece",
      image: Santorini,
      description: "Discover breathtaking views of blue-domed churches and crystal-clear waters.",
      price: "$591",
      feature: "Island"
    },
    {
      id: 3,
      city: "Barcelona",
      country: "Spain",
      image: Barcelona,
      description: "Immerse yourself in Gaudi's architecture and vibrant Mediterranean culture.",
      price: "$449",
      feature: "Beach"
    },
    {
      id: 4,
      city: "Venice",
      country: "Italy",
      image: Venice,
      description: "Navigate the romantic canals of this unique floating city rich in history and art.",
      price: "$552",
      feature: "Historical"
    },
    {
      id: 5,
      city: "Amsterdam",
      country: "Netherlands",
      image: Amsterdam,
      description: "Explore picturesque canals, world-class museums, and vibrant culture.",
      price: "$488",
      feature: "Urban"
    },
    {
      id: 6,
      city: "Prague",
      country: "Czech Republic",
      image: Prague,
      description: "Walk through medieval streets and discover the fairy-tale charm of this historic city.",
      price: "$423",
      feature: "Medieval"
    }
  ];
  
  const [favorites, setFavorites] = useState({});
  const [activeDestination, setActiveDestination] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate destinations appearance
    const timer = setTimeout(() => {
      setVisibleDestinations(destinations);
    }, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const showDestinationDetails = (id) => {
    setActiveDestination(activeDestination === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient and floating elements - styled like AboutUs */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative text-center">
          <div className="inline-block animate-bounce mb-4">
            <Plane className="h-12 w-12 text-white opacity-80" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 text-white" 
              style={{ 
                animation: 'fadeInDown 0.8s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>
            Discover Europe
          </h1>
          
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg mb-8"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Explore the beauty, history, and culture of Europe's most breathtaking destinations.
            Book your dream European getaway today with our special offers.
          </p>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white mr-2">Popular searches:</span>
            <div className="flex space-x-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Paris
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Rome
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Barcelona
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with floating card at top (like AboutUs) */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Story Card - Adapted to Europe Overview */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Explore Europe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Europe offers an unparalleled blend of history, culture, and natural beauty. From the romantic streets of Paris to the sun-drenched beaches of the Mediterranean, each destination tells its own unique story.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our curated European travel experiences connect you with authentic local culture, iconic landmarks, and hidden gems that most tourists never discover. Whether you're drawn to ancient history, cutting-edge art, or world-class cuisine, Europe delivers unforgettable moments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With convenient flights to all major European cities and exclusive deals on accommodations, there's never been a better time to plan your European adventure with us.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">44</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">200+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">95%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured European Destinations section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured European Destinations</h2>
            <p className="text-gray-600 mt-2">Handpicked locations for your next adventure</p>
          </div>
        </div>
        
        {/* Destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDestinations.map((destination, index) => (
            <div 
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`,
              }}
            >
              <div className="relative">
                <img 
                  src={destination.image} 
                  alt={`${destination.city}, ${destination.country}`}
                  className="w-full h-48 object-cover" 
                />
                <button 
                  onClick={() => toggleFavorite(destination.id)}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`h-5 w-5 ${favorites[destination.id] ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} 
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.feature}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{destination.city}</h3>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-indigo-600">
                    {destination.price}
                    <span className="text-xs text-gray-500 block text-right">from</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Flights available daily</span>
                  </div>
                  
                  <button 
                    onClick={() => showDestinationDetails(destination.id)}
                    className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    Explore <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
                
                {/* Expandable details section */}
                <div 
                  className="overflow-hidden transition-all duration-300 mt-4"
                  style={{ 
                    maxHeight: activeDestination === destination.id ? '200px' : '0',
                    opacity: activeDestination === destination.id ? 1 : 0,
                  }}
                >
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Direct flight</span>
                      <span className="font-medium">3h 25m</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Best time to visit</span>
                      <span className="font-medium">Apr-Oct</span>
                    </div>
                    <button className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Europe Experience */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-200 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-20 w-72 h-72 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">European Summer Special</h2>
              <p className="text-indigo-800 mb-6">
                Experience the magic of European summers with our exclusive package deals.
                Enjoy discounted flights, luxury accommodations, and unique experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>20% off flights</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                  <span>Free cancellation</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Exclusive tours</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View Summer Specials
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={Europe1} alt="Europe Destination" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={Europe2} alt="Europe Destination" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-16 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated with Europe Deals</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter and be the first to know about special promotions, 
            new destinations, and travel tips for your European adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Subscribe
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

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
            transform: translateY(20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default Europe;