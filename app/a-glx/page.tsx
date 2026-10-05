import type { Metadata } from 'next';
import Image from 'next/image';
import { Eye, Handshake, ShieldCheck, Target } from 'lucide-react';
import { BalancedText, BrandRail, FinalCta, Gallery, InteriorHero, PageShell, SectionHeading } from '../components/sections';
import { Reveal } from '../components/experience';

export const metadata: Metadata = { title: 'A GLX', description: 'Conheça a história, o método e os princípios da GLX Engenharia.' };

export default function About() {
  return (
    <PageShell>
      <InteriorHero index="02" eyebrow="A GLX" title="A obra não precisa tomar conta da sua vida." copy="Há mais de dez anos, a GLX cuida de projetos e construções em Assis e região. Planejamos, registramos e explicamos cada etapa para que o cliente não precise viver no canteiro." image="/media/project-04.jpg" />
      <section className="about-story section-paper"><Reveal className="story-title"><p className="kicker">Nossa história</p><h2>Mais de uma década cuidando de decisões que não podem ficar no improviso.</h2></Reveal><Reveal className="story-copy"><p>Na GLX, engenharia, gestão e execução operam sob uma mesma rotina. Projetistas, fornecedores e equipes de campo trabalham com diretrizes claras: o que fazer, quando fazer e quem precisa aprovar.</p><p>O resultado para o cliente é simples: um ponto único de contato, rastreabilidade completa das decisões e a informação necessária para escolher com segurança — nunca por suposição.</p></Reveal><div className="story-image"><Image src="/media/project-18.jpg" alt="Equipe de engenharia em atividade no canteiro" width={1600} height={1000} sizes="100vw" /></div></section>
      <section className="values-section section-dark"><SectionHeading dark kicker="Como trabalhamos" title="Quatro compromissos do dia a dia." /><div className="values-grid">{[[Target,'Critério técnico','Toda decisão é avaliada frente ao projeto, ao orçamento e à realidade do canteiro.'],[Eye,'Informação acessível','O cliente acompanha avanço, custos, riscos e decisões pendentes — sem intermediários.'],[Handshake,'Responsabilidade clara','Cada tarefa tem um responsável definido, e cada aprovação fica registrada.'],[ShieldCheck,'Segurança','Normas técnicas, documentação e conferências fazem parte da rotina — não são exceção.']].map(([Icon,title,text], index) => { const I = Icon as typeof Target; return <Reveal key={String(title)}><span>0{index+1}</span><I /><h3>{String(title)}</h3><p>{String(text)}</p></Reveal>; })}</div></section>
      <BrandRail theme="dark" />
      <section className="team-section section-paper"><div><p className="kicker">Clientes e parceiros</p><h2><BalancedText>Quem projeta conversa com quem está no canteiro.</BalancedText></h2><p>Engenheiros, técnicos, projetistas e fornecedores trabalham com as mesmas informações. Quando surge uma dúvida, ela chega a quem pode resolver.</p></div><div className="team-collage"><Image src="/media/project-03.jpg" alt="Planejamento técnico de engenharia" width={1000} height={900} sizes="(max-width: 1000px) 78vw, 40vw" /><Image src="/media/project-17.jpg" alt="Detalhe de arquitetura contemporânea" width={800} height={800} sizes="(max-width: 1000px) 64vw, 30vw" /><span>GLX<br/>TEAM</span></div></section>
      <Gallery compact />
      <FinalCta title="Veja como a GLX pode cuidar do seu projeto." />
    </PageShell>
  );
}
