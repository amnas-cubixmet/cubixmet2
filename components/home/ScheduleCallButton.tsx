"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Arrow from "./Arrow";
import { site, whatsappLink } from "../../data/site";

type Props = {
  venture: "Tech" | "Digital";
};

function ActionIcon({ type }: { type: "phone" | "message" | "copy" }) {
  if (type === "phone") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.2 3.8 4.8 5.4c-.8.5-1.1 1.5-.8 2.4 1.8 5.2 5.9 9.3 11.1 11.1.9.3 1.9 0 2.4-.8l1.6-2.4c.5-.8.4-1.8-.3-2.5l-2-2c-.6-.6-1.5-.7-2.2-.3l-1.9 1.1a13.7 13.7 0 0 1-4.8-4.8L9 5.3c.4-.7.3-1.6-.3-2.2l-2-2c-.7-.7-1.7-.8-2.5-.3Z" />
      </svg>
    );
  }
  if (type === "message") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 11.5a8 8 0 0 1-8 8 8 8 0 0 1-3.5-.8L4 20l1.3-4.5a8 8 0 1 1 14.7-4Z" />
        <path d="M8.5 11.5h7M8.5 14.5h4" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

export default function ScheduleCallButton({ venture }: Props) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "manual">("idle");
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const close = () => {
    setOpen(false);
    setCopyStatus("idle");
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(site.phoneDial);
      setCopyStatus("copied");
    } catch {
      phoneInputRef.current?.focus();
      phoneInputRef.current?.select();
      setCopyStatus("manual");
    }
  };

  const whatsappUrl = whatsappLink(`Hi Cubixmet ${venture}, I'd like to schedule a call.`);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-white/65 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Schedule a Call <Arrow />
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-[8px] sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative my-auto w-full max-w-[440px] overflow-hidden rounded-[24px] border border-white/15 bg-[#0c0d12] p-6 text-white shadow-[0_26px_100px_rgba(0,0,0,.7)] sm:p-8"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#1677FF]/15 blur-[60px]" />
            <div className="relative flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.19em] text-[#58a2ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
                Cubixmet {venture}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close call options"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#1677FF]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M6 6 18 18M18 6 6 18" />
                </svg>
              </button>
            </div>

            <h2 id={titleId} className="relative mt-6 text-[clamp(1.7rem,6vw,2.25rem)] font-semibold leading-[1.1] tracking-[-.055em]">
              Let's connect.
            </h2>
            <p id={descriptionId} className="relative mt-3 text-[13px] leading-6 text-white/60">
              Choose how you'd like to contact our team. We are happy to discuss your project.
            </p>

            <div className="relative mt-6 rounded-[14px] border border-white/10 bg-white/[.04] px-4 py-4">
              <label htmlFor={`${titleId}-phone`} className="block text-[10px] font-semibold uppercase tracking-[.16em] text-white/45">
                Business phone
              </label>
              <input
                id={`${titleId}-phone`}
                ref={phoneInputRef}
                readOnly
                value={site.phoneDisplay}
                aria-label="Business phone number"
                className="mt-2 w-full bg-transparent text-[21px] font-semibold tracking-[-.025em] text-white outline-none"
              />
            </div>

            <div className="relative mt-5 grid gap-2.5">
              <a
                href={`tel:${site.phoneDial}`}
                className="flex min-h-[52px] items-center gap-3 rounded-[12px] bg-[#1677FF] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#3388ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ActionIcon type="phone" />
                Call now
                <span className="ml-auto"><Arrow /></span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center gap-3 rounded-[12px] border border-white/15 bg-white/[.035] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ActionIcon type="message" />
                Message on WhatsApp
                <span className="ml-auto"><Arrow /></span>
              </a>
              <button
                type="button"
                onClick={copyPhone}
                className="flex min-h-[52px] items-center gap-3 rounded-[12px] border border-white/15 bg-white/[.035] px-4 text-left text-[13px] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ActionIcon type="copy" />
                {copyStatus === "copied" ? "Number copied" : "Copy phone number"}
              </button>
            </div>
            <p role="status" aria-live="polite" className="relative mt-4 min-h-[32px] text-[11px] leading-5 text-white/45">
              {copyStatus === "manual"
                ? "Number selected. Use Ctrl+C (or Command+C) to copy it."
                : "On desktop, Call now may ask you to choose a calling app."}
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
