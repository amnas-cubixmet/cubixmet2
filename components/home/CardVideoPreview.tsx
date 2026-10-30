"use client";

import { useEffect, useRef, useState } from "react";

/** Autoplays muted previews only when visible; keeps background art as fallback. */
export default function CardVideoPreview({
  video,
  name,
}: {
  video?: string | null;
  name: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<string | null>(null);
  const enabled = Boolean(video && video !== failed);

  useEffect(() => {
    if (!video || !enabled) return;
    const element = ref.current;
    if (!element) return;
    let visible = false;
    let disposed = false;
    const sync = () => {
      if (!visible || document.hidden) {
        element.pause();
        return;
      }
      const pending = element.play();
      if (pending) {
        void pending.catch((error: unknown) => {
          if (!disposed && error instanceof DOMException && error.name === "NotSupportedError") {
            setFailed(video);
          }
        });
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.45);
        sync();
      },
      { threshold: [0, 0.45, 0.75] }
    );
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      element.pause();
    };
  }, [video, enabled]);

  if (!enabled || !video) return null;
  return (
    <video
      ref={ref}
      src={video}
      muted
      playsInline
      loop
      preload="none"
      aria-label={`${name} video preview`}
      className={
        "pointer-events-none absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 " +
        (loaded === video ? "opacity-100" : "opacity-0")
      }
      onLoadedData={() => setLoaded(video)}
      onError={() => setFailed(video)}
    />
  );
}
