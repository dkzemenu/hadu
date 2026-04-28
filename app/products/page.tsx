import { ProductCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { products } from "@/data/products";

export const metadata = {
  title: "Products"
};

export default function ProductsPage() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <PageHero
        eyebrow="Product catalog"
        title="Technical products organized for specifications and quotations"
        description="The catalog supports procurement teams with category browsing, technical specifications, datasheet placeholders, and direct quote requests."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full bg-cloud px-4 py-2 text-sm font-bold text-navy">
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
