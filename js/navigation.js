// ═══════════════════════════════════════════════════════
// NAVIGATION — Roteamento entre telas e refresh de UI
// Depende de: config.js, state.js, auth.js, ui.js
// ═══════════════════════════════════════════════════════

function go(id) {
  if (id === 'pw' && S.premium) { showToast('Você já é Premium! 👑', 'ok'); id = 'hm'; }
  document.querySelectorAll('.scr').forEach(s => s.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  if (id === 'hm') refreshHome();
  if (id === 'mp') refreshMap();
  if (id === 'pr') refreshProfile();
  // Desktop: telas de auth ficam fullscreen, as demais mostram sidebars
  const authScreens = ['sp', 'ob', 'au'];
  document.body.classList.toggle('desk-auth', authScreens.includes(id));
  // Destaca link ativo na nav desktop
  const navMap = { hm: 'dn-hm', mp: 'dn-mp', pr: 'dn-pr', pw: 'dn-pw' };
  document.querySelectorAll('.dn-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.getElementById(navMap[id]);
  if (activeLink) activeLink.classList.add('active');
  refreshDeskSidebar();
}

// ── Sidebar desktop direita ──

function refreshDeskSidebar() {
  const _u = window._currentUser;
  if (_u) {
    const ini = (_u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const av = document.getElementById('da-av');
    if (av) av.innerHTML = _u.photoURL ? `<img src="${_u.photoURL}">` : ini;
    const nm = document.getElementById('da-name');
    if (nm) nm.textContent = _u.displayName || 'Agente';
    const pl = document.getElementById('da-plan');
    if (pl) { pl.textContent = S.premium ? '👑 PREMIUM' : 'FREE'; pl.className = 'da-plan ' + (S.premium ? 'gold' : 'dim'); }
  }
  const xpEl = document.getElementById('da-xp');    if (xpEl) xpEl.textContent = S.xp;
  const lvEl = document.getElementById('da-lv');    if (lvEl) lvEl.textContent = getLv();
  const msEl = document.getElementById('da-ms');    if (msEl) msEl.textContent = S.done.length + '/6';
  const stEl = document.getElementById('da-streak'); if (stEl) stEl.textContent = S.streak;
  renderH('da-hearts');
}

// ── Home ──

let htInterval = null;

function refreshHome() {
  regenH();
  renderH('hm-hearts');
  document.getElementById('hm-xp').textContent     = S.xp;
  document.getElementById('hm-lv').textContent     = getLv();
  document.getElementById('hm-ms').textContent     = S.done.length + '/6';
  document.getElementById('hm-streak').textContent = S.streak + (S.streak === 1 ? ' DIA' : ' DIAS');
  document.getElementById('hm-badge').textContent  = `// ${getLvName()} · NÍVEL ${getLv()}`;

  const _u = window._currentUser;
  if (_u) {
    const _ini = (_u.displayName || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const _av = document.getElementById('hm-av');
    if (_av) _av.innerHTML = _u.photoURL
      ? `<img src="${_u.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
      : _ini;
    const _un = document.getElementById('hm-uname');
    if (_un) _un.textContent = _u.displayName || 'Agente';
    const _pl = document.getElementById('hm-uplan');
    if (_pl) { _pl.textContent = S.premium ? '👑 PREMIUM' : 'FREE'; _pl.className = 'hm-uplan ' + (S.premium ? 'gold' : 'dim'); }
  }

  const _pb = document.getElementById('hm-premium-banner');
  if (_pb) _pb.style.display = S.premium ? 'none' : 'flex';

  clearInterval(htInterval);
  const tel = document.getElementById('hm-htimer');
  function tick() {
    regenH();
    renderH('hm-hearts');
    tel.textContent = S.hearts >= MAX_H ? '' : `+❤️ em ${fmtTime(nextHeartMs())}`;
  }
  tick();
  htInterval = setInterval(tick, 1000);
  refreshDeskSidebar();
}

// ── Map / Missões ──

function refreshMap() {
  regenH();
  renderH('mp-hearts');
  document.getElementById('mp-xp').textContent      = S.xp;
  document.getElementById('lv-label').textContent   = `${getLvName()} · NV ${getLv()}`;
  document.getElementById('lv-xp').textContent      = `${getLvXp()} / ${XP_LV} XP`;
  document.getElementById('lv-fill').style.width    = getLvPct() + '%';

  const list = document.getElementById('mlist');
  list.innerHTML = '';
  MISSIONS.forEach((m, i) => {
    const done       = S.done.includes(m.id);
    const premLocked = !m.free && !S.premium;
    const seqLocked  = premLocked && i > 0 && !S.done.includes(MISSIONS[i - 1].id);
    const cl    = 'mcard' + (done ? ' done' : seqLocked ? ' lck' : premLocked ? ' plck' : ' avail');
    const st    = done ? 'done' : seqLocked ? 'lck' : premLocked ? 'plck' : 'avail';
    const stTxt = done ? '✓'   : seqLocked ? '🔒'  : premLocked ? '👑'   : '▶';
    const card  = document.createElement('div');
    card.className = cl;
    card.innerHTML = `
      <div class="mic">${m.icon}</div>
      <div class="minfo">
        <h3>${m.title}</h3>
        <p>// ${m.steps.length} EXERCÍCIOS · ${m.steps.length * 10 + 50} XP</p>
        <div class="mxpbar"><div class="mxpbar-f" style="width:${done ? 100 : 0}%"></div></div>
      </div>
      <div class="mst ${st}">${stTxt}</div>`;
    if (!seqLocked) card.onclick = () => openMission(i);
    list.appendChild(card);
  });
}
