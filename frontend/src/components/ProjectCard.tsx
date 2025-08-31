interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
  metrics?: {
    accuracy?: number;
    dataProcessed?: string;
    latencyReduction?: string;
    users?: number;
    deploymentTime?: string;
    modelsDeployed?: number;
    sensorsConnected?: number;
  };
}


interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="h-48 mb-4 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

      {project.metrics && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-300 mb-2">Métricas Clave:</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {project.metrics.accuracy && (
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 mr-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Accuracy: {project.metrics.accuracy}%</span>
              </div>
            )}
            {project.metrics.dataProcessed && (
              <div className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-1">📊</span>
                <span className="text-gray-700 dark:text-gray-300">Data: {project.metrics.dataProcessed}</span>
              </div>
            )}
            {project.metrics.latencyReduction && (
              <div className="flex items-center">
                <span className="text-yellow-600 dark:text-yellow-400 mr-1">⚡</span>
                <span className="text-gray-700 dark:text-gray-300">Latency: -{project.metrics.latencyReduction}</span>
              </div>
            )}
            {project.metrics.users && (
              <div className="flex items-center">
                <span className="text-purple-600 dark:text-purple-400 mr-1">👥</span>
                <span className="text-gray-700 dark:text-gray-300">Users: {project.metrics.users}</span>
              </div>
            )}
            {project.metrics.deploymentTime && (
              <div className="flex items-center">
                <span className="text-green-600 dark:text-green-400 mr-1">🚀</span>
                <span className="text-gray-700 dark:text-gray-300">Deploy: {project.metrics.deploymentTime}</span>
              </div>
            )}
            {project.metrics.modelsDeployed && (
              <div className="flex items-center">
                <span className="text-blue-600 dark:text-blue-400 mr-1">🤖</span>
                <span className="text-gray-700 dark:text-gray-300">Models: {project.metrics.modelsDeployed}</span>
              </div>
            )}
            {project.metrics.sensorsConnected && (
              <div className="flex items-center">
                <span className="text-orange-600 dark:text-orange-400 mr-1">🔌</span>
                <span className="text-gray-700 dark:text-gray-300">Sensors: {project.metrics.sensorsConnected}</span>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-3">
        <a
          href={project.githubUrl}
          className="flex-1 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white text-center py-2 rounded transition-colors flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href={project.demoUrl}
          className="flex-1 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white text-center py-2 rounded transition-colors flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Demo
        </a>
      </div>
    </div>
  );
}