import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const BeakerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.443 2.216a2 2 0 001.212 1.542a2 2 0 001.806-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.806.547a2 2 0 001.212-1.542l.443-2.216a2 2 0 00-.547-1.806z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 dark:bg-[#0b1a0d]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-primary-900 transition-colors">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <BeakerIcon />
          <span className="text-xl font-bold text-gray-800 dark:text-white">DilutionCalc</span>
        </a>
        <nav className="flex items-center space-x-4">
          <ul className="flex items-center space-x-6 text-gray-600 dark:text-gray-300">
            <li><a href="/" className="hover:text-primary transition-colors font-medium">Home</a></li>
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:text-primary transition-colors font-medium focus:outline-none">
                <span>Tools</span>
                <svg className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-card dark:bg-[#0c1c10] border border-gray-200 dark:border-primary-800 rounded-md shadow-lg py-2">
                  <a href="/?page=ratio-dilution-calculator" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-950 hover:text-gray-900 dark:hover:text-white">Ratio Dilution Calculator</a>
                  <a href="/?page=serial-dilution-calculator" className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-primary-950 hover:text-gray-900 dark:hover:text-white">Serial Dilution Calculator</a>
                </div>
              )}
            </li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;