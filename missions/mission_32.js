const MISSION_32 = {
  id: 32,
  title: "MISSÃO 33 — AS CATACUMBAS",
  icon: '💀',
  free: false,
  desc: "As catacumbas são labirintos que se repetem em padrões. Recursão é a técnica de resolver um problema dividindo-o em versões menores de si mesmo — até chegar ao fundo.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Uma função <strong>recursiva</strong> chama a si mesma. Todo algoritmo recursivo precisa de um <strong>caso base</strong> (condição de parada) para não criar loop infinito.',
      q: 'O que é o "caso base" de uma função recursiva?',
      hint: 'Leon chega ao fundo das catacumbas — sem a condição de parada, a recursão desce para sempre',
      opts: [
        { t: 'A primeira chamada da função', ok: false },
        { t: 'A condição que para a recursão e retorna sem chamar a si mesma', ok: true },
        { t: 'O maior valor que a função aceita', ok: false },
        { t: 'O valor de retorno padrão', ok: false },
      ],
      exp: 'Caso base: condição onde a função retorna sem se chamar novamente. Sem ele → StackOverflowException. Ex: fatorial(0) = 1.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Busca binária</strong> divide o espaço de busca ao meio a cada passo. Requer array ordenado. Complexidade: O(log n).',
      q: 'Por que a busca binária exige um array ordenado?',
      hint: 'Leon escolhe ir esquerda ou direita no corredor — só funciona se os quartos estiverem numerados em ordem',
      opts: [
        { t: 'Para economizar memória', ok: false },
        { t: 'Para decidir corretamente se o alvo está à esquerda ou à direita do meio', ok: true },
        { t: 'Apenas por convenção', ok: false },
        { t: 'Para que o índice médio seja inteiro', ok: false },
      ],
      exp: 'Se arr[meio] > alvo, busca à esquerda; se menor, à direita. Sem ordenação, essa decisão seria inválida.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: '<strong>Merge Sort</strong> usa recursão divide-e-conquista: divide o array ao meio, ordena cada metade recursivamente e depois mescla.',
      q: 'Qual a complexidade de tempo do Merge Sort?',
      hint: 'El Gigante prova que dividir o problema ao meio a cada passo tem custo logarítmico — O(n log n)',
      opts: [
        { t: 'O(n²)', ok: false },
        { t: 'O(n log n)', ok: true },
        { t: 'O(log n)', ok: false },
        { t: 'O(n)', ok: false },
      ],
      exp: 'Merge Sort: O(n log n) sempre — melhor, médio e pior caso. Divide em log n níveis; cada nível processa n elementos.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'A pilha de chamadas (<strong>call stack</strong>) empilha cada chamada recursiva. Recursão muito profunda causa <code>StackOverflowException</code>.',
      q: 'Como evitar StackOverflow em algoritmos recursivos profundos?',
      hint: 'Leon substitui as escadas infinitas por um loop com mapa explícito — recursão profunda demais estoura a pilha',
      opts: [
        { t: 'Usar mais memória RAM', ok: false },
        { t: 'Converter para iteração (loop) ou usar tail recursion optimization', ok: true },
        { t: 'Chamar GC.Collect() periodicamente', ok: false },
        { t: 'Usar static nas funções recursivas', ok: false },
      ],
      exp: 'Para n muito grande, substitua recursão por loop iterativo com stack explícita. Tail recursion pode ser otimizada pelo compilador em alguns casos.',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Todo algoritmo recursivo começa verificando o caso base:',
      code: `<span class="kw">static int</span> <span class="mt">Soma</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">0</span>) <span class="kw">_______</span> <span class="nm">0</span>;    <span class="cm">// caso base</span>\n    <span class="kw">return</span> n + <span class="mt">Soma</span>(n - <span class="nm">1</span>);   <span class="cm">// caso recursivo</span>\n}`,
      q: 'Qual palavra encerra a recursão no caso base?',
      hint: 'Ao chegar ao fundo das catacumbas, Leon entrega o resultado e volta — qual palavra encerra a recursão?',
      ans: 'return',
      exp: '"return 0" encerra a recursão quando n <= 0. Sem o return no caso base, a função continuaria chamando a si mesma indefinidamente.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Na busca binária, calculamos o índice do meio a cada iteração:',
      code: `<span class="kw">int</span> meio = (esquerda + direita) / <span class="kw">_______</span>;`,
      q: 'Por quanto dividimos para obter o índice do meio?',
      hint: 'Leon corta o corredor ao meio para encontrar Ashley mais rápido — por quanto divide o intervalo?',
      ans: '2',
      exp: 'meio = (esquerda + direita) / 2. Aponta para o elemento central do intervalo atual. A cada passo, o intervalo é reduzido à metade.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Fibonacci recursivo: F(n) = F(n-1) + F(n-2), com casos base F(0)=0 e F(1)=1.',
      code: `<span class="kw">static int</span> <span class="mt">Fib</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">1</span>) <span class="kw">return</span> n;\n    <span class="kw">return</span> <span class="mt">Fib</span>(n - <span class="nm">_______</span>) + <span class="mt">Fib</span>(n - <span class="nm">2</span>);\n}`,
      q: 'Qual valor completaria o primeiro termo da soma de Fibonacci?',
      hint: 'Fibonacci: cada geração de Plagas depende das duas anteriores — qual é o primeiro termo da soma?',
      ans: '1',
      exp: 'Fib(n) = Fib(n-1) + Fib(n-2). Caso base: n <= 1 → retorna n (Fib(0)=0, Fib(1)=1).',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'No Bubble Sort, comparamos elementos adjacentes e trocamos se estiverem fora de ordem:',
      code: `<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < n - <span class="nm">1</span>; i++)\n    <span class="kw">if</span> (arr[i] > arr[<span class="kw">_______</span>])\n        (arr[i], arr[i+<span class="nm">1</span>]) = (arr[i+<span class="nm">1</span>], arr[i]);`,
      q: 'Qual é o índice do elemento adjacente ao arr[i]?',
      hint: 'Leon compara dois Ganados adjacentes na fila — o atual e o imediatamente ao lado',
      ans: 'i+1',
      exp: '"arr[i] > arr[i+1]" compara dois adjacentes. Se fora de ordem, troca. Após n-1 passes, o array estará ordenado.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Rastreando a recursão de Fatorial passo a passo.',
      code: `<span class="kw">static int</span> <span class="mt">Fat</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">1</span>) <span class="kw">return</span> <span class="nm">1</span>;\n    <span class="kw">int</span> resultado = n * <span class="mt">Fat</span>(n - <span class="nm">1</span>);\n    <span class="kw">return</span> resultado;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Fat</span>(<span class="nm">6</span>));`,
      q: 'Qual é o resultado de 6!?',
      hint: 'Saddler multiplica o poder de cada Plaga — 6 gerações de multiplicação em cascata',
      opts: [
        { t: '120', ok: false },
        { t: '720', ok: true },
        { t: '360', ok: false },
        { t: '36', ok: false },
      ],
      exp: '6! = 6×5×4×3×2×1 = 720. Fat(6)=6×Fat(5)=6×120=720.',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Soma recursiva de 1 até n.',
      code: `<span class="kw">static int</span> <span class="mt">Soma</span>(<span class="kw">int</span> n)\n{\n    <span class="kw">if</span> (n <= <span class="nm">0</span>) <span class="kw">return</span> <span class="nm">0</span>;\n    <span class="kw">return</span> n + <span class="mt">Soma</span>(n - <span class="nm">1</span>);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Soma</span>(<span class="nm">10</span>));`,
      q: 'Qual é a soma de 1 a 10?',
      hint: 'Leon soma os andares das catacumbas de 1 a 10 — use a fórmula de Gauss como atalho',
      opts: [
        { t: '45', ok: false },
        { t: '55', ok: true },
        { t: '100', ok: false },
        { t: '50', ok: false },
      ],
      exp: 'Soma(10) = 10+9+8+...+1 = 55. Fórmula de Gauss: 10×11/2 = 55.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Busca binária iterativa.',
      code: `<span class="kw">static int</span> <span class="mt">BuscaBinaria</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> alvo)\n{\n    <span class="kw">int</span> esq = <span class="nm">0</span>, dir = arr.<span class="mt">Length</span> - <span class="nm">1</span>;\n    <span class="kw">while</span> (esq <= dir)\n    {\n        <span class="kw">int</span> meio = (esq + dir) / <span class="nm">2</span>;\n        <span class="kw">if</span> (arr[meio] == alvo) <span class="kw">return</span> meio;\n        <span class="kw">if</span> (arr[meio] < alvo)  esq = meio + <span class="nm">1</span>;\n        <span class="kw">else</span>                   dir = meio - <span class="nm">1</span>;\n    }\n    <span class="kw">return</span> -<span class="nm">1</span>;\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">BuscaBinaria</span>(<span class="kw">new int</span>[] {<span class="nm">2</span>,<span class="nm">5</span>,<span class="nm">8</span>,<span class="nm">12</span>,<span class="nm">16</span>,<span class="nm">23</span>}, <span class="nm">12</span>));`,
      q: 'Qual índice a busca retorna para o valor 12?',
      hint: 'Leon procura a sala 12 cortando o corredor ao meio — em que posição ela está no array ordenado?',
      opts: [
        { t: '3', ok: true },
        { t: '4', ok: false },
        { t: '12', ok: false },
        { t: '-1', ok: false },
      ],
      exp: 'Array: índice 0=2, 1=5, 2=8, 3=12, 4=16, 5=23. O valor 12 está no índice 3. Retorna 3.',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'Potência por quadrado rápido — recursão eficiente.',
      code: `<span class="kw">static long</span> <span class="mt">Pot</span>(<span class="kw">long</span> b, <span class="kw">int</span> e)\n{\n    <span class="kw">if</span> (e == <span class="nm">0</span>) <span class="kw">return</span> <span class="nm">1</span>;\n    <span class="kw">if</span> (e % <span class="nm">2</span> == <span class="nm">0</span>)\n    {\n        <span class="kw">long</span> metade = <span class="mt">Pot</span>(b, e / <span class="nm">2</span>);\n        <span class="kw">return</span> metade * metade;\n    }\n    <span class="kw">return</span> b * <span class="mt">Pot</span>(b, e - <span class="nm">1</span>);\n}\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Pot</span>(<span class="nm">2</span>, <span class="nm">10</span>));`,
      q: 'Qual é o resultado de 2¹⁰?',
      hint: 'O poder de Leon dobra a cada missão completada — quanto vale 2 elevado a 10?',
      opts: [
        { t: '512', ok: false },
        { t: '2048', ok: false },
        { t: '1024', ok: true },
        { t: '256', ok: false },
      ],
      exp: '2^10 = 1024. Pot eficiente: Pot(2,10) → Pot(2,5)² → 32² = 1024. Complexidade O(log n) em vez de O(n).',
    },

  ]
};
