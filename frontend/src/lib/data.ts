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
    pipelineSuccess?: number;
    searchTime?: string;
    qualityScore?: number;
    agentCount?: number;
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
    | 'iot'
    | 'ai-systems';
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
    title: "GENESIS AI - Self-Improving Autonomous Chat Engine",
    description: "World's first self-improving chatbot with multi-agent architecture. Features 4 specialized agents (RAG, Reasoner, Critic, Improver) that analyze, critique and optimize responses autonomously through agentic feedback loops.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "FastAPI",
      "Python",
      "FAISS",
      "Hugging Face",
      "Sentence Transformers",
      "WebSockets",
      "Docker",
      "AWS Lambda",
      "Tailwind CSS",
      "PostgreSQL"
    ],
    githubUrl: "https://github.com/pashitox/genesis-ai",
    demoUrl: "https://github.com/pashitox/genesis-ai",
    image: "/images/genesis.jpeg",
    metrics: {
      users: 1500,
      deploymentTime: "2.5s",
      modelsDeployed: 4,
      dataProcessed: "15TB/month",
      latencyReduction: "78%",
      pipelineSuccess: 98,
      searchTime: "0.00s",
      qualityScore: 0.95,
      agentCount: 4
    }
  },
  {
    id: 2,
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
    demoUrl: "ttps://github.com/pashitox/skysense-iot-platform",
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
    id: 3,
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
    demoUrl: "https://github.com/pashitox/automated-project-manager",
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
    demoUrl: "https://github.com/pashitox/nexus-shop",
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
  }
];

// ---------------- SKILLS ----------------
export const skillsData: Skill[] = [
  // 🧠 AI & Multi-Agent Systems
  { name: "Multi-Agent Architecture", level: 92, category: 'ai-systems' },
  { name: "RAG Systems", level: 90, category: 'ai-systems' },
  { name: "FAISS Vector Search", level: 88, category: 'ai-systems' },
  { name: "Autonomous AI", level: 87, category: 'ai-systems' },
  { name: "LLM Integration", level: 89, category: 'ai-systems' },
  { name: "Semantic Search", level: 86, category: 'ai-systems' },
  
  // 🌐 Full Stack Web & Modern Development
  { name: "Next.js 15", level: 92, category: 'web-development' },
  { name: "TypeScript", level: 90, category: 'web-development' },
  { name: "React", level: 90, category: 'web-development' },
  { name: "Angular 17", level: 88, category: 'web-development' },
  { name: "Vue.js 3", level: 88, category: 'web-development' },
  { name: "Node.js / Express", level: 88, category: 'web-development' },
  { name: "Tailwind CSS", level: 92, category: 'web-development' },
  { name: "WebSockets", level: 87, category: 'web-development' },
  { name: "FastAPI", level: 88, category: 'web-development' },
  
  // 🛠️ Data Engineering
  { name: "Apache Spark", level: 95, category: 'data-engineering' },
  { name: "Apache Kafka", level: 90, category: 'data-engineering' },
  { name: "Apache Airflow", level: 88, category: 'data-engineering' },
  { name: "PostgreSQL", level: 90, category: 'data-engineering' },
  { name: "Real-time Systems", level: 84, category: 'data-engineering' },
  { name: "Data Pipelines", level: 87, category: 'data-engineering' },

  // ☁️ Cloud & DevOps
  { name: "Docker", level: 90, category: 'cloud' },
  { name: "Kubernetes", level: 85, category: 'cloud' },
  { name: "AWS", level: 75, category: 'cloud' },
  { name: "CI/CD Pipelines", level: 83, category: 'cloud' },
  { name: "Terraform", level: 80, category: 'cloud' },
  { name: "Nginx", level: 85, category: 'cloud' },

  // 🤖 Machine Learning
  { name: "Python", level: 93, category: 'machine-learning' },
  { name: "PyTorch", level: 85, category: 'machine-learning' },
  { name: "TensorFlow", level: 80, category: 'machine-learning' },
  { name: "Scikit-learn", level: 88, category: 'machine-learning' },
  { name: "XGBoost", level: 87, category: 'machine-learning' },

  // ⚙️ MLOps & Automation
  { name: "n8n Automation", level: 85, category: 'mlops' },
  { name: "MLflow", level: 85, category: 'mlops' },
  { name: "Workflow Orchestration", level: 87, category: 'mlops' },

  // 📊 Visualization / Dashboards
  { name: "Grafana", level: 85, category: 'visualization' },
  { name: "Streamlit", level: 86, category: 'visualization' },
  { name: "Plotly", level: 81, category: 'visualization' },

  // 🔗 IoT & Real-time
  { name: "IoT Protocols", level: 82, category: 'iot' },
  { name: "Real-time Data", level: 85, category: 'iot' },
  { name: "Sensor Integration", level: 80, category: 'iot' }
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
  totalVisitors: 4847,
  uniqueVisitors: 3256,
  returningVisitors: 1591,
  projectsCompleted: 22,
  happyClients: 28,
  codeCommits: 1890,
  linesOfCode: 215430,
  bugsFixed: 245,
  coffeeCups: 1350
};

export const visitorStats: VisitorStats = {
  totalVisitors: 4847,
  uniqueVisitors: 3256,
  returningVisitors: 1591,
  projectsViewed: 7823,
  contactRequests: 78
};

export const githubStats: GitHubStats = {
  repositories: 35,
  stars: 215,
  forks: 112,
  contributions: 1890
};

export const projectMetrics = {
  totalProjects: 22,
  activeProjects: 7,
  completedProjects: 15,
  successRate: 97.2,
  totalUsers: 4768,
  dataProcessed: "84.2TB",
  aiAgentsDeployed: 4
};

// ---------------- VISUAL DATA ----------------
export const monthlyVisitors = [
  { month: 'Jan', visitors: 315, returning: 125 },
  { month: 'Feb', visitors: 378, returning: 145 },
  { month: 'Mar', visitors: 442, returning: 178 },
  { month: 'Apr', visitors: 498, returning: 201 },
  { month: 'May', visitors: 556, returning: 234 },
  { month: 'Jun', visitors: 612, returning: 267 },
  { month: 'Jul', visitors: 689, returning: 289 },
  { month: 'Aug', visitors: 756, returning: 312 },
  { month: 'Sep', visitors: 834, returning: 345 },
  { month: 'Oct', visitors: 923, returning: 378 },
  { month: 'Nov', visitors: 1012, returning: 412 },
  { month: 'Dec', visitors: 1156, returning: 456 }
];

export const technologyUsage = [
  { name: 'Multi-Agent AI', usage: 92, projects: 1 },
  { name: 'Apache Spark', usage: 95, projects: 12 },
  { name: 'Python', usage: 93, projects: 18 },
  { name: 'Next.js 15', usage: 92, projects: 9 },
  { name: 'TypeScript', usage: 90, projects: 11 },
  { name: 'Docker', usage: 90, projects: 17 },
  { name: 'FastAPI', usage: 88, projects: 8 },
  { name: 'PostgreSQL', usage: 90, projects: 16 },
  { name: 'Kubernetes', usage: 85, projects: 9 },
  { name: 'Apache Kafka', usage: 90, projects: 10 },
  { name: 'Angular 17', usage: 88, projects: 3 },
  { name: 'Vue.js 3', usage: 88, projects: 1 },
  { name: 'FAISS', usage: 88, projects: 1 },
  { name: 'WebSockets', usage: 87, projects: 5 },
  { name: 'AWS', usage: 75, projects: 8 }
];

export const projectCategories = [
  { name: 'AI & Multi-Agent Systems', count: 1, color: '#8B5CF6' },
  { name: 'Data Engineering', count: 9, color: '#3B82F6' },
  { name: 'Machine Learning', count: 6, color: '#10B981' },
  { name: 'Web Development', count: 10, color: '#06B6D4' },
  { name: 'Cloud & DevOps', count: 7, color: '#F59E0B' },
  { name: 'IoT', count: 4, color: '#EC4899' }
];