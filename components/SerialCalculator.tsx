
import React, { useState, useMemo } from 'react';
import InputField from './InputField';
import { ConcentrationUnit, VolumeUnit } from '../types';
import { CONCENTRATION_UNITS, VOLUME_UNITS } from '../constants';

const SerialCalculator: React.FC = () => {
  const [initialConcentration, setInitialConcentration] = useState({ value: '1000', unit: ConcentrationUnit.uM });
  const [transferVolume, setTransferVolume] = useState({ value: '1', unit: VolumeUnit.mL });
  const [diluentVolume, setDiluentVolume] = useState({ value: '9', unit: VolumeUnit.mL });
  const [numDilutions, setNumDilutions] = useState('10');
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setInitialConcentration({ value: '1000', unit: ConcentrationUnit.uM });
    setTransferVolume({ value: '1', unit: VolumeUnit.mL });
    setDiluentVolume({ value: '9', unit: VolumeUnit.mL });
    setNumDilutions('10');
    setError(null);
  }

  const results = useMemo(() => {
    setError(null);
    const c1Val = parseFloat(initialConcentration.value);
    const transferVol = parseFloat(transferVolume.value);
    const diluentVol = parseFloat(diluentVolume.value);
    const dilutions = parseInt(numDilutions, 10);

    if ([c1Val, transferVol, diluentVol, dilutions].some(isNaN)) {
        return { dilutionFactor: null, steps: [] };
    }
    
    if (transferVol <= 0 || diluentVol < 0 || dilutions <= 0) {
        setError("Input values must be positive.");
        return { dilutionFactor: null, steps: [] };
    }

    const totalVolume = transferVol + diluentVol;
    if (totalVolume === 0) {
        setError("Total volume (transfer + diluent) cannot be zero.");
        return { dilutionFactor: null, steps: [] };
    }
    
    if (dilutions > 100) {
        setError("Maximum number of dilutions is 100 to ensure performance.");
        return { dilutionFactor: null, steps: [] };
    }

    const dilutionFactor = transferVol / totalVolume;
    const steps: { step: number; concentration: number }[] = [];
    let currentConcentration = c1Val;

    for (let i = 1; i <= dilutions; i++) {
        currentConcentration *= dilutionFactor;
        steps.push({ step: i, concentration: currentConcentration });
    }

    return { dilutionFactor, steps };
  }, [initialConcentration, transferVolume, diluentVolume, numDilutions]);

  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-black/20 rounded-lg border border-primary-900">
                <h3 className="font-semibold text-gray-200 border-b border-primary-900 pb-2">Inputs</h3>
                <InputField
                    label="Initial Concentration"
                    id="serial-c1"
                    value={initialConcentration.value}
                    onValueChange={(val) => setInitialConcentration(prev => ({...prev, value: val}))}
                    unit={initialConcentration.unit}
                    onUnitChange={(unit) => setInitialConcentration(prev => ({...prev, unit}))}
                    units={CONCENTRATION_UNITS}
                />
                <InputField
                    label="Transfer Volume"
                    id="serial-v-transfer"
                    value={transferVolume.value}
                    onValueChange={(val) => setTransferVolume(prev => ({...prev, value: val}))}
                    unit={transferVolume.unit}
                    onUnitChange={(unit) => setTransferVolume(prev => ({...prev, unit}))}
                    units={VOLUME_UNITS}
                />
                <InputField
                    label="Diluent Volume"
                    id="serial-v-diluent"
                    value={diluentVolume.value}
                    onValueChange={(val) => setDiluentVolume(prev => ({...prev, value: val}))}
                    unit={diluentVolume.unit}
                    onUnitChange={(unit) => setDiluentVolume(prev => ({...prev, unit}))}
                    units={VOLUME_UNITS}
                />
                 <div>
                    <label htmlFor="num-dilutions" className="block text-sm font-medium text-gray-300 mb-1">
                        Number of Dilutions
                    </label>
                    <input
                        type="number"
                        id="num-dilutions"
                        value={numDilutions}
                        onChange={(e) => setNumDilutions(e.target.value)}
                        className="flex-1 block w-full px-3 py-2 rounded-md border-primary-800 focus:ring-primary focus:border-primary sm:text-sm transition-colors duration-200 bg-[#051407] text-gray-200 hover:bg-black/20 focus:bg-black/20"
                        min="1"
                        max="100"
                        step="1"
                    />
                </div>
            </div>

            <div className="space-y-4 p-4 bg-black/20 rounded-lg border border-primary-900">
                <h3 className="font-semibold text-gray-200 border-b border-primary-900 pb-2">Results</h3>
                {error && <div className="text-center text-red-400 bg-red-900/30 p-3 rounded-md border border-red-500/30">{error}</div>}
                
                {!error && results.dilutionFactor !== null && (
                    <>
                        <div className="text-center bg-primary-950/50 p-2 rounded-md">
                            <span className="text-sm text-primary-300">Dilution Factor per Step: </span>
                            <span className="font-bold text-white">{results.dilutionFactor.toPrecision(4)}</span>
                        </div>
                        <div className="max-h-80 overflow-y-auto pr-2">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-primary-300 uppercase bg-black/30 sticky top-0">
                                    <tr>
                                        <th scope="col" className="px-4 py-2 rounded-l-md">Step</th>
                                        <th scope="col" className="px-4 py-2 rounded-r-md text-right">Concentration ({initialConcentration.unit})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.steps.map(({ step, concentration }) => (
                                        <tr key={step} className="border-b border-primary-900/50">
                                            <td className="px-4 py-2 font-medium text-gray-300">{step}</td>
                                            <td className="px-4 py-2 text-right font-mono text-white">{concentration.toExponential(4)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
        <div className="mt-6 flex justify-end">
            <button
                onClick={reset}
                className="px-4 py-2 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-card focus:ring-gray-500 transition-colors"
            >
                Reset
            </button>
        </div>
    </div>
  );
};

export default SerialCalculator;
