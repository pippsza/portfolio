export type Locale = "en" | "uk" | "ru";

// Social links with icon names
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/pippsza",
    iconName: "Github",
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bohdan-astakhov-36a95a349/",
    iconName: "Linkedin",
    color: "#0077b5",
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/pippsza",
  //   iconName: "Twitter",
  //   color: "#1DA1F2",
  // },
  {
    name: "Email",
    url: "mailto:bastahov16@gmail.com",
    iconName: "Mail",
    color: "#EA4335",
  },
  {
    name: "Telegram",
    url: "https://t.me/astakhovBohdan",
    iconName: "Send",
    color: "#0088cc",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/pippsza/",
    iconName: "Instagram",
    color: "#C13584",
  },
  // {
  //   name: "Discord",
  //   url: "https://discord.com/invite/pippsza",
  //   iconName: "Discord",
  //   color: "#7289DA",
  // },
];

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
      title: "DDNet Bingo",
      description:
        "Competitive gaming platform with real-time multiplayer for DDNet community. Features bingo and race game modes, live player tracking, and Teeworlds server integration.",
      tags: ["Next.js", "Payload CMS", "MongoDB", "Docker", "TypeScript", "WebSocket"],
      link: "https://bingo.pippsza.dev",
      github: "https://github.com/pippsza/ddnet",
      image: "/projects/ddnet.jpg",
    },
    {
      title: "Steam Diploma",
      description:
        "Steam-inspired project built for a friend with AI integration. Features intelligent content recommendations and modern UI design.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "MongoDB"],
      link: "https://sen.pippsza.dev",
      github: "https://github.com/pippsza/steam-diploma",
      image: "/projects/steam.jpg",
    },
    {
      title: "Homework Bot",
      description:
        "AI-powered Telegram bot that helps students with homework. Uses artificial intelligence to analyze tasks and provide helpful explanations.",
      tags: ["TypeScript", "Telegram Bot API", "AI", "Node.js"],
      github: "https://github.com/pippsza/homeworkBot",
      image: "/projects/homework.jpg",
    },
    {
      title: "Wishlist Bot",
      description:
        "Telegram bot for creating and managing wishlists. Share your wishes with friends and family, track gift ideas.",
      tags: ["TypeScript", "Telegram Bot API", "Node.js", "MongoDB"],
      link: "https://t.me/w_ishlist_bot",
      github: "https://github.com/pippsza/telegram-wishlist",
      image: "/projects/wishlist.jpg",
    },
  ],
  uk: [
    {
      title: "DDNet Bingo",
      description:
        "Ігрова платформа з мультиплеєром в реальному часі для спільноти DDNet. Ігрові режими бінго та гонки, відстеження гравців та інтеграція з серверами Teeworlds.",
      tags: ["Next.js", "Payload CMS", "MongoDB", "Docker", "TypeScript", "WebSocket"],
      link: "https://bingo.pippsza.dev",
      github: "https://github.com/pippsza/ddnet",
      image: "/projects/ddnet.jpg",
    },
    {
      title: "Steam Diploma",
      description:
        "Проєкт натхненний Steam, створений для друга з інтеграцією ШІ. Інтелектуальні рекомендації контенту та сучасний UI дизайн.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "MongoDB"],
      link: "https://sen.pippsza.dev",
      github: "https://github.com/pippsza/steam-diploma",
      image: "/projects/steam.jpg",
    },
    {
      title: "Homework Bot",
      description:
        "Telegram бот на основі ШІ, що допомагає студентам з домашніми завданнями. Використовує штучний інтелект для аналізу завдань та надання пояснень.",
      tags: ["TypeScript", "Telegram Bot API", "AI", "Node.js"],
      github: "https://github.com/pippsza/homeworkBot",
      image: "/projects/homework.jpg",
    },
    {
      title: "Wishlist Bot",
      description:
        "Telegram бот для створення та управління списками бажань. Діліться бажаннями з друзями та родиною, відстежуйте ідеї подарунків.",
      tags: ["TypeScript", "Telegram Bot API", "Node.js", "MongoDB"],
      link: "https://t.me/w_ishlist_bot",
      github: "https://github.com/pippsza/telegram-wishlist",
      image: "/projects/wishlist.jpg",
    },
  ],
  ru: [
    {
      title: "DDNet Bingo",
      description:
        "Игровая платформа с мультиплеером в реальном времени для сообщества DDNet. Игровые режимы бинго и гонки, отслеживание игроков и интеграция с серверами Teeworlds.",
      tags: ["Next.js", "Payload CMS", "MongoDB", "Docker", "TypeScript", "WebSocket"],
      link: "https://bingo.pippsza.dev",
      github: "https://github.com/pippsza/ddnet",
      image: "/projects/ddnet.jpg",
    },
    {
      title: "Steam Diploma",
      description:
        "Проект вдохновлённый Steam, созданный для друга с интеграцией ИИ. Интеллектуальные рекомендации контента и современный UI дизайн.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "MongoDB"],
      link: "https://sen.pippsza.dev",
      github: "https://github.com/pippsza/steam-diploma",
      image: "/projects/steam.jpg",
    },
    {
      title: "Homework Bot",
      description:
        "Telegram бот на основе ИИ, помогающий студентам с домашними заданиями. Использует искусственный интеллект для анализа задач и предоставления объяснений.",
      tags: ["TypeScript", "Telegram Bot API", "AI", "Node.js"],
      github: "https://github.com/pippsza/homeworkBot",
      image: "/projects/homework.jpg",
    },
    {
      title: "Wishlist Bot",
      description:
        "Telegram бот для создания и управления списками желаний. Делитесь желаниями с друзьями и семьёй, отслеживайте идеи подарков.",
      tags: ["TypeScript", "Telegram Bot API", "Node.js", "MongoDB"],
      link: "https://t.me/w_ishlist_bot",
      github: "https://github.com/pippsza/telegram-wishlist",
      image: "/projects/wishlist.jpg",
    },
  ],
};

// Skills categorized
export const skills = {
  Frontend: [
    { name: "JavaScript", iconName: "FileJson" },
    { name: "TypeScript", iconName: "Code2" },
    { name: "React", iconName: "Atom" },
    { name: "Next.js", iconName: "Layers" },
    { name: "React Native", iconName: "Smartphone" },
    { name: "Tailwind CSS", iconName: "Palette" },
    { name: "Preact", iconName: "Zap" },
  ],
  Backend: [
    { name: "Node.js", iconName: "Server" },
    { name: "Express.js", iconName: "Zap" },
    { name: "Python", iconName: "Code2" },
    { name: "Telegram Bot", iconName: "Bot" },
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
    { name: "Figma", iconName: "Figma" },
  ],
};

// DevOps pipeline stages - using yellow accent color
export const devOpsPipeline = [
  {
    name: "Push Code",
    tool: "GitHub",
    iconName: "Github",
  },
  {
    name: "CI/CD",
    tool: "GitHub Actions",
    iconName: "GitBranch",
  },
  {
    name: "Containerize",
    tool: "Docker",
    iconName: "Container",
  },
  {
    name: "Registry",
    tool: "Docker Hub",
    iconName: "Package",
  },
  {
    name: "Deploy",
    tool: "VPS",
    iconName: "Cloud",
  },
];

// Work experience
export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experience: Record<Locale, Experience[]> = {
  en: [
    {
      company: "Cyber Pioneers inc.",
      position: "Full Stack Developer",
      period: "2025 - Present",
      location: "Remote",
      description:
        "Developing and maintaining web applications using modern technologies. Building scalable APIs and implementing responsive user interfaces.",
      technologies: [
        "Next.js",

        "TypeScript",
        "MongoDB",
        "Payload CMS",
        "Docker",
      ],
    },
    // Add more experience entries here
  ],
  uk: [
    {
      company: "Cyber Pioneers inc.",
      position: "Full Stack Розробник",
      period: "2025 - Теперішній час",
      location: "Віддалено",
      description:
        "Розробка та підтримка веб-додатків з використанням сучасних технологій. Створення масштабованих API та реалізація адаптивних інтерфейсів.",
      technologies: [
        "Next.js",

        "TypeScript",
        "MongoDB",
        "Payload CMS",
        "Docker",
      ],
    },
    // Додайте більше записів досвіду тут
  ],
  ru: [
    {
      company: "Cyber Pioneers inc.",
      position: "Full Stack Разработчик",
      period: "2025 - Настоящее время",
      location: "Удаленно",
      description:
        "Разработка и поддержка веб-приложений с использованием современных технологий. Создание масштабируемых API и реализация адаптивных интерфейсов.",
      technologies: [
        "Next.js",

        "TypeScript",
        "MongoDB",
        "Payload CMS",
        "Docker",
      ],
    },
  ],
};

// Dictionary for UI labels
export const dictionary: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    experience: "Experience",
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

    // Experience Section
    experienceTitle: "Work Experience",
    experienceDescription: "My professional journey",

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
    experience: "Досвід",
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

    // Experience Section
    experienceTitle: "Досвід роботи",
    experienceDescription: "Мій професійний шлях",

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
    experience: "Опыт",
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

    // Experience Section
    experienceTitle: "Опыт работы",
    experienceDescription: "Мой профессиональный путь",

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
