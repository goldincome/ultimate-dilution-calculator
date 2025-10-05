import React, { useState } from 'react';
import StandardCalculator from './StandardCalculator';
import RatioCalculator from './RatioCalculator';
import SerialCalculator from './SerialCalculator';

type Tab = 'standard' | 'ratio' | 'serial';

const Calculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('standard');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'standard':
        return <StandardCalculator />;
      case 'ratio':
        return <RatioCalculator />;
      case 'serial':
        return <SerialCalculator />;
      default:
        return null;
    }
  };
  
  const TabButton = ({ tab, label }: { tab: Tab, label: string}) => (
    <button
        onClick={() => setActiveTab(tab)}
        className={`px-4 py-2 text-sm md:text-base font-medium rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-[#0c1c10] focus:ring-primary-400 ${
        activeTab === tab 
            ? 'btn-gradient text-white shadow-lg shadow-primary-900/50' 
            : 'text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5'
        }`}
    >
        {label}
    </button>
  )

  return (
    <div className="max-w-4xl mx-auto">
        <div className="bg-card dark:bg-[#0c1c10] rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/30 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-primary-800">
            <div className="mb-6 flex justify-center bg-gray-100 dark:bg-black/20 rounded-lg p-1.5 space-x-2">
                <TabButton tab="standard" label="Standard (C₁V₁=C₂V₂)" />
                <TabButton tab="ratio" label="Ratio Dilution" />
                <TabButton tab="serial" label="Serial Dilution" />
            </div>
            <div>
                {renderTabContent()}
            </div>
        </div>
    </div>
  );
};

export default Calculator;