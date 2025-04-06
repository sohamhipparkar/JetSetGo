import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Plane, ChevronLeft, ChevronDown, ChevronRight , Search, Filter, Tag, Check, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Booking = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [sortBy, setSortBy] = useState('date');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchFocus, setSearchFocus] = useState(false);
  
  // Animation trigger on component mount
  useEffect(() => {
    setAnimated(true);
  }, []);
  
  // Mock data for bookings
  const bookings = [
    {
      id: 'BK7823',
      airline: 'JetSetGo Airways',
      flightNumber: 'FL1234',
      departureDate: 'Apr 10, 2025',
      departureTime: '08:45',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '14:20',
      arrivalCode: 'LDN',
      arrivalCity: 'London',
      duration: '5h 35m',
      price: 649,
      passengers: 2,
      status: 'confirmed',
      returnDate: 'Apr 17, 2025',
      returnFlight: 'FL5433',
      returnDepartureTime: '09:30',
      returnArrivalTime: '15:10'
    },
    {
      id: 'BK4562',
      airline: 'SkyWing Airlines',
      flightNumber: 'FL5678',
      departureDate: 'May 15, 2025',
      departureTime: '10:30',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '16:45',
      arrivalCode: 'PAR',
      arrivalCity: 'Paris',
      duration: '6h 15m',
      price: 729,
      passengers: 1,
      status: 'confirmed',
      returnDate: 'May 22, 2025',
      returnFlight: 'FL8976',
      returnDepartureTime: '11:20',
      returnArrivalTime: '17:35'
    },
    {
      id: 'BK2290',
      airline: 'GlobalFly',
      flightNumber: 'FL9012',
      departureDate: 'Mar 5, 2025',
      departureTime: '14:15',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '20:05',
      arrivalCode: 'TKY',
      arrivalCity: 'Tokyo',
      duration: '13h 50m',
      price: 1249,
      passengers: 2,
      status: 'completed',
      returnDate: 'Mar 15, 2025',
      returnFlight: 'FL9876',
      returnDepartureTime: '22:30',
      returnArrivalTime: '10:10'
    },
    {
      id: 'BK9981',
      airline: 'TransAtlantic',
      flightNumber: 'FL3456',
      departureDate: 'Feb 18, 2025',
      departureTime: '16:40',
      departureCode: 'NYC',
      departureCity: 'New York',
      arrivalTime: '05:10',
      arrivalCode: 'BER',
      arrivalCity: 'Berlin',
      duration: '6h 30m',
      price: 689,
      passengers: 3,
      status: 'cancelled',
      returnDate: 'Feb 25, 2025',
      returnFlight: 'FL6543',
      returnDepartureTime: '07:15',
      returnArrivalTime: '13:40'
    }
  ];

  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(booking => {
    if (activeTab === 'upcoming') return booking.status === 'confirmed';
    if (activeTab === 'completed') return booking.status === 'completed';
    if (activeTab === 'cancelled') return booking.status === 'cancelled';
    return true; // 'all' tab
  });
  
  // Sort bookings based on selected criteria
  const sortedBookings = [...filteredBookings].sort((a, b) => {
    const dateA = new Date(a.departureDate);
    const dateB = new Date(b.departureDate);
    
    if (sortBy === 'date') return dateA - dateB;
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'destination') return a.arrivalCity.localeCompare(b.arrivalCity);
    return 0;
  });
  
  // Get status badge styling
  const getStatusBadge = (status) => {
    switch(status) {
      case 'confirmed':
        return { 
          bg: 'bg-green-100', 
          text: 'text-green-700',
          border: 'border-green-200',
          icon: <Check className="h-3 w-3 mr-1" />
        };
      case 'completed':
        return { 
          bg: 'bg-blue-100', 
          text: 'text-blue-700',
          border: 'border-blue-200',
          icon: <Check className="h-3 w-3 mr-1" />
        };
      case 'cancelled':
        return { 
          bg: 'bg-red-100', 
          text: 'text-red-700',
          border: 'border-red-200',
          icon: <X className="h-3 w-3 mr-1" />
        };
      default:
        return { 
          bg: 'bg-gray-100', 
          text: 'text-gray-700',
          border: 'border-gray-200',
          icon: null
        };
    }
  };

  // Toggle booking details
  const toggleBookingDetails = (id) => {
    if (selectedBooking === id) {
      setSelectedBooking(null);
    } else {
      setSelectedBooking(id);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient and flying plane */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20 transition-all duration-1500 ease-in-out ${animated ? 'animate-pulse' : ''}`}></div>
          <div className={`absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20 transition-all duration-1500 ease-in-out ${animated ? 'animate-pulse' : ''}`}></div>
        </div>
        
        {/* Animated flying plane */}
        <div className={`absolute transition-all duration-1000 ease-in-out ${animated ? 'opacity-100 translate-x-full' : 'opacity-0 -translate-x-full'}`} style={{ top: '45%', left: '-50px', animation: 'fly 20s linear infinite' }}>
          <Plane className="h-8 w-8 text-white transform -rotate-12" />
        </div>
        
        <style jsx>{`
          @keyframes fly {
            0% { transform: translateX(-50px) rotate(-12deg); }
            100% { transform: translateX(calc(100vw + 50px)) rotate(-12deg); }
          }
        `}</style>
        
        <div className={`max-w-7xl mx-auto relative transition-all duration-700 ease-out ${animated ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-4xl font-bold mb-3 text-white text-center">Bookings</h1>
          <br></br>
        </div>
      </div>

      
      {/* Search bar with animation */}
      <div className={`max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ease-out delay-300 ${animated ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-10'}`}>
        <div className={`bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100 transition-all duration-300 ${searchFocus ? 'shadow-2xl border-indigo-100' : ''}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow max-w-2xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`h-5 w-5 text-gray-400 transition-all duration-300 ${searchFocus ? 'text-indigo-500' : ''}`} />
              </div>
              <input
                type="text"
                placeholder="Search bookings by destination, flight number or booking ID"
                className="block w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800  whitespace-nowrap hover:scale-105 transition-transform duration-300"
            >
              <Filter className={`h-4 w-4 mr-2 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-0.5 whitespace-nowrap">
              <Search className="h-4 w-4 mr-2" />
              Search
            </button>
          </div>
          
          {/* Filter section with animation */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            style={{ visibility: isFilterOpen ? 'visible' : 'hidden' }}
          >
            <div className="mt-6 pt-5 border-t grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="transform transition-all duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                <h3 className="font-semibold text-gray-800 mb-4">Booking Date</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="date1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="date1" className="ml-3 text-gray-700">Last 30 days</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="date2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="date2" className="ml-3 text-gray-700">Last 90 days</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="date3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="date3" className="ml-3 text-gray-700">All time</label>
                  </div>
                </div>
              </div>
              
              <div className="transform transition-all duration-500 ease-out" style={{ transitionDelay: '200ms' }}>
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
              
              <div className="transform transition-all duration-500 ease-out" style={{ transitionDelay: '300ms' }}>
                <h3 className="font-semibold text-gray-800 mb-4">Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="status1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status1" className="ml-3 text-gray-700">Confirmed</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="status2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status2" className="ml-3 text-gray-700">Completed</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="status3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status3" className="ml-3 text-gray-700">Cancelled</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content with staggered animations */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 transition-all duration-700 ease-out delay-500 ${animated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Your Bookings</h2>
            <p className="text-gray-600 mt-1">Showing {sortedBookings.length} bookings</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-white rounded-lg shadow-md p-1 flex w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ease-in-out ${activeTab === 'all' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('upcoming')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ease-in-out ${activeTab === 'upcoming' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('completed')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ease-in-out ${activeTab === 'completed' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Completed
              </button>
              <button 
                onClick={() => setActiveTab('cancelled')} 
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ease-in-out ${activeTab === 'cancelled' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Cancelled
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-3 w-full sm:w-auto">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2 whitespace-nowrap">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-gray-800 text-sm font-medium focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-md cursor-pointer p-1 transition-colors duration-300"
                >
                  <option value="date">Travel Date</option>
                  <option value="price">Price</option>
                  <option value="destination">Destination</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking cards with staggered animations */}
        <div className="space-y-6">
          {sortedBookings.map((booking, index) => {
            const statusBadge = getStatusBadge(booking.status);
            const isSelected = selectedBooking === booking.id;
            
            return (
              <div 
                key={booking.id} 
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 transform ${isSelected ? 'scale-102 border-indigo-200' : ''}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animation: animated ? `fadeSlideIn 800ms ${index * 150}ms forwards` : 'none',
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                <style jsx>{`
                  @keyframes fadeSlideIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                
                <div className="p-6">
                  {/* Header with status and booking ID */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`text-xs flex items-center font-semibold rounded-full px-3 py-1 border ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}>
                        {statusBadge.icon}
                        <span className="capitalize">{booking.status}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Booking ID:</span> {booking.id}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm  hover:scale-105 transition-transform duration-300">Manage</button>
                      {booking.status === 'confirmed' && (
                        <button className="text-red-600 hover:text-red-800 font-medium text-sm  hover:scale-105 transition-transform duration-300">Cancel</button>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    {/* Flight info */}
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0 hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <span className="text-white font-bold text-lg">{booking.airline.split(' ').map(word => word[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{booking.airline}</div>
                        <div className="text-gray-500 text-sm">Flight {booking.flightNumber}</div>
                        <div className="mt-1 text-sm flex items-center text-gray-700">
                          <Tag className="h-3 w-3 mr-1 text-indigo-600" />
                          {booking.passengers} {booking.passengers === 1 ? 'passenger' : 'passengers'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Route info with animated plane */}
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{booking.departureTime}</div>
                        <div className="text-sm font-semibold text-gray-800">{booking.departureCode}</div>
                        <div className="text-xs text-gray-500">{booking.departureCity}</div>
                        <div className="text-xs text-gray-500 mt-1">{booking.departureDate}</div>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-xs text-gray-500 mb-2">{booking.duration}</div>
                        <div className="relative w-full">
                          <div className="absolute inset-0 flex items-center">
                            <div className="h-0.5 w-full bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <div className="text-xs bg-indigo-100 text-indigo-700 font-semibold rounded-full px-3 py-1 border border-indigo-200">Round trip</div>
                          </div>
                        </div>
                        <div className="mt-2 flex justify-center relative">
                          <Plane 
                            className={`h-5 w-5 text-indigo-500 transform -rotate-12 transition-all duration-700 ${isSelected ? 'translate-x-24' : ''}`} 
                            onMouseEnter={(e) => e.currentTarget.classList.add('animate-bounce')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('animate-bounce')}
                          />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold text-gray-900">{booking.arrivalTime}</div>
                        <div className="text-sm font-semibold text-gray-800">{booking.arrivalCode}</div>
                        <div className="text-xs text-gray-500">{booking.arrivalCity}</div>
                        <div className="text-xs text-gray-500 mt-1">{booking.departureDate}</div>
                      </div>
                    </div>
                    
                    {/* Price info with pulse animation on hover */}
                    <div className="lg:text-right">
                      <div className="text-gray-500 text-sm">Total price</div>
                      <div 
                        className="text-2xl font-bold text-indigo-600 transition-all duration-300 hover:text-indigo-700"
                        onMouseEnter={(e) => e.currentTarget.classList.add('animate-pulse')}
                        onMouseLeave={(e) => e.currentTarget.classList.remove('animate-pulse')}
                      >${booking.price * booking.passengers}</div>
                      <div className="text-sm text-gray-500">${booking.price} per person</div>
                    </div>
                  </div>
                  
                  {/* Return flight info with animation */}
                  <div className="mt-5 pt-4 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between text-sm">
                      <div className="flex items-start mb-2 sm:mb-0">
                        <Calendar className="h-4 w-4 mr-2 text-indigo-500 mt-0.5" />
                        <div>
                          <span className="font-medium text-gray-700">Return flight:</span> {booking.returnFlight} • {booking.returnDate}
                          <div className="text-gray-500">
                            {booking.returnDepartureTime} ({booking.arrivalCode}) → {booking.returnArrivalTime} ({booking.departureCode})
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 hover:scale-105 transition-transform duration-300">
                          Download boarding pass
                        </button>
                        <button 
                          className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors"
                          onClick={() => toggleBookingDetails(booking.id)}
                        >
                          View details
                          <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable details section */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isSelected ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                    style={{ visibility: isSelected ? 'visible' : 'hidden' }}
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Passenger Details</h4>
                          <div className="text-sm text-gray-600">
                            <p>{booking.passengers} {booking.passengers === 1 ? 'passenger' : 'passengers'}</p>
                            <p>Adult Fare</p>
                            <p>Checked Baggage: 1 × 23kg</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Seat Information</h4>
                          <div className="text-sm text-gray-600">
                            <p>Outbound: 12A, 12B</p>
                            <p>Return: 15C, 15D</p>
                            <p>Economy Class</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Additional Services</h4>
                          <div className="text-sm text-gray-600">
                            <p>In-flight Meals: Yes</p>
                            <p>Priority Boarding: No</p>
                            <p>Travel Insurance: Yes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Empty state with animation */}
        {sortedBookings.length === 0 && (
          <div 
           className={`flex flex-col items-center justify-center py-12 text-center bg-white rounded-xl shadow-md p-8 transition-all duration-700 ease-out ${animated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <Plane className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No bookings found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters or search for a different term.</p>
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-0.5">
              Book a new flight
            </button>
          </div>
        )}
        
        {/* Pagination with subtle animations */}
        {sortedBookings.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors duration-200 flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              
              {[1, 2, 3].map((page) => (
                <button 
                  key={page}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${page === 1 ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  {page}
                </button>
              ))}
              
              <button className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors duration-200 flex items-center">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Newsletter / promo with staggered animation */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 transition-all duration-700 ease-out delay-700 ${animated ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-indigo-500 opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
            
            {/* Content with staggered fade-in */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ 
                    animation: animated ? 'fadeUp 800ms forwards' : 'none',
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  Get special flight deals for your next trip
                </h2>
                <p 
                  className="text-indigo-100 mb-6"
                  style={{ 
                    animation: animated ? 'fadeUp 800ms 200ms forwards' : 'none',
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  Subscribe to our newsletter and receive exclusive offers on flights, hotels, and vacation packages.
                </p>
                
                <style jsx>{`
                  @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                
                <div 
                  className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
                  style={{ 
                    animation: animated ? 'fadeUp 800ms 400ms forwards' : 'none',
                    opacity: 0,
                    transform: 'translateY(20px)'
                  }}
                >
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 flex-grow transition-all duration-300"
                  />
                  <button className="bg-white text-indigo-600 hover:text-indigo-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                {/* Animated plane icon */}
                <div 
                  className="absolute"
                  style={{ 
                    animation: animated ? 'orbit 15s linear infinite' : 'none',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="bg-white rounded-full p-6 shadow-xl">
                    <Plane className="h-12 w-12 text-indigo-600" />
                  </div>
                </div>
                
                <style jsx>{`
                  @keyframes orbit {
                    0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;