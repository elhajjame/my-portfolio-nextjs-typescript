export interface Technology {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  technologies: Technology[];
  description: string;
  repoLink: string;
  liveDemo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Redux Toolkit" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Node.js" },
    ],
    description:
      "A modern admin dashboard for managing products, orders, customers, and analytics. Features authentication, real-time statistics, and responsive design.",
    repoLink: "https://github.com/elhajjame",
    liveDemo: "https://ecommerce-dashboard.vercel.app",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
    ],
    description:
      "A developer portfolio showcasing projects, skills, and experience with smooth animations, dark mode, and responsive layouts.",
    repoLink: "https://github.com/elhajjame",
    liveDemo: "https://portfolio.vercel.app",
  },
  {
    id: 3,
    title: "Task Management App",
    technologies: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Redux Toolkit" },
      { id: 4, name: "Firebase" },
      { id: 5, name: "Material UI" },
    ],
    description:
      "A collaborative task management application that allows users to create projects, assign tasks, track progress, and manage deadlines.",
    repoLink: "https://github.com/elhajjame",
    liveDemo: "https://task-manager-app.vercel.app",
  },
  {
    id: 4,
    title: "Weather Forecast Platform",
    technologies: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "OpenWeather API" },
      { id: 4, name: "Tailwind CSS" },
    ],
    description:
      "A weather application providing real-time weather conditions, hourly forecasts, and location-based search with a clean user interface.",
    repoLink: "https://github.com/elhajjame",
    liveDemo: "https://weather-platform.vercel.app",
  },
];
