import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">Service</p>
            <h1 className="mt-4 text-4xl font-black md:text-5xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-8 text-blue-50">{service.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request Quotation</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                Related Projects
              </ButtonLink>
            </div>
          </div>
          <img src={service.image} alt="" className="h-80 w-full rounded-lg object-cover shadow-soft" />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <DetailList title="Technical scope" items={service.scope} />
          <DetailList title="Standards followed" items={service.standards} />
          <DetailList title="Related products" items={service.relatedProducts} />
        </div>
      </section>
    </>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-teal pl-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
