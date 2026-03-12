// ══════════════════════════════════════════════════════
// MISSÃO 11 — RONDA NOTURNA | Loop for
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao11 = {
  id: 11, act: 1,
  titulo: "MISSÃO 11 — RONDA NOTURNA",
  subtitulo: "A Vila",
  descricao: "A ronda é precisa: começa no portão, passa por cada ponto e termina na base. O for é o loop dos contadores — controle total sobre início, fim e passo.",
  xp: 140, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O loop <strong>for</strong> tem três partes: inicialização, condição e incremento. Tudo na mesma linha.',
      q:'Qual é a ordem correta das partes do for?',
      hint:'Init ; condição ; incremento',
      opts:[
        {t:'condição ; init ; incremento', ok:false},
        {t:'init ; condição ; incremento', ok:true},
        {t:'incremento ; init ; condição', ok:false},
        {t:'init ; incremento ; condição', ok:false},
      ],
      exp:'"for (init; condição; incremento)". Exemplo: for (int i = 0; i < 10; i++). Leia: "de 0, enquanto menor que 10, incrementando."',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'O for é ideal quando você sabe <strong>exatamente</strong> quantas vezes o loop deve executar. O while é melhor para condições dinâmicas.',
      q:'Para imprimir os números de 1 a 100, qual loop é mais adequado?',
      hint:'Número fixo de iterações',
      opts:[
        {t:'while — mais flexível', ok:false},
        {t:'for — número de iterações conhecido', ok:true},
        {t:'do-while — sempre executa ao menos uma vez', ok:false},
        {t:'Qualquer um é igualmente adequado', ok:false},
      ],
      exp:'"for" quando você sabe quantas vezes. 1 a 100 = 100 iterações exatas. while para "enquanto não encontrar X".',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O incremento do for pode ser qualquer expressão: i++, i--, i+=2, i*=2. Você controla o passo.',
      q:'Para percorrer apenas os índices pares (0, 2, 4...) de um array, qual incremento usar?',
      hint:'Pule de 2 em 2',
      opts:[
        {t:'i++', ok:false},{t:'i*=2', ok:false},
        {t:'i+=2', ok:true},{t:'i%2', ok:false},
      ],
      exp:'"i+=2" avança o índice de 2 em 2: 0, 2, 4, 6... Para de 3 em 3: i+=3. Para trás: i-- ou i-=2.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Um <strong>for aninhado</strong> é um for dentro de outro. O loop interno completa todas suas iterações para cada iteração do externo.',
      q:'Um for externo com 3 iterações e um interno com 4 iterações: quantas vezes o interno executa ao total?',
      hint:'Multiplique',
      opts:[
        {t:'4', ok:false},{t:'7', ok:false},
        {t:'12', ok:true},{t:'3', ok:false},
      ],
      exp:'3 × 4 = 12. Para cada uma das 3 iterações do externo, o interno roda 4 vezes. Total: 12 execuções.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'O for clássico para percorrer um array de 0 até Length-1.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < arr.<span class="mt">_______</span>; i++)`,
      q:'Qual propriedade retorna o tamanho de um array?',
      hint:'Comprimento em inglês',
      ans:'Length',
      exp:'"arr.Length" retorna o número de elementos. O loop vai de 0 até Length-1, cobrindo todos os índices válidos.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para percorrer ao contrário (do último para o primeiro), inicializamos com Length-1 e decrementamos.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = arr.<span class="mt">Length</span> - <span class="nm">1</span>; i >= <span class="nm">0</span>; i<span class="kw">_______</span>)`,
      q:'Qual operador decrementa i para percorrer ao contrário?',
      hint:'Diminui 1',
      ans:'--',
      exp:'"i--" decrementa a cada iteração. Começa no último índice (Length-1) e vai até 0, percorrendo ao contrário.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Nos for aninhados, as variáveis contadoras devem ter nomes diferentes. Convenção: i, j, k.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">3</span>; i++)\n    <span class="kw">for</span> (<span class="kw">int</span> <span class="kw">_______</span> = <span class="nm">0</span>; j < <span class="nm">3</span>; j++)`,
      q:'Qual nome convencional usar para o segundo contador?',
      hint:'Letra após i no alfabeto',
      ans:'j',
      exp:'Convenção: i → j → k para loops aninhados. Nomes diferentes evitam conflito. i, j, k são universalmente reconhecidos.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para somar todos elementos de um array com for, somamos arr[i] a cada iteração.',
      code:`<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < nums.<span class="mt">Length</span>; i++)\n    soma <span class="kw">+=</span> nums[<span class="kw">_______</span>];`,
      q:'Qual variável usamos para acessar cada elemento do array?',
      hint:'O contador do for',
      ans:'i',
      exp:'"nums[i]" acessa o elemento no índice i. A cada iteração, i avança e pegamos o próximo elemento.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Quantas vezes este for executa e o que imprime?',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">5</span>; i++)\n    Console.<span class="mt">Write</span>(i * i + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'Quadrados de 1 a 5',
      opts:[
        {t:'1 2 3 4 5', ok:false},
        {t:'1 4 9 16 25', ok:true},
        {t:'2 4 6 8 10', ok:false},
        {t:'1 4 9 16 25 36', ok:false},
      ],
      exp:'i*i: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25. O for vai de 1 a 5 (i<=5). Exibe: "1 4 9 16 25".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'For aninhado para criar uma grade — padrão de xadrez.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i <= <span class="nm">3</span>; i++)\n{\n    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">1</span>; j <= <span class="nm">3</span>; j++)\n        Console.<span class="mt">Write</span>(<span class="st">$"{i},{j} "</span>);\n    Console.<span class="mt">WriteLine</span>();\n}`,
      q:'Quantas linhas serão exibidas?',
      hint:'O loop externo controla as linhas',
      opts:[
        {t:'1', ok:false},{t:'9', ok:false},
        {t:'3', ok:true},{t:'6', ok:false},
      ],
      exp:'O loop externo (i) roda 3 vezes. Cada iteração do externo = 1 linha (com 3 pares i,j). Total: 3 linhas.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'For com incremento diferente de 1.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i <= <span class="nm">10</span>; i += <span class="nm">2</span>)\n    Console.<span class="mt">Write</span>(i + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'De 0 a 10, pulando de 2 em 2',
      opts:[
        {t:'0 2 4 6 8', ok:false},
        {t:'0 2 4 6 8 10', ok:true},
        {t:'2 4 6 8 10', ok:false},
        {t:'1 3 5 7 9', ok:false},
      ],
      exp:'"i<=10" inclui o 10. "i+=2" pula de 2 em 2. Exibe: "0 2 4 6 8 10". Os números pares de 0 a 10.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Encontrando o maior elemento de um array com for.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">15</span>, <span class="nm">42</span>, <span class="nm">8</span>, <span class="nm">67</span>, <span class="nm">23</span>};\n<span class="kw">int</span> maior = danos[<span class="nm">0</span>];\n<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i < danos.<span class="mt">Length</span>; i++)\n    <span class="kw">if</span> (danos[i] > maior)\n        maior = danos[i];\nConsole.<span class="mt">WriteLine</span>(maior);`,
      q:'Qual o maior dano do array?',
      hint:'Qual o maior entre 15, 42, 8, 67, 23?',
      opts:[
        {t:'42', ok:false},{t:'23', ok:false},
        {t:'67', ok:true},{t:'15', ok:false},
      ],
      exp:'maior começa em 15. 42>15→maior=42. 8<42. 67>42→maior=67. 23<67. Resultado: 67.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 12 — HORDA | Loop foreach
// Tipo: Normal (10 questões) | 3 MC → 3 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao12 = {
  id: 12, act: 1,
  titulo: "MISSÃO 12 — HORDA",
  subtitulo: "A Vila",
  descricao: "Uma horda de inimigos avança. Para processar cada ameaça sem contar índices, o foreach é sua arma — percorre coleções de forma limpa e direta.",
  xp: 130, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'O <strong>foreach</strong> itera sobre cada elemento de uma coleção sem gerenciar índices. Mais simples que o for para leitura.',
      q:'Qual a principal vantagem do foreach sobre o for?',
      hint:'Você não precisa gerenciar nada',
      opts:[
        {t:'É mais rápido que o for', ok:false},
        {t:'Não exige gerenciar índice — código mais limpo e seguro', ok:true},
        {t:'Funciona apenas com arrays', ok:false},
        {t:'Permite modificar a coleção durante a iteração', ok:false},
      ],
      exp:'foreach elimina erros de índice (off-by-one). Código mais limpo. Mas não acessa o índice nem modifica a coleção.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'No foreach, a variável de iteração é <strong>somente leitura</strong>. Você não pode modificar os elementos da coleção por ela.',
      q:'O que acontece se tentarmos modificar a variável do foreach?',
      hint:'Ela é readonly',
      opts:[
        {t:'A coleção original é modificada', ok:false},
        {t:'Erro de compilação — a variável de iteração é readonly', ok:true},
        {t:'O loop reinicia', ok:false},
        {t:'Funciona normalmente', ok:false},
      ],
      exp:'"foreach (var item in lista) { item = novo; }" causa erro de compilação. Para modificar, use for com índice.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'O foreach funciona com qualquer coleção que implemente <strong>IEnumerable</strong>: arrays, List, Dictionary, etc.',
      q:'Quais coleções o foreach pode iterar?',
      hint:'Se implementa IEnumerable, o foreach aceita',
      opts:[
        {t:'Apenas arrays', ok:false},
        {t:'Apenas List<T>', ok:false},
        {t:'Qualquer coleção que implemente IEnumerable', ok:true},
        {t:'Apenas coleções de strings', ok:false},
      ],
      exp:'foreach funciona com arrays, List, Dictionary, Stack, Queue, e qualquer coleção que implemente IEnumerable.',
    },

    // Q4 — Fill
    {
      type:'fill',
      bubble:'A sintaxe do foreach: <code>foreach (tipo variavel in coleção)</code>.',
      code:`<span class="kw">foreach</span> (<span class="kw">string</span> inimigo <span class="kw">_______</span> inimigos)`,
      q:'Qual palavra-chave conecta a variável à coleção no foreach?',
      hint:'Dentro de / em inglês',
      ans:'in',
      exp:'"in" é a palavra que conecta: "para cada elemento IN coleção". foreach (string s in lista) = para cada string na lista.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para usar var no foreach, o compilador infere o tipo automaticamente.',
      code:`<span class="kw">foreach</span> (<span class="kw">_______</span> item <span class="kw">in</span> inventario)\n    Console.<span class="mt">WriteLine</span>(item);`,
      q:'Qual palavra deixa o compilador inferir o tipo automaticamente?',
      hint:'Inferência de tipo',
      ans:'var',
      exp:'"var" no foreach infere o tipo da coleção. Se inventario é List<string>, var item será string automaticamente.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para iterar as chaves de um Dictionary, usamos <code>.Keys</code>.',
      code:`<span class="kw">foreach</span> (<span class="kw">var</span> chave <span class="kw">in</span> dic.<span class="mt">_______</span>)\n    Console.<span class="mt">WriteLine</span>(chave);`,
      q:'Qual propriedade retorna todas as chaves de um Dictionary?',
      hint:'As chaves',
      ans:'Keys',
      exp:'"dic.Keys" para chaves, "dic.Values" para valores, "dic" diretamente para pares KeyValuePair.',
    },

    // Q7 — Code
    {
      type:'code',
      bubble:'Foreach percorrendo todos os inimigos.',
      code:`<span class="kw">string</span>[] inimigos = {<span class="st">"Ganado"</span>, <span class="st">"Cultista"</span>, <span class="st">"Regenerador"</span>};\n<span class="kw">foreach</span> (<span class="kw">string</span> inimigo <span class="kw">in</span> inimigos)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"Eliminando: {inimigo}"</span>);`,
      q:'Quantas linhas serão exibidas?',
      hint:'Um elemento, uma linha',
      opts:[
        {t:'1', ok:false},{t:'2', ok:false},
        {t:'3', ok:true},{t:'0', ok:false},
      ],
      exp:'O array tem 3 elementos. Foreach itera sobre cada um. 3 linhas: "Eliminando: Ganado", "...Cultista", "...Regenerador".',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Foreach calculando a soma de um array.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">10</span>, <span class="nm">20</span>, <span class="nm">30</span>, <span class="nm">40</span>};\n<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">int</span> d <span class="kw">in</span> danos)\n    soma += d;\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q:'Qual o total de danos?',
      hint:'10+20+30+40',
      opts:[
        {t:'40', ok:false},{t:'90', ok:false},
        {t:'100', ok:true},{t:'10', ok:false},
      ],
      exp:'soma = 10+20+30+40 = 100. Foreach acumula cada elemento na variável soma.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Diferença entre for (com índice) e foreach (sem índice).',
      code:`<span class="kw">string</span>[] armas = {<span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span>};\n\n<span class="cm">// Com índice:</span>\n<span class="kw">for</span> (<span class="kw">int</span> i=<span class="nm">0</span>; i<armas.<span class="mt">Length</span>; i++)\n    Console.<span class="mt">Write</span>(i + <span class="st">":"</span> + armas[i] + <span class="st">" "</span>);\nConsole.<span class="mt">WriteLine</span>();\n\n<span class="cm">// Sem índice:</span>\n<span class="kw">foreach</span> (<span class="kw">string</span> a <span class="kw">in</span> armas)\n    Console.<span class="mt">Write</span>(a + <span class="st">" "</span>);`,
      q:'Qual a diferença nas saídas?',
      hint:'Um mostra índice, outro não',
      opts:[
        {t:'São idênticas', ok:false},
        {t:'O for mostra "0:Pistola 1:Escopeta 2:Rifle"; o foreach mostra "Pistola Escopeta Rifle"', ok:true},
        {t:'O foreach é mais lento', ok:false},
        {t:'O for falha sem índice', ok:false},
      ],
      exp:'for com i mostra o índice: "0:Pistola 1:Escopeta 2:Rifle". foreach sem índice: "Pistola Escopeta Rifle".',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Foreach com Dictionary iterando pares chave-valor.',
      code:`<span class="kw">var</span> arsenal = <span class="kw">new</span> Dictionary&lt;<span class="kw">string</span>,<span class="kw">int</span>&gt; {\n    {<span class="st">"Pistola"</span>, <span class="nm">45</span>},\n    {<span class="st">"Escopeta"</span>, <span class="nm">12</span>}\n};\n<span class="kw">foreach</span> (<span class="kw">var</span> par <span class="kw">in</span> arsenal)\n    Console.<span class="mt">WriteLine</span>(<span class="st">$"{par.Key}: {par.Value} balas"</span>);`,
      q:'O que será exibido?',
      hint:'Cada par tem Key e Value',
      opts:[
        {t:'Pistola Escopeta', ok:false},
        {t:'Pistola: 45 balas e Escopeta: 12 balas', ok:true},
        {t:'45 12', ok:false},
        {t:'Erro — Dictionary não suporta foreach', ok:false},
      ],
      exp:'foreach em Dictionary itera KeyValuePair. par.Key = nome, par.Value = quantidade. Exibe cada arma com sua munição.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 13 — ARSENAL | Arrays
// Tipo: Normal (12 questões) | 4 MC → 4 Fill → 4 Code
// ══════════════════════════════════════════════════════

const missao13 = {
  id: 13, act: 1,
  titulo: "MISSÃO 13 — ARSENAL",
  subtitulo: "A Vila",
  descricao: "O arsenal é organizado em fileiras precisas. Arrays armazenam múltiplos valores do mesmo tipo com índices numerados — a estrutura de dados mais fundamental.",
  xp: 140, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Um <strong>array</strong> é uma coleção de tamanho <em>fixo</em> de elementos do mesmo tipo, acessados por índice começando em 0.',
      q:'Qual é o índice do primeiro elemento de um array em C#?',
      hint:'Conta do zero em programação',
      opts:[
        {t:'1', ok:false},{t:'-1', ok:false},
        {t:'0', ok:true},{t:'Depende do array', ok:false},
      ],
      exp:'Arrays em C# começam no índice 0. Um array de 5 elementos tem índices 0, 1, 2, 3, 4. O último é sempre Length-1.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Tentar acessar um índice fora dos limites do array lança <strong>IndexOutOfRangeException</strong>.',
      q:'O que acontece ao acessar arr[5] em um array de 5 elementos?',
      hint:'O último índice válido é 4',
      opts:[
        {t:'Retorna null', ok:false},
        {t:'Retorna 0 (valor padrão)', ok:false},
        {t:'Lança IndexOutOfRangeException', ok:true},
        {t:'Retorna o último elemento', ok:false},
      ],
      exp:'Array de 5 elementos: índices 0-4. arr[5] está fora. C# lança IndexOutOfRangeException em runtime.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Arrays em C# têm tamanho <strong>fixo</strong> definido na criação. Para tamanho dinâmico, use List<T>.',
      q:'Qual a limitação principal de um array em C#?',
      hint:'Criou com tamanho 10, fica com 10 para sempre',
      opts:[
        {t:'Só aceita strings', ok:false},
        {t:'Não pode ser iterado com foreach', ok:false},
        {t:'Tamanho fixo — não pode crescer ou diminuir após a criação', ok:true},
        {t:'É mais lento que List', ok:false},
      ],
      exp:'Array: tamanho fixo, alocado na criação. Para adicionar/remover elementos, use List<T> (array dinâmico).',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'O método <code>Array.Sort()</code> ordena um array em ordem crescente no lugar (in-place), sem criar novo array.',
      q:'Array.Sort(arr) modifica o array original ou cria um novo?',
      hint:'In-place',
      opts:[
        {t:'Cria e retorna um novo array ordenado', ok:false},
        {t:'Modifica o array original in-place', ok:true},
        {t:'Retorna uma List ordenada', ok:false},
        {t:'Não funciona para arrays de inteiros', ok:false},
      ],
      exp:'"Array.Sort(arr)" ordena o array original. Se precisar preservar o original, copie antes: var copia = arr.Clone().',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Arrays são declarados com colchetes após o tipo.',
      code:`<span class="kw">int</span><span class="kw">[]</span> municoes = <span class="kw">new int</span>[<span class="nm">_______</span>];`,
      q:'Para criar um array de 5 posições, qual número vai nos colchetes?',
      hint:'Quantas posições você quer?',
      ans:'5',
      exp:'"new int[5]" cria array com 5 posições (índices 0-4), todos inicializados com 0 (padrão de int).',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Arrays podem ser iniciados com valores já declarados usando chaves.',
      code:`<span class="kw">string</span>[] armas = <span class="kw">_______</span> <span class="st">"Pistola"</span>, <span class="st">"Faca"</span>, <span class="st">"Escopeta"</span> <span class="kw">}</span>;`,
      q:'Qual símbolo inicia o bloco de valores iniciais?',
      hint:'Chave aberta',
      ans:'{',
      exp:'"string[] armas = { \"Pistola\", \"Faca\", \"Escopeta\" }" inicializa o array com 3 elementos. Tamanho inferido automaticamente.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para acessar um elemento específico, usamos o nome do array seguido do índice entre colchetes.',
      code:`<span class="kw">string</span> primeiraArma = armas[<span class="nm">_______</span>];`,
      q:'Qual índice acessa o primeiro elemento?',
      hint:'Começamos a contar do zero',
      ans:'0',
      exp:'"armas[0]" acessa o primeiro elemento. armas[1] o segundo, armas[armas.Length-1] o último.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'<code>Array.Reverse(arr)</code> inverte a ordem dos elementos no array original.',
      code:`Array.<span class="mt">_______</span>(inimigos);`,
      q:'Qual método inverte os elementos de um array?',
      hint:'Inverter em inglês',
      ans:'Reverse',
      exp:'"Array.Reverse(arr)" inverte in-place. {1,2,3} vira {3,2,1}. Combinado com Sort: Sort + Reverse = ordem decrescente.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Acessando e modificando elementos do array.',
      code:`<span class="kw">int</span>[] hp = {<span class="nm">100</span>, <span class="nm">80</span>, <span class="nm">60</span>};\nhp[<span class="nm">1</span>] = <span class="nm">50</span>;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{hp[0]} {hp[1]} {hp[2]}"</span>);`,
      q:'O que será exibido?',
      hint:'hp[1] foi modificado para 50',
      opts:[
        {t:'100 80 60', ok:false},
        {t:'100 50 60', ok:true},
        {t:'50 80 60', ok:false},
        {t:'100 80 50', ok:false},
      ],
      exp:'"hp[1] = 50" modifica o segundo elemento (índice 1). O array vira {100, 50, 60}.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Array.Sort ordenando o arsenal por dano.',
      code:`<span class="kw">int</span>[] danos = {<span class="nm">45</span>, <span class="nm">10</span>, <span class="nm">80</span>, <span class="nm">25</span>};\nArray.<span class="mt">Sort</span>(danos);\n<span class="kw">foreach</span> (<span class="kw">int</span> d <span class="kw">in</span> danos)\n    Console.<span class="mt">Write</span>(d + <span class="st">" "</span>);`,
      q:'O que será exibido?',
      hint:'Ordenado de menor para maior',
      opts:[
        {t:'45 10 80 25', ok:false},
        {t:'10 25 45 80', ok:true},
        {t:'80 45 25 10', ok:false},
        {t:'10 45 25 80', ok:false},
      ],
      exp:'"Array.Sort" ordena em ordem crescente. {45,10,80,25} → {10,25,45,80}.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Buscando um elemento com Array.IndexOf.',
      code:`<span class="kw">string</span>[] armas = {<span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span>};\n<span class="kw">int</span> pos = Array.<span class="mt">IndexOf</span>(armas, <span class="st">"Escopeta"</span>);\nConsole.<span class="mt">WriteLine</span>(pos);`,
      q:'O que será exibido?',
      hint:'"Escopeta" está em qual posição?',
      opts:[
        {t:'0', ok:false},{t:'2', ok:false},
        {t:'1', ok:true},{t:'-1', ok:false},
      ],
      exp:'"Escopeta" está no índice 1. Array.IndexOf retorna o índice do elemento ou -1 se não encontrar.',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'Array de bool para rastrear missões completadas.',
      code:`<span class="kw">bool</span>[] missoes = {<span class="kw">true</span>, <span class="kw">true</span>, <span class="kw">false</span>, <span class="kw">true</span>, <span class="kw">false</span>};\n<span class="kw">int</span> completas = <span class="nm">0</span>;\n<span class="kw">foreach</span> (<span class="kw">bool</span> m <span class="kw">in</span> missoes)\n    <span class="kw">if</span> (m) completas++;\nConsole.<span class="mt">WriteLine</span>(completas);`,
      q:'Quantas missões foram completadas?',
      hint:'Conte os "true" no array',
      opts:[
        {t:'2', ok:false},{t:'5', ok:false},
        {t:'3', ok:true},{t:'1', ok:false},
      ],
      exp:'{true, true, false, true, false}: 3 valores true. completas = 3.',
    },

  ]
};

// ══════════════════════════════════════════════════════
// MISSÃO 14 — ESTOQUE DE SUPRIMENTOS | Arrays multidimensionais
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const missao14 = {
  id: 14, act: 1,
  titulo: "MISSÃO 14 — ESTOQUE DE SUPRIMENTOS",
  subtitulo: "A Vila",
  descricao: "O depósito inimigo tem prateleiras e colunas — uma grade organizada. Arrays multidimensionais representam tabelas, grids e mapas de forma eficiente.",
  xp: 130, boss: false,
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'Um <strong>array 2D</strong> em C# é uma tabela de linhas e colunas: <code>int[,] grade = new int[3,4]</code> cria 3 linhas × 4 colunas.',
      q:'Quantos elementos tem um array int[3,4]?',
      hint:'Linhas × colunas',
      opts:[
        {t:'7', ok:false},{t:'34', ok:false},
        {t:'12', ok:true},{t:'3', ok:false},
      ],
      exp:'3 linhas × 4 colunas = 12 elementos. Acessados por grade[linha, coluna] — de grade[0,0] até grade[2,3].',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'Arrays <strong>jagged</strong> (dentados) são arrays de arrays, onde cada linha pode ter tamanho diferente.',
      q:'Qual a diferença entre int[,] e int[][]?',
      hint:'Um é retangular, outro pode ser irregular',
      opts:[
        {t:'São a mesma coisa com sintaxe diferente', ok:false},
        {t:'int[,] é retangular; int[][] é jagged (linhas de tamanhos diferentes)', ok:true},
        {t:'int[,] é mais rápido', ok:false},
        {t:'int[][] não existe em C#', ok:false},
      ],
      exp:'"int[,]" = todas as linhas com o mesmo número de colunas (retangular). "int[][]" = cada linha pode ter tamanho diferente.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'Para obter o número de linhas e colunas de um array 2D, usamos <code>GetLength(dimensão)</code>.',
      q:'Como obter o número de colunas de um array 2D?',
      hint:'A segunda dimensão é o índice 1',
      opts:[
        {t:'arr.Length', ok:false},
        {t:'arr.GetLength(0)', ok:false},
        {t:'arr.GetLength(1)', ok:true},
        {t:'arr.Columns', ok:false},
      ],
      exp:'"GetLength(0)" = número de linhas. "GetLength(1)" = número de colunas. "arr.Length" retorna o total de elementos.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'Arrays 2D são usados para representar: mapas de jogo, matrizes matemáticas, grades, tabelas de dados.',
      q:'Qual estrutura se representa naturalmente com array 2D?',
      hint:'Grade com linhas e colunas',
      opts:[
        {t:'Uma lista de nomes', ok:false},
        {t:'Um mapa de jogo em grade (como Minecraft top-down)', ok:true},
        {t:'Uma sequência de eventos', ok:false},
        {t:'Um dicionário de sinônimos', ok:false},
      ],
      exp:'Mapas em grade, matrizes, pixels de imagem, planilhas — qualquer estrutura de linhas × colunas é um array 2D natural.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para acessar um elemento do array 2D, usamos dois índices separados por vírgula.',
      code:`<span class="kw">int</span> valor = estoque[<span class="nm">1</span><span class="kw">,</span> <span class="nm">_______</span>]; <span class="cm">// linha 1, coluna 2</span>`,
      q:'Qual índice acessa a terceira coluna (coluna 2)?',
      hint:'Colunas começam em 0',
      ans:'2',
      exp:'"estoque[1, 2]" acessa linha 1, coluna 2. Lembre: índices começam em 0. Linha 1 = segunda linha.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'Para declarar e inicializar um array 2D com valores, usamos chaves aninhadas.',
      code:`<span class="kw">int</span>[,] mapa = \n{\n    { <span class="nm">1</span>, <span class="nm">0</span>, <span class="nm">1</span> },\n    { <span class="nm">_______</span>, <span class="nm">1</span>, <span class="nm">0</span> }\n};`,
      q:'Para que o canto inferior esquerdo (linha 1, coluna 0) seja 0, qual valor colocar?',
      hint:'Queremos 0 na primeira posição da segunda linha',
      ans:'0',
      exp:'A segunda linha {0, 1, 0} tem 0 na coluna 0 (índice 0). mapa[1,0] = 0.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'Para percorrer um array 2D completamente, usamos dois for aninhados — um para linhas, outro para colunas.',
      code:`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < mapa.<span class="mt">GetLength</span>(<span class="nm">0</span>); i++)\n    <span class="kw">for</span> (<span class="kw">int</span> j = <span class="nm">0</span>; j < mapa.<span class="mt">GetLength</span>(<span class="nm">_______</span>); j++)`,
      q:'Qual índice usar em GetLength para obter o número de colunas?',
      hint:'A segunda dimensão',
      ans:'1',
      exp:'"GetLength(0)" = linhas, "GetLength(1)" = colunas. O for externo percorre linhas, o interno percorre colunas.',
    },

    // Q8 — Code
    {
      type:'code',
      bubble:'Acessando posições específicas do mapa 2D.',
      code:`<span class="kw">int</span>[,] mapa = {\n    {<span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>},\n    {<span class="nm">4</span>, <span class="nm">5</span>, <span class="nm">6</span>}\n};\nConsole.<span class="mt">WriteLine</span>(mapa[<span class="nm">1</span>, <span class="nm">2</span>]);`,
      q:'O que será exibido?',
      hint:'Linha 1, coluna 2',
      opts:[
        {t:'3', ok:false},{t:'5', ok:false},
        {t:'6', ok:true},{t:'2', ok:false},
      ],
      exp:'mapa[1,2]: linha 1 (segunda linha) = {4,5,6}. Coluna 2 (terceira) = 6.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Somando todos os elementos de um array 2D.',
      code:`<span class="kw">int</span>[,] grid = {{<span class="nm">1</span>,<span class="nm">2</span>},{<span class="nm">3</span>,<span class="nm">4</span>},{<span class="nm">5</span>,<span class="nm">6</span>}};\n<span class="kw">int</span> soma = <span class="nm">0</span>;\n<span class="kw">for</span>(<span class="kw">int</span> i=<span class="nm">0</span>;i<grid.<span class="mt">GetLength</span>(<span class="nm">0</span>);i++)\n  <span class="kw">for</span>(<span class="kw">int</span> j=<span class="nm">0</span>;j<grid.<span class="mt">GetLength</span>(<span class="nm">1</span>);j++)\n    soma += grid[i,j];\nConsole.<span class="mt">WriteLine</span>(soma);`,
      q:'Qual a soma de todos os elementos?',
      hint:'1+2+3+4+5+6',
      opts:[
        {t:'15', ok:false},{t:'6', ok:false},
        {t:'21', ok:true},{t:'12', ok:false},
      ],
      exp:'1+2+3+4+5+6 = 21. O for duplo percorre todas as 3 linhas × 2 colunas = 6 elementos.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'Array jagged — cada "linha" é um array independente.',
      code:`<span class="kw">int</span>[][] jagged = {\n    <span class="kw">new int</span>[] {<span class="nm">1</span>, <span class="nm">2</span>},\n    <span class="kw">new int</span>[] {<span class="nm">3</span>, <span class="nm">4</span>, <span class="nm">5</span>}\n};\nConsole.<span class="mt">WriteLine</span>(jagged[<span class="nm">1</span>][<span class="nm">2</span>]);`,
      q:'O que será exibido?',
      hint:'Linha 1, elemento 2 (terceiro)',
      opts:[
        {t:'4', ok:false},{t:'2', ok:false},
        {t:'5', ok:true},{t:'3', ok:false},
      ],
      exp:'"jagged[1]" = {3,4,5}. "[2]" = terceiro elemento = 5. Jagged usa dois colchetes separados: [linha][coluna].',
    },

  ]
};
