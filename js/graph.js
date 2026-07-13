/* ─── Port dot offset from node top (px) ─── */
const PH = 35;

/* ─── Which column each node lives in ─── */
const COL = {
  trigger:  'gcol-trigger',
  c1: 'gcol-a', c2: 'gcol-a', c3: 'gcol-a', c4: 'gcol-a', c5: 'gcol-a',
  c6: 'gcol-b', c7: 'gcol-b', c8: 'gcol-b', c10: 'gcol-b', c9: 'gcol-b',
  skills: 'gcol-service', about: 'gcol-service', contacts: 'gcol-service',
};

/* ─── Node data (no x/y — layout handled by CSS columns) ─── */
const NODES = [
  { id: 'trigger', type: 'trigger' },

  /* teal column */
  {
    id: 'c1', type: 'case', cat: 'teal', roles: ['n8n'],
    cat_label: 'IT-компания',
    title: 'Воронки и боты-квесты',
    meta: 'Соло-разработчик · 6 мес',
    bullets: [
      '~20 ботов разной сложности, включая вебинарные воронки',
      'Telegram-квесты — вызвали интерес в профессиональном сообществе',
      '5 вебинаров: техническая организация (Bizon365 + OBS)',
      'Методология аналитики из чат-бот воронок',
    ],
    anchor: 'case-1',
  },
  {
    id: 'c2', type: 'case', cat: 'teal', roles: ['n8n', 'pm'],
    cat_label: 'IT-компания',
    title: 'Техлид агентства ботов',
    meta: 'Технический лидер · 8 мес · команда 3–5',
    bullets: [
      '~150 ботов для ~50 клиентов',
      'Интеграции: CRM, ChatGPT, Telegram Personal, платежи',
      'Аналитика прохождения воронки — где клиенты «застревают»',
      'Найм и онбординг, методология документации',
    ],
    anchor: 'case-2',
  },
  {
    id: 'c3', type: 'case', cat: 'teal', roles: ['n8n'],
    cat_label: 'IT-компания',
    title: 'CRM-аналитика и телефония',
    meta: 'Сквозная аналитика · 3 мес',
    bullets: [
      '~10 подрядчиков: точное число и стоимость лидов',
      'amoCRM + Битрикс24 + Tilda — сквозная цепочка',
      'n8n полностью заменил ручной сбор данных',
      'Телефония: Сипуни + Мегафон → Манго',
    ],
    result: 'Ручной сбор → оперативная автоматика без задержки',
    anchor: 'case-3',
  },
  {
    id: 'c4', type: 'case', cat: 'teal', roles: ['n8n', 'pm', 'ai'],
    cat_label: 'IT-компания',
    title: 'Контент-фабрика',
    meta: 'Техдир автоматизации · 8 мес',
    flagship: true,
    bullets: [
      '90 аккаунтов × 7 площадок, до 1890 роликов/день',
      'Статистика: n8n + Apify + API → PostgreSQL → Superset',
      'AI-разведка: анализ видео, Gemini/Claude, база хуков',
      'Уникализация: n8n + ffmpeg + S3',
      'Телефонная ферма 90 устройств — 10× ускорение операторов',
      'Кастомные отчёты на Claude + MCP',
    ],
    anchor: 'case-4',
  },
  {
    id: 'c5', type: 'case', cat: 'teal', roles: ['n8n', 'pm'],
    cat_label: 'Онлайн-школа · 5 млн подписчиков',
    title: 'Техспециалист онлайн-школы',
    meta: '7+ лет',
    bullets: [
      'Автоворонки: Salebot, Tilda, GetCourse, Bitrix24',
      'Пик: 39 000+ регистраций, 16 500 одновременных зрителей',
      'Аналитика: продажи, финансы, производство',
      '800+ тыс. клиентов в базе на пике',
    ],
    anchor: 'case-5',
  },

  /* coral column */
  {
    id: 'c6', type: 'case', cat: 'coral', roles: ['pm'],
    cat_label: 'Фриланс · NDA',
    title: 'Лендинг + lead-инфраструктура',
    meta: 'Full-stack · AI-assisted',
    bullets: [
      'Пиксель-перфект по Figma, 3 брейкпоинта',
      'Lighthouse мобайл: 63 → ~85',
      'Форма → CRM: дедупликация, UTM, ответственный',
      'Чат → CRM: собственный вебхук вместо платного',
      'DevOps: staging + продакшен на Docker',
    ],
    anchor: 'case-6',
  },
  {
    id: 'c7', type: 'case', cat: 'coral', roles: ['n8n'],
    cat_label: 'Фриланс · NDA',
    title: '«Тихие» баги в синхронизации CRM',
    meta: 'n8n · amoCRM · Bitrix24 · PostgreSQL · Directus',
    bullets: [
      'Лиды из amoCRM → Bitrix24: двусторонняя синхронизация',
      'Диагностика «тихих» багов — без явных ошибок в логах',
      'Maппинг справочников через Directus',
    ],
    anchor: 'case-7',
  },
  {
    id: 'c8', type: 'case', cat: 'coral', roles: ['pm', 'ai'],
    cat_label: 'Фриланс · NDA',
    title: 'Диагностика корпоративного трекера',
    meta: '5 кейсов · 0 безвозвратных потерь данных',
    bullets: [
      'Root-cause: отчёт падал без записи в логах',
      'Синхронизация CMS ↔ трекер: 350 задач в миграции',
      'Groovy-листенер вместо хрупкой встроенной автоматики',
      '«Правила-призраки»: поля обнулялись без причин',
    ],
    badges: [
      { text: 'Решено', type: 'green' },
      { text: 'Решено', type: 'green' },
      { text: 'Решено', type: 'green' },
      { text: 'Решено', type: 'green' },
      { text: 'Спланировано', type: 'neutral' },
    ],
    anchor: 'case-8',
  },
  {
    id: 'c10', type: 'case', cat: 'coral', roles: ['n8n', 'ai'],
    cat_label: 'Фриланс · 2026',
    title: 'Дашборд для отдела продаж',
    meta: 'Apache Superset · PostgreSQL',
    bullets: [
      'PostgreSQL — единое хранилище данных воронки',
      'Веб-форма для менеджеров: ввод данных без SQL',
      'Superset: KPI-карточки, помесячная динамика, конверсия',
      'Условное форматирование: план/факт, отклонения по этапам',
    ],
    result: 'Оперативная аналитика вместо постфактум-таблиц',
    anchor: 'case-10',
  },
  {
    id: 'c9', type: 'case', cat: 'purple', roles: ['n8n', 'ai'],
    cat_label: 'Pet-проект',
    title: 'Автоматизация поиска работы',
    meta: 'Живой счётчик · n8n + Gmail + Telegram',
    alwaysOpen: true,
    counter: true,
    bullets: [
      'Gmail Trigger → парсинг дайджестов HH.ru → Google Sheets',
      'Мониторинг Telegram-каналов: прямой скрапинг t.me/s/',
      'Уведомления по приоритетным вакансиям',
    ],
    anchor: 'case-9',
  },

  /* service column */
  {
    id: 'skills',   type: 'service', cat: 'gray',
    cat_label: 'Навыки', title: 'Скиллы',
    meta: 'n8n · PM · AI-LLM', anchor: 'skills',
  },
  {
    id: 'about',    type: 'service', cat: 'gray',
    cat_label: 'Обо мне', title: 'Анастасия Чернова',
    meta: '10+ лет в автоматизации', anchor: 'about',
  },
  {
    id: 'contacts', type: 'service', cat: 'gray',
    cat_label: 'Контакты', title: 'Написать',
    meta: 'Telegram · Email', anchor: 'contacts',
  },
];

/* ─── Edge data ─── */
const EDGES = [
  { from: 'trigger', to: 'c1', cat: 'teal',   roles: ['n8n'] },
  { from: 'trigger', to: 'c2', cat: 'teal',   roles: ['n8n', 'pm'] },
  { from: 'trigger', to: 'c3', cat: 'teal',   roles: ['n8n'] },
  { from: 'trigger', to: 'c4', cat: 'teal',   roles: ['n8n', 'pm', 'ai'] },
  { from: 'trigger', to: 'c5', cat: 'teal',   roles: ['n8n', 'pm'] },
  { from: 'trigger', to: 'c6', cat: 'coral',  roles: ['pm'] },
  { from: 'trigger', to: 'c7', cat: 'coral',  roles: ['n8n'] },
  { from: 'trigger', to: 'c8',  cat: 'coral',  roles: ['pm', 'ai'] },
  { from: 'trigger', to: 'c10', cat: 'coral',  roles: ['n8n', 'ai'] },
  { from: 'trigger', to: 'c9',  cat: 'purple', roles: ['n8n', 'ai'], always: true },
  { from: 'trigger', to: 'skills',   cat: 'gray', roles: [] },
  { from: 'trigger', to: 'about',    cat: 'gray', roles: [] },
  { from: 'trigger', to: 'contacts', cat: 'gray', roles: [] },
];

/* ─── State ─── */
let currentRole = null;
let resizeTimer = null;

/* ─── Init ─── */
function initGraph() {
  const canvas = document.getElementById('gCanvas');
  if (!canvas) return;

  NODES.forEach(n => {
    const col = document.getElementById(COL[n.id]);
    if (col) col.appendChild(buildNode(n));
  });

  /* Double rAF: first fires after paint, second after layout is stable */
  requestAnimationFrame(() => requestAnimationFrame(drawAllEdges));

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAllEdges, 150);
  });

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-role]');
    if (btn) {
      const role = btn.dataset.role;
      selectRole(currentRole === role ? null : role);
    }
    if (e.target.id === 'triggerReset') selectRole(null);
  });

  loadCounter();
}

/* ─── Draw all SVG edges ─── */
function drawAllEdges() {
  const canvas = document.getElementById('gCanvas');
  const svg    = document.getElementById('gSvg');
  if (!canvas || !svg) return;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;
  svg.setAttribute('width',   W);
  svg.setAttribute('height',  H);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.style.width  = W + 'px';
  svg.style.height = H + 'px';
  svg.innerHTML    = '';

  const cr = canvas.getBoundingClientRect();

  EDGES.forEach(e => {
    const fromEl = canvas.querySelector(`[data-id="${e.from}"]`);
    const toEl   = canvas.querySelector(`[data-id="${e.to}"]`);
    if (!fromEl || !toEl) return;

    const fr = fromEl.getBoundingClientRect();
    const tr = toEl.getBoundingClientRect();

    const fx = fr.right - cr.left;
    const fy = fr.top   - cr.top  + PH;
    const tx = tr.left  - cr.left;
    const ty = tr.top   - cr.top  + PH;

    const cpOff = Math.min(Math.abs(tx - fx) * 0.45, 140);
    const d = `M${fx},${fy} C${fx+cpOff},${fy} ${tx-cpOff},${ty} ${tx},${ty}`;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('class', 'gedge');
    path.dataset.id    = `${e.from}-${e.to}`;
    path.dataset.cat   = e.cat || '';
    path.dataset.roles = (e.roles || []).join(' ');
    if (e.always) path.dataset.always = 'true';

    /* Preserve active/dimmed state across redraws */
    if (currentRole) {
      const edgeRoles = e.roles || [];
      if (edgeRoles.includes(currentRole) || e.always) {
        path.classList.add('is-active');
      } else {
        path.classList.add('is-dimmed');
      }
    }

    svg.appendChild(path);
  });
}

/* ─── Build node element ─── */
function buildNode(n) {
  const el = document.createElement('div');
  el.className = 'gnode'
    + (n.type === 'trigger' ? ' gnode--trigger' : '')
    + (n.type === 'service'  ? ' gnode--service'  : '');
  el.dataset.id  = n.id;
  el.dataset.cat = n.cat || '';
  if (n.roles)      el.dataset.roles      = n.roles.join(' ');
  if (n.alwaysOpen) el.dataset.alwaysOpen = 'true';

  if (n.type === 'trigger') {
    el.innerHTML = triggerHTML();
  } else if (n.type === 'service') {
    el.innerHTML = serviceHTML(n);
  } else {
    el.innerHTML = caseHTML(n);
  }
  return el;
}

function triggerHTML() {
  return `
    <div class="gnode__port gnode__port--out"></div>
    <div class="gnode__body">
      <div class="gnode__trigger-label">▸ Switch · Trigger</div>
      <div class="gnode__trigger-title">Кто вы?</div>
      <div class="trigger-tabs">
        <button class="trigger-tab" data-role="n8n">n8n-разработчик</button>
        <button class="trigger-tab" data-role="pm">Technical PM</button>
        <button class="trigger-tab" data-role="ai">AI-LLM Integration</button>
      </div>
      <button class="trigger-reset" id="triggerReset" style="display:none">× сбросить</button>
    </div>`;
}

function serviceHTML(n) {
  return `
    <div class="gnode__port gnode__port--in"></div>
    <div class="gnode__body">
      <span class="gnode__cat">${n.cat_label}</span>
      <div class="gnode__title"><a href="#${n.anchor}">${n.title}</a></div>
      <div class="gnode__meta">${n.meta}</div>
    </div>`;
}

function caseHTML(n) {
  const flagshipBadge = n.flagship
    ? `<span class="gnode__flagship">флагман</span>` : '';

  const bullets = (n.bullets || []).map(b => `<li>${b}</li>`).join('');

  const result = n.result
    ? `<div class="gnode__result">${n.result}</div>` : '';

  const badges = (n.badges || [])
    .map(b => `<span class="badge badge--${b.type}">${b.text}</span>`).join('');
  const badgesRow = badges
    ? `<div class="gnode__badges">${badges}</div>` : '';

  const counter = n.counter ? `
    <div class="gnode__counter">
      <span class="gnode__counter-num" id="petCounter">—</span>
      <span class="gnode__counter-label">вакансий<br>обработано ботом</span>
    </div>` : '';

  return `
    <div class="gnode__port gnode__port--in"></div>
    <div class="gnode__port gnode__port--out"></div>
    <div class="gnode__body">
      <span class="gnode__cat">${n.cat_label}</span>
      <div class="gnode__title">${n.title}${flagshipBadge}</div>
      <div class="gnode__meta">${n.meta}</div>
      <div class="gnode__expanded">
        ${counter}
        <ul class="gnode__bullets">${bullets}</ul>
        ${result}
        ${badgesRow}
        <a class="gnode__link" href="#${n.anchor}">Полный кейс →</a>
      </div>
    </div>`;
}

/* ─── Role switching ─── */
function selectRole(role) {
  currentRole = role;

  document.querySelectorAll('[data-role]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.role === role);
  });

  const reset = document.getElementById('triggerReset');
  if (reset) reset.style.display = role ? 'block' : 'none';

  document.querySelectorAll('[data-tagline]').forEach(el => {
    el.hidden = role
      ? el.dataset.tagline !== role
      : el.dataset.tagline !== 'default';
  });

  document.querySelectorAll('.gnode[data-roles]').forEach(node => {
    const roles  = (node.dataset.roles || '').split(' ').filter(Boolean);
    const always = node.dataset.alwaysOpen === 'true';
    const rel    = !role || roles.includes(role) || always;
    node.classList.toggle('is-active', rel);
    node.classList.toggle('is-dimmed', !!(role && !rel));
  });

  /* Redraw edges after CSS transition completes (--t-slow = 380ms) */
  setTimeout(drawAllEdges, 420);
}

/* ─── Pet project live counter ─── */
async function loadCounter() {
  const el = document.getElementById('petCounter');
  if (!el) return;
  try {
    const WEBHOOK = 'https://n8n.zive26.ru/webhook/job-counter';
    const res  = await fetch(WEBHOOK, { signal: AbortSignal.timeout(5000) });
    const data = await res.json();
    const count = data.count ?? data.total ?? null;
    if (count !== null) el.textContent = Number(count).toLocaleString('ru-RU');
  } catch {
    el.textContent = '…';
  }
}

document.addEventListener('DOMContentLoaded', initGraph);
