import { PageHero } from "@/components/page-hero";
import { newsItems } from "@/data/news";

export const metadata = {
  title: "News & Events"
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News / Events"
        title="Company updates, tender readiness, and project announcements"
        description="A lightweight news area gives Hadu a place to publish launches, partnerships, project updates, and future events."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal">{item.date}</p>
              <h2 className="mt-3 text-2xl font-bold text-navy">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
