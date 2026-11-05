const skills = [
  {
    title: "Suporte Técnico",
    meta: "Hardware · Manutenção",
    items: [
      "Formatação",
      "Backup",
      "Instalação de periféricos",
      "HDs · Memórias · Processador",
      "Fontes e cabos SATA",
      "Manutenção preventiva",
      "Montagem de máquinas",
    ],
  },
  {
    title: "Redes e Elétrica",
    meta: "Infraestrutura",
    items: [
      "Teste de cabos e redes",
      "Aterramento",
      "Filtros de linha",
      "Estabilizadores",
      "Nobreaks",
      "Assistência remota (TeamViewer, AnyViewer)",
    ],
  },
  {
    title: "Sistemas e Software",
    meta: "Windows · Office",
    items: [
      "Windows",
      "Word · Excel · PowerPoint · Access",
      "Pacote Office",
      "Antivírus",
      "Congelamento de sistemas",
      "Clone · Ghost · Hiren's Boot",
    ],
  },
  {
    title: "Web Designer",
    meta: "Escola Prime · EAD",
    items: ["HTML", "CSS", "JavaScript", "VS Code", "Dreamweaver", "Fireworks", "Sublime Text"],
  },
  {
    title: "Designer Gráfico",
    meta: "Corel Draw · Photoshop",
    items: [
      "Panfletos e flyers",
      "Banners",
      "Cartão de visitas",
      "Vetorização",
      "PowerClip",
      "Efeitos e degradês",
    ],
  },
  {
    title: "Inteligência Artificial",
    meta: "Em formação",
    items: [
      "IA Generativa",
      "Aprendizado de Máquina",
      "Linguagem natural",
      "Desenvolvimento multiagentes",
    ],
  },
];

const education = [
  {
    period: "Cursando",
    title: "Análise e Desenvolvimento de Sistemas",
    place: "Ensino Superior",
    detail:
      "Engenharia e Qualidade de Software · Interface Humano-Computador · Gestão em Sistemas Operacionais · Diversidade Étnica Cultural · Inteligência Artificial · Desenvolvimento Web · Gestão de Pessoas · Comunicação Interpessoal · Programação e Algoritmo · Fundamentos de Banco de Dados",
    current: true,
  },
  {
    period: "Presencial",
    title: "Técnico de Informática",
    place: "Escola Giga Byte",
    detail: "Elétrica, eletrônica, software, hardware e redes.",
  },
  {
    period: "Presencial",
    title: "Informática",
    place: "Escola Giga Byte",
    detail: "Windows, Word, Excel, PowerPoint, Access e Internet.",
  },
  {
    period: "EAD",
    title: "Web Designer",
    place: "Escola Prime",
    detail: "HTML, CSS, JavaScript e ferramentas de desenvolvimento.",
  },
  {
    period: "2006",
    title: "Ensino Médio Completo",
    place: "E.E. Profª Lacy Lenski Lopes — Poá",
    detail: "Formação básica concluída.",
  },
];


const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

document.getElementById("skills").innerHTML = skills
  .map(
    (s) => `<article class="panel card">
      <h3>${esc(s.title)}</h3>
      <p class="meta">${esc(s.meta)}</p>
      <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </article>`
  )
  .join("");

document.getElementById("education").innerHTML = education
  .map(
    (e) => `<li>
      <span class="dot${e.current ? " current" : ""}" aria-hidden="true"></span>
      <div class="panel entry">
        <span class="period">${esc(e.period)}</span>
        <h3>${esc(e.title)}</h3>
        <p class="place">${esc(e.place)}</p>
        <p class="detail">${esc(e.detail)}</p>
      </div>
    </li>`
  )
  .join("");
