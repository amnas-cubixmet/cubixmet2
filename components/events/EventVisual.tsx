"use client";

import Image from "next/image";
import { useState } from "react";

type EventVisualProps = {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  showOverlay?: boolean;
};

/**
 * Inline SVG artwork, not a stock photo or a logo.
 * Resolution independent for desktop, tablet and mobile event cards.
 */
export default function EventVisual({ className = "", imageSrc, imageAlt = "", showOverlay = true }: EventVisualProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`relative isolate overflow-hidden bg-[#080e1d] ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(22,119,255,.25),transparent_52%),radial-gradient(ellipse_at_95%_4%,rgba(96,70,232,.14),transparent_46%)]" />
      <svg
        aria-hidden="true"
        viewBox="0 0 880 510"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="event-ai-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#75B6FF" />
            <stop offset=".53" stopColor="#1677FF" />
            <stop offset="1" stopColor="#735BEE" />
          </linearGradient>
          <linearGradient id="event-ai-panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#182B52" stopOpacity=".95" />
            <stop offset="1" stopColor="#070C18" stopOpacity=".8" />
          </linearGradient>
          <pattern id="event-ai-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" stroke="#5274AA" strokeOpacity=".13" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="880" height="510" fill="url(#event-ai-grid)" />
        <g stroke="#4779BE" strokeOpacity=".3" strokeWidth="1.3">
          <path d="M78 115H265L310 158H383" />
          <path d="M803 112H655L602 164H514" />
          <path d="M96 390H270L318 343H382" />
          <path d="M789 394H620L570 346H515" />
          <path d="M440 28V111M440 402v75" />
          <path d="M248 244H318M558 244H638" strokeDasharray="5 8"/>
        </g>
        <g fill="#1677FF" fillOpacity=".85">
          <circle cx="78" cy="115" r="4" /><circle cx="803" cy="112" r="4"/>
          <circle cx="96" cy="390" r="4" /><circle cx="789" cy="394" r="4"/>
          <circle cx="440" cy="28" r="4" /><circle cx="440" cy="477" r="4"/>
          <circle cx="265" cy="115" r="3" /><circle cx="655" cy="112" r="3"/>
          <circle cx="270" cy="390" r="3" /><circle cx="620" cy="394" r="3"/>
        </g>
        <g transform="translate(440 254)">
          <circle r="156" stroke="#1677FF" strokeOpacity=".12" strokeWidth="1.5"/>
          <circle r="128" stroke="#6FB1FF" strokeOpacity=".19" strokeWidth="1.5" strokeDasharray="4 10"/>
          <circle r="98" fill="#09162D" fillOpacity=".88" stroke="#458BF4" strokeOpacity=".68" strokeWidth="2"/>
          <circle r="85" stroke="#1677FF" strokeOpacity=".36" strokeWidth="1"/>
          <path d="M-103-103l26 26m154 154 26 26M103-103 77-77m-154 154-26 26" stroke="#74B5FF" strokeOpacity=".5" strokeWidth="2"/>
          <text x="0" y="27" textAnchor="middle" fill="url(#event-ai-gradient)" fontFamily="Arial,Helvetica,sans-serif" fontSize="96" fontWeight="800" letterSpacing="-9">AI</text>
          <path d="m-35 59h70" stroke="#7BB8FF" strokeOpacity=".6" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="-98" cy="0" r="5" fill="#68AAFF"/>
          <circle cx="98" cy="0" r="5" fill="#68AAFF"/>
          <circle cx="0" cy="-98" r="5" fill="#68AAFF"/>
          <circle cx="0" cy="98" r="5" fill="#68AAFF"/>
        </g>
        <g fill="url(#event-ai-panel)" stroke="#75B6FF" strokeOpacity=".33" strokeWidth="1.4">
          <rect x="91" y="178" width="168" height="114" rx="12"/>
          <rect x="625" y="199" width="162" height="113" rx="12"/>
        </g>
        <g stroke="#79B8FF" strokeWidth="3" strokeLinecap="round" opacity=".86">
          <path d="m142 217-16 16 16 16m53-32 16 16-16 16m-16-40-12 49" />
          <path d="M657 249h98m-98-20h67m-67 40h82"/>
        </g>
        <g fill="#80B4FF" opacity=".62">
          <circle cx="118" cy="193" r="3"/><circle cx="130" cy="193" r="3"/><circle cx="142" cy="193" r="3"/>
          <circle cx="652" cy="214" r="3"/><circle cx="664" cy="214" r="3"/><circle cx="676" cy="214" r="3"/>
        </g>
        <path d="m699 84 6 18 18 6-18 6-6 18-6-18-18-6 18-6 6-18Z" fill="#74AFFF" opacity=".85"/>
        <path d="m186 341 4 12 12 4-12 4-4 12-4-12-12-4 12-4 4-12Z" fill="#74AFFF" opacity=".8"/>
      </svg>
      {imageSrc && !imageFailed && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 60vw, (min-width: 640px) 90vw, 100vw"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      )}
      {showOverlay && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/35 via-transparent to-transparent" />
      )}
    </div>
  );
}
