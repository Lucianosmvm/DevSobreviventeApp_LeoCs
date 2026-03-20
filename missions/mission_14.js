const MISSION_14 = {
  id: 14,
  title: "MISSÃO 15 — PROTOCOLO",
  icon: '⚔️',
  free: false,
  desc: "Cada agente segue protocolos — sequências de ações que podem ser reutilizadas. Funções são seus protocolos de código: escreva uma vez, execute quantas vezes precisar.",
  objs: [
    'Entender o que são funções e por que são essenciais para organizar código.',
    'Aprender a definir e chamar funções em C#.',
  ],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Uma <strong>função</strong> é um bloco de código nomeado e reutilizável. Resolve um problema específico e pode ser chamado quantas vezes precisar.',
      q:'Qual a principal vantagem de organizar código em funções?',
      hint:'Leon usa o mesmo protocolo de resgate para Ashley e para civis — escreva uma vez, reutilize várias vezes',
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
      hint:'Main é static — para chamá-la diretamente, os outros métodos precisam ser do mesmo tipo',
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
      hint:'Leon elimina o Ganado sem precisar devolver nada — quando a ação não retorna valor, use void',
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
      hint:'Somar(int a, int b) — a e b são os _____ da função, definidos na assinatura do protocolo',
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
      hint:'O colete de Leon só existe dentro da missão — variáveis locais morrem quando a função termina',
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
      hint:'Leon não lê o mapa, derrota Saddler e resgata Ashley ao mesmo tempo — cada função tem uma responsabilidade',
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
      hint:'A função Atacar() de Leon dispara mas não devolve nada — vazio em inglês é o tipo de retorno',
      ans:'void',
      exp:'"static void Atacar()" — void indica sem retorno. A função executa e volta, mas não devolve valor.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'A palavra-chave <code>return</code> encerra a função e devolve um valor para quem chamou.',
      code:`<span class="kw">static int</span> <span class="mt">Dobro</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">_______</span> n * <span class="nm">2</span>;\n}`,
      q:'Qual palavra-chave devolve o valor da função?',
      hint:'Leon devolve o relatório ao HQ — a palavra-chave que encerra a função e devolve o valor',
      ans:'return',
      exp:'"return n * 2" encerra a função e devolve n × 2 para quem chamou. Após o return, nenhuma linha da função executa.',
    },

    // Q9 — Fill
    {
      type:'fill',
      bubble:'Para chamar uma função, escreva seu nome seguido dos argumentos entre parênteses.',
      code:`<span class="kw">int</span> resultado = <span class="mt">_______</span>(<span class="nm">5</span>, <span class="nm">3</span>);`,
      q:'Para chamar a função Somar passando 5 e 3, qual nome usar?',
      hint:'O protocolo de soma de danos de Leon se chama "Somar" — use o nome exato da função',
      ans:'Somar',
      exp:'"Somar(5, 3)" chama a função e passa 5 e 3 como argumentos. O retorno é atribuído a "resultado".',
    },

    // Q10 — Fill
    {
      type:'fill',
      bubble:'Parâmetros com valores padrão tornam argumentos opcionais. Se não passado, usa o padrão.',
      code:`<span class="kw">static void</span> <span class="mt">Atacar</span>(<span class="kw">int</span> dano = <span class="nm">_______</span>) { }`,
      q:'Qual valor padrão colocar para que a função ataque com 10 de dano se nenhum for passado?',
      hint:'Se Leon atirar sem especificar a força, o dano padrão é de quanto? O valor deve ser declarado na função',
      ans:'10',
      exp:'"int dano = 10" — se Atacar() for chamado sem argumento, dano = 10. Atacar(50) sobrescreve com 50.',
    },

    // Q11 — Fill
    {
      type:'fill',
      bubble:'Funções que retornam bool costumam ser nomeadas como perguntas: EstaVivo(), TemMunicao(), etc.',
      code:`<span class="kw">static bool</span> <span class="mt">_______</span>(<span class="kw">int</span> hp) => hp > <span class="nm">0</span>;`,
      q:'Qual nome descritivo para uma função que verifica se o personagem está vivo?',
      hint:'A função que Leon chama para checar o status do personagem soa como uma pergunta — como nomeá-la?',
      ans:'EstaVivo',
      exp:'"EstaVivo(hp)" lê como uma pergunta. Funções bool com prefixo "Esta", "Tem", "E" comunicam claramente o propósito.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Função simples sendo chamada.',
      code:`<span class="kw">static void</span> <span class="mt">MissaoIniciada</span>()\n{\n    Console.<span class="mt">WriteLine</span>(<span class="st">"=== MISSÃO INICIADA ==="</span>);\n}\n\n<span class="mt">MissaoIniciada</span>();\n<span class="mt">MissaoIniciada</span>();`,
      q:'O que será exibido?',
      hint:'Leon ativa o protocolo de missão duas vezes — cada chamada imprime a mensagem completa',
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
      hint:'O dano de Leon: base 15 vezes multiplicador 3 — a function body com => retorna o resultado',
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
      hint:'Leon usa duas funções combinadas — Quadrado(3) + Quadrado(4) = o teorema de Pitágoras em ação',
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
      hint:'A variável "local" só existe dentro de Func() — como a Plaga que morre quando o Ganado é eliminado',
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
      hint:'Atirar() usa o padrão de 1 bala; Atirar(3) especifica 3 — o parâmetro padrão é substituído quando informado',
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
      hint:'A função recursiva de Leon se chama a si mesma — como o Fatorial: 5 × Fatorial(4) × ...',
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
      hint:'Leon leva um crítico (30×2=60) e um normal (20) — EstaVivo verifica se sobrou HP',
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
