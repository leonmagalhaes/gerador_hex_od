function rolar(tamanho) {
  return Math.floor(Math.random() * tamanho);
}

// Tabelas principais
const tiposHex = [
  "Assentamento",
  "Marco na paisagem",
  "Ruína",
  "Obstáculo",
  "Local estranho",
  "Nada especial",
  "Nada especial",
  "Nada especial",
  "Nada especial",
  "Nada especial",
  "Nada especial",
  "Role 2x"
];

// Assentamentos
const assentamentos = [
  "Acampamento", "Vila", "Cidade", "Fortificação", "Templo/Monastério", "Pirâmide"
];
const estruturasAssentamento = [
  "Muralhas de pedra", "Palafitas sobre o rio", "Casas nas árvores", "Tendas de couro", "Cavernas escavadas", "Casas de madeira", "Ruínas reaproveitadas"
];
const populacoes = [
  "Humanos", "Elfos", "Anões", "Goblins", "Orcs", "Halflings", "Misto de raças", "Centauros", "Draconatos"
];
const lideres = [
  "Anciã Miriel, elfa druida", "Chefe Borak, orc guerreiro", "Padre Lucius, humano devoto", "Rainha Nym, anã comerciante", "Xamã Griz, goblin astuto", "Conselho dos Anciãos", "Líder desconhecido"
];
const peculiaridadesAssentamento = [
  "Mercado exótico de itens mágicos", "Culto secreto opera nas sombras", "Fonte de águas curativas", "Tradição de festas noturnas", "Proibição de armas dentro dos limites", "Todos usam máscaras", "Animais falantes são comuns"
];
const ameacasAssentamento = [
  "Bandidos rondam a região", "Doença misteriosa se espalha", "Fera lendária próxima", "Rivalidade interna entre famílias", "Culto maligno infiltrado", "Escassez de alimentos", "Guarda corrupta"
];

// Ruínas
const ruinas = [
  "Cidade", "Templo religioso", "Cena de guerra", "Fortificação", "Torre", "Vila"
];
const estruturasRuina = [
  "Templo", "Torre", "Cidade", "Fortaleza", "Arena", "Biblioteca", "Laboratório arcano"
];
const estadosRuina = [
  "Parcialmente intacta", "Soterrada", "Tomada pela vegetação", "Submersa", "Desmoronada", "Envolta em névoa", "Flutuando no ar"
];
const ocupacoesRuina = [
  "Abandonada", "Ocupada por monstros", "Saqueadores presentes", "Fantasmas vagam", "Cultistas ocultos", "Animais selvagens", "Guardada por construtos"
];
const peculiaridadesRuina = [
  "Inscrições antigas nas paredes", "Armadilhas ainda ativas", "Tesouro oculto", "Portais para outros planos", "Aura mágica estranha", "Ecos de vozes do passado", "Relógio de sol que marca o tempo ao contrário"
];
const ameacasRuina = [
  "Armadilhas letais", "Maldição ancestral", "Criatura guardiã", "Instabilidade estrutural", "Gás venenoso", "Portais instáveis", "Guardião invisível"
];

// Locais estranhos
const locaisEstranhos = [
  "Um lago pequeno de ácido, com uma ilha central onde há uma pilha de objetos metálicos corroídos.",
  "Um obelisco coberto de runas que brilham à noite, mas desaparecem ao amanhecer.",
  "Um círculo de pedras flutuantes, onde a gravidade parece não funcionar direito.",
  "Uma árvore colossal, muito acima do dossel da floresta, com galhos dourados e frutos mágicos.",
  "Um palácio flutuante, visível apenas ao entardecer, que desaparece ao ser tocado.",
  "Um campo de cristais que emitem sons hipnóticos quando o vento sopra.",
  "Um cemitério de criaturas gigantes (não-elefantes), com ossos que brilham em noites de lua cheia.",
  "Um portal de pedra inativo, coberto de musgo, que às vezes pulsa com energia arcana.",
  "Um jardim suspenso na lateral de um penhasco, irrigado por uma cachoeira mágica.",
  "Um vale oculto onde neva mesmo no verão, e criaturas etéreas brincam na neve.",
  "Uma ponte de pedra antiquíssima, guardada por um troll petrificado.",
  "Um campo de topiarias vivas, que mudam de forma quando ninguém está olhando.",
  "Um lago com construções semi-submersas, onde ecos de vozes antigas podem ser ouvidos.",
  "Um círculo de megalitos que apontam para um local distante e misterioso.",
  "Um bosque onde as árvores têm rostos humanos e sussurram segredos para quem se aproxima.",
  "Um altar de pedra onde o tempo passa mais devagar (ou mais rápido) do que no resto do mundo.",
  "Um jardim de flores carnívoras, que se abrem apenas à noite.",
  "Um campo de batalha antigo, onde espectros reencenam a luta eternamente.",
  "Uma torre de mago em ruínas, com livros flutuando ao redor.",
  "Um poço sem fundo, de onde sopram ventos gelados e vozes sussurrantes.",
  "Uma clareira onde a luz do sol nunca toca o chão.",
  "Uma estátua de esfinge que faz perguntas a quem se aproxima.",
  "Uma fonte de água cristalina que cura feridas, mas causa sonhos estranhos.",
  "Uma árvore que chora seiva vermelha como sangue.",
  "Um círculo de cogumelos gigantes que emitem luz azulada à noite.",
  "Uma caverna onde o eco responde com frases diferentes das ditas.",
  "Um altar coberto de ossos de animais desconhecidos.",
  "Uma colina que se move lentamente durante a noite.",
  "Um campo de pedras que vibram quando alguém mente por perto.",
  "Uma clareira onde o tempo está sempre parado ao entardecer."
];

// Marcos e obstáculos (pode expandir)
const marcosPaisagem = [
  "Uma árvore milenar solitária.",
  "Um lago cristalino.",
  "Uma caverna profunda.",
  "Uma colina com vista panorâmica.",
  "Uma cachoeira escondida.",
  "Uma pedra com inscrições antigas.",
  "Um campo de flores raras.",
  "Uma clareira perfeita para acampamento."
];
const obstaculos = [
  "Vegetação espinhosa e densa.",
  "Ponte quebrada sobre um rio.",
  "Areia movediça traiçoeira.",
  "Deslizamento de terra recente.",
  "Enxame de insetos agressivos.",
  "Riacho de águas rápidas.",
  "Penhasco íngreme.",
  "Campo de pedras escorregadias."
];

// Funções de geração modularizadas
function gerarAssentamento() {
  return `
    <strong>Assentamento:</strong> ${assentamentos[rolar(assentamentos.length)]}<br>
    <strong>Estrutura:</strong> ${estruturasAssentamento[rolar(estruturasAssentamento.length)]}<br>
    <strong>População:</strong> ${populacoes[rolar(populacoes.length)]}<br>
    <strong>Líder:</strong> ${lideres[rolar(lideres.length)]}<br>
    <strong>Peculiaridade:</strong> ${peculiaridadesAssentamento[rolar(peculiaridadesAssentamento.length)]}<br>
    <strong>Ameaça:</strong> ${ameacasAssentamento[rolar(ameacasAssentamento.length)]}<br>
  `;
}

function gerarRuina() {
  return `
    <strong>Ruína:</strong> ${ruinas[rolar(ruinas.length)]}<br>
    <strong>Estrutura:</strong> ${estruturasRuina[rolar(estruturasRuina.length)]}<br>
    <strong>Estado:</strong> ${estadosRuina[rolar(estadosRuina.length)]}<br>
    <strong>Ocupação:</strong> ${ocupacoesRuina[rolar(ocupacoesRuina.length)]}<br>
    <strong>Peculiaridade:</strong> ${peculiaridadesRuina[rolar(peculiaridadesRuina.length)]}<br>
    <strong>Ameaça:</strong> ${ameacasRuina[rolar(ameacasRuina.length)]}<br>
  `;
}

function gerarLocalEstranho() {
  return `<strong>Local estranho:</strong> ${locaisEstranhos[rolar(locaisEstranhos.length)]}<br>`;
}

function gerarMarcoPaisagem() {
  return `<strong>Marco:</strong> ${marcosPaisagem[rolar(marcosPaisagem.length)]}<br>`;
}

function gerarObstaculo() {
  return `<strong>Obstáculo:</strong> ${obstaculos[rolar(obstaculos.length)]}<br>`;
}

function gerarNadaEspecial() {
  return `<strong>Detalhe:</strong> Apenas terreno comum, talvez um animal ou fenômeno menor.<br>`;
}

function gerarRole2x() {
  // Gera dois tipos diferentes e combina
  let tiposPossiveis = tiposHex.slice(0, 5); // Não inclui "Nada especial" nem "Role 2x"
  let tipo1 = tiposPossiveis[rolar(tiposPossiveis.length)];
  let tipo2;
  do {
    tipo2 = tiposPossiveis[rolar(tiposPossiveis.length)];
  } while (tipo2 === tipo1);

  let resultado = `<em>Role duas vezes e combine os resultados!</em><br>`;
  resultado += `<u>Primeiro resultado:</u><br>${gerarPorTipo(tipo1)}`;
  resultado += `<u>Segundo resultado:</u><br>${gerarPorTipo(tipo2)}`;
  return resultado;
}

function gerarPorTipo(tipo) {
  switch (tipo) {
    case "Assentamento":
      return gerarAssentamento();
    case "Ruína":
      return gerarRuina();
    case "Local estranho":
      return gerarLocalEstranho();
    case "Marco na paisagem":
      return gerarMarcoPaisagem();
    case "Obstáculo":
      return gerarObstaculo();
    default:
      return gerarNadaEspecial();
  }
}

// Função principal
function gerarHex() {
  let tipo = tiposHex[rolar(tiposHex.length)];
  let resultado = `<strong>Tipo:</strong> ${tipo}<br>`;

  if (tipo === "Assentamento") {
    resultado += gerarAssentamento();
  } else if (tipo === "Ruína") {
    resultado += gerarRuina();
  } else if (tipo === "Local estranho") {
    resultado += gerarLocalEstranho();
  } else if (tipo === "Marco na paisagem") {
    resultado += gerarMarcoPaisagem();
  } else if (tipo === "Obstáculo") {
    resultado += gerarObstaculo();
  } else if (tipo === "Nada especial") {
    resultado += gerarNadaEspecial();
  } else if (tipo === "Role 2x") {
    resultado += gerarRole2x();
  }

  document.getElementById("resultado").innerHTML = resultado;
}
