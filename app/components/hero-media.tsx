'use client';

import { useEffect, useRef, useState } from 'react';

const scenes = [
  { src: '/media/hero-familia.mp4', className: 'hero-scene-family', rate: 0.58, preload: 'auto' as const },
  { src: '/media/hero-familia-planta.mp4', className: 'hero-scene-planning', rate: 1, preload: 'metadata' as const },
];

export function HeroMedia() {
  const videos = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    videos.current.forEach((video, index) => {
      if (video) video.playbackRate = scenes[index].rate;
    });
  }, []);

  function showNextScene(currentScene: number) {
    const nextScene = (currentScene + 1) % scenes.length;
    const nextVideo = videos.current[nextScene];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.playbackRate = scenes[nextScene].rate;
      void nextVideo.play().catch(() => undefined);
    }
    setActiveScene(nextScene);
  }

  return (
    <div className="hero-media" aria-hidden="true">
      {scenes.map((scene, index) => (
        <video
          key={scene.src}
          ref={(element) => { videos.current[index] = element; }}
          className={`hero-media-video ${scene.className} ${activeScene === index ? 'is-active' : ''}`}
          autoPlay={index === 0}
          muted
          playsInline
          preload={scene.preload}
          poster={index === 0 ? '/media/hero-familia.jpg' : undefined}
          onEnded={() => showNextScene(index)}
        >
          <source src={scene.src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
