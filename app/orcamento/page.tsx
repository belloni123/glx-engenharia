import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LeadButton, Reveal } from '../components/experience';
import { InteriorHero, PageShell } from '../components/sections';

export const metadata: Metadata = { title: 'Solicite um orçamento', description: 'Conte seu projeto e receba uma orientação inicial da equipe GLX.' };

export default function Budget() {
  return <PageShell><InteriorHero index="06" eyebrow="Orçamento" title="Seu orçamento começa com uma conversa clara." copy="Uma casa nova, uma reforma, um projeto técnico ou uma obra que já começou pedem perguntas diferentes. Conte o cenário e a equipe indica o próximo passo." image="/media/project-14.jpg" />
    <section className="budget-section section-paper"><Reveal><p className="kicker">Primeira conversa</p><h2>Você não precisa chegar com tudo resolvido.</h2><p>Objetivo, cidade, tipo de obra e estágio atual já ajudam a equipe a entender quem deve participar da conversa e quais informações pedir em seguida.</p><div className="budget-checks"><span><CheckCircle2 /> Atendimento pela equipe GLX</span><span><CheckCircle2 /> Conversa inicial sem custo</span><span><CheckCircle2 /> Continuidade pelo WhatsApp</span></div></Reveal><Reveal className="budget-card"><span>01</span><h3>Comece pelos dados essenciais</h3><p>Informe nome, telefone, cidade e interesse. Depois do envio, o WhatsApp abre com a mensagem pronta para continuar o atendimento.</p><LeadButton interest="Solicitar orçamento" className="button button-primary button-wide">Contar sobre meu projeto <ArrowRight /></LeadButton><small>Os dados também podem ser enviados ao CRM da GLX para organizar o atendimento.</small></Reveal></section>
  </PageShell>;
}
