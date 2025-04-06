import React from 'react';
import { Compass, Calendar, CreditCard, Luggage, Map, Check, Users, Search, Plane, Info, Clock, AlertCircle } from 'lucide-react';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Guide = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleBookingSteps, setVisibleBookingSteps] = useState([]);
  const [isTipsOpen, setIsTipsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Booking steps
    const bookingSteps = [
      {
        title: "Search Flights",
        description: "Start by entering your departure, destination, dates, and passenger count",
        icon: <Search className="h-8 w-8 text-indigo-600" />,
        tips: "Use flexible date option to find the best fares"
      },
      {
        title: "Select Flight",
        description: "Compare available flights and choose the one that fits your schedule",
        icon: <Plane className="h-8 w-8 text-indigo-600" />,
        tips: "Check layover times and total journey duration"
      },
      {
        title: "Passenger Details",
        description: "Enter passenger information and any special requirements",
        icon: <Users className="h-8 w-8 text-indigo-600" />,
        tips: "Have passports handy for international flights"
      },
      {
        title: "Add Services",
        description: "Select seats, baggage options, meals, and other add-ons",
        icon: <Luggage className="h-8 w-8 text-indigo-600" />,
        tips: "Pre-book baggage to save on airport fees"
      },
      {
        title: "Review & Pay",
        description: "Review your booking details and complete payment",
        icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
        tips: "Multiple payment options available including credit cards and digital wallets"
      },
      {
        title: "Confirmation",
        description: "Receive your booking confirmation and e-ticket via email",
        icon: <Check className="h-8 w-8 text-indigo-600" />,
        tips: "Save your booking reference for easy check-in"
      }
    ];
    
    setVisibleBookingSteps(bookingSteps);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <h1 className="text-5xl font-bold mb-6 text-white" 
              style={{ 
                animation: 'fadeInDown 0.8s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>Booking Guide</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Everything you need to know to book your perfect flight with JetSetGo.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Introduction Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">How to Book Your Flight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Booking your flight with JetSetGo is quick, easy, and secure. Our streamlined process 
                ensures you can find and book the perfect flight in just a few minutes. This guide 
                will walk you through each step of the booking process, from searching for flights to 
                receiving your confirmation.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you're planning a business trip, family vacation, or solo adventure, 
                our user-friendly booking system helps you find the best options for your travel needs. 
                Follow this guide for a smooth booking experience every time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Need assistance? Our customer service team is available 24/7 to help with any questions 
                or special requirements you may have during the booking process.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">3min</div>
                <div className="text-gray-600">Average Booking Time</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">24/7</div>
                <div className="text-gray-600">Booking Support</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">0</div>
                <div className="text-gray-600">Booking Fees</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">100%</div>
                <div className="text-gray-600">Secure Payment</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Steps */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Booking Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBookingSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                style={{ animation: `fadeInLeft ${0.3 + index * 0.1}s ease-out` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-indigo-900">Step {index + 1}</div>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-700 mb-4">
                  {step.description}
                </p>
                <div className="bg-white rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{step.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Booking Types */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Booking Options</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer multiple ways to book your flight, giving you the flexibility to choose 
                the method that works best for you. Whether you prefer booking online, through our mobile app, 
                or with the assistance of our dedicated customer service team, we've got you covered.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1">
                    <Compass className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Website Booking</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Book directly through our website for the full range of options and features.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1">
                    <Compass className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Mobile App</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Download our mobile app for on-the-go booking with exclusive mobile-only deals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3 mt-1">
                    <Compass className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Customer Service</span>
                    <p className="text-gray-600 text-sm mt-1">
                      Call our 24/7 customer service for personalized assistance with your booking.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Fare Types</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer a variety of fare types to suit your travel needs and budget. Each fare 
                type includes different benefits and flexibility options, allowing you to choose 
                the perfect balance of value and convenience.
              </p>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-indigo-800 mb-2">Economy</h3>
                  <p className="text-gray-700 text-sm">
                    Our most affordable option with essential services. Perfect for budget-conscious travelers.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-indigo-800 mb-2">Economy Plus</h3>
                  <p className="text-gray-700 text-sm">
                    Extra legroom, priority boarding, and more flexibility for change and cancellation.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-indigo-800 mb-2">Business</h3>
                  <p className="text-gray-700 text-sm">
                    Premium services including lounge access, gourmet meals, and fully reclining seats.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h3 className="font-semibold text-indigo-800 mb-2">First Class</h3>
                  <p className="text-gray-700 text-sm">
                    The ultimate travel experience with personalized service and exclusive amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Tips */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Smart Booking Tips</h2>
            <button 
              onClick={() => setIsTipsOpen(!isTipsOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isTipsOpen ? 'Hide Tips' : 'Show Tips'}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isTipsOpen ? '800px' : '0',
              opacity: isTipsOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Calendar className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Book in Advance</h3>
                <p className="text-gray-700">
                  Flights are typically cheapest when booked 6-8 weeks before departure. Use our price 
                  calendar to find the best dates for your journey.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Clock className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Flexible Timing</h3>
                <p className="text-gray-700">
                  Mid-week flights (Tuesday and Wednesday) are often less expensive. Early morning or 
                  late evening flights may also offer better rates.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Map className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Consider Nearby Airports</h3>
                <p className="text-gray-700">
                  Check flights from alternative airports in your area. Sometimes a short drive 
                  can lead to significant savings on your airfare.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <AlertCircle className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Price Alerts</h3>
                <p className="text-gray-700">
                  Set up price alerts for your desired route and get notified when fares drop. 
                  This feature is available on our website and mobile app.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Join Loyalty Program</h3>
                <p className="text-gray-700">
                  Our frequent flyer program offers points on every flight, which can be redeemed 
                  for free flights, upgrades, and other travel perks.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Luggage className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Pack Light</h3>
                <p className="text-gray-700">
                  Consider traveling with just carry-on luggage to avoid checked baggage fees. 
                  Check our baggage policy for size and weight restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">Can I change my flight after booking?</h3>
              <p className="text-gray-700">
                Yes, you can change your flight through our website or app. Changes are subject to 
                fare differences and change fees depending on your fare type. Economy Plus, Business, 
                and First Class tickets offer more flexibility with lower or waived change fees.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">How can I select my seat?</h3>
              <p className="text-gray-700">
                Seat selection is available during the booking process after selecting your flight. 
                You can also add or change your seat later through the "Manage Booking" section of our 
                website or app. Some fare types include complimentary seat selection.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">What payment methods are accepted?</h3>
              <p className="text-gray-700">
                We accept major credit and debit cards (Visa, Mastercard, American Express), 
                digital wallets (Apple Pay, Google Pay), bank transfers, and JetSetGo gift cards. 
                Some routes also offer installment payment plans through select providers.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-xl text-gray-800 mb-3">How early should I arrive at the airport?</h3>
              <p className="text-gray-700">
                For domestic flights, we recommend arriving 2 hours before departure. For international 
                flights, please arrive 3 hours before departure to allow time for check-in, security, 
                and any necessary immigration procedures.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">What is the baggage allowance?</h3>
              <p className="text-gray-700">
                Baggage allowance varies by fare type and route. Economy typically includes one carry-on 
                bag (max 7kg) with checked baggage available for purchase. Economy Plus includes one 
                checked bag (23kg). Business and First Class include multiple checked bags. Full details 
                are displayed during the booking process.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div 
          className="bg-gradient-to-r from-indigo-800 to-blue-700 rounded-xl shadow-xl p-8 mb-12 text-center"
          style={{ 
            animation: 'fadeInUp 1.6s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Journey?</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Find the perfect flight for your next adventure with our easy booking process.
            Enjoy competitive fares, flexible options, and exceptional service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/flights">
              <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Book Now
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Contact Support
              </button>
            </Link>
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
    </div>
  );
};

export default Guide;