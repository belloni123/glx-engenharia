'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { portfolioCases, type PortfolioCase } from './portfolio-data';
import { caseExcerpt } from './portfolio-excerpt';

export function PortfolioGrid() {
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  const swipeStart = useRef<number | null>(null);
  const [selected, setSelected] = useState<PortfolioCase | null>(null);
  const [slide, setSlide] = useState(0);
  const [filter, setFilter] = useState('Todos');
  const visible = portfolioCases.filter(item => filter === 'Todos' || item.category === filter);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [selected]);

  function move(direction: number) {
    if (selected) setSlide(current => (current + direction + selected.images.length) % selected.images.length);
  }

  function open(item: PortfolioCase, button: HTMLButtonElement) {
    returnFocus.current = button;
    setSelected(item);
    setSlide(0);
    dialog.current?.showModal();
  }

  function close() { dialog.current?.close(); }
  function afterClose() {
    setSelected(null);
    returnFocus.current?.focus();
  }

  return <section className="portfolio-section section-paper" id="cases">
    <div className="portfolio-toolbar"><p>Filtre por categoria</p><div role="group" aria-label="Filtrar trabalhos por serviço">{['Todos', 'Construtora', 'Gestão de obras', 'Engenharia'].map(category => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}</div></div>
    <div className="portfolio-grid">{visible.map(item => <article className="portfolio-card" key={item.slug}>
      <button type="button" className="portfolio-cover" onClick={event => open(item, event.currentTarget)} aria-label={`Ver case ${item.title}`}>
        <Image src={item.images[0].src} alt={item.images[0].alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span className="portfolio-open"><Plus aria-hidden="true" /><span>Ver trabalho</span></span>
      </button>
      <div className="portfolio-card-heading"><h2>{item.title}</h2><span className="portfolio-tag">{item.category}</span></div>
      <p className="portfolio-excerpt">{caseExcerpt(item.description)}</p>
    </article>)}</div>
    <p className="portfolio-editorial-note">Descrições e categorias em revisão editorial. Fotografias do acervo fornecido à GLX.</p>
    <dialog ref={dialog} className="portfolio-dialog" aria-labelledby="case-title" onClose={afterClose} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }}>
      {selected && <div className="case-content">
        <button className="case-close" type="button" onClick={close} aria-label="Fechar case" autoFocus><X /></button>
        <div className="case-photo" onTouchStart={event => { swipeStart.current = event.touches[0].clientX; }} onTouchEnd={event => { if (swipeStart.current === null) return; const distance = event.changedTouches[0].clientX - swipeStart.current; if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1); swipeStart.current = null; }}>
          <Image src={selected.images[slide].src} alt={selected.images[slide].alt} fill sizes="(max-width: 700px) 100vw, 85vw" />
          {selected.images.length > 1 && <div className="case-controls"><button type="button" onClick={() => move(-1)} aria-label="Foto anterior"><ArrowLeft /></button><span aria-live="polite">{slide + 1} / {selected.images.length}</span><button type="button" onClick={() => move(1)} aria-label="Próxima foto"><ArrowRight /></button></div>}
        </div>
        <div className="case-details"><span className="portfolio-tag">{selected.category}</span><h2 id="case-title">{selected.title}</h2><p>{selected.description}</p></div>
      </div>}
    </dialog>
  </section>;
}
