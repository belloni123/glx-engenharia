import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { LeadButton, Reveal } from './experience';
import { BalancedText, FinalCta, InteriorHero, PageShell, SectionHeading } from './sections';

type ServiceData = {
  eyebrow: string; title: string; intro: string; image: string; interest: string;
  introTitle?: string; introCopy?: string;
  scopeImage: string; stepImages: string[];
  steps: string[][]; outcomes: string[];
};

export function ServicePage({ data, index }: { data: ServiceData; index: string }) {
  return (
    <PageShell>
      <InteriorHero index={index} eyebrow={data.eyebrow} title={data.title} copy={data.intro} image={data.image} />
      <section className="service-intro section-paper">
        <Reveal><p className="kicker">O que a GLX assume</p><h2><BalancedText>{data.introTitle ?? 'Cada etapa tem responsável, prazo e registro.'}</BalancedText></h2></Reveal>
        <Reveal><p>{data.introCopy ?? 'Antes do trabalho começar, a equipe define o que está incluído, quem responde por cada frente e como as decisões serão apresentadas. Isso evita que tarefas importantes fiquem sem dono.'}</p><LeadButton interest={data.interest} className="button button-primary">Conversar sobre este serviço <ArrowRight /></LeadButton></Reveal>
      </section>
      <section className="process-section section-dark">
        <SectionHeading dark kicker="Como o trabalho avança" title="Quatro etapas que organizam a entrega." />
        <div className="process-grid process-visual-grid">{data.steps.map(([number, title, text], step) => <Reveal key={number}><Image src={`/media/refresh/ai-${data.stepImages[step]}-v2.webp`} alt="" fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /><div className="process-shade" /><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </section>
      <section className="outcomes-section section-paper">
        <div className="outcomes-photo"><Image src={data.scopeImage} alt={data.eyebrow === 'Gestão de obras' ? 'Concretagem de uma obra em andamento' : 'Ilustração de atividade técnica produzida com IA'} fill sizes="(max-width: 1000px) 100vw, 55vw" /></div>
        <div className="outcomes-copy"><p className="kicker">Escopo</p><h2><BalancedText>Este serviço pode incluir</BalancedText></h2><div>{data.outcomes.map(item => <p key={item}><Check />{item}</p>)}</div><LeadButton interest={data.interest} className="text-button">Solicitar análise do projeto <ArrowRight /></LeadButton></div>
      </section>
      <FinalCta interest={data.interest} title="Quer saber se este serviço faz sentido para sua obra?" />
    </PageShell>
  );
}
