import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import type { Product } from "@/data/products";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";
import type { TenderDocument } from "@/data/documents";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <img src={service.image} alt="" className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy">{service.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">
          View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <img src={product.image} alt="" className="h-44 w-full object-cover" />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-navy">{product.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{product.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal">
          Specifications <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img src={project.image} alt="" className="h-48 w-full object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-cloud px-3 py-1 text-xs font-bold text-navy">{project.category}</span>
          <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">{project.status}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy">{project.title}</h3>
        <p className="mt-2 text-sm font-semibold text-slate-500">
          {project.client} · {project.location}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.scope}</p>
      </div>
    </article>
  );
}

export function DocumentCard({ document }: { document: TenderDocument }) {
  return (
    <a href={document.href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-black text-amber">{document.type}</span>
          <h3 className="mt-4 text-xl font-bold text-navy">{document.title}</h3>
        </div>
        <Download className="h-5 w-5 text-teal" aria-hidden="true" />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{document.description}</p>
    </a>
  );
}
