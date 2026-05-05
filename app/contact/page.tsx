import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { company } from "@/data/site";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quotation or share your tender requirement"
        description="Send project scope, BOQ, product specifications, or document requests. The form is ready to connect to a preferred email/form provider."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-navy">Office contact</h2>
              <div className="mt-6 grid gap-4 text-slate-700">
                <ContactLine icon={<MapPin />} text={company.address} />
                <ContactLine icon={<Phone />} text={company.phone} />
                <ContactLine icon={<Phone />} text={company.secondaryPhone} />
                <ContactLine icon={<Mail />} text={company.email} />
              </div>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                className="focus-ring mt-7 inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-bold text-white hover:bg-teal-hover"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Quick Contact
              </a>
            </div>
            <iframe title="Hadu Engineering map" src={mapSrc} className="mt-6 h-72 w-full rounded-lg border border-slate-200" loading="lazy" />
          </div>
          <form className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Organization" name="organization" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
              <label className="md:col-span-2">
                <span className="text-sm font-bold text-navy">Inquiry type</span>
                <select className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3">
                  <option>Request quotation</option>
                  <option>Submit tender requirement</option>
                  <option>Ask about products</option>
                  <option>Ask about services</option>
                </select>
              </label>
              <label className="md:col-span-2">
                <span className="text-sm font-bold text-navy">Message</span>
                <textarea className="focus-ring mt-2 min-h-40 w-full rounded-md border border-slate-300 px-4 py-3" placeholder="Briefly describe your project scope, BOQ, product requirement, or deadline." />
              </label>
            </div>
            <button type="button" className="focus-ring mt-6 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-steel">
              Submit Inquiry
            </button>
            <p className="mt-3 text-sm text-slate-500">Form submission is a front-end placeholder until an email or CRM provider is connected.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="text-sm font-bold text-navy">{label}</span>
      <input name={name} type={type} className="focus-ring mt-2 w-full rounded-md border border-slate-300 px-4 py-3" />
    </label>
  );
}

function ContactLine({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-teal [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
