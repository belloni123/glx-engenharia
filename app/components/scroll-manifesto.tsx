'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const manifestoWords = [
  'O', 'que', 'foi', 'feito,', 'quanto', 'foi', 'gasto', 'e', 'o', 'que',
  'vem', 'agora.', 'Tudo', 'precisa', 'estar', 'claro.',
];

export function ScrollManifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = Array.from(section.querySelectorAll<HTMLElement>('.manifesto-word'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      const sequence = Math.min(1, Math.max(0, (progress - 0.04) / 0.7));

      words.forEach((word, index) => {
        const local = reduceMotion
          ? 1
          : Math.min(1, Math.max(0, sequence * (words.length + 5) - index) / 5);
        const eased = 1 - Math.pow(1 - local, 3);
        word.style.opacity = String(0.1 + eased * 0.9);
        word.style.filter = `blur(${(1 - eased) * 9}px)`;
        word.style.transform = `translate3d(0, ${(1 - eased) * 28}px, 0) scale(${0.975 + eased * 0.025})`;
      });

      const photoProgress = reduceMotion ? 1 : Math.min(1, Math.max(0, (progress - 0.1) / 0.62));
      const photoReveal = 1 - Math.pow(1 - photoProgress, 3);
      section.style.setProperty('--manifesto-progress', progress.toFixed(4));
      section.style.setProperty('--manifesto-photo', photoReveal.toFixed(4));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section ref={sectionRef} className="manifesto section-dark" aria-label="O método GLX">
      <div className="manifesto-sticky">
        <div className="manifesto-grid" aria-hidden="true" />
        <div className="manifesto-label"><span>O método GLX</span><i><b /></i><small>Role para revelar</small></div>
        <div className="manifesto-copy">
          <p>Você não deveria precisar adivinhar.</p>
          <h2 aria-label={manifestoWords.join(' ')}>
            {manifestoWords.slice(0, -2).map((word, index) => (
              <span className="manifesto-word" aria-hidden="true" key={`${word}-${index}`}>{word}</span>
            ))}
            <span className="manifesto-tail keep-tail" aria-hidden="true">
              {manifestoWords.slice(-2).map((word, index) => (
                <span className="manifesto-word" key={`${word}-tail-${index}`}>{word}</span>
              ))}
            </span>
          </h2>
        </div>
        <div className="manifesto-photo" aria-hidden="true">
          <Image src="/media/refresh/site-23.webp" alt="Estrutura metálica de uma construção em andamento" fill sizes="(max-width: 640px) 100vw, 70vw" />
        </div>
        <div className="manifesto-counter" aria-hidden="true"><span>01</span><i /><span>02</span></div>
      </div>
    </section>
  );
}
