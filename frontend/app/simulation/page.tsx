"use client";

import { useState } from "react";
// Note the "../" to go back up one level to find the folders
import { FEATURES } from "../data/features";
import FeatureInput from "../components/FeatureInput";
import XAIChart from "../components/XAIChart";
import Suggestions from "../components/Suggestions";

export default function SimulationPage() {
  const [formData, setFormData] = useState<Record<string, string | number>>(() => {
    const defaults: Record<string, string | number> = {};
    FEATURES.forEach((f) => (defaults[f.key] = f.defaultValue));
    return defaults;
  });

  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const featureArray = FEATURES.map((f) => {
        const val = formData[f.key];
        if (f.key === 'Gender') return val === 'Male' ? 1 : 0;
        if (f.key === 'History_Anemia') return val === 'Yes' ? 1 : 0;
        if (f.key === 'Substance_Use') return val === 'Yes' ? 1 : 0;
        if (f.key === 'Chronic_Illness') return val === 'Yes' ? 1 : 0;
        return Number(val);
      });

      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: featureArray }),
      });

      if (!response.ok) throw new Error("API Connection Failed");
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError("Is the backend running? Check terminal.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen animate-fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Diagnostic Simulation</h1>
        <p className="text-slate-500 dark:text-slate-400">Enter clinical parameters to generate a GNN-based prediction.</p>
      </div>
 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* --- LEFT SIDEBAR (Inputs) --- */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Clinical Parameters</h2>
              <button onClick={() => window.location.reload()} className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Reset</button>
            </div>
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900">
              {FEATURES.map((feature) => (
                <FeatureInput key={feature.key} config={feature} value={formData[feature.key]} onChange={handleChange} />
              ))}
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <button onClick={handlePredict} disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all active:scale-[0.98] flex justify-center items-center gap-2">
                {loading ? "Processing..." : "Run Analysis"}
              </button>
              {error && <p className="text-xs text-red-500 mt-3 text-center">{error}</p>}
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT (Results) --- */}
        <div className="lg:col-span-8">
          {result ? (
            <div className="space-y-6 animate-fade-in">
              <div className={`p-8 rounded-3xl border shadow-sm ${result.prediction === 0 ? 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900' : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900'}`}>
                 <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Diagnostic Output</h2>
                 <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">{result.prediction === 0 ? "Potential Anemia" : "Healthy Profile"}</h1>
                 <div className="mt-2 text-sm font-bold opacity-70">Confidence: {(result.confidence * 100).toFixed(1)}%</div>
              </div>
              <XAIChart shapValues={result.shap_values} />
              <Suggestions formData={formData} prediction={result.prediction} />
            </div>
          ) : (
            <div className="h-[600px] rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center p-12 transition-colors">
               <div className="text-6xl mb-6 opacity-50 grayscale">🩺</div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready for Diagnosis</h3>
               <p className="text-slate-500 dark:text-slate-400">Adjust parameters on the left to begin.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}