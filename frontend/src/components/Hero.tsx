'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface HeroProps {
  setCurrentSection?: (section: string) => void;
}

// Componentes de movimiento con className forzado
const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionH2 = motion.h2 as any;
const MotionP = motion.p as any;

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        {/* LEFT: Text */}
        <div className="text-center md:text-left flex-1">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionH1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-300">Juan</span>
            </MotionH1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionH2 className="text-xl sm:text-2xl md:text-3xl mb-4">
              Full Stack Web Developer & Data Engineer
            </MotionH2>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionP className="text-base sm:text-lg md:text-xl mb-6 mx-auto md:mx-0 leading-relaxed max-w-4xl text-gray-700 dark:text-gray-300">
              {`I am a Computer Engineer with a Master's in Research and University Teaching (Central University of Chile),
  specialized in data engineering and full stack web application development.  
  I design and build scalable systems, integrating robust backends, interactive frontends, and data solutions for real-world projects.`}
            </MotionP>
          </MotionDiv>

          <MotionDiv
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
              LinkedIn
            </a>
          </MotionDiv>
        </div>

        {/* RIGHT: Image */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/images/perfil.jpg"
            alt="Pashitox Profile Photo"
            width={384}
            height={384}
            className="rounded-full border-4 border-blue-500 dark:border-blue-300 object-cover shadow-lg"
          />
        </MotionDiv>
      </div>
    </section>
  );
}