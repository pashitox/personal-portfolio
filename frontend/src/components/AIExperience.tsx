'use client';

import { motion } from 'framer-motion';

export default function AIExperience() {
  return (
    <section 
      id="ai-experience" 
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI <span className="text-blue-600 dark:text-blue-300">Experience</span>
        </motion.h2>

        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Column - Projects */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              AI-Powered Projects
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <strong className="text-blue-600 dark:text-blue-400">NexusShop – AI E-commerce Platform:</strong>
                <p className="mt-2">Full-stack platform with GPT-powered chat recommendations, multi-auth, Stripe payments, and Docker deployment.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <strong className="text-blue-600 dark:text-blue-400">UrbanNet – Smart City Analytics:</strong>
                <p className="mt-2">End-to-end deep learning pipeline for traffic and energy data with 99.16% accuracy.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <strong className="text-blue-600 dark:text-blue-400">Satellite Anomaly Prediction:</strong>
                <p className="mt-2">Predictive maintenance system using Python & XGBoost with real-time dashboards.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Impact & Skills
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>Self-taught AI practitioner with expertise in integrating AI into web applications and full-stack systems.</p>
              <p>Specialized in predictive modeling, ML pipelines, real-time analytics, and cloud deployment.</p>
              <p>Continuous learning in AI/ML, MLOps, and scalable system architecture.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}