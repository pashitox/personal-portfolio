interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="h-48 mb-4 rounded-lg bg-gray-700 flex items-center justify-center overflow-hidden">
        <div className="text-gray-400 text-center">
          <div className="text-3xl mb-2">🖼️</div>
          <p className="text-sm">{project.title}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a
          href={project.githubUrl}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  );
}