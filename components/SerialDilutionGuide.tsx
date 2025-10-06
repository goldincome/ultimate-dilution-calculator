import React from 'react';
import SerialDilutionDiagram from './icons/SerialDilutionDiagram';

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

const CTABlock: React.FC<{ children: React.ReactNode, href: string, buttonText: string }> = ({ children, href, buttonText }) => (
    <div className="my-6 p-6 bg-primary-50 dark:bg-primary-950/50 border-l-4 border-primary-500 rounded-r-lg not-prose text-center">
        <p className="text-lg text-primary-800 dark:text-primary-200">{children}</p>
        <a href={href} className="inline-block mt-4 btn-gradient text-white font-semibold py-2 px-5 rounded-md hover:opacity-90 transition-opacity">
            {buttonText}
        </a>
    </div>
);

const StyledTable: React.FC<{headers: string[], rows: React.ReactNode[][]}> = ({headers, rows}) => (
    <div className="overflow-x-auto not-prose my-4">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-100 dark:bg-black/30">
                    {headers.map((h, i) => <th key={i} className="p-3 border border-gray-300 dark:border-primary-800 font-semibold text-gray-700 dark:text-gray-200">{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-primary-900/50 bg-white dark:bg-[#0f2112]">
                        {row.map((cell, j) => <td key={j} className="p-3 border border-gray-300 dark:border-primary-800">{cell}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const FAQItem: React.FC<{q: React.ReactNode, a: React.ReactNode}> = ({q, a}) => (
    <details className="bg-card dark:bg-[#0c1c10] p-4 rounded-lg shadow-sm border border-gray-200 dark:border-primary-900/70 not-prose">
        <summary className="font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors">{q}</summary>
        <div className="mt-3 text-gray-600 dark:text-gray-400">{a}</div>
    </details>
);

const SerialDilutionGuide: React.FC = () => {
  return (
    <div className="mt-16 max-w-4xl mx-auto space-y-12">
        <Section title={<>Serial Dilution: The <span className="text-custom-gradient">Necessity and the Risk</span></>}>
            <div className="my-6 p-4 bg-primary-50 dark:bg-primary-950/50 rounded-lg border border-primary-200 dark:border-primary-800 not-prose">
                <SerialDilutionDiagram className="w-full h-auto"/>
            </div>
            <p>If you've ever built a standard curve, performed a titer assay, or quantified bacteria from a swab, you know the single greatest threat to your data isn't the assay itself—it's the exponential accumulation of human error in every single dilution step.</p>
            <p><strong>Serial dilution is the bedrock of quantitative science.</strong> When you need to reduce a stock concentration by a factor of 10,000 or 100,000, you cannot simply pipette the required microscopic volume in one go. Instead, you create a chain reaction: a series of small, manageable dilutions where the product of the first becomes the stock for the second, and so on.</p>
            <p>The benefit is vast concentration coverage. The danger, however, is equally immense: <strong>Propagated Error.</strong></p>
            <p>Imagine you are off by just 5% in the first step due to poor mixing or a slight pipetting miscue. In the next step, that 5% error is not erased—it’s built upon. By the fifth step, that minor initial mistake has ballooned, resulting in a final concentration that could be 20% or 30% away from your target. Your standard curve is useless, your cell count is wrong, and your results are inconclusive.</p>
        </Section>

        <Section title={<>The Solution: <span className="text-custom-gradient">Automation Over Approximation</span></>}>
             <p>Manual calculation for serial dilution is tedious and high-risk. You must constantly calculate the <strong>Dilution Factor (DF)</strong>, determine the <strong>Move Volume</strong> needed for the next tube, and then verify the resulting concentration in units that are often shifting (M to mM to µM).</p>
            <p>This guide is designed to eliminate that risk. This is the <strong>Serial Dilution Calculator</strong> page—the definitive resource for mastering multi-step protocols.</p>
            <p><strong>Our Promise:</strong> We will walk you through the precise calculations and critical lab techniques for any serial dilution scenario. By the end, you'll see why the calculator isn't optional—it's <strong>mandatory</strong> for generating accurate, reproducible scientific results.</p>
        </Section>

        <Section title={<>The Serial Dilution Formula and <span className="text-custom-gradient">Core Concepts</span></>}>
            <p>At its core, serial dilution is an application of the standard C₁V₁=C₂V₂ formula, but repeated sequentially. The key concept is the <strong>Dilution Factor (DF)</strong>.</p>
            <p>The DF is the factor by which the stock solution is diluted. It is calculated by dividing the final total volume (<strong>V<sub>final</sub></strong>) by the volume of stock solution transferred (<strong>V<sub>move</sub></strong>).</p>
            <div className="text-center font-mono p-4 my-4 bg-gray-100 dark:bg-black/30 rounded-md not-prose text-lg">Dilution Factor (DF) = V<sub>final</sub> / V<sub>move</sub></div>
            <p>A common 1:10 serial dilution means 1 part of stock is mixed with 9 parts of diluent to make 10 total parts. The DF is 10/1 = 10.</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Calculating Total Concentration (The Multiplication Rule)</h3>
            <p>The great utility of serial dilution lies in the DF multiplication rule:</p>
            <div className="text-center font-mono p-4 my-4 bg-gray-100 dark:bg-black/30 rounded-md not-prose text-lg">Total Dilution Factor = DF<sub>step 1</sub> × DF<sub>step 2</sub> × DF<sub>step 3</sub> ...</div>
            <StyledTable 
                headers={['Step', 'Single-Step Dilution', 'Concentration Reduction', 'Total Dilution Factor']}
                rows={[
                    ['1', '1:10', '1/10', '10'],
                    ['2', '1:10', '1/10 of previous', <>10 &times; 10 = 100</>],
                    ['3', '1:10', '1/10 of previous', <>100 &times; 10 = 1,000</>]
                ]}
            />
            <p><strong>Final Concentration:</strong> If your initial stock concentration (C<sub>initial</sub>) was 100 M, the concentration in Tube 3 would be 100 M / 1,000 = 0.1 M.</p>
        </Section>

        <CTABlock href="#calculator" buttonText="CLICK HERE TO ACCESS THE SERIAL DILUTION CALCULATOR">
            Skip the Manual Steps. Eliminate Propagated Error. Manual calculation of a dilution series is prone to error at every step: defining the DF, calculating the Move Volume, and multiplying the final concentrations. When your experiment's success relies on the perfect log scale of a standard curve, you can't afford a single miscalculation.
        </CTABlock>

        <Section title={<>Step-by-Step Protocol: Calculating Volumes for a <span className="text-custom-gradient">1:10 Series</span></>}>
            <p>Understanding the practical execution—determining the <strong>Move Volume</strong> and <strong>Diluent Volume</strong>—is crucial for setting up the lab bench correctly.</p>
            <p><strong>Scenario:</strong> You need to create a <strong>five-step, 1:10 serial dilution</strong> where each final tube volume (<strong>V<sub>final</sub></strong>) is <strong>500 µL</strong>.</p>
            <ol className="list-decimal list-outside space-y-3 pl-5 not-prose">
                <li><strong>Determine the Dilution Factor (DF):</strong> <code className="font-bold">DF = 10</code></li>
                <li><strong>Calculate the Volume of Stock to Move (V<sub>move</sub>):</strong> This is the amount of solution you move from the previous tube into the new one. <br/> <code className="font-bold">V<sub>move</sub> = V<sub>final</sub> / DF = 500 µL / 10 = 50 µL</code></li>
                <li><strong>Calculate the Volume of Diluent Required (V<sub>diluent</sub>):</strong> This is the amount of solvent you put in the tube <em>before</em> adding the stock/sample. <br/> <code className="font-bold">V<sub>diluent</sub> = V<sub>final</sub> - V<sub>move</sub> = 500 µL - 50 µL = 450 µL</code></li>
            </ol>
             <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">The Lab Execution Protocol: Setting Up the Tubes</h3>
             <StyledTable 
                headers={['Tube', 'V_diluent Added', 'V_move In', 'Total Volume', 'Total Dilution Factor']}
                rows={[
                    [<strong>1 (Initial Dilution)</strong>, <>450 µL</>, <>50 µL Stock</>, <>500 µL</>, <>10</>],
                    [<strong>2</strong>, <>450 µL</>, <>50 µL from Tube 1</>, <>500 µL</>, <>100</>],
                    [<strong>3</strong>, <>450 µL</>, <>50 µL from Tube 2</>, <>500 µL</>, <>1,000</>],
                    [<strong>4</strong>, <>450 µL</>, <>50 µL from Tube 3</>, <>500 µL</>, <>10,000</>],
                    [<strong>5 (Final)</strong>, <>450 µL</>, <>50 µL from Tube 4</>, <>500 µL</>, <>100,000</>]
                ]}
            />
            <p><strong>Critical Takeaway:</strong> By setting up the diluent volume first, you standardize the process, minimize errors, and ensure the final volume is consistent across the series.</p>
        </Section>
        
        <Section title={<>Types of Serial Dilution: Linear, Logarithmic, and <span className="text-custom-gradient">Non-Integer</span></>}>
            <p>While the 1:10 (ten-fold, or log) dilution is the most common, real-world protocols often require more granular control:</p>
            <StyledTable 
                headers={['Dilution Type', 'Description', 'Application', 'Why Automation is Key']}
                rows={[
                    [<strong>Linear (e.g., 1:2)</strong>, 'The most common, resulting in doubling the total volume and halving the concentration at each step.', <>PCR, quick titrations, simple log<sub>2</sub> curves.</>, 'Simple math, but high risk of Move Volume calculation error.'],
                    [<strong>Logarithmic (e.g., 1:10)</strong>, 'Provides the largest concentration range coverage.', <>ELISA standard curves, bacterial titer plates.</>, 'Essential for broad coverage, but prone to high propagated error.'],
                    [<strong>Non-Integer (e.g., 1:3.16)</strong>, <>Used to create equal steps on a log<sub>10</sub> scale (often 5 steps across 4 log orders).</>, <>Advanced IC<sub>50</sub> or EC<sub>50</sub> dose-response curves.</>, <strong>Impossible to perform manually without risking significant error.</strong>]
                ]}
            />
            <p>For non-integer dilutions, the math quickly becomes tedious. Calculating a 1:3.16 dilution factor (or 3.16-fold) where V<sub>final</sub> is 250 µL gives:</p>
            <div className="font-mono p-4 my-4 bg-gray-100 dark:bg-black/30 rounded-md not-prose space-y-2">
                <p>V<sub>move</sub> = 250 µL / 3.16 = 79.11 µL</p>
                <p>V<sub>diluent</sub> = 250 µL - 79.11 µL = 170.89 µL</p>
            </div>
            <p>If you manually round that 79.11 µL volume, you introduce significant deviation that will compound exponentially.</p>
            <CTABlock href="#calculator" buttonText="CLICK HERE TO ACCESS THE SERIAL DILUTION CALCULATOR">
                Ensure Perfect Non-Integer Steps. Use the Calculator. Whether you're doing a simple 1:2 or a complex 1:3.16, the calculator gives you the exact V<sub>move</sub> and V<sub>diluent</sub> needed for 100% accuracy.
            </CTABlock>
        </Section>

        <Section title={<>The Top 5 Mistakes That Ruin Your <span className="text-custom-gradient">Dilution Series</span></>}>
            <p>The complexity of serial dilution means more opportunities for human error. These are the most frequent pitfalls we see in lab protocols:</p>
            <ol className="list-decimal list-outside space-y-4 pl-5">
                <li><strong>Inadequate Mixing After Transfer:</strong> The single biggest culprit. The solution must be <strong>fully homogenous</strong> before the aliquot (<strong>V<sub>move</sub></strong>) is taken for the next tube. <em>Fix: Vortex or vigorously pipette up-and-down 5-10 times after every transfer.</em></li>
                <li><strong>Using the Same Pipette Tip:</strong> <strong>Carryover Contamination.</strong> Using the same tip for two different concentration steps introduces a minute amount of the highly concentrated previous solution into the next, ruining the series. <em>Fix: Use a <strong>fresh pipette tip</strong> for every single transfer between tubes.</em></li>
                <li><strong>Mislabelling or Incorrect Order:</strong> Swapping tubes 3 and 4 means your final data point concentrations are incorrect. <em>Fix: <strong>Label all tubes first</strong> with their final concentration or total DF (e.g., 1:1000), not just the step number.</em></li>
                <li><strong>Inaccurate Measurement of V<sub>diluent</sub>:</strong> If you are slightly off on your diluent volume in one tube, the DF for that step is wrong, and the error propagates forward. <em>Fix: <strong>Verify your V<sub>diluent</sub></strong> using the calculator and use calibrated pipettes.</em></li>
                <li><strong>Not Discarding Final V<sub>move</sub>:</strong> After transferring the aliquot to the final tube, you must discard the leftover volume in the pipette tip. If you reuse this tip or forget which tip it was, you risk contaminating something else. <em>Fix: <strong>Discard the tip</strong> immediately after transferring to the last tube in the series.</em></li>
            </ol>
        </Section>

        <Section title={<>Frequently Asked <span className="text-custom-gradient">Questions</span> about Serial Dilution</>}>
            <div className="space-y-4">
                <FAQItem 
                    q="What is the purpose of serial dilution in the lab?"
                    a={<>Serial dilution is primarily used to <strong>create a range of precisely known concentrations</strong> from a concentrated stock solution. Applications include generating standard curves for quantitative assays (ELISA), accurately counting the concentration of microbes (bacterial titer), and conducting dose-response experiments (IC<sub>50</sub>).</>}
                />
                 <FAQItem 
                    q="What is a serial dilution factor and how is it calculated?"
                    a={<>The serial dilution factor (<strong>DF</strong>) for a single step is the ratio of the final volume to the volume of stock transferred (<strong>V<sub>final</sub> / V<sub>move</sub></strong>). The <strong>Total Dilution Factor</strong> for the entire series is found by <strong>multiplying the DF of each individual step</strong>.</>}
                />
                 <FAQItem 
                    q={<>Why is C<sub>1</sub>V<sub>1</sub>=C<sub>2</sub>V<sub>2</sub> not sufficient for serial dilution?</>}
                    a={<>While C<sub>1</sub>V<sub>1</sub>=C<sub>2</sub>V<sub>2</sub> is the underlying principle, it doesn't account for the <strong>cumulative nature of errors</strong> over multiple steps. Manual calculations for V<sub>move</sub> and V<sub>diluent</sub> at each step dramatically increase the risk of propagated error, making a dedicated <strong>Serial Dilution Calculator</strong> essential for complex protocols.</>}
                />
                 <FAQItem 
                    q="Is a 1:2 serial dilution the same as a 1/2 dilution?"
                    a={<>Yes, in modern scientific protocol, a 1:2 serial dilution means a <strong>two-fold dilution</strong>, where one part stock is mixed with one part diluent (total 2 parts). This results in a final concentration that is 1/2 of the original.</>}
                />
                 <FAQItem 
                    q="How many steps should be in a serial dilution?"
                    a={<>The number of steps depends on the <strong>concentration range</strong> you need to cover. To cover a wide range (multiple log orders), 1:10 dilutions are used (e.g., 5 steps cover 10<sup>5</sup>-fold reduction). For fine-tuning a small range, 1:2 or 1:5 dilutions are preferred.</>}
                />
                 <FAQItem 
                    q="What is the risk of using the wrong diluent in a serial dilution?"
                    a={<>The risk is high. Using the wrong diluent (e.g., water instead of a buffered saline solution like PBS) can cause the solute to <strong>precipitate</strong> out of solution, degrade, or become biologically inactive, rendering all subsequent steps in the series invalid.</>}
                />
            </div>
        </Section>
        
        <Section title={<>Confidence in Every Step: Stop Worrying About the <span className="text-custom-gradient">Math</span></>}>
            <p>The complexity of serial dilution is inherent to its power. It is the tool that allows scientists to generate perfectly spaced data points and quantify results across vast concentration ranges. But this power comes with the critical risk of <strong>propagated error</strong>.</p>
            <p>You now understand the formulas, the importance of DF, and the five critical mistakes that can invalidate your most important data.</p>
            <p>In high-stakes lab environments—where reagents are expensive, time is limited, and results must be flawless—manually calculating V<sub>move</sub>, V<sub>diluent</sub>, and the final concentration for a seven-step, non-integer series is a risk that simply isn't worth taking.</p>
            <p><strong>Your time belongs in the interpretation of results, not in the verification of basic math.</strong></p>
            <p>Trust in automation. Our Serial Dilution Calculator is engineered by experts to handle every variable, every unit conversion, and every non-integer factor, providing you with a perfectly accurate protocol sheet instantly.</p>
        </Section>

        <CTABlock href="#calculator" buttonText="CLICK HERE TO ACCESS THE SERIAL DILUTION CALCULATOR">
            🚀 Guarantee Your Accuracy. Use the Serial Dilution Calculator. Don't start your next protocol without absolute assurance. <strong>Click now</strong> to generate your validated, error-proof serial dilution series.
        </CTABlock>
    </div>
  );
};

export default SerialDilutionGuide;