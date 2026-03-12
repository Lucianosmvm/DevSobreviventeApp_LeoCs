// ══════════════════════════════════════════════════════
// MISSÃO 15 — PROTOCOLO ⚔️ MISSÃO CHEFE | Funções básicas
// Tipo: CHEFE (18 questões) | 6 MC → 5 Fill → 7 Code
// ══════════════════════════════════════════════════════

const missao15 = {
  id: 15, act: 1,
  titulo: "MISSÃO 15 — PROTOCOLO",
  subtitulo: "A Vila • Missão Chefe ⚔️",
  descricao: "Cada agente segue protocolos — sequências de ações que podem ser reutilizadas. Funções são seus protocolos de código: escreva uma vez, execute quantas vezes precisar.",
  xp: 260, boss: true,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Uma <strong>função</strong> é um bloco de código nomeado e reutilizável. Resolve um problema específico e pode ser chamado quantas vezes precisar.',
      q:'Qual a principal vantagem de organizar código em funções?',
      hint:'Escreva uma vez, use várias',
      opts:[
        {t:'O código fica mais lento', ok:false},
        {t:'Reutilização, organização e manutenção facilitada', ok:true},
        {t:'Funciona apenas em C#', ok:false},
        {t:'Aumenta o uso de memória', ok:false},
      ],
      exp:'Funções: reutilizam código (DRY), organizam a lógica em partes menores, facilitam testes e manutenção.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Em C#, <code>static</code> na assinatura permite chamar a função sem criar um objeto da classe.',
      q:'Por que usamos "static" nas funções do Main?',
      hint:'Main também é static',
      opts:[
        {t:'Para deixar a função mais rápida', ok:false},
        {t:'Porque Main é static e só pode chamar outros métodos static diretamente', ok:true},
        {t:'Static é obrigatório em todas as funções', ok:false},
        {t:'Para proteger a função de ser alterada', ok:false},
      ],
      exp:'"Main" é static. Métodos static não precisam de instância de objeto. Veremos mais sobre isso em OOP (Act II).',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Uma função <strong>void</strong> executa ações mas não retorna nenhum valor. Uma função com tipo de retorno retorna um valor.',
      q:'Quando usar void como tipo de retorno?',
      hint:'Quando a função não precisa devolver nada',
      opts:[
        {t:'Quando a função é muito curta', ok:false},
        {t:'Quando a função executa uma ação mas não precisa devolver resultado', ok:true},
        {t:'void é mais rápido que int', ok:false},
        {t:'Apenas para funções com Console.WriteLine', ok:false},
      ],
      exp:'"void" = sem retorno. Imprimir algo, mover um personagem — não precisam retornar. Calcular algo — retornam um valor.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<strong>Parâmetros</strong> são as variáveis na definição da função. <strong>Argumentos</strong> são os valores passados na chamada.',
      q:'Na definição "static int Somar(int a, int b)", a e b são chamados de:',
      hint:'Estão na definição',
      opts:[
        {t:'Argumentos', ok:false},{t:'Retornos', ok:false},
        {t:'Parâmetros', ok:true},{t:'Variáveis globais', ok:false},
      ],
      exp:'"a" e "b" são parâmetros (na definição). Quando chamamos Somar(3, 5), os valores 3 e 5 são os argumentos.',
    },

    // Q5 — MC
    {
      type:'mc',
      bubble:'O <strong>escopo</strong> de uma variável define onde ela existe. Variáveis locais só existem dentro da função onde foram declaradas.',
      q:'Uma variável declarada dentro de uma função pode ser usada fora dela?',
      hint:'Escopo local',
      opts:[
        {t:'Sim, se for int', ok:false},
        {t:'Não — variáveis locais existem apenas dentro de sua função', ok:true},
        {t:'Sim, com a palavra global', ok:false},
        {t:'Apenas se começar com maiúscula', ok:false},
      ],
      exp:'Escopo local: variáveis morrem quando a função termina. Fora da função, elas não existem — erro de compilação.',
    },

    // Q6 — MC
    {
      type:'mc',
      bubble:'O <strong>princípio da responsabilidade única</strong>: cada função deve fazer uma coisa só, e fazer bem.',
      q:'Uma função chamada "LerValidarEGravar()" viola qual princípio?',
      hint:'Ela faz três coisas',
      opts:[
        {t:'Nenhum — eficiência é boa', ok:false},
        {t:'Responsabilidade única — deveria ser dividida em três funções', ok:true},
        {t:'DRY', ok:false},
        {t:'KISS', ok:false},
      ],
      exp:'Responsabilidade única: uma função, uma tarefa. Ler(), Validar(), Gravar() são três responsabilidades distintas.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'A assinatura de uma função define: modificador, tipo de retorno, nome e parâmetros.',
      code:`<span class="kw">static _______</span> <span class="mt">Atacar</span>() { Console.<span class="mt">WriteLine</span>(<span class="st">"Ataque!"</span>); }`,
      q:'Qual tipo de retorno usar para uma função que não retorna nada?',
      hint:'Vazio em inglês',
      ans:'void',
      exp:'"static void Atacar()" — void indica sem retorno. A função executa e volta, mas não devolve valor.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'A palavra-chave <code>return</code> encerra a função e devolve um valor para quem chamou.',
      code:`<span class="kw">static int</span> <span class="mt">Dobro</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">_______</span> n * <span class="nm">2</span>;\n}`,
      q:'Qual palavra-chave devolve o valor da função?',
      hint:'Retornar em inglês',
      ans:'return',
      exp:'"return n * 2" encerra a função e devolve n × 2 para quem chamou. Após o return, nenhuma linha da função executa.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'Para chamar uma função, escreva seu nome seguido dos argumentos entre parênteses.',
      code:`<span class="kw">int</span> resultado = <span class="mt">_______</span>(<span class="nm">5</span>, <span class="nm">3</span>);`,
      q:'Para chamar a função Somar passando 5 e 3, qual nome usar?',
      hint:'O nome da função que soma',
      ans:'Somar',
      exp:'"Somar(5, 3)" chama a função e passa 5 e 3 como argumentos. O retorno é atribuído a "resultado".',
    },

    // Q10 — Fill
    {
      type:'fill',
      bubble:'Parâmetros com valores padrão tornam argumentos opcionais. Se não passado, usa o padrão.',
      code:`<span class="kw">static void</span> <span class="mt">Atacar</span>(<span class="kw">int</span> dano = <span class="nm">_______</span>) { }`,
      q:'Qual valor padrão colocar para que a função ataque com 10 de dano se nenhum for passado?',
      hint:'O valor padrão de dano',
      ans:'10',
      exp:'"int dano = 10" — se Atacar() for chamado sem argumento, dano = 10. Atacar(50) sobrescreve com 50.',
    },

    // Q11 — Fill
    {
      type:'fill',
      bubble:'Funções que retornam bool costumam ser nomeadas como perguntas: EstaVivo(), TemMunicao(), etc.',
      code:`<span class="kw">static bool</span> <span class="mt">_______</span>(<span class="kw">int</span> hp) => hp > <span class="nm">0</span>;`,
      q:'Qual nome descritivo para uma função que verifica se o personagem está vivo?',
      hint:'Está vivo?',
      ans:'EstaVivo',
      exp:'"EstaVivo(hp)" lê como uma pergunta. Funções bool com prefixo "Esta", "Tem", "E" comunicam claramente o propósito.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Função simples sendo chamada.',
      code:`<span class="kw">static void</span> <span class="mt">MissaoIniciada</span>()\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"=== MISSÃO INICIADA ==="</span>);\n}\n\n<span class="mt">MissaoIniciada</span>();\n<span class="mt">MissaoIniciada</span>();`,
      q:'O que será exibido?',
      hint:'A função é chamada duas vezes',
      opts:[
        {t:'"=== MISSÃO INICIADA ===" uma vez', ok:false},
        {t:'"=== MISSÃO INICIADA ===" duas vezes', ok:true},
        {t:'Erro — não pode chamar a mesma função duas vezes', ok:false},
        {t:'MissaoIniciada MissaoIniciada', ok:false},
      ],
      exp:'Cada chamada executa o corpo da função. Duas chamadas = duas impressões da mesma mensagem.',
    },

    // Q13 — Code
    {
      type:'code',
      bubble:'Função com parâmetros e retorno.',
      code:`<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> base, <span class="kw">int</span> mult)\n    => base * mult;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dano</span>(<span class="nm">15</span>, <span class="nm">3</span>));`,
      q:'O que será exibido?',
      hint:'15 × 3',
      opts:[
        {t:'15', ok:false},{t:'18', ok:false},
        {t:'45', ok:true},{t:'153', ok:false},
      ],
      exp:'"Dano(15, 3)" passa base=15, mult=3. Retorna 15 × 3 = 45. A "=>" é expression body — atalho para return simples.',
    },

    // Q14 — Code
    {
      type:'code',
      bubble:'Funções chamando outras funções.',
      code:`<span class="kw">static int</span> <span class="mt">Quadrado</span>(<span class="kw">int</span> n) => n * n;\n<span class="kw">static int</span> <span class="mt">SomaQ</span>(<span class="kw">int</span> a, <span class="kw">int</span> b)\n    => <span class="mt">Quadrado</span>(a) + <span class="mt">Quadrado</span>(b);\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">SomaQ</span>(<span class="nm">3</span>, <span class="nm">4</span>));`,
      q:'Qual o resultado de SomaQ(3, 4)?',
      hint:'3² + 4²',
      opts:[
        {t:'49', ok:false},{t:'7', ok:false},
        {t:'25', ok:true},{t:'12', ok:false},
      ],
      exp:'Quadrado(3)=9, Quadrado(4)=16. SomaQ = 9+16 = 25. (Teorema de Pitágoras! 3-4-5)',
    },

    // Q15 — Code
    {
      type:'code',
      bubble:'Escopo de variáveis em funções.',
      code:`<span class="kw">static void</span> <span class="mt">Func</span>()\n{\n    <span class="kw">int</span> local = <span class="nm">42</span>;\n    Console.<span class="mt">WriteLine</span>(local);\n}\n<span class="mt">Func</span>();\nConsole.<span class="mt">WriteLine</span>(local); <span class="cm">// ← problema</span>`,
      q:'Por que a última linha causa erro de compilação?',
      hint:'Onde "local" existe?',
      opts:[
        {t:'local não foi inicializado', ok:false},
        {t:'"local" só existe dentro de Func — escopo local', ok:true},
        {t:'Console.WriteLine não aceita variáveis int', ok:false},
        {t:'Falta ponto e vírgula', ok:false},
      ],
      exp:'"local" existe apenas dentro de Func(). Fora da função, o compilador não conhece essa variável — erro de compilação.',
    },

    // Q16 — Code
    {
      type:'code',
      bubble:'Parâmetro com valor padrão em ação.',
      code:`<span class="kw">static void</span> <span class="mt">Atirar</span>(<span class="kw">int</span> balas = <span class="nm">1</span>)\n    => Console.<span class="mt">WriteLine</span>(<span class="st">$"Disparou {balas} bala(s)"</span>);\n\n<span class="mt">Atirar</span>();\n<span class="mt">Atirar</span>(<span class="nm">3</span>);`,
      q:'O que será exibido?',
      hint:'Primeiro usa padrão, segundo passa 3',
      opts:[
        {t:'Disparou 1 bala(s) e Disparou 1 bala(s)', ok:false},
        {t:'Disparou 1 bala(s) e Disparou 3 bala(s)', ok:true},
        {t:'Erro — argumento obrigatório', ok:false},
        {t:'Disparou 3 bala(s) e Disparou 3 bala(s)', ok:false},
      ],
      exp:'"Atirar()" usa padrão balas=1 → "Disparou 1 bala(s)". "Atirar(3)" passa 3 → "Disparou 3 bala(s)".',
    },

    // Q17 — Code
    {
      type:'code',
      bubble:'Função recursiva — chama a si mesma.',
      code:`<span class="kw">static int</span> <span class="mt">Fatorial</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">1</span>) <span class="kw">return</span> <span class="nm">1</span>;\n    <span class="kw">return</span> n * <span class="mt">Fatorial</span>(n - <span class="nm">1</span>);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Fatorial</span>(<span class="nm">5</span>));`,
      q:'Qual o resultado de Fatorial(5)?',
      hint:'5 × 4 × 3 × 2 × 1',
      opts:[
        {t:'25', ok:false},{t:'60', ok:false},
        {t:'120', ok:true},{t:'15', ok:false},
      ],
      exp:'5×Fatorial(4) = 5×4×Fatorial(3) = 5×4×3×Fatorial(2) = 5×4×3×2×1 = 120.',
    },

    // Q18 — Code
    {
      type:'code',
      bubble:'🏆 DESAFIO CHEFE — Funções combinadas para o sistema de combate.',
      code:`<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> b, <span class="kw">bool</span> critico)\n    => critico ? b * <span class="nm">2</span> : b;\n\n<span class="kw">static bool</span> <span class="mt">EstaVivo</span>(<span class="kw">int</span> hp) => hp > <span class="nm">0</span>;\n\n<span class="kw">int</span> hp = <span class="nm">100</span>;\nhp -= <span class="mt">Dano</span>(<span class="nm">30</span>, <span class="kw">true</span>);\nhp -= <span class="mt">Dano</span>(<span class="nm">20</span>, <span class="kw">false</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="mt">EstaVivo</span>(hp));`,
      q:'O personagem está vivo após os dois ataques?',
      hint:'100 - crítico(30) - normal(20)',
      opts:[
        {t:'False — morreu', ok:false},
        {t:'True — ainda está vivo', ok:true},
        {t:'Erro de compilação', ok:false},
        {t:'0', ok:false},
      ],
      exp:'Dano(30,true) = 60. Dano(20,false) = 20. hp = 100 - 60 - 20 = 20. EstaVivo(20) = 20 > 0 = True.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 16 — ORDEM DE MISSÃO | Funções com parâmetros e retorno
// Tipo: Normal (11 questões) | 3 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao16 = {
  id: 16, act: 1,
  titulo: "MISSÃO 16 — ORDEM DE MISSÃO",
  subtitulo: "A Vila",
  descricao: "Cada ordem chega com parâmetros específicos: local, alvo, armamento. Funções com parâmetros bem definidos são ordens claras — sem ambiguidade.",
  xp: 150, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>Sobrecarga (overloading)</strong> permite criar múltiplas funções com o mesmo nome mas parâmetros diferentes.',
      q:'O que define qual versão sobrecarregada de uma função é chamada?',
      hint:'Os argumentos passados na chamada',
      opts:[
        {t:'O tipo de retorno', ok:false},
        {t:'O número e tipo dos argumentos passados', ok:true},
        {t:'A ordem de declaração', ok:false},
        {t:'O nome é suficiente — qualquer versão funciona', ok:false},
      ],
      exp:'Overloading: o compilador escolhe a versão correta pelo número e tipo dos argumentos. Atacar(int) ≠ Atacar(int, bool).',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Parâmetros <strong>ref</strong> e <strong>out</strong> permitem que a função modifique variáveis do chamador.',
      q:'Qual a diferença entre ref e out?',
      hint:'Um exige inicialização prévia, o outro não',
      opts:[
        {t:'São idênticos', ok:false},
        {t:'ref exige que a variável esteja inicializada; out não exige mas deve ser atribuído na função', ok:true},
        {t:'out é mais rápido', ok:false},
        {t:'ref funciona apenas com strings', ok:false},
      ],
      exp:'"ref": variável já deve ter valor. "out": não precisa de valor inicial, mas a função DEVE atribuir um antes de retornar.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<strong>Params</strong> permite passar um número variável de argumentos para uma função.',
      q:'static void Imprimir(params string[] msgs) pode ser chamada com:',
      hint:'Params é flexível',
      opts:[
        {t:'Apenas um argumento', ok:false},
        {t:'Qualquer número de argumentos string', ok:true},
        {t:'Nenhum argumento', ok:false},
        {t:'Apenas arrays previamente criados', ok:false},
      ],
      exp:'"params" aceita 0 ou mais argumentos. Imprimir("a"), Imprimir("a","b"), Imprimir("a","b","c") — todos funcionam.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'Para retornar múltiplos valores, podemos usar tuplas: <code>(tipo1, tipo2)</code> como tipo de retorno.',
      code:`<span class="kw">static</span> (<span class="kw">int</span>, <span class="kw">bool</span>) <span class="mt">Atacar</span>(<span class="kw">int</span> dano)\n    => (dano * <span class="nm">2</span>, dano > <span class="nm">50</span>);\n\n<span class="kw">var</span> (<span class="kw">_______</span>, critico) = <span class="mt">Atacar</span>(<span class="nm">30</span>);`,
      q:'Qual nome dar à primeira variável da tupla desestruturada?',
      hint:'O primeiro valor é o dano calculado',
      ans:'danoFinal',
      exp:'Tupla retorna dois valores. "(danoFinal, critico) = Atacar(30)" desestrutura: danoFinal=60, critico=false.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Funções podem chamar outras funções. O código fica organizado em camadas de abstração.',
      code:`<span class="kw">static void</span> <span class="mt">ExecutarMissao</span>()\n{\n    <span class="mt">_______</span>();\n    <span class="mt">EliminarInimigos</span>();\n    <span class="mt">Evacuar</span>();\n}`,
      q:'Qual função de reconhecimento deveria ser a primeira chamada?',
      hint:'Antes de agir, reconheça',
      ans:'Reconhecer',
      exp:'Composição de funções: ExecutarMissao chama Reconhecer → EliminarInimigos → Evacuar. Cada função faz sua parte.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'A expression body <code>=></code> é um atalho para funções com retorno em uma linha.',
      code:`<span class="kw">static bool</span> <span class="mt">EhCritico</span>(<span class="kw">int</span> dano) <span class="kw">_______</span> dano > <span class="nm">100</span>;`,
      q:'Qual símbolo substitui "{ return ... }" no expression body?',
      hint:'Uma seta',
      ans:'=>',
      exp:'"=>" expression body: "static bool EhCritico(int d) => d > 100" é equivalente a "{ return d > 100; }". Mais conciso.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para usar o parâmetro out na chamada, também precisamos da palavra-chave out.',
      code:`<span class="kw">int</span> resultado;\n<span class="kw">bool</span> ok = <span class="kw">int</span>.<span class="mt">TryParse</span>(<span class="st">"42"</span>, <span class="kw">_______</span> resultado);`,
      q:'Qual palavra-chave usar antes do parâmetro out na chamada?',
      hint:'Mesma palavra da definição',
      ans:'out',
      exp:'"out resultado" na chamada. TryParse define o valor de "resultado" se a conversão for bem-sucedida.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Sobrecarga de funções.',
      code:`<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> b) => b;\n<span class="kw">static int</span> <span class="mt">Dano</span>(<span class="kw">int</span> b, <span class="kw">bool</span> c) => c ? b*<span class="nm">2</span> : b;\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dano</span>(<span class="nm">20</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Dano</span>(<span class="nm">20</span>, <span class="kw">true</span>));`,
      q:'O que será exibido?',
      hint:'Primeira chama a versão com 1 param, segunda com 2',
      opts:[
        {t:'20 e 20', ok:false},
        {t:'20 e 40', ok:true},
        {t:'Erro — nome duplicado', ok:false},
        {t:'40 e 40', ok:false},
      ],
      exp:'"Dano(20)" chama a versão de 1 parâmetro → 20. "Dano(20, true)" chama a de 2 parâmetros → 20*2 = 40.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Usando params para somar quantidade variável.',
      code:`<span class="kw">static int</span> <span class="mt">Somar</span>(<span class="kw">params int</span>[] nums)\n{\n    <span class="kw">int</span> t = <span class="nm">0</span>;\n    <span class="kw">foreach</span>(<span class="kw">int</span> n <span class="kw">in</span> nums) t += n;\n    <span class="kw">return</span> t;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Somar</span>(<span class="nm">1</span>,<span class="nm">2</span>,<span class="nm">3</span>,<span class="nm">4</span>,<span class="nm">5</span>));`,
      q:'O que será exibido?',
      hint:'Soma de 1 a 5',
      opts:[
        {t:'5', ok:false},{t:'10', ok:false},
        {t:'15', ok:true},{t:'54321', ok:false},
      ],
      exp:'"params int[] nums" recebe 1,2,3,4,5 como array. Soma = 1+2+3+4+5 = 15.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Retornando tupla com múltiplos valores.',
      code:`<span class="kw">static</span> (<span class="kw">int</span> min, <span class="kw">int</span> max) <span class="mt">MinMax</span>(<span class="kw">int</span>[] a)\n    => (a.<span class="mt">Min</span>(), a.<span class="mt">Max</span>());\n\n<span class="kw">var</span> (min, max) = <span class="mt">MinMax</span>(<span class="kw">new int</span>[] {<span class="nm">3</span>,<span class="nm">7</span>,<span class="nm">1</span>,<span class="nm">9</span>,<span class="nm">4</span>});\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Min:{min} Max:{max}"</span>);`,
      q:'O que será exibido?',
      hint:'Menor e maior do array {3,7,1,9,4}',
      opts:[
        {t:'Min:3 Max:9', ok:false},
        {t:'Min:1 Max:9', ok:true},
        {t:'Min:1 Max:7', ok:false},
        {t:'Min:3 Max:7', ok:false},
      ],
      exp:'.Min() = 1, .Max() = 9. A tupla retorna (1, 9) e desestrutura em min e max.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Funções com expressão guard (early return) para validação.',
      code:`<span class="kw">static void</span> <span class="mt">Recarregar</span>(<span class="kw">int</span> municao)\n{\n    <span class="kw">if</span> (municao >= <span class="nm">30</span>)\n    {\n        Console.<span class="mt">WriteLine</span>(<span class="st">"Cheio — não precisa recarregar"</span>);\n        <span class="kw">return</span>;\n    }\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Recarregando..."</span>);\n}\n<span class="mt">Recarregar</span>(<span class="nm">30</span>);`,
      q:'O que será exibido para municao = 30?',
      hint:'30 >= 30 é verdadeiro',
      opts:[
        {t:'Recarregando...', ok:false},
        {t:'Cheio — não precisa recarregar', ok:true},
        {t:'Ambas as mensagens', ok:false},
        {t:'Nada', ok:false},
      ],
      exp:'municao=30 >= 30 = true. Imprime a mensagem e "return" encerra a função. A segunda linha não executa.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 17 — COMUNICAÇÃO | String — métodos básicos
// Tipo: Normal (11 questões) | 3 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao17 = {
  id: 17, act: 1,
  titulo: "MISSÃO 17 — COMUNICAÇÃO",
  subtitulo: "A Vila",
  descricao: "Mensagens codificadas, relatórios de campo, transmissões de rádio — tudo é texto. Dominar os métodos de string é essencial para processar qualquer informação.",
  xp: 150, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Strings em C# são <strong>imutáveis</strong>. Qualquer operação que parece modificar uma string cria uma nova na memória.',
      q:'Por que strings são imutáveis em C#?',
      hint:'Segurança e performance (caching)',
      opts:[
        {t:'Para dificultar a programação', ok:false},
        {t:'Por segurança e otimização — strings idênticas podem compartilhar memória', ok:true},
        {t:'É uma limitação do compilador', ok:false},
        {t:'Strings podem ser modificadas com ref', ok:false},
      ],
      exp:'Imutabilidade garante thread-safety e permite string interning (mesmos literais compartilham memória). Para mutabilidade, use StringBuilder.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>string.Length</code> retorna o número de caracteres. Espaços e símbolos também contam.',
      q:'Qual o Length de "Leon"?',
      hint:'Conte as letras',
      opts:[
        {t:'3', ok:false},{t:'5', ok:false},
        {t:'4', ok:true},{t:'0', ok:false},
      ],
      exp:'"Leon" tem 4 caracteres: L-e-o-n. Length conta todos os caracteres, incluindo espaços e símbolos.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>==</code> para strings compara o conteúdo, não a referência (diferente de Java). Usa comparação de valor.',
      q:'Como comparar se duas strings têm o mesmo conteúdo em C#?',
      hint:'Mais simples que você pensa',
      opts:[
        {t:'str1.Equals(str2) — == não funciona para strings', ok:false},
        {t:'str1 == str2 — compara conteúdo diretamente', ok:true},
        {t:'str1.CompareTo(str2) == 0', ok:false},
        {t:'str1.ReferenceEquals(str2)', ok:false},
      ],
      exp:'Em C#, "==" para strings compara conteúdo. "Leon" == "Leon" = true. Diferente de Java onde == compara referência.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'<code>ToUpper()</code> converte toda a string para maiúsculas. Útil para comparações case-insensitive.',
      code:`<span class="kw">string</span> nome = <span class="st">"leon"</span>.<span class="mt">_______</span>(); <span class="cm">// "LEON"</span>`,
      q:'Qual método converte para maiúsculas?',
      hint:'To Upper Case',
      ans:'ToUpper',
      exp:'"ToUpper()" = maiúsculas. "ToLower()" = minúsculas. Para comparação: nome.ToLower() == "leon" — ignora o case.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'<code>Trim()</code> remove espaços em branco do início e do fim da string.',
      code:`<span class="kw">string</span> limpa = <span class="st">"  Leon  "</span>.<span class="mt">_______</span>(); <span class="cm">// "Leon"</span>`,
      q:'Qual método remove espaços das extremidades?',
      hint:'Aparar em inglês',
      ans:'Trim',
      exp:'"Trim()" remove espaços (e outros whitespace) do início e fim. "TrimStart()" só do início. "TrimEnd()" só do fim.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'<code>Contains()</code> verifica se uma string contém outra como substring.',
      code:`<span class="kw">bool</span> temArma = arsenal.<span class="mt">_______</span>(<span class="st">"Pistola"</span>);`,
      q:'Qual método verifica se a string contém uma substring?',
      hint:'Contém?',
      ans:'Contains',
      exp:'"Contains(sub)" retorna true se "sub" aparecer em qualquer posição. Case-sensitive por padrão.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>Replace(antigo, novo)</code> substitui todas as ocorrências de uma substring por outra.',
      code:`<span class="kw">string</span> msg = <span class="st">"Ganado Ganado Ganado"</span>.\n    <span class="mt">_______</span>(<span class="st">"Ganado"</span>, <span class="st">"Eliminado"</span>);`,
      q:'Qual método substitui substrings?',
      hint:'Trocar em inglês',
      ans:'Replace',
      exp:'"Replace(old, new)" substitui TODAS as ocorrências. Retorna nova string (imutável). Resultado: "Eliminado Eliminado Eliminado".',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Métodos de string em cadeia (method chaining).',
      code:`<span class="kw">string</span> input = <span class="st">"  Leon Kennedy  "</span>;\n<span class="kw">string</span> resultado = input.<span class="mt">Trim</span>().<span class="mt">ToUpper</span>().\n    <span class="mt">Replace</span>(<span class="st">" "</span>, <span class="st">"_"</span>);\nConsole.<span class="mt">WriteLine</span>(resultado);`,
      q:'O que será exibido?',
      hint:'Trim → maiúsculas → troca espaço por _',
      opts:[
        {t:'Leon Kennedy', ok:false},
        {t:'LEON_KENNEDY', ok:true},
        {t:'leon_kennedy', ok:false},
        {t:'  LEON KENNEDY  ', ok:false},
      ],
      exp:'Trim() → "Leon Kennedy". ToUpper() → "LEON KENNEDY". Replace(" ","_") → "LEON_KENNEDY".',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Split para dividir uma string em partes.',
      code:`<span class="kw">string</span> missao = <span class="st">"Infiltrar,Resgatar,Escapar"</span>;\n<span class="kw">string</span>[] etapas = missao.<span class="mt">Split</span>(<span class="st">','</span>);\nConsole.<span class="mt">WriteLine</span>(etapas.<span class="mt">Length</span>);\nConsole.<span class="mt">WriteLine</span>(etapas[<span class="nm">1</span>]);`,
      q:'O que será exibido?',
      hint:'Split divide pela vírgula em 3 partes',
      opts:[
        {t:'3 e Infiltrar', ok:false},
        {t:'3 e Resgatar', ok:true},
        {t:'2 e Resgatar', ok:false},
        {t:'Infiltrar,Resgatar,Escapar', ok:false},
      ],
      exp:'Split(",") cria array: ["Infiltrar","Resgatar","Escapar"]. Length = 3. etapas[1] = "Resgatar".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Substring para extrair parte de uma string.',
      code:`<span class="kw">string</span> codigo = <span class="st">"RE4-LEON-DSO"</span>;\n<span class="kw">string</span> agente = codigo.<span class="mt">Substring</span>(<span class="nm">4</span>, <span class="nm">4</span>);\nConsole.<span class="mt">WriteLine</span>(agente);`,
      q:'O que será exibido?',
      hint:'Substring(startIndex, length) — começa no índice 4 e pega 4 chars',
      opts:[
        {t:'RE4-', ok:false},{t:'LEON', ok:true},
        {t:'-DSO', ok:false},{t:'LEON-', ok:false},
      ],
      exp:'"RE4-LEON-DSO": índice 4 = \'L\'. Pega 4 chars: L-E-O-N = "LEON". Substring(startIndex, length).',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'IndexOf para encontrar a posição de uma substring.',
      code:`<span class="kw">string</span> msg = <span class="st">"Missão: Resgatar Ashley"</span>;\n<span class="kw">int</span> pos = msg.<span class="mt">IndexOf</span>(<span class="st">"Ashley"</span>);\nConsole.<span class="mt">WriteLine</span>(pos);`,
      q:'Qual é a posição de início de "Ashley"?',
      hint:'Conta a partir do índice 0',
      opts:[
        {t:'17', ok:true},{t:'6', ok:false},
        {t:'0', ok:false},{t:'-1', ok:false},
      ],
      exp:'"Missão: Resgatar Ashley" — "Ashley" começa no índice 17. IndexOf retorna -1 se não encontrar.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 18 — CIFRA DA ALDEIA | String — manipulação
// Tipo: Normal (11 questões) | 3 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao18 = {
  id: 18, act: 1,
  titulo: "MISSÃO 18 — CIFRA DA ALDEIA",
  subtitulo: "A Vila",
  descricao: "Os cultistas se comunicam em código. Para decifrar suas mensagens, você precisa de técnicas avançadas de manipulação de strings.",
  xp: 150, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<strong>StringBuilder</strong> é mutável e eficiente para concatenar muitas strings. Evita criar dezenas de objetos string temporários.',
      q:'Quando usar StringBuilder em vez de string + string?',
      hint:'Quando há muitas concatenações',
      opts:[
        {t:'Sempre — StringBuilder é sempre melhor', ok:false},
        {t:'Quando há muitas concatenações em loop — evita desperdício de memória', ok:true},
        {t:'Apenas para strings maiores que 100 chars', ok:false},
        {t:'StringBuilder não existe em C#', ok:false},
      ],
      exp:'Em loop com 1000 concatenações, "s += x" cria 1000 objetos string. StringBuilder reutiliza um buffer — muito mais eficiente.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>string.Format()</code> e interpolação <code>$""</code> são formas de formatar strings com valores dinâmicos.',
      q:'Qual é a forma mais moderna de formatar strings em C#?',
      hint:'Versão mais recente',
      opts:[
        {t:'string.Format("Olá {0}", nome)', ok:false},
        {t:'$"Olá {nome}" — interpolação', ok:true},
        {t:'"Olá" + nome', ok:false},
        {t:'Console.Write("Olá", nome)', ok:false},
      ],
      exp:'Interpolação com $ é a forma moderna (C# 6+). $"Olá {nome}" é mais legível que string.Format("Olá {0}", nome).',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Strings podem ser comparadas ignorando maiúsculas/minúsculas com <code>StringComparison.OrdinalIgnoreCase</code>.',
      q:'Como comparar "Leon" e "leon" como iguais?',
      hint:'Ignore o case',
      opts:[
        {t:'"Leon" == "leon"', ok:false},
        {t:'"Leon".Equals("leon", StringComparison.OrdinalIgnoreCase)', ok:true},
        {t:'"Leon".ToUpper() == "leon".ToUpper()', ok:true},
        {t:'Ambas b e c funcionam', ok:true},
      ],
      exp:'Tanto Equals com StringComparison quanto converter ambas com ToUpper/ToLower funcionam. Equals com StringComparison é mais explícito.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'<code>PadLeft(n)</code> adiciona espaços à esquerda até completar n caracteres. Útil para alinhar texto.',
      code:`<span class="kw">string</span> num = <span class="st">"42"</span>.<span class="mt">_______</span>(<span class="nm">5</span>); <span class="cm">// "   42"</span>`,
      q:'Qual método preenche com espaços à esquerda?',
      hint:'Pad à esquerda',
      ans:'PadLeft',
      exp:'"PadLeft(5)" preenche com espaços à esquerda até 5 chars: "   42". "PadRight(5)" preenche à direita: "42   ".',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'<code>StartsWith()</code> e <code>EndsWith()</code> verificam se a string começa ou termina com um texto específico.',
      code:`<span class="kw">bool</span> codigo = serial.<span class="mt">_______</span>(<span class="st">"RE4"</span>);`,
      q:'Qual método verifica se a string começa com "RE4"?',
      hint:'Começa com em inglês',
      ans:'StartsWith',
      exp:'"StartsWith("RE4")" = true se começar com "RE4". "EndsWith(".txt")" = true se terminar com ".txt".',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para inverter uma string, convertemos para array de chars, invertemos e recriamos a string.',
      code:`<span class="kw">char</span>[] chars = nome.<span class="mt">ToCharArray</span>();\nArray.<span class="mt">_______</span>(chars);\n<span class="kw">string</span> invertida = <span class="kw">new string</span>(chars);`,
      q:'Qual método inverte o array de chars?',
      hint:'Inverter o array',
      ans:'Reverse',
      exp:'"Array.Reverse(chars)" inverte o array in-place. "new string(chars)" reconstrói a string dos chars invertidos.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'StringBuilder usa <code>Append()</code> para adicionar texto e <code>ToString()</code> para obter o resultado.',
      code:`<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();\nsb.<span class="mt">_______</span>(<span class="st">"Missão: "</span>);\nsb.<span class="mt">Append</span>(<span class="st">"Concluída"</span>);`,
      q:'Qual método adiciona texto ao StringBuilder?',
      hint:'Acrescentar em inglês',
      ans:'Append',
      exp:'"sb.Append(texto)" adiciona ao final. "sb.AppendLine(texto)" adiciona com quebra de linha. "sb.ToString()" converte para string.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'StringBuilder em loop — construindo relatório.',
      code:`<span class="kw">var</span> sb = <span class="kw">new</span> StringBuilder();\n<span class="kw">string</span>[] kills = {<span class="st">"Ganado"</span>,<span class="st">"Cultista"</span>,<span class="st">"Regenerador"</span>};\n<span class="kw">foreach</span>(<span class="kw">var</span> k <span class="kw">in</span> kills)\n    sb.<span class="mt">AppendLine</span>(<span class="st">$"✓ {k}"</span>);\nConsole.<span class="mt">Write</span>(sb.<span class="mt">ToString</span>());`,
      q:'Quantas linhas serão exibidas?',
      hint:'Um item, uma linha',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'0', ok:false},
      ],
      exp:'AppendLine adiciona cada kill em uma linha. ToString() converte tudo. 3 elementos = 3 linhas.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Verificando se uma string é palíndromo.',
      code:`<span class="kw">static bool</span> <span class="mt">Palindromo</span>(<span class="kw">string</span> s)\n{\n    <span class="kw">char</span>[] c = s.<span class="mt">ToCharArray</span>();\n    Array.<span class="mt">Reverse</span>(c);\n    <span class="kw">return</span> s == <span class="kw">new string</span>(c);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Palindromo</span>(<span class="st">"arara"</span>));`,
      q:'O que será exibido?',
      hint:'"arara" ao contrário é...',
      opts:[
        {t:'False', ok:false},{t:'arara', ok:false},
        {t:'True', ok:true},{t:'Erro', ok:false},
      ],
      exp:'"arara" invertida = "arara". s == new string(c) → "arara" == "arara" = True.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Formatação de número com PadLeft para placar.',
      code:`<span class="kw">int</span>[] scores = {<span class="nm">100</span>, <span class="nm">2500</span>, <span class="nm">45</span>};\n<span class="kw">foreach</span> (<span class="kw">int</span> s <span class="kw">in</span> scores)\n    Console.<span class="mt">WriteLine</span>(s.<span class="mt">ToString</span>().<span class="mt">PadLeft</span>(<span class="nm">6</span>));`,
      q:'Como os números aparecerão alinhados?',
      hint:'PadLeft(6) alinha à direita com 6 caracteres',
      opts:[
        {t:'100, 2500, 45 (sem alinhamento)', ok:false},
        {t:'Todos alinhados à direita com espaços à esquerda', ok:true},
        {t:'Todos com zeros à esquerda', ok:false},
        {t:'Erro de compilação', ok:false},
      ],
      exp:'PadLeft(6): "   100", "  2500", "    45". Todos com 6 chars, alinhados à direita — perfeito para placar.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Contando vogais com LINQ em string.',
      code:`<span class="kw">string</span> nome = <span class="st">"Leon S. Kennedy"</span>;\n<span class="kw">int</span> vogais = nome.<span class="mt">Count</span>(c => <span class="st">"aeiouAEIOU"</span>.<span class="mt">Contains</span>(c));\nConsole.<span class="mt">WriteLine</span>(vogais);`,
      q:'Quantas vogais tem "Leon S. Kennedy"?',
      hint:'e, o, e, n, e, d - conte apenas as vogais',
      opts:[
        {t:'4', ok:false},{t:'3', ok:false},
        {t:'5', ok:true},{t:'6', ok:false},
      ],
      exp:'"Leon S. Kennedy": e, o, e (Ken), e (ned) = e, o, e, e, ... Vogais: e(L-e-o-n), o, K-e-n-n-e-d-y = e,o,e,e = 5 vogais.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 19 — DIÁRIO DE ASHLEY | Char e conversão de tipos
// Tipo: Normal (10 questões) | 3 MC → 4 Fill → 3 Code
// ══════════════════════════════════════════════════════

const missao19 = {
  id: 19, act: 1,
  titulo: "MISSÃO 19 — DIÁRIO DE ASHLEY",
  subtitulo: "A Vila",
  descricao: "No diário de Ashley, cada letra é uma pista. Caracteres individuais e conversões entre tipos revelam segredos escondidos nas mensagens codificadas.",
  xp: 150, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O tipo <strong>char</strong> representa um único caractere Unicode. Internamente, é um número de 16 bits.',
      q:'Por que podemos fazer aritmética com char em C#?',
      hint:'Char é um número por baixo',
      opts:[
        {t:'Por um bug histórico do C#', ok:false},
        {t:'Porque char armazena o código numérico Unicode do caractere', ok:true},
        {t:'Chars são strings de tamanho 1', ok:false},
        {t:'Não podemos fazer aritmética com char', ok:false},
      ],
      exp:"char 'A' = código 65. 'A' + 1 = 66 = 'B'. Isso permite percorrer o alfabeto: for (char c = 'A'; c <= 'Z'; c++).",
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>char.IsLetter()</code>, <code>char.IsDigit()</code>, <code>char.IsWhiteSpace()</code> permitem classificar caracteres.',
      q:'Como verificar se um caractere é uma letra?',
      hint:'Método estático da struct char',
      opts:[
        {t:'c >= "a" && c <= "z"', ok:false},
        {t:'char.IsLetter(c)', ok:true},
        {t:'c.IsAlpha()', ok:false},
        {t:'c.GetType() == char', ok:false},
      ],
      exp:'"char.IsLetter(c)" retorna true para a-z e A-Z e letras de outros idiomas. Mais correto que comparar com a-z.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>Convert</code> vs <code>Parse</code>: Convert.ToInt32(null) retorna 0; int.Parse(null) lança exceção.',
      q:'Qual método é mais seguro para converter um valor que pode ser null?',
      hint:'Um tolera null, o outro explode',
      opts:[
        {t:'int.Parse() — mais rápido', ok:false},
        {t:'Convert.ToInt32() — trata null como 0', ok:true},
        {t:'São equivalentes para null', ok:false},
        {t:'Nenhum — use sempre TryParse', ok:false},
      ],
      exp:'"Convert.ToInt32(null)" = 0. "int.Parse(null)" lança ArgumentNullException. Para máxima segurança, use TryParse.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'Para converter um char para seu código numérico, fazemos cast para int.',
      code:`<span class="kw">char</span> c = <span class="st">'A'</span>;\n<span class="kw">int</span> codigo = (<span class="kw">_______</span>)c; <span class="cm">// 65</span>`,
      q:'Qual tipo usar no cast para obter o código numérico de um char?',
      hint:'Número inteiro',
      ans:'int',
      exp:"(int)'A' = 65. (int)'a' = 97. Tabela ASCII: A=65, Z=90, a=97, z=122, '0'=48, '9'=57.",
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para converter um código numérico de volta para char, fazemos cast para char.',
      code:`<span class="kw">int</span> codigo = <span class="nm">66</span>;\n<span class="kw">char</span> letra = (<span class="kw">_______</span>)codigo; <span class="cm">// 'B'</span>`,
      q:'Qual tipo usar no cast para converter número em char?',
      hint:'Caractere',
      ans:'char',
      exp:"(char)66 = 'B'. (char)65 = 'A'. Isso permite criar cifras: (char)('A' + 3) = 'D' (cifra de César).",
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'<code>char.ToUpper(c)</code> converte um char para maiúscula.',
      code:`<span class="kw">char</span> maiuscula = <span class="kw">char</span>.<span class="mt">_______</span>(<span class="st">'a'</span>); <span class="cm">// 'A'</span>`,
      q:'Qual método converte um char para maiúscula?',
      hint:'To Upper para char',
      ans:'ToUpper',
      exp:'"char.ToUpper(\'a\')" = \'A\'. "char.ToLower(\'A\')" = \'a\'. Diferente de string: string.ToUpper() vs char.ToUpper(c).',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>int.TryParse()</code> tenta converter sem lançar exceção, retornando bool indicando sucesso.',
      code:`<span class="kw">if</span> (<span class="kw">int</span>.<span class="mt">_______</span>(entrada, <span class="kw">out int</span> valor))\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Valor: {valor}"</span>);`,
      q:'Qual método tenta converter sem lançar exceção?',
      hint:'Try + Parse',
      ans:'TryParse',
      exp:'"TryParse" retorna bool e define o valor via "out". Se falhar, retorna false e valor = 0. Mais seguro para entrada do usuário.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Percorrendo o alfabeto com aritmética de char.',
      code:`<span class="kw">for</span> (<span class="kw">char</span> c = <span class="st">'A'</span>; c <= <span class="st">'E'</span>; c++)\n    Console.<span class="mt">Write</span>(c + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:"'A' a 'E' incrementando",
      opts:[
        {t:'65 66 67 68 69', ok:false},
        {t:'A B C D E', ok:true},
        {t:'ABCDE', ok:false},
        {t:'A A A A A', ok:false},
      ],
      exp:"c vai de 'A' (65) até 'E' (69). c++ incrementa o código. Console.Write(char) exibe a letra: A B C D E.",
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Cifra de César simples — desloca cada letra.',
      code:`<span class="kw">string</span> msg = <span class="st">"ACE"</span>;\n<span class="kw">int</span> chave = <span class="nm">2</span>;\n<span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> msg)\n    Console.<span class="mt">Write</span>((<span class="kw">char</span>)(c + chave));`,
      q:'Qual será a mensagem cifrada?',
      hint:"A+2='C', C+2='E', E+2='G'",
      opts:[
        {t:'ACE', ok:false},{t:'BDF', ok:false},
        {t:'CEG', ok:true},{t:'246', ok:false},
      ],
      exp:"A(65)+2=67='C'. C(67)+2=69='E'. E(69)+2=71='G'. Resultado: \"CEG\". Cifra de César com chave 2.",
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Contando letras maiúsculas numa string.',
      code:`<span class="kw">string</span> texto = <span class="st">"Leon S Kennedy"</span>;\n<span class="kw">int</span> maiusculas = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">char</span> c <span class="kw">in</span> texto)\n    <span class="kw">if</span> (<span class="kw">char</span>.<span class="mt">IsUpper</span>(c)) maiusculas++;\nConsole.<span class="mt">WriteLine</span>(maiusculas);`,
      q:'Quantas maiúsculas tem "Leon S Kennedy"?',
      hint:'Conte: L, S, K',
      opts:[
        {t:'2', ok:false},{t:'4', ok:false},
        {t:'3', ok:true},{t:'1', ok:false},
      ],
      exp:'"Leon S Kennedy": maiúsculas = L, S, K = 3. char.IsUpper() detecta corretamente maiúsculas.',
    },

  ]
};
