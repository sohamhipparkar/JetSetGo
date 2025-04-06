import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, FileText, BookOpen, Globe, MessageSquare, Phone, Mail, Bookmark, AlertCircle, Star, ChevronDown, ChevronUp, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Help = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);
  const [articleFeedback, setArticleFeedback] = useState(null);
  const [popularExpanded, setPopularExpanded] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Categories and article placeholders
  const helpCategories = [
    { id: 'bookings', name: 'Bookings & Reservations', icon: <BookOpen className="h-6 w-6" /> },
    { id: 'checkin', name: 'Check-in & Boarding', icon: <FileText className="h-6 w-6" /> },
    { id: 'baggage', name: 'Baggage', icon: <Globe className="h-6 w-6" /> },
    { id: 'inflight', name: 'In-flight Services', icon: <Star className="h-6 w-6" /> },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: <AlertCircle className="h-6 w-6" /> },
    { id: 'policies', name: 'Policies & Terms', icon: <Bookmark className="h-6 w-6" /> },
  ];

  const popularArticles = [
    { id: 1, category: 'bookings', title: 'How to change or cancel your flight booking', views: 14526 },
    { id: 2, category: 'baggage', title: 'Baggage allowance for domestic and international flights', views: 12385 },
    { id: 3, category: 'checkin', title: 'Online check-in guide: Step by step process', views: 11254 },
    { id: 4, category: 'troubleshooting', title: 'What to do if you missed your flight', views: 9876 },
    { id: 5, category: 'inflight', title: 'Special meal requests and dietary accommodations', views: 8754 },
    { id: 6, category: 'policies', title: 'Refund policy for canceled flights', views: 7698 }
  ];

  const faqItems = [
    {
      question: "How do I change or cancel my flight booking?",
      answer: "You can change or cancel your flight booking through your account dashboard. Navigate to 'My Bookings', select the booking you wish to modify, and follow the instructions. Please note that changes may incur fees depending on your fare type and how close you are to the departure date."
    },
    {
      question: "What is the baggage allowance for domestic flights?",
      answer: "Standard baggage allowance for domestic flights includes one carry-on bag (up to 7kg) and one checked bag (up to 15kg). Premium and business class passengers are entitled to additional baggage allowance. Specific allowances vary by route and fare class, so please check your booking details."
    },
    {
      question: "How early should I arrive at the airport?",
      answer: "We recommend arriving at least 2 hours before departure for domestic flights and 3 hours for international flights. During peak travel seasons, you may want to allow additional time for check-in and security procedures."
    },
    {
      question: "How can I request a special meal for my flight?",
      answer: "Special meal requests can be made during the booking process or added later through your account. Log in, select your booking, and choose 'Manage Meals' to view available options. Please make requests at least 24 hours before your flight."
    }
  ];

  // Simulated featured article content
  const featuredArticleContent = {
    title: "Complete Guide to Online Check-in",
    category: "Check-in & Boarding",
    lastUpdated: "April 2, 2025",
    content: [
      "Online check-in allows you to secure your seat and print your boarding pass before arriving at the airport, saving you valuable time on your travel day.",
      "You can check in online starting 48 hours before your scheduled departure time up until 1 hour before domestic flights or 2 hours before international flights.",
      "To check in online, visit the 'Manage Booking' section of our website or use the JetSetGo mobile app. You'll need your booking reference number and the last name of the primary passenger."
    ]
  };

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
              }}>Help Center</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Find guides, tutorials, and answers to all your travel questions
          </p>
          <div className="mt-8 max-w-2xl mx-auto"
               style={{ animation: 'fadeInUp 1.2s ease-out' }}>
            <form onSubmit={handleSearch} className="flex">
              <input 
                type="text" 
                placeholder="Search the knowledge base..." 
                className="flex-grow px-5 py-4 rounded-l-lg border-0 focus:ring-2 focus:ring-indigo-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-r-lg flex items-center justify-center transition-colors duration-300"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Browse by Category */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Browse by Category</h2>
            <button 
              onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {categoriesExpanded ? 'Hide Categories' : 'Show Categories'}
              {categoriesExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: categoriesExpanded ? '500px' : '0',
              opacity: categoriesExpanded ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-2">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  activeCategory === 'all' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <HelpCircle className={`h-10 w-10 mb-2 ${activeCategory === 'all' ? 'text-indigo-600' : 'text-gray-500'}`} />
                <span className="font-medium text-center">All Topics</span>
              </button>
              
              {helpCategories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                    activeCategory === category.id ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`h-10 w-10 mb-2 ${activeCategory === category.id ? 'text-indigo-600' : 'text-gray-500'}`}>
                    {category.icon}
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Popular Articles */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Popular Articles</h2>
            <button 
              onClick={() => setPopularExpanded(!popularExpanded)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {popularExpanded ? 'Hide Articles' : 'Show Articles'}
              {popularExpanded ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: popularExpanded ? '800px' : '0',
              opacity: popularExpanded ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles
                .filter(article => activeCategory === 'all' || article.category === activeCategory)
                .map((article) => (
                <Link 
                  key={article.id}
                  to={`/help-center/article/${article.id}`}
                  className="bg-gray-50 hover:bg-indigo-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md border border-gray-100 group"
                  style={{ animation: 'fadeInLeft 0.6s ease-out' }}
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{article.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Article</span>
                    <span className="mx-2">•</span>
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                </Link>
              ))}
            </div>
            
            {activeCategory !== 'all' && popularArticles.filter(article => article.category === activeCategory).length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No articles found in this category. Try selecting "All Topics" to see all articles.
              </div>
            )}
          </div>
        </div>
        
        {/* Featured Article Preview */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex items-center mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">Featured Article</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-500 text-sm">{featuredArticleContent.category}</span>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-500 text-sm">Updated: {featuredArticleContent.lastUpdated}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">{featuredArticleContent.title}</h2>
          
          <div className="prose max-w-none mb-6">
            {featuredArticleContent.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-3">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-6 border-t border-gray-200 pt-4">
            <p className="text-gray-600 text-sm mb-2">Was this article helpful?</p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setArticleFeedback('helpful')}
                className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                  articleFeedback === 'helpful' 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                Yes, thanks!
              </button>
              <button 
                onClick={() => setArticleFeedback('not-helpful')}
                className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                  articleFeedback === 'not-helpful' 
                    ? 'bg-red-100 text-red-700 border border-red-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <ThumbsDown className="h-4 w-4 mr-2" />
                No, I need more help
              </button>
            </div>
            
            {articleFeedback === 'not-helpful' && (
              <div 
                className="mt-4 bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-indigo-800"
                style={{ animation: 'fadeInUp 0.3s ease-out' }}
              >
                <p className="font-medium mb-2">Need further assistance?</p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact-us" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Email Support
                  </Link>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center text-sm">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Live Chat
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Call Support
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Frequently Asked Questions */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.6s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-4 flex justify-between items-center focus:outline-none
                    ${activeFaq === index ? 'bg-indigo-50' : 'bg-white'}`}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {activeFaq === index ? 
                    <ChevronUp className="h-5 w-5 text-indigo-600" /> : 
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  }
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out bg-gray-50"
                  style={{ 
                    maxHeight: activeFaq === index ? '200px' : '0',
                    opacity: activeFaq === index ? 1 : 0,
                  }}
                >
                  <div className="p-4 text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div 
          className="bg-gradient-to-r from-indigo-800 to-blue-700 rounded-xl shadow-xl p-8 mb-12 text-center"
          style={{ 
            animation: 'fadeInUp 1.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Our support team is ready to provide personalized assistance with any questions or concerns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact Support
            </Link>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Start Live Chat
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

export default Help;