import type { Metadata } from 'next';
import { Footer } from '../components/sections';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados pessoais da GLX Engenharia.',
};

type LegalTopic = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

const topics: LegalTopic[] = [
  {
    id: 'controlador',
    title: '1. Identificação do controlador',
    paragraphs: [
      'A GLX Engenharia, inscrita no CNPJ sob o nº 38.299.177/0001-03, com sede na Rua José Nogueira Marmontel, 415, Centro, Assis/SP, CEP 19814-361, registro CREA SP nº 2305013, é a controladora dos dados pessoais tratados por meio deste site e define as finalidades e os meios essenciais desse tratamento.',
      'O canal para assuntos de privacidade, exercício de direitos e comunicações relacionadas à proteção de dados é contato@glxengenharia.com.br. O titular também pode entrar em contato pelo telefone (18) 99728-9448 ou por correspondência no endereço acima.',
    ],
  },
  {
    id: 'escopo',
    title: '2. Escopo desta política',
    paragraphs: [
      'Esta Política se aplica aos visitantes do site, potenciais clientes, representantes de empresas, fornecedores, prestadores, parceiros, candidatos a vagas e demais pessoas que enviem informações pelos canais digitais da GLX.',
      'O documento cobre o tratamento realizado diretamente no site, nos formulários de contato, candidatura e cadastro de empresas parceiras, nas integrações com CRM e automação, no direcionamento para o WhatsApp e nos registros técnicos necessários à operação e à segurança. Tratamentos realizados no contexto de contratos, obras, relações trabalhistas ou relações com fornecedores podem ser complementados por avisos específicos.',
    ],
  },
  {
    id: 'dados-coletados',
    title: '3. Dados pessoais que podemos tratar',
    paragraphs: [
      'A GLX limita a coleta ao que é adequado, relevante e necessário para cada finalidade. Conforme a forma de interação, podem ser tratados os seguintes dados:',
    ],
    items: [
      'Contato e interesse comercial: nome, telefone, cidade, serviço ou assunto de interesse, página de origem, data e horário do envio e manifestação de consentimento.',
      'Candidaturas profissionais: nome, e-mail, telefone, cidade, área de interesse, nível de experiência, LinkedIn, portfólio, mensagem, currículo e as informações profissionais contidas no arquivo enviado.',
      'Cadastro de empresas parceiras: nome da empresa, CNPJ, nome e cargo do responsável, e-mail corporativo, telefone, cidade, área de atuação, região atendida, site, mensagem, apresentação comercial e informações profissionais ou empresariais contidas no arquivo enviado.',
      'Comunicações: conteúdo de mensagens, solicitações, respostas, histórico de atendimento e informações fornecidas voluntariamente por telefone, e-mail, WhatsApp ou outros canais oficiais.',
      'Dados técnicos: endereço IP, data e horário de acesso, tipo de navegador e dispositivo, página acessada, origem da navegação, identificadores técnicos e registros de erros, segurança ou disponibilidade que possam ser gerados pelos sistemas e provedores de infraestrutura.',
      'Dados decorrentes do relacionamento: informações necessárias para elaborar propostas, registrar negociações, organizar reuniões, cumprir obrigações e preservar o histórico de uma solicitação.',
    ],
  },
  {
    id: 'dados-sensiveis',
    title: '4. Dados sensíveis e informações de terceiros',
    paragraphs: [
      'Os formulários do site não solicitam dados pessoais sensíveis, como informações de saúde, origem racial ou étnica, religião, opinião política, filiação sindical, dados genéticos, biométricos ou relativos à vida sexual. Evite incluir essas informações em mensagens, portfólios, currículos ou apresentações comerciais, salvo quando forem indispensáveis e legalmente adequadas ao contexto.',
      'Ao fornecer dados de outra pessoa, você declara possuir autorização ou outra base legítima para compartilhá-los e se compromete a informar essa pessoa sobre o tratamento descrito nesta Política.',
    ],
  },
  {
    id: 'fontes',
    title: '5. Como os dados são obtidos',
    paragraphs: [
      'Os dados podem ser fornecidos diretamente pelo titular nos formulários, em mensagens, reuniões e interações com a GLX. Também podem ser gerados automaticamente durante a navegação ou recebidos de representantes, parceiros e fontes públicas legítimas quando isso for necessário para iniciar ou manter uma relação profissional ou comercial.',
      'Quando o usuário continua o atendimento pelo WhatsApp, a abertura do aplicativo ou da página e o envio efetivo da mensagem ocorrem no ambiente da plataforma escolhida pelo usuário.',
    ],
  },
  {
    id: 'finalidades',
    title: '6. Finalidades do tratamento',
    paragraphs: [
      'Os dados pessoais podem ser utilizados para as finalidades abaixo, sempre de forma compatível com o contexto em que foram coletados:',
    ],
    items: [
      'Responder contatos, dúvidas, pedidos de orçamento e solicitações de reunião.',
      'Direcionar o atendimento para a área adequada e preparar a continuidade da conversa pelo WhatsApp.',
      'Registrar e organizar oportunidades no CRM, acompanhar retornos e manter o histórico do relacionamento.',
      'Compreender necessidades, realizar análise preliminar, elaborar propostas e adotar providências anteriores a uma possível contratação.',
      'Receber candidaturas, avaliar perfis profissionais, conduzir processos seletivos e formar banco de talentos quando autorizado.',
      'Receber cadastros de empresas, avaliar capacidade técnica e comercial, identificar aderência a demandas e formar uma base de potenciais fornecedores, prestadores e parceiros.',
      'Prevenir fraudes, abusos, envios maliciosos e incidentes, além de preservar a disponibilidade e a integridade do site.',
      'Cumprir obrigações legais, regulatórias e determinações de autoridades competentes.',
      'Exercer direitos em processos administrativos, arbitrais ou judiciais e manter evidências de consentimentos e transações.',
      'Produzir estatísticas agregadas ou anonimizadas para melhorar processos, comunicação e experiência digital.',
    ],
  },
  {
    id: 'bases-legais',
    title: '7. Bases legais utilizadas',
    paragraphs: [
      'A GLX não depende de uma única base legal para todas as operações. Conforme a finalidade e o contexto, o tratamento poderá ser fundamentado no consentimento, na adoção de procedimentos preliminares relacionados a contrato solicitado pelo titular, na execução de contrato, no cumprimento de obrigação legal ou regulatória, no exercício regular de direitos e no legítimo interesse da GLX ou de terceiros, sempre com avaliação de necessidade, proporcionalidade e impacto sobre os direitos do titular.',
      'O consentimento é utilizado, entre outras situações, para autorizar o contato solicitado, a manutenção de currículo no banco de talentos e a avaliação de uma empresa interessada em futuras parcerias. Ele pode ser revogado a qualquer momento, sem afetar a legalidade do tratamento realizado anteriormente nem os dados que devam ser mantidos por outra base legal.',
    ],
  },
  {
    id: 'fornecimento',
    title: '8. Necessidade do fornecimento',
    paragraphs: [
      'Os campos identificados como obrigatórios são necessários para processar a solicitação, candidatura ou apresentação empresarial. A recusa em fornecê-los pode impedir o envio do formulário, a identificação do assunto, o retorno da equipe ou a avaliação do perfil profissional ou empresarial.',
      'O fornecimento de LinkedIn, portfólio, site e apresentação comercial é opcional quando assim indicado no formulário. O usuário pode solicitar informações gerais sem celebrar contrato, e o envio de um formulário não obriga a contratação de qualquer serviço, pessoa ou empresa.',
    ],
  },
  {
    id: 'compartilhamento',
    title: '9. Compartilhamento de dados',
    paragraphs: [
      'A GLX pode compartilhar dados somente na medida necessária para executar as finalidades desta Política. Os destinatários podem atuar como operadores em nome da GLX ou como controladores independentes, conforme a atividade desempenhada.',
    ],
    items: [
      'Provedores de hospedagem, infraestrutura em nuvem, segurança, armazenamento, e-mail e suporte técnico.',
      'Plataformas de CRM, automação comercial, gestão de atendimento e recrutamento.',
      'WhatsApp e demais serviços de comunicação escolhidos pelo usuário para dar continuidade ao contato.',
      'Profissionais, consultores e prestadores sujeitos a deveres de confidencialidade, quando necessários à operação ou à defesa de direitos.',
      'Autoridades públicas, órgãos reguladores, conselhos profissionais ou terceiros quando houver obrigação legal, ordem válida ou necessidade de proteger direitos e prevenir ilícitos.',
      'Sucessores ou envolvidos em reorganização societária, aquisição, incorporação ou transferência de ativos, observadas a confidencialidade e a legislação aplicável.',
    ],
  },
  {
    id: 'nao-venda',
    title: '10. Ausência de comercialização de dados',
    paragraphs: [
      'A GLX não vende, aluga ou negocia dados pessoais. O compartilhamento com fornecedores ocorre para viabilizar atividades legítimas e deve observar instruções, contratos, controles de acesso e obrigações de segurança compatíveis com a função de cada parte.',
    ],
  },
  {
    id: 'transferencias',
    title: '11. Transferências internacionais',
    paragraphs: [
      'Alguns fornecedores de tecnologia podem armazenar ou processar dados em outros países. Quando houver transferência internacional sujeita à legislação brasileira, a GLX adotará um mecanismo válido e medidas de transparência e segurança compatíveis com a LGPD e com o Regulamento de Transferência Internacional de Dados da ANPD.',
      'Essas medidas podem incluir decisões de adequação, cláusulas contratuais padrão, cláusulas específicas, normas corporativas globais ou outra hipótese legal aplicável, sempre com limitação aos dados necessários para a finalidade informada.',
    ],
  },
  {
    id: 'retencao',
    title: '12. Retenção e eliminação',
    paragraphs: [
      'Os dados são mantidos pelo tempo necessário para cumprir a finalidade da coleta e, depois, apenas quando a conservação for permitida ou exigida por lei. A GLX adota os seguintes critérios gerais:',
    ],
    items: [
      'Contatos e oportunidades que não resultem em contratação: até 24 meses contados da última interação relevante, salvo pedido anterior de eliminação ou necessidade legítima de conservação.',
      'Cadastros de potenciais fornecedores, prestadores e parceiros: até 24 meses após o envio ou a última interação relevante, salvo pedido anterior de eliminação, renovação do contato ou necessidade legítima de conservação.',
      'Currículos e dados de candidatos: até 12 meses após o envio ou a última atualização, para o processo seletivo e o banco de talentos. Um novo consentimento ou uma nova candidatura poderá reiniciar esse período.',
      'Registros de consentimento, oposição e atendimento de direitos: enquanto forem necessários para demonstrar conformidade e durante os prazos legais aplicáveis.',
      'Dados vinculados a propostas, contratos, obras, obrigações fiscais, responsabilidades técnicas ou litígios: durante a relação e pelos prazos legais de guarda e prescrição correspondentes.',
      'Registros técnicos e de segurança: pelo período disponibilizado pelos provedores ou exigido pela legislação, limitado ao necessário para segurança, diagnóstico e responsabilização.',
    ],
  },
  {
    id: 'cookies',
    title: '13. Cookies e armazenamento local',
    paragraphs: [
      'Na versão atual, o site utiliza apenas recursos estritamente funcionais e armazenamento local do navegador para registrar preferências de experiência, como a informação de que a animação de introdução já foi exibida. Esse registro não é utilizado para publicidade comportamental.',
      'O site não ativa, nesta versão, cookies de publicidade, remarketing ou ferramentas próprias de perfilamento. Caso sejam adicionadas tecnologias de medição, publicidade ou personalização não essencial, esta Política será atualizada e os controles de escolha adequados serão disponibilizados antes da ativação, quando exigidos.',
      'O usuário pode apagar dados locais e cookies nas configurações do navegador. O bloqueio de recursos estritamente necessários pode afetar parte da experiência, mas não deve impedir o acesso ao conteúdo institucional essencial.',
    ],
  },
  {
    id: 'seguranca',
    title: '14. Segurança e incidentes',
    paragraphs: [
      'A GLX adota medidas técnicas e administrativas proporcionais à natureza dos dados, às finalidades e aos riscos do tratamento. Essas medidas podem incluir controle de acesso, limitação de privilégios, transmissão protegida, validação de arquivos e entradas, registros de atividade, cópias de segurança, atualização de sistemas, seleção criteriosa de fornecedores e orientação das pessoas autorizadas.',
      'Nenhum ambiente digital é totalmente imune a riscos. Se ocorrer incidente de segurança capaz de acarretar risco ou dano relevante, a GLX adotará medidas de contenção, investigação e mitigação e realizará as comunicações exigidas à ANPD e aos titulares afetados, conforme a legislação e a regulamentação aplicáveis.',
    ],
  },
  {
    id: 'direitos',
    title: '15. Direitos do titular',
    paragraphs: [
      'Nos termos da LGPD, o titular pode exercer, quando aplicável ao caso concreto, os seguintes direitos:',
    ],
    items: [
      'Confirmar a existência de tratamento e acessar os próprios dados.',
      'Corrigir dados incompletos, inexatos ou desatualizados.',
      'Solicitar anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.',
      'Solicitar portabilidade, observadas a regulamentação, a viabilidade técnica e os segredos comercial e industrial.',
      'Obter informações sobre entidades com as quais houve compartilhamento e sobre a possibilidade e as consequências de negar consentimento.',
      'Revogar o consentimento e solicitar a eliminação dos dados tratados com essa base, ressalvadas as hipóteses legais de conservação.',
      'Opor-se a tratamento realizado sem consentimento quando houver descumprimento da legislação.',
      'Solicitar revisão e explicação de decisões tomadas unicamente por tratamento automatizado que afetem seus interesses.',
      'Apresentar petição à ANPD e aos órgãos de defesa do consumidor, quando cabível.',
    ],
  },
  {
    id: 'solicitacoes',
    title: '16. Como exercer seus direitos',
    paragraphs: [
      'Envie a solicitação para contato@glxengenharia.com.br com o assunto “Privacidade e dados pessoais”. Para proteger o titular, a GLX poderá pedir informações suficientes para confirmar a identidade ou a legitimidade da representação, sem solicitar dados excessivos.',
      'As solicitações serão atendidas gratuitamente nos prazos legais. Confirmações e acessos simplificados serão providenciados de forma imediata quando possível. Pedidos completos que envolvam origem, critérios e finalidade serão respondidos em até 15 dias, ressalvadas hipóteses legais ou regulamentares específicas. Se uma providência não puder ser adotada, a GLX informará a razão aplicável.',
    ],
  },
  {
    id: 'decisoes-automatizadas',
    title: '17. Decisões automatizadas',
    paragraphs: [
      'A GLX não utiliza os dados coletados neste site para tomar decisões exclusivamente automatizadas que produzam efeitos jurídicos ou afetem significativamente os interesses do titular. Ferramentas podem auxiliar na organização de contatos, candidaturas e cadastros de parceiros, mas a análise comercial e profissional relevante depende de participação humana.',
    ],
  },
  {
    id: 'menores',
    title: '18. Crianças e adolescentes',
    paragraphs: [
      'O site e os serviços comerciais não são direcionados a crianças. A GLX não busca coletar intencionalmente dados de crianças por meio dos formulários. Se houver necessidade de tratar dados de crianças ou adolescentes em outro contexto, a atividade deverá observar o melhor interesse, a legislação aplicável e, quando necessário, a participação do responsável legal.',
      'Caso um responsável identifique o envio indevido de dados de uma criança, poderá solicitar a análise e a eliminação pelo canal de privacidade.',
    ],
  },
  {
    id: 'terceiros',
    title: '19. Sites e serviços de terceiros',
    paragraphs: [
      'O site pode conter links para WhatsApp, Instagram, mapas e outras plataformas. Ao acessar um serviço externo, o tratamento passa a seguir também os termos e políticas do respectivo fornecedor. A GLX recomenda a leitura desses documentos, pois não controla as práticas de controladores independentes.',
    ],
  },
  {
    id: 'alteracoes',
    title: '20. Atualizações desta política',
    paragraphs: [
      'Esta Política pode ser atualizada para refletir mudanças legais, regulatórias, tecnológicas ou operacionais. A versão vigente será publicada nesta página com a data de atualização. Mudanças relevantes que exijam nova ciência ou consentimento serão comunicadas pelos meios apropriados antes de produzirem os efeitos correspondentes.',
    ],
  },
  {
    id: 'legislacao',
    title: '21. Legislação e autoridades competentes',
    paragraphs: [
      'Esta Política é interpretada conforme as leis brasileiras, especialmente a Lei nº 13.709/2018, a Lei Geral de Proteção de Dados Pessoais, a Lei nº 12.965/2014, o Marco Civil da Internet, e a regulamentação expedida pela ANPD. Os direitos assegurados pelo Código de Defesa do Consumidor e por outras normas aplicáveis permanecem preservados.',
    ],
  },
];

export default function Privacy() {
  return (
    <main>
      <article className="legal-page">
        <header>
          <p className="kicker">Privacidade e proteção de dados</p>
          <h1>Política <span className="keep-tail">de Privacidade</span></h1>
          <p>Versão vigente desde 1 de setembro de 2026</p>
        </header>
        <div className="legal-intro">Transparência também faz parte de uma relação bem construída. Este documento explica, de forma completa, como a GLX Engenharia coleta, utiliza, compartilha, protege e elimina <span className="keep-tail">dados pessoais.</span></div>
        <nav className="legal-index" aria-label="Índice da Política de Privacidade">
          {topics.map((topic) => <a href={`#${topic.id}`} key={topic.id}>{topic.title}</a>)}
        </nav>
        <div className="legal-topics">
          {topics.map((topic) => (
            <section id={topic.id} key={topic.id}>
              <h2>{topic.title}</h2>
              <div className="legal-topic-body">
                {topic.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {topic.items && <ul>{topic.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
        <aside><strong>Canal de privacidade</strong><span>contato@glxengenharia.com.br</span><span>(18) 99728-9448</span></aside>
      </article>
      <Footer />
    </main>
  );
}
