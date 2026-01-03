import { FeatureConfig } from "../data/features";

interface Props {
  config: FeatureConfig;
  value: string | number;
  onChange: (key: string, value: string | number) => void;
}

export default function FeatureInput({ config, value, onChange }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
          {config.label}
        </label>
        {config.type === 'slider' && (
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 font-mono">
            {value} <span className="text-xs text-slate-400 dark:text-slate-500 font-sans font-normal">{config.unit}</span>
          </span>
        )}
      </div>

      {config.type === 'select' ? (
        <select
          value={value}
          onChange={(e) => onChange(config.key, e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none transition-colors"
        >
          {config.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <div className="relative pt-1">
          <input
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={(e) => onChange(config.key, parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all"
          />
        </div>
      )}
    </div>
  );
}