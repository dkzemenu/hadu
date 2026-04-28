type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">{description}</p>
      </div>
    </section>
  );
}
