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
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden"
    >
      {/* Efectos de fondo animados */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* LEFT: Text */}
        <div className="text-center md:text-left flex-1">
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-300">Juan</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-700 dark:text-gray-300 font-semibold"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Full Stack Developer & AI/Automation Engineer
            </motion.h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-8 mx-auto md:mx-0 leading-relaxed max-w-4xl text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.01 }}
            >
              {`Computer Engineer & Master's in Research specialized in Data Engineering and Full Stack Development.  
I build intelligent systems that integrate modern web applications, AI-powered automation, and scalable data solutions.  
Expert in Vue.js, React, n8n workflows, and end-to-end project development.`}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => setCurrentSection?.('projects')}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-sm sm:text-base relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => setCurrentSection?.('contact')}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact
            </motion.button>
            
            <motion.a
              href="https://www.linkedin.com/in/pashitox/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base backdrop-blur-sm inline-flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span>LinkedIn</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="relative"
        >
          <div className="relative">
            {/* Foto ovalada */}
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-300 shadow-2xl">
              <Image
                src="/images/perfil.jpg"
                alt="Pashitox Profile Photo"
                width={400}
                height={400}
                className="w-full h-full object-cover scale-110"
              />
            </div>
            
            {/* Efecto de brillo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          {/* Badge flotante - Data Driven */}
          <motion.div
            className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-white dark:border-gray-800"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            📊 Data Driven
          </motion.div>

          {/* Segundo badge - Results Oriented */}
          <motion.div
            className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-white dark:border-gray-800"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            🎯 Results Oriented
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <motion.div
            className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}