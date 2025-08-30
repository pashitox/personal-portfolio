export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hola, soy <span className="text-blue-300">Tu Nombre</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Desarrollador Full Stack especializado en React, Node.js y Machine Learning
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Ver Proyectos
          </button>
          <button className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}