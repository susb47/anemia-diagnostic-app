"use client";

import React from 'react';
import { 
  Globe, 
  Mail, 
  Github, 
  MapPin, 
  Stethoscope, 
  GraduationCap, 
  UserCog, 
  Award,
  Users
} from 'lucide-react';

// --- Custom Icons ---
const GoogleScholarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

const ResearchGateIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.586 0c-2.43 0-4.4 1.97-4.4 4.4 0 2.43 1.97 4.4 4.4 4.4 2.43 0 4.4-1.97 4.4-4.4C23.986 1.97 22.016 0 19.586 0zM4.14 0C1.854 0 0 1.854 0 4.14s1.854 4.14 4.14 4.14 4.14-1.854 4.14-4.14S6.426 0 4.14 0zm8.28 9.36H4.14a4.14 4.14 0 0 0-4.14 4.14v6.36c0 2.286 1.854 4.14 4.14 4.14h7.416a4.14 4.14 0 0 0 4.14-4.14v-6.36c0-2.286-1.854-4.14-4.14-4.14zm8.28 0h-1.68v10.5h1.68V9.36z" />
  </svg>
);

// --- Data Configuration ---
const supervisors = [
  {
    role: "Supervisor",
    name: "Dr. Md Zahid Hasan",
    affiliation: "Associate Professor, Dept. of CSE, DIU",
    email: "zahid.cse@diu.edu.bd",
    portfolio: "https://sites.google.com/diu.edu.bd/zahidhasan",
    scholar: "https://scholar.google.com/citations?user=Uq3O034AAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Md-Hasan-90",
    image: "/images/team/drzahid.jpg",
  },
  {
    role: "Co-Supervisor",
    name: "Prof. Dr. Sheak Rashed Haider Noori",
    affiliation: "Professor & Head, Dept. of CSE, DIU",
    email: "drnoori@daffodilvarsity.edu.bd",
    portfolio: "https://faculty.daffodilvarsity.edu.bd/profile/cse/rashed-haider-noori.html",
    scholar: "https://scholar.google.com/citations?user=rkAnD1wAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Sheak-Noori",
    image: "/images/team/drnoori.jpg",
  }
];

const piData = {
  role: "Principal Investigator",
  name: "Dr. Debashish Biswas",
  designation: "Resident Physician",
  degrees: ["MBBS (Dhaka)", "BCS (Health)", "FCPS (Medicine)", "MACP (America)"],
  reg: "BMDC Reg No- A-62099",
  hospital: "Jhenaidah Prince Hospital, Jhenaidah",
  image: "/images/team/debashish.webp"
};

const mentorData = {
  role: "Mentor",
  name: "Md Hassan Imam Bijoy",
  affiliation: "Lecturer, Dept. of CIS, DIU",
  email: "bijoy.cse0411.c@diu.edu.bd",
  portfolio: "https://sites.google.com/view/hibijoy",
  scholar: "https://scholar.google.com/citations?user=JvfGLIMAAAAJ&hl=en",
  researchgate: "https://www.researchgate.net/profile/Md-Hasan-Imam-Bijoy",
  image: "/images/team/hibijoy.jpg",
};

const researchTeam = [
  {
    role: "Team Leader",
    name: "Susmoy Biswas",
    affiliation: "Dept. of CSE, Daffodil International University",
    email: "saukhin15-5647@diu.edu.bd",
    portfolio: "https://port-sbs.vercel.app/",
    scholar: "https://scholar.google.com/citations?user=2pl7-BYAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Susmoy-Biswas?ev=hdr_xprf",
    github: "https://github.com/susb47",
    image: "/images/team/susmoy.jpg", 
    isMainAuthor: true
  },
  {
    role: "Member",
    name: "Mst Taposi Rabeya",
    affiliation: "Dept. of CSE, Daffodil International University",
    email: "rabeya15-6056@diu.edu.bd",
    portfolio: "https://www.linkedin.com/in/mst-taposi-rabeya-9b060523b/",
    scholar: "https://scholar.google.com/citations?user=P8YMxvwAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Mst-Rabeya-2",
    image: "/images/team/taposi.jpg",
    isMainAuthor: false
  }
];

// --- Components ---

const ProfileCard = ({ member, colorClass, icon }) => (
  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group h-full flex flex-col">
    <div className="p-6 flex flex-col items-center text-center flex-grow">
      
      {/* Image */}
      <div className="relative mb-4">
        <div className={`w-32 h-32 rounded-full overflow-hidden ring-4 ring-slate-50 dark:ring-slate-800 ${colorClass} transition-all duration-300`}>
          <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-slate-100 dark:border-slate-700 flex items-center gap-1 whitespace-nowrap">
          {icon} {member.role}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{member.name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 px-2">
          {member.affiliation}
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 w-full">
        {member.email && (
          <a href={`mailto:${member.email}`} className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"><Mail className="w-5 h-5" /></a>
        )}
        {member.portfolio && (
          <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"><Globe className="w-5 h-5" /></a>
        )}
        {member.scholar && (
          <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"><GoogleScholarIcon /></a>
        )}
        {member.researchgate && (
          <a href={member.researchgate} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"><ResearchGateIcon /></a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"><Github className="w-5 h-5" /></a>
        )}
      </div>
    </div>
  </div>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 text-indigo-600 dark:text-indigo-400">
            <Users size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Research Team
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The interdisciplinary minds behind the AnemiaGuard Federated Learning architecture.
          </p>
        </div>

        {/* 1. Supervisors */}
        <div className="mb-16">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8 flex items-center justify-center gap-2">
            <Award size={16} /> Supervision & Guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {supervisors.map((member, index) => (
              <ProfileCard 
                key={index} 
                member={member} 
                colorClass="group-hover:ring-purple-100 dark:group-hover:ring-purple-900"
                icon={<Award className="w-3 h-3" />}
              />
            ))}
          </div>
        </div>

        {/* 2. Advisors (PI & Mentor) */}
        <div className="mb-16">
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8 flex items-center justify-center gap-2">
            <Stethoscope size={16} /> Clinical & Technical Advisory
          </h2>
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            
            {/* Principal Investigator Card (Corrected: Added 'relative') */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
                
                {/* This decorative strip was flying out because 'relative' was missing above */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-rose-500 hidden md:block"></div>
                
                {/* Image Area */}
                <div className="md:w-1/3 bg-rose-50 dark:bg-rose-950/20 flex flex-col items-center justify-center p-8 border-r border-rose-100 dark:border-slate-800">
                    <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-lg mb-4">
                        <img src={piData.image} alt={piData.name} className="w-full h-full object-cover"/>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300">
                        <Stethoscope className="w-3 h-3 mr-1" />{piData.role}
                    </span>
                </div>
                
                {/* Info Area */}
                <div className="md:w-2/3 p-8 flex flex-col justify-center text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{piData.name}</h3>
                    <p className="text-sm text-rose-600 dark:text-rose-400 font-semibold mb-6">{piData.designation}</p>

                    <div className="space-y-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {piData.degrees.map((degree, idx) => (
                                <span key={idx} className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-md text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-sm">{degree}</span>
                            ))}
                        </div>
                        
                        <div className="flex items-center justify-center md:justify-start text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-2 rounded-lg w-full md:w-fit">
                            <span className="font-mono text-xs font-bold tracking-wide">{piData.reg}</span>
                        </div>

                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center justify-center md:justify-start text-slate-700 dark:text-slate-300">
                                <MapPin className="w-4 h-4 mr-2 text-rose-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{piData.hospital}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentor Card */}
            <div className="max-w-md mx-auto w-full">
               <ProfileCard 
                  member={mentorData} 
                  colorClass="group-hover:ring-emerald-100 dark:group-hover:ring-emerald-900"
                  icon={<UserCog className="w-3 h-3" />}
                />
            </div>

          </div>
        </div>

        {/* 3. Research Team */}
        <div>
          <h2 className="text-center text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8 flex items-center justify-center gap-2">
            <GraduationCap size={16} /> Core Research Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {researchTeam.map((member, index) => (
              <ProfileCard 
                key={index} 
                member={member} 
                colorClass="group-hover:ring-blue-100 dark:group-hover:ring-blue-900"
                icon={<GraduationCap className="w-3 h-3" />}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}