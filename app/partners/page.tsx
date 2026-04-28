import { PageHero } from "@/components/page-hero";
import { partners } from "@/data/partners";

export const metadata = {
  title: "Partners"
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Manufacturer and supplier relationships that support technical delivery"
        description="The partner area mirrors the credibility purpose of the Ethiolab reference: clear supplier categories, short descriptions, and room for external manufacturer links."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article key={partner.name} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <div className="grid h-16 w-16 place-items-center rounded-md bg-navy text-xl font-black text-white">{partner.name.slice(0, 2).toUpperCase()}</div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-teal">{partner.category}</p>
              <h2 className="mt-2 text-2xl font-bold text-navy">{partner.name}</h2>
              <p className="mt-3 leading-7 text-slate-600">{partner.summary}</p>
              {partner.url ? (
                <a href={partner.url} className="mt-5 inline-block font-bold text-teal">
                  Read More
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
