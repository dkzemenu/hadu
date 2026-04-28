import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { company, companyProfile, values } from "@/data/site";

export const metadata = {
  title: "About Us"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hadu"
        title="An electro-mechanical engineering company with nationwide project experience"
        description="HADU Electro-Mechanical Engineering was established in Ethiopia to provide professional assistance in the electro-mechanical sector, with experience in electrical construction, distribution networks, lighting, telecom power and related mechanical works."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Company background" eyebrow="Profile" />
            <p className="mt-5 leading-8 text-slate-600">
              {companyProfile.legalName} has built experience across electrical construction and electro-mechanical works, supported by electrical and mechanical designers, engineers, business administrators, technicians, supervisors and site personnel.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The company profile lists work with Universal Electric Access Program projects, KEC International, Safaricom Ethiopia commercial power line connection services, street lighting works, and underground/overhead distribution line projects across Ethiopia.
            </p>
          </div>
          <div className="grid gap-5">
            <InfoBlock title="Mission" text={companyProfile.mission} />
            <InfoBlock title="Vision" text={companyProfile.vision} />
          </div>
        </div>
      </section>
      <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Values" title="Operating principles" />
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="rounded-lg bg-white p-6 text-lg font-bold text-navy shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Company details" title="Legal, management and resource profile" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <InfoBlock title="Office address" text={`${company.address}. Contact: ${company.phone} / ${company.secondaryPhone}. Email: ${company.email}.`} />
            <InfoBlock title="Registration" text="The profile includes taxpayer registration, VAT registration, business license, trade name, and business competency certificate sections for tender review." />
            <InfoBlock title="Main objective" text={companyProfile.objective} />
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <ListBlock title="Management structure" items={companyProfile.management} />
            <ListBlock title="Equipment and machinery" items={companyProfile.equipment} />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-navy">{title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
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
