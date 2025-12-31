import { FeatureConfig } from "../data/features";

interface Props {
  config: FeatureConfig;
  value: string | number;
  onChange: (key: string, value: string | number) => void;
}

export default function FeatureInput({ config, value, onChange }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-indigo-100 transition-colors shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
          {config.label}
        </label>
        {config.type === 'slider' && (
          <span className="text-sm font-bold text-indigo-600 font-mono">
            {value} <span className="text-xs text-slate-400 font-sans font-normal">{config.unit}</span>
          </span>
        )}
      </div>

      {config.type === 'select' ? (
        <select
          value={value}
          onChange={(e) => onChange(config.key, e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 outline-none"
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
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-500 transition-all"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
            <span>{config.min}</span>
            <span>{config.max}</span>
          </div>
        </div>
      )}
    </div>
  );
}