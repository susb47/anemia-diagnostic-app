export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto pt-24 pb-12 px-6 animate-fade-in">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Explainable AI for <span className="text-indigo-600">Hematology</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between deep learning black boxes and clinical trust. 
          Our system uses Graph Neural Networks to detect subtle anemia patterns.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">🧬</div>
          <h3 className="font-bold text-slate-900 mb-2">Cosmic GNN</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Utilizes a custom 8-head Graph Attention Network to map relationships between 25 distinct blood parameters.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-4">🔍</div>
          <h3 className="font-bold text-slate-900 mb-2">SHAP Explainability</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Every diagnosis comes with a breakdown. We use KernelSHAP to mathematically quantify feature importance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center text-2xl mb-4">⚡</div>
          <h3 className="font-bold text-slate-900 mb-2">Real-time Inference</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Optimized PyTorch backend running on FastAPI delivers sub-second predictions even on CPU architecture.
          </p>
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="border-t border-slate-200 pt-10 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Powered By</p>
        <div className="flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-slate-700">PyTorch Geometric</span>
          <span className="font-bold text-slate-700">Next.js 14</span>
          <span className="font-bold text-slate-700">FastAPI</span>
          <span className="font-bold text-slate-700">Tailwind CSS</span>
        </div>
      </div>

    </div>
  );
}