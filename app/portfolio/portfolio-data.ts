export type PortfolioCase = {
  slug: string;
  title: string;
  category: 'Construtora' | 'Gestão de obras' | 'Engenharia';
  description: string;
  images: { src: string; alt: string }[];
};

const photos = (names: string[], title: string) => names.map((name, index) => ({
  src: `/media/refresh/${name}.webp`, alt: `${title}, vista ${index + 1}`,
}));

// Descrições e classificações editoriais provisórias, conforme o briefing.
export const portfolioCases: PortfolioCase[] = [
  { slug: 'avenida', title: 'Avenida', category: 'Construtora', description: 'Espaços comerciais pensados para receber pessoas, organizar fluxos e integrar as diferentes etapas da construção. Uma leitura da escala, dos materiais e da operação do empreendimento.', images: photos(['site-45', 'site-46', 'site-47', 'site-48', 'site-49'], 'Supermercados Avenida') },
  { slug: 'agi', title: 'Agi', category: 'Gestão de obras', description: 'Estruturas industriais, fundações e espaços operacionais fazem parte de um mesmo processo construtivo. O acompanhamento das etapas conecta as soluções de engenharia à execução em campo.', images: photos(['site-14', 'site-15', 'site-11', 'site-12', 'site-13'], 'AGI Brasil') },
  { slug: 'ioa', title: 'IOA', category: 'Engenharia', description: 'Ambientes de atendimento que aproximam organização, conforto e cuidado com os detalhes. Soluções para conectar a experiência de quem chega à rotina de quem trabalha.', images: photos(['ioa-6', 'ioa-7', 'ioa-8', 'ioa-5'], 'IOA') },
  { slug: 'torra', title: 'Torra', category: 'Construtora', description: 'Um ambiente de varejo com atenção à circulação, à exposição e ao acabamento. A execução de espaços comerciais exige compatibilidade entre estrutura, instalações e uso cotidiano.', images: photos(['site-20'], 'Loja Torra') },
  { slug: 'athia', title: 'ATHIA', category: 'Gestão de obras', description: 'Volumes, acessos e materiais compõem um espaço de atendimento com presença urbana. A organização das etapas conecta a intenção arquitetônica à qualidade do ambiente entregue.', images: photos(['athia-2', 'athia-3', 'athia-4', 'athia-5', 'athia-1'], 'ATHIA') },
  { slug: 'casa-provence', title: 'Casa Provence', category: 'Construtora', description: 'Uma residência que aproxima áreas de convívio, paisagismo e espaços externos. Materiais e acabamentos ajudam a construir continuidade entre a casa e o jardim.', images: photos(['provence-1', 'provence-2', 'provence-3'], 'Casa Provence') },
  { slug: 'clinica-borba', title: 'Clínica Borba', category: 'Engenharia', description: 'Uma composição de fachada que organiza chegada, acesso e identidade do espaço. O cuidado técnico sustenta a integração entre os diferentes elementos da construção.', images: photos(['borba-1'], 'Clínica Borba') },
  { slug: 'prime', title: 'Prime', category: 'Construtora', description: 'Um conjunto comercial que articula fachada, acesso e áreas de permanência. Proporções e iluminação dão unidade aos espaços e valorizam a relação com a cidade.', images: photos(['prime-1', 'prime-2'], 'Prime Center') },
  { slug: 'bermejo', title: 'Bermejo', category: 'Gestão de obras', description: 'Estrutura e acabamento encontram a escala de um espaço comercial. A coordenação das atividades contribui para integrar circulação, área útil e soluções construtivas.', images: photos(['bermejo-1', 'bermejo-2', 'bermejo-3'], 'Bermejo') },
  { slug: 'projeto-01', title: 'Projeto 01', category: 'Engenharia', description: 'Modelo técnico que integra estrutura e instalações para estudar as relações entre os sistemas antes da execução. Apresentação provisória de projeto de engenharia.', images: photos(['project-e1', 'project-e2', 'project-e3'], 'Modelo técnico de estrutura e instalações') },
  { slug: 'projeto-02', title: 'Projeto 02', category: 'Engenharia', description: 'A coordenação das instalações começa no modelo. As vistas apresentam conexões, percursos e interferências para apoiar o desenvolvimento das soluções técnicas. Nome e escopo editorial provisórios.', images: photos(['project-r3', 'project-r1', 'project-r2'], 'Modelo técnico de instalações') },
];
