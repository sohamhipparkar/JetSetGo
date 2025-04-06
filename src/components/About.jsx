import React from 'react';
import { Shield, Globe, Users, Award, Clock, Heart, Star, Plane } from 'lucide-react';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Male from '../assets/Male.jpg'
import Female from '../assets/Female.png'

const About = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [visibleTeamMembers, setVisibleTeamMembers] = useState([]);
  const [isValuesOpen, setIsValuesOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Animate team members appearance
    const teamMembers = [
      {
        name: "Prof. Rahul More",
        position: "Project Guide",
        bio: "Department of Computer Science Engineering  ",
        image: Male 
      },
      {
        name: "Soham Hipparkar",
        position: "ADT23SOCB1135",
        bio: "Student at MIT Art Design & Technology University",
        image: Male
      },
      {
        name: "Tanisha Sayil",
        position: "ADT23SOCB1399",
        bio: "Student at MIT Art Design & Technology University",
        image: Female
      },
      {
        name: "Tanishq Sayil",
        position: "ADT23SOCB1400",
        bio: "Student at MIT Art Design & Technology University",
        image: Male
      },
      {
        name: "Chirag Gandhi",
        position: "MITU22BTCS0235",
        bio: "Student at MIT Art Design & Technology University",
        image: Male
      },
    ];
    
    setVisibleTeamMembers(teamMembers);
    
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
              }}>About Our Company</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Connecting destinations around the world with innovative technology and exceptional service since 2008.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Our Story Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                JetSetGo began with a vision to transform the airline industry through 
                cutting-edge technology and a customer-first approach. What started as a small regional carrier 
                has grown into a global aviation leader, serving millions of passengers across six continents.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our journey has been defined by innovation, resilience, and an unwavering commitment to safety. 
                Through economic challenges and industry transformations, we've maintained our focus on providing 
                exceptional travel experiences while embracing sustainable practices.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, JetSetGo stands as a testament to what's possible when passion for aviation meets 
                technological excellence. Our fleet of modern aircraft and dedicated team of professionals 
                continue to raise the standard for air travel worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">150+</div>
                <div className="text-gray-600">Aircraft in Fleet</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">200+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">15M+</div>
                <div className="text-gray-600">Passengers Yearly</div>
              </div>
              <div className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-100 transition-colors">
                <div className="text-4xl font-bold text-indigo-600 mb-1">12K+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission and Vision Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To connect people and cultures through safe, sustainable, and exceptional air travel experiences. 
                We're committed to making the world more accessible while minimizing our environmental impact and 
                maximizing value for our customers, employees, and shareholders.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                  <span className="text-gray-700">Industry-leading safety protocols</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                  <span className="text-gray-700">Carbon reduction initiatives</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                  <span className="text-gray-700">Customer-centric service design</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the world's most trusted and innovative airline, setting the global standard for 
                safe, efficient, and enjoyable air travel. We envision a future where technology and 
                human expertise combine to create seamless journeys that inspire connection and discovery.
              </p>
              <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <div className="font-semibold text-indigo-800 mb-2">Looking ahead to 2030:</div>
                <p className="text-gray-700">
                  Our strategic roadmap includes fleet modernization, expanded route networks, 
                  enhanced digital experiences, and industry-leading sustainability initiatives to 
                  achieve net-zero carbon emissions by 2050.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Our Core Values</h2>
            <button 
              onClick={() => setIsValuesOpen(!isValuesOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isValuesOpen ? 'Hide Values' : 'Show Values'}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isValuesOpen ? '800px' : '0',
              opacity: isValuesOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Shield className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Safety First</h3>
                <p className="text-gray-700">
                  We prioritize the safety and wellbeing of our passengers and crew above all else. 
                  Our rigorous protocols exceed industry standards and reflect our commitment to 
                  safe operations in everything we do.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">People Focused</h3>
                <p className="text-gray-700">
                  We value our diverse team and create an inclusive environment that empowers 
                  everyone to excel. We extend this care to our passengers through personalized 
                  service that exceeds expectations.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Globe className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Global Perspective</h3>
                <p className="text-gray-700">
                  We embrace cultural diversity and seek to connect communities worldwide. Our 
                  operations foster understanding and cooperation across borders, bringing the 
                  world closer together.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Award className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in every aspect of our operations, from booking to arrival. 
                  Our commitment to quality ensures a consistently exceptional experience across our global network.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Heart className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Social Responsibility</h3>
                <p className="text-gray-700">
                  We recognize our responsibility to protect the environment and support the communities 
                  we serve. Our sustainable initiatives aim to minimize our ecological footprint and 
                  maximize positive social impact.
                </p>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Clock className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-800 mb-3">Continuous Innovation</h3>
                <p className="text-gray-700">
                  We embrace change and constantly seek to improve. By investing in new technologies and 
                  refining our processes, we deliver increasingly efficient and enjoyable travel experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {visibleTeamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-indigo-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                style={{ animation: 'fadeInLeft 0.6s ease-out' }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow"
                />
                <h3 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h3>
                <div className="text-indigo-600 font-medium mb-3">{member.position}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
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
          <h2 className="text-3xl font-bold text-white mb-4">Join Us on the Journey</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Whether you're booking your next adventure or considering career opportunities,
            we invite you to be part of our global community dedicated to remarkable air travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/flights">
            <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Book a Flight
            </button>
            </Link>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Explore Careers
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

export default About;