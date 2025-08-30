// Este script crea imágenes placeholder básicas
const { writeFileSync } = require('fs');
const { join } = require('path');

// Crear imágenes SVG base64 como placeholder
const placeholderSVG = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#374151"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9CA3AF" font-family="Arial" font-size="20">Project Image</text>
</svg>`;

const base64Image = Buffer.from(placeholderSVG).toString('base64');
const dataURI = `data:image/svg+xml;base64,${base64Image}`;

// Actualizar data.ts para usar placeholders
const dataContent = `export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface NavLink {
  href: string;
  label: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Sistema de Recomendación ML",
    description: "Sistema de machine learning para recomendaciones personalizadas usando algoritmos de filtrado colaborativo",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/tu-usuario/ml-recommendation",
    demoUrl: "https://ml-demo.tuportfolio.com",
    image: "${dataURI}"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interactivo con visualización de datos en tiempo real y métricas avanzadas",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/tu-usuario/analytics-dashboard",
    demoUrl: "https://analytics.tuportfolio.com",
    image: "${dataURI}"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce con carrito de compras y pasarela de pagos",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Node.js", "MySQL"],
    githubUrl: "https://github.com/tu-usuario/ecommerce-platform",
    demoUrl: "https://shop.tuportfolio.com",
    image: "${dataURI}"
  }
];

export const skillsData: Skill[] = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 85 },
  { name: "Docker", level: 80 },
  { name: "AWS", level: 75 },
  { name: "Machine Learning", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 70 }
];

export const navLinks: NavLink[] = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" }
];

export const dashboardStats = {
  totalVisitors: 1245,
  projectsCompleted: 12,
  happyClients: 8,
  codeCommits: 256
};
`;

writeFileSync(join(__dirname, '../src/lib/data.ts'), dataContent);
console.log('✅ data.ts actualizado con imágenes placeholder');