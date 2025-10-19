'use client';

import { motion } from 'framer-motion';

export default function AIExperience() {
  return (
    <section 
      id="ai-experience" 
      className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900"
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
          className="grid lg:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Projects
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <li>
                <strong>NexusShop – AI E-commerce Platform:</strong> Full-stack app with GPT-powered chat recommendations, Stripe payments, multi-auth, and Dockerized deployment.
              </li>
              <li>
                <strong>UrbanNet – Smart City Analytics:</strong> Deep learning pipeline for traffic & energy data, 2.3TB/month processing, 99.16% accuracy, deployed with FastAPI & MLflow.
              </li>
              <li>
                <strong>Satellite Anomaly Prediction:</strong> Python + XGBoost predictive maintenance system, real-time dashboards with Power BI.
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Impact & Skills
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              I integrate Artificial Intelligence into web applications, turning static apps into intelligent, adaptive, and data-driven platforms. My work covers predictive modeling, ML pipelines, real-time analytics, and cloud deployment.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              I am continuously expanding my expertise in AI/ML, MLOps, and full-stack development to build solutions that are scalable, robust, and production-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
