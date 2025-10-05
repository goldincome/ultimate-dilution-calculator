
import { useState, useMemo } from 'react';
import { CalculatorState, Variable, ConcentrationUnit, VolumeUnit } from '../types';
import { CONCENTRATION_CONVERSIONS, VOLUME_CONVERSIONS, MOLARITY_CONVERSIONS } from '../constants';

const INITIAL_STATE: CalculatorState = {
  [Variable.C1]: { value: '10', unit: ConcentrationUnit.M },
  [Variable.V1]: { value: '100', unit: VolumeUnit.mL },
  [Variable.C2]: { value: '1', unit: ConcentrationUnit.M },
  [Variable.V2]: { value: '', unit: VolumeUnit.mL },
};

export const useStandardCalculator = () => {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [solveFor, setSolveFor] = useState<Variable>(Variable.V2);
  const [error, setError] = useState<string | null>(null);

  const handleValueChange = (variable: Variable, value: string) => {
    setState(prevState => ({
      ...prevState,
      [variable]: { ...prevState[variable], value },
    }));
  };

  const handleUnitChange = (variable: Variable, unit: ConcentrationUnit | VolumeUnit) => {
    setState(prevState => ({
      ...prevState,
      [variable]: { ...prevState[variable], unit: unit as any},
    }));
  };

  const result = useMemo<{ value: number | null; unit: ConcentrationUnit | VolumeUnit | null; breakdown: string | null }>(() => {
    setError(null);
    const { c1, v1, c2, v2 } = state;

    const values = {
      c1: parseFloat(c1.value),
      v1: parseFloat(v1.value),
      c2: parseFloat(c2.value),
      v2: parseFloat(v2.value),
    };

    const isMolarityCalc = !isNaN(MOLARITY_CONVERSIONS[c1.unit]);
    const isMassBasedCalc = !isNaN(CONCENTRATION_CONVERSIONS[c1.unit]);

    if(isMolarityCalc !== !isNaN(MOLARITY_CONVERSIONS[c2.unit])) {
        setError("Concentration units must be of the same type (e.g., all Molarity or all mass-based).");
        return { value: null, unit: null, breakdown: null };
    }

    const getConversionFactor = (unit: ConcentrationUnit) => isMolarityCalc ? MOLARITY_CONVERSIONS[unit] : CONCENTRATION_CONVERSIONS[unit];

    const c1Base = values.c1 * getConversionFactor(c1.unit);
    const v1Base = values.v1 * VOLUME_CONVERSIONS[v1.unit];
    const c2Base = values.c2 * getConversionFactor(c2.unit);
    const v2Base = values.v2 * VOLUME_CONVERSIONS[v2.unit];

    let calculatedValue: number | null = null;
    let resultUnit: ConcentrationUnit | VolumeUnit | null = null;
    let breakdown: string | null = null;

    try {
      switch (solveFor) {
        case Variable.C1:
          if (!isNaN(c2Base) && !isNaN(v2Base) && !isNaN(v1Base) && v1Base !== 0) {
            calculatedValue = (c2Base * v2Base) / v1Base;
            resultUnit = c1.unit;
            calculatedValue /= getConversionFactor(c1.unit);
            breakdown = `C1 = (C2 × V2) / V1\nC1 = (${c2.value} ${c2.unit} × ${v2.value} ${v2.unit}) / ${v1.value} ${v1.unit}`;
          }
          break;
        case Variable.V1:
          if (!isNaN(c2Base) && !isNaN(v2Base) && !isNaN(c1Base) && c1Base !== 0) {
            calculatedValue = (c2Base * v2Base) / c1Base;
            resultUnit = v1.unit;
            calculatedValue /= VOLUME_CONVERSIONS[v1.unit];
            breakdown = `V1 = (C2 × V2) / C1\nV1 = (${c2.value} ${c2.unit} × ${v2.value} ${v2.unit}) / ${c1.value} ${c1.unit}`;
          }
          break;
        case Variable.C2:
          if (!isNaN(c1Base) && !isNaN(v1Base) && !isNaN(v2Base) && v2Base !== 0) {
            calculatedValue = (c1Base * v1Base) / v2Base;
            resultUnit = c2.unit;
            calculatedValue /= getConversionFactor(c2.unit);
            breakdown = `C2 = (C1 × V1) / V2\nC2 = (${c1.value} ${c1.unit} × ${v1.value} ${v1.unit}) / ${v2.value} ${v2.unit}`;
          }
          break;
        case Variable.V2:
          if (!isNaN(c1Base) && !isNaN(v1Base) && !isNaN(c2Base) && c2Base !== 0) {
            calculatedValue = (c1Base * v1Base) / c2Base;
            resultUnit = v2.unit;
            calculatedValue /= VOLUME_CONVERSIONS[v2.unit];
            breakdown = `V2 = (C1 × V1) / C2\nV2 = (${c1.value} ${c1.unit} × ${v1.value} ${v1.unit}) / ${c2.value} ${c2.unit}`;
          }
          break;
      }
      
      if (calculatedValue !== null && !isFinite(calculatedValue)) {
          setError("Result is not a finite number. Check for division by zero.");
          return { value: null, unit: null, breakdown: null };
      }

      return { value: calculatedValue, unit: resultUnit, breakdown };

    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred.');
      return { value: null, unit: null, breakdown: null };
    }

  }, [state, solveFor]);

  const reset = () => {
    setState(INITIAL_STATE);
    setSolveFor(Variable.V2);
    setError(null);
  }

  return {
    state,
    solveFor,
    setSolveFor,
    handleValueChange,
    handleUnitChange,
    result,
    error,
    reset,
  };
};
