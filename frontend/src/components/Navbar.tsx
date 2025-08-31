'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export default function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- 1. Estados ---
  const [time, setTime] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [weather, setWeather] = useState<string>('');

  // --- 2. Reloj ---
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // --- 3. Ubicación + Clima con ipapi.co ---
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        console.log('Ubicación detectada:', data);
        if (data.city && data.country_name && data.latitude && data.longitude) {
          setLocation(`${data.city}, ${data.country_name}`);
          fetchWeather(data.latitude, data.longitude);
        } else {
          setLocation('Ubicación no detectada');
        }
      })
      .catch((err) => {
        console.error('Error obteniendo ubicación:', err);
        setLocation('Desconocido');
      });
  }, []);

  // --- 4. Clima usando Open-Meteo ---
  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      );
      const data = await res.json();
      console.log('Clima detectado:', data);
      if (data.current_weather) {
        const temp = Math.round(data.current_weather.temperature);
        const wind = Math.round(data.current_weather.windspeed);
        setWeather(`Temp: ${temp}°C, Viento: ${wind} km/h`);
      } else {
        setWeather('Clima no disponible');
      }
    } catch (err) {
      console.error('Error obteniendo clima:', err);
      setWeather('Clima no disponible');
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="text-gray-900 dark:text-white font-bold text-xl cursor-pointer"
            onClick={() => setCurrentSection('home')}
          >
            Pashitox
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => setCurrentSection(link.href.replace('#', ''))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === link.href.replace('#', '')
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sección derecha */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex flex-col items-end text-xs text-gray-700 dark:text-gray-300">
              {time && <span>{time}</span>}
              {location && <span>{location}</span>}
              {weather && <span>{weather}</span>}
            </div>

            <ThemeToggle />

            {/* Menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Navegación móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setCurrentSection(link.href.replace('#', ''));
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentSection === link.href.replace('#', '')
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 text-xs text-gray-700 dark:text-gray-300">
                {time && <div>{time}</div>}
                {location && <div>{location}</div>}
                {weather && <div>{weather}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}