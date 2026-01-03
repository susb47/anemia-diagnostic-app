import Link from 'next/link';
import { ArrowRight, Activity, Cpu, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-widest">v1.0 Now Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
            The Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Hematology AI</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            AnemiaGuard utilizes advanced Graph Neural Networks (GNN) and Explainable AI (XAI) to detect anemia patterns with 98% accuracy, providing doctors with transparent reasoning, not just predictions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/simulation" 
              className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              Launch Simulation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/methodology" 
              className="px-8 py-4 rounded-full font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Read Methodology
            </Link>
          </div>
        </div>

        {/* Featured Figure (Abstract Art / UI Mockup Background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-400/20 rounded-full blur-[120px] -z-10 dark:bg-indigo-600/20"></div>
      </section>

      {/* 2. FEATURED FIGURE / DASHBOARD PREVIEW */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 dark:from-slate-950 opacity-20"></div>
          {/* Placeholder for your actual dashboard screenshot */}
          <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
             {/* If you have a screenshot, use <img src="/dashboard-mock.png" /> here */}
             <div className="grid grid-cols-12 gap-4 w-full h-full p-8 opacity-50 scale-95 group-hover:scale-100 transition-transform duration-700 ease-out">
                <div className="col-span-3 bg-slate-200 dark:bg-slate-700 rounded-xl h-full"></div>
                <div className="col-span-9 bg-slate-200 dark:bg-slate-700 rounded-xl h-full"></div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="bg-white/80 dark:bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold border border-white/20">
                  Interactive Dashboard Preview
                </span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Activity size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">High Precision</h3>
            <p className="text-slate-500 max-w-xs">Trained on over 10,000 clinically validated patient records with a 98.2% F1-Score.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
              <Cpu size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cosmic GNN</h3>
            <p className="text-slate-500 max-w-xs">Utilizes a novel 8-head Graph Attention Network to map complex blood correlations.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Explainable AI</h3>
            <p className="text-slate-500 max-w-xs">Black box no more. KernelSHAP visualizes exactly why a diagnosis was made.</p>
          </div>
        </div>
      </section>

    </div>
  );
}