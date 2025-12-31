export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      
      {/* Header Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900">About the Project</h1>
        <p className="text-lg text-slate-600">
          Pioneering the use of Graph Neural Networks (GNNs) for early anemia detection using routine blood work data.
        </p>
      </section>

      {/* Main Content Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
        
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-2">The Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            Anemia affects billions globally but is often diagnosed late. Our research aims to utilize deep learning 
            to identify subtle patterns in Complete Blood Count (CBC) data that traditional heuristics might miss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">The Model</h3>
            <p className="text-sm text-slate-600">
              We utilize a <strong>"Cosmic" GNN Architecture</strong> with 8-head attention mechanisms, trained on over 
              5,000 clinical samples. It achieves 97.4% validation accuracy.
            </p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Explainability</h3>
            <p className="text-sm text-slate-600">
              Unlike "Black Box" AI, our system integrates <strong>SHAP & LIME</strong> to provide doctors with 
              clear reasoning behind every diagnosis.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}