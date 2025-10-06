import React from 'react';
import RatioNotationDiagram from './icons/RatioNotationDiagram';

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

const StyledTable: React.FC<{headers: string[], rows: (string|React.ReactNode)[][]}> = ({headers, rows}) => (
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

const RatioDilutionGuide: React.FC = () => {
    return (
        <div className="mt-16 max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">The Ultimate Guide to Ratio Dilution</h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">Clarifying 1:X Notation and Mastering Volume Preparation</p>
            </div>
            
            <Section title={<>Ratio Dilution: The <span className="text-custom-gradient">Problem of Ambiguous Notation</span></>}>
                <p>The colon (<strong>:</strong>) is arguably the most ambiguous symbol in your lab protocol. If you read a <strong>1:100</strong> dilution, what do you do?</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                    <li>Do you add <strong>1 part stock</strong> to <strong>99 parts solvent</strong> to make <strong>100 total parts</strong>? (The modern convention).</li>
                    <li>Or do you add <strong>1 part stock</strong> to <strong>100 parts solvent</strong> to make <strong>101 total parts</strong>? (The traditional/industrial convention).</li>
                </ul>
                <p>The difference might seem small, but 1% error is the difference between a successful, reproducible experiment and a failed batch. Ratios (like 1:X) are used because they are easy to communicate, but they are treacherous to execute. They simplify the instruction—<em>add this much to that much</em>—but they fail to define the crucial outcome: <strong>the final concentration</strong>.</p>
            </Section>

            <Section title={<>Our Solution: <span className="text-custom-gradient">Definition, Precision, and the Ratio Dilution Calculator</span></>}>
                <p>This guide is dedicated to solving the 1:X dilemma. We will break down the two prevailing notational rules, teach you how to convert any ratio into precise volumes, and show you exactly where the pitfalls lie.</p>
                <p>Our tool is specifically engineered to eliminate the uncertainty, allowing you to confidently calculate the required volumes for any ratio, whether it follows the modern lab standard or the traditional parts-to-parts system.</p>
            </Section>

            <Section title={<>The Two Rules: Mastering <span className="text-custom-gradient">Dilution Notation</span></>}>
                <p>To eliminate the 1:X confusion, we must understand the two ways the ratio is commonly defined. In every scenario, you have three components: <strong>Solute</strong>, <strong>Diluent</strong> (Solvent), and <strong>Total Volume</strong>.</p>
                <div className="my-6 p-4 bg-primary-50 dark:bg-primary-950/50 rounded-lg border border-primary-200 dark:border-primary-800 not-prose">
                    <RatioNotationDiagram className="w-full h-auto"/>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Rule 1: Solute IN Total Volume (The Modern Standard)</h3>
                <p>This is the standard convention in most modern chemistry, biology, and clinical labs. It defines the concentration reduction factor.</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                    <li><strong>Notation:</strong> <code>1:X</code> is equivalent to the fraction <code>1/X</code>.</li>
                    <li><strong>Definition:</strong> <strong>1 part Solute</strong> is present <strong>in X total parts</strong> of the solution.</li>
                    <li><strong>Calculation:</strong> <code>Volume_Diluent = Total Volume - Volume_Solute</code></li>
                </ul>
                <StyledTable 
                    headers={['Example', 'Solute Volume', 'Diluent Volume', 'Total Volume (X)', 'Dilution Factor']}
                    rows={[
                        ['1:10', '1 part', '9 parts', '10 parts', '1/10'],
                        ['1:100', '1 part', '99 parts', '100 parts', '1/100']
                    ]}
                />

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Rule 2: Solute TO Diluent (The Traditional/Industrial Standard)</h3>
                <p>This convention is often found in older protocols, traditional microbiology, or common industrial instructions (like cleaning concentrates). It defines the amount of diluent needed.</p>
                <ul className="list-disc list-outside pl-5 space-y-2">
                    <li><strong>Notation:</strong> Often written as <code>1 to X</code> or <code>1:X_Diluent</code>.</li>
                    <li><strong>Definition:</strong> <strong>1 part Solute</strong> is added <strong>to X parts Diluent</strong>.</li>
                    <li><strong>Calculation:</strong> <code>Total Volume = Volume_Solute + Volume_Diluent</code></li>
                </ul>
                 <StyledTable 
                    headers={['Example', 'Solute Volume', 'Diluent Volume (X)', 'Total Volume', 'Dilution Factor']}
                    rows={[
                        ['1 to 9', '1 part', '9 parts', '10 parts', '1/10'],
                        ['1 to 100', '1 part', '100 parts', '101 parts', '1/101']
                    ]}
                />
            </Section>

            <div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg not-prose">
                <h4 className="font-bold text-red-800 dark:text-red-200">⚠️ The 1:100 Trap: A 1% Concentration Error</h4>
                <p className="text-red-700 dark:text-red-300">For large dilution factors, the difference between Rule 1 and Rule 2 is negligible (e.g., 1/100 vs. 1/101). However, for small ratios, the error is significant. A 1:2 ratio under Rule 1 is a 50% concentration (1/2), but under Rule 2 it's a 33.3% concentration (1/3). That's a 16.7% difference!</p>
            </div>
            
            <CTABlock href="#calculator" buttonText="CLICK HERE TO ACCESS THE RATIO DILUTION CALCULATOR">
                Eliminate Ambiguity. Use the Ratio Dilution Calculator. Whether your protocol intends Solute:Total or Solute:Diluent, our tool eliminates the guesswork.
            </CTABlock>

            <Section title={<>Step-by-Step Calculation: <span className="text-custom-gradient">Converting Ratio to Volume</span></>}>
                <p><strong>Scenario:</strong> You need to make <strong>5 L (or 5000 mL)</strong> of a solution based on a ratio of <strong>1:50</strong>.</p>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Case A: Using Rule 1 (Solute IN Total Volume)</h3>
                <p>Target: 1 part stock in 50 total parts.</p>
                 <ol className="list-decimal list-outside space-y-3 pl-5 not-prose">
                    <li><strong>Calculate Volume per Part:</strong> <code>5000 mL / 50 parts = 100 mL/part</code></li>
                    <li><strong>Calculate Solute Volume:</strong> <code>1 part × 100 mL = 100 mL</code></li>
                    <li><strong>Calculate Diluent Volume:</strong> <code>5000 mL - 100 mL = 4900 mL</code></li>
                </ol>
                <p><strong>Result:</strong> 100 mL stock plus 4900 mL diluent.</p>

                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-3">Case B: Using Rule 2 (Solute TO Diluent)</h3>
                <p>Target: 1 part stock to 50 parts diluent (51 total parts).</p>
                 <ol className="list-decimal list-outside space-y-3 pl-5 not-prose">
                    <li><strong>Calculate Volume per Part:</strong> <code>5000 mL / 51 parts ≈ 98.04 mL/part</code></li>
                    <li><strong>Calculate Solute Volume:</strong> <code>1 part × 98.04 mL ≈ 98.04 mL</code></li>
                    <li><strong>Calculate Diluent Volume:</strong> <code>50 parts × 98.04 mL ≈ 4901.96 mL</code></li>
                </ol>
                <p><strong>Result:</strong> 98.04 mL stock plus 4901.96 mL diluent.</p>
            </Section>

            <Section title={<>Frequently Asked <span className="text-custom-gradient">Questions</span> about Ratio Dilution</>}>
                <div className="space-y-4">
                     <FAQItem 
                        q="What does a 1:5 ratio dilution typically mean in a modern lab protocol?"
                        a="In a modern scientific lab, a 1:5 ratio typically means 1 part stock IN 5 parts total solution (Rule 1). This is equivalent to a 1/5 dilution factor, meaning you add 1 part stock to 4 parts diluent."
                    />
                    <FAQItem 
                        q="How do you calculate the volume of diluent needed for a 1:20 ratio?"
                        a="If the 1:20 ratio means 1 part in 20 total parts (Rule 1), you subtract the stock part from the total parts: 20 - 1 = 19 parts of diluent. If it means 1 part to 20 parts diluent (Rule 2), the diluent volume is simply 20 parts."
                    />
                    <FAQItem 
                        q="Why are ratios used instead of Molarity?"
                        a="Ratios are used when the stock concentration is unknown or irrelevant (e.g., an antibody stock supplied by a manufacturer) or when the protocol only requires a simple, relative reduction factor (e.g., diluting patient serum) rather than an absolute concentration."
                    />
                     <FAQItem 
                        q="What is the biggest mistake when calculating ratio dilutions?"
                        a="The biggest mistake is assuming the notation's meaning. The error occurs when confusing Solute:Total Volume (Rule 1) with Solute:Diluent (Rule 2), leading to slightly different total volumes and concentration errors, especially for low dilution factors."
                    />
                </div>
            </Section>
            
            <Section title={<>Confidence in Your Protocol: Eliminating the <span className="text-custom-gradient">1:X Ambiguity</span></>}>
                 <p>The ambiguity of ratio notation is a persistent, frustrating feature of lab work and industrial protocols. Relying on guesswork, tradition, or a quick mental calculation is a gamble that puts the integrity of your results at risk.</p>
                 <p>Your time is too valuable, and your reagents are too expensive, to risk an error caused by a colon sign.</p>
            </Section>

            <CTABlock href="#calculator" buttonText="CLICK HERE TO ACCESS THE RATIO DILUTION CALCULATOR">
                🚀 Master Your Protocol. Guarantee Your Ratio Accuracy. Don't start your next protocol without absolute certainty about the volumes you are measuring.
            </CTABlock>

        </div>
    );
};

export default RatioDilutionGuide;
