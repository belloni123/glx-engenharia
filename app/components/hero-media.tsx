'use client';

import { useEffect, useRef } from 'react';

export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    function syncPlayback() {
      if (!video) return;
      if (reducedMotion.matches || document.hidden) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    }

    syncPlayback();
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      reducedMotion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      <video
        ref={videoRef}
        className="hero-media-video"
        muted
        loop
        playsInline
        preload="none"
        poster="/media/hero-ioa-tour-v2.jpg"
      >
        <source src="/media/hero-ioa-tour-v2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
