'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Datos de ejemplo (mueve esto a un archivo separado si es necesario)
const dashboardStats = {
  projectsCompleted: 12,
  happyClients: 8,
  codeCommits: 254
};

const visitorStats = {
  totalVisitors: 1244,
  uniqueVisitors: 892,
  returningVisitors: 352,
  bounceRate: '24.3%'
};

const githubStats = {
  stars: 47,
  forks: 12,
  contributors: 3
};

const monthlyVisitors = [
  { month: 'Jan', visitors: 120 },
  { month: 'Feb', visitors: 180 },
  { month: 'Mar', visitors: 240 },
  { month: 'Apr', visitors: 320 },
  { month: 'May', visitors: 410 },
  { month: 'Jun', visitors: 380 },
  { month: 'Jul', visitors: 450 },
  { month: 'Aug', visitors: 520 },
  { month: 'Sep', visitors: 610 },
  { month: 'Oct', visitors: 730 },
  { month: 'Nov', visitors: 680 },
  { month: 'Dec', visitors: 790 }
];

const colorMap: { [key: string]: string } = {
  blue: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  green: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300', 
  purple: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300',
  orange: 'bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-300',
};

export default function Dashboard() {
  const [animatedStats, setAnimatedStats] = useState({
    totalVisitors: 0,
    projectsCompleted: 0,
    stars: 0,
    happyClients: 0,
  });

  // Animate numbers on load - CORREGIDO
  useEffect(() => {
    const duration = 1000;
    const fps = 30;
    const steps = duration / (1000 / fps);

    const animateValue = (start: number, end: number, step: number): number =>
      Math.round(start + (end - start) * step);

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setAnimatedStats({
        totalVisitors: animateValue(0, visitorStats.totalVisitors, currentStep / steps),
        projectsCompleted: animateValue(0, dashboardStats.projectsCompleted, currentStep / steps),
        stars: animateValue(0, githubStats.stars, currentStep / steps),
        happyClients: animateValue(0, dashboardStats.happyClients, currentStep / steps),
      });
      if (currentStep >= steps) clearInterval(interval);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, []);

  const mainStats = [
    { title: 'Total Visitors', value: animatedStats.totalVisitors, color: 'blue' as const },
    { title: 'Projects Completed', value: animatedStats.projectsCompleted, color: 'green' as const },
    { title: 'GitHub Stars', value: animatedStats.stars, color: 'purple' as const },
    { title: 'Happy Clients', value: animatedStats.happyClients, color: 'orange' as const },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-300">Dashboard</span> & Metrics
        </motion.h2>

        {/* Main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${colorMap[stat.color]}`}>
                  <span className="w-6 h-6 block rounded-full bg-current" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value.toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visitor stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Visitor Statistics</h3>
            <div className="space-y-3">
              {Object.entries(visitorStats).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* GitHub metrics */}
          <motion.div
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">GitHub Metrics</h3>
            <div className="space-y-3">
              {Object.entries({ ...githubStats, codeCommits: dashboardStats.codeCommits }).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly visitors */}
        <motion.div
          className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Monthly Visitors</h3>
          <div className="grid grid-cols-12 gap-2 items-end h-40">
            {monthlyVisitors.map((month) => (
              <motion.div
                key={month.month}
                className="flex flex-col items-center"
                initial={{ height: 0 }}
                animate={{ height: `${(month.visitors / 800) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div 
                  className="w-full bg-blue-500 dark:bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500" 
                  style={{ height: `${(month.visitors / 800) * 100}%` }}
                  title={`${month.visitors} visitors`}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{month.month}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}