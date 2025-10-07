import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';

const ContactPage: React.FC = () => {
    usePageMetadata({
        title: 'Contact Us - DilutionCalc',
        description: 'Get in touch with the DilutionCalc team. We welcome your feedback, questions, and suggestions to help us improve our tools.',
        keywords: 'contact dilutioncalc, support, feedback, science calculator contact',
        author: 'DilutionCalc Team',
        publisher: 'DilutionCalc',
        robots: 'index, follow',
        canonicalUrl: 'https://dilutioncalculator.xyz/contact',
    });
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a dummy handler. In a real application, you would
        // integrate an email service or backend endpoint here.
        alert('Thank you for your message! (This is a demo and does not send emails).');
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Contact <span className="text-custom-gradient">Us</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Have questions, feedback, or suggestions? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Get in Touch</h2>
                    <p>Your feedback is important for helping us improve DilutionCalc. If you've found a bug, have an idea for a new feature, or just want to say hello, please reach out.</p>
                    <div className="flex items-center space-x-3 bg-card dark:bg-[#0c1c10] p-4 rounded-lg border border-gray-200 dark:border-primary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <a href="mailto:contact@dilutioncalc.example.com" className="hover:underline">contact@dilutioncalc.example.com</a>
                    </div>
                     <p className="text-sm text-gray-500 dark:text-gray-500">We typically respond within 1-2 business days.</p>
                </div>
                
                <div className="bg-card dark:bg-[#0c1c10] rounded-2xl p-8 border border-gray-200 dark:border-primary-800">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                            <input type="text" id="name" name="name" required className="block w-full px-3 py-2 rounded-md border-gray-300 dark:border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-white dark:bg-[#051407] text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                            <input type="email" id="email" name="email" required className="block w-full px-3 py-2 rounded-md border-gray-300 dark:border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-white dark:bg-[#051407] text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20"/>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea id="message" name="message" rows={4} required className="block w-full px-3 py-2 rounded-md border-gray-300 dark:border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-white dark:bg-[#051407] text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-gradient text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card dark:focus:ring-offset-[#0c1c10] focus:ring-primary-400">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;