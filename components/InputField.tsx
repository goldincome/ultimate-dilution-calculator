import React from 'react';
import { Unit } from '../types';

interface InputFieldProps {
  label: string;
  id: string;
  value: string;
  onValueChange: (value: string) => void;
  unit: Unit;
  onUnitChange: (unit: any) => void;
  units: Unit[];
  isSolveTarget?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  value,
  onValueChange,
  unit,
  onUnitChange,
  units,
  isSolveTarget = false
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="flex rounded-md shadow-sm">
        <input
          type="number"
          id={id}
          name={id}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          disabled={isSolveTarget}
          placeholder={isSolveTarget ? "Calculated..." : "0"}
          className={`
            flex-1 block w-full min-w-0 px-3 py-2 rounded-none rounded-l-md 
            border focus:ring-primary focus:border-primary sm:text-sm
            transition-colors duration-200
            ${isSolveTarget 
                ? 'bg-gray-200 dark:bg-primary-950 text-primary-700 dark:text-primary-300 font-bold border-gray-300 dark:border-primary-700 cursor-not-allowed' 
                : 'bg-white dark:bg-[#051407] border-gray-300 dark:border-primary-800 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-black/20 focus:bg-gray-50 dark:focus:bg-black/20'
            }
          `}
        />
        <select
          value={unit}
          onChange={(e) => onUnitChange(e.target.value)}
          disabled={isSolveTarget}
          className={`inline-flex items-center px-3 rounded-r-md border border-l-0 text-sm focus:ring-primary focus:border-primary
            ${isSolveTarget
                ? 'bg-gray-100 dark:bg-[#051407] border-gray-300 dark:border-primary-800 text-gray-500 cursor-not-allowed'
                : 'bg-gray-50 dark:bg-primary-950 border-gray-300 dark:border-primary-800 text-gray-700 dark:text-gray-300'
            }
          `}
        >
          {units.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputField;