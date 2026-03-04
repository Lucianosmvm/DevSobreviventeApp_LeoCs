// =====================================================
// LEON.CS - missions.js
// Adicione novas missoes aqui. Nao mexa no index.html
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
//
// PARA ADICIONAR MISSAO NOVA:
//   1. Va ate o final do array MISSIONS abaixo
//   2. Adicione virgula apos a ultima }
//   3. Cole o template comentado e preencha
//   4. Salve o arquivo
// =====================================================

const MISSIONS = [
  {
    id:0,title:'O QUE É C#?',icon:'🎮',free:true,
    desc:'Leon acorda em uma aldeia estranha. Para sobreviver, ele precisa dominar a linguagem mais poderosa: C#.',
    objs:['Entender o que é C# e para que serve','Conhecer a estrutura básica de um programa','Escrever seu primeiro código'],
    steps:[
      {
        type:'mc',
        bubble:'Agente, <strong>C#</strong> é uma linguagem de programação criada pela <strong>Microsoft</strong>. É usada em games com Unity, apps mobile, sistemas web e muito mais.',
        q:'O que é C#?',hint:'Selecione a resposta correta',
        opts:[
          {t:'Uma linguagem de programação da Microsoft',ok:true},
          {t:'Um editor de imagens',ok:false},
          {t:'Um sistema operacional',ok:false},
          {t:'Um banco de dados',ok:false},
        ],
        exp:'C# (C Sharp) é uma linguagem moderna criada pela Microsoft em 2000. É muito usada em Unity (games), .NET (web) e apps mobile.',
      },
      {
        type:'mc',
        bubble:'Em C#, todo código fica dentro de uma <code>classe</code>. O ponto de entrada do programa é o método <code>Main</code> — é ali que tudo começa.',
        q:'Qual o método de entrada de um programa C#?',hint:'O programa começa aqui',
        opts:[
          {t:'Start()',ok:false},{t:'Begin()',ok:false},
          {t:'Main()',ok:true},{t:'Init()',ok:false},
        ],
        exp:'O método Main() é onde o programa começa a executar. É o ponto de entrada padrão de qualquer aplicação C#.',
      },
      {
        type:'code',
        bubble:'Veja seu primeiro programa em C#. O <code>Console.WriteLine()</code> exibe texto na tela.',
        code:
`<span class="kw">using</span> System;

<span class="kw">class</span> <span class="tp">Programa</span>
{
    <span class="kw">static void</span> <span class="mt">Main</span>()
    {
        Console.<span class="mt">WriteLine</span>(<span class="st">"Missão iniciada!"</span>);
    }
}`,
        q:'O que esse código vai exibir?',hint:'Veja o que está dentro de WriteLine',
        opts:[
          {t:'Nada',ok:false},{t:'Missão iniciada!',ok:true},
          {t:'Console',ok:false},{t:'Programa',ok:false},
        ],
        exp:'Console.WriteLine() imprime o texto entre aspas e pula linha. Vai exibir: Missão iniciada!',
      },
      {
        type:'fill',
        bubble:'Complete o código para exibir <strong>"Leon está pronto"</strong> na tela:',
        code:`Console.<span class="kw">_______</span>(<span class="st">"Leon está pronto"</span>);`,
        q:'Qual método exibe texto na tela?',hint:'Exibe texto E pula uma linha',
        ans:'WriteLine',
        exp:'Console.WriteLine() imprime texto e pula linha. Console.Write() imprime sem pular. WriteLine é o mais usado.',
      },
    ],
  },
  {
    id:1,title:'VARIÁVEIS',icon:'📦',free:false,
    desc:'O inventário de Leon guarda itens. As variáveis guardam informações no programa — cada uma com seu tipo e nome.',
    objs:['Entender o que é uma variável','Declarar variáveis com int, string e bool','Usar interpolação de string com $'],
    steps:[
      {
        type:'mc',
        bubble:'Uma <strong>variável</strong> é um espaço na memória com nome. Você guarda um valor e acessa pelo nome. Sintaxe: <code>tipo nome = valor;</code>',
        q:'Para que servem as variáveis?',hint:'Pense como um cofre com rótulo',
        opts:[
          {t:'Guardar valores na memória do programa',ok:true},
          {t:'Criar interfaces gráficas',ok:false},
          {t:'Conectar ao banco de dados',ok:false},
          {t:'Enviar e-mails',ok:false},
        ],
        exp:'Variáveis são espaços na memória que guardam dados. Cada uma tem tipo, nome e valor.',
      },
      {
        type:'code',
        bubble:'C# tem vários <strong>tipos</strong> de variável. Os mais usados no dia a dia:',
        code:
`<span class="kw">int</span>    vida = <span class="nm">100</span>;     <span class="cm">// número inteiro</span>
<span class="kw">double</span> dano = <span class="nm">33.5</span>;   <span class="cm">// número decimal</span>
<span class="kw">string</span> nome = <span class="st">"Leon"</span>; <span class="cm">// texto</span>
<span class="kw">bool</span>   vivo = <span class="kw">true</span>;   <span class="cm">// verdadeiro/falso</span>`,
        q:'Qual tipo para guardar o nome "Leon"?',hint:'Texto é guardado em qual tipo?',
        opts:[
          {t:'int',ok:false},{t:'bool',ok:false},
          {t:'string',ok:true},{t:'double',ok:false},
        ],
        exp:'string é o tipo para texto. int para inteiros, double para decimais, bool para verdadeiro/falso.',
      },
      {
        type:'code',
        bubble:'Use <code>$</code> antes das aspas para inserir variáveis no texto — isso se chama <strong>interpolação de string</strong>:',
        code:
`<span class="kw">string</span> nome = <span class="st">"Leon"</span>;
<span class="kw">int</span>    vida = <span class="nm">100</span>;

Console.<span class="mt">WriteLine</span>(
  $<span class="st">"Agente {nome} — Vida: {vida}"</span>
);

<span class="cm">// Saída: Agente Leon — Vida: 100</span>`,
        q:'O que o $ antes da string permite fazer?',hint:'O {} dentro da string é a dica',
        opts:[
          {t:'Usar moeda no código',ok:false},
          {t:'Inserir variáveis dentro do texto',ok:true},
          {t:'Converter para maiúsculas',ok:false},
          {t:'Criar uma lista',ok:false},
        ],
        exp:'A interpolação com $ permite inserir variáveis com {nome}. Muito mais legível que concatenar com +.',
      },
      {
        type:'fill',
        bubble:'Declare uma variável inteira chamada <strong>municoes</strong> com valor <strong>30</strong>:',
        code:`<span class="kw">_____</span> municoes = <span class="nm">30</span>;`,
        q:'Qual o tipo para número inteiro?',hint:'Número inteiro em C# usa 3 letras',
        ans:'int',
        exp:'int é o tipo para números inteiros (sem casas decimais). Ex: int idade = 25; int pontos = 0;',
      },
    ],
  },
  {
    id:2,title:'CONDICIONAIS',icon:'🔀',free:false,
    desc:'Leon precisa tomar decisões rápidas. O if/else permite que seu programa também tome decisões com base em condições.',
    objs:['Usar if e else para controlar o fluxo','Conhecer os operadores de comparação','Criar lógica condicional encadeada'],
    steps:[
      {
        type:'mc',
        bubble:'O <strong>if</strong> verifica uma condição. Se for verdadeira, executa o bloco. Senão, cai no <strong>else</strong>. É a base de toda lógica de decisão.',
        q:'O que o "if" faz em C#?',hint:'Pense em: SE isso acontecer...',
        opts:[
          {t:'Repete um bloco de código',ok:false},
          {t:'Verifica uma condição e executa código',ok:true},
          {t:'Cria uma variável',ok:false},
          {t:'Encerra o programa',ok:false},
        ],
        exp:'O if (se) verifica se uma condição é verdadeira e executa o bloco entre {}. O else (senão) executa quando é falsa.',
      },
      {
        type:'code',
        bubble:'Sistema de saúde do Leon em ação:',
        code:
`<span class="kw">int</span> vida = <span class="nm">20</span>;

<span class="kw">if</span> (vida > <span class="nm">50</span>)
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Leon está bem!"</span>);
}
<span class="kw">else</span>
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Precisa de erva!"</span>);
}`,
        q:'O que será exibido com vida = 20?',hint:'20 é maior que 50?',
        opts:[
          {t:'Leon está bem!',ok:false},
          {t:'Precisa de erva!',ok:true},
          {t:'Nada é exibido',ok:false},
          {t:'Erro no programa',ok:false},
        ],
        exp:'20 NÃO é maior que 50, então a condição é falsa e o else executa: "Precisa de erva!".',
      },
      {
        type:'mc',
        bubble:'Operadores de comparação em C#: <code>==</code> igual, <code>!=</code> diferente, <code>&gt;</code> maior, <code>&lt;</code> menor, <code>&gt;=</code> maior/igual, <code>&lt;=</code> menor/igual.',
        q:'Qual operador verifica se dois valores são IGUAIS?',hint:'Não confunda com = que é atribuição!',
        opts:[
          {t:'=',ok:false},{t:'==',ok:true},
          {t:'!=',ok:false},{t:'>=',ok:false},
        ],
        exp:'== é o operador de igualdade (comparação). = é atribuição (guardar valor). São coisas diferentes!',
      },
      {
        type:'fill',
        bubble:'Complete para verificar se <strong>munição é igual a 0</strong>:',
        code:
`<span class="kw">if</span> (municoes <span class="kw">__</span> <span class="nm">0</span>)
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Sem munição!"</span>);
}`,
        q:'Qual operador compara igualdade?',hint:'São dois sinais de igual juntos',
        ans:'==',
        exp:'== é o operador de igualdade. Use = apenas para atribuir valores, e == para comparar.',
      },
    ],
  },
  {
    id:3,title:'LOOPS',icon:'🔁',free:false,
    desc:'Inimigos chegam em ondas. O for e o while repetem ações automaticamente sem você copiar o mesmo código várias vezes.',
    objs:['Usar o loop for com contador','Usar o while para repetição condicional','Entender quando usar cada tipo de loop'],
    steps:[
      {
        type:'mc',
        bubble:'Um <strong>loop</strong> repete um bloco de código. O <strong>for</strong> é ideal quando você sabe <strong>exatamente</strong> quantas vezes repetir.',
        q:'Quando usar o loop FOR?',hint:'Pense em repetir X vezes',
        opts:[
          {t:'Quando não sei quantas vezes repetir',ok:false},
          {t:'Quando sei exatamente quantas vezes repetir',ok:true},
          {t:'Para guardar valores',ok:false},
          {t:'Para comparar valores',ok:false},
        ],
        exp:'O for é ideal quando você conhece o número de repetições com antecedência. Ex: percorrer 10 inimigos.',
      },
      {
        type:'code',
        bubble:'Leon atira 5 vezes — veja como o <strong>for</strong> controla isso:',
        code:
`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="nm">5</span>; i++)
{
    Console.<span class="mt">WriteLine</span>($<span class="st">"Tiro {i + 1}"</span>);
}

<span class="cm">// Tiro 1, Tiro 2, Tiro 3, Tiro 4, Tiro 5</span>`,
        q:'Quantas vezes o loop vai executar?',hint:'i vai de 0 até menor que 5',
        opts:[
          {t:'4 vezes',ok:false},{t:'5 vezes',ok:true},
          {t:'6 vezes',ok:false},{t:'Infinitas vezes',ok:false},
        ],
        exp:'i vai de 0 a 4 (enquanto i < 5). São 5 iterações: i=0, i=1, i=2, i=3, i=4.',
      },
      {
        type:'code',
        bubble:'O <strong>while</strong> repete enquanto a condição for verdadeira. Cuidado com loop infinito!',
        code:
`<span class="kw">int</span> vida = <span class="nm">100</span>;

<span class="kw">while</span> (vida > <span class="nm">0</span>)
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Leon está vivo!"</span>);
    vida -= <span class="nm">30</span>; <span class="cm">// perde 30 de vida</span>
}

Console.<span class="mt">WriteLine</span>(<span class="st">"Game Over"</span>);`,
        q:'Quantas vezes "Leon está vivo!" é exibido?',hint:'100→70→40→10→-20. Quando para?',
        opts:[
          {t:'2 vezes',ok:false},{t:'3 vezes',ok:false},
          {t:'4 vezes',ok:true},{t:'5 vezes',ok:false},
        ],
        exp:'100→70→40→10 (ainda >0, executa)→-20 (para). "Leon está vivo!" aparece 4 vezes.',
      },
      {
        type:'fill',
        bubble:'Complete o for para repetir exatamente <strong>3 vezes</strong>:',
        code:
`<span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">0</span>; i < <span class="kw">___</span>; i++)
{
    Console.<span class="mt">WriteLine</span>(<span class="st">"Reload!"</span>);
}`,
        q:'Qual número coloca para repetir 3 vezes?',hint:'i começa em 0, vai até menor que...',
        ans:'3',
        exp:'i < 3 faz i=0, i=1, i=2 — exatamente 3 iterações. Se colocar i < 4, seriam 4.',
      },
    ],
  },
  {
    id:4,title:'ARRAYS',icon:'📋',free:false,
    desc:'O inventário do Leon tem slots fixos. Arrays são coleções de tamanho fixo — perfeitas para guardar listas conhecidas.',
    objs:['Declarar e inicializar Arrays','Acessar elementos por índice (começa em 0)','Percorrer com foreach'],
    steps:[
      {
        type:'mc',
        bubble:'Um <strong>Array</strong> guarda múltiplos valores do mesmo tipo em sequência. Tamanho <strong>fixo</strong> — definido na criação!',
        q:'Qual a característica principal de um Array?',hint:'O tamanho pode mudar depois?',
        opts:[
          {t:'Tamanho dinâmico, pode crescer',ok:false},
          {t:'Tamanho fixo, definido na criação',ok:true},
          {t:'Guarda tipos diferentes',ok:false},
          {t:'Não permite acesso por índice',ok:false},
        ],
        exp:'Arrays têm tamanho FIXO. Uma vez criado com 5 posições, sempre terá 5. Para dinâmico, use List<T>.',
      },
      {
        type:'code',
        bubble:'O índice do Array <strong>começa em 0</strong> — não em 1. Esse é o erro mais comum dos iniciantes!',
        code:
`<span class="kw">string</span>[] armas = <span class="kw">new</span> <span class="tp">string</span>[<span class="nm">3</span>];

armas[<span class="nm">0</span>] = <span class="st">"Pistola"</span>;
armas[<span class="nm">1</span>] = <span class="st">"Shotgun"</span>;
armas[<span class="nm">2</span>] = <span class="st">"Rifle"</span>;

Console.<span class="mt">WriteLine</span>(armas[<span class="nm">1</span>]);`,
        q:'O que será exibido?',hint:'Qual elemento está no índice 1?',
        opts:[
          {t:'Pistola',ok:false},{t:'Shotgun',ok:true},
          {t:'Rifle',ok:false},{t:'Erro de índice',ok:false},
        ],
        exp:'Índice 0=Pistola, 1=Shotgun, 2=Rifle. armas[1] = "Shotgun".',
      },
      {
        type:'code',
        bubble:'Use <strong>foreach</strong> para percorrer todos os elementos sem precisar do índice:',
        code:
`<span class="kw">string</span>[] inimigos = {
    <span class="st">"Ganado"</span>,
    <span class="st">"Illuminado"</span>,
    <span class="st">"Krauser"</span>
};

<span class="kw">foreach</span> (<span class="kw">string</span> ini <span class="kw">in</span> inimigos)
{
    Console.<span class="mt">WriteLine</span>($<span class="st">"Inimigo: {ini}"</span>);
}`,
        q:'Quantas linhas serão exibidas?',hint:'Quantos inimigos tem no array?',
        opts:[
          {t:'1',ok:false},{t:'2',ok:false},
          {t:'3',ok:true},{t:'4',ok:false},
        ],
        exp:'O foreach percorre cada elemento. 3 inimigos → 3 linhas exibidas.',
      },
      {
        type:'fill',
        bubble:'Acesse o <strong>primeiro elemento</strong> do array abaixo:',
        code:
`<span class="kw">int</span>[] pontos = { <span class="nm">100</span>, <span class="nm">200</span>, <span class="nm">300</span> };

Console.<span class="mt">WriteLine</span>(pontos[<span class="kw">__</span>]);`,
        q:'Qual o índice do primeiro elemento?',hint:'Arrays em C# começam do...',
        ans:'0',
        exp:'Arrays começam no índice 0. Primeiro=[0], segundo=[1], terceiro=[2]. Sempre comece do zero!',
      },
    ],
  },
  {
    id:5,title:'LIST<T>',icon:'📝',free:false,
    desc:'Arrays são rígidos. List<T> é o inventário expandido — cresce e diminui dinamicamente conforme você adiciona ou remove itens.',
    objs:['Criar e usar List<T>','Usar Add, Remove, Count e Contains','Entender as diferenças entre Array e List'],
    steps:[
      {
        type:'mc',
        bubble:'<strong>List&lt;T&gt;</strong> é uma coleção dinâmica. Diferente do Array, você pode adicionar ou remover itens a qualquer momento sem declarar o tamanho.',
        q:'Qual a principal vantagem da List<T> sobre Arrays?',hint:'Pense em flexibilidade',
        opts:[
          {t:'É mais rápida que Array',ok:false},
          {t:'Tamanho dinâmico — cresce e diminui',ok:true},
          {t:'Usa menos memória',ok:false},
          {t:'Funciona com tipos diferentes',ok:false},
        ],
        exp:'List<T> tem tamanho dinâmico. Adicione (.Add) e remova (.Remove) itens sem definir tamanho.',
      },
      {
        type:'code',
        bubble:'Inventário de Leon como List — veja como é flexível:',
        code:
`<span class="tp">List</span>&lt;<span class="kw">string</span>&gt; inv = <span class="kw">new</span>();

inv.<span class="mt">Add</span>(<span class="st">"Pistola"</span>);
inv.<span class="mt">Add</span>(<span class="st">"Erva Verde"</span>);
inv.<span class="mt">Add</span>(<span class="st">"Granada"</span>);

inv.<span class="mt">Remove</span>(<span class="st">"Erva Verde"</span>);

Console.<span class="mt">WriteLine</span>(inv.Count);`,
        q:'Qual o valor exibido pelo Count?',hint:'Adicionamos 3, removemos 1...',
        opts:[
          {t:'1',ok:false},{t:'2',ok:true},
          {t:'3',ok:false},{t:'0',ok:false},
        ],
        exp:'3 adicionados - 1 removido = 2. .Count retorna o número atual de itens da List.',
      },
      {
        type:'mc',
        bubble:'Métodos essenciais da List: <code>.Add(item)</code> adiciona, <code>.Remove(item)</code> remove, <code>.Count</code> total de itens, <code>.Contains(item)</code> verifica se existe.',
        q:'Como verificar se "Shotgun" está na lista?',hint:'Qual método verifica existência?',
        opts:[
          {t:'lista.Has("Shotgun")',ok:false},
          {t:'lista.Contains("Shotgun")',ok:true},
          {t:'lista.Exists("Shotgun")',ok:false},
          {t:'lista.Find("Shotgun")',ok:false},
        ],
        exp:'.Contains(item) retorna true se o item existir na lista. Muito útil para validações!',
      },
      {
        type:'fill',
        bubble:'Adicione <strong>"Sniper"</strong> à lista de armas:',
        code:
`<span class="tp">List</span>&lt;<span class="kw">string</span>&gt; armas = <span class="kw">new</span>();

armas.<span class="kw">___</span>(<span class="st">"Sniper"</span>);`,
        q:'Qual método adiciona um item à List?',hint:'Para adicionar algo à lista, você...',
        ans:'Add',
        exp:'.Add(item) adiciona um elemento ao final da List. É o método mais usado para inserir dados.',
      },
    ],
  },

];

// =====================================================
// TEMPLATE - copie, descomente e preencha:
// =====================================================
//
// {
//   id: 6,               // proximo numero sequencial
//   title: "FUNCOES",    // nome em MAIUSCULAS
//   icon: "X",           // emoji para o card
//   free: false,         // true=gratis | false=premium
//   desc: "Descricao curta exibida antes de comecar.",
//   objs: [
//     "Objetivo 1 que o aluno vai aprender",
//     "Objetivo 2 que o aluno vai aprender",
//   ],
//   steps: [
//
//     // Multipla escolha:
//     {
//       type: "mc",
//       bubble: "Leon explica com <strong>negrito</strong> e <code>codigo</code>.",
//       q: "Pergunta para o aluno?",
//       hint: "Dica rapida",
//       opts: [
//         { t: "Resposta CORRETA",  ok: true  },
//         { t: "Resposta errada 1", ok: false },
//         { t: "Resposta errada 2", ok: false },
//         { t: "Resposta errada 3", ok: false },
//       ],
//       exp: "Explicacao da resposta correta.",
//     },
//
//     // Leia o codigo:
//     {
//       type: "code",
//       bubble: "Analise este trecho:",
//       code: "<span class=\"kw\">int</span> x = <span class=\"nm\">10</span>;",
//       q: "O que o codigo faz?",
//       hint: "Dica",
//       opts: [
//         { t: "Resposta CORRETA",  ok: true  },
//         { t: "Resposta errada 1", ok: false },
//         { t: "Resposta errada 2", ok: false },
//         { t: "Resposta errada 3", ok: false },
//       ],
//       exp: "Explicacao.",
//     },
//
//     // Complete o codigo:
//     {
//       type: "fill",
//       bubble: "Complete o codigo:",
//       code: "<span class=\"kw\">____</span> x = <span class=\"nm\">10</span>;",
//       q: "Qual a palavra-chave?",
//       hint: "Tem 3 letras",
//       ans: "int",
//       exp: "int e o tipo para numeros inteiros.",
//     },
//
//   ],
// },
