
export enum ConcentrationUnit {
  M = 'M',
  mM = 'mM',
  uM = 'µM',
  gL = 'g/L',
  mgmL = 'mg/mL',
  ugmL = 'µg/mL',
  percent = '%',
  ppm = 'ppm',
  ppb = 'ppb',
}

export enum VolumeUnit {
  L = 'L',
  mL = 'mL',
  uL = 'µL',
  gal = 'gal',
  qt = 'qt',
  floz = 'fl oz',
  cup = 'cup',
  tbsp = 'tbsp',
  tsp = 'tsp',
}

export type Unit = ConcentrationUnit | VolumeUnit;

export enum UnitType {
    Concentration = 'Concentration',
    Volume = 'Volume'
}

export enum Variable {
  C1 = 'c1',
  V1 = 'v1',
  C2 = 'c2',
  V2 = 'v2',
}

export interface CalculatorState {
  [Variable.C1]: { value: string; unit: ConcentrationUnit };
  [Variable.V1]: { value: string; unit: VolumeUnit };
  [Variable.C2]: { value: string; unit: ConcentrationUnit };
  [Variable.V2]: { value: string; unit: VolumeUnit };
}
