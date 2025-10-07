import React from 'react';
import RatioCalculator from '../components/RatioCalculator';
import { usePageMetadata } from '../hooks/usePageMetadata';
import RatioDilutionGuide from '../components/RatioDilutionGuide';

const RatioDilutionPage: React.FC = () => {
    usePageMetadata({
        title: 'Ratio Dilution Calculator: Master 1:X Notation',
        description: 'Stop guessing 1:X! Use our free Ratio Dilution Calculator to clarify Solute:Diluent vs Solute:Total volume, guaranteeing perfect protocol execution.',
        keywords: 'ratio dilution calculator, 1:10 dilution, solute to solvent ratio, parts per million, dilution ratio, lab protocol',
        author: 'DilutionCalc Team',
        publisher: 'DilutionCalc',
        robots: 'index, follow',
        canonicalUrl: 'https://dilutioncalculator.xyz/ratio-dilution-calculator',
    });

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Ratio Dilution <span className="text-custom-gradient">Calculator</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Calculate dilutions based on a specific ratio (e.g., 1:4). This tool is perfect for preparing solutions where the dilution is expressed as parts of solute to parts of solvent.
                </p>
            </div>
            
            <div id="calculator" className="max-w-4xl mx-auto">
                <div className="bg-card dark:bg-[#0c1c10] rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/30 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-primary-800">
                   <RatioCalculator />
                </div>
            </div>

            <section className="mt-16 max-w-4xl mx-auto space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">Understanding <span className="text-custom-gradient">Ratio Dilutions</span></h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                        <p>A ratio dilution describes how many parts of a solute are mixed with how many parts of a solvent. For example, a 1:4 ratio means you are mixing 1 part of your stock solution with 4 parts of your diluent (e.g., water). This results in a total of 5 parts.</p>
                        <p>This calculator helps you determine the final concentration of your solution and tells you exactly how much solvent you need to add to a specific volume of your stock solution to achieve the desired ratio.</p>
                    </div>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">How to Use This <span className="text-custom-gradient">Calculator</span></h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                        <li><strong>Enter Stock Details:</strong> Input the concentration and volume of your initial (stock) solution.</li>
                        <li><strong>Set the Dilution Ratio:</strong> Enter the solute and solvent parts of your ratio. For 1:4, you would enter '1' and '4'.</li>
                        <li><strong>View Instant Results:</strong> The calculator automatically computes the final concentration, the total final volume, and the exact volume of solvent you need to add.</li>
                    </ol>
                </div>
            </section>

            <RatioDilutionGuide />
        </>
    );
};

export default RatioDilutionPage;