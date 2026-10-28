import type { Metadata } from "next";
import { Footer } from "../components/sections";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos e condições para acesso e uso do site da GLX Engenharia.",
};

type LegalTopic = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

const topics: LegalTopic[] = [
  {
    id: "identificacao",
    title: "1. Identificação",
    paragraphs: [
      "Este site é mantido pela GLX Engenharia, inscrita no CNPJ sob o nº 38.299.177/0001-03, com sede na Rua José Nogueira Marmontel, 415, Centro, Assis/SP, CEP 19814-361, registro CREA SP nº 2305013.",
      "Os canais oficiais para assuntos relacionados ao site são contato@glxengenharia.com.br e o telefone (18) 99728-9448.",
    ],
  },
  {
    id: "aceitacao",
    title: "2. Aceitação e vigência",
    paragraphs: [
      "Estes Termos regulam o acesso e o uso do site institucional da GLX. Ao navegar, utilizar funcionalidades ou entrar em contato, o usuário declara ter lido e compreendido as condições aplicáveis. Se não concordar, deve interromper o uso das funcionalidades e não enviar dados.",
      "A Política de Privacidade integra estes Termos quanto ao tratamento de dados pessoais. Condições específicas previstas em proposta, contrato, ordem de serviço, projeto, ART, política ou documento assinado prevalecem para a respectiva relação quando houver conflito com uma disposição geral deste site.",
    ],
  },
  {
    id: "capacidade",
    title: "3. Capacidade e representação",
    paragraphs: [
      "O usuário deve possuir capacidade legal para praticar os atos realizados no site. Quem agir em nome de empresa, condomínio, proprietário, investidor ou terceiro declara possuir poderes e autorização suficientes para fornecer informações e iniciar tratativas.",
      "Candidatos menores de idade devem observar as regras trabalhistas aplicáveis e, quando necessário, contar com a assistência ou autorização de seu responsável legal.",
    ],
  },
  {
    id: "finalidade",
    title: "4. Finalidade do site",
    paragraphs: [
      "O site apresenta a GLX, suas áreas de atuação, métodos, diferenciais e canais de contato. Também permite solicitar atendimento, orçamento, informações sobre serviços, participação em processos seletivos e avaliação de interesse em parcerias empresariais.",
      "O conteúdo tem natureza institucional e informativa. Ele não substitui análise do imóvel ou terreno, visita técnica, levantamento, sondagem, projeto, memorial, orçamento detalhado, laudo, ART, RRT, licença, alvará, parecer profissional, proposta comercial ou contrato específico.",
    ],
  },
  {
    id: "servicos",
    title: "5. Serviços apresentados",
    paragraphs: [
      "As descrições de engenharia, construção, gestão de obras, projetos, consultoria, reformas, regularizações e atividades relacionadas representam possibilidades de atuação. A efetiva disponibilidade depende de local, escopo, viabilidade técnica, capacidade operacional, documentação, aprovações e contratação formal.",
      "A indicação de um serviço no site não constitui oferta irrevogável nem obrigação automática de atendimento. A GLX pode recusar solicitações incompatíveis com sua área de atuação, capacidade técnica, agenda, padrões internos, regras profissionais ou legislação.",
    ],
  },
  {
    id: "contato",
    title: "6. Formulários, WhatsApp e atendimento",
    paragraphs: [
      "O contato é feito diretamente por WhatsApp, e-mail ou telefone, sem formulário no site. O botão de WhatsApp pode abrir uma mensagem previamente preparada. O usuário poderá revisar, editar ou cancelar a mensagem antes de enviá-la na plataforma.",
      "O simples preenchimento não cria contrato, reserva de agenda, exclusividade, obrigação de resposta em prazo determinado, garantia de visita, aprovação de crédito, compromisso de preço ou início de serviço. Prazos de retorno apresentados no site são metas de atendimento e podem variar por volume, complexidade, indisponibilidade técnica ou força maior.",
    ],
  },
  {
    id: "orcamentos",
    title: "7. Orçamentos, estimativas e propostas",
    paragraphs: [
      "Valores, prazos, percentuais, cronogramas, indicadores, simulações e resultados exibidos de forma genérica ou ilustrativa não constituem orçamento para o projeto do usuário. Cada contratação depende de informações suficientes, levantamento técnico, definição de responsabilidades, premissas, exclusões e condições comerciais próprias.",
      "Uma proposta somente vincula as partes nos limites de seu texto, prazo de validade e aceite formal. Alterações de escopo, condições do local, interferências não identificadas, escolhas do cliente, exigências públicas, disponibilidade de materiais e eventos externos podem exigir revisão de preço ou prazo, sempre conforme a proposta e o contrato aplicáveis.",
    ],
  },
  {
    id: "contratacao",
    title: "8. Formação da contratação",
    paragraphs: [
      "A contratação de serviços da GLX exige instrumento adequado, que poderá incluir proposta aceita, contrato assinado, anexos técnicos, cronograma, memorial, orçamento, regras de medição, responsabilidades, garantias e registros profissionais.",
      "Conversas, mensagens e reuniões preliminares servem para entendimento e negociação. Nenhuma atividade técnica deve ser considerada iniciada até que as condições necessárias tenham sido formalizadas e, quando aplicável, os documentos, autorizações e pagamentos iniciais tenham sido providenciados.",
    ],
  },
  {
    id: "responsabilidade-tecnica",
    title: "9. Informações técnicas e responsabilidade profissional",
    paragraphs: [
      "Conteúdos educativos ou institucionais não devem ser aplicados a uma obra específica sem avaliação de profissional habilitado. Soluções de engenharia dependem de normas técnicas, características do local, projetos compatibilizados, condições do solo, estrutura existente, legislação urbanística e demais fatores que não podem ser avaliados apenas pelo site.",
      "A responsabilidade técnica da GLX existe somente nos limites do serviço efetivamente contratado e do respectivo registro profissional. O usuário não deve iniciar, alterar ou executar obra com base exclusiva em imagens, textos, perguntas frequentes ou exemplos publicados neste site.",
    ],
  },
  {
    id: "deveres",
    title: "10. Deveres do usuário",
    paragraphs: [
      "Ao utilizar o site, o usuário se compromete a agir de boa-fé, respeitar a legislação e fornecer informações verdadeiras, atualizadas e suficientes para a finalidade pretendida.",
    ],
    items: [
      "Não se passar por outra pessoa nem utilizar dados de terceiros sem autorização ou fundamento legítimo.",
      "Não enviar arquivos maliciosos, dados falsos, conteúdo ilícito, discriminatório, ofensivo ou que viole direitos de terceiros.",
      "Não tentar acessar áreas restritas, credenciais, servidores, códigos, bancos de dados ou integrações sem autorização.",
      "Não interferir na segurança, disponibilidade, desempenho ou funcionamento do site.",
      "Não utilizar automação abusiva, raspagem massiva, engenharia reversa, exploração de vulnerabilidades ou qualquer método destinado a contornar controles técnicos.",
      "Não usar o conteúdo ou os canais da GLX para fraude, concorrência desleal, publicidade não solicitada ou finalidade incompatível com estes Termos.",
    ],
  },
  {
    id: "candidaturas",
    title: "11. Candidaturas e banco de talentos",
    paragraphs: [
      "O envio de currículo não garante entrevista, participação em processo seletivo, contratação ou resposta individual. A GLX pode avaliar perfis conforme requisitos, disponibilidade e critérios profissionais lícitos, sem obrigação de divulgar informações confidenciais do processo.",
      "O candidato é responsável pela veracidade do currículo, pela titularidade dos documentos e links enviados e pela ausência de conteúdo que viole direitos de terceiros. O tratamento dos dados de candidatura segue a Política de Privacidade e as condições aplicáveis ao canal de contato.",
    ],
  },
  {
    id: "parcerias",
    title: "12. Cadastro de empresas parceiras",
    paragraphs: [
      "O cadastro de uma empresa, fornecedor, prestador ou consultor representa apenas uma manifestação de interesse e não garante homologação, exclusividade, convite para cotação, contratação, volume de demanda, prazo de retorno ou formação de vínculo comercial com a GLX.",
      "A GLX pode analisar capacidade técnica, regularidade documental, disponibilidade, região atendida, referências, condições comerciais, segurança, qualidade e aderência às necessidades de cada projeto. A eventual contratação dependerá de negociação, validações aplicáveis e instrumento específico firmado pelas partes.",
      "A pessoa que apresenta a empresa pelos canais de contato declara possuir autorização para representar a empresa informada, responde pela veracidade dos dados e documentos apresentados e deve evitar o compartilhamento de informações confidenciais de terceiros sem fundamento legítimo.",
    ],
  },
  {
    id: "propriedade-intelectual",
    title: "13. Propriedade intelectual",
    paragraphs: [
      "A marca GLX, nomes, logotipos, identidade visual, layout, textos, vídeos, animações, interfaces, códigos, projetos, documentos, fotografias próprias e demais materiais protegidos pertencem à GLX ou são utilizados sob autorização ou licença.",
      "O acesso ao site concede apenas uma licença pessoal, limitada, revogável, não exclusiva e intransferível para navegação e consulta. Sem autorização prévia e escrita, é proibido reproduzir, adaptar, remover créditos, distribuir, vender, licenciar, publicar, explorar comercialmente ou criar obra derivada de conteúdo protegido, ressalvadas as utilizações permitidas por lei.",
      "É permitido compartilhar o endereço público das páginas e citar pequenos trechos para fins legítimos, desde que a fonte seja indicada, o contexto não seja alterado e não haja sugestão indevida de parceria, aprovação ou autoria.",
    ],
  },
  {
    id: "imagens",
    title: "14. Imagens, vídeos e conteúdos ilustrativos",
    paragraphs: [
      "Algumas imagens, vídeos, maquetes, interfaces, nomes de obras, indicadores, retratos, marcas de referência e composições visuais podem ser conceituais, licenciados de bancos de mídia, produzidos digitalmente ou utilizados temporariamente para representar contexto, escala e experiência. Quando o próprio site indicar caráter provisório, fictício, conceitual ou ilustrativo, o conteúdo não deve ser interpretado como registro de obra, cliente, colaborador, resultado ou vínculo comercial real.",
      "Somente materiais identificados de forma clara como caso, obra, equipe, cliente, parceiro ou resultado oficial da GLX devem ser considerados representações factuais dessa relação. Marcas de terceiros permanecem propriedade de seus titulares e sua menção como referência de ecossistema não significa patrocínio, contratação, parceria ou endosso.",
    ],
  },
  {
    id: "precisao",
    title: "15. Atualidade e precisão das informações",
    paragraphs: [
      "A GLX busca manter informações claras e atualizadas, mas conteúdos institucionais podem ficar temporariamente desatualizados ou conter erro material. A empresa pode corrigir informações a qualquer momento. Em decisões técnicas, financeiras ou contratuais, o usuário deve confirmar os dados diretamente com a equipe e consultar os documentos específicos da contratação.",
      "Resultados anteriores, números históricos, exemplos e expectativas não garantem desempenho futuro ou resultado idêntico, pois cada projeto possui condições próprias.",
    ],
  },
  {
    id: "terceiros",
    title: "16. Links e serviços de terceiros",
    paragraphs: [
      "O site pode direcionar para WhatsApp, Instagram, mapas, portfólios e outros serviços externos. Esses ambientes são mantidos por terceiros e possuem termos, políticas, disponibilidade e práticas próprias. A GLX não controla conteúdo externo, mudanças, interrupções ou tratamentos realizados por controladores independentes.",
      "A presença de um link não representa garantia, recomendação irrestrita ou responsabilidade pelo serviço externo. O usuário deve avaliar as condições do terceiro antes de continuar a navegação ou fornecer dados.",
    ],
  },
  {
    id: "disponibilidade",
    title: "17. Disponibilidade, manutenção e segurança",
    paragraphs: [
      "A GLX emprega esforços razoáveis para manter o site disponível e seguro, mas não garante funcionamento ininterrupto, compatibilidade com todo dispositivo, ausência absoluta de falhas ou preservação indefinida de funcionalidades.",
      "O acesso pode ser limitado, suspenso ou encerrado para manutenção, atualização, correção, prevenção de abuso, atendimento a determinação legal, indisponibilidade de fornecedor ou evento fora do controle razoável da GLX.",
    ],
  },
  {
    id: "responsabilidades",
    title: "18. Responsabilidades e limites legais",
    paragraphs: [
      "Cada parte responde pelos danos diretos que causar em violação à lei ou a estes Termos, conforme a extensão comprovada de sua responsabilidade. A GLX não responde por decisões tomadas sem contratação ou análise técnica, uso indevido do conteúdo, informações falsas fornecidas pelo usuário, falhas do dispositivo ou da conexão do usuário, atos de terceiros ou eventos inevitáveis fora de seu controle razoável.",
      "Nenhuma disposição destes Termos exclui responsabilidade que não possa ser afastada pela legislação, limita direitos do consumidor, reduz garantias legais aplicáveis à execução de serviços contratados ou impede reparação quando presentes os requisitos legais.",
    ],
  },
  {
    id: "privacidade",
    title: "19. Privacidade e dados pessoais",
    paragraphs: [
      "O tratamento de dados pessoais realizado por meio do site é descrito na Política de Privacidade. Antes de compartilhar dados pelos canais de contato, o usuário deve ler o documento e observar os avisos e consentimentos apresentados no respectivo canal.",
      "Dúvidas e solicitações de titulares podem ser encaminhadas para contato@glxengenharia.com.br com o assunto “Privacidade e dados pessoais”.",
    ],
  },
  {
    id: "alteracoes",
    title: "20. Alterações dos Termos",
    paragraphs: [
      "A GLX pode atualizar estes Termos para refletir mudanças no site, nos serviços, na legislação ou em suas práticas. A nova versão será publicada nesta página com a data de vigência. O uso posterior à publicação representa ciência das condições atualizadas, sem prejuízo da necessidade de consentimento específico quando exigido por lei.",
      "Alterações destes Termos não modificam retroativamente contratos já celebrados, que continuam regidos pelos respectivos instrumentos e pelas normas aplicáveis.",
    ],
  },
  {
    id: "separabilidade",
    title: "21. Tolerância e separabilidade",
    paragraphs: [
      "A eventual tolerância ao descumprimento de uma condição não representa renúncia, alteração ou criação de direito adquirido. Se alguma disposição for considerada inválida ou inexigível, as demais continuarão válidas na maior extensão permitida pela legislação.",
    ],
  },
  {
    id: "legislacao",
    title: "22. Legislação e solução de controvérsias",
    paragraphs: [
      "Estes Termos são regidos pelas leis brasileiras. As partes buscarão resolver dúvidas e controvérsias por diálogo e pelos canais oficiais da GLX antes de recorrer a medidas formais.",
      "Quando houver relação de consumo, ficam preservados o foro do domicílio do consumidor e todos os direitos previstos no Código de Defesa do Consumidor. Nos demais casos, e desde que não exista competência legal obrigatória diferente, fica eleito o foro da Comarca de Assis/SP.",
    ],
  },
  {
    id: "contato-final",
    title: "23. Contato",
    paragraphs: [
      "Dúvidas sobre estes Termos podem ser enviadas para contato@glxengenharia.com.br, pelo telefone (18) 99728-9448 ou por correspondência para Rua José Nogueira Marmontel, 415, Centro, Assis/SP, CEP 19814-361.",
    ],
  },
];

export default function Terms() {
  return (
    <main>
      <article className="legal-page">
        <header>
          <p className="kicker">Condições de navegação</p>
          <h1>Termos de Uso</h1>
          <p>Versão vigente desde 1 de setembro de 2026</p>
        </header>
        <div className="legal-intro">
          Clareza começa antes da primeira conversa. Estes Termos definem as
          condições para navegar, utilizar os canais de contato e acessar os
          conteúdos institucionais da{" "}
          <span className="keep-tail">GLX Engenharia.</span>
        </div>
        <nav className="legal-index" aria-label="Índice dos Termos de Uso">
          {topics.map((topic) => (
            <a href={`#${topic.id}`} key={topic.id}>
              {topic.title}
            </a>
          ))}
        </nav>
        <div className="legal-topics">
          {topics.map((topic) => (
            <section id={topic.id} key={topic.id}>
              <h2>{topic.title}</h2>
              <div className="legal-topic-body">
                {topic.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {topic.items && (
                  <ul>
                    {topic.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        <aside>
          <strong>GLX Engenharia</strong>
          <span>CNPJ 38.299.177/0001-03</span>
          <span>CREA SP nº 2305013</span>
        </aside>
      </article>
      <Footer />
    </main>
  );
}
