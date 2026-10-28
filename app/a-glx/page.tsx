import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Handshake, ShieldCheck, Target } from "lucide-react";
import {
  BalancedText,
  BrandRail,
  FinalCta,
  Gallery,
  InteriorHero,
  PageShell,
  SectionHeading,
} from "../components/sections";
import { Reveal } from "../components/experience";

export const metadata: Metadata = {
  title: "A GLX",
  description:
    "Conheça a história, o método e os princípios da GLX Engenharia.",
};

export default function About() {
  return (
    <PageShell>
      <InteriorHero
        mobileTitle="A obra não precisa|tomar conta|da sua vida."
        index="02"
        eyebrow="A GLX"
        title="A obra não precisa tomar conta da sua vida."
        copy="Há mais de dez anos, a GLX cuida de projetos e construções em Assis e região. Planejamos, registramos e explicamos cada etapa para que o cliente não precise viver no canteiro."
        image="/media/refresh/athia-4.webp"
      />
      <section className="about-story section-paper">
        <Reveal className="story-title">
          <p className="kicker">Nossa história</p>
          <h2>
            Mais de uma década cuidando de decisões que não podem ficar no
            improviso.
          </h2>
        </Reveal>
        <Reveal className="story-copy">
          <p>
            Na GLX, engenharia, gestão e execução operam sob uma mesma rotina.
            Projetistas, fornecedores e equipes de campo trabalham com
            diretrizes claras: o que fazer, quando fazer e quem precisa aprovar.
          </p>
          <p>
            O resultado para o cliente é simples: um ponto único de contato,
            rastreabilidade completa das decisões e a informação necessária para
            escolher com segurança — nunca por suposição.
          </p>
        </Reveal>
        <div className="story-image">
          <Image
            src="/media/refresh/provence-1.webp"
            alt="Residência contemporânea com piscina e paisagismo integrado"
            width={1600}
            height={1000}
            sizes="100vw"
          />
        </div>
      </section>
      <section className="values-section section-dark">
        <SectionHeading
          dark
          kicker="Como trabalhamos"
          title="Quatro compromissos do dia a dia."
        />
        <div className="values-grid values-visual-grid">
          {[
            [
              Target,
              "Critério técnico",
              "Toda decisão é avaliada frente ao projeto, ao orçamento e à realidade do canteiro.",
            ],
            [
              Eye,
              "Informação acessível",
              "O cliente acompanha avanço, custos, riscos e decisões pendentes — sem intermediários.",
            ],
            [
              Handshake,
              "Responsabilidade clara",
              "Cada tarefa tem um responsável definido, e cada aprovação fica registrada.",
            ],
            [
              ShieldCheck,
              "Segurança",
              "Normas técnicas, documentação e conferências fazem parte da rotina — não são exceção.",
            ],
          ].map(([Icon, title, text], index) => {
            const I = Icon as typeof Target;
            return (
              <Reveal key={String(title)}>
                <Image
                  src={`/media/refresh/ai-value-${["technical", "information", "responsibility", "safety"][index]}-v2.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className="value-shade" />
                <span>0{index + 1}</span>
                <I />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </Reveal>
            );
          })}
        </div>
      </section>
      <BrandRail theme="dark" />
      <section className="team-section team-portraits-section section-paper">
        <div>
          <p className="kicker">Nossa equipe</p>
          <h2>
            <BalancedText>
              Quem projeta conversa com quem está no canteiro.
            </BalancedText>
          </h2>
          <p>
            Engenheiros, técnicos, projetistas e fornecedores trabalham com as
            mesmas informações. Quando surge uma dúvida, ela chega a quem pode
            resolver.
          </p>
        </div>
        <div className="team-portraits">
          {[
            { name: "Gabri", image: "gabri" },
            { name: "Matheus", image: "matheus" },
            { name: "Lukas", image: "lukas" },
          ].map((person) => (
            <figure key={person.image}>
              <div className="team-portrait">
                <Image
                  src={`/media/equipe/${person.image}.webp`}
                  alt={person.name + ", equipe GLX Engenharia"}
                  width={1000}
                  height={1500}
                  sizes="(max-width: 700px) 90vw, (max-width: 1000px) 30vw, 27vw"
                />
              </div>
              <figcaption>{person.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <Gallery />
      <FinalCta title="Veja como a GLX pode cuidar do seu projeto." />
    </PageShell>
  );
}
