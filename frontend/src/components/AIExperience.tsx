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
          AI & Automation <span className="text-blue-600 dark:text-blue-300">Expertise</span>
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
              Intelligent Systems & Automation
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-blue-500">
                <strong className="text-blue-600 dark:text-blue-400">Automated Project Manager:</strong>
                <p className="mt-2">Complete workflow automation platform with AI-powered task analysis, real-time notifications, and intelligent scheduling using n8n and OpenAI integration.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-green-500">
                <strong className="text-green-600 dark:text-green-400">NexusShop – AI E-commerce Platform:</strong>
                <p className="mt-2">Intelligent shopping experience with GPT-powered recommendations, automated customer service, and personalized product discovery using real-time AI analysis.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-purple-500">
                <strong className="text-purple-600 dark:text-purple-400">UrbanNet – Smart City Analytics:</strong>
                <p className="mt-2">Advanced deep learning pipeline processing urban data with 99.16% accuracy, featuring predictive modeling for traffic optimization and resource allocation.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-orange-500">
                <strong className="text-orange-600 dark:text-orange-400">Satellite Anomaly Detection:</strong>
                <p className="mt-2">ML-powered predictive maintenance system using XGBoost and real-time analytics, enabling proactive anomaly detection for critical infrastructure.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              AI & Automation Impact
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🤖 Intelligent Automation</h4>
                <p>Specialized in building systems that automate complex workflows, integrate AI decision-making, and eliminate manual processes through smart automation engines.</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">📊 Data-Driven Intelligence</h4>
                <p>Expertise in implementing predictive modeling, real-time analytics, and ML pipelines that transform raw data into actionable business intelligence.</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">⚡ Production AI Systems</h4>
                <p>Proven track record of deploying AI solutions in production environments with focus on scalability, reliability, and measurable business impact.</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🔄 Continuous Innovation</h4>
                <p>Committed to staying at the forefront of AI/ML advancements, MLOps practices, and automation technologies to deliver cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}