import { ServiceCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { getServices } from "@/lib/cms";

export const metadata = {
  title: "Services"
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Clear electromechanical service categories for technical evaluation"
        description="Each service category includes the delivery scope, standards followed, related products, and documentation expectations for procurement and project teams."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
