import React, { useState, useEffect } from 'react';
import { Plane, Heart, Calendar, MapPin, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Tokyo from '../assets/tokyo.jpg';
import Bali from '../assets/bali.jpg';
import Bangkok from '../assets/bangkok.jpg';
import Kyoto from '../assets/kyoto.jpg';
import Singapore from '../assets/singapore.jpg';
import HoiAn from '../assets/hoian.jpg';
import Asia1 from '../assets/asia1.jpg';
import Asia2 from '../assets/asia2.jpg';

const Asia = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleDestinations, setVisibleDestinations] = useState([]);

  const destinations = [
    {
      id: 1,
      city: "Tokyo",
      country: "Japan",
      image: Tokyo,
      description: "Experience the perfect blend of tradition and futuristic innovation in Japan's vibrant capital.",
      price: "$678",
      feature: "Urban"
    },
    {
      id: 2,
      city: "Bali",
      country: "Indonesia",
      image: Bali,
      description: "Discover paradise with stunning beaches, lush rice terraces, and spiritual temples.",
      price: "$612",
      feature: "Tropical"
    },
    {
      id: 3,
      city: "Bangkok",
      country: "Thailand",
      image: Bangkok,
      description: "Immerse yourself in the bustling streets, vibrant markets, and ornate temples of Thailand's capital.",
      price: "$543",
      feature: "Cultural"
    },
    {
      id: 4,
      city: "Kyoto",
      country: "Japan",
      image: Kyoto,
      description: "Step back in time among ancient temples, traditional tea houses, and serene gardens.",
      price: "$702",
      feature: "Historical"
    },
    {
      id: 5,
      city: "Singapore",
      country: "Singapore",
      image: Singapore,
      description: "Explore this ultramodern city-state with its stunning architecture and diverse cultural influences.",
      price: "$594",
      feature: "Modern"
    },
    {
      id: 6,
      city: "Hoi An",
      country: "Vietnam",
      image: HoiAn,
      description: "Wander through the charming ancient town with its colorful lanterns and well-preserved heritage.",
      price: "$487",
      feature: "Heritage"
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
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-800 p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-emerald-300 rounded-full filter blur-3xl opacity-10"></div>
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
            Discover Asia
          </h1>
          
          <p className="text-emerald-100 max-w-3xl mx-auto text-lg mb-8"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Explore the rich traditions, stunning landscapes, and vibrant cultures of Asia's most captivating destinations.
            Book your dream Asian adventure today with our special offers.
          </p>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-white mr-2">Popular searches:</span>
            <div className="flex space-x-3">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Tokyo
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Bali
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm hover:bg-white/30 cursor-pointer transition-colors">
                Bangkok
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with floating card at top */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asia Overview Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Explore Asia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Asia offers an incredible tapestry of ancient traditions and modern marvels. From the serene temples of Japan to the tropical beaches of Southeast Asia, each destination presents a unique cultural experience.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our curated Asian travel experiences connect you with authentic local traditions, breathtaking natural wonders, and culinary delights that most travelers never discover. Whether you're drawn to ancient spirituality, bustling megacities, or pristine beaches, Asia offers endless discoveries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With convenient flights to all major Asian hubs and exclusive deals on accommodations, there's never been a better time to plan your Asian adventure with us.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors">
                <div className="text-4xl font-bold text-emerald-600 mb-1">48</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors">
                <div className="text-4xl font-bold text-emerald-600 mb-1">250+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors">
                <div className="text-4xl font-bold text-emerald-600 mb-1">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-emerald-100 transition-colors">
                <div className="text-4xl font-bold text-emerald-600 mb-1">97%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Asian Destinations section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Asian Destinations</h2>
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
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <div className="text-lg font-bold text-emerald-600">
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
                    className="flex items-center text-emerald-600 font-medium hover:text-emerald-800 transition-colors"
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
                      <span className="font-medium">9h 45m</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-gray-600">Best time to visit</span>
                      <span className="font-medium">Nov-Apr</span>
                    </div>
                    <button className="w-full py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Asia Experience */}
        <div className="mt-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-200 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-20 w-72 h-72 bg-teal-200 rounded-full opacity-40 blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Asian Winter Escape</h2>
              <p className="text-emerald-800 mb-6">
                Escape the winter cold with our exclusive Asian tropical package deals.
                Enjoy discounted flights, luxury accommodations, and unique cultural experiences.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>25% off flights</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                  <span>Free cancellation</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                  <span>Cultural tours</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1">
                View Winter Escapes
              </button>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={Asia1} alt="Asia Destination" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img src={Asia2} alt="Asia Destination" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter signup */}
        <div className="mt-16 text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated with Asia Deals</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Subscribe to our newsletter and be the first to know about special promotions, 
            new destinations, and travel tips for your Asian adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors">
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

export default Asia;