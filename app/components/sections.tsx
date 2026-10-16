import Image from 'next/image';
import { Fragment } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { brands, gallery } from '../site-data';
import { LeadButton, Reveal, TransitionLink } from './experience';
import { PhotoGallery } from './photo-gallery';

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
  return <section className={`brand-rail ${theme}`} aria-label="Clientes atendidos pela GLX"><p>Empresas que fazem parte da nossa história</p><div className="marquee"><div>{[0, 1].map((copy) => <div className="brand-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{brands.map((brand) => <div className="client-logo" key={brand.src}><Image src={brand.src} alt={copy === 0 ? brand.alt : ''} width={220} height={100} sizes="180px" /></div>)}</div>)}</div></div></section>;
}

export function Gallery() {
  return <PhotoGallery images={gallery} />;
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
      <div className="footer-links"><div><p>Navegue</p><TransitionLink href="/a-glx">A GLX</TransitionLink><TransitionLink href="/construtora">Construtora</TransitionLink><TransitionLink href="/gestao-de-obras">Gestão de obras</TransitionLink><TransitionLink href="/engenharia">Engenharia</TransitionLink><TransitionLink href="/portfolio">Portfólio</TransitionLink><TransitionLink href="/orcamento">Fazer orçamento</TransitionLink><TransitionLink href="/seja-parceiro">Empresas parceiras</TransitionLink></div><div><p>Contato</p><a href="https://www.instagram.com/glxengenharia" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" stroke="none"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg> Instagram</a><a href="tel:+5518997289448"><Phone /> (18) 99728-9448</a><a href="mailto:contato@glxengenharia.com.br"><Mail /> E-mail</a></div><div><p>Visite</p><a href="https://maps.google.com/?q=Rua+José+Nogueira+Marmontel,+415,+Centro,+Assis,+SP" target="_blank" rel="noreferrer"><MapPin /> Rua José Nogueira Marmontel, 415<br />Centro, Assis/SP</a></div></div>
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
