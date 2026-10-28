"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Images,
  Ruler,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { portfolioCases, type PortfolioCase } from "./portfolio-data";

export function PortfolioGrid() {
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLButtonElement | null>(null);
  const swipeStart = useRef<number | null>(null);
  const [selected, setSelected] = useState<PortfolioCase | null>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (!selected) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  function move(direction: number) {
    if (selected)
      setSlide(
        (current) =>
          (current + direction + selected.images.length) %
          selected.images.length,
      );
  }

  function open(item: PortfolioCase, button: HTMLButtonElement) {
    returnFocus.current = button;
    setSelected(item);
    setSlide(0);
    dialog.current?.showModal();
  }

  function close() {
    dialog.current?.close();
  }
  function afterClose() {
    setSelected(null);
    returnFocus.current?.focus();
  }

  return (
    <section className="portfolio-section section-paper" id="cases">
      <div className="portfolio-grid">
        {portfolioCases.map((item) => (
          <article className="portfolio-card" key={item.slug}>
            <button
              type="button"
              className="portfolio-cover"
              onClick={(event) => open(item, event.currentTarget)}
              aria-label={`Ver projeto ${item.title}, ${item.subtitle}`}
            >
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <span className="portfolio-photo-count">
                <Images aria-hidden="true" />
                {item.images.length} fotos
              </span>
            </button>
            <div className="portfolio-card-body">
              <div className="portfolio-card-heading">
                <h2>
                  <button
                    type="button"
                    onClick={(event) => open(item, event.currentTarget)}
                  >
                    {item.title}
                  </button>
                </h2>
              </div>
              <p className="portfolio-subtitle">{item.subtitle}</p>
              <ProjectFacts item={item} />
              <button
                type="button"
                className="portfolio-action"
                onClick={(event) => open(item, event.currentTarget)}
                aria-label={`Explorar projeto ${item.title}, ${item.subtitle}`}
              >
                <span>Explorar projeto</span>
                <span className="portfolio-action-icon">
                  <ArrowRight aria-hidden="true" />
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="portfolio-dialog"
        aria-labelledby="case-title"
        onClose={afterClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
      >
        {selected && (
          <>
            <div className="case-topbar">
              <span>Projeto GLX</span>
              <button
                className="case-close"
                type="button"
                onClick={close}
                aria-label="Fechar projeto"
                autoFocus
              >
                <X />
              </button>
            </div>
            <div className="case-content">
              <div
                className="case-photo"
                onTouchStart={(event) => {
                  swipeStart.current = event.touches[0].clientX;
                }}
                onTouchEnd={(event) => {
                  if (swipeStart.current === null) return;
                  const distance =
                    event.changedTouches[0].clientX - swipeStart.current;
                  if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                  swipeStart.current = null;
                }}
              >
                <Image
                  src={selected.images[slide].src}
                  alt={selected.images[slide].alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 85vw"
                />
                {selected.images.length > 1 && (
                  <div className="case-controls">
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      aria-label="Foto anterior"
                    >
                      <ArrowLeft />
                    </button>
                    <span aria-live="polite">
                      {slide + 1} / {selected.images.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => move(1)}
                      aria-label="Próxima foto"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                )}
              </div>
              <div className="case-details">
                <h2 id="case-title">{selected.title}</h2>
                <p className="case-subtitle">{selected.subtitle}</p>
                <ProjectFacts item={selected} />
                {selected.development && (
                  <p>
                    <strong>Empreendimento:</strong> {selected.development}
                  </p>
                )}
                <div className="case-narrative">
                  {selected.content.map((block, index) => {
                    const content = block.spans.map((span, run) =>
                      span.bold ? (
                        <strong key={run}>{span.text}</strong>
                      ) : (
                        <span key={run}>{span.text}</span>
                      ),
                    );
                    return block.type === "heading" ? (
                      <h3 key={index}>{content}</h3>
                    ) : (
                      <p key={index}>{content}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}

function ProjectFacts({ item }: { item: PortfolioCase }) {
  return (
    <dl className="project-facts">
      {item.area && (
        <div>
          <dt>
            <Ruler aria-hidden="true" />
            <strong>{item.area.label}:</strong>
          </dt>
          <dd>{item.area.value}</dd>
        </div>
      )}
      <div>
        <dt>
          <ClipboardList aria-hidden="true" />
          <strong>Modalidade:</strong>
        </dt>
        <dd>{item.modality}</dd>
      </div>
    </dl>
  );
}
