import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg">
              AI
            </div>
            <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight">
              Anemia<span className="text-indigo-600">Guard</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Simulation
            </Link>
            <Link 
              href="/about" 
              className="text-slate-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Model Status Indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-400 font-mono">Model: Cosmic-v1</span>
          </div>

        </div>
      </div>
    </nav>
  );
}