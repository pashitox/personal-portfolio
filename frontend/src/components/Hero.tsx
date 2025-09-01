'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
 // ESLint debería marcarloCCC


interface HeroProps {
  setCurrentSection?: (section: string) => void;
}

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        {/* LEFT: Text */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-300">Juan</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Web Developer & Data Engineer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl mb-6 mx-auto md:mx-0 leading-relaxed max-w-4xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {`I am a Computer Engineer with a Master's in Research and University Teaching (Central University of Chile),
  specialized in data engineering and full stack web application development.  
  I design and build scalable systems, integrating robust backends, interactive frontends, and data solutions for real-world projects.`}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => setCurrentSection?.('projects')}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
            >
              View Projects
            </button>
            <button
              onClick={() => setCurrentSection?.('contact')}
              className="w-full sm:w-auto border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
            >
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/pashitox/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-blue-500 text-blue-300 hover:bg-blue-500/10 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-flex items-center justify-center text-sm sm:text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
          src="/images/perfil.jpg"
          alt="Pashitox Profile Photo"
          


          width={384}  // Ajusta según tu diseño
          height={384} // Ajusta según tu diseño
          className="rounded-full border-4 border-blue-500 dark:border-blue-300 object-cover shadow-lg"
         />       

        </motion.div>
      </div>
    </section>
  );
}
