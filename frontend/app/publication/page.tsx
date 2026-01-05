"use client";

import React from 'react';
import { 
  BookOpenCheck, 
  FileText, 
  Send, 
  Loader2, 
  Database, 
  Award,
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface Paper {
  id: number;
  type: "Original Research" | "Data Descriptor" | "Review Paper";
  title: string;
  journal: string;
  publisher: string;
  status: "Submitted" | "Under Review" | "Accepted" | "Published";
  date: string;
  description: string;
}

// --- UPDATED Data based on your feedback ---
const papers: Paper[] = [
  {
    id: 1,
    type: "Data Descriptor",
    title: "The Tri-CBC-ACM Dataset: A Multi-Center Hematological Resource",
    journal: "Database: The Journal of Biological Databases and Curation",
    publisher: "Oxford University Press",
    status: "Under Review",
    date: "Submitted: Dec 2025",
    description: "A comprehensive data descriptor paper detailing the collection, harmonization, and validation of the 5,037 patient records from four distinct hospital silos."
  },
  {
    id: 2,
    type: "Original Research",
    title: "AI in Hematology: A Federated Graph Learning Architecture for Collaborative Anemia Detection Across Distributed Data Silos",
    journal: "Artificial Intelligence in Medicine",
    publisher: "Elsevier",
    status: "Submitted",
    date: "Jan 2026",
    description: "The primary methodological paper proposing the ResGAT architecture and Federated Graph Learning framework for privacy-preserving hematological diagnosis."
  },
  {
    id: 3,
    type: "Review Paper",
    title: "Advances in Computational Anemia Diagnostics: A Comprehensive Review of Machine Learning Applications in Hematology",
    journal: "Artificial Intelligence Review",
    publisher: "Springer Nature",
    status: "Submitted",
    date: "Jan 2026",
    description: "A systematic survey of existing federated learning approaches in healthcare, highlighting gaps in hematological applications and graph-based methods."
  }
];

// --- Components ---
const StatusBadge = ({ status }: { status: Paper['status'] }) => {
  switch (status) {
    case 'Published':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          <BookOpenCheck size={14} /> Published
        </span>
      );
    case 'Under Review':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 animate-pulse-slow">
          <Loader2 size={14} className="animate-spin" /> Under Review
        </span>
      );
    case 'Submitted':
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          <Send size={14} /> Submitted
        </span>
      );
    default:
      return null;
  }
};

export default function PublicationPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <BookOpenCheck size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Publication Status
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tracking the dissemination of our research across high-impact Q1 journals and biological databases.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {papers.map((paper) => (
            <div 
              key={paper.id} 
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all group flex flex-col"
            >
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${
                    paper.type === 'Data Descriptor' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400' :
                    paper.type === 'Review Paper' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
                    'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                  }`}>
                    {paper.type === 'Data Descriptor' ? <Database size={20} /> : <FileText size={20} />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {paper.type}
                  </span>
                </div>
                <StatusBadge status={paper.status} />
              </div>

              {/* Title & Journal */}
              <div className="mb-6 flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                  {paper.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-700 pl-3">
                  <Award size={16} className="text-yellow-500" />
                  <span className="font-semibold">{paper.journal}</span>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span>{paper.publisher}</span>
                </div>
              </div>

              {/* Description & Footer */}
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {paper.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-medium text-slate-400">
                    {paper.date}
                  </span>
                  <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Summary Stats (Updated) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Papers', value: '3' },
            { label: 'Under Review', value: '1' },
            { label: 'Q1 Targets', value: '2' },
            { label: 'Datasets', value: '1' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 text-center border border-slate-100 dark:border-slate-800">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}