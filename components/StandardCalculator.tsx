
import React from 'react';
import InputField from './InputField';
import { useStandardCalculator } from '../hooks/useStandardCalculator';
import { Variable, ConcentrationUnit } from '../types';
import { CONCENTRATION_UNITS, VOLUME_UNITS, MOLARITY_CONVERSIONS } from '../constants';
import ResultDisplay from './ResultDisplay';

const StandardCalculator: React.FC = () => {
  const {
    state,
    solveFor,
    setSolveFor,
    handleValueChange,
    handleUnitChange,
    result,
    error,
    reset,
  } = useStandardCalculator();

  const isMolarityCalc = !isNaN(MOLARITY_CONVERSIONS[state.c1.unit]);
  const concentrationUnits = isMolarityCalc 
    ? CONCENTRATION_UNITS.filter(u => !isNaN(MOLARITY_CONVERSIONS[u]))
    : CONCENTRATION_UNITS.filter(u => isNaN(MOLARITY_CONVERSIONS[u]));


  const solveForOptions: { key: Variable; label: string }[] = [
    { key: Variable.C1, label: 'Initial Conc. (C₁)' },
    { key: Variable.V1, label: 'Initial Vol. (V₁)' },
    { key: Variable.C2, label: 'Final Conc. (C₂)' },
    { key: Variable.V2, label: 'Final Vol. (V₂)' },
  ];

  const getResultDisplayValue = (variable: Variable) => {
    if (solveFor === variable && result.value !== null) {
      return result.value.toPrecision(5);
    }
    return state[variable].value;
  }

  return (
    <div>
        <fieldset className="mb-6">
            <legend className="block text-base font-medium text-white mb-2">Solve For:</legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {solveForOptions.map(({ key, label }) => (
                    <div key={key}>
                        <input
                            type="radio"
                            id={`solve-for-${key}`}
                            name="solve-for"
                            value={key}
                            checked={solveFor === key}
                            onChange={() => setSolveFor(key)}
                            className="sr-only peer"
                        />
                        <label
                            htmlFor={`solve-for-${key}`}
                            className="
                                block w-full text-center px-3 py-2 border rounded-md cursor-pointer 
                                text-sm font-semibold transition-all duration-200
                                peer-checked:btn-gradient peer-checked:text-white peer-checked:border-primary-500
                                border-primary-800 bg-black/20 text-gray-300 hover:bg-white/10
                                focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-offset-card peer-focus:ring-primary-400"
                        >
                            {label}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 p-4 bg-black/20 rounded-lg border border-primary-900">
                <h3 className="font-semibold text-gray-200 border-b border-primary-900 pb-2">Initial Solution (Stock)</h3>
                <InputField
                    label="Initial Concentration (C₁)"
                    id="c1"
                    value={getResultDisplayValue(Variable.C1)}
                    onValueChange={(val) => handleValueChange(Variable.C1, val)}
                    unit={state.c1.unit}
                    onUnitChange={(unit) => handleUnitChange(Variable.C1, unit)}
                    units={CONCENTRATION_UNITS}
                    isSolveTarget={solveFor === Variable.C1}
                />
                <InputField
                    label="Initial Volume (V₁)"
                    id="v1"
                    value={getResultDisplayValue(Variable.V1)}
                    onValueChange={(val) => handleValueChange(Variable.V1, val)}
                    unit={state.v1.unit}
                    onUnitChange={(unit) => handleUnitChange(Variable.V1, unit)}
                    units={VOLUME_UNITS}
                    isSolveTarget={solveFor === Variable.V1}
                />
            </div>
            <div className="space-y-4 p-4 bg-black/20 rounded-lg border border-primary-900">
                <h3 className="font-semibold text-gray-200 border-b border-primary-900 pb-2">Final Solution (Diluted)</h3>
                <InputField
                    label="Final Concentration (C₂)"
                    id="c2"
                    value={getResultDisplayValue(Variable.C2)}
                    onValueChange={(val) => handleValueChange(Variable.C2, val)}
                    unit={state.c2.unit}
                    onUnitChange={(unit) => handleUnitChange(Variable.C2, unit)}
                    units={concentrationUnits}
                    isSolveTarget={solveFor === Variable.C2}
                />
                <InputField
                    label="Final Volume (V₂)"
                    id="v2"
                    value={getResultDisplayValue(Variable.V2)}
                    onValueChange={(val) => handleValueChange(Variable.V2, val)}
                    unit={state.v2.unit}
                    onUnitChange={(unit) => handleUnitChange(Variable.V2, unit)}
                    units={VOLUME_UNITS}
                    isSolveTarget={solveFor === Variable.V2}
                />
            </div>
        </div>

        {error && <div className="mt-4 text-center text-red-400 bg-red-900/30 p-3 rounded-md border border-red-500/30">{error}</div>}

        {result.value !== null && !error && (
            <ResultDisplay value={result.value} unit={result.unit} breakdown={result.breakdown} solveFor={solveForOptions.find(o => o.key === solveFor)?.label || ''} />
        )}
        
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

export default StandardCalculator;
