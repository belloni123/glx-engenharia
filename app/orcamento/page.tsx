import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/experience";
import { ContactChannels } from "../components/contact-channels";
import { InteriorHero, PageShell } from "../components/sections";

export const metadata: Metadata = {
  title: "Solicite um orçamento",
  description:
    "Conte seu projeto e receba uma orientação inicial da equipe GLX.",
};

export default function Budget() {
  return (
    <PageShell>
      <InteriorHero
        mobileTitle="Seu orçamento|começa com uma|conversa clara."
        index="06"
        eyebrow="Orçamento"
        title="Seu orçamento começa com uma conversa clara."
        copy="Uma casa nova, uma reforma, um projeto técnico ou uma obra que já começou pedem perguntas diferentes. Conte o cenário e a equipe indica o próximo passo."
        image="/media/project-14.webp"
      />
      <section className="budget-section section-paper">
        <Reveal>
          <p className="kicker">Primeira conversa</p>
          <h2>Você não precisa chegar com tudo resolvido.</h2>
          <p>
            Objetivo, cidade, tipo de obra e estágio atual já ajudam a equipe a
            entender quem deve participar da conversa e quais informações pedir
            em seguida.
          </p>
          <div className="budget-checks">
            <span>
              <CheckCircle2 /> Atendimento pela equipe GLX
            </span>
            <span>
              <CheckCircle2 /> Conversa inicial sem custo
            </span>
            <span>
              <CheckCircle2 /> Continuidade pelo WhatsApp
            </span>
          </div>
        </Reveal>
        <Reveal className="budget-card">
          <span>01</span>
          <h3>Fale com o comercial</h3>
          <p>
            Escolha WhatsApp, e-mail ou telefone para contar sobre seu projeto e
            combinar os próximos passos.
          </p>
          <ContactChannels
            email="lukas@glxengenharia.com.br"
            subject="Solicitar orçamento"
          />
        </Reveal>
      </section>
    </PageShell>
  );
}
