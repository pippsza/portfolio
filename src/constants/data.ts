export type Locale = "en" | "uk" | "ru";

export const locales: Locale[] = ["en", "uk", "ru"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
  ru: "RU",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/pippsza" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bohdan-astakhov-36a95a349/" },
  { name: "Telegram", url: "https://t.me/astakhovBohdan" },
  { name: "Email", url: "mailto:bastahov16@gmail.com" },
  { name: "Instagram", url: "https://www.instagram.com/pippsza/" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

const guesser = {
  title: "DDNet Guesser",
  tags: ["Next.js 16", "SQLite", "Canvas"],
  link: "https://guesser.pippsza.dev",
  image: "/projects/guesser.jpg",
};
const plugins = {
  tags: ["Payload", "TypeScript", "React"],
  github: "https://github.com/10x-media/payload-plugins",
  image: "/projects/plugins.jpg",
};
const alla = {
  title: "Alla Studio",
  tags: ["Next.js", "Payload", "Three.js"],
  link: "https://allastudio.com",
  image: "/projects/alla.jpg",
};
const bingo = {
  title: "DDNet Bingo",
  tags: ["Next.js", "Payload", "WebSocket"],
  link: "https://bingo.pippsza.dev",
  github: "https://github.com/pippsza/ddnet",
  image: "/projects/bingo.jpg",
};

export const projects: Record<Locale, Project[]> = {
  en: [
    { ...guesser, description: "GeoGuessr for DDNet maps, rendered in the browser from the original .map files." },
    { ...plugins, title: "Payload CMS plugins", description: "Open-source Payload plugins: audit logs, impersonation, analytics and more." },
    { ...alla, description: "Beauty salon site built to the client's design, content in Payload CMS." },
    { ...bingo, description: "Bingo and race modes for DDNet with live player tracking." },
  ],
  uk: [
    { ...guesser, description: "GeoGuessr по картах DDNet, які малюються в браузері з оригінальних файлів .map." },
    { ...plugins, title: "Плагіни для Payload CMS", description: "Плагіни для Payload з відкритим кодом: журнал змін, вхід від імені користувача, аналітика та інші." },
    { ...alla, description: "Сайт салону краси за дизайном клієнта, контент у Payload CMS." },
    { ...bingo, description: "Режими бінго й гонок для DDNet з відстеженням гравців наживо." },
  ],
  ru: [
    { ...guesser, description: "GeoGuessr по картам DDNet, которые рисуются в браузере из оригинальных файлов .map." },
    { ...plugins, title: "Плагины для Payload CMS", description: "Плагины для Payload с открытым кодом: журнал изменений, вход от имени пользователя, аналитика и другие." },
    { ...alla, description: "Сайт салона красоты по дизайну клиента, контент в Payload CMS." },
    { ...bingo, description: "Режимы бинго и гонок для DDNet с отслеживанием игроков вживую." },
  ],
};

export const stack = [
  "TypeScript",
  "Payload CMS",
  "React",
  "MongoDB",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Docker",
  "Stripe",
  "GitHub Actions",
  "Vercel AI SDK",
  "Playwright",
  "PostgreSQL",
];

export interface Experience {
  company: string;
  url: string;
  position: string;
  period: string;
}

export const experience: Record<Locale, Experience[]> = {
  en: [
    { company: "10x Media GmbH", url: "https://10xmedia.de", position: "Full Stack Developer", period: "Aug 2026 – now" },
    { company: "Cyber Pioneers Inc.", url: "https://cyberpioneersinc.com", position: "Full Stack Developer", period: "Jul 2025 – now" },
  ],
  uk: [
    { company: "10x Media GmbH", url: "https://10xmedia.de", position: "Full Stack Developer", period: "Серп 2026 – дотепер" },
    { company: "Cyber Pioneers Inc.", url: "https://cyberpioneersinc.com", position: "Full Stack Developer", period: "Лип 2025 – дотепер" },
  ],
  ru: [
    { company: "10x Media GmbH", url: "https://10xmedia.de", position: "Full Stack Developer", period: "Авг 2026 – сейчас" },
    { company: "Cyber Pioneers Inc.", url: "https://cyberpioneersinc.com", position: "Full Stack Developer", period: "Июл 2025 – сейчас" },
  ],
};

export const cvLinks: Record<Locale, string> = {
  en: "/cv/Bohdan_Astakhov_CV_EN.pdf",
  uk: "/cv/Bohdan_Astakhov_CV_UK.pdf",
  ru: "/cv/Bohdan_Astakhov_CV_RU.pdf",
};

const pluginsUrl = "https://github.com/10x-media/payload-plugins";

// Bio paragraphs are trusted HTML: they are rendered with set:html.
export const dictionary: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    bio: string;
    short: string;
    long: string;
    bioShort: string[];
    bioLong: string[];
    projects: string;
    stack: string;
    work: string;
    openSite: string;
    code: string;
    cv: string;
    notFound: string;
    notFoundText: string;
    home: string;
  }
> = {
  en: {
    metaTitle: "Bohdan Astakhov (@pippsza) | Full Stack Developer",
    metaDescription:
      "Full-stack developer from Kharkiv. Open-source Payload CMS plugins at 10x Media, SaaS products at Cyber Pioneers, games for the DDNet community.",
    bio: "Bio",
    short: "Default",
    long: "Long",
    bioShort: [
      `I'm Bohdan, a full-stack developer from Kharkiv and a computer science student at KPI. I build open-source plugins for Payload CMS at <a href="${pluginsUrl}">10x Media</a> and ship SaaS products at <a href="#work">Cyber Pioneers</a>: Stripe billing, AI features, vector search and the servers they run on.`,
      `Most of my work is Next.js, TypeScript and Payload, so far in 20+ projects. In my free time I make games for the <a href="https://ddnet.org">DDNet</a> community.`,
    ],
    bioLong: [
      `I'm Bohdan, a full-stack developer from Kharkiv, Ukraine. I got into programming through Python, writing small bots for myself. In 2024 I took the GoIT full-stack course and started studying computer science at Kharkiv Polytechnic (KPI).`,
      `Before my first full-time role I took freelance projects. In July 2025 I joined <a href="#work">Cyber Pioneers</a>, where I ship features across a suite of SaaS products: plan-gated Stripe subscriptions, AI features with the Vercel AI SDK, Qdrant vector search, and the Docker and Nginx servers behind them. I also help new developers get started.`,
      `Since August 2026 I also work at <a href="${pluginsUrl}">10x Media</a>, where I build open-source Payload CMS plugins and client projects. Across both jobs that's 20+ Payload projects and more than 3 000 commits.`,
      `Outside work I build games for <a href="https://ddnet.org">DDNet</a>, a multiplayer platformer I've played for years: a bingo and race platform, and a GeoGuessr-style game on its maps.`,
    ],
    projects: "Projects",
    stack: "Stack",
    work: "Work",
    openSite: "Open the site",
    code: "Code on GitHub",
    cv: "CV (PDF)",
    notFound: "Page not found",
    notFoundText: "There is nothing at this address.",
    home: "Go to the main page",
  },
  uk: {
    metaTitle: "Богдан Астахов (@pippsza) | Full Stack Developer",
    metaDescription:
      "Full-stack розробник із Харкова. Плагіни для Payload CMS з відкритим кодом у 10x Media, SaaS-продукти в Cyber Pioneers, ігри для спільноти DDNet.",
    bio: "Про мене",
    short: "Коротко",
    long: "Детально",
    bioShort: [
      `Я Богдан, full-stack розробник із Харкова і студент комп'ютерних наук у ХПІ. Пишу плагіни з відкритим кодом для Payload CMS у <a href="${pluginsUrl}">10x Media</a> і роблю SaaS-продукти в <a href="#work">Cyber Pioneers</a>: оплату через Stripe, AI-функції, векторний пошук і сервери, на яких усе це працює.`,
      `Здебільшого працюю з Next.js, TypeScript і Payload, уже у 20+ проєктах. У вільний час роблю ігри для спільноти <a href="https://ddnet.org">DDNet</a>.`,
    ],
    bioLong: [
      `Я Богдан, full-stack розробник із Харкова. У програмування прийшов через Python: писав для себе прості боти. У 2024 році пройшов full-stack курс GoIT і вступив на комп'ютерні науки в Харківський політех (ХПІ).`,
      `До першої постійної роботи брав фриланс-проєкти. У липні 2025 прийшов у <a href="#work">Cyber Pioneers</a>, де роблю фічі для SaaS-продуктів компанії: підписки на Stripe з доступом за тарифом, AI-функції на Vercel AI SDK, векторний пошук на Qdrant і сервери на Docker та Nginx. Також допомагаю новим розробникам увійти в роботу.`,
      `З серпня 2026 також працюю в <a href="${pluginsUrl}">10x Media</a>: пишу плагіни для Payload CMS з відкритим кодом і клієнтські проєкти. Разом це 20+ проєктів на Payload і понад 3 000 комітів.`,
      `Поза роботою роблю ігри для <a href="https://ddnet.org">DDNet</a>, мультиплеєрного платформера, у який граю роками: платформу для бінго й гонок і гру в стилі GeoGuessr на його картах.`,
    ],
    projects: "Проєкти",
    stack: "Стек",
    work: "Досвід",
    openSite: "Відкрити сайт",
    code: "Код на GitHub",
    cv: "Резюме (PDF)",
    notFound: "Сторінку не знайдено",
    notFoundText: "За цією адресою нічого немає.",
    home: "На головну",
  },
  ru: {
    metaTitle: "Богдан Астахов (@pippsza) | Full Stack Developer",
    metaDescription:
      "Full-stack разработчик из Харькова. Плагины для Payload CMS с открытым кодом в 10x Media, SaaS-продукты в Cyber Pioneers, игры для сообщества DDNet.",
    bio: "Обо мне",
    short: "Коротко",
    long: "Подробно",
    bioShort: [
      `Я Богдан, full-stack разработчик из Харькова и студент компьютерных наук в ХПИ. Пишу плагины с открытым кодом для Payload CMS в <a href="${pluginsUrl}">10x Media</a> и делаю SaaS-продукты в <a href="#work">Cyber Pioneers</a>: оплату через Stripe, AI-функции, векторный поиск и серверы, на которых всё это работает.`,
      `В основном работаю с Next.js, TypeScript и Payload, уже в 20+ проектах. В свободное время делаю игры для сообщества <a href="https://ddnet.org">DDNet</a>.`,
    ],
    bioLong: [
      `Я Богдан, full-stack разработчик из Харькова. В программирование пришёл через Python: писал для себя простых ботов. В 2024 году прошёл full-stack курс GoIT и поступил на компьютерные науки в Харьковский политех (ХПИ).`,
      `До первой постоянной работы брал фриланс-проекты. В июле 2025 пришёл в <a href="#work">Cyber Pioneers</a>, где делаю фичи для SaaS-продуктов компании: подписки на Stripe с доступом по тарифу, AI-функции на Vercel AI SDK, векторный поиск на Qdrant и серверы на Docker и Nginx. Также помогаю новым разработчикам войти в работу.`,
      `С августа 2026 также работаю в <a href="${pluginsUrl}">10x Media</a>: пишу плагины для Payload CMS с открытым кодом и клиентские проекты. Вместе это 20+ проектов на Payload и больше 3 000 коммитов.`,
      `Вне работы делаю игры для <a href="https://ddnet.org">DDNet</a>, мультиплеерного платформера, в который играю годами: платформу для бинго и гонок и игру в стиле GeoGuessr на его картах.`,
    ],
    projects: "Проекты",
    stack: "Стек",
    work: "Опыт",
    openSite: "Открыть сайт",
    code: "Код на GitHub",
    cv: "Резюме (PDF)",
    notFound: "Страница не найдена",
    notFoundText: "По этому адресу ничего нет.",
    home: "На главную",
  },
};
