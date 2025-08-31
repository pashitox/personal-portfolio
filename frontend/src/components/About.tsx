'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className="text-blue-600 dark:text-blue-300">Mí</span>
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Mi Experiencia</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Arquitecto e implemento plataformas de datos escalables y soluciones de IA de alto impacto 
              para dominios complejos como IoT industrial, ciudades inteligentes y aeroespacial.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Mi experiencia se centra en construir <strong className="text-gray-900 dark:text-white">sistemas end-to-end</strong> que integran 
              perfectamente la ingesta de datos en tiempo real, procesamiento distribuido, machine learning 
              y insights accionables.
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">Stack Técnico Principal:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-gray-700 dark:text-gray-300">
                <div>
                  <strong className="text-gray-900 dark:text-white">Data Engineering:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>Apache Airflow</li>
                    <li>Apache Spark</li>
                    <li>Apache Kafka</li>
                    <li>dbt</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Machine Learning:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm md:text-base">
                    <li>PyTorch</li>
                    <li>Scikit-learn</li>
                    <li>XGBoost</li>
                    <li>MLflow</li>
                    <li>SHAP</li>
                    <li>Computer Vision</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
              <strong className="text-gray-900 dark:text-white">Abierto a</strong> roles como <strong className="text-gray-900 dark:text-white">Senior/Lead Data Engineer, MLOps Engineer, o Data Architect</strong> 
              donde pueda aprovechar mis capacidades full-stack para resolver problemas desafiantes 
              y liderar iniciativas técnicas.
            </p>
          </motion.div>
          
          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Mis Habilidades Técnicas</h3>
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
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">MLOps & Cloud:</h4>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'MLflow', 'Docker', 'Kubernetes', 'Terraform', 'MinIO/S3', 'Grafana', 'Streamlit', 'Power BI', 'Plotly'].map((tech) => (
                  <span key={tech} className="bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 px-2 md:px-3 py-1 rounded text-xs md:text-sm">
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
