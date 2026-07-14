/* ─── Role labels (shared by the trigger tabs and the popup's INPUT panel) ─── */
const ROLE_LABELS = {
  n8n: 'n8n-разработчик',
  pm:  'Technical PM',
  ai:  'AI-LLM Integration',
};

/* ─── Which column each node lives in ─── */
const COL = {
  trigger:  'gcol-trigger',
  c1: 'gcol-a', c2: 'gcol-a', c3: 'gcol-a', c4: 'gcol-a', c5: 'gcol-a',
  c6: 'gcol-b', c7: 'gcol-b', c8: 'gcol-b', c10: 'gcol-b', c9: 'gcol-b',
  skills: 'gcol-service', about: 'gcol-service', contacts: 'gcol-service',
};

/* ─── Node data (no x/y – layout handled by CSS columns) ───
   teaser  – 1-2 line popup description
   stats   – short "key figures" line for the popup            */
const NODES = [
  { id: 'trigger', type: 'trigger' },

  /* teal column */
  {
    id: 'c1', type: 'case', cat: 'teal', roles: ['n8n'],
    cat_label: 'IT-компания',
    title: 'Воронки и боты-квесты',
    meta: 'Соло · 6 мес',
    teaser: 'Единолично разрабатывала вебинарные воронки и игровые Telegram-квесты – механики вызвали интерес в профессиональном сообществе, вплоть до попыток копирования.',
    stats: '~20 ботов · 5 вебинаров · 6 мес',
    anchor: 'case-1',
  },
  {
    id: 'c2', type: 'case', cat: 'teal', roles: ['n8n', 'pm'],
    cat_label: 'IT-компания',
    title: 'Техлид агентства ботов',
    meta: 'Техлид · 8 мес · команда 3–5',
    teaser: 'Руководила технической стороной агентства чат-ботов на Salebot, регулярно выходя за рамки конструктора – кастомные интеграции через API и n8n.',
    stats: '~150 ботов · ~50 клиентов · 8 мес',
    anchor: 'case-2',
  },
  {
    id: 'c3', type: 'case', cat: 'teal', roles: ['n8n'],
    cat_label: 'IT-компания',
    title: 'CRM-аналитика и телефония',
    meta: 'Сквозная аналитика · 3 мес',
    teaser: 'Настроила сквозную аналитику рекламных кампаний для ~10 подрядчиков – ручной сбор данных полностью заменён автоматикой на n8n.',
    stats: '~10 подрядчиков · 4 воронки · 3 мес',
    anchor: 'case-3',
  },
  {
    id: 'c4', type: 'case', cat: 'teal', roles: ['n8n', 'pm', 'ai'],
    cat_label: 'IT-компания',
    title: 'Контент-фабрика',
    meta: 'Техдир автоматизации · 8 мес',
    flagship: true,
    teaser: 'Техдир автоматизации промышленного производства контента: сбор статистики, AI-разведка, уникализация видео и телефонная ферма – под одной инфраструктурой.',
    stats: '90 аккаунтов · 1890 роликов/день · 10× ускорение',
    anchor: 'case-4',
  },
  {
    id: 'c5', type: 'case', cat: 'teal', roles: ['n8n', 'pm'],
    cat_label: 'Онлайн-школа · 5 млн подписчиков',
    title: 'Техспециалист онлайн-школы',
    meta: '7+ лет',
    teaser: '7+ лет технической инфраструктуры онлайн-школы: автоворонки, вебинары и аналитика под большими пиковыми нагрузками и растущей базой клиентов.',
    stats: '39 000+ регистраций · 16 500 зрителей разом · 800+ тыс. клиентов',
    anchor: 'case-5',
  },

  /* coral column */
  {
    id: 'c6', type: 'case', cat: 'coral', roles: ['pm'],
    cat_label: 'Фриланс · NDA',
    title: 'Лендинг + lead-инфраструктура',
    meta: 'Full-stack · AI-assisted',
    teaser: 'Лендинг B2B SaaS с нуля до продакшена – плюс lead-инфраструктура: форма и онлайн-чат подключены к CRM, разработка в связке с AI-инструментами.',
    stats: 'Lighthouse 63→~85 · 3 брейкпоинта',
    anchor: 'case-6',
  },
  {
    id: 'c7', type: 'case', cat: 'coral', roles: ['n8n'],
    cat_label: 'Фриланс · NDA',
    title: '«Тихие» баги в синхронизации CRM',
    meta: 'n8n · amoCRM · Bitrix24',
    teaser: 'Нашла и устранила «тихие» баги в двусторонней синхронизации между CRM – без единой явной ошибки в логах.',
    stats: 'n8n · amoCRM · Bitrix24 · Directus',
    anchor: 'case-7',
  },
  {
    id: 'c8', type: 'case', cat: 'coral', roles: ['pm', 'ai'],
    cat_label: 'Фриланс · NDA',
    title: 'Диагностика корпоративного трекера',
    meta: '5 кейсов',
    teaser: 'Серия инженерных задач для корпоративного трекера: от root-cause диагностики без единой записи в логах до восстановления потерянных данных.',
    stats: '5 кейсов · ~350 задач в миграции · 0 потерь данных',
    anchor: 'case-8',
  },
  {
    id: 'c10', type: 'case', cat: 'coral', roles: ['n8n', 'ai'],
    cat_label: 'Фриланс · 2026',
    title: 'Дашборд для отдела продаж',
    meta: 'Apache Superset · PostgreSQL',
    teaser: 'Аналитическая система учёта воронки продаж на Apache Superset – заменила ручные таблицы оперативной аналитикой по конверсии.',
    stats: 'PostgreSQL · KPI-дашборд · план/факт',
    anchor: 'case-10',
  },
  {
    id: 'c9', type: 'case', cat: 'purple', roles: ['n8n', 'ai'],
    cat_label: 'Pet-проект',
    title: 'Автоматизация поиска работы',
    meta: 'Живой счётчик',
    alwaysOpen: true,
    counter: true,
    teaser: 'Личная система автопоиска работы: парсинг email-дайджестов HH.ru через Gmail и мониторинг Telegram-каналов с уведомлениями по приоритетным вакансиям.',
    stats: 'n8n · Gmail · Google Sheets · Telegram',
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

  const triggerCol = document.getElementById('gcol-trigger');
  if (triggerCol) {
    const cue = document.createElement('div');
    cue.className = 'gcue gcue--up';
    cue.innerHTML = `<span class="gcue__label">Нажимай</span><span class="gcue__arrow">↑</span>`;
    triggerCol.appendChild(cue);
  }

  /* Double rAF: first fires after paint, second after layout is stable */
  requestAnimationFrame(() => requestAnimationFrame(drawAllEdges));

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAllEdges, 150);
  });

  document.addEventListener('click', e => {
    const roleBtn = e.target.closest('[data-role]');
    if (roleBtn) {
      const role = roleBtn.dataset.role;
      selectRole(currentRole === role ? null : role);
    }
    if (e.target.id === 'triggerReset') selectRole(null);

    const caseNode = e.target.closest('.gnode[data-type="case"]');
    if (caseNode) openPopup(caseNode.dataset.id, caseNode);
  });

  initPopup();
  loadCounter();
}

/* ─── Draw all SVG edges ─── */
let edgesFirstDraw = true;

function drawAllEdges() {
  const canvas = document.getElementById('gCanvas');
  const svg    = document.getElementById('gSvg');
  if (!canvas || !svg) return;

  const firstDraw = edgesFirstDraw;
  edgesFirstDraw = false;

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;
  svg.setAttribute('width',   W);
  svg.setAttribute('height',  H);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.style.width  = W + 'px';
  svg.style.height = H + 'px';
  svg.innerHTML    = '';

  const cr = canvas.getBoundingClientRect();

  EDGES.forEach((e, i) => {
    const fromEl = canvas.querySelector(`[data-id="${e.from}"]`);
    const toEl   = canvas.querySelector(`[data-id="${e.to}"]`);
    if (!fromEl || !toEl) return;

    /* Anchor to the actual port dot (attached to the tile's edge),
       not an estimated offset – correct for both the square tiles
       and the wider trigger card. */
    const fromPort = fromEl.querySelector('.gnode__port--out') || fromEl;
    const toPort   = toEl.querySelector('.gnode__port--in')    || toEl;

    const fr = fromPort.getBoundingClientRect();
    const tr = toPort.getBoundingClientRect();

    const fx = fr.left + fr.width  / 2 - cr.left;
    const fy = fr.top  + fr.height / 2 - cr.top;
    const tx = tr.left + tr.width  / 2 - cr.left;
    const ty = tr.top  + tr.height / 2 - cr.top;

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

    /* First paint only: the wires "draw in" from the trigger outward,
       staggered per edge – on later redraws (resize, role switch) they
       just render solid, no repeated animation. */
    if (firstDraw) {
      const len = path.getTotalLength();
      path.style.strokeDasharray  = len;
      path.style.strokeDashoffset = len;
      path.style.transitionDelay  = Math.min(i * 45, 400) + 'ms';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        path.style.strokeDashoffset = '0';
      }));
    }
  });
}

/* ─── Build node element (compact – no inline bullets) ─── */
function buildNode(n) {
  const el = document.createElement('div');
  el.className = 'gnode'
    + (n.type === 'trigger' ? ' gnode--trigger' : '')
    + (n.type === 'service' ? ' gnode--service' : '')
    + (n.type === 'case'    ? ' gnode--case'    : '');
  el.dataset.id   = n.id;
  el.dataset.type = n.type;
  el.dataset.cat  = n.cat || '';
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
      <div class="gnode__trigger-title">Кто я?</div>
      <div class="trigger-tabs">
        <button class="trigger-tab" data-role="n8n">n8n-разработчик</button>
        <button class="trigger-tab" data-role="pm">Technical PM</button>
        <button class="trigger-tab" data-role="ai">AI-LLM Integration</button>
      </div>
      <button class="trigger-reset" id="triggerReset" style="display:none">× сбросить</button>
    </div>`;
}

function nodeIcon(title) {
  return (title || '').trim().charAt(0).toUpperCase();
}

function escapeHTML(str) {
  return (str || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function serviceHTML(n) {
  return `
    <div class="gnode__tile">
      <div class="gnode__port gnode__port--in"></div>
      <span class="gnode__icon">${nodeIcon(n.title)}</span>
    </div>
    <div class="gnode__label">
      <span class="gnode__cat">${n.cat_label}</span>
      <div class="gnode__title"><a href="#${n.anchor}">${n.title}</a></div>
    </div>`;
}

function caseHTML(n) {
  const flagshipBadge = n.flagship
    ? `<span class="gnode__flagship">флагман</span>` : '';

  const counter = n.counter ? `
    <div class="gnode__mini-counter">
      <span class="gnode__mini-counter-dot"></span>
      <span id="petCounter">–</span> вакансий
    </div>` : '';

  return `
    <div class="gnode__tile">
      <div class="gnode__port gnode__port--in"></div>
      <div class="gnode__port gnode__port--out"></div>
      <span class="gnode__icon">${nodeIcon(n.title)}</span>
    </div>
    <div class="gnode__label">
      <span class="gnode__cat">${n.cat_label}</span>
      <div class="gnode__title">${n.title}${flagshipBadge}</div>
      ${counter}
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

  /* Only case nodes (data-roles) are subject to relevance dimming.
     Service nodes never have data-roles and are untouched here. */
  document.querySelectorAll('.gnode--case[data-roles]').forEach(node => {
    const roles  = (node.dataset.roles || '').split(' ').filter(Boolean);
    const always = node.dataset.alwaysOpen === 'true';
    const rel    = !role || roles.includes(role) || always;
    node.classList.toggle('is-active', !!role && rel);
    node.classList.toggle('is-dimmed', !!(role && !rel));
  });

  /* Redraw edges after CSS transition completes (--t-slow = 380ms) */
  setTimeout(drawAllEdges, 420);
}

/* ─── Popup panel ─── */
function initPopup() {
  const overlay = document.getElementById('gPopupOverlay');
  if (!overlay) return;

  document.getElementById('gPopupClose').addEventListener('click', closePopup);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closePopup();
  });
  document.getElementById('gPopupCta').addEventListener('click', closePopup);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePopup();
  });
}

function openPopup(id, nodeEl) {
  const n = NODES.find(x => x.id === id);
  if (!n) return;

  const overlay = document.getElementById('gPopupOverlay');
  const panel   = document.getElementById('gPopup');
  if (!overlay || !panel) return;

  panel.dataset.cat = n.cat || '';
  document.getElementById('gPopupIcon').textContent  = nodeIcon(n.title);
  document.getElementById('gPopupCat').textContent   = n.cat_label;
  document.getElementById('gPopupTitle').textContent = n.title;
  document.getElementById('gPopupTeaser').textContent = n.teaser || '';
  document.getElementById('gPopupCta').href = `#${n.anchor}`;
  document.getElementById('gPopupMeta').textContent  = n.meta || '';

  const roles = n.roles || [];
  document.getElementById('gPopupInputs').innerHTML = roles.map(r => `
    <div class="gpopup__input-row">
      <span class="gpopup__input-bolt">⚡</span>
      <span>${ROLE_LABELS[r] || r}</span>
    </div>`).join('');

  const statItems = (n.stats || '').split(' · ').filter(Boolean);
  document.getElementById('gPopupCount').textContent = statItems.length ? `· ${statItems.length}` : '';
  document.getElementById('gPopupJson').innerHTML = statItems.length
    ? '[\n' + statItems.map((s, i) =>
        `  <span class="gj-str">"${escapeHTML(s)}"</span>${i < statItems.length - 1 ? ',' : ''}`
      ).join('\n') + '\n]'
    : '[]';

  /* Anchor the "fly out" animation to the node that was clicked: the
     panel starts scaled-down at the node's position and grows into
     place, instead of a generic center-screen fade. */
  if (nodeEl) {
    const originEl = nodeEl.querySelector('.gnode__tile') || nodeEl;
    const or = overlay.getBoundingClientRect();
    const nr = originEl.getBoundingClientRect();
    const dx = (nr.left + nr.width  / 2) - (or.left + or.width  / 2);
    const dy = (nr.top  + nr.height / 2) - (or.top  + or.height / 2);
    panel.style.setProperty('--dx', dx + 'px');
    panel.style.setProperty('--dy', dy + 'px');
  }

  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  void panel.offsetWidth; /* force reflow: commit the "closed" (offset) position first */
  requestAnimationFrame(() => overlay.classList.add('is-open'));
}

function closePopup() {
  const overlay = document.getElementById('gPopupOverlay');
  if (!overlay) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
}

/* ─── Pet project live counter ─── */
async function loadCounter() {
  const el = document.getElementById('petCounter');
  if (!el) return;
  try {
    const WEBHOOK = 'https://api.zive26.ru/webhook/job-counter';
    const res  = await fetch(WEBHOOK, { signal: AbortSignal.timeout(5000) });
    const data = await res.json();
    const count = data.count ?? data.total ?? null;
    if (count !== null) animateCount(el, Number(count));
  } catch {
    el.textContent = '…';
  }
}

/* Counts up from 0 to `target` – reinforces "живой узел" (live data),
   not just a number that pops in. */
function animateCount(el, target, duration = 900) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); /* ease-out-cubic */
    el.textContent = Math.round(target * eased).toLocaleString('ru-RU');
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ─── Decorative one-shot reveal on scroll ───
   Purely visual – never toggled by hover/click, plays once per element.
   Used for the skills-matrix columns and each case-section's text block. */
function initScrollReveal(selector, threshold = 0.15) {
  const els = document.querySelectorAll(selector);
  if (!els.length || !('IntersectionObserver' in window)) return;

  els.forEach(el => el.classList.add('is-pending'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold });

  els.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initGraph();
  initScrollReveal('.skills-col');
  initScrollReveal('.case-section__inner');
});
