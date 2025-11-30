'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface HeroProps {
  setCurrentSection?: (section: string) => void;
}

// Variantes para animaciones más fluidas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const imageVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1.2
    }
  },
  hover: {
    scale: 1.05,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function Hero({ setCurrentSection }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Efectos de fondo animados mejorados */}
      <motion.div
        className="absolute inset-0 opacity-15"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse-slower"></div>
      </motion.div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* LEFT: Text */}
        <div className="text-center md:text-left flex-1">
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-300">Juan</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI Engineer & Full Stack Developer
            </motion.h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 mx-auto md:mx-0 leading-relaxed max-w-4xl text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg"
              whileHover={{ scale: 1.01, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.1)" }}
            >
              <span className="font-semibold text-gray-900 dark:text-white">Computer Engineer & Master&apos;s in Research</span> specialized in 
              <span className="text-blue-600 dark:text-blue-300 font-semibold"> Multi-Agent AI Systems </span> 
              and Full Stack Development. I build autonomous AI systems that think, reflect, and improve themselves through intelligent agent architectures.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setCurrentSection?.('projects')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base relative overflow-hidden group shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 View Projects 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => setCurrentSection?.('contact')}
              className="w-full sm:w-auto border-2 border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              💬 Get In Touch
            </motion.button>
            
            <motion.a
              href="https://www.linkedin.com/in/pashitox/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>💼 LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            variants={itemVariants}
          >
            {['Multi-Agent AI', 'Next.js 15', 'FastAPI', 'TypeScript', 'FAISS', 'Kubernetes'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow-sm"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative"
        >
          <div className="relative">
            {/* Marco con gradiente */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 transform scale-105">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
            </div>
            
            {/* Foto ovalada */}
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
              <Image
                src="/images/perfil.jpg"
                alt="Pashitox Profile Photo"
                width={400}
                height={400}
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Efecto de brillo animado */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent z-20"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          </div>
          
          {/* Badge flotante - AI Architect */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white dark:border-gray-800 z-30"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            🧠 AI Architect
          </motion.div>

          {/* Segundo badge - Full Stack */}
          <motion.div
            className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white dark:border-gray-800 z-30"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            💻 Full Stack
          </motion.div>

          {/* Tercer badge - Autonomous Systems */}
          <motion.div
            className="absolute top-1/2 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl border-2 border-white dark:border-gray-800 z-30"
            initial={{ scale: 0, x: 20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, x: -5 }}
          >
            🤖 Autonomous AI
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator mejorado */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}