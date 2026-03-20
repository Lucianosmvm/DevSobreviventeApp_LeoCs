// ═══════════════════════════════════════════════════════
// APP — Service Worker (PWA offline) e inicialização
// Depende de: todos os módulos anteriores
// ═══════════════════════════════════════════════════════

// ── Service Worker (offline / PWA) ──
if ('serviceWorker' in navigator) {
  const sw = `const C='lcs-v2';self.addEventListener('install',e=>{self.skipWaiting()});self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});`;
  navigator.serviceWorker
    .register(URL.createObjectURL(new Blob([sw], { type: 'application/javascript' })))
    .catch(() => {});
}

// ── Inicialização ──
function initApp() {
  if (FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.apiKey !== 'SUA_API_KEY') {
    showLoading('CONECTANDO...');
    loadFirebase();
  } else {
    loadFirebase(); // dispara modo demo em caso de erro
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(initApp, 1400);
});

// Esconde o loading caso o usuário volte da tela de pagamento (bfcache restore)
window.addEventListener('pageshow', (e) => {
  if (e.persisted) hideLoading();
});
