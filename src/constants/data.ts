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
      title: "TG Claude Bot",
      description:
        "Telegram bot bridging chats to Claude Code on a home PC — an active personal project. Event-driven (spawns claude --print --resume per message), SQLite session store, owner-only access. Lets me drive coding sessions across projects right from the phone.",
      tags: ["Python", "Telegram Bot API", "Claude Code", "SQLite", "WIP"],
      image: "/projects/tg-claude.jpg",
    },
    {
      title: "TGStats",
      description:
        "Local-first Telegram export analyzer. Drop in a result.json or DataExport_* folder — get heatmaps, top words/emoji, achievements, and shareable 1080×1920 story cards. Parsing runs entirely in-browser, files never leave your machine.",
      tags: ["Next.js 16", "TypeScript", "Tailwind 4", "Framer Motion", "Docker"],
      link: "https://tg.pippsza.dev",
      image: "/projects/tgstats.jpg",
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
        "Simple but complete Telegram bot for creating and managing wishlists. Share wishes with friends and family, track gift ideas.",
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
      title: "TG Claude Bot",
      description:
        "Telegram-бот, який з'єднує чати з Claude Code на домашньому ПК — активний особистий проєкт. Event-driven (claude --print --resume на кожне повідомлення), SQLite-сховище сесій, owner-only доступ. Дозволяє вести coding-сесії в різних проєктах прямо з телефона.",
      tags: ["Python", "Telegram Bot API", "Claude Code", "SQLite", "WIP"],
      image: "/projects/tg-claude.jpg",
    },
    {
      title: "TGStats",
      description:
        "Local-first аналізатор Telegram-експортів. Перетягни result.json або папку DataExport_* — отримай heatmaps, топ слів/емодзі, ачивки та shareable story-карточки 1080×1920. Парсинг повністю у браузері — файли нікуди не йдуть.",
      tags: ["Next.js 16", "TypeScript", "Tailwind 4", "Framer Motion", "Docker"],
      link: "https://tg.pippsza.dev",
      image: "/projects/tgstats.jpg",
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
        "Простий, але повністю готовий Telegram-бот для створення та управління списками бажань. Діліться з друзями та родиною, відстежуйте ідеї подарунків.",
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
      title: "TG Claude Bot",
      description:
        "Telegram-бот, соединяющий чаты с Claude Code на домашнем ПК — активный личный проект. Event-driven (claude --print --resume на каждое сообщение), SQLite-хранилище сессий, owner-only доступ. Позволяет вести coding-сессии в разных проектах прямо с телефона.",
      tags: ["Python", "Telegram Bot API", "Claude Code", "SQLite", "WIP"],
      image: "/projects/tg-claude.jpg",
    },
    {
      title: "TGStats",
      description:
        "Local-first анализатор Telegram-экспортов. Перетащил result.json или папку DataExport_* — получил heatmaps, топ слов/эмодзи, ачивки и shareable story-карточки 1080×1920. Парсинг полностью в браузере — файлы никуда не уходят.",
      tags: ["Next.js 16", "TypeScript", "Tailwind 4", "Framer Motion", "Docker"],
      link: "https://tg.pippsza.dev",
      image: "/projects/tgstats.jpg",
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
        "Простой, но полностью готовый Telegram-бот для списков желаний. Делитесь желаниями с друзьями и семьёй, отслеживайте идеи подарков.",
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
    { name: "TypeScript", iconName: "Code2" },
    { name: "JavaScript", iconName: "FileJson" },
    { name: "React", iconName: "Atom" },
    { name: "Next.js", iconName: "Layers" },
    { name: "Tailwind CSS", iconName: "Palette" },
    { name: "shadcn/Radix", iconName: "Component" },
    { name: "React Hook Form + Zod", iconName: "ShieldCheck" },
    { name: "Zustand", iconName: "Boxes" },
    { name: "React Native", iconName: "Smartphone" },
  ],
  Backend: [
    { name: "Node.js", iconName: "Server" },
    { name: "Payload CMS", iconName: "Database" },
    { name: "MongoDB", iconName: "Database" },
    { name: "Mongoose", iconName: "Database" },
    { name: "NextAuth", iconName: "ShieldCheck" },
    { name: "Stripe", iconName: "CreditCard" },
    { name: "REST API", iconName: "Globe" },
    { name: "Telegram Bot", iconName: "Bot" },
    { name: "Express.js", iconName: "Zap" },
    { name: "Python", iconName: "Code2" },
  ],
  "AI & LLM": [
    { name: "Vercel AI SDK", iconName: "Sparkles" },
    { name: "OpenAI", iconName: "Brain" },
    { name: "Anthropic", iconName: "Bot" },
    { name: "Qdrant", iconName: "Network" },
  ],
  "DevOps/Tools": [
    { name: "Docker", iconName: "Container" },
    { name: "GitHub Actions", iconName: "GitBranch" },
    { name: "Nginx", iconName: "Server" },
    { name: "Watchtower", iconName: "RefreshCw" },
    { name: "CI/CD", iconName: "RefreshCw" },
    { name: "Git", iconName: "GitBranch" },
    { name: "Linux", iconName: "Terminal" },
  ],
  Testing: [
    { name: "Vitest", iconName: "FlaskConical" },
    { name: "Playwright", iconName: "Drama" },
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
      company: "Cyber Pioneers Inc.",
      position: "Full Stack Developer",
      period: "Jul 2025 — Present",
      location: "Remote",
      description:
        "Ship production features across the company's SaaS product suite — 700+ commits in 10 months. Built plan-gated Stripe subscriptions, AI features via Vercel AI SDK (OpenAI, Anthropic, ElevenLabs), and vector search with Qdrant. Self-manage 4 VPS (Docker, Nginx, GitHub Actions CI/CD). Mentor 2 junior developers.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Payload CMS",
        "MongoDB",
        "Stripe",
        "Vercel AI SDK",
        "Docker",
        "GitHub Actions",
      ],
    },
  ],
  uk: [
    {
      company: "Cyber Pioneers Inc.",
      position: "Fullstack-розробник",
      period: "Липень 2025 — дотепер",
      location: "Віддалено",
      description:
        "Розробляю production-фічі для SaaS-продуктів компанії — 700+ комітів за 10 місяців. Реалізував plan-gated підписки на Stripe, AI-фічі через Vercel AI SDK (OpenAI, Anthropic, ElevenLabs) та vector search через Qdrant. Самостійно адмініструю 4 VPS (Docker, Nginx, GitHub Actions CI/CD). Менторю 2 junior-розробників.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Payload CMS",
        "MongoDB",
        "Stripe",
        "Vercel AI SDK",
        "Docker",
        "GitHub Actions",
      ],
    },
  ],
  ru: [
    {
      company: "Cyber Pioneers Inc.",
      position: "Full-Stack Разработчик",
      period: "Июль 2025 — настоящее время",
      location: "Удалённо",
      description:
        "Разрабатываю production-фичи для SaaS-продуктов компании — 700+ коммитов за 10 месяцев. Реализовал plan-gated подписки на Stripe, AI-фичи через Vercel AI SDK (OpenAI, Anthropic, ElevenLabs) и vector search через Qdrant. Самостоятельно администрирую 4 VPS (Docker, Nginx, GitHub Actions CI/CD). Менторю 2 junior-разработчиков.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Payload CMS",
        "MongoDB",
        "Stripe",
        "Vercel AI SDK",
        "Docker",
        "GitHub Actions",
      ],
    },
  ],
};

// Stats band — stable, verifiable numbers (no time-relative values that age)
export const stats: Record<Locale, Array<{ value: string; label: string }>> = {
  en: [
    { value: "5+", label: "Production SaaS shipped" },
    { value: "8+", label: "Payload CMS projects" },
    { value: "4", label: "VPS self-managed" },
    { value: "90+", label: "GitHub repositories" },
  ],
  uk: [
    { value: "5+", label: "Production-SaaS випущено" },
    { value: "8+", label: "Payload CMS проєктів" },
    { value: "4", label: "VPS під управлінням" },
    { value: "90+", label: "GitHub репозиторіїв" },
  ],
  ru: [
    { value: "5+", label: "Production-SaaS выпущено" },
    { value: "8+", label: "Payload CMS проектов" },
    { value: "4", label: "VPS под управлением" },
    { value: "90+", label: "GitHub репозиториев" },
  ],
};

// CV / Resume download links — public/cv/*
// RU локаль использует EN-версию как fallback (русской версии пока нет).
export const cvLinks: Record<Locale, string> = {
  en: "/cv/Bohdan_Astakhov_CV_EN.pdf",
  uk: "/cv/Bohdan_Astakhov_CV_UK.pdf",
  ru: "/cv/Bohdan_Astakhov_CV_EN.pdf",
};

// First-page preview images for the Resume section — public/cv/*
export const cvPreviews: Record<Locale, string> = {
  en: "/cv/preview_en.jpg",
  uk: "/cv/preview_uk.jpg",
  ru: "/cv/preview_en.jpg",
};

// Dictionary for UI labels
export const dictionary: Record<Locale, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    resume: "Resume",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",

    // Hero Section
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    heroDescription:
      "Full-stack developer shipping production SaaS with Next.js, Payload CMS and TypeScript — Stripe billing, AI integrations, and the VPS infrastructure it all runs on.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    downloadCV: "Download CV",

    // About Section
    aboutTitle: "About Me",
    aboutDescription:
      "Full-stack developer at Cyber Pioneers, focused on TypeScript, Next.js and Payload CMS. In under a year I've shipped 5+ production SaaS products — plan-gated Stripe billing, AI features via the Vercel AI SDK, and Qdrant vector search — and I run the Docker/Nginx infrastructure behind them. I mentor two junior developers and ship at a high, steady pace.",

    // Resume Section
    resumeTitle: "My Resume",
    resumeDescription:
      "A one-page snapshot of my experience, stack and selected projects.",
    openResume: "Open full PDF",

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
    resume: "Резюме",
    experience: "Досвід",
    projects: "Проєкти",
    skills: "Навички",
    contact: "Контакти",

    // Hero Section
    greeting: "Привіт, я",
    role: "Full Stack Розробник",
    heroDescription:
      "Fullstack-розробник, який доставляє production-SaaS на Next.js, Payload CMS і TypeScript — Stripe-білінг, AI-інтеграції та VPS-інфраструктура, на якій усе це працює.",
    contactMe: "Зв'язатися",
    viewProjects: "Переглянути проєкти",
    downloadCV: "Завантажити CV",

    // About Section
    aboutTitle: "Про мене",
    aboutDescription:
      "Fullstack-розробник у Cyber Pioneers, фокус на TypeScript, Next.js і Payload CMS. Менш ніж за рік випустив 5+ production-SaaS — plan-gated Stripe-білінг, AI-фічі через Vercel AI SDK і vector search на Qdrant — та сам адмініструю Docker/Nginx-інфраструктуру під ними. Менторю двох junior-розробників і тримаю високий стабільний темп.",

    // Resume Section
    resumeTitle: "Моє резюме",
    resumeDescription:
      "Одна сторінка — досвід, стек і обрані проєкти.",
    openResume: "Відкрити повний PDF",

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
    resume: "Резюме",
    experience: "Опыт",
    projects: "Проекты",
    skills: "Навыки",
    contact: "Контакты",

    // Hero Section
    greeting: "Привет, я",
    role: "Full Stack Разработчик",
    heroDescription:
      "Fullstack-разработчик, выкатываю production-SaaS на Next.js, Payload CMS и TypeScript — Stripe-биллинг, AI-интеграции и VPS-инфраструктура, на которой всё это крутится.",
    contactMe: "Связаться",
    viewProjects: "Посмотреть проекты",
    downloadCV: "Скачать CV",

    // About Section
    aboutTitle: "Обо мне",
    aboutDescription:
      "Fullstack-разработчик в Cyber Pioneers, фокус на TypeScript, Next.js и Payload CMS. Меньше чем за год выпустил 5+ production-SaaS — plan-gated Stripe-биллинг, AI-фичи через Vercel AI SDK и vector search на Qdrant — и сам администрирую Docker/Nginx-инфраструктуру под ними. Менторю двух junior-разработчиков и держу высокий стабильный темп.",

    // Resume Section
    resumeTitle: "Моё резюме",
    resumeDescription:
      "Одна страница — опыт, стек и избранные проекты.",
    openResume: "Открыть полный PDF",

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
