import type { Metadata } from "next";
import Image from "next/image";
import { ContactChannels } from "../components/contact-channels";
import { Reveal } from "../components/experience";
import {
  BalancedText,
  InteriorHero,
  PageShell,
  SectionHeading,
} from "../components/sections";

export const metadata: Metadata = {
  title: "Trabalhe conosco",
  description:
    "Faça parte da equipe técnica ou administrativa da GLX Engenharia.",
};

export default function Careers() {
  return (
    <PageShell>
      <InteriorHero
        mobileTitle="Gente que gosta|de ver projetos|virarem obra."
        index="07"
        eyebrow="Trabalhe conosco"
        title="Procuramos gente que gosta de ver projeto virar obra."
        copy="A GLX recebe profissionais de engenharia, arquitetura, campo e áreas administrativas. Queremos conhecer quem trabalha com responsabilidade e não esconde problema."
        image="/media/project-18.webp"
      />
      <section className="career-intro section-dark">
        <div>
          <p className="kicker">Como é trabalhar aqui</p>
          <h2>O jeito de trabalhar importa tanto quanto o currículo.</h2>
        </div>
        <div>
          <p>
            Gostamos de quem pergunta antes de assumir, registra o que combinou
            e avisa cedo quando algo saiu do plano.
          </p>
          <div className="culture-list">
            <span>Planejar antes de executar</span>
            <span>Falar de forma direta e respeitosa</span>
            <span>Interromper o serviço quando houver risco</span>
            <span>Transformar aprendizado em rotina</span>
          </div>
        </div>
      </section>
      <section className="career-visual-section section-paper">
        <SectionHeading
          kicker="Arquitetura e engenharia"
          title="O desenho precisa funcionar na obra."
          copy="A equipe acompanha o caminho entre projeto, compatibilização e execução. Cada função participa das decisões que afetam o canteiro."
        />
        <div className="career-visual-grid">
          <Reveal className="career-visual career-visual-main">
            <Image
              src="/media/project-03.webp"
              alt="Profissional desenvolvendo um projeto arquitetônico sobre a prancheta"
              fill
              sizes="(max-width: 700px) 100vw, 66vw"
            />
            <span>Projeto e arquitetura</span>
          </Reveal>
          <Reveal className="career-visual">
            <Image
              src="/media/project-19.webp"
              alt="Detalhe de desenho técnico com medidas e instrumento de precisão"
              fill
              sizes="(max-width: 700px) 100vw, 34vw"
            />
            <span>Precisão técnica</span>
          </Reveal>
          <Reveal className="career-visual">
            <Image
              src="/media/luxury-residence-construction.webp"
              alt="Estrutura de uma residência de alto padrão em construção"
              fill
              sizes="(max-width: 700px) 100vw, 34vw"
            />
            <span>Engenharia em campo</span>
          </Reveal>
        </div>
      </section>
      <section className="career-form-section section-paper">
        <div className="career-form-heading">
          <p className="kicker">Trabalhe conosco</p>
          <h2>
            <BalancedText>Conte o que você sabe fazer.</BalancedText>
          </h2>
          <p>
            Envie seu currículo por e-mail para contato@glxengenharia.com.br ou
            converse com a equipe pelo WhatsApp. A equipe poderá considerar seu
            perfil em oportunidades atuais ou futuras.
          </p>
        </div>
        <ContactChannels
          email="contato@glxengenharia.com.br"
          subject="Trabalhe conosco"
        />
      </section>
    </PageShell>
  );
}
