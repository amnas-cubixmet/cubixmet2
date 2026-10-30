"use client";

import Image from "next/image";
import { useState } from "react";
import { academyCopy } from "../../data/ventures";

/**
 * Displays the supplied Academy hero artwork once the PNG has been uploaded
 * to public/images/ventures/academy-hero.png. Until then, the existing
 * Academy illustration remains visible underneath.
 */
export default function AcademyHeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[20px] transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      aria-hidden={!loaded}
    >
      <Image
        src={academyCopy.heroImage}
        alt={academyCopy.heroImageAlt}
        fill
        priority
        sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1536px) 43vw, 570px"
        className="object-cover object-center"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-7">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#62a5ff]">
            {academyCopy.verticalLabel}
          </p>
          <p className="mt-1 text-[14px] font-medium tracking-tight text-white sm:text-[17px]">
            {academyCopy.tagline}
          </p>
        </div>
        <span aria-hidden="true" className="mb-1 h-2 w-2 shrink-0 rounded-full bg-[#1677FF] shadow-[0_0_15px_#1677FF]" />
      </div>
    </div>
  );
}
