// ---------------- INTERFACES ----------------
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
  category: 
    | 'data-engineering' 
    | 'machine-learning' 
    | 'mlops' 
    | 'cloud' 
    | 'visualization' 
    | 'web-development';
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

// ---------------- PROJECTS ----------------
export const projectsData: Project[] = [
  {
    id: 1,
    title: "Nitro Data Platform",
    description: "Predictive monitoring system for industrial equipment. Full pipeline with Kafka, Spark, and Airflow, plus ML models served via FastAPI.",
    technologies: ["Apache Kafka", "Apache Spark", "Airflow", "FastAPI", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/pashitox/nitro-system",
    demoUrl: "https://github.com/pashitox/nitro-system",
    image: "/images/project1.png",
    metrics: {
      dataProcessed: "15TB/month",
      latencyReduction: "65%",
      sensorsConnected: 2500
    }
  },
  {
    id: 2,
    title: "UrbanNet Smart City Analytics",
    description: "Urban analytics platform with deep learning and interactive dashboards. Processes 2.3TB of data per month.",
    technologies: ["PyTorch", "Docker", "Computer Vision", "Grafana", "TensorFlow"],
    githubUrl: "https://github.com/pashitox/smartcity-energy-genai",
    demoUrl: "https://github.com/pashitox/smartcity-energy-genai",
    image: "/images/project2.png",
    metrics: {
      dataProcessed: "2.3TB/month",
      accuracy: 92.5,
      users: 350
    }
  },
  {
    id: 3,
    title: "Full Stack Portfolio Website",
    description: "My professional portfolio developed with Next.js and Tailwind CSS, featuring mocked project data, stats, and interactive visualization.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    githubUrl: "https://github.com/pashitox/personal-portfolio",
    demoUrl: "#",
    image: "/images/project3.png",
    metrics: {
      users: 2847,
      deploymentTime: "2.3s",
      modelsDeployed: 1
    }
  },
  {
    id: 4,
    title: "Satellite Anomaly Detector — ESA Missions",
    description: "Anomaly detection system for ESA missions, integrating multiple data sources and predictive models with SHAP-based explanations.",
    technologies: ["Python 3.9", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP", "Jupyter Notebook"],
    githubUrl: "https://github.com/pashitox/satellite-anomaly-detector-ESA",
    demoUrl: "https://github.com/pashitox/satellite-anomaly-detector-ESA",
    image: "/images/project4.png",
    metrics: {
      accuracy: 96.2,
      modelsDeployed: 3,
      dataProcessed: "8.5GB/day"
    }
  },
  {
    id: 5,
    title: "DataHub Personal  Portfolio + AI Knowledge Platform",
    description: "Full-stack portfolio and AI knowledge platform with JWT authentication, protected routes, dark mode, and responsive design. Built with Next.js and NestJS.",
    technologies: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/pashitox/datahub-platform",
    demoUrl: "https://github.com/pashitox/datahub-platform",
    image: "/images/project5.png",
    metrics: {
      users: 1750,
      deploymentTime: "1.8s",
      modelsDeployed: 2
    }
  },
  {
  id: 6,
  title: "NexusShop – AI-Powered E-commerce Platform",
  description:
    "Full-stack e-commerce platform integrating AI for personalized recommendations, chat-based shopping, and intelligent product discovery. Features multi-auth, Stripe payments, and enterprise-grade security.",
  technologies: [
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Stripe API",
    "OpenAI API",
    "Redis",
    "Tailwind CSS",
    "Resend",
    "Google OAuth"
  ],
  githubUrl: "https://github.com/pashitox/nexus-shop",
  demoUrl: "https://nexus-shop.vercel.app",
  image: "/images/project-nexusshop.png",
  metrics: {
    users: 2500,
    modelsDeployed: 3,
    latencyReduction: "70%",
    deploymentTime: "1.9s",
    accuracy: 91.8,
    dataProcessed: "12TB/month"
  }
}






];

// ---------------- SKILLS ----------------
export const skillsData: Skill[] = [
  // 🛠️ Data Engineering
  { name: "Apache Spark", level: 95, category: 'data-engineering' },
  { name: "Apache Kafka", level: 90, category: 'data-engineering' },
  { name: "Apache Airflow", level: 88, category: 'data-engineering' },
  { name: "dbt", level: 85, category: 'data-engineering' },
  { name: "PostgreSQL", level: 90, category: 'data-engineering' },
  { name: "Apache Flink", level: 82, category: 'data-engineering' },

  // 🌐 Full Stack Web
  { name: "React", level: 90, category: 'web-development' },
  { name: "Next.js", level: 88, category: 'web-development' },
  { name: "Node.js / Express", level: 85, category: 'web-development' },
  { name: "TypeScript", level: 90, category: 'web-development' },
  { name: "Tailwind CSS", level: 92, category: 'web-development' },

  // 🤖 Machine Learning
  { name: "Python", level: 93, category: 'machine-learning' },
  { name: "PyTorch", level: 85, category: 'machine-learning' },
  { name: "TensorFlow", level: 80, category: 'machine-learning' },
  { name: "Scikit-learn", level: 88, category: 'machine-learning' },
  { name: "XGBoost", level: 87, category: 'machine-learning' },
  { name: "Computer Vision", level: 82, category: 'machine-learning' },

  // ⚙️ MLOps & Cloud
  { name: "Docker", level: 88, category: 'mlops' },
  { name: "Kubernetes", level: 78, category: 'mlops' },
  { name: "MLflow", level: 85, category: 'mlops' },
  { name: "FastAPI", level: 85, category: 'mlops' },
  { name: "Terraform", level: 80, category: 'cloud' },
  { name: "AWS", level: 75, category: 'cloud' },

  // 📊 Visualization / Dashboards
  { name: "Grafana", level: 83, category: 'visualization' },
  { name: "Power BI", level: 79, category: 'visualization' },
  { name: "Streamlit", level: 86, category: 'visualization' },
  { name: "Plotly", level: 81, category: 'visualization' }
];

// ---------------- NAVIGATION ----------------
export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#contact", label: "Contact" }
];

// ---------------- DASHBOARD METRICS ----------------
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

// ---------------- VISUAL DATA ----------------
export const monthlyVisitors = [
  { month: 'Jan', visitors: 215, returning: 89 },
  { month: 'Feb', visitors: 278, returning: 112 },
  { month: 'Mar', visitors: 342, returning: 145 },
  { month: 'Apr', visitors: 398, returning: 178 },
  { month: 'May', visitors: 456, returning: 201 },
  { month: 'Jun', visitors: 512, returning: 234 },
  { month: 'Jul', visitors: 467, returning: 198 },
  { month: 'Aug', visitors: 523, returning: 223 },
  { month: 'Sep', visitors: 589, returning: 256 },
  { month: 'Oct', visitors: 634, returning: 289 },
  { month: 'Nov', visitors: 701, returning: 312 },
  { month: 'Dec', visitors: 756, returning: 345 }
];

export const technologyUsage = [
  { name: 'Apache Spark', usage: 95, projects: 12 },
  { name: 'Python', usage: 93, projects: 18 },
  { name: 'Docker', usage: 88, projects: 15 },
  { name: 'Kafka', usage: 90, projects: 10 },
  { name: 'PostgreSQL', usage: 90, projects: 14 },
  { name: 'PyTorch', usage: 85, projects: 8 },
  { name: 'Kubernetes', usage: 78, projects: 6 },
  { name: 'AWS', usage: 75, projects: 7 },
  { name: 'Next.js', usage: 88, projects: 5 },
  { name: 'NestJS', usage: 85, projects: 3 }
];

export const projectCategories = [
  { name: 'Data Engineering', count: 8, color: '#3B82F6' },
  { name: 'Machine Learning', count: 6, color: '#10B981' },
  { name: 'MLOps', count: 3, color: '#8B5CF6' },
  { name: 'IoT', count: 2, color: '#F59E0B' },
  { name: 'Visualization', count: 4, color: '#EC4899' },
  { name: 'Web Development', count: 5, color: '#06B6D4' }
];