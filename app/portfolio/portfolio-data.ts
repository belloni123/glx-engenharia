export type PortfolioSpan = { text: string; bold?: boolean };
export type PortfolioCase = {
  slug: string;
  title: string;
  subtitle: string;
  area?: { label: string; value: string };
  modality: string;
  development?: string;
  content: { type: "heading" | "paragraph"; spans: PortfolioSpan[] }[];
  images: { src: string; alt: string }[];
};

// Conteúdo dos documentos fornecidos em Downloads/Portfólio, preservando os negritos.
export const portfolioCases: PortfolioCase[] = [
  {
    slug: "avenida-lins",
    title: "SUPERMERCADOS AVENIDA",
    subtitle: "Edifício Comercial | Lins/SP",
    modality: "Administração e Gerenciamento de Obras",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de um moderno empreendimento comercial destinado ao setor supermercadista, com 3.458,53 m² de área construída, projetado para oferecer funcionalidade, eficiência operacional e infraestrutura adequada às exigências do segmento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento conta com sistema construtivo em ",
          },
          {
            text: "estrutura pré-moldada de concreto armado",
            bold: true,
          },
          {
            text: ", fechamento em painéis pré-moldados de concreto, execução de revestimentos e acabamentos, além de infraestrutura para instalações elétricas, hidrossanitárias e sistemas específicos para a operação supermercadista.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A edificação contempla amplas áreas de vendas, setores de armazenamento e estoque, ambientes administrativos, áreas técnicas e infraestrutura frigorífica, incluindo espaços destinados à conservação e ao armazenamento de produtos refrigerados e congelados.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "administração, gerenciamento e acompanhamento técnico da construção",
            bold: true,
          },
          {
            text: ", atuando na coordenação das etapas executivas, fiscalização dos serviços, controle de qualidade, acompanhamento do cronograma e integração entre as diferentes equipes envolvidas.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação também compreendeu o acompanhamento da montagem e implantação das estruturas e instalações necessárias à operação do supermercado, assegurando o alinhamento entre os projetos, os processos construtivos e as necessidades operacionais do empreendimento.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/avenida-lins/01.webp",
        alt: "SUPERMERCADOS AVENIDA — Edifício Comercial | Lins/SP, foto 1",
      },
      {
        src: "/media/portfolio/avenida-lins/02.webp",
        alt: "SUPERMERCADOS AVENIDA — Edifício Comercial | Lins/SP, foto 2",
      },
      {
        src: "/media/portfolio/avenida-lins/03.webp",
        alt: "SUPERMERCADOS AVENIDA — Edifício Comercial | Lins/SP, foto 3",
      },
    ],
    area: {
      label: "Área construída",
      value: "3.458,53 m²",
    },
  },
  {
    slug: "avenida-palmital",
    title: "SUPERMERCADO AVENIDA",
    subtitle: "Edifício Comercial | Palmital/SP",
    modality: "Administração e Gerenciamento de Obras",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de um moderno empreendimento comercial destinado ao setor supermercadista, com 2.985,85 m² de área construída, desenvolvido para proporcionar funcionalidade, eficiência operacional e infraestrutura adequada às necessidades do segmento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento foi executado com ",
          },
          {
            text: "sistema construtivo misto, composto por estrutura pré-moldada de concreto armado e alvenaria convencional",
            bold: true,
          },
          {
            text: ", contemplando a execução de revestimentos e acabamentos, instalações elétricas, sistemas hidrossanitários e toda a infraestrutura necessária para o funcionamento do supermercado.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A edificação contempla amplas áreas de vendas, setores de armazenamento e estoque, ambientes administrativos, áreas técnicas e infraestrutura destinada à operação supermercadista, incluindo espaços para conservação, armazenamento e movimentação de mercadorias.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "administração, gerenciamento e acompanhamento técnico da construção",
            bold: true,
          },
          {
            text: ", atuando na coordenação das etapas executivas, fiscalização dos serviços, controle de qualidade, acompanhamento do cronograma e integração entre as diferentes equipes envolvidas.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação também compreendeu o acompanhamento da implantação das instalações e estruturas necessárias à operação do supermercado, assegurando o alinhamento entre os projetos, os processos construtivos e as necessidades operacionais do empreendimento.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/avenida-palmital/01.webp",
        alt: "SUPERMERCADO AVENIDA — Edifício Comercial | Palmital/SP, foto 1",
      },
      {
        src: "/media/portfolio/avenida-palmital/02.webp",
        alt: "SUPERMERCADO AVENIDA — Edifício Comercial | Palmital/SP, foto 2",
      },
      {
        src: "/media/portfolio/avenida-palmital/03.webp",
        alt: "SUPERMERCADO AVENIDA — Edifício Comercial | Palmital/SP, foto 3",
      },
      {
        src: "/media/portfolio/avenida-palmital/04.webp",
        alt: "SUPERMERCADO AVENIDA — Edifício Comercial | Palmital/SP, foto 4",
      },
    ],
    area: {
      label: "Área construída",
      value: "2.985,85 m²",
    },
  },
  {
    slug: "agi",
    title: "AGI - PRÉDIO ADMINISTRATIVO",
    subtitle: "Edifício Comercial e Administrativo | Cândido Mota/SP",
    modality: "Empreitada Global — Elaboração de Projetos e Execução da Obra",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de um moderno empreendimento corporativo e operacional, com 1.060,90 m² de área construída, desenvolvido para integrar ambientes administrativos e operacionais, proporcionando funcionalidade, conforto, eficiência e infraestrutura adequada às necessidades da empresa.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento foi executado com ",
          },
          {
            text: "sistema construtivo composto por estrutura pré-moldada de concreto armado, lajes alveolares e fechamento em alvenaria convencional de blocos cerâmicos",
            bold: true,
          },
          {
            text: ", garantindo soluções construtivas eficientes, racionalização dos processos executivos e qualidade estrutural.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A edificação contempla amplas áreas de escritórios, setores administrativos, ambientes de apoio e uma área destinada à oficina, além de sanitários, vestiários e demais dependências necessárias ao funcionamento das atividades corporativas e operacionais.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto também compreendeu a execução completa dos sistemas elétricos e hidrossanitários, infraestrutura predial, revestimentos e acabamentos, proporcionando ambientes funcionais, seguros e adequados às demandas do empreendimento.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "elaboração dos projetos arquitetônico e complementares, além da execução integral da obra na modalidade de empreitada global",
            bold: true,
          },
          {
            text: ", atuando em todas as etapas do empreendimento, desde o desenvolvimento das soluções técnicas até a conclusão da construção.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu o planejamento, gerenciamento e execução dos serviços, coordenação das equipes, controle de qualidade, gestão de materiais, acompanhamento físico-financeiro e cumprimento do cronograma, assegurando a integração entre os projetos e a execução.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/agi/01.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 1",
      },
      {
        src: "/media/portfolio/agi/02.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 2",
      },
      {
        src: "/media/portfolio/agi/03.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 3",
      },
      {
        src: "/media/portfolio/agi/04.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 4",
      },
      {
        src: "/media/portfolio/agi/05.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 5",
      },
      {
        src: "/media/portfolio/agi/06.webp",
        alt: "AGI - PRÉDIO ADMINISTRATIVO — Edifício Comercial e Administrativo | Cândido Mota/SP, foto 6",
      },
    ],
    area: {
      label: "Área construída",
      value: "1.060,90 m²",
    },
  },
  {
    slug: "ioa",
    title: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS",
    subtitle: "Centro Médico e Cirúrgico | Assis/SP",
    modality: "Empreitada Global — Reforma e Ampliação",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Reforma e ampliação de um moderno centro médico especializado em oftalmologia, contemplando uma área total de 1.889,84 m², desenvolvido para proporcionar infraestrutura hospitalar de qualidade, conforto, segurança e funcionalidade aos pacientes e profissionais da saúde.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento contempla um ",
          },
          {
            text: "amplo centro cirúrgico, com ambientes de apoio e dependências necessárias à realização de procedimentos oftalmológicos",
            bold: true,
          },
          {
            text: ", além de consultórios, salas comerciais destinadas a atividades médicas, áreas administrativas, espaços de atendimento e circulação, integrando diferentes ambientes em uma estrutura moderna e funcional.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A obra compreendeu a execução de serviços de reforma, adequações estruturais e ampliação da edificação existente, incluindo instalações elétricas, sistemas hidrossanitários, infraestrutura para climatização dos ambientes, revestimentos e acabamentos, além das adequações técnicas necessárias ao funcionamento de um centro médico especializado.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto foi desenvolvido com atenção às particularidades de um empreendimento de saúde, priorizando a organização dos espaços, a integração das instalações prediais e as condições necessárias para o funcionamento dos ambientes clínicos e cirúrgicos.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "execução da reforma e ampliação do empreendimento na modalidade de empreitada global",
            bold: true,
          },
          {
            text: ", atuando no planejamento, gerenciamento e execução dos serviços, desde as intervenções na estrutura existente até a conclusão das novas instalações.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu a coordenação das diferentes frentes de trabalho, gestão de materiais e equipes, controle de qualidade, acompanhamento físico-financeiro e cumprimento do cronograma, garantindo a integração entre os serviços de construção civil e os sistemas técnicos necessários à operação do centro médico.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/ioa/01.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 1",
      },
      {
        src: "/media/portfolio/ioa/02.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 2",
      },
      {
        src: "/media/portfolio/ioa/03.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 3",
      },
      {
        src: "/media/portfolio/ioa/04.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 4",
      },
      {
        src: "/media/portfolio/ioa/05.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 5",
      },
      {
        src: "/media/portfolio/ioa/06.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 6",
      },
      {
        src: "/media/portfolio/ioa/07.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 7",
      },
      {
        src: "/media/portfolio/ioa/08.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 8",
      },
      {
        src: "/media/portfolio/ioa/09.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 9",
      },
      {
        src: "/media/portfolio/ioa/10.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 10",
      },
      {
        src: "/media/portfolio/ioa/11.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 11",
      },
      {
        src: "/media/portfolio/ioa/12.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 12",
      },
      {
        src: "/media/portfolio/ioa/13.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 13",
      },
      {
        src: "/media/portfolio/ioa/14.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 14",
      },
      {
        src: "/media/portfolio/ioa/15.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 15",
      },
      {
        src: "/media/portfolio/ioa/16.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 16",
      },
      {
        src: "/media/portfolio/ioa/17.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 17",
      },
      {
        src: "/media/portfolio/ioa/18.webp",
        alt: "IOA — INSTITUTO DE OFTALMOLOGIA DE ASSIS — Centro Médico e Cirúrgico | Assis/SP, foto 18",
      },
    ],
    area: {
      label: "Área construída e reformada",
      value: "1.889,84 m²",
    },
  },
  {
    slug: "torra",
    title: "LOJAS TORRA",
    subtitle: "Retrofit Comercial | Assis/SP",
    modality: "Empreitada Global — Retrofit, Reforma e Ampliação",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Retrofit e modernização de um empreendimento comercial com 2.396,64 m² de área construída, contemplando a readequação completa de uma edificação existente para implantação da nova estrutura da Loja Torra, proporcionando ambientes modernos, funcionais e alinhados às necessidades operacionais e comerciais do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A intervenção compreendeu a ",
          },
          {
            text: "reestruturação dos espaços internos, ampliação das áreas comerciais e adequação da infraestrutura predial",
            bold: true,
          },
          {
            text: ", utilizando sistemas construtivos em alvenaria convencional e divisórias em drywall, incluindo a execução de paredes com resistência ao fogo (RF), destinadas ao atendimento das exigências de segurança contra incêndio.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento recebeu novas instalações elétricas e hidrossanitárias, adequações de infraestrutura, execução de revestimentos e acabamentos, além da reorganização dos ambientes para otimização dos espaços de vendas, circulação, atendimento e apoio operacional.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto teve como objetivo transformar uma estrutura comercial existente em um espaço contemporâneo, valorizando a arquitetura, a funcionalidade e a eficiência operacional, por meio de soluções construtivas que integraram modernização, aproveitamento da edificação e ampliação de sua capacidade comercial.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "execução integral do retrofit, reforma e ampliação do empreendimento na modalidade de empreitada global",
            bold: true,
          },
          {
            text: ", atuando no planejamento, gerenciamento e execução de todas as etapas da obra.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu a coordenação das diferentes frentes de trabalho, execução das adequações construtivas, gestão de materiais e equipes, controle de qualidade, acompanhamento físico-financeiro e cumprimento do cronograma, assegurando a integração entre os serviços e as necessidades da nova operação comercial.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/torra/01.webp",
        alt: "LOJAS TORRA — Retrofit Comercial | Assis/SP, foto 1",
      },
      {
        src: "/media/portfolio/torra/02.webp",
        alt: "LOJAS TORRA — Retrofit Comercial | Assis/SP, foto 2",
      },
    ],
    area: {
      label: "Área construída",
      value: "2.396,64 m²",
    },
  },
  {
    slug: "athia",
    title: "ATHIA",
    subtitle: "Retrofit Comercial | Reforma e Ampliação",
    modality: "Reforma e Ampliação — Execução com Equipe Especializada",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Reforma, ampliação e retrofit de uma edificação comercial existente, contemplando sua transformação em uma moderna casa de velório, com ambientes planejados para proporcionar conforto, acolhimento, funcionalidade e infraestrutura adequada às necessidades do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A intervenção compreendeu a ",
          },
          {
            text: "readequação completa dos espaços internos, modernização da infraestrutura predial e adaptação da edificação para uma nova finalidade de uso",
            bold: true,
          },
          {
            text: ", utilizando sistemas construtivos em alvenaria convencional de blocos cerâmicos e divisórias em drywall, proporcionando flexibilidade na organização dos ambientes e eficiência na execução.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento recebeu novas instalações elétricas e hidrossanitárias, adequações de infraestrutura, execução de revestimentos e acabamentos, além da reorganização dos espaços para atender às necessidades de atendimento, circulação, permanência e apoio operacional de uma casa de velório.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto teve como objetivo transformar uma estrutura comercial existente em um ambiente contemporâneo, funcional e acolhedor, valorizando o aproveitamento da edificação original e integrando soluções construtivas às particularidades de um empreendimento destinado aos serviços funerários.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX atuou na ",
          },
          {
            text: "execução dos serviços de reforma e ampliação, por meio de equipe especializada",
            bold: true,
          },
          {
            text: ", realizando as intervenções necessárias à modernização e adaptação da edificação existente.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu a execução dos serviços de construção civil, implantação de novos sistemas de vedação, adequações das instalações prediais, revestimentos e acabamentos, com atenção à qualidade executiva, aos detalhes construtivos e à integração entre as diferentes etapas da reforma.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/athia/01.webp",
        alt: "ATHIA — Retrofit Comercial | Reforma e Ampliação, foto 1",
      },
      {
        src: "/media/portfolio/athia/02.webp",
        alt: "ATHIA — Retrofit Comercial | Reforma e Ampliação, foto 2",
      },
      {
        src: "/media/portfolio/athia/03.webp",
        alt: "ATHIA — Retrofit Comercial | Reforma e Ampliação, foto 3",
      },
      {
        src: "/media/portfolio/athia/04.webp",
        alt: "ATHIA — Retrofit Comercial | Reforma e Ampliação, foto 4",
      },
    ],
  },
  {
    slug: "casa-provence",
    title: "CASA PROVENCE",
    subtitle: "Residência de Alto Padrão | Projeto Residencial",
    modality: "Empreitada Global — Execução da Obra, Exceto Estrutura",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de uma moderna residência de alto padrão, com 476,16 m² de área construída, desenvolvida para proporcionar sofisticação, conforto e funcionalidade, integrando soluções arquitetônicas contemporâneas a ambientes amplos e cuidadosamente planejados.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento contempla uma ",
          },
          {
            text: "residência assobradada, com espaços sociais integrados, área gourmet e piscina",
            bold: true,
          },
          {
            text: ", proporcionando ambientes destinados ao convívio familiar, lazer e entretenimento, com valorização da iluminação natural e da integração entre os espaços internos e externos.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A construção compreendeu no sistema em painéis de CLT e áreas em alvenarias, instalações elétricas e hidrossanitárias, infraestrutura predial, revestimentos e acabamentos, com atenção especial aos detalhes construtivos, à qualidade dos materiais e ao padrão estético do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto se destaca pela arquitetura contemporânea, pela composição harmoniosa dos ambientes e pela utilização de soluções construtivas que valorizam o conforto, a funcionalidade e a experiência residencial, resultando em um imóvel sofisticado e de elevado padrão de acabamento.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "execução da obra na modalidade de empreitada global, excetuando-se a execução da estrutura",
            bold: true,
          },
          {
            text: ", atuando no planejamento, gerenciamento e execução das demais etapas construtivas do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu a coordenação das equipes especializadas, gestão de materiais, execução das alvenarias, instalações prediais, revestimentos, acabamentos e serviços relacionados aos ambientes de lazer, incluindo a área gourmet e a piscina.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O trabalho envolveu ainda o controle de qualidade, acompanhamento físico-financeiro e gestão do cronograma, assegurando a integração entre as diferentes frentes de serviço e a fidelidade às soluções arquitetônicas e especificações do projeto.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/casa-provence/01.webp",
        alt: "CASA PROVENCE — Residência de Alto Padrão | Projeto Residencial, foto 1",
      },
      {
        src: "/media/portfolio/casa-provence/02.webp",
        alt: "CASA PROVENCE — Residência de Alto Padrão | Projeto Residencial, foto 2",
      },
      {
        src: "/media/portfolio/casa-provence/03.webp",
        alt: "CASA PROVENCE — Residência de Alto Padrão | Projeto Residencial, foto 3",
      },
    ],
    area: {
      label: "Área construída",
      value: "476,16 m²",
    },
  },
  {
    slug: "prime",
    title: "PRIME INCORPORADORA",
    subtitle: "Complexo Comercial | Assis/SP",
    modality:
      "Elaboração de Projetos Complementares e Execução de Obra com Equipe Especializada",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de um moderno complexo comercial composto por ",
          },
          {
            text: "16 salas comerciais independentes",
            bold: true,
          },
          {
            text: ", com área total construída de 511,58 m², desenvolvido para oferecer versatilidade, funcionalidade e infraestrutura adequada à instalação de diferentes atividades comerciais e de prestação de serviços.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento foi concebido para proporcionar ambientes comerciais eficientes, com espaços planejados para atender às necessidades de diferentes operações, valorizando a flexibilidade de ocupação, a acessibilidade e o aproveitamento dos espaços.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A construção contempla sistemas estruturais e instalações hidrossanitárias, além de toda a infraestrutura necessária ao funcionamento das unidades comerciais, integrando soluções técnicas que proporcionam segurança, eficiência construtiva e qualidade ao empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto priorizou a organização dos ambientes, a integração entre as unidades e a funcionalidade das áreas de circulação e atendimento, resultando em um conjunto comercial moderno, versátil e preparado para diferentes perfis de negócios.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "elaboração dos projetos complementares estrutural e hidrossanitário, além da execução dos serviços de construção civil por meio de equipe especializada",
            bold: true,
          },
          {
            text: ", integrando o desenvolvimento técnico dos projetos à execução do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu o dimensionamento e detalhamento das soluções estruturais e hidrossanitárias, execução dos serviços construtivos, coordenação das equipes e acompanhamento técnico das etapas da obra, assegurando a compatibilidade entre os projetos e os serviços executados.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/prime/01.webp",
        alt: "PRIME INCORPORADORA — Complexo Comercial | Assis/SP, foto 1",
      },
      {
        src: "/media/portfolio/prime/02.webp",
        alt: "PRIME INCORPORADORA — Complexo Comercial | Assis/SP, foto 2",
      },
      {
        src: "/media/portfolio/prime/03.webp",
        alt: "PRIME INCORPORADORA — Complexo Comercial | Assis/SP, foto 3",
      },
      {
        src: "/media/portfolio/prime/04.webp",
        alt: "PRIME INCORPORADORA — Complexo Comercial | Assis/SP, foto 4",
      },
      {
        src: "/media/portfolio/prime/05.webp",
        alt: "PRIME INCORPORADORA — Complexo Comercial | Assis/SP, foto 5",
      },
    ],
    area: {
      label: "Área construída",
      value: "511,58 m²",
    },
    development: "Complexo Comercial com 16 Salas",
  },
  {
    slug: "rrb",
    title: "RRB ADMINISTRAÇÃO",
    subtitle: "Barracão Comercial | Empreendimento Comercial",
    modality:
      "Elaboração de Projetos Complementares e Execução de Obra com Equipe Especializada",
    content: [
      {
        type: "heading",
        spans: [
          {
            text: "Descritivo da Obra",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "Construção de um moderno barracão comercial com 708,57 m² de área construída, desenvolvido para proporcionar funcionalidade, eficiência operacional e infraestrutura adequada às necessidades de atividades comerciais e empresariais.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O empreendimento foi executado em ",
          },
          {
            text: "alvenaria estrutural aparente, com estrutura de cobertura metálica e telhas termoacústicas",
            bold: true,
          },
          {
            text: ", integrando soluções construtivas que proporcionam resistência, durabilidade, conforto térmico e valorização arquitetônica.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A edificação contempla a execução de ",
          },
          {
            text: "piso industrial em concreto polido",
            bold: true,
          },
          {
            text: ", desenvolvido para atender às exigências de resistência e desempenho das áreas operacionais, além de revestimentos, acabamentos e instalações elétricas e hidrossanitárias, garantindo infraestrutura completa para o funcionamento do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "O projeto valorizou a utilização da alvenaria estrutural aparente como elemento construtivo e arquitetônico, aliando estética industrial, racionalização dos processos executivos e eficiência no aproveitamento dos espaços, resultando em uma edificação moderna, robusta e funcional.",
          },
        ],
      },
      {
        type: "heading",
        spans: [
          {
            text: "Escopo de Atuação — GLX Engenharia",
            bold: true,
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A GLX Engenharia foi responsável pela ",
          },
          {
            text: "elaboração dos projetos complementares estrutural, elétrico e hidrossanitário, além da execução dos serviços de construção civil por meio de equipe especializada",
            bold: true,
          },
          {
            text: ", integrando o desenvolvimento das soluções técnicas à execução do empreendimento.",
          },
        ],
      },
      {
        type: "paragraph",
        spans: [
          {
            text: "A atuação compreendeu o dimensionamento e detalhamento dos sistemas estruturais e das instalações prediais, execução da alvenaria estrutural, implantação da cobertura metálica, execução do piso industrial, revestimentos e acabamentos, além da coordenação das equipes e acompanhamento técnico das etapas construtivas.",
          },
        ],
      },
    ],
    images: [
      {
        src: "/media/portfolio/rrb/01.webp",
        alt: "RRB ADMINISTRAÇÃO — Barracão Comercial | Empreendimento Comercial, foto 1",
      },
      {
        src: "/media/portfolio/rrb/02.webp",
        alt: "RRB ADMINISTRAÇÃO — Barracão Comercial | Empreendimento Comercial, foto 2",
      },
      {
        src: "/media/portfolio/rrb/03.webp",
        alt: "RRB ADMINISTRAÇÃO — Barracão Comercial | Empreendimento Comercial, foto 3",
      },
      {
        src: "/media/portfolio/rrb/04.webp",
        alt: "RRB ADMINISTRAÇÃO — Barracão Comercial | Empreendimento Comercial, foto 4",
      },
    ],
    area: {
      label: "Área construída",
      value: "708,57 m²",
    },
  },
];
