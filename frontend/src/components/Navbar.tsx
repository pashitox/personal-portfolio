'use client';

import { navLinks } from '@/lib/data';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-white font-bold text-xl cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            Pashitox
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => setCurrentSection(link.href.replace('#', ''))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === link.href.replace('#', '')
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}