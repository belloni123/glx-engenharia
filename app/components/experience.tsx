'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createContext, type FormEvent, type ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { navItems } from '../site-data';

const TRANSITION_NAVIGATION_DELAY = 860;
const TRANSITION_DURATION = 1780;

type LeadContextValue = { openLead: (interest?: string) => void };
const LeadContext = createContext<LeadContextValue>({ openLead: () => undefined });

export function useLead() { return useContext(LeadContext); }

export function LeadButton({ children, interest, className = 'button button-primary', ariaLabel }: { children: ReactNode; interest?: string; className?: string; ariaLabel?: string }) {
  const { openLead } = useLead();
  return <button type="button" className={className} onClick={() => openLead(interest)} aria-label={ariaLabel}>{children}</button>;
}

export function TransitionLink({ href, children, className = '', onClick, ariaLabel }: { href: string; children: ReactNode; className?: string; onClick?: () => void; ariaLabel?: string }) {
  const router = useRouter();
  const { startTransition } = usePageTransition();
  return (
    <Link href={href} className={className} aria-label={ariaLabel} onClick={(event) => { event.preventDefault(); onClick?.(); startTransition(() => router.push(href)); }}>
      {children}
    </Link>
  );
}

const TransitionContext = createContext({ startTransition: (navigate: () => void) => navigate() });
function usePageTransition() { return useContext(TransitionContext); }

function Header({ openMenu }: { openMenu: () => void }) {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);
  const contactActive = ['/orcamento', '/trabalhe-conosco', '/seja-parceiro'].includes(pathname);

  return (
    <header className="site-header">
      <TransitionLink className="brand" href="/" ariaLabel="GLX Engenharia, início">
        <Image src="/brand/glx-logo.svg" alt="GLX Engenharia" width={190} height={72} priority />
      </TransitionLink>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map((item) => <TransitionLink className={pathname === item.href ? 'active' : ''} key={item.href} href={item.href}>{item.label}</TransitionLink>)}
        <div
          className={`nav-dropdown ${contactOpen ? 'is-open' : ''} ${contactActive ? 'active' : ''}`}
          onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setContactOpen(false); }}
        >
          <button type="button" aria-expanded={contactOpen} aria-haspopup="true" onClick={() => setContactOpen((current) => !current)}>
            Contato <ChevronDown size={14} />
          </button>
          <div className="nav-dropdown-menu">
            <TransitionLink href="/orcamento">Fazer orçamento <ArrowRight /></TransitionLink>
            <TransitionLink href="/trabalhe-conosco">Trabalhe conosco <ArrowRight /></TransitionLink>
            <TransitionLink href="/seja-parceiro">Empresas parceiras <ArrowRight /></TransitionLink>
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <LeadButton interest="Iniciar projeto" className="header-cta">Falar com a GLX</LeadButton>
        <button className="menu-button" type="button" onClick={openMenu} aria-label="Abrir menu"><Menu size={20} strokeWidth={1.7} /></button>
      </div>
    </header>
  );
}

function MenuOverlay({ open, close }: { open: boolean; close: () => void }) {
  const primaryItems = [{ href: '/', label: 'Início' }, ...navItems];
  const contactItems = [
    { href: '/orcamento', label: 'Fazer orçamento' },
    { href: '/trabalhe-conosco', label: 'Trabalhe conosco' },
    { href: '/seja-parceiro', label: 'Empresas parceiras' },
  ];

  return (
    <div className={`menu-overlay ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="menu-top"><Image src="/brand/glx-logo.svg" alt="GLX Engenharia" width={190} height={72} /><button type="button" onClick={close} aria-label="Fechar menu"><X /></button></div>
      <nav aria-label="Menu completo">
        {primaryItems.map((item, index) => (
          <TransitionLink key={item.href} href={item.href} onClick={close}><span>0{index + 1}</span>{item.label}<ArrowRight /></TransitionLink>
        ))}
        <details className="menu-contact-group" open>
          <summary><span>07</span>Contato<ChevronDown /></summary>
          <div>
            {contactItems.map((item) => <TransitionLink key={item.href} href={item.href} onClick={close}>{item.label}<ArrowRight /></TransitionLink>)}
          </div>
        </details>
      </nav>
      <div className="menu-footer"><span>Assis · SP</span><a href="https://www.instagram.com/glxengenharia" target="_blank" rel="noreferrer">Instagram</a></div>
    </div>
  );
}

function LeadModal({ open, interest, close }: { open: boolean; interest: string; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal();
    if (!open && dialog.current?.open) dialog.current.close();
  }, [open]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await response.json() as { error?: string; whatsappUrl: string };
      if (!response.ok) throw new Error(data.error || 'Não foi possível enviar.');
      setStatus('done');
      window.open(data.whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch { setStatus('error'); }
  }

  return (
    <dialog ref={dialog} className="lead-dialog" onCancel={(event) => { event.preventDefault(); close(); }} onClose={close}>
      <button className="dialog-close" type="button" onClick={close} aria-label="Fechar formulário"><X /></button>
      <p className="kicker">Primeiro contato</p>
      <h2>Quatro dados e seguimos pelo WhatsApp.</h2>
      <form onSubmit={submit}>
        <label>Nome completo<input name="name" autoComplete="name" required placeholder="Seu nome" /></label>
        <div className="form-row">
          <label>Telefone<input name="phone" autoComplete="tel" inputMode="tel" required placeholder="(18) 99999-9999" /></label>
          <label>Cidade<input name="city" autoComplete="address-level2" required placeholder="Sua cidade" /></label>
        </div>
        <label>Interesse<div className="select-wrap"><select name="interest" defaultValue={interest || 'Iniciar projeto'} required><option>Iniciar projeto</option><option>Construir com tranquilidade</option><option>Construtora, execução completa</option><option>Gestão de obras</option><option>Engenharia e projetos</option><option>Reforma e ampliação</option><option>Projeto para investimento</option><option>Outro assunto</option></select><ChevronDown /></div></label>
        <label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>Autorizo o contato da GLX e o tratamento dos meus dados para esta solicitação, conforme a <a href="/privacidade">Política de Privacidade</a>.</span></label>
        <button className="button button-primary button-wide" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Preparando conversa…' : 'Continuar no WhatsApp'}<ArrowRight /></button>
        {status === 'done' && <p className="form-success"><Check size={16} /> Dados preparados. O WhatsApp foi aberto.</p>}
        {status === 'error' && <p className="form-error">Não conseguimos preparar o contato agora. Tente novamente ou ligue para (18) 99728-9448.</p>}
      </form>
    </dialog>
  );
}

export function Experience({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadInstance, setLeadInstance] = useState(0);
  const [interest, setInterest] = useState('Iniciar projeto');
  const [transitioning, setTransitioning] = useState(false);
  const transitionLock = useRef(false);
  const transitionTimers = useRef<number[]>([]);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMenu(false);
      window.scrollTo(0, 0);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>('.custom-cursor');
    const move = (event: MouseEvent) => { if (cursor) { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; } };
    window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move);
  }, []);
  useEffect(() => () => {
    transitionTimers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const startTransition = (navigate: () => void) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { navigate(); return; }
    if (transitionLock.current) return;
    transitionLock.current = true;
    setTransitioning(true);
    transitionTimers.current.push(window.setTimeout(navigate, TRANSITION_NAVIGATION_DELAY));
    transitionTimers.current.push(window.setTimeout(() => {
      setTransitioning(false);
      transitionLock.current = false;
      transitionTimers.current = [];
    }, TRANSITION_DURATION));
  };
  const openLead = (value = 'Iniciar projeto') => { setInterest(value); setLeadInstance((current) => current + 1); setLeadOpen(true); };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      <LeadContext.Provider value={{ openLead }}>
        <div className="brand-intro" aria-hidden="true"><div className="intro-blueprint"><i /><i /><i /><i /><div className="intro-mark"><Image className="intro-mark-left" src="/brand/glx-mark.svg" alt="" width={220} height={220} priority /><Image className="intro-mark-right" src="/brand/glx-mark.svg" alt="" width={220} height={220} priority /></div></div></div>
        <div className={`page-wipe ${transitioning ? 'is-moving' : ''}`} aria-hidden="true"><span>GLX</span></div>
        <div className="custom-cursor" aria-hidden="true" />
        <Header openMenu={() => setMenu(true)} />
        <MenuOverlay open={menu} close={() => setMenu(false)} />
        {children}
        <LeadModal key={leadInstance} open={leadOpen} interest={interest} close={() => setLeadOpen(false)} />
      </LeadContext.Provider>
    </TransitionContext.Provider>
  );
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current; if (!element) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { element.classList.add('in-view'); observer.disconnect(); } }, { threshold: .14 });
    observer.observe(element); return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
