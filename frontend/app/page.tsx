"use client";

import { useState } from "react";
import { FEATURES } from "./data/features";
import FeatureInput from "./components/FeatureInput";

export default function Home() {
  // 1. Initialize State with defaults
  const [formData, setFormData] = useState<Record<string, string | number>>(() => {
    const defaults: Record<string, string | number> = {};
    FEATURES.forEach((f) => (defaults[f.key] = f.defaultValue));
    return defaults;
  });

  // 2. Handle Change
  const handleChange = (key: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* LEFT COLUMN: INPUT SIDEBAR (4 cols) */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Patient Data</h2>
            <button 
              onClick={() => window.location.reload()}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Reset
            </button>
          </div>
          
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {FEATURES.map((feature) => (
              <FeatureInput
                key={feature.key}
                config={feature}
                value={formData[feature.key]}
                onChange={handleChange}
              />
            ))}
          </div>

          <div className="pt-6 mt-4 border-t border-slate-100">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-200 transition-transform active:scale-95">
              Run AI Diagnosis
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: RESULTS PLACEHOLDER (8 cols) */}
      <div className="lg:col-span-8">
        <div className="h-full flex items-center justify-center bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 min-h-[500px]">
          <div className="text-center text-slate-500">
            <span className="text-4xl block mb-2">👋</span>
            <p>Adjust values and click "Run Diagnosis"</p>
          </div>
        </div>
      </div>

    </div>
  );
}