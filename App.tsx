import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RatioDilutionPage from './pages/RatioDilutionPage';
import SerialDilutionPage from './pages/SerialDilutionPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const Router = () => {
    const { pathname } = window.location;

    switch (pathname) {
        case '/ratio-dilution-calculator.html':
        case '/ratio-dilution-calculator':
            return <RatioDilutionPage />;

        case '/serial-dilution-calculator.html':
        case '/serial-dilution-calculator':
            return <SerialDilutionPage />;

        case '/about.html':
        case '/about':
            return <AboutPage />;

        case '/privacy-policy.html':
        case '/privacy-policy':
            return <PrivacyPolicyPage />;

        case '/contact.html':
        case '/contact':
            return <ContactPage />;

        case '/index.html':
        case '/':
        default:
            return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark:bg-[#0b1a0d] dark:text-gray-300 transition-colors duration-300">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;