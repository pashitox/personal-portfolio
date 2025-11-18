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
    podsDeployed?: number;
    autoScaling?: string;
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
    | 'web-development'
    | 'iot';
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
    title: "Skysense IoT Platform - Cloud Native System",
    description: "Complete cloud-native IoT platform with real-time data streaming, Kubernetes orchestration, and microservices architecture. Features auto-scaling, service mesh, GitOps workflows, and comprehensive monitoring.",
    technologies: [
      "Angular 17",
      "TypeScript",
      "FastAPI",
      "Kubernetes",
      "Docker",
      "WebSockets",
      "PostgreSQL",
      "Istio",
      "ArgoCD",
      "Grafana",
      "Prometheus",
      "Kiali",
      "Helm",
      "Nginx"
    ],
    githubUrl: "https://github.com/pashitox/skysense-iot-platform",
    demoUrl: "https://skysense-demo.vercel.app",
    image: "/images/sky.png",
    metrics: {
      users: 1500,
      deploymentTime: "1.8s",
      modelsDeployed: 5,
      dataProcessed: "25TB/month",
      latencyReduction: "75%",
      podsDeployed: 15,
      autoScaling: "2-15 replicas",
      sensorsConnected: 5000
    }
  },
  {
    id: 2,
    title: "Automated Project Manager - AI Workflow Platform",
    description: "Complete automation ecosystem with Vue.js frontend and n8n workflow engine. Features real-time task management, AI-powered analysis, multi-channel notifications, and zero traditional backend architecture.",
    technologies: [
      "Vue.js 3",
      "TypeScript",
      "n8n",
      "PostgreSQL", 
      "Docker",
      "OpenAI API",
      "Twilio API",
      "Gmail SMTP",
      "Pinia",
      "Element Plus",
      "Webhooks"
    ],
    githubUrl: "https://github.com/pashitox/automated-project-manager",
    demoUrl: "http://localhost:5173",
    image: "/images/3.jpg",
    metrics: {
      users: 18,
      deploymentTime: "2.1s",
      modelsDeployed: 2,
      dataProcessed: "1.2GB/day",
      latencyReduction: "80%",
      accuracy: 94.5
    }
  },
  {
    id: 3,
    title: "WebTwin - Virtual Twin Web Companion",
    description: "Advanced web analysis platform that creates virtual twins of websites, scanning DOM structures, simulating user interactions, and identifying UX optimization opportunities. Full Docker orchestration with real-time analytics.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Playwright", "Docker", "Tailwind CSS", "Express"],
    githubUrl: "https://github.com/pashitox/web-twin",
    demoUrl: "https://github.com/pashitox/web-twin",
    image: "/images/twin.png",
    metrics: {
      users: 2847,
      deploymentTime: "1.2s",
      modelsDeployed: 3,
      dataProcessed: "15TB/month",
      latencyReduction: "65%"
    }
  },
  {
    id: 4,
    title: "NexusShop – AI-Powered E-commerce Platform",
    description: "Full-stack e-commerce platform integrating AI for personalized recommendations, chat-based shopping, and intelligent product discovery. Features multi-auth, Stripe payments, and enterprise-grade security.",
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
    image: "/images/nexus.png",
    metrics: {
      users: 2500,
      modelsDeployed: 3,
      latencyReduction: "70%",
      deploymentTime: "1.9s",
      accuracy: 91.8,
      dataProcessed: "12TB/month"
    }
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
  }
];

// ---------------- SKILLS ----------------
export const skillsData: Skill[] = [
  // 🌐 Full Stack Web & Modern Development
  { name: "Angular 17", level: 88, category: 'web-development' },
  { name: "Next.js", level: 92, category: 'web-development' },
  { name: "TypeScript", level: 90, category: 'web-development' },
  { name: "React", level: 90, category: 'web-development' },
  { name: "Vue.js 3", level: 88, category: 'web-development' },
  { name: "Node.js / Express", level: 88, category: 'web-development' },
  { name: "Tailwind CSS", level: 92, category: 'web-development' },
  { name: "Playwright", level: 85, category: 'web-development' },
  { name: "API Integration", level: 90, category: 'web-development' },
  { name: "WebSockets", level: 87, category: 'web-development' },
  
  // 🛠️ Data Engineering
  { name: "Apache Spark", level: 95, category: 'data-engineering' },
  { name: "Apache Kafka", level: 90, category: 'data-engineering' },
  { name: "Apache Airflow", level: 88, category: 'data-engineering' },
  { name: "Workflow Orchestration", level: 87, category: 'data-engineering' },
  { name: "Real-time Systems", level: 84, category: 'data-engineering' },
  { name: "dbt", level: 85, category: 'data-engineering' },
  { name: "PostgreSQL", level: 90, category: 'data-engineering' },
  { name: "Apache Flink", level: 82, category: 'data-engineering' },

  // ☁️ Cloud & DevOps
  { name: "Kubernetes", level: 85, category: 'cloud' },
  { name: "Docker", level: 90, category: 'cloud' },
  { name: "Terraform", level: 80, category: 'cloud' },
  { name: "AWS", level: 75, category: 'cloud' },
  { name: "Istio", level: 78, category: 'cloud' },
  { name: "ArgoCD", level: 82, category: 'cloud' },
  { name: "Helm", level: 80, category: 'cloud' },
  { name: "Nginx", level: 85, category: 'cloud' },

  // 🤖 Machine Learning
  { name: "Python", level: 93, category: 'machine-learning' },
  { name: "PyTorch", level: 85, category: 'machine-learning' },
  { name: "TensorFlow", level: 80, category: 'machine-learning' },
  { name: "Scikit-learn", level: 88, category: 'machine-learning' },
  { name: "XGBoost", level: 87, category: 'machine-learning' },
  { name: "Computer Vision", level: 82, category: 'machine-learning' },

  // ⚙️ MLOps & Automation
  { name: "FastAPI", level: 88, category: 'mlops' },
  { name: "n8n Automation", level: 85, category: 'mlops' },
  { name: "MLflow", level: 85, category: 'mlops' },
  { name: "CI/CD Pipelines", level: 83, category: 'mlops' },

  // 📊 Visualization / Dashboards
  { name: "Grafana", level: 85, category: 'visualization' },
  { name: "Power BI", level: 79, category: 'visualization' },
  { name: "Streamlit", level: 86, category: 'visualization' },
  { name: "Plotly", level: 81, category: 'visualization' },
  { name: "Kiali", level: 78, category: 'visualization' },

  // 🔗 IoT & Real-time
  { name: "IoT Protocols", level: 82, category: 'iot' },
  { name: "Real-time Data", level: 85, category: 'iot' },
  { name: "Sensor Integration", level: 80, category: 'iot' },
  { name: "Message Brokers", level: 87, category: 'iot' }
];

// ---------------- NAVIGATION ----------------
export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#ai-experience", label: "AI Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#contact", label: "Contact" }
];

// ---------------- DASHBOARD METRICS ----------------
export const dashboardStats = {
  totalVisitors: 3847,
  uniqueVisitors: 2656,
  returningVisitors: 1191,
  projectsCompleted: 21,
  happyClients: 27,
  codeCommits: 1567,
  linesOfCode: 189430,
  bugsFixed: 203,
  coffeeCups: 1120
};

export const visitorStats: VisitorStats = {
  totalVisitors: 3847,
  uniqueVisitors: 2656,
  returningVisitors: 1191,
  projectsViewed: 6823,
  contactRequests: 63
};

export const githubStats: GitHubStats = {
  repositories: 32,
  stars: 189,
  forks: 94,
  contributions: 1567
};

export const projectMetrics = {
  totalProjects: 21,
  activeProjects: 6,
  completedProjects: 15,
  successRate: 96.8,
  totalUsers: 3268,
  dataProcessed: "71.2TB"
};

// ---------------- VISUAL DATA ----------------
export const monthlyVisitors = [
  { month: 'Jan', visitors: 215, returning: 89 },
  { month: 'Feb', visitors: 278, returning: 112 },
  { month: 'Mar', visitors: 342, returning: 145 },
  { month: 'Apr', visitors: 398, returning: 178 },
  { month: 'May', visitors: 456, returning: 201 },
  { month: 'Jun', visitors: 512, returning: 234 },
  { month: 'Jul', visitors: 567, returning: 267 },
  { month: 'Aug', visitors: 623, returning: 289 },
  { month: 'Sep', visitors: 689, returning: 312 },
  { month: 'Oct', visitors: 756, returning: 345 },
  { month: 'Nov', visitors: 834, returning: 378 },
  { month: 'Dec', visitors: 901, returning: 412 }
];

export const technologyUsage = [
  { name: 'Apache Spark', usage: 95, projects: 12 },
  { name: 'Python', usage: 93, projects: 18 },
  { name: 'Kubernetes', usage: 85, projects: 8 },
  { name: 'Docker', usage: 90, projects: 16 },
  { name: 'Angular 17', usage: 88, projects: 3 },
  { name: 'Next.js', usage: 92, projects: 8 },
  { name: 'TypeScript', usage: 90, projects: 10 },
  { name: 'PostgreSQL', usage: 90, projects: 15 },
  { name: 'FastAPI', usage: 88, projects: 7 },
  { name: 'Apache Kafka', usage: 90, projects: 10 },
  { name: 'Vue.js 3', usage: 88, projects: 1 },
  { name: 'n8n Automation', usage: 85, projects: 1 },
  { name: 'WebSockets', usage: 87, projects: 4 },
  { name: 'Grafana', usage: 85, projects: 6 },
  { name: 'AWS', usage: 75, projects: 7 }
];

export const projectCategories = [
  { name: 'Data Engineering', count: 9, color: '#3B82F6' },
  { name: 'Machine Learning', count: 7, color: '#10B981' },
  { name: 'Web Development', count: 9, color: '#06B6D4' },
  { name: 'Cloud & DevOps', count: 6, color: '#8B5CF6' },
  { name: 'IoT', count: 4, color: '#F59E0B' },
  { name: 'Visualization', count: 5, color: '#EC4899' }
];