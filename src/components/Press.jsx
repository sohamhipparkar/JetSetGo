import React, { useEffect, useState } from 'react';
import { Newspaper, Award, Calendar, Download, ChevronDown, ChevronUp, Globe, Users, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Press = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visiblePressCategories, setVisiblePressCategories] = useState([]);
  const [isPressReleasesOpen, setIsPressReleasesOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Press categories
    const pressCategories = [
      {
        title: "Press Releases",
        description: "Official announcements and important company news.",
        icon: <Newspaper className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 42
      },
      {
        title: "Awards & Recognition",
        description: "Industry recognition and company achievements.",
        icon: <Award className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 18
      },
      {
        title: "Media Coverage",
        description: "JetSetGo in the news around the world.",
        icon: <Globe className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 65
      },
      {
        title: "Events",
        description: "Upcoming and past conferences and events.",
        icon: <Calendar className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 12
      },
      {
        title: "Media Resources",
        description: "Downloadable assets for media use.",
        icon: <Download className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 24
      },
      {
        title: "Media Contacts",
        description: "Connect with our media relations team.",
        icon: <MessageSquare className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 3
      },
    ];
    
    setVisiblePressCategories(pressCategories);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: "JetSetGo Announces New Routes to Asia Pacific",
      category: "Press Releases",
      date: "April 2, 2025",
      summary: "Expanding our global network with 5 new flight routes to major destinations in Asia.",
      featured: true
    },
    {
      id: 2,
      title: "JetSetGo Named 'Best Business Class' by Travel Awards",
      image: "/api/placeholder/120/60",
      category: "Awards & Recognition",
      date: "March 15, 2025",
      summary: "Recognized for excellent service and cabin experience in business class travel.",
      featured: true
    },
    {
      id: 3,
      title: "Quarterly Financial Results Show 15% Growth",
      image: "/api/placeholder/120/60",
      category: "Press Releases",
      date: "February 28, 2025",
      summary: "Strong performance in all regions with notable increase in passenger revenue.",
      featured: true
    },
    {
      id: 4,
      title: "JetSetGo Announces Sustainable Aviation Fuel Initiative",
      image: "/api/placeholder/120/60",
      category: "Press Releases",
      date: "February 14, 2025",
      summary: "New commitment to reduce carbon footprint by 30% over the next five years.",
      featured: false
    },
    {
      id: 5,
      title: "JetSetGo App Wins Mobile Excellence Award",
      image: "/api/placeholder/120/60",
      category: "Awards & Recognition",
      date: "January 30, 2025",
      summary: "Our mobile app recognized for innovative features and user experience.",
      featured: false
    },
    {
      id: 6,
      title: "New Fleet Expansion: JetSetGo Adds 10 Fuel-Efficient Aircraft",
      image: "/api/placeholder/120/60",
      category: "Press Releases",
      date: "January 12, 2025",
      summary: "Modernizing our fleet with next-generation, environmentally-friendly aircraft.",
      featured: false
    },
    {
      id: 7,
      title: "JetSetGo to Host Annual Aviation Conference",
      image: "/api/placeholder/120/60",
      category: "Events",
      date: "December 5, 2024",
      summary: "Industry leaders to gather and discuss future of air travel at our flagship event.",
      featured: true
    },
    {
      id: 8,
      title: "JetSetGo Featured in 'Future of Travel' Documentary",
      image: "/api/placeholder/120/60",
      category: "Media Coverage",
      date: "November 18, 2024",
      summary: "Our innovative approach to travel featured in major streaming platform documentary.",
      featured: false
    }
  ];
  
  const mediaMentions = [
    {
      id: 1,
      quote: "JetSetGo's new business model is revolutionizing how we think about air travel in the post-pandemic world.",
      source: "Business Travel Weekly",
      date: "March 28, 2025",
      category: "Media Coverage"
    },
    {
      id: 2,
      quote: "The airline's commitment to sustainable aviation is setting new standards in the industry. Their approach combines innovation with practical solutions.",
      source: "Global Aviation Review",
      date: "February 20, 2025",
      category: "Media Coverage"
    },
    {
      id: 3,
      quote: "JetSetGo's customer-first approach has resulted in the highest satisfaction ratings in the industry for the third consecutive year.",
      source: "Consumer Travel Report",
      date: "January 15, 2025",
      category: "Media Coverage"
    }
  ];

  const filteredPressReleases = selectedCategory === 'all' 
    ? pressReleases 
    : pressReleases.filter(press => press.category === selectedCategory);

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
              }}>Press & Media</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Latest news, press releases, and media resources from JetSetGo - keeping you informed about our innovations and achievements.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Press Overview Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Press Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                JetSetGo is constantly evolving and expanding as a global airline. Our press section provides
                the latest updates on our company developments, achievements, and industry innovations.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We're committed to transparency and maintaining strong relationships with media partners
                around the world. Our press room offers comprehensive resources for journalists, bloggers,
                and publications looking to cover our story.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From fleet expansions and new routes to sustainability initiatives and technological innovations,
                keep up with everything happening at JetSetGo through our regularly updated press materials.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">120+</div>
                <div className="text-gray-600">Press Releases</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">85+</div>
                <div className="text-gray-600">Media Mentions</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">25+</div>
                <div className="text-gray-600">Awards</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">12</div>
                <div className="text-gray-600">Media Kits</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Press Categories */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Press Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePressCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                style={{ animation: 'fadeInUp 0.6s ease-out' }}
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.icon}
                <h3 className="font-bold text-xl text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-medium">{category.count} items</span>
                  <button 
                    className="text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors"
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    View All
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Latest Press Releases */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Latest News</h2>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                All News
              </button>
              {visiblePressCategories.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedCategory(category.title)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.title 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPressReleases.map((press) => (
              <div 
                key={press.id}
                className={`border ${press.featured ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'} rounded-lg p-6 hover:shadow-md transition-all hover:border-indigo-300`}
                style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              >

                <div className="flex justify-center mb-3">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-xs font-medium">
                    {press.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-center text-indigo-900 mb-2">{press.title}</h3>
                <p className="text-gray-500 text-center text-xs mb-3">{press.date}</p>
                <p className="text-gray-600 text-center text-sm">{press.summary}</p>
                <div className="mt-4 flex justify-center">
                  <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Read More
                  </button>
                </div>
                {press.featured && (
                  <div className="mt-4 flex justify-center">
                    <span className="flex items-center text-indigo-600 text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredPressReleases.length === 0 && (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No press releases currently available in this category. Please check back later.</p>
            </div>
          )}
        </div>
        
        {/* Media Mentions */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Media Mentions</h2>
            <button 
              onClick={() => setIsPressReleasesOpen(!isPressReleasesOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isPressReleasesOpen ? (
                <>Hide Mentions <ChevronUp className="ml-1 h-4 w-4" /></>
              ) : (
                <>Show Mentions <ChevronDown className="ml-1 h-4 w-4" /></>
              )}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isPressReleasesOpen ? '800px' : '0',
              opacity: isPressReleasesOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mediaMentions.map((mention) => (
                <div 
                  key={mention.id}
                  className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-indigo-600 text-4xl mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{mention.quote}</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-indigo-900">{mention.source}</div>
                    <div className="text-gray-600 text-sm">{mention.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Media Contact */}
        <div 
          className="bg-gradient-to-r from-indigo-800 to-blue-700 rounded-xl shadow-xl p-8 mb-12 text-center"
          style={{ 
            animation: 'fadeInUp 1.6s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Media Contact</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Looking for more information or want to arrange an interview? Our media relations team is ready to assist you.
            We respond to all media inquiries within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Contact Press Team
            </button>
            <Link to="/media-kit">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Download Media Kit
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

export default Press;