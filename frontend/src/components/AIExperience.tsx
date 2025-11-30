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
          AI & Autonomous Systems <span className="text-blue-600 dark:text-blue-300">Expertise</span>
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
              Multi-Agent AI Systems
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-purple-500">
                <strong className="text-purple-600 dark:text-purple-400">GENESIS AI - Autonomous Chat Engine:</strong>
                <p className="mt-2">World's first self-improving chatbot with 4-agent architecture (RAG, Reasoner, Critic, Improver). Features autonomous quality scoring (0.3-0.95), real-time agent monitoring, and continuous learning through agentic feedback loops.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-blue-500">
                <strong className="text-blue-600 dark:text-blue-400">Automated Project Manager:</strong>
                <p className="mt-2">Complete workflow automation platform with AI-powered task analysis, real-time notifications, and intelligent scheduling using n8n and OpenAI integration.</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border-l-4 border-green-500">
                <strong className="text-green-600 dark:text-green-400">NexusShop – AI E-commerce Platform:</strong>
                <p className="mt-2">Intelligent shopping experience with GPT-powered recommendations, automated customer service, and personalized product discovery using real-time AI analysis.</p>
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
              AI & Autonomous Systems Impact
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">🧠 Multi-Agent Architecture</h4>
                <p>Specialized in building autonomous AI systems with specialized agents that reason, critique, and improve responses through intelligent feedback loops and semantic RAG.</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔍 Semantic RAG & Vector Search</h4>
                <p>Expertise in FAISS vector databases, semantic search achieving 0.00s response times, and context-aware retrieval systems that understand user intent.</p>
              </div>
              
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">⚡ Self-Improving AI</h4>
                <p>Built systems that autonomously analyze quality (0.3-0.95 scoring), identify improvement areas, and optimize responses without human intervention.</p>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">🚀 Production AI Deployment</h4>
                <p>Proven track record of deploying autonomous AI systems in production with 98% pipeline success, real-time monitoring, and enterprise-grade scalability.</p>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">Key AI Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <div className="font-bold text-blue-600 dark:text-blue-300">98%</div>
                  <div className="text-gray-600 dark:text-gray-400">Pipeline Success</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded">
                  <div className="font-bold text-green-600 dark:text-green-300">0.00s</div>
                  <div className="text-gray-600 dark:text-gray-400">Search Time</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <div className="font-bold text-purple-600 dark:text-purple-300">4</div>
                  <div className="text-gray-600 dark:text-gray-400">Specialized Agents</div>
                </div>
                <div className="text-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <div className="font-bold text-orange-600 dark:text-orange-300">0.95</div>
                  <div className="text-gray-600 dark:text-gray-400">Avg Quality Score</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}