'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hola, soy <span className="text-blue-300">Pashitox</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Data Engineer & AI Solutions Architect | From Data to Deployable Intelligence
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Arquitecto e implemento plataformas de datos escalables y soluciones de IA de alto impacto 
          para dominios complejos como IoT industrial, ciudades inteligentes y aeroespacial.
        </motion.p>
        
        <motion.div 
          className="space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            onClick={() => setCurrentSection('projects')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
          >
            Ver Proyectos
          </button>
          <button 
            onClick={() => setCurrentSection('contact')}
            className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
          >
            Contactar
          </button>
          <a
            href="https://www.linkedin.com/in/pashitox/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-500 text-blue-300 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105 inline-block"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}