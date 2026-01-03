"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  // The 9 Sections Structure
  const links = {
    main: [
      { name: 'Home', href: '/' },       // 1. Home
      { name: 'Team', href: '/team' },   // 7. About Team
      { name: 'Contact', href: '/contact' }, // 8. Contact
    ],
    research: [
      { name: 'Project Timeline', href: '/timeline' }, // 2. Project Time
      { name: 'Data Reports', href: '/data-reports' }, // 3. Data Reports
      { name: 'Methodological System', href: '/methodology' }, // 4. Methodology
      { name: 'Publication Status', href: '/publication' }, // 6. Publication
      { name: 'References', href: '/references' }, // 9. References
    ],
    system: { name: 'AneAI', href: '/simulation' } // 5. System renamed to AneAI
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-2" 
        : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              AI
            </div>
            <span className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Anemia<span className="text-indigo-600 dark:text-indigo-400">Guard</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main Links */}
            {links.main.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Research Dropdown */}
            <div className="relative group px-3 py-2">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Research <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden p-1 flex flex-col">
                  {links.research.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href} 
                      className="text-left px-4 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
            <ThemeToggle />
            
            {/* AneAI Button */}
            <Link 
              href={links.system.href}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-slate-200/50 dark:shadow-none hover:opacity-90 transition-all active:scale-95 flex items-center gap-2"
            >
              <span>{links.system.name}</span>
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {/* 1. Home */}
            <Link href="/" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Home</Link>
            
            {/* 2. Timeline */}
            <Link href="/timeline" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Project Timeline</Link>

            {/* 3. Data Reports */}
            <Link href="/data-reports" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Data Reports</Link>

            {/* 4. Methodology */}
            <Link href="/methodology" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Methodological System</Link>

            {/* 6. Publication */}
            <Link href="/publication" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Publication Status</Link>

            {/* 7. Team */}
            <Link href="/team" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">About Team</Link>

            {/* 8. Contact */}
            <Link href="/contact" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">Contact</Link>
            
            {/* 9. References */}
            <Link href="/references" className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">References</Link>

            <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
            
            {/* 5. AneAI (Highlighted) */}
            <Link 
              href="/simulation"
              className="block w-full text-center bg-indigo-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Launch AneAI
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}