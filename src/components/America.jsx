import React, { useState, useEffect } from 'react';
import { Plane, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import NewYork from '../assets/newyork.avif';
import RioDeJaneiro from '../assets/rio.jpg';
import CancunMexico from '../assets/cancun.jpg';
import BuenosAires from '../assets/buenosaires.jpg';
import Vancouver from '../assets/vancouver.avif';
import CostaRica from '../assets/costarica.jpeg';
import America1 from '../assets/america1.jpg';
import America2 from '../assets/america2.jpg';

const America = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleDestinations, setVisibleDestinations] = useState([]);

  const destinations = [
    {
      id: 1,
      city: "New York",
      country: "United States",
      image: NewYork,
      description: "Experience the vibrant energy of the city that never sleeps with its iconic skyline and diverse neighborhoods.",
      price: "$349",
      feature: "Urban"
    },
    {
      id: 2,
      city: "Rio de Janeiro",
      country: "Brazil",
      image: RioDeJaneiro,
      description: "Discover stunning beaches, lush mountains, and the vibrant culture of this breathtaking coastal city.",
      price: "$598",
      feature: "Beach"
    },
    {
      id: 3,
      city: "Cancun",
      country: "Mexico",
      image: CancunMexico,
      description: "Relax on pristine white sand beaches and explore ancient Mayan ruins in this tropical paradise.",
      price: "$428",
      feature: "Resort"
    },
    {
      id: 4,
      city: "Buenos Aires",
      country: "Argentina",
      image: BuenosAires,
      description: "Immerse yourself in the passionate culture of tango, stunning architecture, and world-class cuisine.",
      price: "$632",
      feature: "Cultural"
    },
    {
      id: 5,
      city: "Vancouver",
      country: "Canada",
      image: Vancouver,
      description: "Explore this stunning coastal city with mountains, forests, and urban attractions all in one place.",
      price: "$389",
      feature: "Outdoor"
    },
    {
      id: 6,
      city: "Costa Rica",
      country: "Costa Rica",
      image: CostaRica,
      description: "Adventure through lush rainforests, see exotic wildlife, and relax on beautiful Pacific and Caribbean beaches.",
      price: "$479",
      feature: "Eco"
    }
  ];
  
  const [favorites, setFavorites] = useState({});
  const [activeDestination, setActiveDestination] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);

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

      {/* Hero header with animated gradient and floating elements */}
      <div className="bg-gradient-to-r from-red-900 via-amber-800 to-red-800 p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-300 rounded-full filter blur-3xl opacity-10"></div>
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
            Discover The Americas
          </h1>
          
          <p className="text-amber-100 max-w-3xl mx-auto text-lg mb-8"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Explore the diverse landscapes, vibrant cities, and natural wonders spanning North, Central, and South America.
            Book your dream American adventure today with our special offers.
          </p>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white mr-2">Popular searches:</span>
            <div className="flex space-x-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                New York
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Rio
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Cancun
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with floating card at top */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Americas Overview Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-red-900 mb-6">Explore The Americas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Americas offer an incredible spectrum of experiences from the snowy peaks of Canada to the tropical rainforests of Brazil. Explore bustling metropolises, pristine beaches, ancient ruins, and breathtaking natural wonders.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our curated American travel experiences connect you with authentic local cultures, awe-inspiring landscapes, and unforgettable adventures. Whether you're drawn to outdoor adventures, vibrant city life, or relaxing beach getaways, the Americas have something for every traveler.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With convenient flights across North, Central, and South America and exclusive deals on accommodations, there's never been a better time to plan your American journey with us.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-red-100 transition-colors">
                <div className="text-4xl font-bold text-red-600 mb-1">35</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-red-100 transition-colors">
                <div className="text-4xl font-bold text-red-600 mb-1">220+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-red-100 transition-colors">
                <div className="text-4xl font-bold text-red-600 mb-1">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-red-100 transition-colors">
                <div className="text-4xl font-bold text-red-600 mb-1">96%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Americas Destinations section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Americas Destinations</h2>
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
                <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="text-lg font-bold text-red-600">
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
                    className="flex items-center text-red-600 font-medium hover:text-red-800 transition-colors"
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
                      <span className="font-medium">5h 30m</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Best time to visit</span>
                      <span className="font-medium">May-Oct</span>
                    </div>
                    <button className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Americas Experience */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-red-200 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-20 w-72 h-72 bg-amber-200 rounded-full opacity-40 blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-red-900 mb-4">Family Adventure Package</h2>
              <p className="text-red-800 mb-6">
                Create unforgettable family memories with our exclusive Americas adventure packages.
                Enjoy discounted flights, family-friendly accommodations, and exciting activities for all ages.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>15% off for families</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Free cancellation</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                  <span>Adventure tours</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View Family Packages
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={America1} alt="Americas Destination" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={America2} alt="Americas Destination" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-16 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated with Americas Deals</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter and be the first to know about special promotions, 
            new destinations, and travel tips for your American adventures.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
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

export default America;