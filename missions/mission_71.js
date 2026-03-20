// ══════════════════════════════════════════════════════
// ACT V — A FUGA
// MISSÃO 72 — ROTAS DE ESCAPE
// Tema: C# 9+ Features — init, records avançados, with expression
// Tipo: Normal (10 questões) | 4 MC → 3 Fill → 3 Code
// ══════════════════════════════════════════════════════

const MISSION_71 = {
  id: 71,
  title: "MISSÃO 72 — ROTAS DE ESCAPE",
  icon: '🗺️',
  free: false,
  desc: "As rotas de escape estão mapeadas em records imutáveis — cada variação é um novo plano, nunca uma modificação do original. Records modernos são o mapa para código seguro e claro.",
  objs: [
    "Usar init-only properties e propriedades de record avançadas",
    "Aplicar 'with' expression para criar cópias modificadas",
    "Entender records com herança e igualdade estrutural",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'A expressão <code>with</code> cria uma cópia de um record com algumas propriedades alteradas. O original permanece imutável.',
      q: 'O que "var r2 = r1 with { HP = 50 }" faz?',
      hint: 'A missão original de Leon continua inalterada — with cria uma nova rota sem modificar o plano original',
      opts: [
        { t: 'Modifica r1.HP para 50', ok: false },
        { t: 'Cria r2 como cópia de r1, mas com HP = 50. r1 permanece inalterado', ok: true },
        { t: 'Cria r2 sem HP (herda só HP=50)', ok: false },
        { t: 'Erro — with exige todos os campos', ok: false },
      ],
      exp: '"with" = non-destructive mutation. Cria nova instância com os campos especificados alterados. Todos os outros copiados do original.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Records posicionais geram automaticamente: construtor primário, propriedades init-only, Deconstruct, Equals/GetHashCode estrutural e ToString.',
      q: 'Qual é gerado automaticamente em "record Missao(string Nome, int XP)"?',
      hint: 'Um record posicional entrega o arsenal completo de uma vez — construtor, propriedades, igualdade e muito mais',
      opts: [
        { t: 'Apenas o construtor', ok: false },
        { t: 'Construtor, propriedades init-only, Equals estrutural, GetHashCode, ToString e Deconstruct', ok: true },
        { t: 'Apenas Equals e GetHashCode', ok: false },
        { t: 'Apenas propriedades get-only', ok: false },
      ],
      exp: 'Record posicional: 1 linha gera construtor, propriedades com init, ToString formatado, Equals por valor, GetHashCode por valor e Deconstruct.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Records com herança: record derivado herda do record pai. A igualdade considera o tipo — um record pai NÃO é igual ao filho mesmo com mesmos dados.',
      q: 'Por que dois records de tipos diferentes não são iguais mesmo com dados iguais?',
      hint: 'Leon e um Ganado com o mesmo nome não são iguais — o tipo do record faz parte da comparação',
      opts: [
        { t: 'Bug do compilador', ok: false },
        { t: 'Records comparam por tipo além dos dados — herança correta de igualdade', ok: true },
        { t: 'Records usam comparação por referência', ok: false },
        { t: 'Apenas records posicionais têm igualdade', ok: false },
      ],
      exp: 'record Inimigo(string Nome) e record Chefe(string Nome) : Inimigo — Inimigo("Leon") != Chefe("Leon") pois os tipos EqualityContract diferem.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<code>record struct</code> (C# 10+) combina a semântica de valor de struct com a conveniência de record. Imutabilidade por padrão com init.',
      q: 'Qual a diferença entre "record" e "record struct"?',
      hint: 'O colete de Leon (valor) vs o rádio de Leon (referência) — record struct vive no stack como um tipo de valor',
      opts: [
        { t: 'São idênticos', ok: false },
        { t: '"record" aloca no heap (tipo de referência); "record struct" aloca no stack (tipo de valor)', ok: true },
        { t: '"record struct" não tem igualdade estrutural', ok: false },
        { t: '"record struct" não suporta with expression', ok: false },
      ],
      exp: '"record" = class com conveniências. "record struct" = struct com conveniências. Semântica de valor: cópia ao atribuir. Ambos suportam "with".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Modificando uma propriedade de record com with:',
      code: `<span class="kw">record</span> Agente(<span class="kw">string</span> Codinome, <span class="kw">int</span> HP);\n<span class="kw">var</span> leon = <span class="kw">new</span> Agente(<span class="st">"Leon"</span>, <span class="nm">100</span>);\n<span class="kw">var</span> leonFerido = leon <span class="kw">_______</span> { HP = <span class="nm">30</span> };`,
      q: 'Qual palavra-chave cria a cópia modificada?',
      hint: 'Crie um plano alternativo baseado no de Leon — a palavra-chave em inglês que significa "com"',
      ans: 'with',
      exp: '"with { HP = 30 }" cria leonFerido com HP=30, Codinome="Leon" (copiado). leon.HP permanece 100. Imutabilidade preservada.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Propriedade init-only em classe comum (não record):',
      code: `<span class="kw">class</span> Configuracao\n{\n    <span class="kw">public string</span> Nome { <span class="kw">get</span>; <span class="kw">_______</span>; }\n    <span class="cm">// Só pode ser definida no object initializer</span>\n}`,
      q: 'Qual accessor permite definir na inicialização mas não depois?',
      hint: 'O codinome de Leon é definido na criação e nunca muda — o accessor que permite isso na inicialização apenas',
      ans: 'init',
      exp: '"init" = pode ser definido em "new Configuracao { Nome = "x" }" mas não depois. Diferente de "private set" — init é público mas imutável após construção.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'Desestruturando um record posicional:',
      code: `<span class="kw">record</span> Ponto(<span class="kw">int</span> X, <span class="kw">int</span> Y);\n<span class="kw">var</span> p = <span class="kw">new</span> Ponto(<span class="nm">3</span>, <span class="nm">4</span>);\n<span class="kw">var</span> (x, y) = _______;\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"X={x} Y={y}"</span>);`,
      q: 'Qual variável desestruturar?',
      hint: 'Desestruture as coordenadas do ponto como Leon lê o mapa — a variável que contém o Ponto',
      ans: 'p',
      exp: '"var (x, y) = p" usa Deconstruct gerado pelo record. x=3, y=4. Record posicional gera Deconstruct automaticamente com a ordem dos parâmetros.',
    },

    // Q8 — Code
    {
      type: 'code',
      bubble: 'With expression em cadeia.',
      code: `<span class="kw">record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span> XP, <span class="kw">bool</span> Ativa);\n<span class="kw">var</span> m1 = <span class="kw">new</span> Missao(<span class="st">"Infiltrar"</span>, <span class="nm">100</span>, <span class="kw">false</span>);\n<span class="kw">var</span> m2 = m1 <span class="kw">with</span> { XP = <span class="nm">200</span> };\n<span class="kw">var</span> m3 = m2 <span class="kw">with</span> { Ativa = <span class="kw">true</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{m3.Nome} {m3.XP} {m3.Ativa}"</span>);`,
      q: 'O que será exibido?',
      hint: 'Cada with é uma nova versão do plano de Leon — as mudanças se acumulam sem alterar o original',
      opts: [
        { t: 'Infiltrar 100 False', ok: false },
        { t: 'Infiltrar 200 True', ok: true },
        { t: 'Infiltrar 200 False', ok: false },
        { t: 'Erro — with encadeado', ok: false },
      ],
      exp: 'm1: Nome=Infiltrar, XP=100, Ativa=false. m2 = m1 with XP=200: Nome=Infiltrar, XP=200, Ativa=false. m3 = m2 with Ativa=true: "Infiltrar 200 True".',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Igualdade estrutural de records.',
      code: `<span class="kw">record</span> Coord(<span class="kw">double</span> Lat, <span class="kw">double</span> Lon);\n<span class="kw">var</span> a = <span class="kw">new</span> Coord(<span class="nm">10.5</span>, <span class="nm">20.3</span>);\n<span class="kw">var</span> b = <span class="kw">new</span> Coord(<span class="nm">10.5</span>, <span class="nm">20.3</span>);\n<span class="kw">var</span> c = <span class="kw">new</span> Coord(<span class="nm">10.5</span>, <span class="nm">99.0</span>);\nConsole.<span class="mt">WriteLine</span>(a == b);\nConsole.<span class="mt">WriteLine</span>(a == c);`,
      q: 'O que será exibido?',
      hint: 'Dois mapas com as mesmas coordenadas apontam para o mesmo local — records comparam pelos valores, não pela referência',
      opts: [
        { t: 'False False', ok: false },
        { t: 'True True', ok: false },
        { t: 'True False', ok: true },
        { t: 'False True', ok: false },
      ],
      exp: 'Records: igualdade por valor. a == b: mesmos valores (10.5, 20.3) → True. a == c: Lon diferente → False. "True False".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Record struct — tipo de valor com conveniências de record.',
      code: `<span class="kw">record struct</span> HP(<span class="kw">int</span> Atual, <span class="kw">int</span> Max);\n<span class="kw">var</span> hp = <span class="kw">new</span> HP(<span class="nm">75</span>, <span class="nm">100</span>);\n<span class="kw">var</span> hpBaixo = hp <span class="kw">with</span> { Atual = <span class="nm">15</span> };\nConsole.<span class="mt">WriteLine</span>(<span class="st">$"{hp.Atual}/{hp.Max} → {hpBaixo.Atual}/{hpBaixo.Max}"</span>);`,
      q: 'O que será exibido?',
      hint: 'O colete original de Leon não é afetado — with em record struct cria uma cópia com o valor alterado',
      opts: [
        { t: '75/100 → 15/100', ok: true },
        { t: '15/100 → 15/100', ok: false },
        { t: '75/100 → 75/100', ok: false },
        { t: 'Erro — record struct com with', ok: false },
      ],
      exp: 'record struct é tipo de valor — hp não se altera com with. hpBaixo: Atual=15, Max=100 (copiado). "75/100 → 15/100".',
    },

  ]
};
