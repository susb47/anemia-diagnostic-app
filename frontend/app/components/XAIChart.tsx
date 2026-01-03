"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FEATURES } from '../data/features';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function XAIChart({ shapValues }: { shapValues: number[] }) {
  const dataPoints = shapValues
    .map((val, idx) => ({ label: FEATURES[idx].label, val }))
    .sort((a, b) => Math.abs(b.val) - Math.abs(a.val))
    .slice(0, 8);

  const data = {
    labels: dataPoints.map(d => d.label),
    datasets: [
      {
        label: 'Impact',
        data: dataPoints.map(d => d.val),
        backgroundColor: dataPoints.map(d => d.val > 0 ? '#ef4444' : '#3b82f6'),
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { 
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: { color: '#94a3b8' } 
      },
      y: { 
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { weight: 'bold' } } 
      }
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mt-6 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white">AI Reasoning (SHAP)</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Top 8 factors influencing this result</p>
        </div>
        <div className="flex gap-3 text-[10px] font-bold uppercase tracking-wide">
          <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-sm"></div> Risk +</div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-sm"></div> Risk -</div>
        </div>
      </div>
      <div className="h-64">
        {/* @ts-ignore */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}