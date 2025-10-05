import React from 'react';
import StandardCalculator from '../components/StandardCalculator';
import EducationalContent from '../components/EducationalContent';
import { usePageMetadata } from '../hooks/usePageMetadata';

const HomePage: React.FC = () => {
    usePageMetadata(
        'Dilution Calculator - Free C1V1 = C2V2 Solution Calculator',
        'Calculate dilutions instantly with our free dilution calculator. Solve C1V1 = C2V2 for any variable. Perfect for lab work, cleaning solutions, and more. Try it now!'
    );

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    The Ultimate <span className="text-custom-gradient">Dilution Calculator</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Instantly solve the C₁V₁ = C₂V₂ equation for any variable. Perfect for lab work, chemistry, cooking, and more.
                </p>
                <div className="mt-4 text-sm">
                    <span className="inline-block bg-primary-100/50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 rounded-full px-4 py-1.5 font-medium border border-primary-200 dark:border-primary-700">
                        ✓ Scientifically Validated Formulas
                    </span>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <div className="bg-card dark:bg-[#0c1c10] rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/30 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-primary-800">
                    <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">Standard Dilution (C₁V₁ = C₂V₂)</h2>
                    <StandardCalculator />
                </div>
            </div>

            <EducationalContent />
        </>
    );
};

export default HomePage;