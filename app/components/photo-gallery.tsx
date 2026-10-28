"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Photo = { src: string; alt: string };

export function PhotoGallery({ images }: { images: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const swipeStart = useRef<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const photo = selected === null ? null : images[selected];

  useEffect(() => {
    if (selected === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);

  function move(direction: number) {
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + images.length) % images.length,
    );
  }

  return (
    <section
      className="gallery-section"
      aria-label="Galeria de obras e ambientes"
    >
      <div className="photo-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className="photo-tile"
            key={image.src}
            aria-label={`Ampliar foto: ${image.alt}`}
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setSelected(index);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
            />
            <span className="photo-expand" aria-hidden="true">
              <Plus />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label="Visualização ampliada da galeria"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onClose={() => {
          setSelected(null);
          trigger.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        {photo && (
          <div className="photo-viewer">
            <div className="photo-toolbar">
              <a href={photo.src} target="_blank" rel="noreferrer">
                Ver em tamanho real <Expand size={16} />
              </a>
              <button
                type="button"
                autoFocus
                onClick={() => dialog.current?.close()}
                aria-label="Fechar imagem"
              >
                <X />
              </button>
            </div>
            <div
              className="photo-stage"
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
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                sizes="95vw"
              />
            </div>
            <div className="photo-controls">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Imagem anterior"
              >
                <ArrowLeft />
              </button>
              <span aria-live="polite">
                {selected! + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Próxima imagem"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
