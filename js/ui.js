// ═══════════════════════════════════════════════════════
// UI — Toast, Loading e Paywall
// Depende de: config.js, state.js
// ═══════════════════════════════════════════════════════

// ── Toast ──

let _toastT = null;

function showToast(msg, type = 'info', dur = 3000) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(_toastT);
  _toastT = setTimeout(() => el.classList.remove('show'), dur);
}

// ── Loading ──

function showLoading(msg = 'CARREGANDO...') {
  document.getElementById('loading-msg').textContent = msg;
  document.getElementById('loading').classList.add('on');
}

function hideLoading() {
  document.getElementById('loading').classList.remove('on');
}

// ── Paywall ──

let _selPlan = 'annual';

function selPlan(plan) {
  _selPlan = plan;
  document.getElementById('plan-annual').classList.toggle('sel',  plan === 'annual');
  document.getElementById('plan-monthly').classList.toggle('sel', plan === 'monthly');
  document.getElementById('btn-pay').innerHTML =
    plan === 'annual' ? '👑 &nbsp;ASSINAR — R$9,90/mês' : '👑 &nbsp;ASSINAR — R$14,90/mês';
}

async function startPayment() {
  if (!window._currentUser || window._currentUser.uid === 'demo') {
    showToast('Faça login para assinar!', 'info');
    goAuth('reg');
    return;
  }
  if (S.premium) {
    showToast('Você já é Premium! 👑', 'ok');
    go('hm');
    return;
  }

  const base = _selPlan === 'annual' ? PAYMENT_LINK_ANNUAL : PAYMENT_LINK_MONTHLY;
  const uid  = window._currentUser.uid;
  const url  = base
    + '?prefilled_email=' + encodeURIComponent(window._currentUser.email)
    + '&client_reference_id=' + uid;

  showLoading('REDIRECIONANDO PARA O PAGAMENTO...');
  location.href = url;
}

async function activatePremium() {
  S.premium = true;
  S.hearts  = MAX_H;
  syncCloud();
  _saveLocal();
  checkAchievements();
  showToast('👑 Bem-vindo ao Premium!', 'ok');
  go('hm');
}

// ── Retorno do Stripe após pagamento ──
// Stripe redireciona para https://leoncs.com.br/?payment=success
// O webhook já setou premium=true no Firestore; aqui só recarregamos os dados.
async function checkPaymentReturn() {
  const params = new URLSearchParams(location.search);
  if (params.get('payment') !== 'success') return;

  // Limpa o parâmetro da URL sem recarregar a página
  history.replaceState({}, '', location.pathname);

  if (!window._currentUser) return;

  showLoading('VERIFICANDO PAGAMENTO...');
  try {
    // Tenta até 5x (o webhook pode chegar com pequeno atraso)
    for (let i = 0; i < 5; i++) {
      await _loadCloud(window._currentUser.uid);
      if (S.premium) break;
      await new Promise(r => setTimeout(r, 2000));
    }
  } finally {
    hideLoading();
  }

  if (S.premium) {
    S.hearts = MAX_H;
    _saveLocal();
    checkAchievements();
    showToast('👑 Bem-vindo ao Premium!', 'ok');
    go('hm');
  } else {
    showToast('Pagamento em processamento. Aguarde alguns instantes.', 'info');
  }
}
