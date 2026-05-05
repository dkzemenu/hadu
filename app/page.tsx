import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { DocumentCard, ProductCard, ProjectCard, ServiceCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { tenderDocuments } from "@/data/documents";
import { partners } from "@/data/partners";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { company, stats } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero-grid px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">Engineering, supply & installation</p>
            <h1 className="mt-5 text-4xl font-black tracking-normal md:text-6xl">{company.tagline}</h1>
            <p className="mt-6 text-lg leading-8 text-blue-50">
              Hadu Engineering supports public and private clients with electromechanical products, installation coordination, technical documentation, and tender-ready project delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request Quotation</ButtonLink>
              <ButtonLink href="/projects" variant="secondary">
                View Projects
              </ButtonLink>
              <ButtonLink href="/tenders" variant="secondary">
                Bid Specs
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/20 bg-white/10 p-5 backdrop-blur">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold text-blue-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we offer"
            title="Electromechanical services aligned with procurement requirements"
            description="Service pages combine technical scope, applicable standards, related products, and project evidence so evaluators can quickly understand delivery capability."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Products"
              title="Catalog structure for specifications, datasheets, and quote requests"
              description="The product area follows a category-first approach inspired by Ethiolab, adapted for Hadu’s electromechanical and laboratory supply scope."
            />
            <ButtonLink href="/products" variant="ghost">
              Browse Catalog
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Tender credibility"
              title="Documents and proof points for procurement teams"
              description="Bid specs, licenses, HSE policies, references, and datasheets are grouped so Hadu can respond faster to government and private tenders."
            />
            <div className="mt-8 grid gap-4">
              <CredibilityPoint icon={<FileText />} title="Bid Specs" text="Technical documentation and product category references." />
              <CredibilityPoint icon={<ShieldCheck />} title="HSE & Quality" text="Safety policy, quality assurance, and risk controls." />
              <CredibilityPoint icon={<CheckCircle2 />} title="Experience" text="Project references, client letters, and compliance files." />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {tenderDocuments.slice(0, 4).map((document) => (
              <DocumentCard key={document.title} document={document} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Projects"
              title="Selected project and tender experience"
              description="Project entries show status, client type, location, scope, and category for quick tender evaluation."
            />
            <ButtonLink href="/projects" variant="secondary">
              View All Projects
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partners"
            title="Manufacturer and supplier relationships"
            description="Partner entries establish sourcing capacity and connect product categories to technical documentation."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid h-14 w-14 place-items-center rounded-md bg-cloud text-lg font-black text-navy">{partner.name.slice(0, 2).toUpperCase()}</div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-teal">{partner.category}</p>
                <h3 className="mt-2 text-lg font-bold text-navy">{partner.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{partner.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-grid px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">Ready for quotation</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">Share your project scope, BOQ, or tender requirement with Hadu Engineering.</h2>
          </div>
          <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-amber px-6 py-3 font-bold text-navy hover:bg-amber-hover">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

function CredibilityPoint({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 p-4">
      <div className="mt-1 text-teal [&_svg]:h-5 [&_svg]:w-5">{icon}</div>
      <div>
        <h3 className="font-bold text-navy">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}
