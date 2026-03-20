// ═══════════════════════════════════════════════════════
// ACHIEVEMENTS — Conquistas temáticas de Resident Evil 4
// Depende de: config.js, state.js, missions.js
// ═══════════════════════════════════════════════════════

const ACHIEVEMENTS = [
  { id: 'first_lesson', icon: '🏚️', name: 'Bem-vindo ao Vilarejo', desc: 'Complete sua primeira missão.',           check: () => S.done.length >= 1 },
  { id: 'five_lessons', icon: '🏘️', name: 'Pueblo',                desc: 'Complete 5 missões.',                     check: () => S.done.length >= 5 },
  { id: 'ten_lessons',  icon: '✝️', name: 'Illuminados',            desc: 'Complete 10 missões.',                    check: () => S.done.length >= 10 },
  { id: 'all_lessons',  icon: '🏆', name: 'S-Rank',                 desc: 'Complete todas as missões disponíveis.',  check: () => typeof MISSIONS !== 'undefined' && S.done.length >= MISSIONS.length },
  { id: 'perfect_run',  icon: '🎯', name: 'Tiro de Sniper',         desc: 'Complete uma missão sem nenhum erro.',    check: () => false },
  { id: 'streak_7',     icon: '🔥', name: 'Salamandra',             desc: 'Mantenha 7 dias de ofensiva seguidos.',   check: () => S.streak >= 7 },
  { id: 'streak_30',    icon: '🧬', name: 'Las Plagas',             desc: 'Mantenha 30 dias de ofensiva seguidos.',  check: () => S.streak >= 30 },
  { id: 'xp_1000',      icon: '💰', name: 'Pesetas',                desc: 'Acumule 1.000 XP.',                       check: () => S.xp >= 1000 },
  { id: 'xp_5000',      icon: '💎', name: 'Tesouro do Castelo',     desc: 'Acumule 5.000 XP.',                       check: () => S.xp >= 5000 },
  { id: 'correct_100',  icon: '🔫', name: 'Matador de Ganados',     desc: 'Acerte 100 respostas corretas.',          check: () => (S.correct || 0) >= 100 },
  { id: 'google_login', icon: '🕵️', name: 'Ada Wong',               desc: 'Faça login com sua conta Google.',        check: () => false },
  { id: 'premium',      icon: '🛒', name: 'Comerciante',            desc: 'Assine o plano Premium.',                 check: () => S.premium === true },
];

function _unlockAchievement(id) {
  if (!S.achievements) S.achievements = {};
  if (S.achievements[id]) return false;
  S.achievements[id] = true;
  saveS();
  const ach = ACHIEVEMENTS.find(a => a.id === id);
  if (ach) _showAchievementBanner(ach);
  return true;
}

function checkAchievements() {
  if (!S.achievements) S.achievements = {};
  ACHIEVEMENTS.forEach(a => {
    if (!S.achievements[a.id] && a.check()) _unlockAchievement(a.id);
  });
}

function unlockAchievement(id) {
  _unlockAchievement(id);
}

function _showAchievementBanner(ach) {
  const el = document.createElement('div');
  el.className = 'ach-banner';
  el.innerHTML = `<div class="ach-banner-ico">${ach.icon}</div><div class="ach-banner-txt"><div class="ach-banner-label">// CONQUISTA DESBLOQUEADA</div><div class="ach-banner-name">${ach.name}</div></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add('show'), 50);
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 500); }, 3500);
}

function renderAchievements() {
  const el = document.getElementById('ac-list');
  if (!el) return;
  if (!S.achievements) S.achievements = {};
  const unlocked = ACHIEVEMENTS.filter(a => S.achievements[a.id]);
  const locked   = ACHIEVEMENTS.filter(a => !S.achievements[a.id]);
  document.getElementById('ac-count').textContent = unlocked.length + ' / ' + ACHIEVEMENTS.length;
  let html = '';
  if (unlocked.length > 0) {
    html += `<div class="ac-section-title">// DESBLOQUEADAS</div>`;
    unlocked.forEach(a => {
      html += `<div class="ac-item unlocked"><div class="ac-ico">${a.icon}</div><div class="ac-info"><div class="ac-name">${a.name}</div><div class="ac-desc">${a.desc}</div></div><div class="ac-check">✓</div></div>`;
    });
  }
  if (locked.length > 0) {
    html += `<div class="ac-section-title">// BLOQUEADAS</div>`;
    locked.forEach(a => {
      html += `<div class="ac-item locked"><div class="ac-ico">🔒</div><div class="ac-info"><div class="ac-name ac-name-lock">${a.name}</div><div class="ac-desc">${a.desc}</div></div></div>`;
    });
  }
  el.innerHTML = html;
}
