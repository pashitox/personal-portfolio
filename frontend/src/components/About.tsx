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
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Computer Engineer with a Master's Degree in Research and University Teaching, 
              specializing in <strong className="text-gray-900 dark:text-white">Data Engineering & Full-Stack Development</strong>. 
              I bridge the gap between complex data systems and modern web applications, 
              creating intelligent solutions that deliver real business value.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              My expertise lies in building <strong className="text-gray-900 dark:text-white">end-to-end intelligent systems</strong> 
              that integrate real-time data processing, machine learning workflows, 
              and professional web applications with seamless user experiences.
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                Core Technical Expertise:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <strong className="text-gray-900 dark:text-white">Data & AI Engineering:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Apache Spark & Airflow</li>
                    <li>Real-time Data Pipelines</li>
                    <li>Machine Learning Systems</li>
                    <li>PostgreSQL & Data Modeling</li>
                    <li>Workflow Automation</li>
                    <li>Predictive Analytics</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Full-Stack Development:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Next.js & React Ecosystem</li>
                    <li>Vue.js & Modern Frontend</li>
                    <li>TypeScript & Node.js</li>
                    <li>REST & GraphQL APIs</li>
                    <li>Real-time Applications</li>
                    <li>Performance Optimization</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">MLOps & Automation:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>n8n Workflow Automation</li>
                    <li>Docker & Containerization</li>
                    <li>ML Model Deployment</li>
                    <li>CI/CD Pipelines</li>
                    <li>Cloud Infrastructure</li>
                    <li>Monitoring & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <strong className="text-gray-900 dark:text-white">Seeking opportunities</strong> as a 
              <strong className="text-gray-900 dark:text-white"> Full-Stack Developer, AI Engineer, or Data Architect</strong>, 
              where I can leverage my multidisciplinary expertise to build intelligent, 
              scalable systems that solve complex business challenges.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Technical Proficiency
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
                Production Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'FastAPI', 'MLflow', 'Docker', 'Kubernetes', 
                  'Terraform', 'AWS Cloud', 'Grafana', 
                  'Streamlit', 'n8n Automation', 'OpenAI API'
                ].map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 px-2 md:px-3 py-1 rounded text-xs md:text-sm"
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