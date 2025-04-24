import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, Send, Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [formStatus, setFormStatus] = useState(null);
  const [isOfficesOpen, setIsOfficesOpen] = useState(true);
  const [visibleOffices, setVisibleOffices] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);

    const offices = [
        {
        city: "Pune",
        address: "158 Koregaon Park, Pune 411001",
        phone: "+91 20 1357 2468",
        email: "pune@jetsetgo.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM"
      },
      {
        city: "Mumbai",
        address: "240 Skyline Tower, Marine Drive, Mumbai 400001",
        phone: "+91 22 1234 5678",
        email: "mumbai@jetsetgo.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM"
      },
      {
        city: "Delhi",
        address: "75 Airport Plaza, IGI Airport, New Delhi 110037",
        phone: "+91 11 8765 4321",
        email: "delhi@jetsetgo.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM"
      },
      {
        city: "Bangalore",
        address: "421 Tech Park, Electronic City, Bangalore 560100",
        phone: "+91 80 2468 1357",
        email: "bangalore@jetsetgo.com",
        hours: "Mon-Fri: 9:00 AM - 6:00 PM"
      }
    ];
    
    setVisibleOffices(offices);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus(null);
        e.target.reset();
      }, 3000);
    }, 1500);
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
              }}>Contact Us</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            We're here to help with any questions, feedback, or assistance you may need.
          </p>
          <br />
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Information Card */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Have questions about bookings, flight schedules, or special requests? Our customer service team 
                is available 24/7 to provide the assistance you need. Choose your preferred method of contact 
                below, and we'll respond promptly.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                    <p className="text-gray-700">24/7 Customer Support: +91 800 123 4567</p>
                    <p className="text-gray-700">Corporate Inquiries: +91 800 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                    <p className="text-gray-700">Customer Support: support@jetsetgo.com</p>
                    <p className="text-gray-700">Business Inquiries: business@jetsetgo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-indigo-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Operating Hours</h3>
                    <p className="text-gray-700">Phone Support: 24 hours, 7 days a week</p>
                    <p className="text-gray-700">Email Response: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="font-bold text-xl text-indigo-900 mb-4">Connect With Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`w-full flex justify-center items-center py-2 px-4 rounded-lg text-white font-medium
                    ${formStatus === 'success' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-indigo-600 hover:bg-indigo-700'} 
                    transition-colors duration-300`}
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                >
                  {formStatus === 'submitting' && (
                    <>
                      <div className="mr-2 animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  )}
                  {!formStatus && (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
                
        {/* Office Locations */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-indigo-900">Our Offices</h2>
            <button 
              onClick={() => setIsOfficesOpen(!isOfficesOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              {isOfficesOpen ? 'Hide Offices' : 'Show Offices'}
            </button>
          </div>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isOfficesOpen ? '800px' : '0',
              opacity: isOfficesOpen ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visibleOffices.map((office, index) => (
                <div 
                  key={index}
                  className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  style={{ animation: 'fadeInLeft 0.6s ease-out' }}
                >
                  <h3 className="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    {office.city}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>{office.address}</p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-indigo-600" />
                      {office.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-indigo-600" />
                      {office.email}
                    </p>
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-indigo-600" />
                      {office.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div 
          className="bg-white rounded-xl shadow-xl p-8 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.4s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Find Us</h2>
          <div className="bg-indigo-50 rounded-lg overflow-hidden h-64 flex items-center justify-center">
            {/* In a real implementation, you would replace this with a Google Maps iframe or other map component */}
            <div className="text-center">
              <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <p className="text-gray-700">Interactive map would be displayed here</p>
              <p className="text-gray-500 text-sm">Our headquarters is located in Mumbai, with offices in Delhi, Bangalore, and Pune</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Need Urgent Assistance?</h2>
          <p className="text-indigo-100 max-w-3xl mx-auto mb-8">
            Our 24/7 customer support team is ready to help with any urgent inquiries.
            We're committed to providing you with prompt and effective assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 py-3 px-8 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Live Chat
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

export default Contact;