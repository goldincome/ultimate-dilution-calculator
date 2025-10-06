import React from 'react';

const SerialDilutionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
             <style>
                {`.text { font: bold 11px sans-serif; fill: #111827; } .dark .text { fill: #f9fafb; } .small-text { font: 9px sans-serif; }`}
            </style>
        </defs>

        {/* Stock */}
        <g transform="translate(10, 10)">
            <path d="M0 0 L10 20 L50 20 L60 0 Z" stroke="#4ade80" strokeWidth="2" fill="#4ade80" fillOpacity="0.9" />
            <rect x="10" y="20" width="40" height="50" stroke="#4ade80" strokeWidth="2" fill="#4ade80" fillOpacity="0.9" />
            <text x="15" y="85" className="text">Stock</text>
        </g>

        {/* Arrow */}
        <path d="M75 45 C90 30, 105 30, 120 45" stroke="currentColor" fill="none" strokeWidth="1.5" strokeDasharray="4" />
        <path d="M115 42 L120 45 L115 48" stroke="currentColor" fill="none" strokeWidth="1.5" />
        <text x="80" y="30" className="text small-text">1 mL</text>


        {/* Tube 1 */}
        <g transform="translate(130, 30)">
            <path d="M0,0 L0,50 Q0,60 10,60 L30,60 Q40,60 40,50 L40,0" stroke="#4ade80" strokeWidth="2" fill="#4ade80" fillOpacity="0.5" />
             <text x="12" y="75" className="text">1:10</text>
        </g>

        {/* Arrow 2 */}
        <path d="M175 45 C190 30, 205 30, 220 45" stroke="currentColor" fill="none" strokeWidth="1.5" strokeDasharray="4" />
        <path d="M215 42 L220 45 L215 48" stroke="currentColor" fill="none" strokeWidth="1.5" />
        <text x="180" y="30" className="text small-text">1 mL</text>

        {/* Tube 2 */}
        <g transform="translate(230, 30)">
            <path d="M0,0 L0,50 Q0,60 10,60 L30,60 Q40,60 40,50 L40,0" stroke="#4ade80" strokeWidth="2" fill="#4ade80" fillOpacity="0.25" />
             <text x="5" y="75" className="text">1:100</text>
        </g>

        {/* Arrow 3 */}
        <path d="M275 45 C290 30, 305 30, 320 45" stroke="currentColor" fill="none" strokeWidth="1.5" strokeDasharray="4" />
        <path d="M315 42 L320 45 L315 48" stroke="currentColor" fill="none" strokeWidth="1.5" />
         <text x="280" y="30" className="text small-text">1 mL</text>

        {/* Tube 3 */}
        <g transform="translate(330, 30)">
            <path d="M0,0 L0,50 Q0,60 10,60 L30,60 Q40,60 40,50 L40,0" stroke="#4ade80" strokeWidth="2" fill="#4ade80" fillOpacity="0.1" />
            <text x="-5" y="75" className="text">1:1000</text>
        </g>
    </svg>
);

export default SerialDilutionIcon;
