export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/20 py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Mi Portfolio. Desarrollado con Next.js y Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tu.email@ejemplo.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}