"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { homeCopy } from "../../data/homeContent";

const MOBILE_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1280;
const AUTO_ADVANCE_MS = 6000;
const STORY_COUNT = testimonials.length;
// Three identical rounds provide enough room to swipe endlessly in either direction.
const loopedStories = [...testimonials, ...testimonials, ...testimonials];
const normalizeStoryIndex = (index: number) => ((index % STORY_COUNT) + STORY_COUNT) % STORY_COUNT;

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      {direction === "previous" ? (
        <path d="m14 5-7 7 7 7M7 12h13" />
      ) : (
        <path d="m10 5 7 7-7 7M17 12H4" />
      )}
    </svg>
  );
}

export default function TestimonialsSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const physicalIndexRef = useRef(STORY_COUNT);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(true);

  const scrollToPhysical = useCallback(
    (requestedIndex: number, immediate = false) => {
      const track = trackRef.current;
      if (!track) return;
      const first = track.children.item(0) as HTMLElement | null;
      const target = track.children.item(requestedIndex) as HTMLElement | null;
      if (!first || !target) return;

      physicalIndexRef.current = requestedIndex;
      track.scrollTo({
        left: target.offsetLeft - first.offsetLeft,
        behavior: immediate || reduceMotion ? "instant" : "smooth",
      });
      setActiveIndex(normalizeStoryIndex(requestedIndex));
    },
    [reduceMotion],
  );

  // Map a real story to the middle round, so dot navigation is predictable.
  const scrollToStory = useCallback(
    (index: number) => scrollToPhysical(STORY_COUNT + normalizeStoryIndex(index)),
    [scrollToPhysical],
  );

  // Once a swipe/animated transition finishes on a cloned round, jump to the
  // identical slide in the middle round. The image/text stay visually identical.
  const recenterAfterScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children.item(0) as HTMLElement | null;
    const second = track.children.item(1) as HTMLElement | null;
    if (!first || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    if (step <= 0) return;
    const index = Math.round(track.scrollLeft / step);
    const logical = normalizeStoryIndex(index);
    physicalIndexRef.current = index;
    setActiveIndex(logical);

    if (index < STORY_COUNT || index >= STORY_COUNT * 2) {
      scrollToPhysical(STORY_COUNT + logical, true);
    }
  }, [scrollToPhysical]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const syncLayout = () => {
      const width = window.innerWidth;
      setVisibleCount(width < MOBILE_BREAKPOINT ? 1 : width < DESKTOP_BREAKPOINT ? 2 : 3);
    };
    syncLayout();
    window.addEventListener("resize", syncLayout);
    return () => window.removeEventListener("resize", syncLayout);
  }, []);

  // Start in the middle copy and recalculate position when card widths change.
  useLayoutEffect(() => {
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    scrollToPhysical(STORY_COUNT + activeIndex, true);
    // The current index is deliberately read only when the viewport count changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  useEffect(() => {
    return () => {
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(Boolean(entry?.isIntersecting)),
      { threshold: 0.25 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncVisibility = () => setIsPageVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  // Autoplay moves forward through the first card again, never reversing back.
  // Respect pause, reduced-motion and background-tab preferences.
  useEffect(() => {
    if (!isInView || !isPageVisible || isPaused || reduceMotion || STORY_COUNT < 2) return;
    const interval = window.setInterval(() => {
      const next = physicalIndexRef.current + 1;
      // Physical indices normally stay in the middle copy; the next card
      // can enter the third copy before invisible repositioning occurs.
      scrollToPhysical(next >= STORY_COUNT * 3 ? STORY_COUNT : next);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(interval);
  }, [activeIndex, isInView, isPageVisible, isPaused, reduceMotion, scrollToPhysical]);

  const handleScroll = () => {
    const track = trackRef.current;
    const first = track?.children.item(0) as HTMLElement | null;
    const second = track?.children.item(1) as HTMLElement | null;
    if (!track || !first || !second) return;
    const step = second.offsetLeft - first.offsetLeft;
    if (step <= 0) return;

    const index = Math.max(0, Math.min(STORY_COUNT * 3 - visibleCount, Math.round(track.scrollLeft / step)));
    physicalIndexRef.current = index;
    setActiveIndex((previous) => {
      const logical = normalizeStoryIndex(index);
      return previous === logical ? previous : logical;
    });

    // scrollend is not supported in every older mobile browser.
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(recenterAfterScroll, 240);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="client-stories-title"
      aria-roledescription="carousel"
      className="pb-16 pt-12 md:pb-24 md:pt-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="about-wrapper min-w-0">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 md:mb-10">
          <h2 id="client-stories-title" className="section-label">
            {homeCopy.testimonialsLabel}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous client story"
              aria-controls="client-stories-track"
              onClick={() => scrollToPhysical(physicalIndexRef.current - 1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[#1677FF] hover:bg-[#1677FF]/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
            >
              <ArrowIcon direction="previous" />
            </button>
            <button
              type="button"
              aria-label="Next client story"
              aria-controls="client-stories-track"
              onClick={() => scrollToPhysical(physicalIndexRef.current + 1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#1677FF] text-white transition-colors hover:bg-[#328aff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>

        <div
          id="client-stories-track"
          ref={trackRef}
          role="group"
          aria-label="Client story cards; swipe to see more"
          onScroll={handleScroll}
          onScrollEnd={recenterAfterScroll}
          className="client-stories-scroll flex min-w-0 w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain"
        >
          {loopedStories.map((story, index) => (
            <figure
              key={`${story.id}-${Math.floor(index / STORY_COUNT)}`}
              aria-hidden={index < STORY_COUNT || index >= STORY_COUNT * 2 ? true : undefined}
              role="group"
              aria-roledescription="slide"
              aria-label={`Client story ${normalizeStoryIndex(index) + 1} of ${STORY_COUNT}`}
              className="flex min-h-[250px] min-w-0 shrink-0 grow-0 basis-full snap-start flex-col justify-between rounded-[17px] border border-white/10 bg-[#0c101a] p-5 md:basis-[calc((100%_-_16px)/2)] md:p-6 xl:basis-[calc((100%_-_32px)/3)]"
            >
              <div>
                <span aria-hidden="true" className="text-[30px] leading-none text-[#1677FF]">“</span>
                <blockquote className="mt-2 text-[13px] leading-[1.8] text-white/75 sm:text-[14px]">
                  {story.quote}
                </blockquote>
              </div>
              <figcaption className="mt-7 border-t border-white/10 pt-4">
                <p className="text-[14px] font-semibold text-white">{story.name}</p>
                <p className="mt-1 text-[12px] leading-[1.5] text-white/45">{story.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div role="group" aria-label="Choose a client story" className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {testimonials.map((story, index) => (
            <button
              key={story.id}
              type="button"
              aria-label={`Go to client story ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-controls="client-stories-track"
              onClick={() => scrollToStory(index)}
              className="grid h-8 w-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
            >
              <span className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-6 bg-[#1677FF]" : "w-1.5 bg-white/25 hover:bg-white/50"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
