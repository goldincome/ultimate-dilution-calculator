import React, { useState, useMemo } from 'react';
import InputField from './InputField';
import { ConcentrationUnit, VolumeUnit } from '../types';
import { CONCENTRATION_UNITS, VOLUME_UNITS, CONCENTRATION_CONVERSIONS, MOLARITY_CONVERSIONS, VOLUME_CONVERSIONS } from '../constants';

const ResultCard = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
    <div className="bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800 rounded-lg p-3">
        <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-1">{label}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value} <span className="text-lg font-medium text-primary-600 dark:text-primary-400">{unit}</span>
        </p>
    </div>
);

const RatioCalculator: React.FC = () => {
  const [c1, setC1] = useState({ value: '10', unit: ConcentrationUnit.M });
  const [v1, setV1] = useState({ value: '10', unit: VolumeUnit.mL });
  const [soluteRatio, setSoluteRatio] = useState('1');
  const [solventRatio, setSolventRatio] = useState('4');
  const [error, setError] = useState<string | null>(null);
  
  const reset = () => {
    setC1({ value: '10', unit: ConcentrationUnit.M });
    setV1({ value: '10', unit: VolumeUnit.mL });
    setSoluteRatio('1');
    setSolventRatio('4');
    setError(null);
  }

  const results = useMemo(() => {
    setError(null);
    const c1Val = parseFloat(c1.value);
    const v1Val = parseFloat(v1.value);
    const solute = parseFloat(soluteRatio);
    const solvent = parseFloat(solventRatio);

    if ([c1Val, v1Val, solute, solvent].some(isNaN)) {
        return { finalConcentration: null, finalVolume: null, solventVolume: null };
    }
    
    if (solute <= 0 || solvent < 0) {
        setError("Ratio parts must be positive numbers.");
        return { finalConcentration: null, finalVolume: null, solventVolume: null };
    }

    const totalParts = solute + solvent;
    if (totalParts === 0) {
        setError("Total ratio parts cannot be zero.");
        return { finalConcentration: null, finalVolume: null, solventVolume: null };
    }

    const dilutionFactor = solute / totalParts;
    
    const finalConcentration = c1Val * dilutionFactor;
    const solventVolume = v1Val * (solvent / solute);
    const finalVolume = v1Val + solventVolume;

    return { 
        finalConcentration: finalConcentration.toPrecision(5), 
        finalVolume: finalVolume.toPrecision(5), 
        solventVolume: solventVolume.toPrecision(5)
    };

  }, [c1, v1, soluteRatio, solventRatio]);

  return (
    <div className="space-y-6">
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border border-gray-200 dark:border-primary-900">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-primary-900 pb-2">Initial Solution (Stock)</h3>
                    <InputField
                        label="Initial Concentration (C₁)"
                        id="ratio-c1"
                        value={c1.value}
                        onValueChange={(val) => setC1(prev => ({ ...prev, value: val }))}
                        unit={c1.unit}
                        onUnitChange={(unit) => setC1(prev => ({ ...prev, unit }))}
                        units={CONCENTRATION_UNITS}
                    />
                    <InputField
                        label="Initial Volume (V₁)"
                        id="ratio-v1"
                        value={v1.value}
                        onValueChange={(val) => setV1(prev => ({ ...prev, value: val }))}
                        unit={v1.unit}
                        onUnitChange={(unit) => setV1(prev => ({ ...prev, unit }))}
                        units={VOLUME_UNITS}
                    />
                </div>
                 <div className="space-y-4 p-4 bg-gray-50 dark:bg-black/20 rounded-lg border border-gray-200 dark:border-primary-900">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-primary-900 pb-2">Dilution Ratio</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">e.g., for a 1:4 ratio, enter 1 for solute and 4 for solvent.</p>
                     <div>
                        <label htmlFor="solute-ratio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Ratio (Solute : Solvent)
                        </label>
                        <div className="flex items-center gap-2">
                             <input
                                type="number"
                                id="solute-ratio"
                                value={soluteRatio}
                                onChange={(e) => setSoluteRatio(e.target.value)}
                                className="flex-1 block w-full text-center px-3 py-2 rounded-md border-gray-300 dark:border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-white dark:bg-[#051407] text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20"
                            />
                            <span className="font-bold text-primary-600 dark:text-primary-400">:</span>
                            <input
                                type="number"
                                id="solvent-ratio"
                                value={solventRatio}
                                onChange={(e) => setSolventRatio(e.target.value)}
                                className="flex-1 block w-full text-center px-3 py-2 rounded-md border-gray-300 dark:border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-white dark:bg-[#051407] text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {error && <div className="mt-4 text-center text-red-400 bg-red-900/30 p-3 rounded-md border border-red-500/30">{error}</div>}

        {!error && results.finalConcentration && (
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Calculated Results</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <ResultCard label="Final Concentration (C₂)" value={results.finalConcentration} unit={c1.unit} />
                    <ResultCard label="Final Volume (V₂)" value={results.finalVolume} unit={v1.unit} />
                    <ResultCard label="Solvent to Add" value={results.solventVolume} unit={v1.unit} />
                </div>
            </div>
        )}

        <div className="mt-6 flex justify-end">
            <button
                onClick={reset}
                className="px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white font-medium rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card dark:focus:ring-offset-[#0c1c10] focus:ring-gray-500 transition-colors"
            >
                Reset
            </button>
        </div>
    </div>
  );
};

export default RatioCalculator;