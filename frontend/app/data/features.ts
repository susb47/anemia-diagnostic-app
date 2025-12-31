export type FeatureConfig = {
  key: string;
  label: string;
  type: 'slider' | 'select';
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
  defaultValue: number | string;
  unit?: string;
};

export const FEATURES: FeatureConfig[] = [
  // --- Demographics ---
  { key: 'Age', label: 'Age', type: 'slider', min: 1, max: 100, step: 1, defaultValue: 35, unit: 'yrs' },
  { key: 'Gender', label: 'Gender', type: 'select', options: ['Male', 'Female'], defaultValue: 'Female' },
  
  // --- Red Blood Cells ---
  { key: 'HGB', label: 'Hemoglobin (HGB)', type: 'slider', min: 5, max: 20, step: 0.1, defaultValue: 13.5, unit: 'g/dL' },
  { key: 'RBC', label: 'RBC Count', type: 'slider', min: 2, max: 7, step: 0.01, defaultValue: 4.5, unit: 'm/µL' },
  { key: 'HCT', label: 'Hematocrit (HCT)', type: 'slider', min: 15, max: 60, step: 0.1, defaultValue: 40, unit: '%' },
  { key: 'MCV', label: 'MCV', type: 'slider', min: 50, max: 120, step: 0.1, defaultValue: 88, unit: 'fL' },
  { key: 'MCH', label: 'MCH', type: 'slider', min: 15, max: 40, step: 0.1, defaultValue: 30, unit: 'pg' },
  { key: 'MCHC', label: 'MCHC', type: 'slider', min: 28, max: 40, step: 0.1, defaultValue: 34, unit: 'g/dL' },
  { key: 'RDW_CV', label: 'RDW-CV', type: 'slider', min: 10, max: 30, step: 0.1, defaultValue: 13, unit: '%' },
  
  // --- White Blood Cells ---
  { key: 'WBC', label: 'WBC Count', type: 'slider', min: 2000, max: 20000, step: 100, defaultValue: 7000, unit: '/µL' },
  { key: 'Neutrophils_Percent', label: 'Neutrophils %', type: 'slider', min: 0, max: 100, step: 0.1, defaultValue: 60, unit: '%' },
  { key: 'Lymphocytes_Percent', label: 'Lymphocytes %', type: 'slider', min: 0, max: 100, step: 0.1, defaultValue: 30, unit: '%' },
  { key: 'Monocytes_Percent', label: 'Monocytes %', type: 'slider', min: 0, max: 100, step: 0.1, defaultValue: 6, unit: '%' },
  { key: 'Eosinophils_Percent', label: 'Eosinophils %', type: 'slider', min: 0, max: 100, step: 0.1, defaultValue: 3, unit: '%' },
  { key: 'Basophils_Percent', label: 'Basophils %', type: 'slider', min: 0, max: 10, step: 0.1, defaultValue: 1, unit: '%' },
  
  // --- Platelets & Others ---
  { key: 'Platelets', label: 'Platelet Count', type: 'slider', min: 50000, max: 600000, step: 1000, defaultValue: 250000, unit: '/µL' },
  { key: 'MPV', label: 'Mean Platelet Vol (MPV)', type: 'slider', min: 5, max: 15, step: 0.1, defaultValue: 10, unit: 'fL' },
  { key: 'PCT', label: 'Plateletcrit (PCT)', type: 'slider', min: 0, max: 1, step: 0.01, defaultValue: 0.25, unit: '%' },
  { key: 'ESR', label: 'ESR', type: 'slider', min: 0, max: 100, step: 1, defaultValue: 10, unit: 'mm/hr' },
  
  // --- History/Context ---
  { key: 'History_Anemia', label: 'Family History of Anemia', type: 'select', options: ['No', 'Yes'], defaultValue: 'No' },
  { key: 'Substance_Use', label: 'Smoker / Substance Use', type: 'select', options: ['No', 'Yes'], defaultValue: 'No' },
];