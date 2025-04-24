import { useState, useEffect } from 'react';
import { CheckCircle, Plane, Calendar, Clock, MapPin, Users } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function FlightConfirmationPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showContent, setShowContent] = useState(false);
  
  // Sample flight data
  const flightData = {
    confirmation: "ABC123456",
    passenger: "John Doe",
    departure: {
      city: "New York",
      airport: "JFK",
      date: "May 15, 2025",
      time: "10:30 AM",
      terminal: "Terminal 4",
      gate: "Gate B12"
    },
    arrival: {
      city: "San Francisco",
      airport: "SFO",
      date: "May 15, 2025",
      time: "1:45 PM",
      terminal: "Terminal 1",
      gate: "Gate A5"
    },
    flight: {
      number: "AA 1234",
      duration: "6h 15m",
      class: "Economy",
      seat: "14A"
    }
  };

  useEffect(() => {
    // Show confetti effect on mount
    setShowConfetti(true);
    
    // Animate in content with a slight delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Generate confetti pieces
  const renderConfetti = () => {
    const pieces = [];
    const colors = ['bg-blue-500', 'bg-green-400', 'bg-yellow-400', 'bg-pink-500', 'bg-purple-500'];
    
    for (let i = 0; i < 60; i++) {
      const left = `${Math.random() * 100}%`;
      const animationDelay = `${Math.random() * 3}s`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      pieces.push(
        <div 
          key={i} 
          className={`absolute w-2 h-2 rounded-full ${color} opacity-0`}
          style={{
            left,
            top: '-20px',
            animation: 'confetti 3s ease-in infinite',
            animationDelay
          }}
        />
      );
    }
    return pieces;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with appropriate padding to account for navbar */}
      <div className="flex-grow flex items-center justify-center p-4 pt-20 pb-16">
        {/* Confetti container */}
        {showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {renderConfetti()}
          </div>
        )}

        {/* Card container with slide-up animation */}
        <div 
          className={`w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-700 ${
            showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Success header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-36 h-36 bg-white/10 rounded-full" />
            <div className="absolute right-8 bottom-0 w-16 h-16 bg-white/10 rounded-full" />
            
            <div className="flex items-center space-x-4 relative z-10">
              <div className="rounded-full bg-white p-2 animate-pulse">
                <CheckCircle className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
                <p className="opacity-90">Your flight has been successfully booked</p>
              </div>
            </div>
          </div>

          {/* Confirmation code */}
          <div className="p-6 bg-gray-50 border-b">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Confirmation Code</p>
                <p className="text-xl font-mono font-bold tracking-wider">{flightData.confirmation}</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="h-5 w-5" />
                <p>{flightData.passenger}</p>
              </div>
            </div>
          </div>

          {/* Flight details */}
          <div className="p-6">
            {/* Flight route visualization */}
            <div className="relative flex items-center justify-between mb-8 px-6">
              <div className="flex flex-col items-center animate-fadeIn">
                <div className="w-4 h-4 rounded-full bg-blue-600 mb-2" />
                <p className="font-bold text-sm">{flightData.departure.airport}</p>
                <p className="text-xs text-gray-500">{flightData.departure.city}</p>
              </div>
              
              <div className="grow mx-4 flex items-center">
                <div className="h-0.5 bg-gray-300 w-full relative">
                  <div className="absolute inset-0 bg-blue-600 animate-progressLine" />
                  <Plane className="text-blue-600 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 animate-planeFly" size={20} />
                </div>
              </div>
              
              <div className="flex flex-col items-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="w-4 h-4 rounded-full bg-blue-600 mb-2" />
                <p className="font-bold text-sm">{flightData.arrival.airport}</p>
                <p className="text-xs text-gray-500">{flightData.arrival.city}</p>
              </div>
            </div>

            {/* Flight info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Departure Card */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 transform transition-all hover:scale-105 hover:shadow-md">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                  <Plane className="mr-2 h-5 w-5" /> Departure
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <Calendar className="h-5 w-5 text-blue-700 mr-2" />
                    <p>{flightData.departure.date}</p>
                  </div>
                  <div className="flex">
                    <Clock className="h-5 w-5 text-blue-700 mr-2" />
                    <p>{flightData.departure.time}</p>
                  </div>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-blue-700 mr-2" />
                    <p>{flightData.departure.terminal}, {flightData.departure.gate}</p>
                  </div>
                </div>
              </div>
              
              {/* Arrival Card */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-100 transform transition-all hover:scale-105 hover:shadow-md">
                <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
                  <Plane className="mr-2 h-5 w-5 transform rotate-90" /> Arrival
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <Calendar className="h-5 w-5 text-green-700 mr-2" />
                    <p>{flightData.arrival.date}</p>
                  </div>
                  <div className="flex">
                    <Clock className="h-5 w-5 text-green-700 mr-2" />
                    <p>{flightData.arrival.time}</p>
                  </div>
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-green-700 mr-2" />
                    <p>{flightData.arrival.terminal}, {flightData.arrival.gate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight details bar */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4 grid grid-cols-3 gap-4 text-center">
              <div className="transform transition hover:scale-110">
                <p className="text-gray-500 text-xs">Flight</p>
                <p className="font-bold">{flightData.flight.number}</p>
              </div>
              <div className="transform transition hover:scale-110">
                <p className="text-gray-500 text-xs">Duration</p>
                <p className="font-bold">{flightData.flight.duration}</p>
              </div>
              <div className="transform transition hover:scale-110">
                <p className="text-gray-500 text-xs">Seat</p>
                <p className="font-bold">{flightData.flight.seat}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transform transition-all hover:bg-blue-700 hover:shadow-lg flex-1 flex justify-center items-center">
                <span className="mr-2">Download E-Ticket</span>
              </button>
              <button className="border border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-medium transform transition-all hover:bg-blue-50 flex-1 flex justify-center items-center">
                <span className="mr-2">Add to Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        @keyframes progressLine {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        
        @keyframes planeFly {
          0% {
            transform: translate(-100%, -50%);
          }
          100% {
            transform: translate(0%, -50%);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-progressLine {
          animation: progressLine 1.5s ease-out forwards;
        }
        
        .animate-planeFly {
          animation: planeFly 1.5s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}