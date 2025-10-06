import React from 'react';

const DilutionProcessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 260 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#86efac', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor: '#16a34a', stopOpacity:1}} />
            </linearGradient>
            <style>
                {`.text { font: bold 12px sans-serif; fill: #111827; } .dark .text { fill: #f9fafb; }`}
            </style>
        </defs>
        
        {/* Solute */}
        <g transform="translate(20, 40)">
            <circle cx="15" cy="15" r="10" fill="url(#grad1)" />
            <text x="5" y="45" className="text">Solute</text>
        </g>
        
        <text x="65" y="58" className="text" style={{fontSize: '24px'}}>+</text>
        
        {/* Solvent */}
        <g transform="translate(90, 20)">
            <path d="M0 0 H40 V60 H0 Z" stroke="#4ade80" strokeWidth="2" fill="none" rx="2" />
            <path d="M2 50 C10 40, 30 40, 38 50" stroke="#4ade80" strokeWidth="1.5" fill="none" />
            <rect x="2" y="20" width="36" height="40" fill="#4ade80" fillOpacity="0.3" />
            <text x="-5" y="75" className="text">Solvent</text>
        </g>
        
        <text x="145" y="58" className="text" style={{fontSize: '24px'}}>→</text>
        
        {/* Solution */}
        <g transform="translate(180, 20)">
            <path d="M0 0 H60 V60 H0 Z" stroke="#4ade80" strokeWidth="2" fill="none" rx="2" />
            <path d="M2 50 C20 35, 40 35, 58 50" stroke="#4ade80" strokeWidth="1.5" fill="none" />
            <rect x="2" y="10" width="56" height="50" fill="#4ade80" fillOpacity="0.5" />
            <circle cx="15" cy="45" r="3" fill="#16a34a" fillOpacity="0.7" />
            <circle cx="45" cy="35" r="3" fill="#16a34a" fillOpacity="0.7" />
            <circle cx="30" cy="20" r="3" fill="#16a34a" fillOpacity="0.7" />
            <text x="0" y="75" className="text">Solution</text>
        </g>
    </svg>
);

export default DilutionProcessIcon;
