'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { dashboardStats, visitorStats, githubStats, monthlyVisitors } from '@/lib/data';

export default function Dashboard() {
  const [animatedStats, setAnimatedStats] = useState({
    totalVisitors: 0,
    projectsCompleted: 0,
    stars: 0,
    happyClients: 0,
  });

  // Animate numbers on load
  useEffect(() => {
    const duration = 1200; // 1.2s
    const fps = 30;
    const steps = duration / (1000 / fps);

    const animateValue = (start: number, end: number, step: number) =>
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
    { title: "Total Visitors", value: animatedStats.totalVisitors, color: "blue", icon: "👥" },
    { title: "Projects Completed", value: animatedStats.projectsCompleted, color: "green", icon: "📁" },
    { title: "GitHub Stars", value: animatedStats.stars, color: "purple", icon: "⭐" },
    { title: "Happy Clients", value: animatedStats.happyClients, color: "orange", icon: "😊" },
  ];

  const formatKey = (key: string) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-400">Dashboard</span> & Metrics
        </motion.h2>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats.map((stat, i) => (
            <motion.div
              key={stat.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={`p-4 bg-${stat.color}-100 dark:bg-${stat.color}-600/20 rounded-lg text-2xl`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visitor & GitHub Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Visitor Statistics</h3>
            <div className="space-y-3">
              {Object.entries(visitorStats).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">{formatKey(key)}</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">GitHub Metrics</h3>
            <div className="space-y-3">
              {Object.entries({ ...githubStats, codeCommits: dashboardStats.codeCommits }).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">{formatKey(key)}</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly Visitors Chart */}
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Monthly Visitors</h3>
          <div className="grid grid-cols-12 gap-2 items-end h-44">
            {monthlyVisitors.map((month) => (
              <motion.div
                key={month.month}
                className="flex flex-col items-center"
                initial={{ height: 0 }}
                animate={{ height: `${(month.visitors / 800) * 100}%` }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full bg-blue-500 dark:bg-blue-600 rounded-t" title={`${month.visitors} visitors`} />
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">{month.month}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
