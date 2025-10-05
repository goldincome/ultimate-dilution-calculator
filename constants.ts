import { ConcentrationUnit, VolumeUnit } from './types';

export const CONCENTRATION_UNITS = Object.values(ConcentrationUnit);
export const VOLUME_UNITS = Object.values(VolumeUnit);

// Base unit for concentration: g/L
export const CONCENTRATION_CONVERSIONS: Record<ConcentrationUnit, number> = {
  [ConcentrationUnit.M]: NaN, // Molar requires molar mass, handle separately
  [ConcentrationUnit.mM]: NaN,
  [ConcentrationUnit.uM]: NaN,
  [ConcentrationUnit.gL]: 1,
  [ConcentrationUnit.mgmL]: 1,
  [ConcentrationUnit.ugmL]: 0.001,
  [ConcentrationUnit.percent]: 10, // Assuming % w/v -> 1g/100mL -> 10g/L
  [ConcentrationUnit.ppm]: 0.001, // Assuming ppm -> 1mg/L -> 0.001g/L
  [ConcentrationUnit.ppb]: 0.000001, // Assuming ppb -> 1µg/L -> 0.000001g/L
};

export const MOLARITY_CONVERSIONS: Record<ConcentrationUnit, number> = {
    [ConcentrationUnit.M]: 1,
    [ConcentrationUnit.mM]: 0.001,
    [ConcentrationUnit.uM]: 0.000001,
    [ConcentrationUnit.gL]: NaN,
    [ConcentrationUnit.mgmL]: NaN,
    [ConcentrationUnit.ugmL]: NaN,
    [ConcentrationUnit.percent]: NaN,
    [ConcentrationUnit.ppm]: NaN,
    [ConcentrationUnit.ppb]: NaN,
}

// Base unit for volume: L
export const VOLUME_CONVERSIONS: Record<VolumeUnit, number> = {
  [VolumeUnit.L]: 1,
  [VolumeUnit.mL]: 0.001,
  [VolumeUnit.uL]: 0.000001,
  [VolumeUnit.gal]: 3.78541,
  [VolumeUnit.qt]: 0.946353,
  [VolumeUnit.floz]: 0.0295735,
  [VolumeUnit.cup]: 0.24, // US customary cup
  [VolumeUnit.tbsp]: 0.0147868,
  // Fix: Corrected typo from VolumeVolumeUnit to VolumeUnit.
  [VolumeUnit.tsp]: 0.00492892,
};
