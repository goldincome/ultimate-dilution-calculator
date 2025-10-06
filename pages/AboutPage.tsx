import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';

const AboutPage: React.FC = () => {
    usePageMetadata({
        title: 'About DilutionCalc',
        description: 'Learn about DilutionCalc, a free and powerful tool designed for students, scientists, and professionals to perform accurate dilution calculations with ease.',
        keywords: 'about dilutioncalc, science calculator, chemistry tool, lab assistant, free calculator',
        author: 'DilutionCalc Team',
        publisher: 'DilutionCalc',
        robots: 'index, follow',
        canonicalUrl: 'https://dilutioncalculator.xyz/about',
    });

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    About <span className="text-custom-gradient">DilutionCalc</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    A powerful, intuitive, and free tool for all your solution dilution needs.
                </p>
            </div>

            <section className="bg-card dark:bg-[#0c1c10] border border-gray-200 dark:border-primary-900 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">Our <span className="text-custom-gradient">Mission</span></h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p>At DilutionCalc, our mission is to simplify complex scientific calculations and make them accessible to everyone. We understand that whether you are a student in a chemistry lab, a researcher developing a new experiment, or a professional in industries like cleaning or agriculture, accuracy is paramount. Manual calculations can be tedious and prone to error.</p>
                    <p>We created this suite of dilution calculators to provide a reliable, fast, and easy-to-use resource that eliminates guesswork and helps you get precise results every time. Our goal is to empower you to focus on your work, confident that the calculations are handled correctly.</p>
                </div>
            </section>

             <section>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">Key <span className="text-custom-gradient">Features</span></h2>
                <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-400">
                    <li><strong>Multiple Calculator Modes:</strong> We support standard C₁V₁=C₂V₂ calculations, ratio-based dilutions, and complex multi-step serial dilutions to cover a wide range of applications.</li>
                    <li><strong>Flexible Unit Conversion:</strong> The calculators handle a wide variety of concentration and volume units, converting between them automatically to save you time.</li>
                    <li><strong>Instant & Accurate Results:</strong> Get real-time calculations as you type. Our formulas are validated to ensure you receive accurate and dependable results.</li>
                    <li><strong>User-Friendly Interface:</strong> A clean, modern, and responsive design makes the tools easy to use on any device, from desktops to mobile phones.</li>
                    <li><strong>Completely Free:</strong> DilutionCalc is offered as a free resource for the community. No subscriptions, no fees.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutPage;