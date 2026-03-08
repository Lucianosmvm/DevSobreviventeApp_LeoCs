// ═══════════════════════════════════════════════════════
// CONFIG — Firebase, constantes do jogo e links de pagamento
// ═══════════════════════════════════════════════════════

// Firebase — cole suas credenciais em console.firebase.google.com
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyA8ZNEhBJtHAeEtIXQUlXQmFp4zI3MQ_0U",
  authDomain:        "leon-cs.firebaseapp.com",
  projectId:         "leon-cs",
  storageBucket:     "leon-cs.firebasestorage.app",
  messagingSenderId: "751282094721",
  appId:             "1:751282094721:web:a8c870885adcbb457ec380",
  measurementId:     "G-2PXHCCXNB5"
};

// Stripe — Payment Links
const PAYMENT_LINK_MONTHLY = 'https://buy.stripe.com/test_5kQ4gza1371rdHE1jJ5AQ00';
const PAYMENT_LINK_ANNUAL  = 'https://buy.stripe.com/test_28E28r4GJgC10US3rR5AQ01';

// Constantes do jogo
const KEY      = 'leoncs_v3';
const MAX_H    = 5;
const REGEN_MS = 20 * 60 * 1000;
const XP_LV    = 200;
const LV_NAMES = ['RECRUTA', 'AGENTE', 'VETERANO', 'ESPECIALISTA', 'MESTRE', 'LENDA'];
