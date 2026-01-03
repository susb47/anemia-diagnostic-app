import React from 'react';
import { CalendarClock } from 'lucide-react';

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6">
          <CalendarClock className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-4">
          Project Timeline
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          This page will display the chronological progress of the AnemiaGuard project, from data collection to model deployment.
        </p>
        <div className="mt-10 p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50">
          <span className="text-slate-400 font-semibold uppercase tracking-wider">Content Under Development</span>
        </div>
      </div>
    </div>
  );
}