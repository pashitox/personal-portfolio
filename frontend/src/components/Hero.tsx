'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  setCurrentSection?: (section: string) => void;
}

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="text-center max-w-6xl mx-auto text-gray-900 dark:text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hola, soy <span className="text-primary-600 dark:text-blue-300">Pashitox</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Data Engineer & AI Solutions Architect | From Data to Deployable Intelligence
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 mx-auto leading-relaxed max-w-4xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Arquitecto e implemento plataformas de datos escalables y soluciones de IA de alto impacto para dominios complejos como IoT industrial, ciudades inteligentes y aeroespacial.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => setCurrentSection?.('projects')}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => setCurrentSection?.('contact')}
            className="w-full sm:w-auto border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Contactar
          </button>
          <a
            href="https://www.linkedin.com/in/pashitox/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-blue-500 text-blue-300 hover:bg-blue-500/10 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}