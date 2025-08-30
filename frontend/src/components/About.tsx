'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';

export default function About() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className="text-blue-300">Mí</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Mi Experiencia</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Arquitecto e implemento plataformas de datos escalables y soluciones de IA de alto impacto 
              para dominios complejos como IoT industrial, ciudades inteligentes y aeroespacial.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Mi experiencia se centra en construir <strong>sistemas end-to-end</strong> que integran 
              perfectamente la ingesta de datos en tiempo real, procesamiento distribuido, machine learning 
              y insights accionables.
            </p>

            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Stack Técnico Principal:</h4>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <strong>Data Engineering:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Apache Airflow</li>
                    <li>Apache Spark</li>
                    <li>Apache Kafka</li>
                    <li>dbt</li>
                    <li>PostgreSQL</li>
                    <li>Docker</li>
                  </ul>
                </div>
                <div>
                  <strong>Machine Learning:</strong>
                  <ul className="list-disc list-inside mt-2 ml-4">
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

            <p className="text-gray-300 text-lg">
              <strong>Abierto a</strong> roles como <strong>Senior/Lead Data Engineer, MLOps Engineer, o Data Architect</strong> 
              donde pueda aprovechar mis capacidades full-stack para resolver problemas desafiantes 
              y liderar iniciativas técnicas.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Mis Habilidades Técnicas</h3>
            <div className="space-y-4">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between text-white mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-4">MLOps & Cloud:</h4>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'MLflow', 'Docker', 'Kubernetes', 'Terraform', 'MinIO/S3', 'Grafana', 'Streamlit', 'Power BI', 'Plotly'].map((tech) => (
                  <span key={tech} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-sm">
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