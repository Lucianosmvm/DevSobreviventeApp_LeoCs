// ═══════════════════════════════════════════════════════
// FIREBASE — SDK, Auth e Firestore
// Depende de: config.js, state.js, ui.js, navigation.js
// ═══════════════════════════════════════════════════════

let _fbAuth = null, _fbDb = null;
window._currentUser = null;
window._fb = null;

async function loadFirebase() {
  try {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getAuth, onAuthStateChanged,
            createUserWithEmailAndPassword, signInWithEmailAndPassword,
            signInWithPopup, GoogleAuthProvider, signOut,
            updateProfile, sendPasswordResetEmail, deleteUser }
          = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp }
          = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const app = initializeApp(FIREBASE_CONFIG);
    _fbAuth = getAuth(app);
    _fbDb   = getFirestore(app);

    window._fb = {
      createUserWithEmailAndPassword, signInWithEmailAndPassword,
      signInWithPopup, GoogleAuthProvider, signOut,
      updateProfile, sendPasswordResetEmail, deleteUser,
      doc, setDoc, getDoc, updateDoc, deleteDoc, serverTimestamp
    };

    // AUTH STATE OBSERVER — persiste login entre reloads
    onAuthStateChanged(_fbAuth, async (user) => {
      hideLoading();
      if (user) {
        window._currentUser = user;
        showLoading('SINCRONIZANDO...');
        await _loadCloud(user.uid);
        hideLoading();
        regenH(); checkStreakLoss(); _saveLocal();
        go('hm');
      } else {
        window._currentUser = null;
        go('ob');
      }
    });

  } catch(e) {
    // Firebase não configurado → modo demo (funciona localmente sem auth)
    console.warn('Firebase não configurado. Rodando em modo demo:', e.message);
    hideLoading();
    window._currentUser = { uid: 'demo', displayName: 'Leon Demo', email: 'demo@leoncs.app', photoURL: null };
    regenH(); checkStreakLoss(); _saveLocal();
    go('hm');
  }
}

async function _ensureUserDoc(user) {
  if (!_fbDb || !window._fb) return;
  const ref  = window._fb.doc(_fbDb, 'users', user.uid);
  const snap = await window._fb.getDoc(ref);
  if (!snap.exists()) {
    await window._fb.setDoc(ref, {
      name: user.displayName || 'Agente', email: user.email,
      xp: 0, hearts: MAX_H, streak: 0, lastPlayed: null,
      done: [], correct: 0, premium: false,
      createdAt: window._fb.serverTimestamp(),
      lastLogin:  window._fb.serverTimestamp(),
    });
  } else {
    await window._fb.updateDoc(ref, { lastLogin: window._fb.serverTimestamp() });
  }
}

async function _loadCloud(uid) {
  if (!_fbDb || !window._fb) return;
  try {
    const snap = await window._fb.getDoc(window._fb.doc(_fbDb, 'users', uid));
    if (snap.exists()) {
      const d = snap.data();
      S.xp         = d.xp         ?? 0;
      S.hearts     = d.hearts     ?? MAX_H;
      S.streak     = d.streak     ?? 0;
      S.lastPlayed = d.lastPlayed ?? null;
      S.done       = d.done       ?? [];
      S.correct    = d.correct    ?? 0;
      S.premium    = d.premium    ?? false;
      S.createdAt  = d.createdAt?.toDate?.()?.toLocaleDateString('pt-BR') ?? '—';
    }
  } catch(e) { console.warn('Offline — usando dados locais'); }
}

function syncCloud() {
  if (!_fbDb || !window._currentUser || !window._fb) return;
  window._fb.updateDoc(window._fb.doc(_fbDb, 'users', window._currentUser.uid), {
    xp: S.xp, hearts: S.hearts, streak: S.streak,
    lastPlayed: S.lastPlayed, done: S.done,
    correct: S.correct || 0, premium: S.premium,
    lastLogin: window._fb.serverTimestamp(),
  }).catch(() => {}); // silently fails offline
}
