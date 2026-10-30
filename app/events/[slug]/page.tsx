import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/home/SiteHeader";
import SiteFooter from "../../../components/home/SiteFooter";
import EventVisual from "../../../components/events/EventVisual";
import { events, eventsPageCopy, getEventBySlug } from "../../../data/events";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found | Cubixmet" };
  return {
    title: `${event.title} | Cubixmet Events`,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
      publishedTime: event.date,
    },
  };
}

function BackArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4">
      <path d="m14 5-7 7 7 7M7 12h13" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"
      strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M7 3v4m10-4v4M3 10h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
      strokeLinejoin="round" className="h-4 w-4 shrink-0">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen overflow-x-clip bg-[#060912] pt-[60px] text-white md:pt-[68px]">
      <SiteHeader />
      <article>
        <section className="relative isolate min-h-[445px] overflow-hidden bg-[#060912] md:min-h-[490px]">
          <EventVisual
            imageSrc={event.listingImage}
            imageAlt=""
            className="absolute inset-0 h-full w-full"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,14,.97)_0%,rgba(5,7,14,.88)_42%,rgba(5,7,14,.54)_100%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060912] via-[#060912]/25 to-transparent" />
          <div className="relative z-10 mx-auto w-[90%] max-w-[1500px] pb-24 pt-7 sm:pb-28 md:pt-9">
            <Link href="/events" className="inline-flex min-h-10 items-center gap-2.5 text-[12px] font-medium text-[#9cadc8] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]">
              <BackArrow /> {eventsPageCopy.backToEvents}
            </Link>
            <div className="mt-7 sm:mt-9">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1677FF]/55 bg-[#101b31]/65 px-3 py-1.5 text-[12px] font-medium text-[#559aff]">
                <CalendarIcon />
                <time dateTime={event.date}>{event.displayDate}</time>
              </span>
            </div>
            <h1 className="mt-5 max-w-[850px] text-[clamp(2.25rem,4.25vw,4.75rem)] font-bold leading-[1.07] tracking-[-.04em] text-white">
              {event.title}
            </h1>
            <p className="mt-4 max-w-[800px] text-[14px] leading-[1.7] text-[#a5b6d3] md:text-[17px] md:leading-[1.65]">
              {event.summary}
            </p>
          </div>
        </section>

        <section className="pb-6 pt-12 md:pb-8 md:pt-16">
          <div className="mx-auto grid w-[90%] max-w-[1500px] gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,.55fr)] lg:gap-20">
            <div className="min-w-0 rounded-[20px] border border-white/10 bg-[#0d1321] p-6 sm:p-8 lg:p-10">
              <h2 className="mb-6 flex items-center gap-3 text-[clamp(1.65rem,2.8vw,2.35rem)] font-bold leading-tight tracking-[-.04em]">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#3e96ff]">
                  <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
                </svg>
                {eventsPageCopy.eventOverview}
              </h2>
              <div className="space-y-6">
                {event.paragraphs.map((paragraph, index) => (
                  <p key={index} className={`text-[14px] leading-[1.95] md:text-[16px] ${index === 0 ? "font-medium text-white/85" : "text-white/60"}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[20px] border border-white/10 bg-[#0c0f15] p-6 sm:p-8 lg:sticky lg:top-24">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[.17em] text-[#72b2ff]">{eventsPageCopy.topicsLabel}</p>
                <span className="font-mono text-[12px] text-white/35">{String(event.topics.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-6 space-y-5">
                {event.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-[13px] leading-[1.6] text-white/70">
                    <span className="mt-[3px] text-[#69aaff]"><CheckIcon /></span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section aria-labelledby="event-gallery-heading" className="pb-16 pt-6 md:pb-20 md:pt-8">
          <div className="mx-auto w-[90%] max-w-[1500px]">
            <h2 id="event-gallery-heading" className="mb-7 flex items-center gap-2.5 text-[20px] font-bold tracking-[-.025em]">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-[#3e96ff]">
                <rect x="7" y="3" width="14" height="16" rx="2" />
                <path d="M3 7v13a2 2 0 0 0 2 2h12M10 15l3-3 2 2 2-3 2 4M11 7h.01" />
              </svg>
              {eventsPageCopy.galleryLabel}
            </h2>
            <div className="grid w-full max-w-[720px] gap-3 sm:grid-cols-2 sm:gap-4">
              {[event.listingImage, event.detailImage].filter((image): image is string => Boolean(image)).map((image, index) => (
                <div key={image} className="overflow-hidden rounded-[13px] border border-white/10 bg-[#0d1423]">
                  <EventVisual
                    imageSrc={image}
                    imageAlt={index === 0 ? `${event.title} group photograph` : `${event.title} participants during the session`}
                    showOverlay={false}
                    className="aspect-[16/10] w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#090b11] py-16 md:py-24">
          <div className="mx-auto w-[90%] max-w-[1500px]">
            <p className="section-label">{eventsPageCopy.outcomesLabel}</p>
            <h2 className="mb-10 max-w-[780px] text-[clamp(2.1rem,4.3vw,4.6rem)] font-semibold leading-[1] tracking-[-.06em]">
              Turning ideas into real projects.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {event.outcomes.map((outcome, index) => (
                <div key={outcome} className="flex min-h-[170px] flex-col justify-between gap-8 rounded-[17px] border border-white/10 bg-[#0e1119] p-6">
                  <span className="font-mono text-[12px] text-[#65a8ff]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-[18px] font-medium leading-[1.35] tracking-[-.025em]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
      <section className="py-14 md:py-20">
        <div className="mx-auto flex w-[90%] max-w-[1500px] flex-col items-start justify-between gap-7 overflow-hidden rounded-[22px] bg-[#1677FF] px-6 py-9 sm:px-9 md:flex-row md:items-center md:py-11 lg:px-12">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[.17em] text-white/80">{eventsPageCopy.allEvents}</p>
            <h2 className="mt-2 text-[clamp(1.7rem,3.4vw,3.2rem)] font-semibold tracking-[-.05em]">
              {eventsPageCopy.exploreMore}
            </h2>
          </div>
          <Link
            href="/events"
            aria-label="Browse all Cubixmet events"
            style={{ color: "#09111f", backgroundColor: "#ffffff" }}
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full px-6 py-3 text-[13px] font-bold shadow-[0_8px_24px_rgba(0,0,0,.14)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:self-auto"
          >
            <BackArrow />
            <span>{eventsPageCopy.backToEvents}</span>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
