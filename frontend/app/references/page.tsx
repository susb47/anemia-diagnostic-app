"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  FileText, 
  Filter 
} from 'lucide-react';

// --- Data Structure ---
interface Reference {
  id: number;
  authors: string;
  title: string;
  publication: string;
  details: string;
  year: string;
  link?: string;
  type: 'Journal' | 'Report' | 'Web' | 'Data';
}

// --- Complete Reference List from Your Report ---
const references: Reference[] = [
  {
    id: 1,
    authors: "W. Gardner et al.",
    title: "Prevalence, years lived with disability, and trends in anaemia burden by severity and cause, 1990–2021: a systematic analysis for the Global Burden of Disease Study 2021",
    publication: "The Lancet Haematology",
    details: "vol. 10, no. 9, pp. e713-e730",
    year: "2023",
    type: "Journal"
  },
  {
    id: 2,
    authors: "NCHS",
    title: "Anemia Prevalence: United States, August 2021–August 2023",
    publication: "NCHS Data Brief",
    details: "no. 519",
    year: "2024",
    type: "Report"
  },
  {
    id: 3,
    authors: "Institute for Health Metrics and Evaluation (IHME)",
    title: "New study reveals global anemia cases remain persistently high among women and children",
    publication: "Health Metrics",
    details: "",
    year: "2023",
    type: "Report"
  },
  {
    id: 4,
    authors: "Cleveland Clinic",
    title: "Microcytosis: Causes, Symptoms & Treatment",
    publication: "Cleveland Clinic Medical Library",
    details: "[Online]",
    year: "2024",
    link: "https://my.clevelandclinic.org/health/diseases/24645-microcytosis",
    type: "Web"
  },
  {
    id: 5,
    authors: "H. Al-Mudalal",
    title: "Building a Score to Discriminate Between Iron Deficiency Anemia and Beta Thalassemia Trait",
    publication: "South Eastern European Journal of Public Health",
    details: "vol. 22, no. 1",
    year: "2024",
    type: "Journal"
  },
  {
    id: 6,
    authors: "X. Zhang et al.",
    title: "Differentiation between Thalassemia Trait and Iron Deficiency Anemia Based on Low Hemoglobin Density and Microcytic Anemia Factor",
    publication: "Journal of Clinical Laboratory Analysis",
    details: "vol. 38, no. 4",
    year: "2025",
    type: "Journal"
  },
  {
    id: 7,
    authors: "A. Aljebaly et al.",
    title: "Basrah Score: a novel machine learning-based score for differentiating iron deficiency anemia and beta thalassemia trait using RBC indices",
    publication: "Frontiers in Big Data",
    details: "vol. 8, Art. no. 1634133",
    year: "2025",
    type: "Journal"
  },
  {
    id: 8,
    authors: "J. Matos et al.",
    title: "A new index to discriminate between iron deficiency anemia and thalassemia trait",
    publication: "Hematology, Transfusion and Cell Therapy",
    details: "vol. 46, no. 1",
    year: "2024",
    type: "Journal"
  },
  {
    id: 9,
    authors: "M. R. Aditya et al.",
    title: "Predictive machine-learning model for screening iron deficiency without anaemia: a retrospective cohort study",
    publication: "BMJ Open",
    details: "vol. 15, no. 8, p. e097016",
    year: "2025",
    type: "Journal"
  },
  {
    id: 10,
    authors: "J. W. Asare et al.",
    title: "Machine Learning Approaches for Enhanced Diagnosis of Hematological Disorders",
    publication: "Computational Systems and Artificial Intelligence",
    details: "vol. 4, no. 1",
    year: "2025",
    type: "Journal"
  },
  {
    id: 11,
    authors: "Blood Journal",
    title: "Artificial intelligence in hematology: Challenges and Opportunities",
    publication: "Blood",
    details: "vol. 146, no. 19, pp. 2283-2290",
    year: "2024",
    type: "Journal"
  },
  {
    id: 12,
    authors: "S. Olatunji et al.",
    title: "AI-Enhanced Blood Testing for Disease Detection and Monitoring",
    publication: "International Journal of Innovative Science and Research Technology",
    details: "vol. 9, no. 12",
    year: "2024",
    type: "Journal"
  },
  {
    id: 13,
    authors: "Y. Cakmak et al.",
    title: "Artificial intelligence in routine blood tests: Limitations and Future Directions",
    publication: "Frontiers in Medical Engineering",
    details: "vol. 3",
    year: "2024",
    type: "Journal"
  },
  {
    id: 14,
    authors: "K. Güllü et al.",
    title: "Big data analytics and machine learning in hematology: Transformative insights, applications and challenges",
    publication: "NIH PMC",
    details: "PMC11902945",
    year: "2025",
    type: "Journal"
  },
  {
    id: 15,
    authors: "S. Krieg et al.",
    title: "Optimization of diagnosis and treatment of hematological diseases via artificial intelligence",
    publication: "Frontiers in Medicine",
    details: "vol. 11",
    year: "2024",
    type: "Journal"
  },
  {
    id: 16,
    authors: "Wulandari, Sari Ayu, et al.",
    title: "Breaking Boundaries in Diagnosis: Non-Invasive Anemia Detection Empowered by AI",
    publication: "IEEE Access",
    details: "vol. 12, pp. 9292-9307",
    year: "2024",
    type: "Journal"
  },
  {
    id: 17,
    authors: "Ramzan, Muhammad, et al.",
    title: "Revolutionizing anemia detection: integrative machine learning models and advanced attention mechanisms",
    publication: "Visual Computing for Industry, Biomedicine, and Art",
    details: "vol. 7, no. 1, p. 18",
    year: "2024",
    type: "Journal"
  },
  {
    id: 18,
    authors: "Sabir, Humera, et al.",
    title: "Fingertip Video Dataset for Non-invasive Diagnosis of Anemia using ResNet-18 Classifier",
    publication: "IEEE Access",
    details: "",
    year: "2024",
    type: "Journal"
  },
  {
    id: 19,
    authors: "Shahzad, Muhammad, et al.",
    title: "Semantic segmentation of anaemic RBCs using multilevel deep convolutional encoder-decoder network",
    publication: "IEEE Access",
    details: "vol. 9, pp. 161326-161341",
    year: "2021",
    type: "Journal"
  },
  {
    id: 20,
    authors: "Asare, Justice Williams, et al.",
    title: "Application of machine learning approach for iron deficiency anaemia detection in children using conjunctiva images",
    publication: "Informatics in Medicine Unlocked",
    details: "vol. 45, p. 101451",
    year: "2024",
    type: "Journal"
  },
  {
    id: 21,
    authors: "Suner, Selim, et al.",
    title: "Prediction of anemia and estimation of hemoglobin concentration using a smartphone camera",
    publication: "PLoS ONE",
    details: "vol. 16, no. 7, p. e0253495",
    year: "2021",
    type: "Journal"
  },
  {
    id: 22,
    authors: "Kolarš, Bela, et al.",
    title: "Iron deficiency and iron deficiency anemia: A comprehensive overview of established and emerging concepts",
    publication: "Pharmaceuticals",
    details: "vol. 18, no. 8, p. 1104",
    year: "2025",
    type: "Journal"
  },
  {
    id: 23,
    authors: "Wang, Meifang, et al.",
    title: "A deep learning model for the automatic recognition of aplastic anemia, myelodysplastic syndromes, and acute myeloid leukemia based on bone marrow smear",
    publication: "Frontiers in Oncology",
    details: "vol. 12, p. 844978",
    year: "2022",
    type: "Journal"
  },
  {
    id: 24,
    authors: "Zhao, Xinyu, et al.",
    title: "Deep-learning-based hemoglobin concentration prediction and anemia screening using ultra-wide field fundus images",
    publication: "Frontiers in Cell and Developmental Biology",
    details: "vol. 10, p. 888268",
    year: "2022",
    type: "Journal"
  },
  {
    id: 25,
    authors: "Pullakhandam, Siddartha, and Susan McRoy",
    title: "Classification and explanation of iron deficiency anemia from complete blood count data using machine learning",
    publication: "BioMedInformatics",
    details: "vol. 4, no. 1, pp. 661-672",
    year: "2024",
    type: "Journal"
  },
  {
    id: 26,
    authors: "BS, Dhruva Darshan, et al.",
    title: "An ensemble machine learning framework with explainable artificial intelligence for predicting haemoglobin anaemia considering haematological markers",
    publication: "Systems Science & Control Engineering",
    details: "vol. 12, no. 1, p. 2420927",
    year: "2024",
    type: "Journal"
  },
  {
    id: 27,
    authors: "Saputra, Dimas Chaerul Ekty, et al.",
    title: "A new artificial intelligence approach using extreme learning machine as the potentially effective model to predict and analyze the diagnosis of anemia",
    publication: "Healthcare",
    details: "Vol. 11. No. 5. MDPI",
    year: "2023",
    type: "Journal"
  },
  {
    id: 28,
    authors: "Yıldız, Tuba Karagül, et al.",
    title: "Classifying anemia types using artificial learning methods",
    publication: "Engineering Science and Technology, an International Journal",
    details: "vol. 24, no. 1, pp. 50-70",
    year: "2021",
    type: "Journal"
  },
  {
    id: 29,
    authors: "Kang, Chaewon, et al.",
    title: "Optimizing anemia management using artificial intelligence for patients undergoing hemodialysis",
    publication: "Scientific Reports",
    details: "vol. 14, no. 1, p. 26739",
    year: "2024",
    type: "Journal"
  },
  {
    id: 30,
    authors: "Darshan, BS Dhruva, et al.",
    title: "Differential diagnosis of iron deficiency anemia from aplastic anemia using machine learning and explainable Artificial Intelligence utilizing blood attributes",
    publication: "Scientific Reports",
    details: "vol. 15, no. 1, p. 505",
    year: "2025",
    type: "Journal"
  },
  {
    id: 31,
    authors: "Kilicarslan, Serhat, et al.",
    title: "Hybrid models based on genetic algorithm and deep learning algorithms for nutritional Anemia disease classification",
    publication: "Biomedical Signal Processing and Control",
    details: "vol. 63, p. 102231",
    year: "2021",
    type: "Journal"
  },
  {
    id: 32,
    authors: "Qadah, Talal, and Asmaa Munshi",
    title: "Synthesis and Prediction of Anemia from Multi-Data Attribute Co-Existence",
    publication: "IEEE Access",
    details: "",
    year: "2024",
    type: "Journal"
  },
  {
    id: 33,
    authors: "Farooq, Muhammad Sajid, et al.",
    title: "Developing a Transparent Anaemia Prediction Model Empowered with Explainable Artificial Intelligence",
    publication: "IEEE Access",
    details: "",
    year: "2024",
    type: "Journal"
  },
  {
    id: 34,
    authors: "Gómez, Jorge Gómez, et al.",
    title: "Anemia Classification System Using Machine Learning",
    publication: "Informatics",
    details: "Vol. 12. No. 1. MDPI",
    year: "2025",
    type: "Journal"
  },
  {
    id: 35,
    authors: "Yeruva, Sagar, et al.",
    title: "Identification of sickle cell anemia using deep neural networks",
    publication: "Emerging Science Journal",
    details: "vol. 5, no. 2, pp. 200-210",
    year: "2021",
    type: "Journal"
  },
  {
    id: 36,
    authors: "Jiwani, Nasmin, et al.",
    title: "Pattern recognition of acute lymphoblastic Leukemia (ALL) using computational deep learning",
    publication: "IEEE Access",
    details: "vol. 11, pp. 29541-29553",
    year: "2023",
    type: "Journal"
  },
  {
    id: 37,
    authors: "Darshan, BS Dhruva, et al.",
    title: "Differential diagnosis of iron deficiency anemia from aplastic anemia using machine learning and explainable Artificial Intelligence utilizing blood attributes",
    publication: "Scientific Reports",
    details: "vol. 15, no. 1, p. 505",
    year: "2025",
    type: "Journal"
  },
  {
    id: 38,
    authors: "Yıldız, Tuba Karagül, et al.",
    title: "Classifying anemia types using artificial learning methods",
    publication: "Engineering Science and Technology, an International Journal",
    details: "vol. 24, no. 1, pp. 50-70",
    year: "2021",
    type: "Journal"
  },
  {
    id: 39,
    authors: "Kilicarslan, Serhat, et al.",
    title: "Hybrid models based on genetic algorithm and deep learning algorithms for nutritional Anemia disease classification",
    publication: "Biomedical Signal Processing and Control",
    details: "vol. 63, p. 102231",
    year: "2021",
    type: "Journal"
  },
  {
    id: 40,
    authors: "Kang, Chaewon, et al.",
    title: "Optimizing anemia management using artificial intelligence for patients undergoing hemodialysis",
    publication: "Scientific Reports",
    details: "vol. 14, no. 1, p. 26739",
    year: "2024",
    type: "Journal"
  },
  {
    id: 41,
    authors: "Vohra, Rajan, et al.",
    title: "Multi-class classification algorithms for the diagnosis of anemia in an outpatient clinical setting",
    publication: "PLoS ONE",
    details: "vol. 17, no. 7, p. e0269685",
    year: "2022",
    type: "Journal"
  },
  {
    id: 42,
    authors: "Farooq, Muhammad Sajid, et al.",
    title: "Developing a Transparent Anaemia Prediction Model Empowered with Explainable Artificial Intelligence",
    publication: "IEEE Access",
    details: "",
    year: "2024",
    type: "Journal"
  },
  {
    id: 43,
    authors: "Jiwani, Nasmin, et al.",
    title: "Pattern recognition of acute lymphoblastic Leukemia (ALL) using computational deep learning",
    publication: "IEEE Access",
    details: "vol. 11, pp. 29541-29553",
    year: "2023",
    type: "Journal"
  },
  {
    id: 44,
    authors: "Kitaw, Bekan, et al.",
    title: "Leveraging machine learning models for anemia severity detection among pregnant women following ANC: Ethiopian context",
    publication: "BMC Public Health",
    details: "vol. 24, no. 1, p. 3500",
    year: "2024",
    type: "Journal"
  },
  {
    id: 45,
    authors: "Zemariam, Alemu Birara, et al.",
    title: "Employing supervised machine learning algorithms for classification and prediction of anemia among youth girls in Ethiopia",
    publication: "Scientific Reports",
    details: "vol. 14, no. 1, p. 9080",
    year: "2024",
    type: "Journal"
  },
  {
    id: 46,
    authors: "K. Güllü and M. Tabassum",
    title: "A Comprehensive Survey on Federated Learning in the Healthcare Area: Concept and Applications",
    publication: "Computer Modeling in Engineering & Sciences",
    details: "vol. 140, no. 3, pp. 2237-2275",
    year: "2024",
    type: "Journal"
  },
  {
    id: 47,
    authors: "S. Molaei, A. Thakur, and D. A. Clifton",
    title: "Federated Learning For Heterogeneous Electronic Health Records Utilising Augmented Temporal Graph Attention Networks",
    publication: "Proceedings of Machine Learning Research",
    details: "vol. 238",
    year: "2024",
    type: "Journal"
  },
  {
    id: 48,
    authors: "T. Teo et al.",
    title: "Federated machine learning in healthcare: A systematic review on clinical applications and technical architecture",
    publication: "Cell Reports Medicine",
    details: "vol. 5, no. 2, p. 101408",
    year: "2024",
    type: "Journal"
  },
  {
    id: 49,
    authors: "S. G. Paul et al.",
    title: "A Systematic Review of Graph Neural Network in Healthcare-Based Applications: Recent Advances, Trends, and Future Directions",
    publication: "IEEE Access",
    details: "vol. 12, pp. 15143-15166",
    year: "2024",
    type: "Journal"
  },
  {
    id: 50,
    authors: "Z. Sun et al.",
    title: "Disease Prediction via Graph Neural Networks",
    publication: "IEEE Journal of Biomedical and Health Informatics",
    details: "vol. 25, no. 3, pp. 818-826",
    year: "2021",
    type: "Journal"
  },
  {
    id: 51,
    authors: "L. Peng, N. Wang, and X. Li",
    title: "FedNI: Federated Graph Learning With Network Inpainting for Population-Based Disease Prediction",
    publication: "IEEE Transactions on Medical Imaging",
    details: "vol. 41, no. 6",
    year: "2021",
    type: "Journal"
  },
  {
    id: 52,
    authors: "Biswas, Susmoy",
    title: "Tri-CBC-ACM: A balanced hematological dataset for the stratification of Anemia, Compensated Microcytosis, and Healthy Controls",
    publication: "Mendeley Data",
    details: "Version 1",
    year: "2025",
    link: "https://doi.org/10.17632/vdzkhp37zs.1",
    type: "Data"
  }
];

export default function ReferencePage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredReferences = references.filter(ref => 
    ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ref.authors.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            References & Bibliography
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A curated list of 52 academic sources, technical reports, and datasets cited in the AnemiaGuard research project.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl leading-5 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all shadow-sm"
            placeholder="Search by author or title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* References List */}
        <div className="space-y-4">
          {filteredReferences.map((ref) => (
            <div 
              key={ref.id} 
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all group flex gap-4 items-start"
            >
              {/* Index Number */}
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400 text-sm font-mono font-bold">
                {ref.id}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                  {ref.authors} ({ref.year})
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 transition-colors">
                  {ref.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="italic font-serif">{ref.publication}</span>
                  {ref.details && (
                    <>
                      <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                      <span>{ref.details}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Link Action */}
              {ref.link && (
                <a 
                  href={ref.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          ))}

          {filteredReferences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400">No references found matching your search.</p>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <span>Total Citations: {references.length}</span>
          <span className="flex items-center gap-2">
            <Filter size={14} />
            IEEE Format
          </span>
        </div>

      </div>
    </div>
  );
}