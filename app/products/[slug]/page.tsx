import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product?.title ?? "Product" };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <>
      <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{product.category}</p>
            <h1 className="mt-4 text-4xl font-black text-navy md:text-5xl">{product.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Request Quotation</ButtonLink>
              <a href={product.datasheet} className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-teal hover:text-teal">
                <Download className="h-4 w-4" /> Datasheet
              </a>
            </div>
          </div>
          <img src={product.image} alt="" className="h-80 w-full rounded-lg object-cover shadow-soft" />
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy">Technical specifications</h2>
            <dl className="mt-6 grid gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="grid gap-1 border-b border-slate-100 pb-4 sm:grid-cols-[160px_1fr]">
                  <dt className="font-bold text-navy">{key}</dt>
                  <dd className="text-slate-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-navy">Applications</h2>
            <ul className="mt-6 grid gap-3">
              {product.applications.map((application) => (
                <li key={application} className="rounded-md bg-cloud px-4 py-3 font-semibold text-slate-700">
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
