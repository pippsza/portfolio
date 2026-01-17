export type Locale = "en" | "uk" | "ru";

// Social links with icon names
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    iconName: "Github",
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    iconName: "Linkedin",
    color: "#0077b5",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    iconName: "Twitter",
    color: "#1DA1F2",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    iconName: "Mail",
    color: "#EA4335",
  },
];

// Projects
export const projects: Record<
  Locale,
  Array<{
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image: string;
  }>
> = {
  en: [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with Next.js, Payload CMS, and Stripe integration. Features include product management, shopping cart, and secure checkout.",
      tags: [
        "Next.js",
        "React",
        "Payload CMS",
        "Tailwind CSS",
        "Stripe",
        "TypeScript",
      ],
      link: "https://example.com",
      github: "https://github.com/yourusername/project",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "Mobile Fitness App",
      description:
        "Cross-platform mobile application built with React Native. Includes workout tracking, nutrition logging, and social features.",
      tags: ["React Native", "Expo", "TypeScript", "REST API", "Firebase"],
      github: "https://github.com/yourusername/fitness-app",
      image: "/projects/fitness.jpg",
    },
    {
      title: "Real-Time Dashboard",
      description:
        "Analytics dashboard with real-time data visualization using GraphQL subscriptions and WebSockets.",
      tags: ["React", "GraphQL", "Apollo", "D3.js", "Node.js", "WebSocket"],
      link: "https://dashboard.example.com",
      github: "https://github.com/yourusername/dashboard",
      image: "/projects/dashboard.jpg",
    },
    {
      title: "Content Management System",
      description:
        "Headless CMS built with Payload CMS, featuring custom fields, media management, and role-based access control.",
      tags: ["Payload CMS", "Node.js", "MongoDB", "REST API", "TypeScript"],
      github: "https://github.com/yourusername/cms",
      image: "/projects/cms.jpg",
    },
  ],
  uk: [
    {
      title: "E-Commerce Платформа",
      description:
        "Повноцінне рішення для електронної комерції з Next.js, Payload CMS та інтеграцією Stripe. Включає управління продуктами, кошик та безпечну оплату.",
      tags: [
        "Next.js",
        "React",
        "Payload CMS",
        "Tailwind CSS",
        "Stripe",
        "TypeScript",
      ],
      link: "https://example.com",
      github: "https://github.com/yourusername/project",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "Мобільний Фітнес Додаток",
      description:
        "Кросплатформний мобільний додаток створений з React Native. Включає відстеження тренувань, журнал харчування та соціальні функції.",
      tags: ["React Native", "Expo", "TypeScript", "REST API", "Firebase"],
      github: "https://github.com/yourusername/fitness-app",
      image: "/projects/fitness.jpg",
    },
    {
      title: "Панель в Реальному Часі",
      description:
        "Аналітична панель з візуалізацією даних в реальному часі за допомогою GraphQL підписок та WebSockets.",
      tags: ["React", "GraphQL", "Apollo", "D3.js", "Node.js", "WebSocket"],
      link: "https://dashboard.example.com",
      github: "https://github.com/yourusername/dashboard",
      image: "/projects/dashboard.jpg",
    },
    {
      title: "Система Управління Контентом",
      description:
        "Безголова CMS побудована на Payload CMS, з налаштованими полями, управлінням медіа та контролем доступу на основі ролей.",
      tags: ["Payload CMS", "Node.js", "MongoDB", "REST API", "TypeScript"],
      github: "https://github.com/yourusername/cms",
      image: "/projects/cms.jpg",
    },
  ],
  ru: [
    {
      title: "E-Commerce Платформа",
      description:
        "Полнофункциональное решение для электронной коммерции с Next.js, Payload CMS и интеграцией Stripe. Включает управление продуктами, корзину и безопасную оплату.",
      tags: [
        "Next.js",
        "React",
        "Payload CMS",
        "Tailwind CSS",
        "Stripe",
        "TypeScript",
      ],
      link: "https://example.com",
      github: "https://github.com/yourusername/project",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "Мобильное Фитнес Приложение",
      description:
        "Кроссплатформенное мобильное приложение созданное с React Native. Включает отслеживание тренировок, журнал питания и социальные функции.",
      tags: ["React Native", "Expo", "TypeScript", "REST API", "Firebase"],
      github: "https://github.com/yourusername/fitness-app",
      image: "/projects/fitness.jpg",
    },
    {
      title: "Панель в Реальном Времени",
      description:
        "Аналитическая панель с визуализацией данных в реальном времени с помощью GraphQL подписок и WebSockets.",
      tags: ["React", "GraphQL", "Apollo", "D3.js", "Node.js", "WebSocket"],
      link: "https://dashboard.example.com",
      github: "https://github.com/yourusername/dashboard",
      image: "/projects/dashboard.jpg",
    },
    {
      title: "Система Управления Контентом",
      description:
        "Безголовая CMS построенная на Payload CMS, с настраиваемыми полями, управлением медиа и контролем доступа на основе ролей.",
      tags: ["Payload CMS", "Node.js", "MongoDB", "REST API", "TypeScript"],
      github: "https://github.com/yourusername/cms",
      image: "/projects/cms.jpg",
    },
  ],
};

// Skills categorized
export const skills = {
  Frontend: [
    { name: "Next.js", iconName: "Layers" },
    { name: "React", iconName: "Atom" },
    { name: "React Native", iconName: "Smartphone" },
    { name: "Tailwind CSS", iconName: "Palette" },
    { name: "TypeScript", iconName: "Code2" },
    { name: "Preact", iconName: "Zap" },
  ],
  Backend: [
    { name: "Node.js", iconName: "Server" },
    { name: "Express.js", iconName: "Zap" },
    { name: "Python", iconName: "Code2" },
    { name: "Payload CMS", iconName: "Database" },
    { name: "REST API", iconName: "Globe" },
    { name: "GraphQL", iconName: "Network" },
    { name: "MongoDB", iconName: "Database" },
    { name: "PostgreSQL", iconName: "Database" },
  ],
  "DevOps/Tools": [
    { name: "Docker", iconName: "Container" },
    { name: "GitHub Actions", iconName: "GitBranch" },
    { name: "VPS Deployment", iconName: "Cloud" },
    { name: "CI/CD", iconName: "RefreshCw" },
    { name: "Git", iconName: "GitBranch" },
    { name: "Linux", iconName: "Terminal" },
  ],
};

// DevOps pipeline stages
export const devOpsPipeline = [
  {
    name: "Push Code",
    tool: "GitHub",
    iconName: "Github",
    color: "#333",
    description: "Code pushed to repository",
  },
  {
    name: "CI/CD",
    tool: "GitHub Actions",
    iconName: "GitBranch",
    color: "#2088FF",
    description: "Automated build and tests",
  },
  {
    name: "Containerize",
    tool: "Docker",
    iconName: "Container",
    color: "#2496ED",
    description: "Build Docker image",
  },
  {
    name: "Registry",
    tool: "Docker Hub",
    iconName: "Package",
    color: "#2496ED",
    description: "Push to registry",
  },
  {
    name: "Deploy",
    tool: "VPS",
    iconName: "Cloud",
    color: "#10B981",
    description: "Deploy to production",
  },
];

// Dictionary for UI labels
export const dictionary: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",

    // Hero Section
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    heroDescription:
      "I build modern web and mobile applications with cutting-edge technologies. Specializing in React, Next.js, and cloud-native solutions.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "Passionate full-stack developer with expertise in modern web technologies. I create scalable, performant applications that deliver exceptional user experiences.",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsDescription: "Here are some of my recent works",
    viewProject: "View Project",
    viewCode: "View Code",

    // Skills Section
    skillsTitle: "Technical Skills",
    skillsDescription: "Technologies I work with",

    // DevOps Section
    devOpsTitle: "DevOps Pipeline",
    devOpsDescription: "My automated deployment workflow",

    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription: "Let's work together on your next project",

    // Footer
    builtWith: "Built with",
    rights: "All rights reserved",

    // Theme
    toggleTheme: "Toggle theme",
    lightMode: "Light mode",
    darkMode: "Dark mode",

    // Language
    language: "Language",
    changeLanguage: "Change language",
  },
  uk: {
    // Navigation
    home: "Головна",
    about: "Про мене",
    projects: "Проєкти",
    skills: "Навички",
    contact: "Контакти",

    // Hero Section
    greeting: "Привіт, я",
    role: "Full Stack Розробник",
    heroDescription:
      "Я створюю сучасні веб та мобільні додатки з використанням передових технологій. Спеціалізуюся на React, Next.js та хмарних рішеннях.",
    contactMe: "Зв'язатися",
    viewProjects: "Переглянути проєкти",

    // About Section
    aboutTitle: "Про мене",
    aboutDescription:
      "Пристрасний full-stack розробник з експертизою в сучасних веб-технологіях. Я створюю масштабовані, продуктивні додатки, які забезпечують виняткові користувацькі враження.",

    // Projects Section
    projectsTitle: "Обрані проєкти",
    projectsDescription: "Ось деякі з моїх останніх робіт",
    viewProject: "Переглянути проєкт",
    viewCode: "Переглянути код",

    // Skills Section
    skillsTitle: "Технічні навички",
    skillsDescription: "Технології, з якими я працюю",

    // DevOps Section
    devOpsTitle: "DevOps Конвеєр",
    devOpsDescription: "Мій автоматизований процес розгортання",

    // Contact Section
    contactTitle: "Зв'язатися",
    contactDescription: "Давайте попрацюємо разом над вашим наступним проєктом",

    // Footer
    builtWith: "Створено з",
    rights: "Всі права захищені",

    // Theme
    toggleTheme: "Перемкнути тему",
    lightMode: "Світла тема",
    darkMode: "Темна тема",

    // Language
    language: "Мова",
    changeLanguage: "Змінити мову",
  },
  ru: {
    // Navigation
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты",

    // Hero Section
    greeting: "Привет, я",
    role: "Full Stack Разработчик",
    heroDescription:
      "Я создаю современные веб и мобильные приложения с использованием передовых технологий. Специализируюсь на React, Next.js и облачных решениях.",
    contactMe: "Связаться",
    viewProjects: "Посмотреть проекты",

    // About Section
    aboutTitle: "Обо мне",
    aboutDescription:
      "Увлеченный full-stack разработчик с экспертизой в современных веб-технологиях. Я создаю масштабируемые, производительные приложения, которые обеспечивают исключительные пользовательские впечатления.",

    // Projects Section
    projectsTitle: "Избранные проекты",
    projectsDescription: "Вот некоторые из моих последних работ",
    viewProject: "Посмотреть проект",
    viewCode: "Посмотреть код",

    // Skills Section
    skillsTitle: "Технические навыки",
    skillsDescription: "Технологии, с которыми я работаю",

    // DevOps Section
    devOpsTitle: "DevOps Конвейер",
    devOpsDescription: "Мой автоматизированный процесс развертывания",

    // Contact Section
    contactTitle: "Связаться",
    contactDescription:
      "Давайте поработаем вместе над вашим следующим проектом",

    // Footer
    builtWith: "Создано с",
    rights: "Все права защищены",

    // Theme
    toggleTheme: "Переключить тему",
    lightMode: "Светлая тема",
    darkMode: "Темная тема",

    // Language
    language: "Язык",
    changeLanguage: "Изменить язык",
  },
};
