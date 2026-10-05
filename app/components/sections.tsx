import Image from 'next/image';
import { Fragment } from 'react';
import { ArrowRight, AtSign, Mail, MapPin, Phone } from 'lucide-react';
import { brands, gallery } from '../site-data';
import { LeadButton, Reveal, TransitionLink } from './experience';

export function BalancedText({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);
  if (words.length < 3) return <>{children}</>;

  const groups: string[] = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const cleanWord = word.replace(/[^A-Za-zÀ-ÿ]/g, '');
    if (cleanWord.length <= 3 && index < words.length - 1) {
      groups.push(`${word} ${words[index + 1]}`);
      index += 1;
    } else {
      groups.push(word);
    }
  }

  const lastGroup = groups.at(-1);
  if (groups.length > 1 && lastGroup && !lastGroup.includes(' ')) {
    groups.splice(-2, 2, `${groups.at(-2)} ${lastGroup}`);
  }

  return <>{groups.map((group, index) => <Fragment key={`${group}-${index}`}>{index > 0 ? ' ' : ''}{group.includes(' ') ? <span className="keep-tail">{group}</span> : group}</Fragment>)}</>;
}

export function SectionHeading({ kicker, title, copy, dark = false }: { kicker: string; title: string; copy?: string; dark?: boolean }) {
  return <Reveal className={`section-heading ${dark ? 'on-dark' : ''}`}><p className="kicker">{kicker}</p><div><h2><BalancedText>{title}</BalancedText></h2>{copy && <p>{copy}</p>}</div></Reveal>;
}

export function BrandRail({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  return <section className={`brand-rail ${theme}`} aria-label="Marcas conhecidas do setor"><p>Marcas presentes no mercado da construção</p><div className="marquee"><div>{[...brands, ...brands].map((brand, index) => <span key={`${brand}-${index}`}>{brand}</span>)}</div></div></section>;
}

export function Gallery({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`gallery-section ${compact ? 'compact' : ''}`}>
      <SectionHeading kicker="Referências visuais" title="Obra, arquitetura e acabamento." copy="Uma leitura de materiais, proporções, estrutura e detalhes que fazem parte do universo da construção." />
      <div className="gallery-grid">
        {gallery.map((item, index) => <Reveal className={`gallery-item item-${(index % 7) + 1}`} key={item.src}><Image src={item.src} alt={item.alt} width={1400} height={1000} sizes="(max-width: 640px) 100vw, 50vw" /><div><span>{String(index + 1).padStart(2, '0')}</span><p>{item.label}</p></div></Reveal>)}
      </div>
    </section>
  );
}

export function FinalCta({ title = 'Conte o momento da sua obra.', interest = 'Iniciar projeto' }: { title?: string; interest?: string }) {
  return (
    <section className="final-cta" id="contato">
      <div className="final-cta-grid" aria-hidden="true" />
      <p className="kicker">Próximo passo</p>
      <h2><BalancedText>{title}</BalancedText></h2>
      <div><p>O ponto de partida pode ser um terreno ou um projeto já desenvolvido. É a partir dessa conversa inicial que definimos o caminho.</p><LeadButton interest={interest} className="button button-light">Falar sobre meu projeto <ArrowRight /></LeadButton></div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><Image src="/brand/glx-logo.svg" alt="GLX Engenharia" width={300} height={115} /><p>Projetos, gestão e execução acompanhados por uma equipe que responde pela obra.</p></div>
      <div className="footer-links"><div><p>Navegue</p><TransitionLink href="/a-glx">A GLX</TransitionLink><TransitionLink href="/construtora">Construtora</TransitionLink><TransitionLink href="/gestao-de-obras">Gestão de obras</TransitionLink><TransitionLink href="/engenharia">Engenharia</TransitionLink><TransitionLink href="/orcamento">Fazer orçamento</TransitionLink><TransitionLink href="/seja-parceiro">Empresas parceiras</TransitionLink></div><div><p>Conecte</p><a href="https://www.instagram.com/glxengenharia" target="_blank" rel="noreferrer"><AtSign /> Instagram</a><a href="tel:+5518997289448"><Phone /> (18) 99728-9448</a><a href="mailto:contato@glxengenharia.com.br"><Mail /> E-mail</a></div><div><p>Visite</p><a href="https://maps.google.com/?q=Rua+José+Nogueira+Marmontel,+415,+Centro,+Assis,+SP" target="_blank" rel="noreferrer"><MapPin /> Rua José Nogueira Marmontel, 415<br />Centro, Assis/SP</a></div></div>
      <div className="footer-bottom"><span>© 2026 GLX Engenharia®. CREA SP - 2305013</span><div><TransitionLink href="/privacidade">Privacidade</TransitionLink><TransitionLink href="/termos">Termos de uso</TransitionLink><TransitionLink href="/trabalhe-conosco">Trabalhe conosco</TransitionLink><TransitionLink href="/seja-parceiro">Seja parceiro</TransitionLink></div></div>
      <div className="footer-credit">Produzido por <a href="https://wa.me/5518996134821?text=Ol%C3%A1%2C%20Felipe.%20Vim%20pelo%20site%20da%20GLX." target="_blank" rel="noreferrer">Felipe Belloni</a></div>
    </footer>
  );
}

export function InteriorHero({ index, eyebrow, title, copy, image }: { index: string; eyebrow: string; title: string; copy: string; image: string }) {
  return (
    <section className="interior-hero">
      <Image className="interior-hero-image" src={image} alt="" fill priority sizes="100vw" />
      <div className="interior-hero-shade" />
      <div className="interior-index"><span>{index}</span><i /></div>
      <div className="interior-copy"><p className="eyebrow"><span />{eyebrow}</p><h1><BalancedText>{title}</BalancedText></h1><p className="interior-intro">{copy}</p></div>
      <span className="scroll-note">Explore ↓</span>
    </section>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) { return <main>{children}<Footer /></main>; }
