"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectVideoPreviewProps = {
  name: string;
  image: string;
  fallbackImage?: string;
  video?: string;
};

/**
 * Keep a cover visible until the Dynamic Website video is ready.
 * Fade video in after loading, play muted when visible, and fall back to the
 * cover if video playback fails. Avoid preloading large media assets.
 */
export default function ProjectVideoPreview({
  name,
  image,
  fallbackImage,
  video,
}: ProjectVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlaybackError, setHasPlaybackError] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const [readyVideo, setReadyVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!video || hasPlaybackError) return;
    const player = videoRef.current;
    if (!player) return;

    let visibleRatio = 0;
    let disposed = false;

    const syncPlayback = () => {
      if (document.hidden || visibleRatio < 0.55) {
        player.pause();
        return;
      }

      // Muted inline playback is allowed on current mobile and desktop browsers.
      // An AbortError is normal if the visitor scrolls away while loading.
      const playPromise = player.play();
      if (playPromise) {
        void playPromise.catch((error: unknown) => {
          if (
            !disposed &&
            error instanceof DOMException &&
            error.name === "NotSupportedError"
          ) {
            setHasPlaybackError(true);
          }
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        visibleRatio = entry.intersectionRatio;
        syncPlayback();
      },
      { threshold: [0, 0.25, 0.55, 0.8] }
    );

    observer.observe(player);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      player.pause();
    };
  }, [video, hasPlaybackError]);

  // Keep the cover in place while the video loads and as an error fallback.
  // A loaded video fades in on top, matching Products and Tools previews.
  const videoActive = Boolean(video && !hasPlaybackError);
  const videoReady = videoActive && readyVideo === video;

  return (
    <>
      <Image
        src={hasImageError && fallbackImage ? fallbackImage : image}
        alt={`${name} portfolio preview`}
        onError={() => {
          if (!hasImageError && fallbackImage) setHasImageError(true);
        }}
        fill
        sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) 50vw, 33vw"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {videoActive && video && (
        <video
          ref={videoRef}
          src={video}
          playsInline
          muted
          loop
          preload="none"
          aria-label={`${name} project walkthrough, plays automatically when visible`}
          className={
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 " +
            (videoReady ? "opacity-100" : "opacity-0")
          }
          onLoadedData={() => setReadyVideo(video)}
          onError={() => setHasPlaybackError(true)}
        />
      )}
    </>
  );
}
