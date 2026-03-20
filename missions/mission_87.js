// ══════════════════════════════════════════════════════
// ACT VI — O CONFRONTO FINAL
// MISSÃO 88 — CONFRONTO SUPREMO ⚔️
// Tema: ACT VI Final Boss — EF Core, ASP.NET, Algoritmos, File I/O, Pattern Matching
// Tipo: Final Boss (20 questões) | 7 MC → 6 Fill → 7 Code
// ══════════════════════════════════════════════════════

const MISSION_87 = {
  id: 87,
  title: "MISSÃO 88 — CONFRONTO SUPREMO ⚔️",
  icon: '⚔️',
  free: false,
  desc: "Ramon Salazar. Osmund Saddler. O confronto final com todos os chefes do castelo e da ilha. Todos os conceitos do ACT VI convergem neste teste supremo — apenas o agente que domina tudo sobreviverá.",
  objs: [
    "Demonstrar domínio completo do ACT VI",
    "Integrar EF Core, ASP.NET, algoritmos e patterns",
    "Resolver desafios de arquitetura .NET avançada",
  ],
  steps: [

    // Q1 — MC
    {
      type: 'mc',
      bubble: 'Revisão: EF Core migrations e banco de dados.',
      q: 'Qual comando aplica todas as migrations pendentes ao banco de dados?',
      hint: 'Leon aciona o sistema para atualizar o banco de dados do castelo',
      opts: [
        { t: 'dotnet ef migrations apply', ok: false },
        { t: 'dotnet ef database update', ok: true },
        { t: 'dotnet ef database migrate', ok: false },
        { t: 'dotnet ef update-database', ok: false },
      ],
      exp: '"dotnet ef database update": aplica migrations pendentes. "--migration <nome>": aplica até migration específica. "--connection": usa connection string diferente.',
    },

    // Q2 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Minimal API vs MVC Controllers.',
      q: 'Qual cenário favorece Controllers sobre Minimal API?',
      hint: 'Uma operação de resgate complexa na Ilha exige o equipamento mais completo, não o mais leve',
      opts: [
        { t: 'APIs com menos de 5 endpoints', ok: false },
        { t: 'APIs grandes com Model Binding complexo, action filters, e convenções de roteamento avançadas', ok: true },
        { t: 'Sempre — Controllers são superiores', ok: false },
        { t: 'Aplicações mobile', ok: false },
      ],
      exp: 'Minimal API: simples, microserviços. Controllers: model binding avançado, action filters ([Authorize], [ValidateModel]), ApiController conventions, OpenAPI automático.',
    },

    // Q3 — MC
    {
      type: 'mc',
      bubble: 'Revisão: complexidade de algoritmos.',
      q: 'Qual a complexidade de busca em HashSet<T>?',
      hint: 'A TMP localiza Ganados com velocidade constante — nem O(n) nem O(log n)',
      opts: [
        { t: 'O(n)', ok: false },
        { t: 'O(log n)', ok: false },
        { t: 'O(1) médio', ok: true },
        { t: 'O(n log n)', ok: false },
      ],
      exp: 'HashSet<T>.Contains(): O(1) médio (hash lookup). Pior caso O(n) com muitas colisões. SortedSet<T>.Contains(): O(log n) (árvore).',
    },

    // Q4 — MC
    {
      type: 'mc',
      bubble: 'Revisão: Pattern matching com null.',
      q: 'O que verifica "x is not null"?',
      hint: 'Ashley some no castelo — null é ausência de valor, "not null" confirma que ela está presente',
      opts: [
        { t: 'x != null (equivalente)', ok: false },
        { t: 'x is not null: pattern matching que verifica se x não é null — recomendado sobre != null', ok: true },
        { t: 'Sintaxe inválida', ok: false },
        { t: 'Verifica apenas tipos de referência', ok: false },
      ],
      exp: '"x is not null" é equivalente a "x != null" mas usa pattern matching — mais expressivo. Também: "x is null" = "x == null". Recomendado para clareza semântica.',
    },

    // Q5 — MC
    {
      type: 'mc',
      bubble: 'Revisão: SignalR e IHubContext.',
      q: 'Por que usar IHubContext<THub> em vez de injetar o Hub diretamente?',
      hint: 'Ada não espera Leon para enviar o relatório — IHubContext age de qualquer ponto da missão',
      opts: [
        { t: 'IHubContext é mais performático', ok: false },
        { t: 'Hubs têm ciclo de vida por conexão — IHubContext permite enviar mensagens de qualquer serviço, não apenas do Hub ativo', ok: true },
        { t: 'São equivalentes', ok: false },
        { t: 'Hub não pode ser injetado', ok: false },
      ],
      exp: 'Hub: criado por conexão, não pode ser injetado como singleton. IHubContext<T>: acesso ao Hub de qualquer serviço (background service, controllers) — vida longa.',
    },

    // Q6 — MC
    {
      type: 'mc',
      bubble: 'Revisão: File I/O e streams.',
      q: 'Para copiar um arquivo grande de forma eficiente, qual abordagem usar?',
      hint: 'Leon não carrega toda a Ilha no caminhão — transporta em blocos para não sobrecarregar',
      opts: [
        { t: 'File.ReadAllBytes + File.WriteAllBytes', ok: false },
        { t: 'FileStream.CopyToAsync — copia em blocos sem carregar tudo na memória', ok: true },
        { t: 'File.ReadAllText + File.WriteAllText', ok: false },
        { t: 'File.Copy — mais simples e igualmente eficiente', ok: false },
      ],
      exp: 'FileStream.CopyToAsync(destStream): copia em blocos (default 81920 bytes). File.ReadAllBytes: carrega tudo na memória. File.Copy: também eficiente para arquivos locais.',
    },

    // Q7 — MC
    {
      type: 'mc',
      bubble: 'Revisão: PriorityQueue e algoritmos de grafo.',
      q: 'PriorityQueue<T, P> é ideal para implementar qual algoritmo clássico?',
      hint: 'Leon precisa do caminho mais curto até Ashley — a fila de prioridade visita sempre o mais próximo primeiro',
      opts: [
        { t: 'Bubble Sort', ok: false },
        { t: 'Dijkstra — algoritmo de menor caminho que usa fila de prioridade para visitar vértices', ok: true },
        { t: 'Binary Search', ok: false },
        { t: 'Merge Sort', ok: false },
      ],
      exp: 'Dijkstra: fila de prioridade para sempre processar o vértice com menor distância. PriorityQueue<(nó, dist), dist>: Enqueue, Dequeue pelo menor dist.',
    },

    // Q8 — Fill
    {
      type: 'fill',
      bubble: 'EF Core — atualizando entidade:',
      code: `<span class="kw">var</span> missao = <span class="kw">await</span> ctx.Missoes.<span class="mt">FindAsync</span>(id);
<span class="kw">if</span> (missao <span class="kw">is not null</span>)
{
    missao.XP = <span class="nm">500</span>;
    <span class="kw">await</span> ctx.<span class="mt">_______</span>();
}`,
      q: 'Qual método persiste a atualização?',
      hint: 'Salazar, Leon e o mecanismo de save do EF Core usam o mesmo método para toda persistência',
      ans: 'SaveChangesAsync',
      exp: 'ctx.SaveChangesAsync(): gera UPDATE SQL para entidade rastreada com mudança. EF detecta automaticamente a mudança no change tracker.',
    },

    // Q9 — Fill
    {
      type: 'fill',
      bubble: 'ASP.NET Core — obtendo configuração:',
      code: `<span class="kw">var</span> builder = WebApplication.<span class="mt">CreateBuilder</span>(args);
<span class="kw">string</span> connStr = builder._______[<span class="st">"ConnectionStrings:Default"</span>];`,
      q: 'Qual propriedade do builder acessa a configuração do appsettings.json?',
      hint: 'Leon acessa o mapa de configurações do quartel — a propriedade que contém o appsettings',
      ans: 'Configuration',
      exp: 'builder.Configuration: IConfiguration — acessa appsettings.json, variáveis de ambiente, command line. ["key"]: valor por chave. GetSection("nome"): subseção.',
    },

    // Q10 — Fill
    {
      type: 'fill',
      bubble: 'Pattern matching — deconstruction pattern:',
      code: `<span class="kw">record</span> Missao(<span class="kw">string</span> Nome, <span class="kw">int</span> XP);
<span class="kw">var</span> m = <span class="kw">new</span> Missao(<span class="st">"Alpha"</span>, <span class="nm">100</span>);
<span class="kw">if</span> (m <span class="kw">is</span> (<span class="kw">_______</span> nome, > <span class="nm">50</span>))
    Console.<span class="mt">WriteLine</span>(nome);`,
      q: 'Qual padrão captura qualquer string no primeiro campo?',
      hint: 'Qualquer nome de agente serve — Leon usa var para capturar sem especificar o tipo',
      ans: 'var',
      exp: '(var nome, > 50): positional pattern. Primeiro campo: var nome = captura qualquer string. Segundo: > 50. m.XP=100 > 50 → match. Imprime "Alpha".',
    },

    // Q11 — Fill
    {
      type: 'fill',
      bubble: 'Algoritmo — verificando se lista está ordenada:',
      code: `<span class="kw">static bool</span> <span class="mt">Ordenada</span>(<span class="kw">int</span>[] arr) {
    <span class="kw">for</span> (<span class="kw">int</span> i = <span class="nm">1</span>; i < arr.<span class="mt">Length</span>; i++)
        <span class="kw">if</span> (arr[i] < arr[i - <span class="nm">1</span>]) <span class="kw">return</span> _______;
    <span class="kw">return true</span>;
}`,
      q: 'Qual valor retornar quando encontra elemento fora de ordem?',
      hint: 'Leon encontrou um Ganado fora do padrão — o relatório deve sinalizar que a lista não está ordenada',
      ans: 'false',
      exp: 'Ordenada: itera comparando elemento atual com anterior. Se menor → não ordenado → false. Chega ao fim → true. Complexidade O(n).',
    },

    // Q12 — Fill
    {
      type: 'fill',
      bubble: 'Minimal API com validação:',
      code: `app.<span class="mt">MapPost</span>(<span class="st">"/missao"</span>, (MissaoDto dto) =>
    dto.XP <= <span class="nm">0</span>
        ? Results.<span class="mt">_______</span>(<span class="st">"XP deve ser positivo"</span>)
        : Results.<span class="mt">Ok</span>(dto));`,
      q: 'Qual método Results retorna 400 Bad Request com mensagem?',
      hint: 'O quartel rejeita ordens com XP inválido — como Krauser tentando passar por agente',
      ans: 'BadRequest',
      exp: 'Results.BadRequest(objeto): 400 com body. Results.ValidationProblem(errors): 400 com ProblemDetails padrão. Results.BadRequest(): 400 sem body.',
    },

    // Q13 — Code
    {
      type: 'code',
      bubble: 'EF Core — consulta com Skip e Take (paginação).',
      code: `<span class="kw">record</span> Item(<span class="kw">int</span> Id, <span class="kw">string</span> Nome);
<span class="kw">var</span> items = Enumerable.<span class="mt">Range</span>(<span class="nm">1</span>, <span class="nm">10</span>)
    .<span class="mt">Select</span>(i => <span class="kw">new</span> Item(i, <span class="st">$"Item{i}"</span>))
    .<span class="mt">AsQueryable</span>();
<span class="kw">var</span> page2 = items.<span class="mt">Skip</span>(<span class="nm">5</span>).<span class="mt">Take</span>(<span class="nm">3</span>).<span class="mt">ToList</span>();
Console.<span class="mt">WriteLine</span>(page2[<span class="nm">0</span>].Id);
Console.<span class="mt">WriteLine</span>(page2.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'Leon pula os primeiros 5 corredores e inspeciona os próximos 3 — qual é o ID do primeiro?',
      opts: [
        { t: '6 e 3', ok: true },
        { t: '5 e 3', ok: false },
        { t: '6 e 5', ok: false },
        { t: '1 e 3', ok: false },
      ],
      exp: 'Skip(5): pula primeiros 5. Take(3): próximos 3 = {6,7,8}. page2[0].Id = 6. Count = 3. "6" e "3".',
    },

    // Q14 — Code
    {
      type: 'code',
      bubble: 'Switch expression com recursive patterns.',
      code: `<span class="kw">record</span> Inimigo(<span class="kw">string</span> Tipo, <span class="kw">int</span> HP, <span class="kw">bool</span> Armado);
<span class="kw">static int</span> <span class="mt">Dificuldade</span>(Inimigo e) => e <span class="kw">switch</span>
{
    { Tipo: <span class="st">"Chefe"</span>, HP: > <span class="nm">500</span>, Armado: <span class="kw">true</span> } => <span class="nm">10</span>,
    { Tipo: <span class="st">"Chefe"</span> }                               => <span class="nm">7</span>,
    { Armado: <span class="kw">true</span> }                                 => <span class="nm">5</span>,
    <span class="kw">_</span>                                                  => <span class="nm">2</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Dificuldade</span>(<span class="kw">new</span> Inimigo(<span class="st">"Chefe"</span>, <span class="nm">600</span>, <span class="kw">true</span>)));
Console.<span class="mt">WriteLine</span>(<span class="mt">Dificuldade</span>(<span class="kw">new</span> Inimigo(<span class="st">"Ganado"</span>, <span class="nm">50</span>, <span class="kw">false</span>)));`,
      q: 'O que será exibido?',
      hint: 'Saddler com HP>500 e armado é o mais difícil — um Ganado desarmado vai para o nível mais baixo',
      opts: [
        { t: '10 e 2', ok: true },
        { t: '7 e 5', ok: false },
        { t: '10 e 5', ok: false },
        { t: '7 e 2', ok: false },
      ],
      exp: 'Chefe+HP>500+Armado=true → 10. Ganado+Armado=false → match _ → 2. "10" e "2".',
    },

    // Q15 — Code
    {
      type: 'code',
      bubble: 'Binary search manual.',
      code: `<span class="kw">static int</span> <span class="mt">BSearch</span>(<span class="kw">int</span>[] arr, <span class="kw">int</span> target)
{
    <span class="kw">int</span> l = <span class="nm">0</span>, r = arr.<span class="mt">Length</span> - <span class="nm">1</span>;
    <span class="kw">while</span> (l <= r) {
        <span class="kw">int</span> mid = (l + r) / <span class="nm">2</span>;
        <span class="kw">if</span> (arr[mid] == target) <span class="kw">return</span> mid;
        <span class="kw">if</span> (arr[mid] < target) l = mid + <span class="nm">1</span>;
        <span class="kw">else</span> r = mid - <span class="nm">1</span>;
    }
    <span class="kw">return</span> -<span class="nm">1</span>;
}
Console.<span class="mt">WriteLine</span>(<span class="mt">BSearch</span>(<span class="kw">new</span>[] { <span class="nm">2</span>, <span class="nm">4</span>, <span class="nm">6</span>, <span class="nm">8</span>, <span class="nm">10</span> }, <span class="nm">6</span>));`,
      q: 'O que será exibido?',
      hint: 'Leon usa binary search para encontrar o alvo 6 — qual posição ele ocupa na fila ordenada?',
      opts: [
        { t: '1', ok: false },
        { t: '2', ok: true },
        { t: '3', ok: false },
        { t: '-1', ok: false },
      ],
      exp: 'l=0,r=4. mid=2, arr[2]=6==target. Retorna 2. "2".',
    },

    // Q16 — Code
    {
      type: 'code',
      bubble: 'Queue FIFO — ordem de processamento.',
      code: `<span class="kw">var</span> fila = <span class="kw">new</span> Queue&lt;<span class="kw">string</span>&gt;();
fila.<span class="mt">Enqueue</span>(<span class="st">"M1"</span>);
fila.<span class="mt">Enqueue</span>(<span class="st">"M2"</span>);
fila.<span class="mt">Enqueue</span>(<span class="st">"M3"</span>);
Console.<span class="mt">Write</span>(fila.<span class="mt">Dequeue</span>() + <span class="st">" "</span>);
Console.<span class="mt">Write</span>(fila.<span class="mt">Dequeue</span>() + <span class="st">" "</span>);
Console.<span class="mt">WriteLine</span>(fila.<span class="mt">Count</span>);`,
      q: 'O que será exibido?',
      hint: 'O primeiro Ganado a entrar na sala é o primeiro a ser eliminado — a fila de Leon',
      opts: [
        { t: 'M3 M2 1', ok: false },
        { t: 'M1 M2 1', ok: true },
        { t: 'M1 M2 0', ok: false },
        { t: 'M3 M2 3', ok: false },
      ],
      exp: 'Queue FIFO: Enqueue M1,M2,M3. Dequeue: M1. Dequeue: M2. Count restante = 1 (M3). "M1 M2 1".',
    },

    // Q17 — Code
    {
      type: 'code',
      bubble: 'LINQ — Aggregate para soma customizada.',
      code: `<span class="kw">int</span>[] danos = { <span class="nm">25</span>, <span class="nm">30</span>, <span class="nm">15</span>, <span class="nm">50</span>, <span class="nm">10</span> };
<span class="kw">int</span> maxConsecutivo = danos
    .<span class="mt">Aggregate</span>((<span class="nm">0</span>, <span class="nm">0</span>), (acc, d) =>
        d > <span class="nm">20</span>
            ? (acc.Item1 + d, Math.<span class="mt">Max</span>(acc.Item2, acc.Item1 + d))
            : (<span class="nm">0</span>, acc.Item2),
        acc => acc.Item2);
Console.<span class="mt">WriteLine</span>(maxConsecutivo);`,
      q: 'O que será exibido? (soma máxima de consecutivos > 20)',
      hint: 'Leon acumula dano consecutivo maior que 20 — dois ataques seguidos de 25 e 30 formam o maior bloco',
      opts: [
        { t: '50', ok: false },
        { t: '55', ok: true },
        { t: '130', ok: false },
        { t: '80', ok: false },
      ],
      exp: '25>20: acc=(25,25). 30>20: acc=(55,55). 15≤20: acc=(0,55). 50>20: acc=(50,55). 10≤20: acc=(0,55). Result=55.',
    },

    // Q18 — Code
    {
      type: 'code',
      bubble: 'Path e File operations.',
      code: `<span class="kw">string</span>[] paths = {
    Path.<span class="mt">Combine</span>(<span class="st">"dir"</span>, <span class="st">"file.txt"</span>),
    Path.<span class="mt">Combine</span>(<span class="st">"dir"</span>, <span class="st">"file.json"</span>),
};
<span class="kw">var</span> jsons = paths
    .<span class="mt">Where</span>(p => Path.<span class="mt">GetExtension</span>(p) == <span class="st">".json"</span>)
    .<span class="mt">Select</span>(p => Path.<span class="mt">GetFileNameWithoutExtension</span>(p))
    .<span class="mt">First</span>();
Console.<span class="mt">WriteLine</span>(jsons);`,
      q: 'O que será exibido?',
      hint: 'Leon filtra os arquivos da Umbrella e pega o nome sem a extensão — só o codinome da pesquisa',
      opts: [
        { t: 'dir/file.json', ok: false },
        { t: 'file', ok: true },
        { t: 'file.json', ok: false },
        { t: '.json', ok: false },
      ],
      exp: 'Where: apenas "dir/file.json". GetFileNameWithoutExtension: "file". First() = "file".',
    },

    // Q19 — Code
    {
      type: 'code',
      bubble: 'Switch expression com tuple pattern.',
      code: `<span class="kw">static string</span> <span class="mt">Resultado</span>(<span class="kw">int</span> a, <span class="kw">int</span> b) => (a, b) <span class="kw">switch</span>
{
    ( > <span class="nm">0</span>, > <span class="nm">0</span>) => <span class="st">"ambos positivos"</span>,
    (<span class="nm">0</span>, <span class="nm">0</span>)    => <span class="st">"ambos zero"</span>,
    ( < <span class="nm">0</span>, < <span class="nm">0</span>) => <span class="st">"ambos negativos"</span>,
    <span class="kw">_</span>           => <span class="st">"misto"</span>
};
Console.<span class="mt">WriteLine</span>(<span class="mt">Resultado</span>(<span class="nm">5</span>, -<span class="nm">3</span>));
Console.<span class="mt">WriteLine</span>(<span class="mt">Resultado</span>(<span class="nm">2</span>, <span class="nm">8</span>));`,
      q: 'O que será exibido?',
      hint: 'Leon está ao norte e à esquerda em (5,-3) — (2,8) tem ambos positivos como a saída segura',
      opts: [
        { t: 'misto e ambos positivos', ok: true },
        { t: 'ambos positivos e misto', ok: false },
        { t: 'misto e misto', ok: false },
        { t: 'Erro — tuple pattern', ok: false },
      ],
      exp: '(5,-3): 5>0 mas -3<0 → misto. (2,8): ambos>0 → "ambos positivos". "misto" e "ambos positivos".',
    },

    // Q20 — Code
    {
      type: 'code',
      bubble: 'Recursão com memoization.',
      code: `<span class="kw">var</span> memo = <span class="kw">new</span> Dictionary&lt;<span class="kw">int</span>, <span class="kw">long</span>&gt;();
<span class="kw">long</span> <span class="mt">Fib</span>(<span class="kw">int</span> n) {
    <span class="kw">if</span> (n <= <span class="nm">1</span>) <span class="kw">return</span> n;
    <span class="kw">if</span> (memo.<span class="mt">TryGetValue</span>(n, <span class="kw">out var</span> v)) <span class="kw">return</span> v;
    <span class="kw">return</span> memo[n] = <span class="mt">Fib</span>(n - <span class="nm">1</span>) + <span class="mt">Fib</span>(n - <span class="nm">2</span>);
}
Console.<span class="mt">WriteLine</span>(<span class="mt">Fib</span>(<span class="nm">10</span>));`,
      q: 'O que será exibido?',
      hint: 'Leon conta as sequências de Fibonacci como um Regenerador que cresce a cada passo',
      opts: [
        { t: '34', ok: false },
        { t: '55', ok: true },
        { t: '89', ok: false },
        { t: '21', ok: false },
      ],
      exp: 'Fibonacci: 0,1,1,2,3,5,8,13,21,34,55. Fib(10) = 55. Memoization: cada n calculado uma vez.',
    },

  ]
};
