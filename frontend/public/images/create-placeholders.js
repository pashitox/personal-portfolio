const { writeFileSync } = require('fs');

// Crear imágenes SVG simples
const createSVG = (text, filename) => {
  const svgContent = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#374151"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
          fill="#9CA3AF" font-family="Arial" font-size="16">${text}</text>
  </svg>`;
  
  writeFileSync(filename, svgContent);
  console.log(`✅ Created ${filename}`);
};

createSVG('Project 1', 'project1.jpg');
createSVG('Project 2', 'project2.jpg');
createSVG('Project 3', 'project3.jpg');