'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';

export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-blue-600 dark:text-blue-300">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              My Experience
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Computer Engineer with a Master&apos;s Degree in Research and University Teaching (Universidad Central de Chile), 
              specialized in <strong className="text-gray-900 dark:text-white">Multi-Agent AI Systems & Full-Stack Development</strong>. 
              I combine expertise in autonomous AI architectures, semantic RAG, and intelligent automation with modern web development 
              to build self-improving, AI-powered applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              My expertise lies in building <strong className="text-gray-900 dark:text-white">autonomous AI systems</strong> 
              with multi-agent architectures that reason, critique, and optimize responses through intelligent feedback loops. 
              I focus on creating systems that don&apos;t just answer—they understand, reflect, and improve autonomously.
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                Main Technical Stack:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <strong className="text-gray-900 dark:text-white">AI & Multi-Agent Systems:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Multi-Agent Architecture</li>
                    <li>FAISS Vector Search</li>
                    <li>Semantic RAG</li>
                    <li>Autonomous AI</li>
                    <li>LLM Integration</li>
                    <li>Self-Improving Systems</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Full Stack Development:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Next.js 15, React</li>
                    <li>TypeScript, Vue.js 3</li>
                    <li>FastAPI, Node.js</li>
                    <li>WebSockets</li>
                    <li>PostgreSQL</li>
                    <li>Real-time Dashboards</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Cloud & DevOps:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Docker, Kubernetes</li>
                    <li>AWS Lambda</li>
                    <li>CI/CD Pipelines</li>
                    <li>Microservices</li>
                    <li>Production Monitoring</li>
                    <li>Auto-scaling Systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <strong className="text-gray-900 dark:text-white">Open to</strong> roles such as 
              <strong className="text-gray-900 dark:text-white"> Full Stack AI Engineer, AI Systems Architect, Multi-Agent AI Developer, or Autonomous Systems Engineer</strong>, 
              where I can leverage my expertise in building self-improving AI systems and cutting-edge web applications.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              My Technical Skills
            </h3>
            <div className="space-y-3 md:space-y-4">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between text-gray-900 dark:text-white mb-1 text-sm md:text-base">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                AI & Autonomous Systems:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Multi-Agent Architecture', 'FAISS Vector DB', 'Semantic RAG', 
                  'Autonomous AI', 'Self-Improving Systems', 'Real-time Agent Monitoring',
                  'Quality Scoring', 'Agentic Feedback Loops', 'WebSockets', 'Hugging Face'
                ].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 px-2 md:px-3 py-1 rounded text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}