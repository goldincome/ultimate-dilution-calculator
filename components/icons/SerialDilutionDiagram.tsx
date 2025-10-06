import React from 'react';

const SerialDilutionDiagram: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <style>{`
                .label { font-family: 'Montserrat', sans-serif; font-size: 12px; fill: #1f2937; }
                .dark .label { fill: #d1d5db; }
                .title { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 600; fill: #111827; }
                .dark .title { fill: #f9fafb; }
                .arrow-text { font-family: 'Montserrat', sans-serif; font-size: 10px; fill: #4b5563; }
                .dark .arrow-text { fill: #9ca3af; }
                .tube-text { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 500; fill: #111827; }
                .dark .tube-text { fill: #f9fafb; }
                .diluent-text { font-family: 'Montserrat', sans-serif; font-size: 10px; }
            `}</style>
            <linearGradient id="stockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
        </defs>

        {/* Stock solution */}
        <g transform="translate(20, 30)">
            <text x="20" y="-10" textAnchor="middle" className="title">Stock</text>
            <rect x="0" y="0" width="40" height="60" rx="5" fill="url(#stockGradient)" />
            <rect x="0" y="0" width="40" height="60" rx="5" stroke="#166534" strokeWidth="2" fill="transparent" />
        </g>

        {/* Arrow 1 */}
        <g transform="translate(70, 55)">
            <path d="M0,0 C20,-20 40,-20 60,0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M55,-3 L60,0 L55,3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="30" y="-25" textAnchor="middle" className="arrow-text">V_move</text>
        </g>
        
        {/* Diluent addition illustration */}
        <g transform="translate(140, 0)">
             <path d="M25,0 L25,15" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <path d="M22,12 L25,15 L28,12" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <text x="25" y="28" textAnchor="middle" className="arrow-text diluent-text" fill="#60a5fa">+ V_diluent</text>
        </g>
        <g transform="translate(260, 0)">
             <path d="M25,0 L25,15" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <path d="M22,12 L25,15 L28,12" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <text x="25" y="28" textAnchor="middle" className="arrow-text diluent-text" fill="#60a5fa">+ V_diluent</text>
        </g>
         <g transform="translate(380, 0)">
             <path d="M25,0 L25,15" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <path d="M22,12 L25,15 L28,12" fill="none" stroke="#60a5fa" strokeWidth="2" />
             <text x="25" y="28" textAnchor="middle" className="arrow-text diluent-text" fill="#60a5fa">+ V_diluent</text>
        </g>

        {/* Tube 1 */}
        <g transform="translate(140, 30)">
            <path d="M0,0 L0,70 Q0,80 10,80 L40,80 Q50,80 50,70 L50,0" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
            <rect x="2" y="30" width="46" height="48" fill="#4ade80" fillOpacity="0.7" rx="2" />
            <text x="25" y="95" textAnchor="middle" className="tube-text">Tube 1</text>
            <text x="25" y="110" textAnchor="middle" className="label">(DF=10)</text>
        </g>

        {/* Arrow 2 */}
         <g transform="translate(195, 55)">
            <path d="M0,0 C20,-20 40,-20 60,0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M55,-3 L60,0 L55,3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="30" y="-25" textAnchor="middle" className="arrow-text">V_move</text>
        </g>
        
        {/* Tube 2 */}
        <g transform="translate(260, 30)">
            <path d="M0,0 L0,70 Q0,80 10,80 L40,80 Q50,80 50,70 L50,0" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
            <rect x="2" y="30" width="46" height="48" fill="#4ade80" fillOpacity="0.3" rx="2" />
            <text x="25" y="95" textAnchor="middle" className="tube-text">Tube 2</text>
            <text x="25" y="110" textAnchor="middle" className="label">(DF=100)</text>
        </g>

        {/* Arrow 3 */}
        <g transform="translate(315, 55)">
            <path d="M0,0 C20,-20 40,-20 60,0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
            <path d="M55,-3 L60,0 L55,3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="30" y="-25" textAnchor="middle" className="arrow-text">V_move</text>
        </g>

        {/* Tube 3 */}
        <g transform="translate(380, 30)">
            <path d="M0,0 L0,70 Q0,80 10,80 L40,80 Q50,80 50,70 L50,0" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
            <rect x="2" y="30" width="46" height="48" fill="#4ade80" fillOpacity="0.1" rx="2" />
            <text x="25" y="95" textAnchor="middle" className="tube-text">Tube 3</text>
            <text x="25" y="110" textAnchor="middle" className="label">(DF=1000)</text>
        </g>
    </svg>
);

export default SerialDilutionDiagram;