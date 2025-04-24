import React, { useState, useEffect } from 'react';
import { User, Users, UserPlus, UserMinus, CreditCard, Mail, Phone, Landmark, ShieldCheck, ChevronDown, ChevronUp, HelpCircle, CheckCircle, Calendar, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Passengers = () => {
  const [passengers, setPassengers] = useState([
    { id: 1, type: 'adult', title: 'Mr', firstName: '', lastName: '', email: '', phone: '', dob: '', nationality: '', passportNumber: '', passportExpiry: '' },
    { id: 2, type: 'adult', title: 'Ms', firstName: '', lastName: '', email: '', phone: '', dob: '', nationality: '', passportNumber: '', passportExpiry: '' }
  ]);
  
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    saveDetails: true
  });
  
  const [expandedPassenger, setExpandedPassenger] = useState(1);
  const [activeSection, setActiveSection] = useState('passenger-details');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUpgrades, setSelectedUpgrades] = useState([]);
   const [promoCode, setPromoCode] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
 
  const addPassenger = (type) => {
    const newId = passengers.length > 0 ? Math.max(...passengers.map(p => p.id)) + 1 : 1;
    setPassengers([...passengers, {
      id: newId,
      type: type,
      title: 'Mr',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      nationality: '',
      passportNumber: '',
      passportExpiry: ''
    }]);
    setExpandedPassenger(newId);
  };
  
  const removePassenger = (id) => {
    if (passengers.length > 1) {
      setPassengers(passengers.filter(p => p.id !== id));
      if (expandedPassenger === id) {
        setExpandedPassenger(passengers[0].id);
      }
    }
  };
  
  const handlePassengerChange = (id, field, value) => {
    setPassengers(passengers.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };
  
  const handleContactChange = (field, value) => {
    setContactDetails({ ...contactDetails, [field]: value });
  };
  
  const toggleExpand = (id) => {
    setExpandedPassenger(expandedPassenger === id ? null : id);
  };
  
  const goToNextSection = () => {
    if (activeSection === 'passenger-details') {
      setActiveSection('payment-details');
    } else if (activeSection === 'payment-details') {
      setActiveSection('review');
    }
  };
  
  const goToPreviousSection = () => {
    if (activeSection === 'payment-details') {
      setActiveSection('passenger-details');
    } else if (activeSection === 'review') {
      setActiveSection('payment-details');
    }
  };

  const flightDetails = {
    outbound: {
      airline: 'JetSetGo Airways',
      flightNumber: 'FL1234',
      departureDate: 'Apr 10, 2025',
      departureTime: '08:45',
      departureAirport: 'New York (NYC)',
      arrivalTime: '14:20',
      arrivalAirport: 'London (LDN)',
      duration: '5h 35m'
    },
    inbound: {
      airline: 'JetSetGo Airways',
      flightNumber: 'FL5678',
      departureDate: 'Apr 17, 2025',
      departureTime: '10:30',
      departureAirport: 'London (LDN)',
      arrivalTime: '13:15',
      arrivalAirport: 'New York (NYC)',
      duration: '6h 45m'
    },
    price: {
      base: 649,
      taxes: 78,
      fees: 25,
      total: 752
    }
  };

  const toggleUpgrade = (upgrade) => {
    if (selectedUpgrades.includes(upgrade)) {
      setSelectedUpgrades(selectedUpgrades.filter(item => item !== upgrade));
    } else {
      setSelectedUpgrades([...selectedUpgrades, upgrade]);
    }
  };

  const extraCost = selectedUpgrades.reduce((sum, upgrade) => {
    if (upgrade === 'seat') return sum + 45;
    if (upgrade === 'insurance') return sum + 35;
    if (upgrade === 'baggage') return sum + 60;
    return sum;
  }, 0);

  const totalWithUpgrades = parseFloat(flightDetails.price.total) + extraCost;
  const [focusedField, setFocusedField] = useState(null);

  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient */}
              <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
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
                }}>Passengers</h1>
            <br></br>
          </div>
        </div>

        {/* Required CSS animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes floatReverse {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(20px);
            }
          }
          
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      
      {/* Progress steps */}
     
    <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100 animate-slideUp">
    <div className="flex items-center justify-between max-w-3xl mx-auto">
      <div className="flex flex-col items-center animate-slideInFromBottom" style={{ animationDelay: '0.1s' }}>
        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold transition-all duration-500 transform hover:scale-110">
          {activeSection !== 'flight-selection' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-fadeIn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : '1'}
        </div>
        <div className="text-sm mt-2 font-medium text-gray-700">Flight Selection</div>
      </div>
      <div className="h-1 flex-1 bg-indigo-600 mx-2 relative overflow-hidden animate-scaleX" style={{ animationDelay: '0.2s' }}>
        {activeSection === 'flight-selection' && (
          <div className="absolute inset-0 bg-gray-200 animate-progressRight"></div>
        )}
      </div>

      <div className="flex flex-col items-center animate-slideInFromBottom" style={{ animationDelay: '0.3s' }}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${activeSection === 'passenger-details' || activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600 text-white animate-pulse' : 'bg-gray-200 text-gray-600'}`}>
          {(activeSection === 'payment-details' || activeSection === 'review') ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-fadeIn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : '2'}
        </div>
        <div className="text-sm mt-2 font-medium text-gray-700">Passenger Details</div>
      </div>

      <div className={`h-1 flex-1 mx-2 relative overflow-hidden animate-scaleX ${activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ animationDelay: '0.4s' }}>
        {activeSection === 'passenger-details' && (
          <div className="absolute inset-0 bg-indigo-600 animate-progressLeft"></div>
        )}
      </div>

      <div className="flex flex-col items-center animate-slideInFromBottom" style={{ animationDelay: '0.5s' }}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600 text-white animate-pulse' : 'bg-gray-200 text-gray-600'}`}>
          {activeSection === 'review' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-fadeIn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : '3'}
        </div>
        <div className="text-sm mt-2 font-medium text-gray-700">Payment</div>
      </div>

      <div className={`h-1 flex-1 mx-2 relative overflow-hidden animate-scaleX ${activeSection === 'review' ? 'bg-indigo-600' : 'bg-gray-200'}`} style={{ animationDelay: '0.6s' }}>
        {activeSection === 'payment-details' && (
          <div className="absolute inset-0 bg-indigo-600 animate-progressLeft"></div>
        )}
      </div>

      <div className="flex flex-col items-center animate-slideInFromBottom" style={{ animationDelay: '0.7s' }}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${activeSection === 'review' ? 'bg-indigo-600 text-white animate-bounce' : 'bg-gray-200 text-gray-600'}`}>
          4
        </div>
        <div className="text-sm mt-2 font-medium text-gray-700">Confirmation</div>
      </div>
    </div>
  </div>
  <style jsx>{`
    @keyframes progressLeft {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    
    @keyframes progressRight {
      from { transform: translateX(0); }
      to { transform: translateX(100%); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInFromBottom {
      from { 
        opacity: 0;
        transform: translateY(20px); 
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleX {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    
    .animate-progressLeft {
      animation: progressLeft 0.6s ease-out forwards;
    }
    
    .animate-progressRight {
      animation: progressRight 0.6s ease-out forwards;
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.4s ease-out forwards;
    }
    
    .animate-slideInFromBottom {
      animation: slideInFromBottom 0.5s ease-out forwards;
    }
    
    .animate-slideUp {
      animation: slideUp 0.5s ease-out forwards;
    }
    
    .animate-scaleX {
      transform-origin: left;
      animation: scaleX 0.5s ease-out forwards;
    }
    
    .animate-pulse {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .animate-bounce {
      animation: bounce 1s infinite;
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
  `}</style>
</div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Passenger forms */}
          <div className="md:w-2/3">
            {activeSection === 'passenger-details' && (
              <>
                 <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center animate-fadeIn">
        <Users className="h-6 w-6 mr-3 text-indigo-600" />
        Passenger Details
      </h2>
      
      {/* Contact information */}
      <div className="mb-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100 animate-slideDown">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Mail className="h-5 w-5 mr-2 text-indigo-600" />
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address*</label>
            <div className="relative">
              <Mail className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                value={contactDetails.email}
                onChange={(e) => handleContactChange('email', e.target.value)}
                className="w-full border-2 rounded-lg pl-10 p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
          <div className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number*</label>
            <div className="relative">
              <Phone className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
              <input
                type="tel"
                value={contactDetails.phone}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                className="w-full border-2 rounded-lg pl-10 p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <input
            type="checkbox"
            id="saveDetails"
            checked={contactDetails.saveDetails}
            onChange={(e) => handleContactChange('saveDetails', e.target.checked)}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="saveDetails" className="ml-3 text-gray-700">Save these details for future bookings</label>
        </div>
      </div>
      
      {/* Passenger cards */}
      {passengers.map((passenger, index) => (
        <div 
          key={passenger.id} 
          className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 animate-slideIn"
          style={{animationDelay: `${0.2 * (index + 1)}s`}}
        >
          <div
            className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${expandedPassenger === passenger.id ? 'bg-indigo-50 border-b border-indigo-100' : 'bg-white hover:bg-gray-50'}`}
            onClick={() => toggleExpand(passenger.id)}
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${expandedPassenger === passenger.id ? 'bg-indigo-600' : 'bg-indigo-100'} mr-3 transition-colors duration-300`}>
                <User className={`h-5 w-5 ${expandedPassenger === passenger.id ? 'text-white' : 'text-indigo-600'} transition-colors duration-300`} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">
                  {passenger.type === 'adult' ? 'Adult' : 'Child'} Passenger {index + 1}
                </div>
                {passenger.firstName && passenger.lastName ? (
                  <div className="text-indigo-600 text-sm font-medium">{passenger.title}. {passenger.firstName} {passenger.lastName}</div>
                ) : (
                  <div className="text-gray-500 text-sm">No name provided</div>
                )}
              </div>
            </div>
            <div className="flex items-center">
              {index > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); removePassenger(passenger.id); }}
                  className="mr-3 p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                >
                  <UserMinus className="h-5 w-5" />
                </button>
              )}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                {expandedPassenger === passenger.id ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600 animate-bounce" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </div>
            </div>
          </div>
          
          {expandedPassenger === passenger.id && (
            <div className="p-6 bg-white animate-expandDown">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="animate-fadeIn" style={{animationDelay: '0.1s'}}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title*</label>
                  <select
                    value={passenger.title}
                    onChange={(e) => handlePassengerChange(passenger.id, 'title', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                  >
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Dr">Dr</option>
                  </select>
                </div>
                <div className="animate-fadeIn" style={{animationDelay: '0.2s'}}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
                  <input
                    type="text"
                    value={passenger.firstName}
                    onChange={(e) => handlePassengerChange(passenger.id, 'firstName', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="animate-fadeIn" style={{animationDelay: '0.3s'}}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
                  <input
                    type="text"
                    value={passenger.lastName}
                    onChange={(e) => handlePassengerChange(passenger.id, 'lastName', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-indigo-600" />
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    value={passenger.dob}
                    onChange={(e) => handlePassengerChange(passenger.id, 'dob', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div className="animate-fadeIn" style={{animationDelay: '0.5s'}}>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Globe className="h-4 w-4 mr-1 text-indigo-600" />
                    Nationality*
                  </label>
                  <select
                    value={passenger.nationality}
                    onChange={(e) => handlePassengerChange(passenger.id, 'nationality', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                  >
                    <option value="">Select nationality</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="JP">Japan</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="animate-fadeIn" style={{animationDelay: '0.6s'}}>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    Passport Number*
                  </label>
                  <input
                    type="text"
                    value={passenger.passportNumber}
                    onChange={(e) => handlePassengerChange(passenger.id, 'passportNumber', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder="P1234567"
                    required
                  />
                </div>
                <div className="animate-fadeIn" style={{animationDelay: '0.7s'}}>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-indigo-600" />
                    Passport Expiry Date*
                  </label>
                  <input
                    type="date"
                    value={passenger.passportExpiry}
                    onChange={(e) => handlePassengerChange(passenger.id, 'passportExpiry', e.target.value)}
                    className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-800 text-sm animate-fadeIn" style={{animationDelay: '0.8s'}}>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p>
                    Please ensure all names match your passport exactly. Discrepancies may result in boarding issues or additional fees.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      
      {/* Add passenger buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          onClick={() => addPassenger('adult')}
          className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow animate-pulseButton"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Add Adult
        </button>
        <button
          onClick={() => addPassenger('child')}
          className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow animate-pulseButton"
          style={{animationDelay: '0.2s'}}
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Add Child (2-11)
        </button>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes expandDown {
          from { 
            opacity: 0;
            max-height: 0;
          }
          to { 
            opacity: 1;
            max-height: 1000px;
          }
        }
        
        @keyframes pulseButton {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animate-expandDown {
          animation: expandDown 0.4s ease-out forwards;
          overflow: hidden;
        }
        
        .animate-pulseButton {
          animation: pulseButton 2s infinite;
        }
        
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </div>
                
                <div className="flex justify-end mt-8">
      <button
        onClick={goToNextSection}
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center group"
      >
        {/* Animated background shine effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        
        {/* Button text */}
        <span className="relative z-10">Continue to Payment</span>
        
        {/* Arrow icon */}
        <ChevronRight className="relative z-10 h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-200" />
      </button>
    </div>
              </>
            )}
            
            {activeSection === 'payment-details' && (
              <>
              
                <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100 transform transition-all duration-300 hover-shadow-lg">
                  
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <CreditCard className="h-6 w-6 mr-3 text-indigo-600 transition-transform duration-300 hover-scale" />
          <span className="relative hover-underline">
            Payment Information
          </span>
        </h2>
        
        {/* Card information */}
        <div className="mb-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100 transition-all duration-300 hover-border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-indigo-600 transition-transform duration-300 group-hover-rotate" />
            Credit Card Information
          </h3>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Card Number*</label>
            <div className="relative">
              <CreditCard className={`h-5 w-5 absolute left-3 top-3.5 transition-colors duration-300 ${focusedField === 'cardNumber' ? 'text-indigo-600' : 'text-gray-400'}`} />
              <input
                type="text"
                className="w-full border-2 rounded-lg pl-10 p-3 bg-white border-gray-200 input-hover input-focus"
                placeholder="1234 5678 9012 3456"
                required
                onFocus={() => setFocusedField('cardNumber')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Expiration Date*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 input-hover input-focus"
                placeholder="MM/YY"
                required
                onFocus={() => setFocusedField('expDate')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">CVV*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 input-hover input-focus"
                placeholder="123"
                required
                onFocus={() => setFocusedField('cvv')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Cardholder Name*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 input-hover input-focus"
                placeholder="John Doe"
                required
                onFocus={() => setFocusedField('cardholderName')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          
          <div className="flex items-center bg-white p-3 rounded-lg border border-green-100 transition-all duration-300 hover-secure group">
            <ShieldCheck className="h-5 w-5 text-green-500 mr-3 transition-transform duration-300 group-hover-scale" />
            <p className="text-sm text-gray-700">Your payment information is encrypted and secure</p>
          </div>
        </div>
        
        {/* Billing address */}
        <div className="transition-opacity duration-300 hover-opacity">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Landmark className="h-5 w-5 mr-2 text-indigo-600 transition-transform duration-300 hover-scale" />
            Billing Address
          </h3>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Street Address*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
                placeholder="123 Main St"
                required
                onFocus={() => setFocusedField('street')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Apartment, suite, etc. (optional)</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
                placeholder="Apt 4B"
                onFocus={() => setFocusedField('apt')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md-grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">City*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
                placeholder="New York"
                required
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">State/Province*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
                placeholder="NY"
                required
                onFocus={() => setFocusedField('state')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Zip/Postal Code*</label>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
                placeholder="10001"
                required
                onFocus={() => setFocusedField('zip')}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200">Country*</label>
            <select
              className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 input-hover input-focus"
              onFocus={() => setFocusedField('country')}
              onBlur={() => setFocusedField(null)}
            >
              <option value="">Select country</option>
              <option value="IN">India</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="JP">Japan</option>
            </select>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Card hover animation */
        .hover-shadow-lg:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }
        
        /* Title underline animation */
        .hover-underline:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background-color: rgb(199, 210, 254); /* indigo-200 */
          width: 0;
          transition: width 0.3s ease;
        }
        
        .hover-underline:hover:after {
          width: 100%;
        }
        
        /* Card icon animation */
        .hover-scale:hover {
          transform: scale(1.1);
        }
        
        /* Card section border animation */
        .hover-border:hover {
          border-color: rgb(165, 180, 252); /* indigo-300 */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        /* Secure message animation */
        .hover-secure:hover {
          border-color: rgb(134, 239, 172); /* green-300 */
        }
        
        /* Icon rotation animation */
        .group:hover .group-hover-rotate {
          transform: rotate(12deg);
        }
        
        /* Input field animations */
        .input-hover:hover {
          border-color: rgb(99, 102, 241); /* indigo-500 */
        }
        
        .input-focus:focus {
          border-color: rgb(99, 102, 241); /* indigo-500 */
          box-shadow: 0 0 0 3px rgba(199, 210, 254, 0.5); /* indigo-200 with opacity */
          outline: none;
        }
        
        /* Billing section animation */
        .hover-opacity {
          opacity: 0.9;
        }
        
        .hover-opacity:hover {
          opacity: 1;
        }
        
        /* Grid responsiveness */
        .md-grid-cols-2 {
          display: grid;
          grid-template-columns: 1fr;
        }
        
        .md-grid-cols-3 {
          display: grid;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
          .md-grid-cols-2 {
            grid-template-columns: 1fr 1fr;
          }
          
          .md-grid-cols-3 {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        
        /* Add subtle pulse animation to the security icon */
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .group:hover .group-hover-scale {
          animation: pulse 2s infinite;
        }
        
        /* Add subtle fade-in animation when the component mounts */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .bg-white {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Add focus animation for inputs */
        input:focus, select:focus {
          animation: focusGlow 1.5s infinite alternate;
        }
        
        @keyframes focusGlow {
          from { box-shadow: 0 0 0 2px rgba(199, 210, 254, 0.3); }
          to { box-shadow: 0 0 0 4px rgba(199, 210, 254, 0.5); }
        }
      `}</style>
                
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 w-full">
      <button
        onClick={goToPreviousSection}
        className="back-button bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg font-semibold transition-all duration-200 shadow-sm flex items-center justify-center"
      >
        <ChevronLeft className="h-5 w-5 mr-2" />
        Back to Passengers
      </button>
      <button
        onClick={goToNextSection}
        className="next-button bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-200 shadow-md flex items-center justify-center"
      >
        Review Order
        <ChevronRight className="h-5 w-5 ml-2" />
      </button>
    </div>

      <style jsx>{`
        /* Back button animations */
        .back-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .back-button:hover {
          background-color: rgba(238, 242, 255, 0.8); /* Light indigo color */
          transform: translateX(-3px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .back-button:active {
          transform: translateX(-1px) scale(0.98);
        }
        
        .back-button::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: -100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: all 0.5s ease;
        }
        
        .back-button:hover::after {
          left: 100%;
        }
        
        /* Next button animations */
        .next-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          background-size: 200% auto;
        }
        
        .next-button:hover {
          background-position: right center;
          transform: translateY(-2px) translateX(3px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .next-button:active {
          transform: translateY(0) translateX(1px) scale(0.98);
        }
        
        .next-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: all 0.6s ease;
        }
        
        .next-button:hover::before {
          transform: translateX(100%);
        }
        
        /* Chevron icon animations */
        .back-button:hover .chevron-icon {
          transform: translateX(-5px) rotate(90deg);
          transition: transform 0.3s ease;
        }
        
        .next-button:hover .chevron-icon {
          transform: translateX(5px) rotate(270deg);
          transition: transform 0.3s ease;
        }
        
        /* Initial animation on load */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .flex {
          animation: fadeIn 0.5s ease-out;
        }
        
        /* Pulse animation on hover */
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.2); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
        
        .back-button:hover {
          animation: pulse 1.5s infinite;
        }
        
        /* Glow animation for next button */
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(79, 70, 229, 0.5); }
          50% { box-shadow: 0 0 20px rgba(79, 70, 229, 0.5); }
          100% { box-shadow: 0 0 5px rgba(79, 70, 229, 0.5); }
        }
        
        .next-button:hover {
          animation: glow 1.5s infinite;
        }
        
        /* Focus styles for accessibility */
        .back-button:focus, .next-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.5);
        }
      `}</style>
              </>
            )}
            
            {activeSection === 'review' && (
              <>
                <div className={`review-container ${isVisible ? 'visible' : ''}`}>
      <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
        <h2 className="title-container text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 mr-3 text-indigo-600 icon-pulse" />
          Review Your Booking
        </h2>
        
        {/* Passenger Summary */}
        <div className="section-container mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Passenger Information</h3>
          {passengers.map((passenger, index) => (
            <div key={passenger.id} className="passenger-item mb-4 last:mb-0">
              <div className="flex items-start">
                <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <User className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    {passenger.type === 'adult' ? 'Adult' : 'Child'} {index + 1}: {passenger.title}. {passenger.firstName} {passenger.lastName}
                  </h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <p>Passport: {passenger.passportNumber} • Nationality: {passenger.nationality}</p>
                    <p>Date of Birth: {passenger.dob} • Passport Expires: {passenger.passportExpiry}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="section-container mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Contact Information</h3>
          <div className="contact-item flex items-start">
            <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <Mail className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-900">{contactDetails.email}</p>
              <p className="text-sm text-gray-600 mt-1">All booking confirmations and updates will be sent to this email</p>
            </div>
          </div>
          <div className="contact-item flex items-start mt-4">
            <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <Phone className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-900">{contactDetails.phone}</p>
              <p className="text-sm text-gray-600 mt-1">For urgent communication regarding your flight</p>
            </div>
          </div>
        </div>
        
        {/* Payment Method */}
        <div className="section-container mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Payment Method</h3>
          <div className="payment-item flex items-start">
            <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <CreditCard className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <p className="text-gray-900">Credit Card ending in •••• 3456</p>
              <p className="text-sm text-gray-600 mt-1">Billing address: 123 Main St, New York, NY 10001, US</p>
            </div>
          </div>
        </div>
        
        {/* Booking terms */}
        <div className="notice-container bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5 icon-attention" />
            <div>
              <h4 className="font-medium text-amber-800 mb-1">Important Information</h4>
              <p className="text-sm text-amber-700">
                By clicking "Confirm and Pay", you agree to our <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">Terms and Conditions</a> and <a href="#" className="text-indigo-600 hover:text-indigo-800 underline">Privacy Policy</a>. 
                Please review all passenger details and flight information before confirming.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .review-container {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .review-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .title-container {
          position: relative;
          padding-left: 2px;
          transform: translateY(-5px);
          opacity: 0;
          animation: slideDown 0.4s ease-out 0.2s forwards;
        }
        
        .section-container {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .section-container:nth-child(2) {
          animation-delay: 0.3s;
        }
        
        .section-container:nth-child(3) {
          animation-delay: 0.5s;
        }
        
        .section-container:nth-child(4) {
          animation-delay: 0.7s;
        }
        
        .passenger-item, .contact-item, .payment-item {
          opacity: 0;
          transform: translateX(-10px);
          animation: slideRight 0.4s ease-out forwards;
        }
        
        .passenger-item:nth-child(2) {
          animation-delay: 0.4s;
        }
        
        .passenger-item:nth-child(3) {
          animation-delay: 0.5s;
        }
        
        .passenger-item:nth-child(4) {
          animation-delay: 0.6s;
        }
        
        .contact-item:nth-child(2) {
          animation-delay: 0.6s;
        }
        
        .contact-item:nth-child(3) {
          animation-delay: 0.7s;
        }
        
        .payment-item {
          animation-delay: 0.8s;
        }
        
        .notice-container {
          opacity: 0;
          transform: scale(0.95);
          animation: scaleIn 0.4s ease-out 0.9s forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        :global(.icon-pulse) {
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        :global(.icon-attention) {
          animation: attention 2s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes attention {
          0%, 100% {
            transform: translateY(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateY(-1px);
          }
          20%, 40%, 60%, 80% {
            transform: translateY(1px);
          }
        }
        
        :global(a) {
          position: relative;
          transition: all 0.2s ease;
        }
        
        :global(a:hover) {
          text-decoration: none;
        }
        
        :global(a:hover::after) {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #4f46e5;
          animation: linkUnderline 0.3s ease-out forwards;
        }
        
        @keyframes linkUnderline {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
                
                <div className="action-buttons flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
      <button
        onClick={goToPreviousSection}
        className="back-button w-full sm:w-auto bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center"
      >
        <ChevronDown className="h-5 w-5 mr-2 rotate-90 icon-back" />
        Back to Payment
      </button>
      
      <Link to='/confirmation'>
      <button
        className="confirm-button w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
      >
        Confirm and Pay ${flightDetails.price.total}
        <CheckCircle className="h-5 w-5 ml-2 icon-check" />
      </button>
      </Link>
      
      <style jsx>{`
        .action-buttons {
          opacity: 0;
          animation: fadeIn 0.5s ease-out 1s forwards;
        }
        
        .back-button, .confirm-button {
          position: relative;
          overflow: hidden;
        }
        
        .back-button::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background-color: rgba(79, 70, 229, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.4s ease-out;
          z-index: 0;
          pointer-events: none;
        }
        
        .back-button:hover::after {
          transform: translate(-50%, -50%) scale(2);
        }
        
        .confirm-button {
          animation: subtlePulse 3s infinite ease-in-out;
          position: relative;
        }
        
        .confirm-button::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #10b981, #059669, #047857, #059669, #10b981);
          background-size: 400% 400%;
          z-index: -1;
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease-out;
          animation: moveGradient 3s ease infinite;
        }
        
        .confirm-button:hover::before {
          opacity: 1;
        }
        
        @media (max-width: 640px) {
          .action-buttons {
            width: 100%;
          }
          
          .back-button, .confirm-button {
            width: 100%;
            justify-content: center;
            margin-bottom: 0.5rem;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes subtlePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        :global(.icon-back) {
          transition: transform 0.3s ease-out;
        }
        
        :global(.back-button:hover .icon-back) {
          transform: translateX(-3px) rotate(90deg);
        }
        
        :global(.icon-check) {
          opacity: 1;
          transition: all 0.3s ease-out;
        }
        
        :global(.confirm-button:hover .icon-check) {
          transform: scale(1.2);
          animation: checkBounce 0.5s ease-in-out;
        }
        
        @keyframes checkBounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
              </>
            )}
          </div>
          
          {/* Right column - Flight summary */}
          <div className={`md:w-1/3 summary-container ${isVisible ? 'visible' : ''}`}>
      <div className="bg-white rounded-xl shadow-md border border-gray-100 sticky top-6">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 summary-title">Your Trip Summary</h3>
          
          {/* Outbound flight */}
          <div className="mb-6 flight-section outbound">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600">Outbound Flight</span>
              <span className="text-xs text-gray-500">{flightDetails.outbound.flightNumber}</span>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-lg font-bold text-gray-800">{flightDetails.outbound.departureTime}</div>
                <div className="text-xs text-gray-500">{flightDetails.outbound.departureDate}</div>
              </div>
              
              <div className="flex-1 px-3 py-2">
                <div className="relative flex items-center justify-between flight-path">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 flight-dot-start"></div>
                  <div className="flight-line flex-1 h-0.5 bg-gray-300 mx-1 relative">
                    <div className="absolute -top-6 w-full text-xs text-gray-500 text-center">
                      {flightDetails.outbound.duration}
                    </div>
                    <div className="flight-plane-icon"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600 flight-dot-end"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{flightDetails.outbound.departureAirport}</span>
                  <span className="text-xs text-gray-500">{flightDetails.outbound.arrivalAirport}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-gray-800">{flightDetails.outbound.arrivalTime}</div>
                <div className="text-xs text-gray-500">{flightDetails.outbound.departureDate}</div>
              </div>
            </div>
            
            <div className="mt-2 text-xs text-gray-600">
              {flightDetails.outbound.airline} • Direct Flight
            </div>
          </div>
          
          {/* Divider */}
          <div className="relative py-4 divider-section">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-xs text-gray-500">Return</span>
            </div>
          </div>
          
          {/* Inbound flight */}
          <div className="flight-section inbound">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600">Inbound Flight</span>
              <span className="text-xs text-gray-500">{flightDetails.inbound.flightNumber}</span>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-lg font-bold text-gray-800">{flightDetails.inbound.departureTime}</div>
                <div className="text-xs text-gray-500">{flightDetails.inbound.departureDate}</div>
              </div>
              
              <div className="flex-1 px-3 py-2">
                <div className="relative flex items-center justify-between flight-path">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 flight-dot-start"></div>
                  <div className="flight-line flex-1 h-0.5 bg-gray-300 mx-1 relative">
                    <div className="absolute -top-6 w-full text-xs text-gray-500 text-center">
                      {flightDetails.inbound.duration}
                    </div>
                    <div className="flight-plane-icon return"></div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600 flight-dot-end"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{flightDetails.inbound.departureAirport}</span>
                  <span className="text-xs text-gray-500">{flightDetails.inbound.arrivalAirport}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-gray-800">{flightDetails.inbound.arrivalTime}</div>
                <div className="text-xs text-gray-500">{flightDetails.inbound.departureDate}</div>
              </div>
            </div>
            
            <div className="mt-2 text-xs text-gray-600">
              {flightDetails.inbound.airline} • Direct Flight
            </div>
          </div>
        </div>
        
        {/* Fare details */}
        <div className="p-6 price-section">
          <h3 className="text-lg font-bold text-gray-800 mb-4 price-title">Price Details</h3>
          
          <div className="space-y-3 mb-4 price-breakdown">
            <div className="flex justify-between text-sm price-item">
              <span className="text-gray-600">Base fare ({passengers.length} passengers)</span>
              <span className="text-gray-800 font-medium">${flightDetails.price.base}</span>
            </div>
            <div className="flex justify-between text-sm price-item">
              <span className="text-gray-600">Taxes</span>
              <span className="text-gray-800 font-medium">${flightDetails.price.taxes}</span>
            </div>
            <div className="flex justify-between text-sm price-item">
              <span className="text-gray-600">Fees & surcharges</span>
              <span className="text-gray-800 font-medium">${flightDetails.price.fees}</span>
            </div>
            {extraCost > 0 && (
              <div className="flex justify-between text-sm price-item upgrade-cost">
                <span className="text-gray-600">Selected upgrades</span>
                <span className="text-indigo-600 font-medium">+${extraCost}</span>
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t border-gray-200 total-price">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900 text-xl">${totalWithUpgrades.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">All prices are in USD</p>
          </div>
          
          {/* Baggage allowance */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200 baggage-section">
            <h4 className="font-medium text-gray-800 mb-2">Baggage Allowance</h4>
            <div className="flex items-start space-x-4 text-sm">
              <div>
                <p className="font-medium">Checked</p>
                <p className="text-gray-600">1 × 23kg per person</p>
              </div>
              <div>
                <p className="font-medium">Cabin</p>
                <p className="text-gray-600">1 × 7kg per person</p>
              </div>
            </div>
          </div>
          
          {/* Upgrades */}
          <div className="mt-6 upgrades-section">
            <h4 className="font-medium text-gray-800 mb-3">Add to Your Trip</h4>
            <div className="space-y-3">
              <div 
                className={`upgrade-item flex items-center rounded-lg border p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedUpgrades.includes('seat') ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                onClick={() => toggleUpgrade('seat')}
              >
                <input 
                  type="checkbox" 
                  checked={selectedUpgrades.includes('seat')}
                  onChange={() => toggleUpgrade('seat')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" 
                />
                <div>
                  <p className="font-medium text-gray-800">Premium Seat Selection</p>
                  <p className="text-xs text-gray-600">Extra legroom, priority boarding</p>
                </div>
                <div className="ml-auto font-medium text-indigo-600">+$45</div>
              </div>
              <div 
                className={`upgrade-item flex items-center rounded-lg border p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedUpgrades.includes('insurance') ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                onClick={() => toggleUpgrade('insurance')}
              >
                <input 
                  type="checkbox" 
                  checked={selectedUpgrades.includes('insurance')} 
                  onChange={() => toggleUpgrade('insurance')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" 
                />
                <div>
                  <p className="font-medium text-gray-800">Travel Insurance</p>
                  <p className="text-xs text-gray-600">Trip cancellation & medical coverage</p>
                </div>
                <div className="ml-auto font-medium text-indigo-600">+$35</div>
              </div>
              <div 
                className={`upgrade-item flex items-center rounded-lg border p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors ${selectedUpgrades.includes('baggage') ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'}`}
                onClick={() => toggleUpgrade('baggage')}
              >
                <input 
                  type="checkbox" 
                  checked={selectedUpgrades.includes('baggage')}
                  onChange={() => toggleUpgrade('baggage')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" 
                />
                <div>
                  <p className="font-medium text-gray-800">Extra Baggage</p>
                  <p className="text-xs text-gray-600">Add another 23kg checked bag</p>
                </div>
                <div className="ml-auto font-medium text-indigo-600">+$60</div>
              </div>
            </div>
          </div>
          
          {/* Promotion code */}
          <div className="mt-6 promo-section">
            <label className="block text-sm font-medium text-gray-700 mb-2">Promotion Code</label>
            <div className="flex">
              <input
                type="text"
                className="w-full border-2 rounded-l-lg p-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button className="promo-btn bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
        
        {/* Customer support */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl support-section">
          <div className="flex items-start">
            <div className="support-icon bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
              <HelpCircle className="h-4 w-4 text-indigo-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Need help?</p>
              <p className="text-sm text-gray-600 mt-1">Our support team is available 24/7</p>
              <a href="#" className="support-link text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2 inline-block">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .summary-container {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .summary-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .summary-title {
          animation: fadeSlideIn 0.5s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
          transform: translateY(-10px);
        }
        
        .flight-section {
          opacity: 0;
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        
        .flight-section.outbound {
          animation-delay: 0.3s;
        }
        
        .divider-section {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .flight-section.inbound {
          animation-delay: 0.6s;
        }
        
        .price-section {
          opacity: 0;
          animation: fadeSlideUp 0.5s ease-out forwards;
          animation-delay: 0.8s;
        }
        
        .price-title {
          opacity: 0;
          animation: fadeIn 0.4s ease-out forwards;
          animation-delay: 0.9s;
        }
        
        .price-breakdown .price-item {
          opacity: 0;
          animation: fadeSlideRight 0.4s ease-out forwards;
        }
        
        .price-breakdown .price-item:nth-child(1) {
          animation-delay: 1.0s;
        }
        
        .price-breakdown .price-item:nth-child(2) {
          animation-delay: 1.1s;
        }
        
        .price-breakdown .price-item:nth-child(3) {
          animation-delay: 1.2s;
        }
        
        .price-breakdown .upgrade-cost {
          animation-delay: 0.2s;
        }
        
        .total-price {
          opacity: 0;
          animation: pulseFadeIn 0.6s ease-out forwards;
          animation-delay: 1.3s;
        }
        
        .baggage-section {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 1.4s;
          transition: all 0.3s ease;
        }
        
        .baggage-section:hover {
          border-color: #e0e7ff;
          box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
        }
        
        .upgrades-section {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 1.5s;
        }
        
        .upgrade-item {
          opacity: 0;
          transform: translateX(-10px);
          animation: fadeSlideRight 0.4s ease-out forwards;
          transition: all 0.2s ease-out;
        }
        
        .upgrade-item:nth-child(1) {
          animation-delay: 1.6s;
        }
        
        .upgrade-item:nth-child(2) {
          animation-delay: 1.7s;
        }
        
        .upgrade-item:nth-child(3) {
          animation-delay: 1.8s;
        }
        
        .upgrade-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .promo-section {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 1.9s;
        }
        
        .promo-btn {
          position: relative;
          overflow: hidden;
        }
        
        .promo-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0;
          border-radius: 100%;
          transform: scale(1, 1) translate(-50%);
          transform-origin: 50% 50%;
        }
        
        .promo-btn:hover::after {
          animation: ripple 1s ease-out;
        }
        
        .support-section {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: 2s;
        }
        
        .support-icon {
          animation: pulse 2s infinite ease-in-out;
          animation-delay: 2.5s;
        }
        
        .support-link {
          position: relative;
          display: inline-block;
        }
        
        .support-link::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4f46e5;
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        
        .support-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
        
        /* Flight path animations */
        .flight-path {
          position: relative;
        }
        
        .flight-line {
          position: relative;
          overflow: hidden;
        }
        
        .flight-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #4f46e5;
          animation: progressLine 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }
        
        .flight-section.outbound .flight-line::before {
          animation-delay: 0.5s;
        }
        
        .flight-section.inbound .flight-line::before {
          animation-delay: 0.8s;
        }
        
        .flight-dot-start, .flight-dot-end {
          opacity: 0;
          animation: popIn 0.4s ease-out forwards;
        }
        
        .flight-section.outbound .flight-dot-start {
          animation-delay: 0.3s;
        }
        
        .flight-section.outbound .flight-dot-end {
          animation-delay: 1.8s;
        }
        
        .flight-section.inbound .flight-dot-start {
          animation-delay: 0.6s;
        }
        
        .flight-section.inbound .flight-dot-end {
          animation-delay: 2.1s;
        }
        
        .flight-plane-icon {
          position: absolute;
          top: -4px;
          left: 0;
          width: 12px;
          height: 8px;
          background-color: #4f46e5;
          opacity: 0;
          clip-path: polygon(0% 50%, 15% 0%, 100% 50%, 15% 100%);
          animation: flyPlane 1.5s ease-out forwards;
        }
        
        .flight-section.outbound .flight-plane-icon {
          animation-delay: 0.5s;
        }
        
        .flight-section.inbound .flight-plane-icon {
          animation-delay: 0.8s;
        }
        
        .flight-plane-icon.return {
          transform: scaleX(-1);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          70% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes progressLine {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        @keyframes flyPlane {
          0% {
            opacity: 0;
            left: 0%;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            left: 100%;
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          70% {
            opacity: 1;
            transform: scale(1.3);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0, 0);
            opacity: 0.5;
          }
          20% {
            transform: scale(25, 25);
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: scale(40, 40);
          }
        }
        
        /* Responsive adjustments for mobile */
        @media (max-width: 768px) {
          .summary-container {
            width: 100%;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Passengers;