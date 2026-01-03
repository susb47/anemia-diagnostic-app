import { FEATURES } from '../data/features';

interface Props {
  formData: Record<string, string | number>;
  prediction: number;
}

export default function Suggestions({ formData, prediction }: Props) {
  const suggestions = [];

  const mcv = Number(formData['MCV']);
  const ferritin = Number(formData['Ferritin']);

  if (prediction === 0) { // Anemic
    if (mcv < 80) {
      suggestions.push({
        title: 'Microcytic Anemia Alert',
        desc: 'Low MCV (<80 fL) suggests Iron Deficiency. Check Ferritin levels.',
        icon: '🩸',
        // Light mode colors vs Dark mode colors
        color: 'bg-amber-50 border-amber-400 text-amber-800 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-200'
      });
    } else if (mcv > 100) {
      suggestions.push({
        title: 'Macrocytic Anemia Alert',
        desc: 'High MCV (>100 fL) often indicates Vitamin B12 or Folate deficiency.',
        icon: '💊',
        color: 'bg-purple-50 border-purple-400 text-purple-800 dark:bg-purple-900/20 dark:border-purple-700 dark:text-purple-200'
      });
    }

    if (ferritin < 30) {
      suggestions.push({
        title: 'Low Iron Reserves',
        desc: 'Ferritin is critically low. Consider iron-rich diet or supplementation.',
        icon: '🥩',
        color: 'bg-red-50 border-red-400 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-200'
      });
    }
  }

  if (String(formData['Substance_Use']) === 'Yes') {
    suggestions.push({
      title: 'Smoking / Substance Impact',
      desc: 'Smoking can artificially raise HGB levels, masking anemia.',
      icon: '🚬',
      color: 'bg-slate-100 border-slate-400 text-slate-800 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300'
    });
  }

  if (suggestions.length === 0) {
    suggestions.push({
      title: 'Maintain Healthy Lifestyle',
      desc: 'Blood parameters appear balanced. Continue regular checkups.',
      icon: '✅',
      color: 'bg-emerald-50 border-emerald-400 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-200'
    });
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-6 transition-colors">
      <h3 className="font-bold text-slate-900 dark:text-white mb-4">Clinical Suggestions</h3>
      <div className="grid gap-4">
        {suggestions.map((sug, idx) => (
          <div key={idx} className={`flex gap-4 p-4 rounded-xl border-l-4 ${sug.color}`}>
            <div className="text-2xl">{sug.icon}</div>
            <div>
              <h4 className="text-sm font-bold uppercase opacity-90">{sug.title}</h4>
              <p className="text-sm mt-1 opacity-80">{sug.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}