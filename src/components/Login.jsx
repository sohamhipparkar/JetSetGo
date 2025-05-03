import React, { useState, useEffect } from 'react';
import { Mail, Lock, EyeOff, Eye, User, ArrowRight, LogIn, Plane, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [flyingPlane, setFlyingPlane] = useState(false);
  const [error, setError] = useState('');
  const [animateForm, setAnimateForm] = useState(false);
  const [showTestCredentials, setShowTestCredentials] = useState(true);
  
  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);
  
  // Test credentials
  const testCredentials = {
    email: 'admin@jetsetgo.com',
    password: 'JetSetGo@123'
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      setAnimateForm(true);
    }, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFlyingPlane(true);
    setError('');

    setTimeout(() => {
      if (email === testCredentials.email && password === testCredentials.password) {
        navigate('/home');
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
        setFlyingPlane(false);
      }
    }, 2000);
  };

  const fillTestCredentials = () => {
    setEmail(testCredentials.email);
    setPassword(testCredentials.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-purple-300 opacity-20 blur-3xl animate-pulse"
            style={{ 
              transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.05}px)`,
              animationDuration: '8s' 
            }}
          ></div>
          <div 
            className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-blue-300 opacity-20 blur-3xl animate-pulse"
            style={{ 
              transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.02}px)`,
              animationDuration: '12s',
              animationDelay: '0.5s' 
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-teal-300 opacity-10 blur-3xl animate-pulse"
            style={{ 
              transform: `translate(-50%, -50%) translate(${scrollY * 0.01}px, ${-scrollY * 0.03}px)`,
              animationDuration: '10s',
              animationDelay: '1s' 
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero section with glass morphism */}
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 pt-16 pb-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4">
              <h1 
                className={`text-5xl font-bold text-white tracking-tight transition-all duration-1000 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
              >
                Welcome Back
              </h1>
              <p 
                className={`text-xl text-blue-100 max-w-2xl mx-auto font-light transition-all duration-1000 delay-300 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                Sign in to your account and continue your journey with us
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black opacity-5"></div>
          <div className="absolute -bottom-8 left-0 right-0 h-16 bg-white rounded-t-[50%]"></div>
          
          {/* Add floating elements */}
          <div className="absolute top-12 right-1/4 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-6 h-6 bg-white rounded-full opacity-30"></div>
          </div>
          <div className="absolute top-24 left-1/3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="w-4 h-4 bg-white rounded-full opacity-20"></div>
          </div>
          <div className="absolute bottom-24 right-1/3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>
            <div className="w-5 h-5 bg-white rounded-full opacity-25"></div>
          </div>
        </div>

        {/* Login form with glass morphism effect */}
        <div className={`max-w-md mx-auto -mt-20 px-4 relative z-20 transition-all duration-1000 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white border-opacity-30 p-8">
            {/* Avatar icon with pulsing effect */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
                <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-indigo-600" />
                </div>
              </div>
            </div>

            <h2 className={`text-2xl font-bold text-center text-gray-800 mb-8 transition-all duration-700 delay-200 ${animateForm ? 'opacity-100' : 'opacity-0'}`}>Account Login</h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm animate-shake">
                {error}
              </div>
            )}
            
            {/* Test Credentials Info Box */}
            {showTestCredentials && (
              <div className={`mb-6 p-4 bg-blue-50 border border-blue-200 text-blue-600 rounded-lg text-sm transition-all duration-700 delay-200 ${animateForm ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Test Credentials</p>
                    <p><span className="font-medium">Email:</span> {testCredentials.email}</p>
                    <p><span className="font-medium">Password:</span> {testCredentials.password}</p>
                    <button 
                      onClick={fillTestCredentials}
                      className="mt-2 text-xs bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Use Test Credentials
                    </button>
                    <button 
                      onClick={() => setShowTestCredentials(false)}
                      className="mt-2 ml-2 text-xs bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 transition-colors duration-300"
                    >
                      Hide
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email field */}
              <div className={`transition-all duration-700 delay-300 transform ${animateForm ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-indigo-500" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-12 pr-4 py-3.5 text-gray-700 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all duration-300 group-hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute bottom-0 left-10 right-4 h-px bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
              
              {/* Password field */}
              <div className={`transition-all duration-700 delay-500 transform ${animateForm ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="flex justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700 ml-1">Password</label>
                  <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-indigo-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-12 pr-12 py-3.5 text-gray-700 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all duration-300 group-hover:shadow-md"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  <div className="absolute bottom-0 left-10 right-4 h-px bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
              
              {/* Remember me checkbox */}
              <div className={`flex items-center transition-all duration-700 delay-700 transform ${animateForm ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="relative flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-all duration-300 cursor-pointer"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Remember me
                  </label>
                </div>
              </div>
              
              {/* Sign in button */}
              <div className={`transition-all duration-700 delay-900 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3.5 px-4 border-0 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 relative overflow-hidden hover:scale-105"
                >
                  <div className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        <div className="animate-spin mr-3 h-5 w-5 text-white">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                        Sign In
                      </>
                    )}
                  </div>
                  
                  {/* Flying plane animation */}
                  <Plane 
                    className={`absolute h-5 w-5 text-white transition-all duration-1000 ease-in-out ${flyingPlane ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      transform: flyingPlane ? 'translateX(200px) translateY(-30px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(-45deg)'
                    }}
                  />
                </button>
              </div>

              {/* Show credentials button (when hidden) */}
              {!showTestCredentials && (
                <div className="text-center mt-2">
                  <button
                    type="button"
                    onClick={() => setShowTestCredentials(true)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                  >
                    Show test credentials
                  </button>
                </div>
              )}

              {/* Social login section */}
              <div className={`relative mt-8 mb-4 transition-all duration-700 delay-1000 ${animateForm ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white bg-opacity-80 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social buttons */}
              <div className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-1100 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {[
                  {
                    name: "Google",
                    color: "text-red-500",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Apple",
                    color: "text-gray-800",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.225,0c-0.3,0.003-0.6,0.029-0.9,0.078C14.073,0.265,12.977,0.969,12.214,2c-0.72-1.031-1.845-1.745-3.137-1.922c-1.293-0.177-2.618,0.204-3.608,1.041C4.488,1.954,3.473,2.667,2.648,3.547C1.165,5.079,0.287,7.05,0.108,9.142c-0.179,2.092,0.347,4.188,1.477,5.904c1.13,1.716,2.809,3.047,4.731,3.746c1.923,0.699,4.041,0.724,5.979,0.07c0.771-0.261,1.498-0.622,2.161-1.071c0.663,0.448,1.389,0.81,2.16,1.071c1.938,0.654,4.056,0.629,5.979-0.07c1.922-0.699,3.601-2.03,4.731-3.746c1.13-1.716,1.656-3.812,1.477-5.904c-0.179-2.092-1.057-4.063-2.54-5.595c-0.825-0.88-1.84-1.593-2.975-2.084C19.024,0.335,17.624-0.012,16.225,0z M16.225,1.988c1.047,0.006,2.068,0.28,2.931,0.791c0.891,0.527,1.634,1.26,2.161,2.133c0.527,0.873,0.791,1.866,0.763,2.875v10.224c0,0.345-0.138,0.679-0.382,0.923c-0.245,0.245-0.578,0.382-0.923,0.382c-0.345,0-0.679-0.138-0.923-0.382c-0.245-0.245-0.382-0.578-0.382-0.923v-10.224c0.021-0.593-0.09-1.185-0.325-1.725s-0.591-1.014-1.032-1.389c-0.441-0.375-0.97-0.648-1.535-0.797s-1.163-0.156-1.736-0.028c-0.573,0.128-1.112,0.376-1.578,0.724c-0.465,0.348-0.846,0.789-1.11,1.294c-0.136-0.009-0.273,0.003-0.404,0.036c-0.212,0.053-0.408,0.16-0.572,0.311s-0.29,0.342-0.37,0.55c-0.265-0.504-0.646-0.946-1.111-1.294c-0.465-0.348-1.004-0.596-1.578-0.724c-0.573-0.128-1.171-0.121-1.736,0.028s-1.094,0.422-1.535,0.797c-0.441,0.375-0.797,0.849-1.032,1.389s-0.346,1.132-0.325,1.725v10.224c0,0.345-0.138,0.679-0.382,0.923c-0.245,0.245-0.578,0.382-0.923,0.382c-0.345,0-0.679-0.138-0.923-0.382c-0.245-0.245-0.382-0.578-0.382-0.923v-10.224c-0.028-1.009,0.236-2.002,0.763-2.875c0.527-0.873,1.271-1.606,2.161-2.133c0.863-0.511,1.854-0.785,2.931-0.791H16.225z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Facebook",
                    color: "text-blue-600",
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073c0-6.627,5.373-12,12-12S24,5.445,24,12.073z"/>
                      </svg>
                    )
                  }
                ].map((social, index) => (
                  <button
                    key={index}
                    type="button"
                    className="flex justify-center items-center py-3 px-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
                  >
                    <span className={`${social.color}`}>{social.icon}</span>
                  </button>
                ))}
              </div>
            </form>

            {/* Sign up link */}
            <div className={`mt-8 text-center transition-all duration-700 delay-1200 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500 inline-flex items-center transition-all duration-300 hover:underline group">
                  Create account
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="max-w-5xl mx-auto mt-24 mb-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Exclusive Member Benefits
            </h3>
            <p className="text-gray-600 mt-3 text-lg">Experience premium features designed just for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Priority Access",
                description: "Skip the line with exclusive early access to new features and bookings",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Premium Rewards",
                description: "Earn points faster and unlock special rewards with every interaction",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Travel Insights",
                description: "Get personalized travel recommendations based on your preferences",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 11h4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 15h4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12H4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 15H4" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 7h6v2H9V7z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: "from-amber-500 to-orange-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 0.3 + 0.5}s`, animationFillMode: 'forwards' }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="text-sm font-medium text-indigo-600 flex items-center hover:text-indigo-800 transition-colors duration-300">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-indigo-600 font-bold text-2xl mb-4">JetSetGo</div>
              <p className="text-gray-600 mb-4 max-w-md">Your ultimate travel companion for seamless journeys and unforgettable experiences around the globe.</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6">
                      {/* Social icons would go here */}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Company",
                links: ["About", "Careers", "News", "Partners"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "FAQ", "Community"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Cookies", "Licenses"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-gray-900 font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 JetSetGo, Inc. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-300">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add the global CSS animation keyframes */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;