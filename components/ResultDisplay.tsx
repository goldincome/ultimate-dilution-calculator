
import React, { useState } from 'react';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';
import { Unit } from '../types';

interface ResultDisplayProps {
  value: number | null;
  unit: Unit | null;
  breakdown: string | null;
  solveFor: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ value, unit, breakdown, solveFor }) => {
  const [copied, setCopied] = useState(false);

  if (value === null || unit === null) {
    return null;
  }

  const formattedValue = value.toPrecision(5);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-6 bg-primary-950/50 border border-primary-800 rounded-lg p-4">
        <p className="text-sm font-medium text-primary-300 mb-2">Calculated Result for {solveFor}</p>
        <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-white">
                {formattedValue} <span className="text-xl font-medium text-primary-400">{unit}</span>
            </p>
            <button
                onClick={handleCopy}
                className="p-2 rounded-md hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary-500 transition-all"
                title="Copy result to clipboard"
            >
                {copied ? <CheckIcon className="h-6 w-6 text-primary-400" /> : <ClipboardIcon className="h-6 w-6 text-primary-300" />}
            </button>
        </div>
        {breakdown && (
            <details className="mt-4">
                <summary className="text-sm text-primary-400 cursor-pointer hover:text-primary-300">How this was calculated</summary>
                <pre className="mt-2 p-3 bg-black/30 rounded-md text-sm text-gray-300 whitespace-pre-wrap">{breakdown}</pre>
            </details>
        )}
    </div>
  );
};

export default ResultDisplay;
