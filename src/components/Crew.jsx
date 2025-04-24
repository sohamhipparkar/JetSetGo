import React, { useState, useEffect } from 'react';
import { Search, Filter, Calendar, MapPin, ChevronDown, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Crew = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedMember, setExpandedMember] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [animateStats, setAnimateStats] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [memberHover, setMemberHover] = useState(null);

  const crewMembers = [
    { id: 1, name: 'Alex Johnson', role: 'Captain', status: 'On duty', availability: 95, skills: ['Navigation', 'Leadership', 'Emergency Response'], avatar: '👨‍✈️' },
    { id: 2, name: 'Samantha Chen', role: 'First Officer', status: 'On leave', availability: 0, skills: ['Navigation', 'Systems Operation', 'Communication'], avatar: '👩‍✈️' },
    { id: 3, name: 'Marcus Williams', role: 'Engineer', status: 'On duty', availability: 85, skills: ['Mechanical', 'Electrical', 'Troubleshooting'], avatar: '👨‍🔧' },
    { id: 4, name: 'Elena Rodriguez', role: 'Medical Officer', status: 'Standby', availability: 65, skills: ['Emergency Medicine', 'Surgery', 'Psychology'], avatar: '👩‍⚕️' },
    { id: 5, name: 'James Lee', role: 'Security Officer', status: 'On duty', availability: 90, skills: ['Tactical', 'Investigation', 'Defense'], avatar: '👮‍♂️' }
  ];
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setAnimateStats(true);
      }, 500);
    }, 1000);
  }, []);

  const filteredCrew = searchQuery 
    ? crewMembers.filter(member => 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filterActive 
      ? crewMembers.filter(member => member.status === 'On duty')
      : crewMembers;

  const toggleMemberExpand = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const displayNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'On duty': return 'bg-green-500';
      case 'Standby': return 'bg-yellow-500';
      case 'On leave': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAvailabilityColor = (availability) => {
    if (availability >= 80) return 'bg-green-500';
    if (availability >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden animate-gradient">
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
        }}>Crew Management</h1>
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
  
  @keyframes gradient {
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
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 15s ease infinite;
  }
`}</style>

      {/* Search form with animation */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100 transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
              <div className="relative">
                <div className="flex items-center border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <div className="font-semibold">Any Role</div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <ArrowRight className="h-3 w-3 mx-1 text-gray-400" />
                      <span>Select specific role</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
              <div className="relative border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-300">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-indigo-600 mr-3" />
                  <div className="font-semibold">Apr 10, 2025</div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
              <div className="relative border-2 rounded-lg p-3 bg-gray-50 hover:border-indigo-500 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div className="font-semibold">All Statuses</div>
                  <ChevronDown className="h-4 w-4 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-between items-center">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors duration-300"
            >
              <Filter className={`h-4 w-4 mr-2 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : 'rotate-0'}`} />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <button 
              onClick={() => {
                setSearchQuery('');
                setFilterActive(false);
              }}
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-1 active:translate-y-0"
            >
              <Search className="h-4 w-4 mr-2" />
              Find Crew
            </button>
          </div>
          
          {/* Animated filter panel */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isFilterOpen ? 'max-h-96 opacity-100 mt-6 pt-5 border-t' : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="transform transition-all duration-500 delay-100 ease-out translate-y-0 opacity-100">
                <h3 className="font-semibold text-gray-800 mb-4">Availability Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="avail1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="avail1" className="ml-3 text-gray-700">80% - 100%</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="avail2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="avail2" className="ml-3 text-gray-700">50% - 79%</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="avail3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="avail3" className="ml-3 text-gray-700">0% - 49%</label>
                  </div>
                </div>
              </div>
              
              <div className="transform transition-all duration-500 delay-200 ease-out translate-y-0 opacity-100">
                <h3 className="font-semibold text-gray-800 mb-4">Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="status1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status1" className="ml-3 text-gray-700">On duty</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="status2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status2" className="ml-3 text-gray-700">Standby</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="status3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="status3" className="ml-3 text-gray-700">On leave</label>
                  </div>
                </div>
              </div>
              
              <div className="transform transition-all duration-500 delay-300 ease-out translate-y-0 opacity-100">
                <h3 className="font-semibold text-gray-800 mb-4">Skills</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="skill1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="skill1" className="ml-3 text-gray-700">Navigation</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="skill2" className="ml-3 text-gray-700">Emergency Response</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="skill3" className="ml-3 text-gray-700">Mechanical</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="skill4" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                    <label htmlFor="skill4" className="ml-3 text-gray-700">Medical</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with staggered animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Available Crew Members</h2>
            <p className="text-gray-600 mt-1">{filteredCrew.length} members • Apr 10, 2025</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="bg-white rounded-lg shadow-md p-1 flex w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ${activeTab === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('schedule')}
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ${activeTab === 'schedule' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Schedule
              </button>
              <button 
                onClick={() => setActiveTab('training')}
                className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition-all duration-300 ${activeTab === 'training' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Training
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-3 w-full sm:w-auto">
              <div className="flex items-center">
                <button 
                  onClick={() => setFilterActive(!filterActive)}
                  className={`flex items-center text-sm font-medium rounded-md px-3 py-1 transition-all duration-300 ${
                    filterActive 
                      ? 'bg-indigo-100 text-indigo-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filterActive ? 'Active Only' : 'All Crew'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Animated notification */}
        <div className={`fixed top-4 right-4 bg-white shadow-lg rounded-lg p-4 transform transition-all duration-500 z-50 ${
          showNotification 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p>{notificationMessage || 'Action completed successfully!'}</p>
          </div>
        </div>

        {/* Crew members table with loading state and row animations */}
        <div className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Crew Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Availability</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCrew.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-10 text-center text-gray-500 italic">
                        No crew members match your search criteria
                      </td>
                    </tr>
                  ) : (
                    filteredCrew.map((member, index) => (
                      <React.Fragment key={member.id}>
                        <tr 
                          className={`hover:bg-gray-50 transition-all duration-300 ${memberHover === member.id ? 'bg-gray-50' : ''}`}
                          style={{ 
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInRow 0.5s ease-out forwards'
                          }}
                          onMouseEnter={() => setMemberHover(member.id)}
                          onMouseLeave={() => setMemberHover(null)}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`h-10 w-10 flex-shrink-0 mr-3 bg-indigo-100 rounded-full flex items-center justify-center text-xl transition-transform duration-300 ${memberHover === member.id ? 'scale-110' : 'scale-100'}`}>
                                {member.avatar}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                <div className="text-sm text-gray-500">ID: {member.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{member.role}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(member.status)} text-white transition-all duration-300 ${memberHover === member.id ? 'shadow-md' : ''}`}>
                              {member.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div className="flex items-center">
                              <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${getAvailabilityColor(member.availability)}`} 
                                  style={{ 
                                    width: expandedMember === member.id ? `${member.availability}%` : '0%', 
                                    transition: 'width 1s ease-in-out'
                                  }}
                                ></div>
                              </div>
                              <span>{member.availability}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button 
                              onClick={() => toggleMemberExpand(member.id)}
                              className="text-indigo-600 hover:text-indigo-900 transition-colors duration-300 relative group"
                            >
                              <span className="relative z-10">{expandedMember === member.id ? 'Collapse' : 'Details'}</span>
                              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 ${memberHover === member.id ? 'w-full' : ''}`}></span>
                            </button>
                          </td>
                        </tr>
                        <tr 
                          className={`transition-all duration-500 ease-in-out ${
                            expandedMember === member.id ? 'opacity-100 table-row' : 'opacity-0 hidden'
                          }`}
                        >
                          <td colSpan="5" className="px-6 py-4 bg-gray-50">
                            <div className="animate-slideDown">
                              <h4 className="font-medium mb-2">Skills:</h4>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {member.skills.map((skill, idx) => (
                                  <span 
                                    key={idx} 
                                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm transform transition-all hover:scale-105"
                                    style={{ animationDelay: `${idx * 150}ms`, animation: 'fadeIn 0.5s ease-out forwards' }}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="flex space-x-2">
                                <button 
                                  onClick={() => displayNotification('Schedule updated')}
                                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                >
                                  Schedule
                                </button>
                                <button 
                                  onClick={() => displayNotification('Message sent')}
                                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                >
                                  Message
                                </button>
                                <button 
                                  onClick={() => displayNotification('Status changed')}
                                  className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                >
                                  Change Status
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Quick Summary Stats with counter animations */}
        <div className={`mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
          <div className="bg-white rounded-lg shadow p-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Crew on Duty</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <CountUp 
                    value={crewMembers.filter(m => m.status === 'On duty').length} 
                    animate={animateStats} 
                  />/{crewMembers.length}
                </p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 transform transition-all duration-300 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Average Availability</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <CountUp 
                    value={Math.round(crewMembers.reduce((acc, member) => acc + member.availability, 0) / crewMembers.length)} 
                    suffix="%" 
                    animate={animateStats} 
                  />
                </p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 transform transition-all duration-300 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Upcoming Shifts</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <CountUp value={12} animate={animateStats} />
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 transform transition-all duration-300 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Counter animation component
const CountUp = ({ value, suffix = "", animate }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!animate) return;
    
    let start = 0;
    const end = parseInt(value);
    const duration = 1500;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) clearInterval(timer);
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, animate]);

  return animate ? `${count}${suffix}` : `${value}${suffix}`;
};

export default Crew;