import React from 'react';

const RatioNotationDiagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <style>{`
                .title { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 600; }
                .label { font-family: 'Montserrat', sans-serif; font-size: 12px; }
                .op { font-family: 'Montserrat', sans-serif; font-size: 24px; }

                .title, .label, .op { fill: #111827; }
                .dark .title, .dark .label, .dark .op { fill: #f9fafb; }

                .beaker-stroke { stroke: #4ade80; stroke-width: 2; }
                .solute-fill { fill: #22c55e; }
                .diluent-fill { fill: #86efac; fill-opacity: 0.4; }
            `}</style>
        </defs>

        {/* Rule 1: Solute IN Total Volume */}
        <g transform="translate(0, 10)">
            <text x="125" y="15" textAnchor="middle" className="title">Rule 1: Solute IN Total Volume (1:10)</text>
            
            {/* Solute */}
            <g transform="translate(20, 40)">
                <path d="M0,0 L0,40 Q0,50 5,50 L25,50 Q30,50 30,40 L30,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="32" width="26" height="16" className="solute-fill" rx="2" />
                <text x="15" y="65" textAnchor="middle" className="label">1 Part Solute</text>
            </g>

            <text x="70" y="70" className="op">+</text>

            {/* Diluent */}
            <g transform="translate(90, 40)">
                <path d="M0,0 L0,40 Q0,50 5,50 L25,50 Q30,50 30,40 L30,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="5" width="26" height="43" className="diluent-fill" rx="2" />
                <text x="15" y="65" textAnchor="middle" className="label">9 Parts Diluent</text>
            </g>

             <text x="140" y="70" className="op">=</text>

            {/* Final Solution */}
             <g transform="translate(160, 30)">
                <path d="M0,0 L0,50 Q0,60 10,60 L40,60 Q50,60 50,50 L50,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="5" width="46" height="53" className="diluent-fill" rx="2" />
                 <rect x="2" y="53" width="46" height="5.3" className="solute-fill" fillOpacity="0.8" rx="2" />
                <text x="25" y="75" textAnchor="middle" className="label">10 Total Parts</text>
            </g>
        </g>
        
        <line x1="250" y1="10" x2="250" y2="190" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />

        {/* Rule 2: Solute TO Diluent */}
        <g transform="translate(0, 110)">
            <text x="375" y="15" textAnchor="middle" className="title">Rule 2: Solute TO Diluent (1:10)</text>
            
             {/* Solute */}
            <g transform="translate(270, 40)">
                <path d="M0,0 L0,40 Q0,50 5,50 L25,50 Q30,50 30,40 L30,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="32" width="26" height="16" className="solute-fill" rx="2" />
                <text x="15" y="65" textAnchor="middle" className="label">1 Part Solute</text>
            </g>

            <text x="320" y="70" className="op">+</text>

            {/* Diluent */}
            <g transform="translate(340, 40)">
                <path d="M0,0 L0,40 Q0,50 5,50 L25,50 Q30,50 30,40 L30,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="5" width="26" height="43" className="diluent-fill" rx="2" />
                <text x="15" y="65" textAnchor="middle" className="label">10 Parts Diluent</text>
            </g>

             <text x="390" y="70" className="op">=</text>

            {/* Final Solution */}
             <g transform="translate(410, 30)">
                <path d="M0,0 L0,50 Q0,60 10,60 L40,60 Q50,60 50,50 L50,0" className="beaker-stroke" fill="none" />
                <rect x="2" y="5" width="46" height="53" className="diluent-fill" rx="2" />
                 <rect x="2" y="53" width="46" height="4.8" className="solute-fill" fillOpacity="0.8" rx="2" />
                <text x="25" y="75" textAnchor="middle" className="label">11 Total Parts</text>
            </g>
        </g>

    </svg>
);

export default RatioNotationDiagram;
