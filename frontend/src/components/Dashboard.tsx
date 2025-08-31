'use client';

import { motion } from 'framer-motion';
import { dashboardStats, visitorStats, githubStats, projectMetrics, monthlyVisitors } from '@/lib/data';

export default function Dashboard() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-300">Dashboard</span> & Métricas
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Visitantes Totales</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{visitorStats.totalVisitors.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{dashboardStats.projectsCompleted}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-500/20 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Stars en GitHub</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{githubStats.stars}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-500/20 rounded-lg">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Clientes Satisfechos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{dashboardStats.happyClients}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Estadísticas de Visitantes</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Visitantes Únicos:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{visitorStats.uniqueVisitors.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Visitantes que Regresan:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{visitorStats.returningVisitors.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Proyectos Vistos:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{visitorStats.projectsViewed.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Solicitudes de Contacto:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{visitorStats.contactRequests}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Métricas de GitHub</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Repositorios:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{githubStats.repositories}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Forks:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{githubStats.forks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Contribuciones:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{githubStats.contributions.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Commits:</span>
                <span className="text-gray-900 dark:text-white font-semibold">{dashboardStats.codeCommits.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Monthly Visitors Chart */}
        <motion.div 
          className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Visitantes Mensuales</h3>
          <div className="grid grid-cols-12 gap-2 items-end h-40">
            {monthlyVisitors.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 dark:bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-400 dark:hover:bg-blue-500"
                  style={{ height: `${(month.visitors / 800) * 100}%` }}
                  title={`${month.visitors} visitantes`}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{month.month}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}