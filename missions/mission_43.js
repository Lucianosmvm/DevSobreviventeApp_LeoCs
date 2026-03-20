const MISSION_43 = {
  id: 43,
  title: "MISSÃO 44 — O ESPELHO NEGRO",
  icon: '🪞',
  free: false,
  desc: "O espelho revela a verdade oculta de cada inimigo. Pattern Matching permite inspecionar, desestruturar e tomar decisões com base na forma exata de um objeto.",
  objs: [],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: '<strong>Pattern Matching</strong> em C# permite combinar verificação de tipo, extração de dados e condições em uma única expressão elegante.',
      q: 'O que "if (obj is Inimigo e && e.HP > 0)" faz?',
      hint: 'O espelho revela se é um Regenerador vivo — verifica o tipo, extrai e aplica condição numa só olhada',
      opts: [
        { t: 'Apenas verifica se obj é Inimigo', ok: false },
        { t: 'Verifica se obj é Inimigo, extrai para "e" e verifica se HP > 0 — tudo numa linha', ok: true },
        { t: 'Lança exceção se obj não for Inimigo', ok: false },
        { t: 'É equivalente a obj == Inimigo', ok: false },
      ],
      exp: '"is Inimigo e" combina type-check + cast + declaração. "&&" aplica condição extra. Tudo em um if — sem cast explícito.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: '<strong>Switch expressions</strong> (C# 8+) são mais concisas que switch statements. Retornam valor e usam "=>" em vez de "case/break".',
      q: 'Qual a vantagem das switch expressions sobre switch statements?',
      hint: 'O Rifle de precisão é mais compacto e certeiro que a espingarda antiga — switch expression retorna valor diretamente',
      opts: [
        { t: 'São mais rápidas em runtime', ok: false },
        { t: 'Retornam valor, são expressões (não statements), o compilador garante exaustividade', ok: true },
        { t: 'Permitem mais cases', ok: false },
        { t: 'Substituem if/else completamente', ok: false },
      ],
      exp: 'Switch expression: retorna valor, cada arm usa "=>", o compilador avisa se não cobrir todos os casos. Mais seguro e expressivo.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'O <strong>discard pattern</strong> "_" captura qualquer valor sem atribuir a uma variável — o "catch-all" do pattern matching.',
      q: 'No switch expression, qual pattern funciona como "default"?',
      hint: 'Saddler captura qualquer um que não for Krauser ou Salazar — o padrão que pega tudo que sobrou',
      opts: [
        { t: 'default:', ok: false },
        { t: 'else:', ok: false },
        { t: '_ => ...(discard pattern)', ok: true },
        { t: 'null:', ok: false },
      ],
      exp: '"_ =>" é o discard/wildcard — corresponde a qualquer valor não capturado pelos outros patterns. Equivale ao "default:" do switch clássico.',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: '<strong>Property patterns</strong> permitem fazer match nas propriedades de um objeto diretamente: <code>{ HP: > 0, Nome: "Leon" }</code>.',
      q: 'O que "inimigo is { HP: > 50, Vivo: true }" verifica?',
      hint: 'Leon verifica se o Ganado tem mais de 50 HP E está vivo ao mesmo tempo — ambas condições importam',
      opts: [
        { t: 'Apenas se inimigo não é null', ok: false },
        { t: 'Se HP e Vivo são propriedades do tipo', ok: false },
        { t: 'Se HP > 50 E Vivo == true ao mesmo tempo', ok: true },
        { t: 'Se HP OU Vivo satisfazem a condição', ok: false },
      ],
      exp: 'Property pattern verifica múltiplas propriedades com AND implícito. Mais legível que "inimigo.HP > 50 && inimigo.Vivo == true".',
    },

    // Q5 — Fill
    {
      type: 'fill',
      bubble: 'Switch expression básica retornando string conforme o tipo:',
      code: `<span class="kw">string</span> desc = inimigo <span class="kw">switch</span>\n{\n    Regenerador r => <span class="st">$"Regen {r.HP}"</span>,\n    Cultista c    => <span class="st">$"Cult {c.Nome}"</span>,\n    <span class="kw">_</span>             <span class="kw">_______</span> <span class="st">"Inimigo genérico"</span>\n};`,
      q: 'Qual símbolo separa o pattern do valor retornado em switch expression?',
      hint: 'A seta da besta de Salazar aponta para o resultado — esse símbolo separa o padrão do valor',
      ans: '=>',
      exp: '"=>" separa o pattern do resultado em switch expressions. Cada "arm" tem formato: "pattern => valor". O "," separa os arms.',
    },

    // Q6 — Fill
    {
      type: 'fill',
      bubble: 'Para adicionar uma condição extra a um pattern, use a cláusula "when":',
      code: `<span class="kw">string</span> status = hp <span class="kw">switch</span>\n{\n    <span class="nm">0</span>          => <span class="st">"Morto"</span>,\n    < <span class="nm">20</span>        => <span class="st">"Crítico"</span>,\n    < <span class="nm">50</span>        => <span class="st">"Ferido"</span>,\n    <span class="kw">int</span> n <span class="kw">_______</span> n > <span class="nm">100</span> => <span class="st">"Sobrecarregado"</span>,\n    <span class="kw">_</span>          => <span class="st">"Normal"</span>\n};`,
      q: 'Qual palavra-chave adiciona uma condição extra ao pattern?',
      hint: 'Leon atira no Regenerador apenas quando o HP está acima de zero — essa cláusula adiciona essa condição extra',
      ans: 'when',
      exp: '"when" adiciona guarda ao pattern: "int n when n > 100" só captura se n > 100. Permite condições que vão além de tipos.',
    },

    // Q7 — Fill
    {
      type: 'fill',
      bubble: 'O "not pattern" nega um pattern — verifica que algo NÃO é de um tipo:',
      code: `<span class="kw">if</span> (obj <span class="kw">is not</span> <span class="kw">_______</span>)\n    Console.<span class="mt">WriteLine</span>(<span class="st">"Obj não é nulo"</span>);`,
      q: 'Qual pattern verifica se o objeto não é nulo?',
      hint: 'Ashley sumiu — null é ausência total, e "is not" verifica se algo não é isso',
      ans: 'null',
      exp: '"is not null" verifica que obj não é null — mais legível que "obj != null". "not" nega qualquer pattern.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'Tuple patterns permitem fazer match em múltiplos valores ao mesmo tempo:',
      code: `<span class="kw">string</span> resultado = (hp, municao) <span class="kw">switch</span>\n{\n    (<span class="nm">0</span>, <span class="kw">_</span>)   => <span class="st">"Game Over"</span>,\n    (<span class="kw">_</span>, <span class="nm">0</span>)   => <span class="st">"Sem munição"</span>,\n    (<span class="kw">_______</span>) => <span class="st">"OK"</span>\n};`,
      q: 'Qual discard pattern cobre qualquer combinação restante?',
      hint: 'Qualquer combinação de HP e munição que não for específica — Leon ainda está de pé',
      ans: '_, _',
      exp: '"(_, _) => OK" captura qualquer combinação (hp, municao) não coberta. Em tuple patterns, cada elemento pode ser um pattern.',
    },

    // Q9 — Code
    {
      type: 'code',
      bubble: 'Switch expression com type patterns.',
      code: `<span class="kw">public class</span> Inimigo  { <span class="kw">public int</span> HP = <span class="nm">50</span>; }\n<span class="kw">public class</span> Chefe    : Inimigo { }\n<span class="kw">public class</span> Miniboss : Inimigo { }\n\n<span class="kw">static string</span> <span class="mt">Rank</span>(<span class="kw">object</span> e) => e <span class="kw">switch</span>\n{\n    Chefe    => <span class="st">"S"</span>,\n    Miniboss => <span class="st">"A"</span>,\n    Inimigo  => <span class="st">"B"</span>,\n    <span class="kw">_</span>        => <span class="st">"?"</span>\n};\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Rank</span>(<span class="kw">new</span> Miniboss()));`,
      q: 'O que será exibido?',
      hint: 'Krauser é testado antes de Ganado genérico — o pattern mais específico vem primeiro na lista',
      opts: [
        { t: 'S', ok: false },
        { t: 'A', ok: true },
        { t: 'B', ok: false },
        { t: '?', ok: false },
      ],
      exp: 'Switch expression testa arms em ordem. "Miniboss =>" corresponde antes de "Inimigo =>" (que também cobriria, pois Miniboss : Inimigo). Retorna "A".',
    },

    // Q10 — Code
    {
      type: 'code',
      bubble: 'Property pattern verificando estado do personagem.',
      code: `<span class="kw">var</span> leon = <span class="kw">new</span> { HP = <span class="nm">25</span>, Municao = <span class="nm">0</span>, Vivo = <span class="kw">true</span> };\n<span class="kw">string</span> status = leon <span class="kw">switch</span>\n{\n    { Vivo: <span class="kw">false</span> }               => <span class="st">"Morto"</span>,\n    { HP: < <span class="nm">30</span>, Municao: <span class="nm">0</span> }    => <span class="st">"Situação crítica!"</span>,\n    { HP: < <span class="nm">30</span> }                 => <span class="st">"HP baixo"</span>,\n    <span class="kw">_</span>                             => <span class="st">"OK"</span>\n};\nConsole.<span class="mt">WriteLine</span>(status);`,
      q: 'O que será exibido?',
      hint: 'Leon está vivo mas com HP crítico e sem balas — qual situação o property pattern captura primeiro?',
      opts: [
        { t: 'Morto', ok: false },
        { t: 'Situação crítica!', ok: true },
        { t: 'HP baixo', ok: false },
        { t: 'OK', ok: false },
      ],
      exp: 'Vivo=true → não é "Morto". HP=25 < 30 E Municao=0 → "Situação crítica!" (segundo arm). A ordem importa — testado antes do HP baixo.',
    },

    // Q11 — Code
    {
      type: 'code',
      bubble: 'Tuple pattern — combinando dois valores.',
      code: `<span class="kw">static string</span> <span class="mt">Combate</span>(<span class="kw">bool</span> temArma, <span class="kw">bool</span> temMunicao)\n    => (temArma, temMunicao) <span class="kw">switch</span>\n    {\n        (<span class="kw">true</span>,  <span class="kw">true</span>)  => <span class="st">"Atira!"</span>,\n        (<span class="kw">true</span>,  <span class="kw">false</span>) => <span class="st">"Recarregar"</span>,\n        (<span class="kw">false</span>, <span class="kw">_</span>)     => <span class="st">"Fugir!"</span>\n    };\n\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Combate</span>(<span class="kw">true</span>, <span class="kw">false</span>));\nConsole.<span class="mt">WriteLine</span>(<span class="mt">Combate</span>(<span class="kw">false</span>, <span class="kw">true</span>));`,
      q: 'O que será exibido?',
      hint: 'Leon tem arma mas sem balas; depois não tem arma mas tem balas — veja qual arm da tupla cada caso pega',
      opts: [
        { t: 'Atira! e Fugir!', ok: false },
        { t: 'Recarregar e Fugir!', ok: true },
        { t: 'Recarregar e Recarregar', ok: false },
        { t: 'Fugir! e Atira!', ok: false },
      ],
      exp: 'Combate(true,false): (true,false) → "Recarregar". Combate(false,true): (false,_) → "Fugir!" (temArma=false, municao irrelevante).',
    },

    // Q12 — Code
    {
      type: 'code',
      bubble: 'when guard — condição extra no pattern.',
      code: `<span class="kw">var</span> hps = <span class="kw">new</span>[] { <span class="nm">5</span>, <span class="nm">45</span>, <span class="nm">80</span>, <span class="nm">150</span> };\n<span class="kw">foreach</span> (<span class="kw">var</span> hp <span class="kw">in</span> hps)\n{\n    <span class="kw">string</span> s = hp <span class="kw">switch</span>\n    {\n        <span class="nm">0</span>              => <span class="st">"Morto"</span>,\n        <span class="kw">int</span> n <span class="kw">when</span> n < <span class="nm">20</span>  => <span class="st">"Crítico"</span>,\n        <span class="kw">int</span> n <span class="kw">when</span> n < <span class="nm">60</span>  => <span class="st">"Ferido"</span>,\n        <span class="kw">_</span>              => <span class="st">"Saudável"</span>\n    };\n    Console.<span class="mt">Write</span>(s + <span class="st">" "</span>);\n}`,
      q: 'O que será exibido?',
      hint: 'Leon a 5 HP está quase morto; a 45 ferido; a 80 e 150 seguro — o when guard filtra cada faixa',
      opts: [
        { t: 'Crítico Ferido Saudável Saudável', ok: true },
        { t: 'Crítico Crítico Ferido Saudável', ok: false },
        { t: 'Morto Crítico Ferido Saudável', ok: false },
        { t: 'Crítico Ferido Ferido Saudável', ok: false },
      ],
      exp: '5: <20 → Crítico. 45: <60 → Ferido. 80: _ → Saudável. 150: _ → Saudável. Saída: "Crítico Ferido Saudável Saudável".',
    },

  ]
};
