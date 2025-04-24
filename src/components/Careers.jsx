import React, { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Globe, Compass, Clock, Heart, Shield, Award, Plane } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleJobCategories, setVisibleJobCategories] = useState([]);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const jobCategories = [
      {
        title: "Flight Operations",
        description: "Join our team of pilots, flight attendants, and operations staff.",
        icon: <Plane className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 12
      },
      {
        title: "Customer Experience",
        description: "Help create exceptional travel experiences for our passengers.",
        icon: <Heart className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 8
      },
      {
        title: "Engineering & Maintenance",
        description: "Keep our fleet safe and reliable with cutting-edge technology.",
        icon: <Shield className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 15
      },
      {
        title: "Technology & Digital",
        description: "Build the digital systems that power our global operations.",
        icon: <Globe className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 22
      },
      {
        title: "Corporate Functions",
        description: "Support our business with expertise in finance, HR, and legal.",
        icon: <Briefcase className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 14
      },
      {
        title: "Graduate Programs",
        description: "Start your aviation career with our structured development programs.",
        icon: <GraduationCap className="h-10 w-10 text-indigo-600 mb-4" />,
        positions: 6
      },
    ];
    
    setVisibleJobCategories(jobCategories);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobListings = [
    {
      id: 1,
      title: "Senior Pilot - Boeing 787",
      location: "Mumbai, India",
      type: "Full-time",
      category: "Flight Operations",
      postedDate: "2025-03-15"
    },
    {
      id: 2,
      title: "Cabin Crew Manager",
      location: "Delhi, India",
      type: "Full-time",
      category: "Flight Operations",
      postedDate: "2025-03-18"
    },
    {
      id: 3,
      title: "Customer Service Representative",
      location: "Pune, India",
      type: "Full-time",
      category: "Customer Experience",
      postedDate: "2025-03-22"
    },
    {
      id: 4,
      title: "Aircraft Maintenance Technician",
      location: "Bengaluru, India",
      type: "Full-time",
      category: "Engineering & Maintenance",
      postedDate: "2025-03-25"
    },
    {
      id: 5,
      title: "Senior React Developer",
      location: "Remote",
      type: "Full-time",
      category: "Technology & Digital",
      postedDate: "2025-03-28"
    },
    {
      id: 6,
      title: "Finance Analyst",
      location: "Mumbai, India",
      type: "Full-time",
      category: "Corporate Functions",
      postedDate: "2025-04-01"
    },
    {
      id: 7,
      title: "Engineering Graduate Program",
      location: "Multiple Locations",
      type: "Full-time",
      category: "Graduate Programs",
      postedDate: "2025-04-03"
    },
    {
      id: 8,
      title: "UX/UI Designer",
      location: "Hyderabad, India",
      type: "Full-time",
      category: "Technology & Digital",
      postedDate: "2025-04-05"
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category === selectedCategory);

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
              }}>Join Our Team</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Build a rewarding career in aviation with JetSetGo, where passion meets excellence and innovation shapes the future of travel.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Why Join Us Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Why Join JetSetGo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                At JetSetGo, we believe our people are our greatest asset. We're building a diverse team of talented 
                individuals who share our passion for excellence in aviation and customer service. When you join our team, 
                you become part of a global community dedicated to connecting the world.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We offer more than just jobs – we provide careers with growth opportunities, competitive benefits, 
                and the chance to make a meaningful impact in an exciting industry. Our collaborative culture 
                encourages innovation, celebrates achievements, and supports professional development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether you're an experienced professional or just starting your career journey, JetSetGo 
                offers a dynamic environment where your contributions are valued and your potential can soar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">12K+</div>
                <div className="text-gray-600">Global Employees</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">45+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">85%</div>
                <div className="text-gray-600">Employee Satisfaction</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">70+</div>
                <div className="text-gray-600">Open Positions</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Career Areas */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Career Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleJobCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                style={{ animation: 'fadeInUp 0.6s ease-out' }}
                onClick={() => setSelectedCategory(category.title)}
              >
                {category.icon}
                <h3 className="font-bold text-xl text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-medium">{category.positions} open positions</span>
                  <button 
                    className="text-sm font-medium text-white bg-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors"
                    onClick={() => setSelectedCategory(category.title)}
                  >
                    View Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Benefits & Perks</h2>
            <button 
              onClick={() => setIsBenefitsOpen(!isBenefitsOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isBenefitsOpen ? 'Hide Benefits' : 'Show Benefits'}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isBenefitsOpen ? '800px' : '0',
              opacity: isBenefitsOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Plane className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Travel Benefits</h3>
                <p className="text-gray-700">
                  Enjoy discounted or complimentary travel for you and your family across our global network,
                  plus special rates with our partner airlines and hotels worldwide.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Shield className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Health & Wellness</h3>
                <p className="text-gray-700">
                  Comprehensive health insurance, wellness programs, gym memberships, and mental health
                  support to ensure your total wellbeing both on and off the job.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <GraduationCap className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Learning & Development</h3>
                <p className="text-gray-700">
                  Continuous learning opportunities including training programs, educational assistance,
                  mentorship initiatives, and career advancement pathways.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Clock className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Work-Life Balance</h3>
                <p className="text-gray-700">
                  Flexible working arrangements, generous paid time off, parental leave, and programs
                  designed to help you maintain harmony between work and personal life.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Award className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Recognition Programs</h3>
                <p className="text-gray-700">
                  Performance bonuses, service awards, peer recognition initiatives, and special
                  celebrations to acknowledge your contributions and achievements.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Compass className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Global Opportunities</h3>
                <p className="text-gray-700">
                  Possibilities for international assignments, cross-functional projects, and exposure
                  to diverse markets as part of our global aviation network.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Open Positions */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Open Positions</h2>
          
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
                All Positions
              </button>
              {visibleJobCategories.map((category, index) => (
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
          
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-indigo-200"
                style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-indigo-900">{job.title}</h3>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium">
                    {job.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                  <span className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Posted: {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="mt-4">
                  <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No positions currently available in this category. Please check back later.</p>
            </div>
          )}
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
          <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            If you don't see a position that matches your skills and interests, join our talent community.
            We'll notify you when relevant opportunities become available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Join Talent Community
            </button>
            <Link to="/about">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                Learn About JetSetGo
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

export default Careers;