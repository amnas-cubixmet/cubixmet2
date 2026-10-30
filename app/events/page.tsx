import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/home/SiteHeader";
import SiteFooter from "../../components/home/SiteFooter";
import EventVisual from "../../components/events/EventVisual";
import { events, eventsPageCopy } from "../../data/events";

export const metadata: Metadata = {
  title: "Events | Cubixmet",
  description:
    "Explore Cubixmet events, workshops and hands-on learning experiences in artificial intelligence, software and digital technology.",
};

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18" />
    </svg>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#060912] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-32 h-[430px] w-[430px] rounded-full bg-[#1677FF]/10 blur-[110px]" />
        <div className="relative mx-auto w-[90%] max-w-[1500px] pb-12 pt-14 md:pb-16 md:pt-20">
          <p className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[.2em] text-[#65a8ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1677FF]" />
            {eventsPageCopy.eyebrow}
          </p>
          <h1 className="max-w-[900px] text-[clamp(3rem,6.5vw,6rem)] font-semibold leading-[.95] tracking-[-.065em]">
            {eventsPageCopy.title}
          </h1>
          <p className="mt-6 max-w-[650px] text-[14px] leading-[1.8] text-[#91a0bb] md:text-[17px]">
            {eventsPageCopy.description}
          </p>
        </div>
      </section>

      <section aria-labelledby="events-heading" className="py-12 md:py-20">
        <div className="mx-auto w-[90%] max-w-[1500px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
            <h2 id="events-heading" className="text-[clamp(1.85rem,3.3vw,3rem)] font-semibold tracking-[-.045em]">
              {eventsPageCopy.featured}
            </h2>
            <span className="font-mono text-[11px] tracking-[.12em] text-white/45">
              {String(events.length).padStart(2, "0")} {events.length === 1 ? "EVENT" : "EVENTS"}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#19243a] bg-[#0d1321] transition-colors duration-300 hover:border-[#1677FF]/60"
              >
                <Link
                  href={`/events/${event.slug}`}
                  aria-label={`View ${event.title}`}
                  className="block overflow-hidden"
                >
                  <EventVisual
                    imageSrc={event.listingImage}
                    imageAlt={`${event.title} workshop group photograph`}
                    className="aspect-[2.05/1] w-full transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 inline-flex items-center gap-2 text-[12px] font-medium text-[#549cff]">
                    <CalendarIcon />
                    <time dateTime={event.date}>{event.displayDate}</time>
                  </div>
                  <h3 className="text-[clamp(1.15rem,1.7vw,1.45rem)] font-bold leading-[1.4] tracking-[-.02em]">
                    <Link href={`/events/${event.slug}`} className="transition-colors hover:text-[#80b7ff]">
                      {event.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[62ch] text-[13px] leading-[1.65] text-[#8495b2] sm:text-[14px]">
                    {event.summary}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex min-h-11 items-center gap-2.5 rounded-[11px] border border-white/10 bg-[#0b111f] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:border-[#1677FF]/60 hover:bg-[#1677FF]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
                    >
                      {eventsPageCopy.viewEvent}
                      <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
