import { skillsData } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Sobre <span className="text-blue-300">Mí</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Soy un desarrollador full stack apasionado por crear soluciones innovadoras 
              que combinan tecnología frontend moderna con inteligencia artificial y machine learning.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Con más de 3 años de experiencia en el desarrollo web, me especializo en 
              React, Next.js, Node.js y Python, creando aplicaciones escalables y eficientes.
            </p>
            <p className="text-gray-300 text-lg">
              Mi objetivo es seguir aprendiendo y aplicando las últimas tecnologías 
              para resolver problemas complejos y crear experiencias excepcionales.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Mis Habilidades</h3>
            <div className="space-y-4">
              {skillsData.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-white mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
