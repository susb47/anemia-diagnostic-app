"use client";

import React, { useState } from 'react';
import { 
  Network, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  GitBranch, 
  Server,
  FileJson,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// --- Components ---

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-8 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      </div>
      <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  );
}

function PhaseCard({ phase, title, description, details }: { phase: string, title: string, description: string, details: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50/50 dark:bg-slate-900/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 block">
            {phase}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
        </div>
        <div className="text-slate-400">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-0 animate-fade-in">
          <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-4"></div>
          <ul className="space-y-2">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <Network size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Methodological System
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A privacy-preserving Federated Graph Learning architecture designed to resolve the "Diagnostic Blind Spot" in hematology.
          </p>
        </div>

        {/* 1. Overview */}
        <Section title="System Overview" icon={<Activity />}>
          <p>
            Current AI solutions in hematology are predominantly centralized and treat patients as isolated data points. 
            Our research introduces a paradigm shift: moving from analyzing isolated rows of blood data to analyzing 
            <strong> Patient Similarity Networks</strong> using Graph Neural Networks (GNNs).
          </p>
          <p>
            The system is operationalized via a <strong>Decoupled Headless Architecture</strong>, separating the 
            computationally intensive inference engine (hosted on Hugging Face) from the latency-sensitive 
            user interface (hosted on Vercel).
          </p>
        </Section>

        {/* 2. The 5-Phase Pipeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <GitBranch className="text-indigo-600" />
            Research Pipeline
          </h2>
          <div className="grid gap-4">
            <PhaseCard 
              phase="Phase 1"
              title="Multi-Center Data Collection"
              description="Sourcing the Tri-CBC-ACM Dataset."
              details={[
                "Aggregated 5,037 patient records from 4 distinct hospital silos (Jhenaidah Prince, Imperial, Dhaka CMH, Lab Aid Pabna).",
                "Data acquisition window: Jan 22, 2025 – Aug 25, 2025.",
                "Captured 22 features: 17 Clinical (CBC), 2 Biological, and 3 Anamnestic (Questionnaire) attributes."
              ]}
            />
            <PhaseCard 
              phase="Phase 2"
              title="Validation & Graph Topology"
              description="Transforming tabular data into a Patient Similarity Graph (PSG)."
              details={[
                " rigorous 'Human-in-the-loop' annotation by 1 doctor and 4 clinicians.",
                "Classes stratified into: Anemic, Non-Anemic, and Compensated Microcytosis.",
                "Constructed a k-Nearest Neighbors (k-NN) population graph to explicitly encode latent patient similarities.",
                "Implemented Robust Scaling (IQR) to handle biological outliers."
              ]}
            />
            <PhaseCard 
              phase="Phase 3"
              title="ResGAT Architecture Design"
              description="The Flagship Residual Graph Attention Network."
              details={[
                "Designed a hybrid architecture combining ResNet-1D (for feature extraction) and GATv2 (for relational learning).",
                "Incorporated Residual Skip Connections to prevent over-smoothing in deep graph layers.",
                "Utilized Multi-Head Attention (8 heads) to jointly attend to 'Red Cell' and 'Hereditary' similarity subspaces."
              ]}
            />
            <PhaseCard 
              phase="Phase 4"
              title="Federated Learning Simulation"
              description="Privacy-preserving collaborative training."
              details={[
                "Simulated 4 isolated hospital clients using the Flower (Flwr) framework.",
                "Protocol: 50 Global Communication Rounds with 40 local epochs per round.",
                "Compute-to-Data Paradigm: Only model gradients were exchanged; raw patient records never left the local nodes.",
                "Achieved 96.21% Global Accuracy without centralized data storage."
              ]}
            />
            <PhaseCard 
              phase="Phase 5"
              title="Deployment & Explainability"
              description="Operationalizing the model for clinical use."
              details={[
                "Backend: FastAPI containerized on Hugging Face Spaces (Docker).",
                "Frontend: Next.js React application for real-time interaction.",
                "Explainability: Integrated SHAP (Shapley Additive Explanations) and LIME to visualize feature contributions.",
                "Security: Communication secured via TLS 1.3 and stateless REST API patterns."
              ]}
            />
          </div>
        </div>

        {/* 3. The Dataset */}
        <Section title="The Tri-CBC-ACM Dataset" icon={<Database />}>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Composition</h3>
              <p className="text-sm mb-4">
                A balanced cohort of <strong>5,037</strong> patients validated against WHO standards.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Anemic:</strong> 1,732 (34.38%)</li>
                <li><strong>Non-Anemic:</strong> 1,664 (33.03%)</li>
                <li><strong>Compensated Microcytosis:</strong> 1,641 (32.57%)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Features</h3>
              <div className="flex flex-wrap gap-2">
                {['Hemoglobin', 'MCV', 'MCH', 'RDW-CV', 'Ferritin', 'RBC Count', 'WBC', 'Platelets', 'Family History'].map(f => (
                  <span key={f} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300">
                    {f}
                  </span>
                ))}
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium">+13 More</span>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Technical Stack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { name: 'PyTorch Geometric', icon: <Network size={20}/> },
            { name: 'Flower (Federated)', icon: <ShieldCheck size={20}/> },
            { name: 'FastAPI', icon: <Server size={20}/> },
            { name: 'Next.js', icon: <Cpu size={20}/> },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center">
              <div className="text-indigo-600 mb-2">{tech.icon}</div>
              <span className="font-bold text-slate-700 dark:text-slate-200">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}