import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock, MapPin, Calendar, ChevronDown, ChevronUp, ArrowRight, Info, Plane } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Flights = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('price');
  const [activeTab, setActiveTab] = useState('all');
  const [searchAnimated, setSearchAnimated] = useState(false);
  const [visibleFlights, setVisibleFlights] = useState([]);
  const [expandedFlightId, setExpandedFlightId] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  // Mock data for flights
  const flights = [
    {
      id: 'FL1234',
      airline: 'JetSetGo Airways',
      departureTime: '08:45',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '14:20',
      arrivalCode: 'LDN',
      arrivalCity: 'London',
      duration: '5h 35m',
      price: 649,
      stops: 0,
      aircraft: 'Boeing 787',
      available: 14
    },
    {
      id: 'FL5678',
      airline: 'SkyWing Airlines',
      departureTime: '10:30',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '16:45',
      arrivalCode: 'LDN',
      arrivalCity: 'London',
      duration: '6h 15m',
      price: 489,
      stops: 1,
      aircraft: 'Airbus A350',
      available: 8
    },
    {
      id: 'FL9012',
      airline: 'GlobalFly',
      departureTime: '14:15',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '20:05',
      arrivalCode: 'LDN',
      arrivalCity: 'London',
      duration: '5h 50m',
      price: 729,
      stops: 0,
      aircraft: 'Boeing 777',
      available: 22
    },
    {
      id: 'FL3456',
      airline: 'TransAtlantic',
      departureTime: '16:40',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '05:10',
      arrivalCode: 'LDN',
      arrivalCity: 'London',
      duration: '6h 30m',
      price: 529,
      stops: 1,
      aircraft: 'Airbus A330',
      available: 5
    }
  ];

  // Sort flights based on selected criteria
  const sortedFlights = [...flights].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'duration') return a.duration.localeCompare(b.duration);
    if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
    return 0;
  });

  // Animation for filtering flights
  useEffect(() => {
    // First clear all flights with animation effect
    setVisibleFlights([]);
    
    // Then progressively add flights with staggered delay
    const filtered = sortedFlights.filter(flight => 
      activeTab === 'all' || (activeTab === 'nonstop' && flight.stops === 0)
    );
    
    filtered.forEach((flight, index) => {
      setTimeout(() => {
        setVisibleFlights(prev => [...prev, flight]);
      }, 100 * index);
    });
  }, [sortBy, activeTab]);

  // Search animation effect
  const handleSearch = () => {
    setSearchAnimated(true);
    setVisibleFlights([]);
    
    setTimeout(() => {
      sortedFlights.forEach((flight, index) => {
        setTimeout(() => {
          setVisibleFlights(prev => [...prev, flight]);
        }, 150 * index);
      });
      setSearchAnimated(false);
    }, 800);
  };

  // Animation for floating elements on the hero section
  const [heroOffset, setHeroOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle flight details
  const toggleFlightDetails = (id) => {
    setExpandedFlightId(expandedFlightId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero header with animated gradient and floating elements */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-4xl font-bold mb-3 text-white text-center" 
              style={{ 
                animation: 'fadeInDown 0.8s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>Flights</h1>
          <br></br>
        </div>
      </div>

      {/* Search form with animation */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">From - To</label>
              <div className="relative">
                <div className="flex items-center border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-500">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-semibold">New York (NYC)</div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <ArrowRight className="h-3 w-3 mx-1 text-gray-400" />
                      <span>London (LDN)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Departure</label>
              <div className="relative border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-500">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
                  <div className="font-semibold">Apr 10, 2025</div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Return</label>
              <div className="relative border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-500">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
                  <div className="font-semibold">Apr 17, 2025</div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers</label>
              <div className="relative border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">2 Adults</div>
                  <ChevronDown className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              <Filter className={`h-4 w-4 mr-2 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : 'rotate-0'}`} />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <button 
              onClick={handleSearch}
              className={`bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-1 ${searchAnimated ? 'animate-pulse' : ''}`}
            >
              <Search className={`h-4 w-4 mr-2 ${searchAnimated ? 'animate-spin' : ''}`} />
              Search Flights
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isFilterOpen ? '500px' : '0',
              opacity: isFilterOpen ? 1 : 0,
              marginTop: isFilterOpen ? '24px' : '0',
              paddingTop: isFilterOpen ? '20px' : '0',
              borderTop: isFilterOpen ? '1px solid #e5e7eb' : 'none'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="price1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="price1" className="ml-3 text-gray-700">Under $500</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="price2" className="ml-3 text-gray-700">$500 - $700</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="price3" className="ml-3 text-gray-700">$700+</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Stops</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="stops1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="stops1" className="ml-3 text-gray-700">Non-stop</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="stops2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="stops2" className="ml-3 text-gray-700">1 Stop</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Airlines</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="airline1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="airline1" className="ml-3 text-gray-700">JetSetGo Airways</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="airline2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="airline2" className="ml-3 text-gray-700">SkyWing Airlines</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="airline3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="airline3" className="ml-3 text-gray-700">GlobalFly</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="airline4" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="airline4" className="ml-3 text-gray-700">TransAtlantic</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Departure Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="time1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="time1" className="ml-3 text-gray-700">Morning (6AM - 12PM)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="time2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="time2" className="ml-3 text-gray-700">Afternoon (12PM - 6PM)</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="time3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="time3" className="ml-3 text-gray-700">Evening (After 6PM)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800" 
                style={{ animation: 'fadeInLeft 0.8s ease-out' }}>Available Flights</h2>
            <p className="text-gray-600 mt-1">New York to London • Apr 10, 2025</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-white rounded-lg shadow-md p-1 flex w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ${activeTab === 'all' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                All Flights
              </button>
              <button 
                onClick={() => setActiveTab('nonstop')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ${activeTab === 'nonstop' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Non-stop
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-3 w-full sm:w-auto">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2 whitespace-nowrap">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-gray-800 text-sm font-medium focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-md cursor-pointer p-1 transition-all duration-300"
                >
                  <option value="price">Price</option>
                  <option value="duration">Duration</option>
                  <option value="departure">Departure Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Flight cards with animations */}
        <div className="space-y-6">
          {visibleFlights.map((flight, index) => (
            <div 
              key={flight.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
              style={{ 
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`,
                opacity: 1,
                transform: 'translateY(0)',
              }}
              onMouseEnter={() => setHoverCard(flight.id)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Airline info with logo animation */}
                  <div className="flex items-center space-x-4">
                    <div 
                      className={`w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${hoverCard === flight.id ? 'scale-110' : ''}`}
                    >
                      <span className="text-white font-bold text-lg">{flight.airline.split(' ').map(word => word[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{flight.airline}</div>
                      <div className="text-gray-500 text-sm">Flight {flight.id} • {flight.aircraft}</div>
                    </div>
                  </div>
                  
                  {/* Flight info with plane animation */}
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{flight.departureTime}</div>
                      <div className="text-sm font-semibold text-gray-800">{flight.departureCode}</div>
                      <div className="text-xs text-gray-500">{flight.departureCity}</div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-xs text-gray-500 mb-2">{flight.duration}</div>
                      <div className="relative w-full">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-0.5 w-full bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center">
                          {flight.stops === 0 ? (
                            <div className="text-xs bg-indigo-100 text-indigo-700 font-semibold rounded-full px-3 py-1 border border-indigo-200">Non-stop</div>
                          ) : (
                            <div className="text-xs bg-amber-100 text-amber-700 font-semibold rounded-full px-3 py-1 border border-amber-200">1 stop</div>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <Plane 
                          className={`h-5 w-5 text-indigo-500 transform -rotate-12 transition-all duration-700 ${hoverCard === flight.id ? 'translate-x-8' : ''}`} 
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{flight.arrivalTime}</div>
                      <div className="text-sm font-semibold text-gray-800">{flight.arrivalCode}</div>
                      <div className="text-xs text-gray-500">{flight.arrivalCity}</div>
                    </div>
                  </div>
                  
                  {/* Price and CTA with hover effects */}
                  <Link to="/passengers">
                  <div className="lg:text-right">
                    <div className="text-gray-500 text-sm">From</div>
                    <div className="text-3xl font-bold text-indigo-600 transition-all duration-300">${flight.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                    <button 
                      className="mt-3 w-full lg:w-auto bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      Select
                    </button>
                  </div>
                  </Link>
                </div>
                
                {/* Flight details with expandable animation */}
                <div className="mt-5 pt-4 border-t border-gray-200 flex flex-wrap justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-indigo-500" />
                    <span>Total flight time: {flight.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-2 text-indigo-500" />
                    <span>
                      {flight.available} seats available
                      {flight.available <= 5 && (
                        <span 
                          className="text-red-500 font-medium ml-1"
                          style={{ animation: 'pulse 2s infinite' }}
                        >
                          • Almost sold out!
                        </span>
                      )}
                    </span>
                  </div>
                  <button 
                    onClick={() => toggleFlightDetails(flight.id)}
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors duration-300"
                  >
                    Flight details
                    {expandedFlightId === flight.id ? (
                      <ChevronUp className="h-4 w-4 ml-1 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-300" />
                    )}
                  </button>
                </div>
                
                {/* Expandable details section */}
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ 
                    maxHeight: expandedFlightId === flight.id ? '200px' : '0',
                    opacity: expandedFlightId === flight.id ? 1 : 0,
                    marginTop: expandedFlightId === flight.id ? '16px' : '0'
                  }}
                >
                  <div className="p-4 bg-indigo-50 rounded-lg mt-2">
                    <h4 className="font-semibold text-gray-800 mb-2">Flight Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-gray-500">Aircraft</div>
                        <div className="font-medium">{flight.aircraft}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Flight Number</div>
                        <div className="font-medium">{flight.id}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Amenities</div>
                        <div className="font-medium">Wi-Fi, Power Outlets, In-flight Entertainment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination with hover animations */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white rounded-lg shadow-md inline-flex overflow-hidden">
            <button className="px-5 py-3 border-r border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:text-indigo-600">Previous</button>
            <button className="px-5 py-3 bg-indigo-100 text-indigo-700 font-medium transition-all duration-300 transform hover:scale-110">1</button>
            <button className="px-5 py-3 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:text-indigo-600">2</button>
            <button className="px-5 py-3 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:text-indigo-600">3</button>
            <button className="px-5 py-3 border-l border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:text-indigo-600">Next</button>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
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

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
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
      <Footer />
    </div>
  );
};

export default Flights;