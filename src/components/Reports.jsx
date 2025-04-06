import React, { useState, useEffect } from 'react';
import { BarChart, PieChart, LineChart, Calendar, Download, Filter, ChevronDown, RefreshCw, ArrowUpRight, FileText, Briefcase, Users, DollarSign, Plane } from 'lucide-react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('last30');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [animateCharts, setAnimateCharts] = useState(false);
  const [animateMetrics, setAnimateMetrics] = useState(false);
  const [animateTrips, setAnimateTrips] = useState(false);

  // Animation triggers on component mount
  useEffect(() => {
    // Staggered animations
    setTimeout(() => setAnimateMetrics(true), 300);
    setTimeout(() => setAnimateCharts(true), 600);
    setTimeout(() => setAnimateTrips(true), 900);
  }, []);

  // Reset animations when changing tabs
  useEffect(() => {
    setAnimateMetrics(false);
    setAnimateCharts(false);
    setAnimateTrips(false);
    
    setTimeout(() => setAnimateMetrics(true), 300);
    setTimeout(() => setAnimateCharts(true), 600);
    setTimeout(() => setAnimateTrips(true), 900);
  }, [activeTab]);

  // Sample report data
  const travelMetrics = {
    totalSpent: 24850,
    totalTrips: 18,
    avgTripCost: 1380,
    savingsToDate: 3240,
    mostVisited: 'London',
    upcomingTrips: 3
  };

  // Sample expense data for charts
  const expensesByCategory = [
    { category: 'Flights', amount: 14200, percentage: 57 },
    { category: 'Hotels', amount: 6800, percentage: 27 },
    { category: 'Transportation', amount: 2100, percentage: 9 },
    { category: 'Meals', amount: 1750, percentage: 7 }
  ];

  const monthlySpending = [
    { month: 'Jan', amount: 3600 },
    { month: 'Feb', amount: 2800 },
    { month: 'Mar', amount: 5200 },
    { month: 'Apr', amount: 4100 },
    { month: 'May', amount: 3400 },
    { month: 'Jun', amount: 5750 }
  ];

  // Sample recent trips data
  const recentTrips = [
    {
      id: 'T12345',
      destination: 'London',
      departureDate: 'Mar 15, 2025',
      returnDate: 'Mar 19, 2025',
      totalCost: 2430,
      status: 'Completed',
      travelers: 2,
      savings: 450
    },
    {
      id: 'T12346',
      destination: 'Paris',
      departureDate: 'Feb 20, 2025',
      returnDate: 'Feb 24, 2025',
      totalCost: 2800,
      status: 'Completed',
      travelers: 1,
      savings: 320
    },
    {
      id: 'T12347',
      destination: 'Tokyo',
      departureDate: 'Jan 10, 2025',
      returnDate: 'Jan 18, 2025',
      totalCost: 3650,
      status: 'Completed',
      travelers: 2,
      savings: 580
    },
    {
      id: 'T12348',
      destination: 'New York',
      departureDate: 'Apr 05, 2025',
      returnDate: 'Apr 12, 2025',
      totalCost: 3100,
      status: 'Upcoming',
      travelers: 1,
      savings: 420
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero header with animated gradient */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-800 p-8 relative overflow-hidden">
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
        }}>Reports</h1>
    <br></br>
  </div>
</div>

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
`}</style>


      {/* Date range and filters */}
      <div className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10 animate-slideUp">
        <div className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold text-gray-800">Reports</h2>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded-md text-sm font-medium">
                FY 2025
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="appearance-none border-2 rounded-lg py-2 pl-4 pr-10 bg-white border-gray-200 hover:border-indigo-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 text-gray-700 font-medium text-sm"
                >
                  <option value="last30">Last 30 Days</option>
                  <option value="last90">Last 90 Days</option>
                  <option value="ytd">Year to Date</option>
                  <option value="custom">Custom Range</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </div>
              
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center border-2 rounded-lg py-2 px-4 text-gray-700 font-medium hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-sm"
              >
                <Filter className={`h-4 w-4 mr-2 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : 'rotate-0'}`} />
                {isFilterOpen ? 'Hide Filters' : 'Filters'}
              </button>
              
              <button className="flex items-center justify-center bg-gray-100 rounded-lg py-2 px-4 text-gray-700 font-medium hover:bg-gray-200 transition-all duration-200 text-sm group">
                <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                Export
              </button>
              
              <button className="flex items-center justify-center bg-indigo-600 text-white rounded-lg py-2 px-6 font-medium hover:bg-indigo-700 transition-all duration-200 text-sm shadow-md hover:shadow-lg group">
                <RefreshCw className="h-4 w-4 mr-2 group-hover:animate-spin" />
                Update
              </button>
            </div>
          </div>
          
          <div 
            className={`mt-6 pt-5 border-t grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${
              isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pt-0 mt-0 border-t-0'
            }`}
          >
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Trip Type</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" id="type1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="type1" className="ml-3 text-gray-700">Business</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="type2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="type2" className="ml-3 text-gray-700">Personal</label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Expense Category</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" id="cat1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="cat1" className="ml-3 text-gray-700">Flights</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="cat2" className="ml-3 text-gray-700">Hotels</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="cat3" className="ml-3 text-gray-700">Transportation</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="cat4" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="cat4" className="ml-3 text-gray-700">Meals</label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Travelers</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" id="traveler1" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="traveler1" className="ml-3 text-gray-700">All Travelers</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="traveler2" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="traveler2" className="ml-3 text-gray-700">John Smith</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="traveler3" className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="traveler3" className="ml-3 text-gray-700">Sarah Johnson</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Tabs navigation */}
        <div className="bg-white rounded-lg shadow-md p-1 flex mb-8 overflow-x-auto">
          {['overview', 'trips', 'expenses', 'travelers'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`px-6 py-3 text-sm font-medium rounded-md flex-1 transition-all duration-300 flex items-center justify-center relative ${
                activeTab === tab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {activeTab === tab && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 animate-expandWidth"></span>
              )}
              {tab === 'overview' && <BarChart className="h-4 w-4 mr-2" />}
              {tab === 'trips' && <Briefcase className="h-4 w-4 mr-2" />}
              {tab === 'expenses' && <DollarSign className="h-4 w-4 mr-2" />}
              {tab === 'travelers' && <Users className="h-4 w-4 mr-2" />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Total Travel Spend",
                  value: `$${travelMetrics.totalSpent.toLocaleString()}`,
                  change: "12.4%",
                  icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
                  bgColor: "bg-indigo-100",
                  changeType: "positive"
                },
                {
                  title: "Total Trips",
                  value: travelMetrics.totalTrips,
                  subtext: `${travelMetrics.upcomingTrips} upcoming • $${travelMetrics.avgTripCost} avg cost`,
                  icon: <Briefcase className="h-6 w-6 text-indigo-600" />,
                  bgColor: "bg-indigo-100"
                },
                {
                  title: "Total Savings",
                  value: `$${travelMetrics.savingsToDate.toLocaleString()}`,
                  subtext: `Most visited: ${travelMetrics.mostVisited}`,
                  icon: <DollarSign className="h-6 w-6 text-green-600" />,
                  bgColor: "bg-green-100",
                  valueColor: "text-green-600"
                }
              ].map((metric, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-500 transform ${
                    animateMetrics ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-gray-500 font-medium text-sm">{metric.title}</h3>
                      <div className={`mt-2 text-3xl font-bold ${metric.valueColor || 'text-gray-900'} animate-countUp`}>
                        {metric.value}
                      </div>
                      <div className="mt-1 flex items-center text-sm">
                        {metric.change && (
                          <span className={`text-${metric.changeType === 'positive' ? 'green' : 'red'}-600 font-medium flex items-center`}>
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            {metric.change}
                          </span>
                        )}
                        {metric.change && <span className="text-gray-500 ml-2">vs. previous period</span>}
                        {metric.subtext && <span className="text-gray-500">{metric.subtext}</span>}
                      </div>
                    </div>
                    <div className={`${metric.bgColor} p-3 rounded-lg`}>
                      {metric.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts and Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div 
                className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-500 transform ${
                  animateCharts ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-gray-800">Monthly Spending</h3>
                  <button className="text-indigo-600 text-sm font-medium hover:underline transition-all duration-200">View Details</button>
                </div>
                <div className="h-64 flex items-end space-x-4 mb-6">
                  {monthlySpending.map((month, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all rounded-t-md"
                        style={{ 
                          height: animateCharts ? `${(month.amount / 6000) * 100}%` : '0%',
                          transition: 'height 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                      <div className="mt-2 text-xs font-medium text-gray-600">{month.month}</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                  <div>
                    <span className="text-gray-700 font-medium">Highest: </span>
                    June ($5,750)
                  </div>
                  <div>
                    <span className="text-gray-700 font-medium">Lowest: </span>
                    February ($2,800)
                  </div>
                </div>
              </div>

              <div 
                className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-500 transform ${
                  animateCharts ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-gray-800">Expense Breakdown</h3>
                  <button className="text-indigo-600 text-sm font-medium hover:underline transition-all duration-200">View Details</button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full bg-gray-100"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PieChart className={`h-16 w-16 text-indigo-500 ${animateCharts ? 'animate-spin-slow' : ''}`} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-3">
                      {expensesByCategory.map((category, index) => (
                        <div 
                          key={index} 
                          className="flex items-center"
                          style={{ 
                            opacity: animateCharts ? 1 : 0,
                            transform: animateCharts ? 'translateX(0)' : 'translateX(20px)',
                            transition: 'all 0.5s ease-out',
                            transitionDelay: `${index * 100 + 300}ms`
                          }}
                        >
                          <div className={`w-3 h-3 rounded-full mr-2 ${
                            index === 0 ? 'bg-indigo-600' :
                            index === 1 ? 'bg-indigo-400' :
                            index === 2 ? 'bg-indigo-300' : 'bg-indigo-200'
                          }`}></div>
                          <div className="text-sm text-gray-600">{category.category}</div>
                          <div className="ml-auto text-sm font-medium text-gray-800">{category.percentage}%</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                      Total: ${travelMetrics.totalSpent.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent trips */}
            <div 
              className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 transform ${
                animateTrips ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Recent Trips</h3>
                <button className="text-indigo-600 text-sm font-medium flex items-center group hover:underline transition-all duration-200">
                  View All <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTrips.map((trip, index) => (
                      <tr 
                        key={trip.id} 
                        className="hover:bg-gray-50 transition-colors"
                        style={{ 
                          opacity: animateTrips ? 1 : 0,
                          transform: animateTrips ? 'translateY(0)' : 'translateY(10px)',
                          transition: 'all 0.3s ease-out',
                          transitionDelay: `${index * 75}ms`
                        }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mr-3 transform transition-transform hover:scale-110 duration-300">
                              {trip.destination.substring(0, 2)}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{trip.destination}</div>
                              <div className="text-gray-500 text-sm">{trip.travelers} traveler{trip.travelers > 1 ? 's' : ''}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{trip.departureDate}</div>
                          <div className="text-xs text-gray-500">to {trip.returnDate}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">${trip.totalCost.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            trip.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-indigo-100 text-indigo-800'
                          }`}>
                            {trip.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-green-600">
                            ${trip.savings}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium transition-colors duration-200">View</button>
                          <button className="text-gray-600 hover:text-gray-900 text-sm font-medium ml-4 group transition-all duration-200">
                            <FileText className="h-4 w-4 group-hover:scale-110" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Other tabs placeholders with animations */}
        {['trips', 'expenses', 'travelers'].includes(activeTab) && (
          <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fadeIn">
            <div className="flex justify-center mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
              {activeTab === 'trips' && <Briefcase className="h-16 w-16 text-indigo-300" />}
              {activeTab === 'expenses' && <DollarSign className="h-16 w-16 text-indigo-300" />}
              {activeTab === 'travelers' && <Users className="h-16 w-16 text-indigo-300" />}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 animate-fadeInUp">
              {activeTab === 'trips' && "Trips Analytics"}
              {activeTab === 'expenses' && "Expense Reports"}
              {activeTab === 'travelers' && "Traveler Management"}
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              {activeTab === 'trips' && "View detailed information about all your past and upcoming business and personal trips."}
              {activeTab === 'expenses' && "Track and manage all travel-related expenses with detailed breakdowns and spending analytics."}
              {activeTab === 'travelers' && "Manage team members, view individual travel history, and analyze spending by traveler."}
            </p>
          </div>
        )}
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
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
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes countUp {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

        <Footer />
    </div>
  );
};

export default Reports;