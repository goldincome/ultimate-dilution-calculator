import React from 'react';

const EducationalContent: React.FC = () => {
    
  const Section: React.FC<{title: React.ReactNode, children: React.ReactNode}> = ({title, children}) => (
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-primary-800 pb-2 mb-6">
          {title}
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-400 prose prose-lg dark:prose-invert max-w-none prose-a:text-primary-600 hover:prose-a:text-primary-500">
          {children}
        </div>
      </section>
  );

  const SubSection: React.FC<{title: string, children: React.ReactNode, id?: string}> = ({title, children, id}) => (
      <div className="mt-6" id={id}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
          <div className="space-y-3">{children}</div>
      </div>
  );

  const CTABlock: React.FC<{href: string, buttonText: string, children: React.ReactNode}> = ({ href, buttonText, children }) => (
    <div className="my-6 p-6 bg-primary-50 dark:bg-primary-950/50 border-l-4 border-primary-500 rounded-r-lg not-prose">
        <p className="text-lg text-primary-800 dark:text-primary-200">{children}</p>
        <a href={href} className="inline-block mt-4 btn-gradient text-gray-900 dark:text-white font-semibold py-2 px-5 rounded-md hover:opacity-90 transition-opacity">
            {buttonText}
        </a>
    </div>
  );

  const faqs = [
    {
      q: "What is the primary formula used to calculate simple dilution?",
      a: "The primary formula for simple dilution is the conservation of moles equation: C₁V₁ = C₂V₂. This formula is used to quickly determine any unknown variable when three others are known."
    },
    {
      q: "What is the difference between a 1:10 dilution and a 1/10 dilution?",
      a: "In modern scientific notation, there is typically no difference. Both 1:10 and 1/10 refer to a dilution factor where 1 part of stock is present in 10 parts of total solution."
    },
    {
      q: "How do you calculate the final concentration after a serial dilution?",
      a: "The final concentration is calculated by multiplying the initial concentration by the Total Dilution Factor (DF). The total DF is found by multiplying the dilution factors of each step: Total DF = DF₁ × DF₂ × DF₃..."
    },
    {
      q: "Should I use Molarity (mol/L) or Mass/Volume (g/L) for dilution calculations?",
      a: "You can use either, but C₁ and C₂ must be in the same units. If you need to switch between the two, you must use the compound's molecular weight as the conversion factor."
    },
    {
      q: "Why is proper mixing so critical in dilution steps?",
      a: "Proper mixing ensures the solute is uniformly distributed throughout the solvent. Without thorough mixing, the concentration will be heterogeneous, leading to inaccurate results if any aliquot is taken."
    },
    {
        q: "What is a dilution factor?",
        a: "The dilution factor (DF) is the factor by which the stock concentration is reduced. It is calculated by dividing the final volume (V₂) by the initial volume of stock used (V₁)."
    }
  ];

  return (
    <div className="mt-16 max-w-4xl mx-auto space-y-12">
      <Section title={<>How to Use the <span className="text-custom-gradient">Calculator</span></>}>
        <ol className="list-decimal list-outside space-y-3 pl-5 text-lg not-prose">
            <li><strong>Select Calculation Mode:</strong> In the main calculator, choose between Standard (C₁V₁=C₂V₂), Ratio, or Serial dilution using the tabs at the top. This page focuses on the Standard calculator.</li>
            <li><strong>Choose Variable to Solve For:</strong> Select which of the four variables (C₁, V₁, C₂, or V₂) you want to calculate.</li>
            <li><strong>Enter Known Values:</strong> Fill in the three known values in the input fields for your initial (stock) and final solutions.</li>
            <li><strong>Select Units:</strong> Use the dropdowns to select the correct units for each concentration and volume.</li>
            <li><strong>View Instant Result:</strong> The calculator provides the result in real-time. No need to press a 'Calculate' button.</li>
            <li><strong>Review Breakdown:</strong> Expand the 'How this was calculated' section to see the formula and values used.</li>
        </ol>
      </Section>

      <Section title={<>Understanding the <span className="text-custom-gradient">Basics</span></>}>
        <div className="not-prose">
          <SubSection title="The C₁V₁ = C₂V₂ Formula Explained">
              <p>The dilution equation is a cornerstone of lab work. It allows you to determine how to dilute a stock solution to a desired concentration. Here’s what each part means:</p>
              <ul className="list-disc list-inside space-y-2 bg-card dark:bg-[#0c1c10] border border-gray-200 dark:border-primary-900 p-4 rounded-md">
                  <li><strong>C₁ (Initial Concentration):</strong> The concentration of your starting solution (stock solution).</li>
                  <li><strong>V₁ (Initial Volume):</strong> The volume of the stock solution you will use.</li>
                  <li><strong>C₂ (Final Concentration):</strong> The desired concentration of your new, diluted solution.</li>
                  <li><strong>V₂ (Final Volume):</strong> The total final volume of your diluted solution.</li>
              </ul>
              <p>The principle is that the amount of solute (Concentration × Volume) remains constant before and after adding more solvent. By knowing any three values, you can easily solve for the fourth using our calculator.</p>
          </SubSection>
        </div>
      </Section>
      
      <hr className="border-gray-300 dark:border-primary-800/50 my-16" />
      
      <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">The Ultimate Guide to Dilution Calculator</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Master C₁V₁=C₂V₂, Serial Dilutions, & Ratio Calculations</p>
      </div>

      <Section title={<>The Lab Bench Dilemma: <span className="text-custom-gradient">Accuracy & The Cost of a Single Mistake</span></>}>
        <p>Stop guessing and start quantifying.</p>
        <p>If you’ve spent any time in a lab—whether mixing buffers for a simple undergraduate experiment or prepping reagents for a critical ELISA assay—you know the feeling. It's that moment you finish meticulously measuring volumes, look at your final solution, and the nagging doubt creeps in: <strong>Did I get the calculation right?</strong> 🤔</p>
        <p>Dilution is arguably the single most fundamental skill in chemistry, biology, and pharmacology. It underpins everything from accurate drug dosage to reproducible research data. Yet, it’s also the source of the most common, costly, and frustrating mistakes. A single misplaced decimal point or a confusion between a 1:10 ratio and a 1/10 dilution can invalidate a week's worth of work, contaminate an expensive reagent, or, in professional settings, lead to serious real-world errors.</p>
        <p><strong>The stakes are high.</strong> For students, it means failed exams or inconclusive lab reports. For professionals, it can mean lost grants, delayed product launches, or compromised patient safety. <strong>Accuracy isn't optional; it's everything.</strong></p>
        <SubSection title="The Problem is Not the Formula—It's the Mental Math">
            <p>The issue isn't that scientists don't know the core formula. Most of us can recite <strong>C₁V₁ = C₂V₂</strong> in our sleep. The real challenge is the practical execution: dealing with ever-changing units (M, µM, ng/mL, percent), managing multi-step serial dilutions, and clarifying the often-confusing world of ratio notation.</p>
            <p>That's where this guide—and our powerful suite of tools—comes in.</p>
        </SubSection>
         <SubSection title="Your Promise: Master Dilution Calculation and Eliminate Error">
            <p>This isn't just another textbook chapter. This is <strong>The Ultimate Guide to Dilution Calculator</strong>, built by experts who've seen the cost of lab errors firsthand. We will transform dilution from a source of stress into a source of confidence.</p>
            <p>Over the next few sections, we'll dive deep into the three essential forms of dilution, the very calculations our <strong>Standard Dilution Calculator</strong>, <strong>Serial Dilution Calculator</strong>, and <strong>Ratio Dilution Calculator</strong> were built to solve. By the end of this guide, you will:</p>
            <ol className="list-decimal list-outside space-y-2 pl-5">
                <li><strong>Master the C₁V₁=C₂V₂ formula</strong> for standard concentration conversions.</li>
                <li><strong>Confidently plan and execute complex serial dilutions</strong> without propagation of error.</li>
                <li><strong>Finally understand and correctly use ratio notation</strong> (like 1:100) in any application.</li>
                <li><strong>Know when and why to use the Dilution Calculator</strong> to ensure 100% accuracy on every single attempt.</li>
            </ol>
            <p>Let's begin the journey toward true lab confidence.</p>
        </SubSection>
      </Section>
      
      <Section title={<>Pillar 1: Standard Dilution and the Power of <span className="text-custom-gradient">C₁V₁=C₂V₂</span></>}>
        <p>In the world of quantitative science, few equations are as critical, or as frequently used, as the dilution formula. It's based on one unshakeable principle: <strong>The amount of solute never changes.</strong></p>
        <p>When you add solvent (like water) to a concentrated solution, you're merely increasing the total volume, thus decreasing the concentration. The number of moles of the original solute remains constant.</p>
        <p>This gives us the renowned dilution formula: <strong>C₁V₁ = C₂V₂</strong></p>
        
        <div className="overflow-x-auto not-prose my-4">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-black/30">
                        <th className="p-2 border border-gray-300 dark:border-primary-800">Variable</th>
                        <th className="p-2 border border-gray-300 dark:border-primary-800">Definition</th>
                        <th className="p-2 border border-gray-300 dark:border-primary-800">Unit Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>C₁</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Initial Concentration</strong> (Stock Solution)</td><td className="p-2 border border-gray-300 dark:border-primary-800">M (Molar), mM, g/L, %</td></tr>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>V₁</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Initial Volume</strong> (Volume of stock <em>needed</em>)</td><td className="p-2 border border-gray-300 dark:border-primary-800">L, mL, µL</td></tr>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>C₂</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Final Concentration</strong> (Desired Diluted Solution)</td><td className="p-2 border border-gray-300 dark:border-primary-800">M, mM, g/L, %</td></tr>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>V₂</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Final Volume</strong> (Total volume of solution made)</td><td className="p-2 border border-gray-300 dark:border-primary-800">L, mL, µL</td></tr>
                </tbody>
            </table>
        </div>

        <SubSection title="Step-by-Step Walkthrough: A Classic Molarity Example">
            <p>The most common application is determining the required volume of stock solution (V₁).</p>
            <p><strong>Scenario:</strong> Make <strong>500 mL</strong> of a <strong>0.15 M</strong> solution from a stock of <strong>3.0 M</strong>.</p>
            <ol className="list-decimal list-outside space-y-2 pl-5">
                <li><strong>Define Variables:</strong> C₁ = 3.0 M, C₂ = 0.15 M, V₂ = 500 mL.</li>
                <li><strong>Rearrange the Formula to Solve for V₁:</strong> V₁ = (C₂ × V₂) / C₁</li>
                <li><strong>Calculate the Result:</strong> V₁ = (0.15 M × 500 mL) / 3.0 M = 25 mL</li>
            </ol>
            <p><strong>Actionable Takeaway:</strong> Pipette <strong>25 mL</strong> of the 3.0 M stock and add enough solvent to bring the total final volume to 500 mL.</p>
        </SubSection>

        <CTABlock href="#top" buttonText="Use the Standard Dilution Calculator">
           🚀 Stop Calculating—Start Working. While the manual calculation is essential for understanding the principle, a busy lab requires speed and absolute assurance. Manual mistakes with unit conversions or algebra are the number one cause of failure in this step.
        </CTABlock>

        <SubSection title="Advanced Scenario: Molarity vs. Mass/Volume Dilution">
            <p>The successful application of the dilution formula often comes down to <strong>unit system selection</strong>.</p>
            <p>While Molarity (mol/L) is the chemical standard (describing particle count), many working solutions—especially in biology and clinical work—use <strong>Mass/Volume Units</strong> (mg/mL or g/L).</p>
            <p><strong>Rule for Direct Dilution:</strong> For C₁V₁=C₂V₂ to work directly, <strong>C₁ and C₂ must have the same concentration units</strong> (e.g., both in g/L).</p>
            <SubSection title="Unit Conversion Pitfalls: The Molecular Weight Factor">
                <p>The greatest risk of error occurs when converting between the two systems. You must use the compound's <strong>Molecular Weight (Mw in g/mol)</strong>:</p>
                <p className="text-center font-mono p-4 bg-gray-100 dark:bg-black/30 rounded-md not-prose">Molarity (mol/L) × Mw (g/mol) = Concentration (g/L)</p>
                <p>A single slip with micro/milli/nano prefixes or an incorrect Mw can lead to a factor of 1,000,000 difference in concentration.</p>
            </SubSection>
        </SubSection>
      </Section>
      
      <Section title={<>Pillar 2: Mastering <span className="text-custom-gradient">Serial Dilutions</span> for Concentration Gradients</>}>
        <p>A <strong>Serial Dilution</strong> is a succession of step dilutions, where the diluted solution from the previous step becomes the stock for the next. It is essential when a final concentration needs to be drastically reduced (e.g., 1:1,000,000), making a single-step dilution impossible to pipette accurately.</p>
        <SubSection title="The Core Mechanism: Exponential Reduction">
            <p>In a serial dilution, each step typically has the same <strong>Dilution Factor (DF)</strong>, resulting in an exponential reduction.</p>
            <p><strong>Example:</strong> A 1:10 serial dilution means Tube 1 = 1/10, Tube 2 = 1/100, Tube 3 = 1/1,000.</p>
        </SubSection>
        <SubSection title="Step-by-Step Calculation for a 1:5 Serial Dilution">
            <p>The goal is to determine the <strong>Move Volume (V_move)</strong> and the <strong>Diluent Volume (V_diluent)</strong> for a required total volume.</p>
            <p><strong>Scenario:</strong> Create 100 µL per tube in a 1:5 serial dilution (DF=5).</p>
            <ol className="list-decimal list-outside space-y-2 pl-5">
                <li><strong>Calculate Move Volume (V_move):</strong> V_move = V_total / DF = 100 µL / 5 = 20 µL</li>
                <li><strong>Calculate Diluent Volume (V_diluent):</strong> V_diluent = V_total - V_move = 100 µL - 20 µL = 80 µL</li>
            </ol>
            <p><strong>Actionable Takeaway:</strong> Add <strong>80 µL</strong> of diluent to all tubes, then transfer <strong>20 µL</strong> from the previous tube into the next, mixing thoroughly after each transfer.</p>
        </SubSection>
        <div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg not-prose">
            <h4 className="font-bold text-red-800 dark:text-red-200">⚠️ Propagated Error: The Silent Killer</h4>
            <p className="text-red-700 dark:text-red-300">Any pipetting or calculation error in the first step is <strong>compounded and carried</strong> through every subsequent step, often ruining the entire series. Manual calculation for serial dilutions is extremely high-risk.</p>
        </div>
        <CTABlock href="/?page=serial-dilution-calculator" buttonText="Go to the Serial Dilution Calculator">
            Input your starting concentration, desired dilution factor, and final volume. Our tool calculates every step, minimizing the risk of propagated error.
        </CTABlock>
      </Section>

      <Section title={<>Pillar 3: Understanding <span className="text-custom-gradient">Ratio Dilutions (1:X)</span> in Applied Science</>}>
          <p>Ratio notation, like 1:100, is simple but often ambiguous. The central confusion is whether X represents the diluent or the total volume.</p>
          <p><strong>Actionable Rule:</strong> In modern science, when you see <strong>1:X</strong>, it is safest to assume the X represents the <strong>total volume/parts</strong>, making it a 1/X dilution.</p>
           <div className="overflow-x-auto not-prose my-4">
            <table className="w-full text-left border-collapse">
                <thead><tr className="bg-gray-100 dark:bg-black/30"><th className="p-2 border border-gray-300 dark:border-primary-800">Notation</th><th className="p-2 border border-gray-300 dark:border-primary-800">Meaning</th><th className="p-2 border border-gray-300 dark:border-primary-800">Formula</th><th className="p-2 border border-gray-300 dark:border-primary-800">Total Parts</th></tr></thead>
                <tbody>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Dilution Factor (Fraction)</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800">1/10</td><td className="p-2 border border-gray-300 dark:border-primary-800">1 part stock <strong>in</strong> 10 parts total.</td><td className="p-2 border border-gray-300 dark:border-primary-800">10</td></tr>
                    <tr><td className="p-2 border border-gray-300 dark:border-primary-800"><strong>Ratio Dilution (Modern/Clinical)</strong></td><td className="p-2 border border-gray-300 dark:border-primary-800">1:10</td><td className="p-2 border border-gray-300 dark:border-primary-800">1 part stock <strong>in</strong> 10 parts total.</td><td className="p-2 border border-gray-300 dark:border-primary-800">10</td></tr>
                </tbody>
            </table>
           </div>
          <SubSection title="Real-World Applications">
              <p>Ratio dilutions simplify protocols in clinical diagnostics (e.g., diluting serum 1:10) and in industry (e.g., diluting a cleaning concentrate 1:32).</p>
          </SubSection>
          <CTABlock href="/?page=ratio-dilution-calculator" buttonText="Try the Ratio Dilution Calculator">
            🎯 Stop Guessing Ratio Math. If you have a ratio and a target final volume, let the calculator instantly convert the required parts into exact volumes of stock and diluent.
        </CTABlock>
      </Section>
      
      <Section title={<>The 7 Most Common <span className="text-custom-gradient">Dilution Mistakes</span> (And How to Eliminate Them)</>}>
        <p>The human element remains the greatest source of error. Avoid these pitfalls:</p>
         <ol className="list-decimal list-outside space-y-3 pl-5">
            <li><strong>Improper Mixing:</strong> The solvent and solute are not fully homogenous. <strong>Killer:</strong> Vortex or invert thoroughly after <em>every</em> addition.</li>
            <li><strong>Pipetting Errors:</strong> Inaccurate volume settings or technique. <strong>Killer:</strong> Always dial down to the desired volume from a <em>higher</em> setting.</li>
            <li><strong>Unit Inconsistency:</strong> Mixing mL and L, or M and µM without conversion. <strong>Killer:</strong> Write down all variables and ensure units match before calculating.</li>
            <li><strong>V₂ vs. V_diluent Confusion:</strong> Confusing the total volume (V₂) with the volume of diluent added. <strong>Killer:</strong> Always calculate Diluent Volume = V₂ - V₁.</li>
            <li><strong>Using the Wrong Diluent:</strong> Assuming water is sufficient when a pH buffer is required for stability. <strong>Killer:</strong> Always check the stock solution's data sheet.</li>
            <li><strong>Failing to Account for Temperature:</strong> Concentration can be temperature-dependent. <strong>Killer:</strong> Allow solutions to reach room temperature before the final volume adjustment.</li>
            <li><strong>Improper Labeling:</strong> Confusing which tube is which in a series. <strong>Killer:</strong> Label all tubes <em>before</em> you start pipetting with the <strong>final concentration</strong> or <strong>dilution factor</strong>.</li>
        </ol>
        <SubSection title="The Expert Insight">
            <p>Use the Dilution Calculators as your computational safety net to verify all manual work before you start your lab process.</p>
        </SubSection>
      </Section>
      
      <Section title={<>Frequently Asked <span className="text-custom-gradient">Questions</span></>}>
        <div className="space-y-4 not-prose">
            {faqs.map((faq, index) => (
                <details key={index} className="bg-card dark:bg-[#0c1c10] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-primary-900/70">
                    <summary className="font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">{faq.q}</summary>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
                </details>
            ))}
        </div>
      </Section>

       <Section title={<>Confidence in Every Pipette Tip: <span className="text-custom-gradient">Taking the Next Step</span></>}>
          <p>Dilution is not just a calculation; it is a fundamental pillar of scientific precision. The true goal is not just the correct number—it's the <strong>confidence</strong> that the solution in your flask is exactly what your protocol requires.</p>
          <p>The human brain is prone to error. Your time is far better spent focusing on the experimental process and interpreting your results, not risking a mistake in the initial math.</p>
          <p><strong>Your final, essential step toward lab-wide accuracy is automation.</strong></p>
          <p>Don't let a simple multiplication or unit conversion error derail your research, waste expensive reagents, or compromise a critical test. Use the resources built by experts to eliminate the possibility of error before you even touch a pipette.</p>
          <div className="not-prose my-6 p-6 bg-primary-50 dark:bg-primary-950/50 border-l-4 border-primary-500 rounded-r-lg">
                <h4 className="font-bold text-xl text-primary-800 dark:text-primary-200">🎯 Get Accurate, Get Fast, Get Working.</h4>
                <p className="mt-2">We have engineered a suite of dedicated tools that instantly process the complex calculations covered in this guide. <strong>Click the links below now</strong> to save time and guarantee precision on your next experiment:</p>
                <ul className="list-disc list-outside space-y-2 mt-4 pl-5 text-primary-700 dark:text-primary-300">
                    <li><strong>For C₁V₁ = C₂V₂:</strong> Use the <a href="#top" className="font-bold underline hover:text-primary-600 dark:hover:text-primary-200">Standard Dilution Calculator</a> for instant concentration and volume solutions.</li>
                    <li><strong>For standard curves and titering:</strong> Use the <a href="/?page=serial-dilution-calculator" className="font-bold underline hover:text-primary-600 dark:hover:text-primary-200">Serial Dilution Calculator</a> to map out complex multi-step protocols without propagated error.</li>
                    <li><strong>For protocol or clinical ratios:</strong> Use the <a href="/?page=ratio-dilution-calculator" className="font-bold underline hover:text-primary-600 dark:hover:text-primary-200">Ratio Dilution Calculator</a> to instantly convert 1:X notation into precise volumes.</li>
                </ul>
                <p className="mt-4 font-semibold text-primary-800 dark:text-primary-200">Click, Calculate, Confirm.</p>
            </div>
      </Section>
    </div>
  );
};

export default EducationalContent;