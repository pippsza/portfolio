// Builds the CV PDFs in public/cv from the texts below (EN, UK, RU).
// Run: npm run cv. Needs Google Chrome (or set CHROME to a Chromium binary).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, copyFileSync, existsSync, readFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'public/cv');

const contacts = {
  phone: '+380 98 660 1604',
  email: 'bastahov16@gmail.com',
  site: 'pippsza.dev',
  github: 'github.com/pippsza',
  linkedin: 'linkedin.com/in/bohdan-astakhov',
  linkedinUrl: 'https://www.linkedin.com/in/bohdan-astakhov-36a95a349/',
};

const versions = {
  EN: {
    lang: 'en',
    name: 'Bohdan Astakhov',
    role: 'Full-stack developer, Next.js and Payload CMS',
    city: 'Kharkiv, Ukraine',
    summary:
      'Full-stack developer with 2 years of experience, including freelance, on Next.js, Payload CMS and TypeScript: 20+ Payload projects and 3 000+ commits. I build open-source Payload plugins and SaaS features from UI to deployment: Stripe billing, AI integrations, CI/CD.',
    titles: { experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', languages: 'Languages' },
    jobs: [
      {
        company: '10x Media GmbH',
        url: 'https://10xmedia.de',
        when: 'Aug 2026 – now, part-time, remote',
        position: 'Full Stack Developer',
        bullets: [
          'Contributed to 8 open-source Payload CMS plugins (MIT, published on npm) with 13 merged pull requests: audit logs, record deduplication, user impersonation, analytics, background jobs.',
          'Build client projects on Payload and Next.js: admin panels, custom views, access control, integrations with external APIs.',
        ],
      },
      {
        company: 'Cyber Pioneers Inc.',
        url: 'https://cyberpioneersinc.com',
        when: 'Jul 2025 – now, part-time, remote',
        position: 'Full Stack Developer',
        bullets: [
          "Shipped product features end-to-end across the company's SaaS products, owning UI, API, schema and deployment.",
          'Built plan-gated Stripe subscription flows powering paid tiers.',
          'Integrated AI features through the Vercel AI SDK (OpenAI, Anthropic, ElevenLabs): agent evaluations, content generation, voice synthesis.',
          'Added Qdrant-backed semantic search, replacing keyword matching for AI-driven recommendations.',
          'Own production deployment across several VPS: Docker, Nginx, GitHub Actions CI/CD.',
          'Take part in code reviews, scope features with the PM, help onboard new developers.',
        ],
      },
    ],
    projects: [
      ['DDNet Guesser', 'https://guesser.pippsza.dev', 'GeoGuessr-style game on DDNet maps: guess the map and the spot from a piece of it. Maps render in the browser from the original .map files. Solo, daily challenge, multiplayer rooms. Next.js 16, SQLite.'],
      ['DDNet Bingo', 'https://bingo.pippsza.dev', 'Bingo and race platform with a companion Telegram bot for the DDNet community. Each match runs on its own game server. Next.js, Payload CMS, Playwright e2e.'],
      ['Alla Studio', 'https://allastudio.com', "Production website for a beauty salon, built to the client's design: the first full version shipped in two weeks. Content managed in Payload CMS with role-based access, animated Three.js backdrop."],
    ],
    skills: [
      ['Frontend', 'TypeScript, JavaScript, React, Next.js, Tailwind CSS, shadcn/Radix, Zustand'],
      ['Backend', 'Node.js, Payload CMS, MongoDB, PostgreSQL, Stripe, NextAuth'],
      ['AI', 'Vercel AI SDK, OpenAI, Anthropic, Qdrant'],
      ['DevOps and testing', 'Docker, Nginx, GitHub Actions, Linux, Vitest, Playwright'],
    ],
    education: [
      ['Kharkiv Polytechnic Institute (KPI)', '2024 – 2028', "Bachelor's, computer science, in progress"],
      ['GoIT', '2024 – 2025', 'Full-stack developer, cybersecurity'],
    ],
    spoken: 'English B2, Ukrainian native, Russian native',
  },
  UK: {
    lang: 'uk',
    name: 'Богдан Астахов',
    role: 'Full-stack розробник, Next.js і Payload CMS',
    city: 'Харків, Україна',
    summary:
      'Full-stack розробник, 2 роки досвіду разом із фрилансом на Next.js, Payload CMS і TypeScript: 20+ проєктів на Payload і понад 3 000 комітів. Пишу плагіни для Payload з відкритим кодом і роблю SaaS-функції від інтерфейсу до деплою: оплата через Stripe, AI-інтеграції, CI/CD.',
    titles: { experience: 'Досвід', projects: 'Проєкти', skills: 'Навички', education: 'Освіта', languages: 'Мови' },
    jobs: [
      {
        company: '10x Media GmbH',
        url: 'https://10xmedia.de',
        when: 'Серп 2026 – дотепер, part-time, віддалено',
        position: 'Full Stack Developer',
        bullets: [
          'Зробив внесок у 8 плагінів для Payload CMS з відкритим кодом (MIT, опубліковані в npm), 13 змерджених pull request: журнал змін, пошук дублікатів, вхід від імені користувача, аналітика, фонові задачі.',
          'Роблю клієнтські проєкти на Payload і Next.js: адмінки, власні екрани, права доступу, інтеграції із зовнішніми API.',
        ],
      },
      {
        company: 'Cyber Pioneers Inc.',
        url: 'https://cyberpioneersinc.com',
        when: 'Лип 2025 – дотепер, part-time, віддалено',
        position: 'Full Stack Developer',
        bullets: [
          'Робив продуктові фічі end-to-end у SaaS-продуктах компанії: UI, API, схема даних і деплой.',
          'Зробив підписки на Stripe з доступом за тарифом для платних планів.',
          'Інтегрував AI-функції через Vercel AI SDK (OpenAI, Anthropic, ElevenLabs): оцінювання агентів, генерація контенту, синтез голосу.',
          'Додав семантичний пошук на Qdrant замість пошуку за ключовими словами для AI-рекомендацій.',
          'Відповідаю за production-деплой на кількох VPS: Docker, Nginx, CI/CD на GitHub Actions.',
          "Беру участь у код-рев'ю, декомпозую фічі з PM, допомагаю новим розробникам увійти в роботу.",
        ],
      },
    ],
    projects: [
      ['DDNet Guesser', 'https://guesser.pippsza.dev', 'Гра в стилі GeoGuessr по картах DDNet: вгадай карту і місце на ній за шматком. Карти малюються в браузері з файлів .map. Соло, щоденне завдання, мультиплеєр. Next.js 16, SQLite.'],
      ['DDNet Bingo', 'https://bingo.pippsza.dev', 'Платформа для бінго й гонок із Telegram-ботом для спільноти DDNet. Кожен матч іде на окремому ігровому сервері. Next.js, Payload CMS, e2e на Playwright.'],
      ['Alla Studio', 'https://allastudio.com', 'Production-сайт салону краси за дизайном клієнта: першу повну версію зробив за два тижні. Контент у Payload CMS з рольовим доступом, анімований фон на Three.js.'],
    ],
    skills: [
      ['Frontend', 'TypeScript, JavaScript, React, Next.js, Tailwind CSS, shadcn/Radix, Zustand'],
      ['Backend', 'Node.js, Payload CMS, MongoDB, PostgreSQL, Stripe, NextAuth'],
      ['AI', 'Vercel AI SDK, OpenAI, Anthropic, Qdrant'],
      ['DevOps і тести', 'Docker, Nginx, GitHub Actions, Linux, Vitest, Playwright'],
    ],
    education: [
      ['НТУ «ХПІ»', '2024 – 2028', "Бакалавр, комп'ютерні науки, навчаюся"],
      ['GoIT', '2024 – 2025', 'Full-stack розробник, кібербезпека'],
    ],
    spoken: 'Англійська B2, українська рідна, російська рідна',
  },
  RU: {
    lang: 'ru',
    name: 'Богдан Астахов',
    role: 'Full-stack разработчик, Next.js и Payload CMS',
    city: 'Харьков, Украина',
    summary:
      'Full-stack разработчик, 2 года опыта вместе с фрилансом на Next.js, Payload CMS и TypeScript: 20+ проектов на Payload и больше 3 000 коммитов. Пишу плагины для Payload с открытым кодом и делаю SaaS-функции от интерфейса до деплоя: оплата через Stripe, AI-интеграции, CI/CD.',
    titles: { experience: 'Опыт', projects: 'Проекты', skills: 'Навыки', education: 'Образование', languages: 'Языки' },
    jobs: [
      {
        company: '10x Media GmbH',
        url: 'https://10xmedia.de',
        when: 'Авг 2026 – сейчас, part-time, удалённо',
        position: 'Full Stack Developer',
        bullets: [
          'Внёс вклад в 8 плагинов для Payload CMS с открытым кодом (MIT, опубликованы в npm), 13 смерженных pull request: журнал изменений, поиск дублей, вход от имени пользователя, аналитика, фоновые задачи.',
          'Делаю клиентские проекты на Payload и Next.js: админки, свои экраны, права доступа, интеграции со внешними API.',
        ],
      },
      {
        company: 'Cyber Pioneers Inc.',
        url: 'https://cyberpioneersinc.com',
        when: 'Июл 2025 – сейчас, part-time, удалённо',
        position: 'Full Stack Developer',
        bullets: [
          'Делал продуктовые фичи end-to-end в SaaS-продуктах компании: UI, API, схема данных и деплой.',
          'Сделал подписки на Stripe с доступом по тарифу для платных планов.',
          'Интегрировал AI-функции через Vercel AI SDK (OpenAI, Anthropic, ElevenLabs): оценка агентов, генерация контента, синтез голоса.',
          'Добавил семантический поиск на Qdrant вместо поиска по ключевым словам для AI-рекомендаций.',
          'Отвечаю за production-деплой на нескольких VPS: Docker, Nginx, CI/CD на GitHub Actions.',
          'Участвую в код-ревью, декомпозирую фичи с PM, помогаю новым разработчикам войти в работу.',
        ],
      },
    ],
    projects: [
      ['DDNet Guesser', 'https://guesser.pippsza.dev', 'Игра в стиле GeoGuessr по картам DDNet: угадай карту и место на ней по куску. Карты рисуются в браузере из файлов .map. Соло, ежедневное задание, мультиплеер. Next.js 16, SQLite.'],
      ['DDNet Bingo', 'https://bingo.pippsza.dev', 'Платформа для бинго и гонок с Telegram-ботом для сообщества DDNet. Каждый матч идёт на отдельном игровом сервере. Next.js, Payload CMS, e2e на Playwright.'],
      ['Alla Studio', 'https://allastudio.com', 'Production-сайт салона красоты по дизайну клиента: первую полную версию сделал за две недели. Контент в Payload CMS с ролевым доступом, анимированный фон на Three.js.'],
    ],
    skills: [
      ['Frontend', 'TypeScript, JavaScript, React, Next.js, Tailwind CSS, shadcn/Radix, Zustand'],
      ['Backend', 'Node.js, Payload CMS, MongoDB, PostgreSQL, Stripe, NextAuth'],
      ['AI', 'Vercel AI SDK, OpenAI, Anthropic, Qdrant'],
      ['DevOps и тесты', 'Docker, Nginx, GitHub Actions, Linux, Vitest, Playwright'],
    ],
    education: [
      ['НТУ «ХПИ»', '2024 – 2028', 'Бакалавр, компьютерные науки, учусь'],
      ['GoIT', '2024 – 2025', 'Full-stack разработчик, кибербезопасность'],
    ],
    spoken: 'Английский B2, украинский родной, русский родной',
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const host = (url) => url.replace(/^https?:\/\//, '');

// Static font files: variable fonts end up as Type 3 glyphs in Chrome PDFs, which some ATS parsers read poorly.
const cyrillic = 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116';
const face = (family, file, weight) =>
  ['latin', 'cyrillic']
    .map((sub) => `@font-face { font-family: '${family}'; font-weight: ${weight}; src: url('${file}-${sub}.woff2') format('woff2');${sub === 'cyrillic' ? ` unicode-range: ${cyrillic};` : ''} }`)
    .join('\n');
const fonts = [face('CV Serif', 'serif-400', 400), face('CV Serif', 'serif-500', 500), face('CV Serif', 'serif-600', 600), face('CV Sans', 'sans-400', 400)].join('\n');

const css = `
@page { size: A4; margin: 0; }
* { box-sizing: border-box; }
body { margin: 0; font: 400 9.4pt/1.45 'CV Serif', Georgia, serif; color: #1f1f1f; }
.page { width: 210mm; padding: 12mm 16mm 8mm; }
.ui { font: 400 8.4pt/1.45 'CV Sans', sans-serif; color: #777; }
a { color: inherit; text-decoration: underline; text-decoration-color: #c8c8c8; text-underline-offset: 2px; }
h1 { font-weight: 500; font-size: 25pt; line-height: 1.05; margin: 0 0 1.5mm; letter-spacing: -.01em; }
.role { font-size: 12pt; color: #444; margin: 0 0 3.5mm; }
.contacts { display: grid; grid-template-columns: repeat(3, auto); justify-content: start; column-gap: 7mm; row-gap: .6mm; }
.contacts a { color: #555; }
.summary { margin: 4mm 0 0; color: #333; }
h2 { font-weight: 600; font-size: 12pt; margin: 4.5mm 0 1.8mm; padding-bottom: 1.2mm; border-bottom: .3mm solid #e6e6e6; }
.job { margin-bottom: 2.4mm; }
.row { display: flex; justify-content: space-between; align-items: baseline; gap: 4mm; }
.row b { font-weight: 600; }
.row .ui { white-space: nowrap; }
ul { margin: 1mm 0 0; padding-left: 4.2mm; }
li { margin: .3mm 0; }
li::marker { color: #999; }
.proj { margin-bottom: 2mm; }
.proj p { margin: .4mm 0 0; color: #333; }
.skills div { display: grid; grid-template-columns: 34mm 1fr; margin: .5mm 0; }
.skills b { font-weight: 600; }
.edu .row { margin-bottom: .8mm; }
`;

function render(v) {
  const t = v.titles;
  return `<!doctype html><html lang="${v.lang}"><head><meta charset="utf-8"><title>${esc(v.name)} CV</title>
<style>${fonts}\n${css}</style></head><body><div class="page">
<header>
  <h1>${esc(v.name)}</h1>
  <div class="role">${esc(v.role)}</div>
  <div class="contacts ui">
    <span>${esc(v.city)}</span><a href="mailto:${contacts.email}">${contacts.email}</a><a href="https://${contacts.site}">${contacts.site}</a>
    <span>${contacts.phone}</span><a href="https://${contacts.github}">${contacts.github}</a><a href="${contacts.linkedinUrl}">${contacts.linkedin}</a>
  </div>
</header>
<p class="summary">${esc(v.summary)}</p>
<h2>${t.experience}</h2>
${v.jobs.map((j) => `<div class="job"><div class="row"><b>${esc(j.position)}, <a href="${j.url}">${esc(j.company)}</a></b><span class="ui">${esc(j.when)}</span></div>
<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>`).join('\n')}
<h2>${t.projects}</h2>
${v.projects.map(([name, url, text]) => `<div class="proj"><div class="row"><b>${esc(name)}</b><a class="ui" href="${url}">${host(url)}</a></div><p>${esc(text)}</p></div>`).join('\n')}
<h2>${t.skills}</h2>
<div class="skills">${v.skills.map(([k, val]) => `<div><b>${esc(k)}</b><span>${esc(val)}</span></div>`).join('')}</div>
<h2>${t.education}</h2>
<div class="edu">${v.education.map(([school, years, what]) => `<div class="row"><span><b>${esc(school)}</b>, ${esc(what)}</span><span class="ui">${years}</span></div>`).join('')}</div>
<h2>${t.languages}</h2>
<div>${esc(v.spoken)}</div>
</div></body></html>`;
}

const chrome =
  process.env.CHROME ??
  ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium'].find(existsSync);
if (!chrome) throw new Error('Chrome not found: set CHROME to a Chrome or Chromium binary');

const work = mkdtempSync(join(tmpdir(), 'cv-'));
for (const file of readdirSync(join(root, 'scripts/cv-fonts'))) copyFileSync(join(root, 'scripts/cv-fonts', file), join(work, file));

for (const key of Object.keys(versions)) {
  const file = `Bohdan_Astakhov_CV_${key}`;
  const html = join(work, `${file}.html`);
  writeFileSync(html, render(versions[key]));
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    `--user-data-dir=${join(work, 'profile')}`,
    `--print-to-pdf=${join(out, `${file}.pdf`)}`,
    `file://${html}`,
  ], { stdio: 'ignore' });
  const pages = readFileSync(join(out, `${file}.pdf`), 'latin1').match(/\/Type\s*\/Page[^s]/g)?.length ?? 0;
  if (pages !== 1) {
    console.error(`${file}.pdf has ${pages} pages, expected 1: shorten the text`);
    process.exitCode = 1;
  }
  console.log(`built ${file}.pdf`);
}
