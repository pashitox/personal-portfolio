'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Dashboard from '@/components/Dashboard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Hero setCurrentSection={setCurrentSection} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'dashboard':
        return <Dashboard />;
      case 'contact':
        return <ContactForm />;
      default:
        return <Hero setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="min-h-screen">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}