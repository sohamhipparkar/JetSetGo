import React, { useEffect, useState } from 'react';
import { Handshake, Building, Globe, CreditCard, ShieldCheck, ChevronDown, ChevronUp, Users, Plane, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import SkyTeam from '../assets/skyteam.png';
import GlobalHospitality from '../assets/globalhospitality.png';
import WorldPay from '../assets/worldpay.png';
import TechFusion from '../assets/techfusion.png';
import SecureTravel from '../assets/securetravel.webp';
import PacificCruise from '../assets/pacificcruise.png';
import HorizonHotels from '../assets/horizonhotel.png';
import CTM from '../assets/ctm.png';

const Partners = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visiblePartnerCategories, setVisiblePartnerCategories] = useState([]);
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const partnerCategories = [
      {
        title: "Airline Partners",
        description: "Global airlines that extend our network and services.",
        icon: <Plane className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 35
      },
      {
        title: "Hotel Chains",
        description: "Premium accommodations for a seamless travel experience.",
        icon: <Building className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 42
      },
      {
        title: "Financial Services",
        description: "Banking and payment solutions for our customers.",
        icon: <CreditCard className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 12
      },
      {
        title: "Technology Providers",
        description: "Cutting-edge solutions that enhance our operations.",
        icon: <Globe className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 28
      },
      {
        title: "Security Partners",
        description: "Ensuring the safety of our passengers and operations.",
        icon: <ShieldCheck className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 9
      },
      {
        title: "Corporate Clients",
        description: "Organizations that trust us with their travel needs.",
        icon: <Users className="h-10 w-10 text-indigo-600 mb-4" />,
        count: 180
      },
    ];
    
    setVisiblePartnerCategories(partnerCategories);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = [
    {
      id: 1,
      name: "SkyTeam Airways",
      logo: SkyTeam,
      category: "Airline Partners",
      description: "Expanding our reach across North America and Europe.",
      featured: true
    },
    {
      id: 2,
      name: "Global Hospitality Group",
      logo: GlobalHospitality,
      category: "Hotel Chains",
      description: "Premium accommodations in over 80 countries.",
      featured: true
    },
    {
      id: 3,
      name: "WorldPay Financial",
      logo: WorldPay,
      category: "Financial Services",
      description: "Secure payment processing and currency exchange.",
      featured: true
    },
    {
      id: 4,
      name: "TechFusion Systems",
      logo: TechFusion,
      category: "Technology Providers",
      description: "Advanced booking and operations systems.",
      featured: false
    },
    {
      id: 5,
      name: "SecureTravel Solutions",
      logo: SecureTravel,
      category: "Security Partners",
      description: "State-of-the-art security protocols and systems.",
      featured: false
    },
    {
      id: 6,
      name: "Pacific Cruise Lines",
      logo: PacificCruise,
      category: "Airline Partners",
      description: "Luxury cruise connections for combined travel packages.",
      featured: false
    },
    {
      id: 7,
      name: "Horizon Hotels",
      logo: HorizonHotels,
      category: "Hotel Chains",
      description: "Boutique and luxury accommodations worldwide.",
      featured: true
    },
    {
      id: 8,
      name: "Corporate Travel Management",
      logo: CTM,
      category: "Corporate Clients",
      description: "Business travel solutions for enterprise clients.",
      featured: false
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      quote: "JetSetGo's partnership program has significantly expanded our market reach. Their collaborative approach and technological integration made the process seamless.",
      author: "Sarah Johnson",
      title: "CEO, SkyAlliance Airways",
      category: "Airline Partners"
    },
    {
      id: 2,
      quote: "Working with JetSetGo has transformed how we approach corporate travel. Their attention to detail and commitment to quality has made them our preferred airline partner.",
      author: "Michael Chen",
      title: "Travel Director, Global Enterprises",
      category: "Corporate Clients"
    },
    {
      id: 3,
      quote: "The integration between our hotel management system and JetSetGo's booking platform has created a frictionless experience for our mutual customers.",
      author: "Elena Rodriguez",
      title: "Operations Manager, Global Hospitality Group",
      category: "Hotel Chains"
    }
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

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
              }}>Our Partners</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Collaborating with industry leaders to deliver exceptional travel experiences and expand our global network.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Partnership Approach Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Partnership Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At JetSetGo, we believe that strategic partnerships are key to delivering exceptional value
                to our customers. We collaborate with leading companies across the aviation industry and beyond
                to expand our network, enhance our services, and create seamless travel experiences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our partnership philosophy centers on mutual growth, innovation, and customer satisfaction.
                We seek partners who share our commitment to excellence, sustainability, and technological advancement,
                creating synergies that benefit all stakeholders.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From codeshare agreements with other airlines to loyalty program integrations with hotels and 
                retail brands, our partnerships extend the JetSetGo experience beyond the flight, creating a
                comprehensive ecosystem for today's global traveler.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">300+</div>
                <div className="text-gray-600">Global Partners</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">15+</div>
                <div className="text-gray-600">Years of Collaboration</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">$2B+</div>
                <div className="text-gray-600">Partner Revenue</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Categories */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Partner Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePartnerCategories.map((category, index) => (
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
                  <span className="text-indigo-600 font-medium">{category.count} partners</span>
                  <button 
                    className="text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors"
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    View Partners
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured Partners */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Partners</h2>
          
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
                All Partners
              </button>
              {visiblePartnerCategories.map((category, index) => (
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
            {filteredPartners.map((partner) => (
              <div 
                key={partner.id}
                className={`border ${partner.featured ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'} rounded-lg p-6 hover:shadow-md transition-all hover:border-indigo-300`}
                style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              >
                <div className="flex justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 object-contain"
                  />
                </div>
                <h3 className="font-bold text-lg text-center text-indigo-900 mb-2">{partner.name}</h3>
                <div className="flex justify-center mb-3">
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-xs font-medium">
                    {partner.category}
                  </span>
                </div>
                <p className="text-gray-600 text-center text-sm">{partner.description}</p>
                {partner.featured && (
                  <div className="mt-4 flex justify-center">
                    <span className="flex items-center text-indigo-600 text-xs font-medium">
                      <Star className="h-3 w-3 mr-1" />
                      Featured Partner
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredPartners.length === 0 && (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No partners currently available in this category. Please check back later.</p>
            </div>
          )}
        </div>
        
        {/* Testimonials */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Partner Testimonials</h2>
            <button 
              onClick={() => setIsTestimonialsOpen(!isTestimonialsOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isTestimonialsOpen ? (
                <>Hide Testimonials <ChevronUp className="ml-1 h-4 w-4" /></>
              ) : (
                <>Show Testimonials <ChevronDown className="ml-1 h-4 w-4" /></>
              )}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isTestimonialsOpen ? '800px' : '0',
              opacity: isTestimonialsOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-indigo-600 text-4xl mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div className="mt-auto">
                    <div className="font-semibold text-indigo-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                    <div className="text-indigo-600 text-xs mt-1">{testimonial.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Partnership Program */}
        <div 
          className="bg-gradient-to-r from-indigo-800 to-blue-700 rounded-xl shadow-xl p-8 mb-12 text-center"
          style={{ 
            animation: 'fadeInUp 1.6s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-center mb-6">
            <Handshake className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Join our network of partners and discover new opportunities for growth and collaboration.
            We're always looking for innovative organizations that share our vision and values.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Partner With Us
            </button>
            <Link to="/about">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Learn More About JetSetGo
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

export default Partners;