"use client";

import { useEffect, useRef } from "react";

type HeroMediaProps = {
  src?: string;
  mobileSrc?: string;
  poster?: string;
  interior?: boolean;
};

export function HeroMedia({
  src = "/media/hero-ioa-seedance-v3.mp4",
  mobileSrc = "/media/hero-ioa-mobile.mp4",
  poster = "/media/hero-ioa-seedance-v3.webp",
  interior = false,
}: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    let visible = true;

    function syncPlayback() {
      if (!video) return;
      if (
        reducedMotion.matches ||
        connection?.saveData ||
        document.hidden ||
        !visible
      ) {
        video.pause();
        return;
      }
      // Adiar o download em movimento reduzido e economia de dados.
      if (!video.getAttribute("src")) {
        video.src =
          mobileSrc && window.matchMedia("(max-width: 700px)").matches
            ? mobileSrc
            : src;
      }
      void video.play().catch(() => undefined);
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [src, mobileSrc]);

  return (
    <div
      className={interior ? "interior-hero-media" : "hero-media"}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className={interior ? "interior-hero-image" : "hero-media-video"}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
      />
    </div>
  );
}
