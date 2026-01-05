import React from 'react';
import { Lightbulb, Stethoscope, Utensils, Activity } from 'lucide-react';

interface SuggestionsProps {
  prediction: number; // 0 = Healthy, 1 = Compensated Microcytosis, 2 = Severe Anemia
  formData?: any;
}

export default function Suggestions({ prediction }: SuggestionsProps) {
  
  // Dynamic Content based on Prediction
  const getContent = () => {
    switch (prediction) {
      case 0: // Healthy
        return {
          title: "Maintenance & Prevention",
          description: "Blood parameters are within the normal physiological range. Focus on maintaining this healthy status.",
          items: [
            { icon: <Utensils size={18} />, text: "Continue a balanced diet rich in iron (spinach, red meat, lentils)." },
            { icon: <Activity size={18} />, text: "Maintain regular physical activity to support cardiovascular health." },
            { icon: <Stethoscope size={18} />, text: "Routine annual check-ups are sufficient; no immediate intervention needed." }
          ]
        };
      case 1: // Compensated Microcytosis
        return {
          title: "Clinical Monitoring Required",
          description: "RBCs are smaller than normal (Microcytic) but anemia is not yet severe. This is often a precursor state or a genetic trait.",
          items: [
            { icon: <Stethoscope size={18} />, text: "Evaluate Serum Ferritin to distinguish between Iron Deficiency and Thalassemia Trait." },
            { icon: <Utensils size={18} />, text: "Increase Vitamin C intake to improve iron absorption efficiency." },
            { icon: <Activity size={18} />, text: "Monitor for fatigue or shortness of breath during exercise." },
            { icon: <Lightbulb size={18} />, text: "Genetic screening (Hemoglobin Electrophoresis) may be advised if family history exists." }
          ]
        };
      case 2: // Severe Anemia
        return {
          title: "Immediate Intervention Needed",
          description: "Hemoglobin levels are critically low. Oxygen transport capacity is significantly compromised.",
          items: [
            { icon: <Stethoscope size={18} />, text: "Consult a hematologist immediately for a complete blood panel." },
            { icon: <Utensils size={18} />, text: "Therapeutic Iron supplementation (Oral or IV) is likely required under supervision." },
            { icon: <Activity size={18} />, text: "Avoid strenuous physical activity until HGB levels stabilize." },
            { icon: <Lightbulb size={18} />, text: "Investigate underlying causes: chronic blood loss, malabsorption, or bone marrow issues." }
          ]
        };
      default:
        return {
          title: "Analysis Inconclusive",
          description: "Please check your inputs and try again.",
          items: []
        };
    }
  };

  const content = getContent();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
          <Lightbulb size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI-Generated Recommendations</h3>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-400 mb-1">
          {content.title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {content.description}
        </p>
      </div>

      <div className="space-y-3">
        {content.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="mt-0.5 text-slate-400 dark:text-slate-500">
              {item.icon}
            </div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}