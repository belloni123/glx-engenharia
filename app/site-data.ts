import { Building2, ClipboardCheck, DraftingCompass, HardHat, Ruler, ShieldCheck } from 'lucide-react';

export const navItems = [
  { href: '/a-glx', label: 'A GLX' },
  { href: '/construtora', label: 'Construtora' },
  { href: '/gestao-de-obras', label: 'Gestão de obras' },
  { href: '/engenharia', label: 'Engenharia' },
  { href: '/portfolio', label: 'Portfólio' },
];

export const gallery = [
  ['athia-2', 'Fachada da ATHIA com volumes contemporâneos'],
  ['site-19', 'Concretagem de laje ao entardecer'],
  ['provence-1', 'Área externa e piscina da Casa Provence'],
  ['bermejo-2', 'Interior de galpão com estrutura metálica e piso acabado'],
  ['site-03', 'Edifício comercial fotografado a partir da rua'],
  ['site-23', 'Estrutura metálica em fase de construção'],
  ['provence-3', 'Integração entre varanda, madeira e paisagismo'],
  ['site-10', 'Armação de aço preparada para concretagem'],
  ['prime-1', 'Entrada iluminada do Prime Center'],
  ['site-45', 'Fachada comercial dos Supermercados Avenida'],
  ['borba-1', 'Fachada da Clínica Borba'],
  ['ioa-6', 'Detalhe da fachada do IOA'],
  ['ioa-7', 'Recepção do IOA'],
  ['prime-2', 'Arquitetura e paisagismo do empreendimento Prime'],
  ['athia-3', 'Fachada da ATHIA vista da rua'],
  ['bermejo-1', 'Acesso e fachada do empreendimento Bermejo'],
  ['site-14', 'Edificação industrial da AGI'],
  ['site-24', 'Estrutura e pilares de construção em andamento'],
  ['site-12', 'Estrutura de silo e instalações industriais'],
  ['site-16', 'Interior de ambiente corporativo finalizado'],
].map(([name, alt]) => ({ src: `/media/refresh/${name}.webp`, alt }));

export const brands = [
  ['avenida', 'Supermercados Avenida'], ['agi', 'AGI Brasil'], ['ioa', 'IOA'],
  ['torra', 'Torra'], ['athia', 'ATHIA'], ['bermejo', 'Bermejo’s'],
  ['postos-avenida', 'Postos Avenida'], ['cocal', 'Cocal'], ['cart', 'CART'],
  ['ebd', 'EBD Grupo'], ['elementis', 'Elementis'], ['jeep-way', 'Jeep Way'],
  ['ram-way', 'Ram Way'], ['santa-casa', 'Santa Casa de Assis'],
  ['messen', 'Messen Engenharia'], ['arena-mendes', 'Arena Mendes'], ['zambianco', 'Zambianco'],
].map(([name, alt]) => ({ src: `/media/refresh/logo-${name}.webp`, alt }));

export const services = [
  {
    number: '01', title: 'Construtora', href: '/construtora', icon: Building2,
    text: 'A GLX assume a execução completa da obra, coordenando orçamento, fornecedores, equipes, cronograma e controle de qualidade até a entrega final.',
    image: '/media/refresh/provence-2.webp',
  },
  {
    number: '02', title: 'Gestão de obras', href: '/gestao-de-obras', icon: ClipboardCheck,
    text: 'A GLX organiza e coordena obras, trazendo controle sobre prazos, compras, equipes, medições e custos para que cada decisão seja tomada com mais clareza e previsibilidade.',
    image: '/media/refresh/site-19.webp',
  },
  {
    number: '03', title: 'Engenharia', href: '/engenharia', icon: DraftingCompass,
    text: 'Projetos complementares, compatibilização, laudos e regularizações desenvolvidos para antecipar soluções, reduzir interferências e dar mais segurança técnica à execução.',
    image: '/media/refresh/site-10.webp',
  },
];

export const advantages = [
  { icon: Ruler, title: 'Prazo acompanhado', text: 'O cronograma é revisto com frequência. Se uma etapa desvia, você recebe o motivo, o impacto e o plano de correção.' },
  { icon: ShieldCheck, title: 'Mudanças só após aprovação', text: 'Qualquer alteração de escopo vem acompanhada do efeito em custo e prazo antes de ser executada.' },
  { icon: HardHat, title: 'Conferência em campo', text: 'Serviços e materiais são verificados em cada etapa, com registro do que foi executado.' },
];

export const faqs = [
  ['Como o prazo é acompanhado?', 'A obra começa com um cronograma e responsáveis definidos. A equipe compara o planejado com o executado, registra desvios e apresenta o que precisa ser feito para recuperar uma etapa.'],
  ['O orçamento pode mudar depois de aprovado?', 'Pode haver mudanças de escopo, escolhas do cliente ou condições que só aparecem durante a execução. Quando isso acontece, a GLX apresenta o custo e o impacto no prazo antes de seguir.'],
  ['Preciso visitar a obra todos os dias?', 'Não. Você recebe registros, andamento, pendências e aprovações. As visitas ficam para os momentos em que sua presença realmente ajuda na decisão.'],
  ['A GLX atende reformas e obras menores?', 'Sim. A equipe avalia o tipo de intervenção, o nível de responsabilidade técnica e a disponibilidade para assumir o escopo.'],
  ['Como funciona a garantia?', 'Na entrega da obra, a GLX orienta o cliente sobre uso, manutenção, documentação e garantias aplicáveis aos serviços executados, conforme o contrato e as normas técnicas vigentes.'],
];

export const servicePages = {
  construtora: {
    eyebrow: 'Execução completa', title: 'Uma equipe cuida da obra do terreno à entrega.',
    intro: 'A GLX assume a obra por completo: orçamento, contratações, execução e documentação, tudo sob um único contrato. Você acompanha as decisões sem precisar coordenar cada fornecedor.',
    image: '/media/refresh/provence-2.webp', interest: 'Construtora, execução completa',
    scopeImage: '/media/refresh/ai-delivery-v2.webp',
    stepImages: ['survey', 'planning', 'field', 'delivery'],
    introTitle: 'Você contrata uma vez. A GLX resolve tudo.',
    introCopy: 'Antes do trabalho começar, a GLX define o que está incluído, quem responde por cada etapa e como as decisões serão apresentadas. Em regime de empreitada global, materiais, mão de obra e execução ficam sob uma única responsabilidade.',
    steps: [['01','Antes do canteiro','Visita, leitura do terreno, definição do escopo, padrão de acabamento e faixa de investimento.'],['02','Plano de obra','Orçamento, cronograma, contratações e sequência de compras organizados antes do início.'],['03','Obra em andamento','Coordenação das equipes, conferência dos serviços, registros e decisões técnicas — com total transparência para o cliente.'],['04','Entrega documentada','Vistoria, correções finais, documentos, orientações de uso e garantias previstas no contrato.']],
    outcomes: ['Construção residencial', 'Construção comercial', 'Reformas e ampliações', 'Empreendimentos para investidores'],
  },
  gestao: {
    eyebrow: 'Gestão de obras', title: 'Você continua dono das decisões sem virar gestor da própria obra.',
    intro: 'A GLX organiza cronograma, medições, compras, equipes e pendências. Cada etapa tem responsável definido e decisões chegam até você de forma clara — mesmo com várias empresas envolvidas.',
    image: '/media/project-19.jpg', interest: 'Gestão de obras',
    scopeImage: '/media/refresh/site-19.webp',
    stepImages: ['survey', 'planning', 'field', 'planning'],
    steps: [['01','Leitura do cenário','Conferência dos projetos, contratos, orçamento, estágio do canteiro e pendências abertas.'],['02','Rotina acompanhada','Definição de responsáveis, calendário de compras, medições e reuniões de decisão.'],['03','Presença em campo','Fiscalização, registros, conferência de serviços e encaminhamento das interferências.'],['04','Informação para decidir','Relatórios curtos, previsão das próximas etapas e histórico de custos e aprovações.']],
    outcomes: ['Planejamento e cronograma', 'Gestão financeira', 'Suprimentos e contratações', 'Fiscalização e qualidade'],
  },
  engenharia: {
    eyebrow: 'Engenharia e projetos', title: 'Um bom projeto reduz custos e riscos antes do canteiro.',
    intro: 'A GLX desenvolve e compatibiliza as soluções técnicas que orientam orçamento, contratação, execução e aprovação da obra.',
    image: '/media/refresh/ai-engineering-v2.webp', interest: 'Engenharia e projetos',
    scopeImage: '/media/refresh/ai-scope-v2.webp',
    stepImages: ['survey', 'planning', 'engineering', 'scope'],
    introTitle: 'Cada atividade, prevista antes de virar problema.',
    introCopy: 'A GLX elabora os projetos complementares — estrutural, elétrico, hidrossanitário, SPDA, entre outros — com precisão técnica e total aderência às normas. Cada detalhe é resolvido no papel, para que a obra não precise improvisar no canteiro.',
    steps: [['01','Levantamento','Necessidades do cliente, condições do imóvel, requisitos legais e informações disponíveis.'],['02','Desenvolvimento','Desenhos, cálculos e especificações em nível adequado para orçamento e execução.'],['03','Compatibilização','Conferência entre arquitetura, estrutura e instalações antes de essas disciplinas se encontrarem na obra.'],['04','Documentação','Pranchas, memoriais, ARTs, laudos e material necessário para as aprovações do escopo.']],
    outcomes: ['Projetos complementares', 'Compatibilização', 'Laudos e ARTs', 'Regularizações'],
  },
};
