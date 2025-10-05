import React from 'react';
import SerialCalculator from '../components/SerialCalculator';
import { usePageMetadata } from '../hooks/usePageMetadata';

const SerialDilutionPage: React.FC = () => {
    usePageMetadata(
        'Serial Dilution Calculator - Plan Multi-Step Dilutions',
        'Plan your serial dilutions with ease. Our calculator determines the concentration at each step based on your initial concentration, transfer volume, and diluent volume.'
    );

    return (
        <>
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Serial Dilution <span className="text-custom-gradient">Calculator</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Accurately calculate concentrations for a series of dilutions. Ideal for creating standard curves, determining cell concentrations, or any application requiring a range of decreasing concentrations.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
                <div className="bg-card dark:bg-[#0c1c10] rounded-2xl shadow-lg dark:shadow-2xl dark:shadow-black/30 p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-primary-800">
                   <SerialCalculator />
                </div>
            </div>

            <section className="mt-16 max-w-4xl mx-auto space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">What is a <span className="text-custom-gradient">Serial Dilution?</span></h2>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                        <p>A serial dilution is a sequence of dilutions where the dilution factor is the same for each step. For example, in a 1:10 serial dilution, you might take 1 mL of stock and add it to 9 mL of diluent. Then, you would take 1 mL of that new solution and add it to another 9 mL of diluent, and so on.</p>
                        <p>This method is highly efficient for creating a wide range of very dilute solutions with high accuracy, which is crucial in microbiology, biochemistry, and pharmacology.</p>
                    </div>
                </div>
                 <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">How to Use This <span className="text-custom-gradient">Calculator</span></h2>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
                        <li><strong>Enter Initial Values:</strong> Input the concentration of your starting stock solution.</li>
                        <li><strong>Define Dilution Step:</strong> Enter the volume you will transfer and the volume of diluent (e.g., buffer or water) in each tube.</li>
                        <li><strong>Set Number of Dilutions:</strong> Specify how many dilution steps you want to perform in the series.</li>
                        <li><strong>Analyze Results Table:</strong> The calculator generates a table showing the precise concentration for each step in your serial dilution.</li>
                    </ol>
                </div>
            </section>
        </>
    );
};

export default SerialDilutionPage;