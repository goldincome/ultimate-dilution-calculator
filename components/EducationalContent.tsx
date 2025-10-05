import React from 'react';

const EducationalContent: React.FC = () => {
  const faqs = [
    {
      q: "What is the C1V1 = C2V2 equation?",
      a: "The equation C₁V₁ = C₂V₂ is a fundamental formula used in chemistry and biology to calculate dilutions. It stands for: C₁ (Initial Concentration) × V₁ (Initial Volume) = C₂ (Final Concentration) × V₂ (Final Volume). It's based on the principle that the amount of solute remains constant when a solvent is added."
    },
    {
      q: "How do I calculate the amount of solvent to add?",
      a: "To find the volume of solvent (diluent) to add, first calculate the final volume (V₂) using the calculator. Then, subtract the initial volume (V₁) from the final volume (V₂). The result is the volume of solvent you need to add to your initial solution."
    },
    {
      q: "Can I use different units for concentration and volume?",
      a: "Yes, our calculator automatically handles unit conversions. However, for the formula to work, the units for initial and final concentrations must be consistent (e.g., both Molarity or both mg/mL), and the units for initial and final volumes must be consistent. The calculator will alert you if you mix incompatible concentration types."
    },
    {
        q: "What is a stock solution?",
        a: "A stock solution is a concentrated solution that is diluted to a lower concentration for actual use. Using stock solutions saves time, conserves materials, reduces storage space, and improves accuracy compared to preparing working solutions from scratch each time."
    }
  ];

  return (
    <div className="mt-16 max-w-4xl mx-auto space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">How to Use the <span className="text-custom-gradient">Calculator</span></h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-400">
          <li><strong>Select Calculation Mode:</strong> Choose between Standard (C₁V₁=C₂V₂), Ratio, or Serial dilution at the top.</li>
          <li><strong>Choose Variable to Solve For:</strong> Select which of the four variables (C₁, V₁, C₂, or V₂) you want to calculate.</li>
          <li><strong>Enter Known Values:</strong> Fill in the three known values in the input fields for your initial (stock) and final solutions.</li>
          <li><strong>Select Units:</strong> Use the dropdowns to select the correct units for each concentration and volume.</li>
          <li><strong>View Instant Result:</strong> The calculator provides the result in real-time. No need to press a 'Calculate' button.</li>
          <li><strong>Review Breakdown:</strong> Expand the 'How this was calculated' section to see the formula and values used.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">Understanding the <span className="text-custom-gradient">Dilution Formula</span></h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>The dilution equation is a straightforward way to determine how to prepare a diluted solution from a more concentrated stock solution. The core principle is that the amount of solute doesn't change during dilution; only the volume of the solvent increases, which decreases the overall concentration.</p>
            <ul className="list-disc list-inside space-y-2 bg-card dark:bg-[#0c1c10] border border-gray-200 dark:border-primary-900 p-4 rounded-md">
                <li><strong>C₁ (Initial Concentration):</strong> The concentration of your starting solution (stock solution).</li>
                <li><strong>V₁ (Initial Volume):</strong> The volume of the stock solution you will use.</li>
                <li><strong>C₂ (Final Concentration):</strong> The desired concentration of your new, diluted solution.</li>
                <li><strong>V₂ (Final Volume):</strong> The total final volume of your diluted solution.</li>
            </ul>
            <p>By knowing any three of these values, you can rearrange the formula to solve for the fourth, unknown value. This calculator automates that process, saving you time and preventing manual calculation errors.</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-4">Frequently Asked <span className="text-custom-gradient">Questions</span></h2>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <details key={index} className="bg-card dark:bg-[#0c1c10] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-primary-900/70">
                    <summary className="font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">{faq.q}</summary>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
                </details>
            ))}
        </div>
      </section>
    </div>
  );
};

export default EducationalContent;