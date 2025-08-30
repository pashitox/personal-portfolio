export interface Project {
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

export interface Skill {
  name: string;
  level: number;
  category: 'data-engineering' | 'machine-learning' | 'mlops' | 'cloud' | 'visualization';
}

export interface NavLink {
  href: string;
  label: string;
}

export interface VisitorStats {
  totalVisitors: number;
  uniqueVisitors: number;
  returningVisitors: number;
  projectsViewed: number;
  contactRequests: number;
}

export interface GitHubStats {
  repositories: number;
  stars: number;
  forks: number;
  contributions: number;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Nitro Data Platform",
    description: "Sistema de monitoreo predictivo en tiempo real para equipos industriales. Pipeline completo con Kafka, Spark y Airflow, diseñado para reducir latencia de procesamiento y servir modelos ML en producción.",
    technologies: ["Apache Kafka", "Apache Spark", "Airflow", "FastAPI", "MLOps", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/pashitox/nitro-system",
    demoUrl: "https://github.com/pashitox/nitro-system",
    image: "/images/project1.svg",
    metrics: {
      latencyReduction: "75%",
      dataProcessed: "15TB/día",
      users: 250
    }
  },
  {
    id: 2,
    title: "UrbanNet Smart City Analytics",
    description: "Plataforma de análisis urbano con modelo de deep learning que alcanza 99.16% de accuracy en detección de anomalías. Sistema containerizado procesando grandes volúmenes de datos urbanos.",
    technologies: ["PyTorch", "Docker", "Computer Vision", "Deep Learning", "Grafana", "TensorFlow"],
    githubUrl: "https://github.com/pashitox/urbannet-ai",
    demoUrl: "https://github.com/pashitox/urbannet-ai",
    image: "/images/project2.svg",
    metrics: {
      accuracy: 99.16,
      dataProcessed: "2.3TB/mes",
      users: 500
    }
  },
  {
    id: 3,
    title: "Satellite Anomaly Prediction",
    description: "Sistema de mantenimiento predictivo para subsistemas satelitales con dashboard Power BI y modelos XGBoost integrados. Solución completa de analytics para la industria aeroespacial.",
    technologies: ["Power BI", "XGBoost", "Python", "Predictive Analytics", "Dashboard", "Azure"],
    githubUrl: "https://github.com/pashitox/satellite-ai",
    demoUrl: "https://github.com/pashitox/satellite-ai",
    image: "/images/project3.svg",
    metrics: {
      accuracy: 94.5,
      latencyReduction: "60%",
      users: 120
    }
  },
  {
    id: 4,
    title: "Real-time Data Processing Framework",
    description: "Framework escalable para procesamiento de datos en tiempo real usando Apache Spark Streaming y Kafka. Optimizado para análisis de grandes volúmenes de datos en entornos distribuidos.",
    technologies: ["Apache Spark", "Kafka", "Real-time", "Scala", "Big Data", "Kubernetes"],
    githubUrl: "https://github.com/pashitox/realtime-framework",
    demoUrl: "https://github.com/pashitox/realtime-framework",
    image: "/images/project1.svg",
    metrics: {
      dataProcessed: "8TB/hora",
      latencyReduction: "85%",
      users: 300
    }
  },
  {
    id: 5,
    title: "MLOps Pipeline Automation",
    description: "Pipeline automatizado de MLOps con MLflow, Docker y Kubernetes para despliegue continuo de modelos de machine learning en entornos productivos.",
    technologies: ["MLflow", "Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    githubUrl: "https://github.com/pashitox/mlops-pipeline",
    demoUrl: "https://github.com/pashitox/mlops-pipeline",
    image: "/images/project2.svg",
    metrics: {
      deploymentTime: "5min",
      users: 180,
      modelsDeployed: 45
    }
  },
  {
    id: 6,
    title: "IoT Industrial Analytics Platform",
    description: "Plataforma de analytics para IoT industrial que procesa datos de sensores en tiempo real con Apache Flink y almacenamiento en TimeSeries databases.",
    technologies: ["Apache Flink", "TimescaleDB", "Grafana", "IoT", "React", "Node.js"],
    githubUrl: "https://github.com/pashitox/iot-analytics",
    demoUrl: "https://github.com/pashitox/iot-analytics",
    image: "/images/project3.svg",
    metrics: {
      sensorsConnected: 1250,
      dataProcessed: "20M eventos/día",
      users: 400
    }
  }
];

export const skillsData: Skill[] = [
  // Data Engineering
  { name: "Apache Spark", level: 95, category: 'data-engineering' },
  { name: "Apache Kafka", level: 90, category: 'data-engineering' },
  { name: "Apache Airflow", level: 88, category: 'data-engineering' },
  { name: "dbt", level: 85, category: 'data-engineering' },
  { name: "PostgreSQL", level: 90, category: 'data-engineering' },
  { name: "Apache Flink", level: 82, category: 'data-engineering' },
  
  // Machine Learning
  { name: "Python", level: 93, category: 'machine-learning' },
  { name: "PyTorch", level: 85, category: 'machine-learning' },
  { name: "TensorFlow", level: 80, category: 'machine-learning' },
  { name: "Scikit-learn", level: 88, category: 'machine-learning' },
  { name: "XGBoost", level: 87, category: 'machine-learning' },
  { name: "Computer Vision", level: 82, category: 'machine-learning' },
  
  // MLOps & Cloud
  { name: "Docker", level: 88, category: 'mlops' },
  { name: "Kubernetes", level: 78, category: 'mlops' },
  { name: "MLflow", level: 85, category: 'mlops' },
  { name: "FastAPI", level: 85, category: 'mlops' },
  { name: "Terraform", level: 80, category: 'cloud' },
  { name: "AWS", level: 75, category: 'cloud' },
  
  // Visualization
  { name: "Grafana", level: 83, category: 'visualization' },
  { name: "Power BI", level: 79, category: 'visualization' },
  { name: "Streamlit", level: 86, category: 'visualization' },
  { name: "Plotly", level: 81, category: 'visualization' }
];

// ⚠️ SOLO UNA DEFINICIÓN DE navLinks - ELIMINA LA DUPLICADA
export const navLinks: NavLink[] = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#contact", label: "Contacto" }
];

export const dashboardStats = {
  totalVisitors: 2847,
  uniqueVisitors: 1956,
  returningVisitors: 891,
  projectsCompleted: 18,
  happyClients: 23,
  codeCommits: 1248,
  linesOfCode: 156432,
  bugsFixed: 167,
  coffeeCups: 892
};

export const visitorStats: VisitorStats = {
  totalVisitors: 2847,
  uniqueVisitors: 1956,
  returningVisitors: 891,
  projectsViewed: 5623,
  contactRequests: 47
};

export const githubStats: GitHubStats = {
  repositories: 27,
  stars: 156,
  forks: 78,
  contributions: 1248
};

export const projectMetrics = {
  totalProjects: 18,
  activeProjects: 6,
  completedProjects: 12,
  successRate: 94.7,
  totalUsers: 1750,
  dataProcessed: "45TB"
};

// Datos para gráficos y estadísticas
export const monthlyVisitors = [
  { month: 'Ene', visitors: 215, returning: 89 },
  { month: 'Feb', visitors: 278, returning: 112 },
  { month: 'Mar', visitors: 342, returning: 145 },
  { month: 'Abr', visitors: 398, returning: 178 },
  { month: 'May', visitors: 456, returning: 201 },
  { month: 'Jun', visitors: 512, returning: 234 },
  { month: 'Jul', visitors: 467, returning: 198 },
  { month: 'Ago', visitors: 523, returning: 223 },
  { month: 'Sep', visitors: 589, returning: 256 },
  { month: 'Oct', visitors: 634, returning: 289 },
  { month: 'Nov', visitors: 701, returning: 312 },
  { month: 'Dic', visitors: 756, returning: 345 }
];

export const technologyUsage = [
  { name: 'Apache Spark', usage: 95, projects: 12 },
  { name: 'Python', usage: 93, projects: 18 },
  { name: 'Docker', usage: 88, projects: 15 },
  { name: 'Kafka', usage: 90, projects: 10 },
  { name: 'PostgreSQL', usage: 90, projects: 14 },
  { name: 'PyTorch', usage: 85, projects: 8 },
  { name: 'Kubernetes', usage: 78, projects: 6 },
  { name: 'AWS', usage: 75, projects: 7 }
];

export const projectCategories = [
  { name: 'Data Engineering', count: 8, color: '#3B82F6' },
  { name: 'Machine Learning', count: 6, color: '#10B981' },
  { name: 'MLOps', count: 3, color: '#8B5CF6' },
  { name: 'IoT', count: 2, color: '#F59E0B' },
  { name: 'Visualization', count: 4, color: '#EC4899' }
];