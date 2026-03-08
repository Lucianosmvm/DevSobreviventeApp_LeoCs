// =====================================================
// LEON.CS - missions.js  (AGREGADOR)
// Nao adicione missoes aqui. Crie um arquivo em missions/
//
// COMO ADICIONAR UMA NOVA MISSAO:
//   1. Crie o arquivo missions/mission_N.js
//   2. Defina: const MISSION_N = { id: N, ... }
//   3. Adicione a tag no index.html ANTES deste script:
//        <script src="missions/mission_N.js"></script>
//   4. Adicione MISSION_N na lista abaixo
//
// TIPOS DE STEP:
//   type:"mc"   -- multipla escolha (4 opcoes)
//   type:"code" -- leia o codigo + multipla escolha
//   type:"fill" -- complete o codigo (digitacao livre)
//
// CORES DO CODIGO (use <span class="CLASSE">):
//   kw  roxo    -- int, void, if, for, class, using
//   tp  azul    -- string, List, bool, double
//   st  rosa    -- "strings entre aspas"
//   cm  cinza   -- // comentarios
//   nm  amarelo -- numeros: 42, 3.14
//   mt  ciano   -- metodos: WriteLine, Add, Remove
// =====================================================

const MISSIONS = [
  MISSION_0,
  // MISSION_1,
  // MISSION_2,
];
