// =====================================================
// LEON.CS - missions/mission_0.js
// Missao: Lógica de Programação e Algoritmos
// =====================================================

const MISSION_1 = {
  id: 1,
  title: 'Lógica de Programação e Algoritmos Nível 2',
  icon: '🎮',
  free: true,
  desc: 'Em Resident Evil, sobreviver não depende só de armas. Leon precisa pensar antes de agir: decidir para onde ir, qual porta abrir, qual item usar.',
  objs: [
    'Entender o que é lógica de programação e algoritmos',
    'Aprender a pensar como um programador',
  ],
  steps: [
    {
      type: 'mc',
      bubble: 'Agente, um <strong>algoritmo</strong> é como um plano de missão em um jogo: uma sequência de passos que você precisa seguir para chegar ao objetivo.',
      q: 'O que é um algoritmo?',
      hint: 'Pense em uma sequência de passos',
      opts: [
        { t: 'Um tipo de computador', ok: false },
        { t: 'Um vírus de computador', ok: false },
        { t: 'Um conjunto de passos para resolver um problema', ok: true },
        { t: 'Um jogo online', ok: false },
      ],
      exp: 'Algoritmo é uma sequência organizada de passos usada para resolver um problema.',
    },
    {
      type: 'mc',
      bubble: 'Agente, programas recebem informações, processam esses dados e mostram um resultado.',
      q: 'Qual é a sequência básica de um algoritmo?',
      hint: 'Entrada → algo acontece → resultado',
      opts: [
        { t: 'Saída → Entrada → Processamento', ok: false },
        { t: 'Entrada → Processamento → Saída', ok: true },
        { t: 'Saída → Processamento → Entrada', ok: false },
        { t: 'Processamento → Saída → Entrada', ok: false },
      ],
      exp: 'Todo algoritmo normalmente recebe dados (entrada), processa esses dados e apresenta um resultado (saída).',
    },
  ],
};
