"use client";

import React from 'react';
import { 
  CalendarClock, 
  FileSearch, 
  Database, 
  Network, 
  Cpu, 
  Rocket, 
  CheckCircle2,
  Clock
} from 'lucide-react';

// --- Types ---
interface TimelineEvent {
  phase: string;
  title: string;
  date: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'upcoming';
  details: string[];
}

// --- Data (Extracted from Report Section 3.3) ---
const timelineData: TimelineEvent[] = [
  {
    phase: "Phase 1",
    title: "Study Design & Ethical Clearance",
    date: "January 2025",
    icon: <FileSearch size={24} />,
    status: "completed",
    details: [
      "Defined inclusion/exclusion criteria for hematological patients.",
      "Formalized Federated Consortium contracts with 4 hospitals (Jhenaidah Prince, Imperial, Dhaka CMH, Lab Aid).",
      "Designed structured anamnestic questionnaires for lifestyle data collection.",
      "Obtained necessary IRB and Ethical Clearances."
    ]
  },
  {
    phase: "Phase 2",
    title: "Multi-Center Data Collection",
    date: "Jan 22, 2025 – Aug 25, 2025",
    icon: <Database size={24} />,
    status: "completed",
    details: [
      "Deployed 2-person research team to hospital labs for active data sourcing.",
      " collected 5,037 patient records (CBC + Questionnaires).",
      "Established a 5-member Adjudication Committee (1 Doctor, 4 Clinicians).",
      "Conducted weekly batch annotation to label cases as Anemic, Non-Anemic, or Compensated Microcytosis."
    ]
  },
  {
    phase: "Phase 3",
    title: "Preprocessing & Graph Topology",
    date: "September 2025",
    icon: <Network size={24} />,
    status: "completed",
    details: [
      "Harmonized heterogeneous datasets from 4 silos into the unified Tri-CBC-ACM schema.",
      "Executed rigorous cleaning: PII removal, anonymization, and hybrid imputation for missing values.",
      "Engineered the 'Population Graph Topology' using k-Nearest Neighbors (k-NN) to transform tabular rows into a connected node network."
    ]
  },
  {
    phase: "Phase 4",
    title: "Federated Modeling & Benchmarking",
    date: "Oct 2025 – Nov 2025",
    icon: <Cpu size={24} />,
    status: "completed",
    details: [
      "Trained and tuned SOTA baselines (LightGBM, TabNet) for performance comparison.",
      "Developed the flagship ResGAT (Residual Graph Attention Network) architecture.",
      "Simulated the Federated Learning environment using the Flower Framework across 4 virtual hospital silos.",
      "Validated results: 96.2% Global Accuracy and 98.4% Recall."
    ]
  },
  {
    phase: "Phase 5",
    title: "Deployment & Documentation",
    date: "Nov 2025 – Dec 2025",
    icon: <Rocket size={24} />,
    status: "completed",
    details: [
      "Implemented the 'Headless' architecture: FastAPI Backend (Hugging Face) + Next.js Frontend (Vercel).",
      "Integrated SHAP & LIME for real-time model explainability.",
      "Finalized the Data Dictionary and Technical Dissertation.",
      "Project Defense and Thesis Submission."
    ]
  }
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <CalendarClock size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Project Timeline
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A chronological overview of the AnemiaGuard research lifecycle, from conceptualization to deployment.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 md:hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* Connector Dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-indigo-600 z-10 flex items-center justify-center shadow-lg">
                  {item.status === 'completed' ? (
                    <CheckCircle2 size={14} className="text-white" />
                  ) : (
                    <Clock size={14} className="text-white" />
                  )}
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 text-left' : 'md:pl-12 text-left'
                }`}>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all group">
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                          {item.phase}
                        </span>
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {item.title}
                    </h3>

                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Empty Side for Desktop Layout Balance */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
            Status: Project Completed & Deployed Successfully
          </div>
        </div>

      </div>
    </div>
  );
}