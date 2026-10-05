import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, BarChart3, Camera, CircleCheck, MessageSquare, WalletCards } from 'lucide-react';
import { LeadButton, Reveal, TransitionLink } from './components/experience';
import { HeroMedia } from './components/hero-media';
import { BrandRail, FinalCta, Footer, Gallery, SectionHeading } from './components/sections';
import { ScrollManifesto } from './components/scroll-manifesto';
import { advantages, faqs, services } from './site-data';

export const metadata: Metadata = {
  title: 'Engenharia para construir sem viver no canteiro',
  description: 'A GLX cuida de projetos, equipes, compras, cronograma e fiscalização para você acompanhar a obra sem assumir a rotina do canteiro.',
  openGraph: {
    title: 'Quanto vale a sua paz? | GLX Engenharia',
    description: 'Você acompanha a obra, entende as decisões e continua vivendo enquanto a GLX cuida do canteiro.',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'GLX Engenharia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quanto vale a sua paz? | GLX Engenharia',
    description: 'Você acompanha a obra, entende as decisões e continua vivendo enquanto a GLX cuida do canteiro.',
    images: ['/og.jpg'],
  },
};

const partners = [
  { name: 'Mateus', role: 'Sócio e Diretor de Engenharia' },
  { name: 'Gabriel', role: 'Sócio e Diretor de Operações' },
  { name: 'Lukas', role: 'Sócio e Diretor de Novos Negócios' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <HeroMedia />
        <div className="hero-shade" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-index" aria-hidden="true"><span>01</span><i /><span>07</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Construção, gestão e projetos em Assis e região</p>
          <h1 id="hero-title"><span>Quanto vale</span><em>a sua paz?</em></h1>
          <h2 className="hero-subtitle">Tenha controle sobre cada etapa, sem precisar administrar cada problema.</h2>
          <div className="hero-bottom">
            <p>Da compatibilização dos projetos à entrega da obra, a GLX integra planejamento, equipes, fornecedores, compras, custos e cronograma em uma única gestão.</p>
            <LeadButton interest="Construir com tranquilidade" className="button hero-cta">Conversar sobre minha obra <ArrowRight /></LeadButton>
          </div>
        </div>
        <div className="hero-meta"><span>Assis · SP</span><span>Desde 2015</span></div>
      </section>

      <ScrollManifesto />

      <section className="services-section section-paper">
        <SectionHeading kicker="Como podemos entrar" title="Do projeto técnico à obra completa." copy="A GLX atua em diferentes etapas da construção: desenvolve os projetos necessários, estrutura e organiza obras ou assume a execução completa, do planejamento à entrega." />
        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return <Reveal className="service-card" key={service.href}><div className="service-number">{service.number}</div><div className="service-icon"><Icon /></div><div className="service-title"><h3>{service.title}</h3><p>{service.text}</p></div><Image src={service.image} alt="" width={640} height={420} sizes="320px" /><TransitionLink href={service.href} className="service-link" ariaLabel={`Conhecer ${service.title}`}><ArrowRight /></TransitionLink></Reveal>;
          })}
        </div>
      </section>

      <section className="numbers-section">
        <p className="kicker">Trabalho já realizado</p>
        <div className="numbers-grid"><Reveal><strong>+10</strong><span>anos de mercado</span></Reveal><Reveal><strong>+50</strong><span>obras executadas</span></Reveal><Reveal><strong>+200</strong><span>projetos entregues</span></Reveal></div>
      </section>

      <section className="control-section section-dark">
        <div className="control-copy"><p className="kicker">Acompanhamento da obra</p><h2>Você abre o celular e sabe exatamente onde a obra está.</h2><p>Fotos, equipes envolvidas, atividades em execução, informações, ocorrências e aprovações ficam organizadas em um só lugar, facilitando o acompanhamento de tudo o que acontece na obra diariamente.</p><LeadButton interest="Gestão de obras" className="button button-outline">Ver como funciona <ArrowRight /></LeadButton></div>
        <div className="dashboard-scene">
          <div className="phone-panel"><div className="phone-top"><Image src="/brand/glx-mark.svg" alt="" width={40} height={40} /><span>Obra Jardim Europa</span><i /></div><div className="progress-orbit"><strong>68<small>%</small></strong><span>Progresso geral</span></div><div className="phone-stats"><div><span>Prazo</span><strong>Em dia</strong></div><div><span>Orçamento</span><strong>92%</strong></div></div><div className="stage-list"><p><CircleCheck /> Fundação <b>100%</b></p><p><CircleCheck /> Estrutura <b>100%</b></p><p><span className="stage-dot" /> Alvenaria <b>64%</b></p></div></div>
          <div className="float-card card-one"><Camera /><span>12 novas fotos</span><small>Atualizado agora</small></div><div className="float-card card-two"><BarChart3 /><span>Cronograma</span><small>Semana 18 de 26</small></div>
        </div>
        <div className="control-features"><div><MessageSquare /><span>Comunicação direta</span></div><div><WalletCards /><span>Financeiro transparente</span></div><div><Camera /><span>Registro fotográfico</span></div></div>
      </section>

      <section className="advantages section-paper">
        <SectionHeading kicker="O que muda na prática" title="Você decide com informação, não por suposição." />
        <div className="advantages-grid">{advantages.map(({ icon: Icon, title, text }, index) => <Reveal key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </section>

      <BrandRail />
      <section className="founders-section section-dark" id="socios">
        <SectionHeading dark kicker="Quem responde pela GLX" title="Mateus, Gabriel e Lukas." copy="Os três sócios acompanham as decisões importantes de engenharia, operação e novos negócios." />
        <div className="founders-grid">
          {partners.map((partner, index) => (
            <Reveal className="founder-card" key={partner.name}>
              <div className="founder-photo">
                <Image src="/media/socios-placeholder.jpg" alt="Retrato fictício provisório para representação visual" width={800} height={1000} sizes="(max-width: 640px) 100vw, 33vw" />
                <span className="founder-index">0{index + 1}</span>
                <span className="founder-placeholder">Imagem provisória</span>
              </div>
              <div className="founder-meta"><h3>{partner.name}</h3><p>{partner.role}</p></div>
            </Reveal>
          ))}
        </div>
      </section>
      <Gallery />

      <section className="faq-section section-paper">
        <SectionHeading kicker="Perguntas frequentes" title="Dúvidas que aparecem antes da obra começar." />
        <div className="faq-list">{faqs.map(([question, answer], index) => <Reveal key={question}><details><summary><span>{String(index + 1).padStart(2, '0')}</span><h3>{question}</h3><i>+</i></summary><p>{answer}</p></details></Reveal>)}</div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  );
}
