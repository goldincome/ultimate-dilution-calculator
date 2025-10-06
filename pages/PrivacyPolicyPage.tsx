import React from 'react';
import { usePageMetadata } from '../hooks/usePageMetadata';

const PrivacyPolicyPage: React.FC = () => {
    usePageMetadata({
        title: 'Privacy Policy - DilutionCalc',
        description: 'Read the privacy policy for DilutionCalc. We are committed to protecting your privacy and handling your data in an open and transparent manner.',
        keywords: 'privacy policy, data protection, dilution calculator privacy',
        author: 'DilutionCalc Team',
        publisher: 'DilutionCalc',
        robots: 'index, follow',
        canonicalUrl: 'https://[YOUR_DOMAIN_HERE]/privacy-policy',
    });

    return (
        <div className="max-w-4xl mx-auto space-y-8 text-gray-600 dark:text-gray-400">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    Privacy <span className="text-custom-gradient">Policy</span>
                </h1>
                <p className="text-sm">Last Updated: October 27, 2023</p>
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">1. Introduction</h2>
                    <p>Welcome to DilutionCalc. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website. We do not collect any personal data from the calculations you perform.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">2. Data We Collect</h2>
                    <p>We do not require you to create an account or provide any personal information to use our calculator. The data you enter for calculations is processed in your browser and is not stored on our servers.</p>
                    <p>We may use standard analytics tools (like Google Analytics) to collect anonymous usage data, such as page views and session duration, to help us improve our service. This data is aggregated and cannot be used to identify you personally.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">3. Use of Cookies</h2>
                    <p>We may use cookies to enhance your experience. Cookies are small files stored on your device that help with site functionality and analytics. You can choose to disable cookies through your browser settings, though this may affect the functionality of the site.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">4. Third-Party Services</h2>
                    <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these other sites. We encourage you to read their privacy policies.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">5. Changes to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes.</p>
                </section>
                
                 <section>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">6. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us via the information provided on our Contact page.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;