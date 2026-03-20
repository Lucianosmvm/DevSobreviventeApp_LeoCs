const MISSION_21 = {
  id: 21,
  title: "MISSÃO 22 — CÂMARA DO TESOURO",
  icon: '💎',
  free: false,
  desc: "A câmara do tesouro guarda itens valiosos organizados com precisão. Dominar todos os métodos da List é saber gerenciar qualquer coleção de dados.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type:'mc',
      bubble:'<code>List.Sort()</code> ordena a lista in-place. Para ordem personalizada, passe um <code>Comparison&lt;T&gt;</code> ou use LINQ.',
      q:'Qual a diferença entre List.Sort() e LINQ OrderBy()?',
      hint:'A Escopeta original não muda quando Leon troca a mira — mas um clone modificado é diferente',
      opts:[
        {t:'São idênticos', ok:false},
        {t:'Sort() modifica a lista original; OrderBy() retorna nova sequência sem alterar a original', ok:true},
        {t:'Sort() é mais lento sempre', ok:false},
        {t:'OrderBy() não funciona com List', ok:false},
      ],
      exp:'"Sort()" muta a lista. "OrderBy()" retorna IOrderedEnumerable sem alterar a lista. Use Sort() quando quiser modificar, OrderBy() para preservar.',
    },

    // Q2 — MC
    {
      type:'mc',
      bubble:'<code>List.FindIndex()</code> retorna o índice do primeiro elemento que satisfaz uma condição (predicado).',
      q:'O que FindIndex() retorna se nenhum elemento satisfizer a condição?',
      hint:'Quando Leon procura Ashley e não encontra, a busca retorna um valor especial — não zero',
      opts:[
        {t:'Lança exceção', ok:false},
        {t:'Retorna null', ok:false},
        {t:'Retorna -1', ok:true},
        {t:'Retorna 0', ok:false},
      ],
      exp:'"FindIndex(pred)" retorna -1 se não encontrar. Sempre verifique if (idx >= 0) antes de usar o índice retornado.',
    },

    // Q3 — MC
    {
      type:'mc',
      bubble:'<code>List.RemoveAll(predicado)</code> remove todos os elementos que satisfazem uma condição e retorna quantos foram removidos.',
      q:'O que RemoveAll(x => x < 0) faz numa List<int>?',
      hint:'Leon elimina TODOS os Ganados com HP zerado da sala, não só o primeiro',
      opts:[
        {t:'Remove apenas o primeiro negativo', ok:false},
        {t:'Remove todos os negativos e retorna quantos foram removidos', ok:true},
        {t:'Remove todos os positivos', ok:false},
        {t:'Lança exceção para negativos', ok:false},
      ],
      exp:'"RemoveAll(x => x < 0)" remove todos os elementos menores que zero e retorna a contagem de removidos.',
    },

    // Q4 — MC
    {
      type:'mc',
      bubble:'<code>List.AddRange()</code> adiciona todos os elementos de outra coleção de uma só vez.',
      q:'Qual a vantagem de AddRange() sobre Add() em loop?',
      hint:'Leon pega todo o arsenal de uma sala de uma vez — mais eficiente que pegar item por item',
      opts:[
        {t:'Nenhuma — são equivalentes', ok:false},
        {t:'AddRange é mais eficiente e limpo — uma operação em vez de n chamadas Add()', ok:true},
        {t:'AddRange adiciona elementos únicos apenas', ok:false},
        {t:'AddRange é mais lento', ok:false},
      ],
      exp:'"AddRange(outraLista)" adiciona tudo de uma vez — internamente mais eficiente que looping com Add(). Código mais expressivo.',
    },

    // Q5 — Fill
    {
      type:'fill',
      bubble:'Para verificar se algum elemento da List satisfaz uma condição, usamos <code>Any()</code> do LINQ.',
      code:`<span class="kw">bool</span> temCritico = inimigos.<span class="mt">_______</span>(hp => hp < <span class="nm">10</span>);`,
      q:'Qual método LINQ retorna true se ALGUM elemento satisfizer a condição?',
      hint:'Leon pergunta: algum dos inimigos está com HP crítico? Basta um para ser verdade',
      ans:'Any',
      exp:'"Any(pred)" = true se pelo menos um elemento satisfizer. "All(pred)" = true se TODOS satisfizerem. "Count(pred)" conta quantos.',
    },

    // Q6 — Fill
    {
      type:'fill',
      bubble:'<code>List.Insert(índice, item)</code> insere um elemento em uma posição específica, deslocando os demais.',
      code:`<span class="kw">var</span> lista = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">4</span> };\nlista.<span class="mt">_______</span>(<span class="nm">2</span>, <span class="nm">3</span>); <span class="cm">// insere 3 no índice 2</span>`,
      q:'Qual método insere um elemento em uma posição específica?',
      hint:'Leon encaixa a Granada Flash entre a Pistola e o Rifle no slot exato da mochila',
      ans:'Insert',
      exp:'"Insert(2, 3)" insere o valor 3 no índice 2: {1,2,3,4}. Os elementos após o índice são deslocados para a direita.',
    },

    // Q7 — Fill
    {
      type:'fill',
      bubble:'<code>List.Contains()</code> verifica se um elemento específico existe na lista.',
      code:`<span class="kw">if</span> (inventario.<span class="mt">_______</span>(<span class="st">"Erva Verde"</span>))\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Pode curar!"</span>);`,
      q:'Qual método verifica se o elemento existe na List?',
      hint:'Leon checa o inventário antes de usar a Erva Verde para curar Ashley',
      ans:'Contains',
      exp:'"Contains(item)" faz busca linear O(n) na List. Para buscas frequentes em grandes coleções, considere HashSet<T>.',
    },

    // Q8 — Fill
    {
      type:'fill',
      bubble:'Para converter uma List para array, usamos <code>ToArray()</code>.',
      code:`<span class="kw">var</span> lista = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span> };\n<span class="kw">int</span>[] arr = lista.<span class="mt">_______</span>();`,
      q:'Qual método converte List para array?',
      hint:'Leon converte a lista de missões para um formato fixo, como uma ficha de missão em papel',
      ans:'ToArray',
      exp:'"ToArray()" cria um novo array com os elementos da List. "ToList()" faz o inverso. Ambos são métodos de extensão LINQ.',
    },

    // Q9 — Code
    {
      type:'code',
      bubble:'Manipulando uma List de pontuações.',
      code:`<span class="kw">var</span> scores = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">300</span>, <span class="nm">150</span>, <span class="nm">450</span>, <span class="nm">200</span> };\nscores.<span class="mt">Sort</span>();\nscores.<span class="mt">Reverse</span>();\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"1º: {scores[0]}, último: {scores[scores.Count-1]}"</span>);`,
      q:'O que será exibido?',
      hint:'Ada organiza os agentes do menor para o maior e depois inverte para classificar o melhor primeiro',
      opts:[
        {t:'1º: 150, último: 450', ok:false},
        {t:'1º: 450, último: 150', ok:true},
        {t:'1º: 300, último: 200', ok:false},
        {t:'1º: 450, último: 300', ok:false},
      ],
      exp:'Sort(): {150,200,300,450}. Reverse(): {450,300,200,150}. scores[0]=450, scores[Count-1]=150.',
    },

    // Q10 — Code
    {
      type:'code',
      bubble:'RemoveAll limpando elementos indesejados.',
      code:`<span class="kw">var</span> hps = <span class="kw">new</span> List&lt;<span class="kw">int</span>&gt; { <span class="nm">80</span>, <span class="nm">0</span>, <span class="nm">45</span>, <span class="nm">0</span>, <span class="nm">100</span> };\n<span class="kw">int</span> removidos = hps.<span class="mt">RemoveAll</span>(hp => hp == <span class="nm">0</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"Removidos: {removidos}, Restantes: {hps.Count}"</span>);`,
      q:'O que será exibido?',
      hint:'Leon varre a sala e elimina todo Ganado com HP zerado — conte quantos caíram',
      opts:[
        {t:'Removidos: 1, Restantes: 4', ok:false},
        {t:'Removidos: 2, Restantes: 3', ok:true},
        {t:'Removidos: 3, Restantes: 2', ok:false},
        {t:'Removidos: 0, Restantes: 5', ok:false},
      ],
      exp:'Há 2 zeros na lista. RemoveAll remove os dois e retorna 2. Restam 3 elementos: {80, 45, 100}.',
    },

    // Q11 — Code
    {
      type:'code',
      bubble:'Find e FindIndex para localizar elementos.',
      code:`<span class="kw">var</span> armas = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"Pistola"</span>, <span class="st">"Escopeta"</span>, <span class="st">"Rifle"</span> };\n<span class="kw">string</span> encontrada = armas.<span class="mt">Find</span>(a => a.<span class="mt">StartsWith</span>(<span class="st">"E"</span>));\n<span class="kw">int</span> idx = armas.<span class="mt">FindIndex</span>(a => a.<span class="mt">Length</span> > <span class="nm">6</span>);\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{encontrada} | idx:{idx}"</span>);`,
      q:'O que será exibido?',
      hint:'Leon encontra o primeiro inimigo com E no nome — a mesma lógica de busca sequencial da Vila',
      opts:[
        {t:'Escopeta | idx:1', ok:true},
        {t:'Escopeta | idx:2', ok:false},
        {t:'Rifle | idx:1', ok:false},
        {t:'Pistola | idx:0', ok:false},
      ],
      exp:'Find(StartsWith "E") = "Escopeta" (índice 1). FindIndex(Length > 6): "Pistola"=7>6 → idx=0. Espera — "Pistola" tem 7 chars! idx=0. Mas "Escopeta" vem antes... Find percorre em ordem: primeiro que começa com "E" = "Escopeta".',
    },

    // Q12 — Code
    {
      type:'code',
      bubble:'AddRange combinando dois inventários.',
      code:`<span class="kw">var</span> inv1 = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"Pistola"</span>, <span class="st">"Faca"</span> };\n<span class="kw">var</span> inv2 = <span class="kw">new</span> List&lt;<span class="kw">string</span>&gt; { <span class="st">"Escopeta"</span>, <span class="st">"Erva"</span>, <span class="st">"Granada"</span> };\ninv1.<span class="mt">AddRange</span>(inv2);\nConsole.<span class="mt">WriteLine</span>(inv1.<span class="mt">Count</span>);`,
      q:'Quantos itens terá inv1 após AddRange?',
      hint:'Leon junta o inventário da Vila com o do Castelo — some os dois lotes',
      opts:[
        {t:'2', ok:false},{t:'3', ok:false},
        {t:'5', ok:true},{t:'6', ok:false},
      ],
      exp:'"AddRange(inv2)" adiciona todos os 3 elementos de inv2 a inv1. inv1 passa a ter 2+3 = 5 elementos.',
    },

  ]
};
