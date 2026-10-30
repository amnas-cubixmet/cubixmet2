"use client";

import Image from "next/image";
import { useState } from "react";
import { techCopy } from "../../data/ventures";

/**
 * Use the generated team image once it has been committed to public/images/ventures/.
 * Display a known existing project image while that file is being uploaded.
 */
export default function TechHeroImage() {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <Image
      src={
        useFallback
          ? techCopy.heroFallback
          : techCopy.heroImage
      }
      alt={techCopy.heroImageAlt}
      fill
      priority
      sizes="(max-width: 1023px) calc(100vw - 40px), (max-width: 1536px) 43vw, 570px"
      onError={() => setUseFallback(true)}
      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}
