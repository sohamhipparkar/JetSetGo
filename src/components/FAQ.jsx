import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare, Phone, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedQuestions, setExpandedQuestions] = useState({});
  
  // FAQ data
  const faqCategories = [
    'all',
    'bookings',
    'baggage',
    'check-in',
    'in-flight',
    'special-services',
    'loyalty-program',
  ];
  
  const faqData = [
    {
      id: 1,
      question: "How do I book a flight?",
      answer: "You can book a flight on our website, through our mobile app, or by calling our customer service. On our website, simply use the flight search tool on the homepage, select your preferred flight, fill in passenger details, and complete the payment process. You'll receive a confirmation email with your booking details.",
      category: "bookings"
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on your fare type and how close to departure you cancel. For most bookings, cancellations made at least 24 hours before departure are eligible for a refund or future travel credit, subject to a cancellation fee. Economy Basic fares are non-refundable but may be changed for a fee plus fare difference.",
      category: "bookings"
    },
    {
      id: 3,
      question: "How do I check in for my flight?",
      answer: "You can check in online through our website or mobile app starting 24 hours before departure and up to 1 hour before your flight. You can also check in at the airport kiosks or counters. For international flights, we recommend arriving at least 3 hours before departure to complete all formalities.",
      category: "check-in"
    },
    {
      id: 4,
      question: "What is the baggage allowance?",
      answer: "Baggage allowances vary based on your ticket class and route. Economy passengers typically get one checked bag (up to 23kg) and one carry-on (up to 7kg). Business and First Class passengers get increased allowances. Additional or overweight baggage is subject to fees. Please check your booking confirmation for your specific allowance.",
      category: "baggage"
    },
    {
      id: 5,
      question: "Can I pre-select my seat?",
      answer: "Yes, you can pre-select your seat during booking or later through the 'Manage Booking' section on our website or app. Standard seats are complimentary, while premium seats (extra legroom, exit rows) are available for an additional fee. Some fare types include complimentary seat selection.",
      category: "bookings"
    },
    {
      id: 6,
      question: "Do you offer special meals?",
      answer: "Yes, we offer a variety of special meals including vegetarian, vegan, gluten-free, kosher, halal, and child meals. These must be requested at least 24 hours before your flight through the 'Manage Booking' section on our website or by contacting our customer service.",
      category: "in-flight"
    },
    {
      id: 7,
      question: "How do I request special assistance?",
      answer: "If you require special assistance (wheelchair, assistance for visual or hearing impairments, etc.), please notify us during booking or at least 48 hours before your flight. You can make these requests through 'Manage Booking' on our website or by contacting our Special Assistance team at +91 800 555 0123.",
      category: "special-services"
    },
    {
      id: 8,
      question: "What is your pet policy?",
      answer: "Small pets may travel in the cabin in an approved carrier that fits under the seat. Larger animals must travel in the temperature-controlled cargo hold. Service animals can accompany passengers in the cabin. All pets require advance notification and documentation. Please contact our Special Services team at least 48 hours before departure.",
      category: "special-services"
    },
    {
      id: 9,
      question: "How do I earn and redeem loyalty points?",
      answer: "You earn SkyMiles for every flight with us or our partner airlines. Points are calculated based on the fare and your membership tier. You can redeem these points for flights, upgrades, extra baggage, or various partner services. Log in to your SkyMiles account on our website to view your balance and redemption options.",
      category: "loyalty-program"
    },
    {
      id: 10,
      question: "What entertainment is available on board?",
      answer: "Most of our flights offer personal entertainment systems with movies, TV shows, music, and games. On long-haul flights, we provide complimentary headphones. We also offer in-flight Wi-Fi on most aircraft for a fee, with complimentary access for Business and First Class passengers.",
      category: "in-flight"
    },
    {
      id: 11,
      question: "Can I change my flight date?",
      answer: "Yes, most tickets can be changed, subject to a change fee plus any fare difference. Changes can be made through the 'Manage Booking' section on our website or by contacting customer service. Some flexible fare types allow changes with reduced or no fees.",
      category: "bookings"
    },
    {
      id: 12,
      question: "What items are prohibited in checked baggage?",
      answer: "Prohibited items include flammable materials, explosives, compressed gases, corrosives, poisonous substances, magnetic materials, and certain electronic devices with lithium batteries. Valuables, medication, and important documents should be kept in your carry-on baggage. Please check our website for a complete list of prohibited items.",
      category: "baggage"
    },
  ];
  
  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = !searchTerm || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Toggle question expansion
  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
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
              }}>Frequently Asked Questions</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Find answers to common questions about our services, policies, and procedures.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Search and Filters Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Questions */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center">
            <HelpCircle className="h-8 w-8 mr-2 text-indigo-600" />
            {activeCategory === 'all' ? 'All Questions' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1).replace('-', ' ') + ' Questions'}
          </h2>
          
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-indigo-600 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">
                We couldn't find any FAQs matching your search. Try different keywords or browse by category.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div 
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  style={{ animation: 'fadeInUp 0.6s ease-out' }}
                >
                  <div
                    className={`p-4 flex justify-between items-center cursor-pointer ${
                      expandedQuestions[faq.id] ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                    <div className="text-indigo-600">
                      {expandedQuestions[faq.id] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </div>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedQuestions[faq.id] ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="p-4 bg-indigo-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      <div className="mt-4 flex justify-end">
                        <div className="text-xs text-gray-500">
                          Was this helpful?{' '}
                          <button className="ml-2 text-indigo-600 hover:text-indigo-800 font-medium">Yes</button>{' '}
                          <button className="ml-2 text-indigo-600 hover:text-indigo-800 font-medium">No</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Popular Categories */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Browse by Topic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              onClick={() => setActiveCategory('bookings')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">Bookings & Reservations</h3>
              <p className="text-gray-700 mb-4">
                Learn about booking flights, making changes, cancellations, and managing your reservations.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
            
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 0.8s ease-out' }}
              onClick={() => setActiveCategory('baggage')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">Baggage Information</h3>
              <p className="text-gray-700 mb-4">
                Find details about baggage allowances, prohibited items, and handling of special items.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
            
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 1s ease-out' }}
              onClick={() => setActiveCategory('in-flight')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">In-Flight Experience</h3>
              <p className="text-gray-700 mb-4">
                Discover what to expect on board, including meals, entertainment, and comfort amenities.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
            
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              onClick={() => setActiveCategory('check-in')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">Check-in & Boarding</h3>
              <p className="text-gray-700 mb-4">
                Get information about check-in options, timing, required documents, and boarding procedures.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
            
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 0.8s ease-out' }}
              onClick={() => setActiveCategory('special-services')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">Special Services</h3>
              <p className="text-gray-700 mb-4">
                Information about assistance for passengers with disabilities, unaccompanied minors, and pet travel.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
            
            <div 
              className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              style={{ animation: 'fadeInLeft 1s ease-out' }}
              onClick={() => setActiveCategory('loyalty-program')}
            >
              <h3 className="font-bold text-xl text-indigo-800 mb-3">Loyalty Program</h3>
              <p className="text-gray-700 mb-4">
                Details about earning and redeeming SkyMiles, membership tiers, and partner benefits.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>View all questions</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Still Need Help */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Still Need Help?</h2>
          <p className="text-gray-700 mb-6">
            If you couldn't find the answer you were looking for, our customer service team is ready to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <Phone className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-700 mb-4">
                24/7 Customer Service<br />
                +91 800 123 4567
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                View all phone numbers
              </button>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <MessageSquare className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-700 mb-4">
                Chat with a representative<br />
                Available 24/7
              </p>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <Mail className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-700 mb-4">
                Send us your question<br />
                We'll respond within 24 hours
              </p>
              <Link to="/contact">
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Contact Form
                </button>
              </Link>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Take Off?</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Now that you have the information you need, book your next adventure with JetSetGo.
            Enjoy seamless travel experiences with our award-winning service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/flights">
              <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Book a Flight
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Contact Us
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

export default FAQ;