import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <footer className={`bg-white border-t border-gray-200 py-12 transition-all duration-700 ease-out ${animated ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Links */}
            <div className={`transform transition-all duration-500 ease-out ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
                <ul className="space-y-2">
                  {[
                    { label: 'About Us', href: '/about' },
                    { label: 'Careers', href: '/careers' },
                    { label: 'Partners', href: '/partners' },
                    { label: 'Press', href: '/press' },
                  ].map((item, index) => (
                    <li
                      key={item.label}
                      className={`transition-all duration-500 ease-out delay-${index * 100}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

          
          {/* Destinations Links */}
          <div className={`transform transition-all duration-500 ease-out delay-400 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Destinations</h3>
            <ul className="space-y-2">
              {[
                { label: 'Europe', href: '/europe' },
                { label: 'Asia', href: '/asia' },
                { label: 'Americas', href: '/america' },
                { label: 'Africa', href: '/africa' },
              ].map((item, index) => (
                <li
                  key={item.label}
                  className="transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          {/* Support Links */}
          <div className={`transform transition-all duration-500 ease-out delay-400 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { label: 'Help Center', href: '/help' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'FAQs', href: '/faq' },
                { label: 'Booking Guide', href: '/guide' },
              ].map((item, index) => (
                <li
                  key={item.label}
                  className="transition-all duration-500 ease-out"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          {/* Social Links and App Downloads */}
          <div className={`transform transition-all duration-500 ease-out delay-600 ${animated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="/twitter" className="text-gray-500 hover:text-indigo-600 hover:scale-110 transform transition-all duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178-.004-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="/instagram" className="text-gray-500 hover:text-indigo-600 hover:scale-110 transform transition-all duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="/github" className="text-gray-500 hover:text-indigo-600 hover:scale-110 transform transition-all duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            
            {/* App Download Section */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-2">Download our app</h4>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <a 
                  href="/play-store" 
                  className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 hover:border-indigo-500 hover:shadow-md hover:bg-indigo-50"
                >
                  <svg className="h-6 w-6 mr-2 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.28 13.26c.96-.56 1.72-1.34 2.24-2.34H8.98v4.51h6.57c-.29 1.73-1.87 5.06-6.57 5.06-3.96 0-7.19-3.28-7.19-7.31s3.23-7.31 7.19-7.31c2.27 0 3.81.97 4.69 1.81l3.14-3.02C15.02 2.89 12.28 1.8 8.98 1.8c-6.88 0-12.44 5.55-12.44 12.38s5.56 12.38 12.44 12.38c7.17 0 11.94-5.05 11.94-12.13 0-.81-.13-1.42-.24-2.04l-11.95-.01z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-medium text-gray-800">Google Play</div>
                  </div>
                </a>
                
                <a 
                  href="/app-store" 
                  className="flex items-center border border-gray-300 rounded-md px-3 py-2 transition-all duration-300 hover:border-indigo-500 hover:shadow-md hover:bg-indigo-50"
                >
                  <svg className="h-6 w-6 mr-2 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.94 5.19A4.38 4.38 0 0016 2.75a4.38 4.38 0 00-3.25 1.69 4.08 4.08 0 00-1.06 2.44 3.75 3.75 0 003.25-1.69zm3.38 5.56c0-3.06 2.5-4.56 2.62-4.62-1.44-2.06-3.69-2.31-4.44-2.37-1.88-.19-3.75 1.12-4.69 1.12-.94 0-2.5-1.12-4-1.06-2.06.06-3.94 1.19-5 3.06-2.12 3.69-.56 9.12 1.56 12.06.94 1.44 2.12 3 3.63 3 1.44-.06 2-1 3.75-1 1.75 0 2.25 1 3.81 1 1.56 0 2.62-1.44 3.56-2.87 1.12-1.62 1.56-3.25 1.62-3.31-1.32-.5-2.44-2.25-2.44-4.01z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-medium text-gray-800">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className={`mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 transition-all duration-700 ease-out delay-800 ${animated ? 'opacity-100' : 'opacity-0'}`}>
          <p>© 2025 Travel Booking App. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center space-x-6">
            <a href="/privacy" className="hover:text-indigo-600 transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="hover:text-indigo-600 transition-colors duration-200">Terms of Service</a>
            <a href="/cookie" className="hover:text-indigo-600 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;