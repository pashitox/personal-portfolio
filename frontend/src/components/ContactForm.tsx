'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [buttonText, setButtonText] = useState('Enviar Mensaje');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setButtonText('Enviando...');

    const form = e.currentTarget;
    const formBody = new FormData(form);

    try {
      await fetch('https://formsubmit.co/ajax/pashitox@gmail.com', {
        method: 'POST',
        body: formBody,
        headers: { Accept: 'application/json' }
      });

      setSubmitted(true);
      setButtonText('Enviado ✅');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
        setButtonText('Enviar Mensaje');
        setSending(false);
      }, 3000);
    } catch (error) {
      alert('Ocurrió un error al enviar. Intenta de nuevo.');
      setSending(false);
      setButtonText('Enviar Mensaje');
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 dark:text-blue-300">Contacto</span>
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ¿Interesado en colaborar o tienes un proyecto en mente? Estoy abierto a oportunidades como{' '}
          <strong className="text-gray-900 dark:text-white">Senior/Lead Data Engineer, MLOps Engineer, o Data Architect</strong>.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/pashitox/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/pashitox"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-semibold transition-colors flex items-center justify-center text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-900 dark:text-white mb-2 text-sm md:text-base">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-900 dark:text-white mb-2 text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
              placeholder="tu.email@ejemplo.com"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-gray-900 dark:text-white mb-2 text-sm md:text-base">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm md:text-base"
              placeholder="Cuéntame sobre tu proyecto o oportunidad de colaboración..."
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={sending}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors transform hover:scale-105 text-sm md:text-base ${
              sending ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {buttonText}
          </button>

          {/* Mensaje de éxito */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-[-50px] left-0 w-full text-center text-green-600 font-semibold"
              >
                ¡Mensaje enviado con éxito! ✅
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
