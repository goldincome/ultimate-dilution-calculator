import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#102613] border-t border-primary-900 mt-16">
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; {currentYear} DilutionCalc. All rights reserved.</p>
        <div className="mt-4 text-sm flex justify-center space-x-4">
          <a href="/about.html" className="hover:text-primary-400 transition-colors">About</a>
          <a href="/privacy-policy.html" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
          <a href="/contact.html" className="hover:text-primary-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;