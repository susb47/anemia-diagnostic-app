"use client";

import { useState } from "react";
import { FEATURES } from "../data/features";
import FeatureInput from "../components/FeatureInput";
import XAIChart from "../components/XAIChart";
import Suggestions from "../components/Suggestions";
import { AlertTriangle, CheckCircle, AlertOctagon } from "lucide-react";

// --- HELPER: Handle the 3-Class Logic ---
const getDiagnosis = (pred: number) => {
  switch (pred) {
    case 0:
      return {
        label: "Healthy Profile",
        color: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900 text-emerald-900 dark:text-emerald-100",
        icon: <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      };
    case 1:
      return {
        label: "Moderate Anemia",
        color: "bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-900 text-amber-900 dark:text-amber-100",
        icon: <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
      };
    case 2:
      return {
        label: "Severe Anemia",
        color: "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900 text-red-900 dark:text-red-100",
        icon: <AlertOctagon className="w-6 h-6 text-red-600 dark:text-red-400" />
      };
    default:
      return {
        label: "Unknown Status",
        color: "bg-gray-50 border-gray-100",
        icon: null
      };
  }
};

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

      // ---------------------------------------------------------
      // UPDATED API URL FOR HUGGING FACE
      // ---------------------------------------------------------
      const response = await fetch("https://sumoy47-anemia-api.hf.space/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features: featureArray }),
      });

      if (!response.ok) throw new Error("API Connection Failed");
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to connect to AI Server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get configuration based on current result
  const diagnosis = result ? getDiagnosis(result.prediction) : null;

  return (
    <div className="pt-24 pb-12 min-h-screen animate-fade-in transition-colors duration-300">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AI Diagnostic Simulation</h1>
        <p className="text-slate-500 dark:text-slate-400">Enter clinical parameters to generate a Multi-Class GNN prediction.</p>
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
          {result && diagnosis ? (
            <div className="space-y-6 animate-fade-in">
              
              {/* Dynamic 3-Class Result Card */}
              <div className={`p-8 rounded-3xl border shadow-sm ${diagnosis.color}`}>
                 <div className="flex items-center gap-2 mb-2">
                    {diagnosis.icon}
                    <h2 className="text-xs font-bold uppercase tracking-widest opacity-80">Diagnostic Output</h2>
                 </div>
                 <h1 className="text-4xl font-extrabold">
                    {diagnosis.label}
                 </h1>
                 <div className="mt-2 text-sm font-bold opacity-70">
                   Confidence: {(result.confidence * 100).toFixed(1)}%
                 </div>
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