import React, { useState } from 'react';
import { User, Users, UserPlus, UserMinus, CreditCard, Mail, Phone, Landmark, ShieldCheck, ChevronDown, ChevronUp, HelpCircle, CheckCircle, Calendar, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Passenger = () => {
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
  
  // Flight details (mockup)
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
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto relative">
          <h1 className="text-4xl font-bold mb-3 text-white text-center">Passengers</h1>
          <br></br>
        </div>
      </div>
      
      {/* Progress steps */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">1</div>
              <div className="text-sm mt-2 font-medium text-gray-700">Flight Selection</div>
            </div>
            <div className="h-1 flex-1 bg-indigo-600 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${activeSection === 'passenger-details' || activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-semibold`}>2</div>
              <div className="text-sm mt-2 font-medium text-gray-700">Passenger Details</div>
            </div>
            <div className={`h-1 flex-1 mx-2 ${activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${activeSection === 'payment-details' || activeSection === 'review' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-semibold`}>3</div>
              <div className="text-sm mt-2 font-medium text-gray-700">Payment</div>
            </div>
            <div className={`h-1 flex-1 mx-2 ${activeSection === 'review' ? 'bg-indigo-600' : 'bg-gray-200'}`}></div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full ${activeSection === 'review' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} flex items-center justify-center font-semibold`}>4</div>
              <div className="text-sm mt-2 font-medium text-gray-700">Confirmation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Passenger forms */}
          <div className="md:w-2/3">
            {activeSection === 'passenger-details' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-indigo-600" />
                    Passenger Details
                  </h2>
                  
                  {/* Contact information */}
                  <div className="mb-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-indigo-600" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
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
                      <div>
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
                    <div className="mt-4 flex items-center">
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
                    <div key={passenger.id} className="mb-6 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div
                        className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${expandedPassenger === passenger.id ? 'bg-indigo-50 border-b border-indigo-100' : 'bg-white hover:bg-gray-50'}`}
                        onClick={() => toggleExpand(passenger.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${expandedPassenger === passenger.id ? 'bg-indigo-600' : 'bg-indigo-100'} mr-3`}>
                            <User className={`h-5 w-5 ${expandedPassenger === passenger.id ? 'text-white' : 'text-indigo-600'}`} />
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
                              <ChevronUp className="h-5 w-5 text-indigo-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-indigo-600" />
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {expandedPassenger === passenger.id && (
                        <div className="p-6 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
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
                            <div>
                              <label className=" text-sm font-medium text-gray-700 mb-2 flex items-center">
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
                            <div>
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
                            <div>
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
                          
                          <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100 text-blue-800 text-sm">
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
                      className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow"
                    >
                      <UserPlus className="h-5 w-5 mr-2" />
                      Add Adult
                    </button>
                    <button
                      onClick={() => addPassenger('child')}
                      className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow"
                    >
                      <UserPlus className="h-5 w-5 mr-2" />
                      Add Child (2-11)
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={goToNextSection}
                    className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
                  >
                    Continue to Payment
                    <ChevronDown className="h-5 w-5 ml-2 rotate-270" />
                  </button>
                </div>
              </>
            )}
            
            {activeSection === 'payment-details' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <CreditCard className="h-6 w-6 mr-3 text-indigo-600" />
                    Payment Information
                  </h2>
                  
                  {/* Card information */}
                  <div className="mb-8 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-indigo-600" />
                      Credit Card Information
                    </h3>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number*</label>
                      <div className="relative">
                        <CreditCard className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg pl-10 p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="123"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center bg-white p-3 rounded-lg border border-green-100">
                      <ShieldCheck className="h-5 w-5 text-green-500 mr-3" />
                      <p className="text-sm text-gray-700">Your payment information is encrypted and secure</p>
                    </div>
                  </div>
                  
                  {/* Billing address */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Landmark className="h-5 w-5 mr-2 text-indigo-600" />
                      Billing Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="123 Main St"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Apartment, suite, etc. (optional)</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="Apt 4B"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="New York"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State/Province*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="NY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Zip/Postal Code*</label>
                        <input
                          type="text"
                          className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                          placeholder="10001"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country*</label>
                      <select
                       className="w-full border-2 rounded-lg p-3 bg-gray-50 border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
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
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={goToPreviousSection}
                    className="bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow flex items-center"
                  >
                    <ChevronDown className="h-5 w-5 mr-2 rotate-90" />
                    Back to Passengers
                  </button>
                  <button
                    onClick={goToNextSection}
                    className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
                  >
                    Review Order
                    <ChevronDown className="h-5 w-5 ml-2 rotate-270" />
                  </button>
                </div>
              </>
            )}
            
            {activeSection === 'review' && (
              <>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3 text-indigo-600" />
                    Review Your Booking
                  </h2>
                  
                  {/* Passenger Summary */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Passenger Information</h3>
                    {passengers.map((passenger, index) => (
                      <div key={passenger.id} className="mb-4 last:mb-0">
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
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Contact Information</h3>
                    <div className="flex items-start">
                      <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                        <Mail className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-gray-900">{contactDetails.email}</p>
                        <p className="text-sm text-gray-600 mt-1">All booking confirmations and updates will be sent to this email</p>
                      </div>
                    </div>
                    <div className="flex items-start mt-4">
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
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">Payment Method</h3>
                    <div className="flex items-start">
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
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
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
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={goToPreviousSection}
                    className="bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow flex items-center"
                  >
                    <ChevronDown className="h-5 w-5 mr-2 rotate-90" />
                    Back to Payment
                  </button>
                  <button
                    className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 px-8 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center"
                  >
                    Confirm and Pay ${flightDetails.price.total}
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </>
            )}
          </div>
          
          {/* Right column - Flight summary */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 sticky top-6">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Your Trip Summary</h3>
                
                {/* Outbound flight */}
                <div className="mb-6">
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
                      <div className="relative flex items-center justify-between">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <div className="flex-1 h-0.5 bg-gray-300 mx-1 relative">
                          <div className="absolute -top-6 w-full text-xs text-gray-500 text-center">{flightDetails.outbound.duration}</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
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
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-xs text-gray-500">Return</span>
                  </div>
                </div>
                
                {/* Inbound flight */}
                <div>
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
                      <div className="relative flex items-center justify-between">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <div className="flex-1 h-0.5 bg-gray-300 mx-1 relative">
                          <div className="absolute -top-6 w-full text-xs text-gray-500 text-center">{flightDetails.inbound.duration}</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
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
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Price Details</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base fare ({passengers.length} passengers)</span>
                    <span className="text-gray-800 font-medium">${flightDetails.price.base}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxes</span>
                    <span className="text-gray-800 font-medium">${flightDetails.price.taxes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Fees & surcharges</span>
                    <span className="text-gray-800 font-medium">${flightDetails.price.fees}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-gray-900 text-xl">${flightDetails.price.total}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">All prices are in USD</p>
                </div>
                
                {/* Baggage allowance */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
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
                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-3">Add to Your Trip</h4>
                  <div className="space-y-3">
                    <div className="flex items-center rounded-lg border border-gray-200 p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Premium Seat Selection</p>
                        <p className="text-xs text-gray-600">Extra legroom, priority boarding</p>
                      </div>
                      <div className="ml-auto font-medium text-indigo-600">+$45</div>
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-200 p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Travel Insurance</p>
                        <p className="text-xs text-gray-600">Trip cancellation & medical coverage</p>
                      </div>
                      <div className="ml-auto font-medium text-indigo-600">+$35</div>
                    </div>
                    <div className="flex items-center rounded-lg border border-gray-200 p-3 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-colors">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-3" />
                      <div>
                        <p className="font-medium text-gray-800">Extra Baggage</p>
                        <p className="text-xs text-gray-600">Add another 23kg checked bag</p>
                      </div>
                      <div className="ml-auto font-medium text-indigo-600">+$60</div>
                    </div>
                  </div>
                </div>
                
                {/* Promotion code */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Promotion Code</label>
                  <div className="flex">
                    <input
                      type="text"
                      className="w-full border-2 rounded-l-lg p-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                      placeholder="Enter code"
                    />
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-r-lg transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Customer support */}
              <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    <HelpCircle className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Need help?</p>
                    <p className="text-sm text-gray-600 mt-1">Our support team is available 24/7</p>
                    <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium mt-2 inline-block">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Passenger;