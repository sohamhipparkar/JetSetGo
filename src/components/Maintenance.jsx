import React from 'react';
import { Shield, Wrench, AlertTriangle, CheckCircle, Clock, Calendar, Settings, Search, Filter, ChevronDown, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import A320 from '../assets/A320.jpg';
import B737 from '../assets/boeing737.jpg';
import A350 from '../assets/a350.jpg';
import B787 from '../assets/boeing787.jpg';
import B777 from '../assets/boeing777.jpg';
import A321 from '../assets/a321.jpg';

const Maintenance = () => {
  const [heroOffset, setHeroOffset] = useState(0);
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [aircraft, setAircraft] = useState([]);
  const [upcomingMaintenance, setUpcomingMaintenance] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setHeroOffset(window.scrollY * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Aircraft data
    const aircraftData = [
      {
        id: "JG-A320-001",
        model: "Airbus A320",
        status: "Operational",
        type: "Passenger",
        flightHours: 12540,
        cyclesRemaining: 230,
        lastMaintenance: "Mar 24, 2025",
        lastMaintenanceType: "A-Check",
        nextMaintenance: "Apr 15, 2025",
        nextMaintenanceType: "B-Check",
        maintenanceProgress: 70,
        alerts: 0,
        image: A320
      },
      {
        id: "JG-B738-002",
        model: "Boeing 737-800",
        status: "In Maintenance",
        type: "Passenger",
        flightHours: 18350,
        cyclesRemaining: 105,
        lastMaintenance: "Feb 12, 2025",
        lastMaintenanceType: "C-Check",
        nextMaintenance: "Apr 10, 2025",
        nextMaintenanceType: "A-Check",
        maintenanceProgress: 30,
        alerts: 2,
        image: B737
      },
      {
        id: "JG-A350-003",
        model: "Airbus A350",
        status: "Operational",
        type: "Passenger",
        flightHours: 8920,
        cyclesRemaining: 340,
        lastMaintenance: "Mar 30, 2025",
        lastMaintenanceType: "A-Check",
        nextMaintenance: "Apr 29, 2025",
        nextMaintenanceType: "A-Check",
        maintenanceProgress: 85,
        alerts: 0,
        image: A350
      },
      {
        id: "JG-B787-004",
        model: "Boeing 787",
        status: "Scheduled Maintenance",
        type: "Passenger",
        flightHours: 15280,
        cyclesRemaining: 180,
        lastMaintenance: "Mar 02, 2025",
        lastMaintenanceType: "B-Check",
        nextMaintenance: "Apr 08, 2025",
        nextMaintenanceType: "A-Check",
        maintenanceProgress: 95,
        alerts: 1,
        image: B787
      },
      {
        id: "JG-B777-005",
        model: "Boeing 777F",
        status: "Operational",
        type: "Cargo",
        flightHours: 20150,
        cyclesRemaining: 190,
        lastMaintenance: "Mar 18, 2025",
        lastMaintenanceType: "A-Check",
        nextMaintenance: "May 02, 2025",
        nextMaintenanceType: "C-Check",
        maintenanceProgress: 60,
        alerts: 0,
        image: B777
      },
      {
        id: "JG-A321-006",
        model: "Airbus A321neo",
        status: "Grounded",
        type: "Passenger",
        flightHours: 5340,
        cyclesRemaining: 0,
        lastMaintenance: "Mar 25, 2025",
        lastMaintenanceType: "Unscheduled",
        nextMaintenance: "Apr 12, 2025",
        nextMaintenanceType: "Engine Repair",
        maintenanceProgress: 15,
        alerts: 3,
        image: A321
      },
    ];
    
    // Upcoming maintenance data
    const maintenanceData = [
      {
        id: 1,
        aircraftId: "JG-B787-004",
        date: "Apr 08, 2025",
        type: "A-Check",
        facility: "Hangar 3",
        duration: "24 hours",
        status: "Scheduled"
      },
      {
        id: 2,
        aircraftId: "JG-A321-006",
        date: "Apr 12, 2025",
        type: "Engine Repair",
        facility: "Hangar 1",
        duration: "72 hours",
        status: "Urgent"
      },
      {
        id: 3,
        aircraftId: "JG-A320-001",
        date: "Apr 15, 2025",
        type: "B-Check",
        facility: "Hangar 2",
        duration: "48 hours",
        status: "Scheduled"
      },
      {
        id: 4,
        aircraftId: "JG-B738-002",
        date: "Apr 10, 2025",
        type: "A-Check",
        facility: "Hangar 4",
        duration: "24 hours",
        status: "In Progress"
      },
      {
        id: 5,
        aircraftId: "JG-A350-003",
        date: "Apr 29, 2025",
        type: "A-Check",
        facility: "Hangar 2",
        duration: "24 hours",
        status: "Scheduled"
      },
    ];
    
    setAircraft(aircraftData);
    setUpcomingMaintenance(maintenanceData);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter aircraft based on search term and filters
  const filteredAircraft = aircraft.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesType = selectedType === 'All' || item.type === selectedType;
    
    // Filter based on active tab
    if (activeTab === 'alerts' && item.alerts === 0) return false;
    if (activeTab === 'maintenance' && item.status !== 'In Maintenance' && item.status !== 'Scheduled Maintenance') return false;
    if (activeTab === 'operational' && item.status !== 'Operational') return false;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // Get maintenance status color
  const getStatusColor = (status) => {
    switch(status) {
      case "Operational":
        return "text-green-600 bg-green-50 border-green-100";
      case "In Maintenance":
        return "text-amber-600 bg-amber-50 border-amber-100";
      case "Scheduled Maintenance":
        return "text-blue-600 bg-blue-50 border-blue-100";
      case "Grounded":
        return "text-red-600 bg-red-50 border-red-100";
      case "Urgent":
        return "text-red-600 bg-red-50 border-red-100";
      default:
        return "text-gray-600 bg-gray-50 border-gray-100";
    }
  };

  // Get progress color
  const getProgressColor = (progress) => {
    if (progress < 25) return "bg-red-500";
    if (progress < 50) return "bg-amber-500";
    if (progress < 75) return "bg-blue-500";
    return "bg-green-500";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar />
      {/* Hero header with animated gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800 p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ transform: `translateY(${heroOffset}px)` }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 opacity-20" 
               style={{ animation: 'float 15s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 opacity-20"
               style={{ animation: 'floatReverse 18s ease-in-out infinite' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative text-center">
          <h1 className="text-4xl font-bold mb-4 text-white" 
              style={{ 
                animation: 'fadeInDown 0.8s ease-out',
                opacity: 1,
                transform: 'translateY(0)'
              }}>Aircraft Maintenance</h1>
          <p className="text-indigo-100 max-w-3xl mx-auto text-lg mb-6"
             style={{ animation: 'fadeInUp 1s ease-out' }}>
            Monitor, schedule, and manage maintenance for the entire fleet
          </p>
        </div>
      </div>

      {/* Main content section */}
      <div className="max-w-7xl mx-auto -mt-6 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tracker Control Panel */}
        <div 
          className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 0.8s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold text-indigo-900">Maintenance Tracker</h2>
            
            {/* Today's Date */}
            <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-lg">
              <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
              <span className="text-indigo-700 font-medium">Today: April 7, 2025</span>
            </div>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search by aircraft ID or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <button
                className="flex items-center justify-between w-full md:w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Filters</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10 p-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option>All</option>
                      <option>Operational</option>
                      <option>In Maintenance</option>
                      <option>Scheduled Maintenance</option>
                      <option>Grounded</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Aircraft Type</label>
                    <select
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option>All</option>
                      <option>Passenger</option>
                      <option>Cargo</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('all')}
            >
              All Aircraft
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'maintenance' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('maintenance')}
            >
              In Maintenance
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'operational' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('operational')}
            >
              Operational
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm flex items-center ${activeTab === 'alerts' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('alerts')}
            >
              <span>Alerts</span>
              {aircraft.filter(a => a.alerts > 0).length > 0 && (
                <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded-full text-xs font-medium">
                  {aircraft.filter(a => a.alerts > 0).length}
                </span>
              )}
            </button>
          </div>
        </div>
        
        {/* Aircraft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredAircraft.length > 0 ? (
            filteredAircraft.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
                style={{ animation: `fadeInUp ${0.3 + index * 0.1}s ease-out` }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={item.image} 
                    alt={item.model} 
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-bold text-gray-800">{item.id}</h3>
                    <div className="text-sm text-gray-500">{item.model} ({item.type})</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </div>
                </div>
                
                {/* Flight Hours and Alerts */}
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm">
                    <span className="text-gray-500">Flight Hours:</span> 
                    <span className="font-medium text-gray-700 ml-1">{item.flightHours.toLocaleString()}</span>
                  </div>
                  {item.alerts > 0 && (
                    <div className="flex items-center text-red-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span className="text-xs font-medium">{item.alerts} {item.alerts === 1 ? 'Alert' : 'Alerts'}</span>
                    </div>
                  )}
                </div>
                
                {/* Maintenance Progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Maintenance Cycle Progress</span>
                    <span>{item.maintenanceProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(item.maintenanceProgress)}`} 
                      style={{ width: `${item.maintenanceProgress}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Maintenance Info */}
                <div className="text-sm grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <div className="text-gray-500">Last Check:</div>
                    <div className="font-medium text-gray-700">{item.lastMaintenanceType}</div>
                    <div className="text-gray-500 text-xs">{item.lastMaintenance}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Next Check:</div>
                    <div className="font-medium text-gray-700">{item.nextMaintenanceType}</div>
                    <div className="text-gray-500 text-xs">{item.nextMaintenance}</div>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="mt-auto flex space-x-2">
                  <button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 py-8 text-center text-gray-500">
              No aircraft match your search criteria
            </div>
          )}
        </div>
        
        {/* Upcoming Maintenance Schedule */}
        <div 
          className="bg-white rounded-xl shadow-xl p-6 mb-8 border border-gray-100"
          style={{ 
            animation: 'fadeInUp 1.2s ease-out',
            opacity: 1,
            transform: 'translateY(0)'
          }}
        >
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">Upcoming Maintenance Schedule</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aircraft
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Facility
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {upcomingMaintenance.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.aircraftId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.facility}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-center mt-6">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center">
              View Full Maintenance Schedule
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
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

export default Maintenance;