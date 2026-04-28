import { ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "HSE & Quality"
};

const systems = [
  {
    title: "Safety policy",
    text: "HADU's OSH management system is organized around policy, training, documentation, communication, planning, implementation, evaluation, audit and continual improvement."
  },
  {
    title: "Quality assurance",
    text: "The company controls the quality of equipment, materials, services, erection and installation against relevant standards, specifications, drawings and technical requirements agreed with clients and consultants."
  },
  {
    title: "Standards compliance",
    text: "Work is aligned with customer requirements, project specifications, national laws and regulations, and applicable occupational safety and health guidance."
  },
  {
    title: "Risk management",
    text: "The HSE team uses hazard prevention, performance monitoring, audits, management review, preventive action and corrective action to maintain safe worksites."
  }
];

const hsePersonnel = [
  "Eden Berhane: HSE Manager, MSc Public Health, Electrical Safety Certificate, Risk Assessment Certificate",
  "Tsion Kindalem: HSE Team Leader, BSc Electrical Engineering, Electrical Safety Certificate, Risk Assessment Certificate",
  "Mulat Bekele: Site Engineer, BSc Electrical Engineering, Electrical Safety Certificate, Risk Assessment Certificate",
  "Asalfew Asfaw: Site Engineer, BSc Electrical Engineering, Electrical Safety Certificate, Risk Assessment Certificate",
  "Besufekad Mamo: Supervisor, Diploma Electricity, Electrical Safety Certificate, Risk Assessment Certificate",
  "Zerihun Melese: Supervisor, Diploma Electricity, Electrical Safety Certificate, Risk Assessment Certificate",
  "Haile W/Aregay: Supervisor, Diploma Electricity & Management, Electrical Safety Certificate, Risk Assessment Certificate"
];

export default function HsePage() {
  return (
    <>
      <PageHero
        eyebrow="HSE / Quality"
        title="Safety, quality, and risk controls for engineering delivery"
        description="A dedicated HSE and quality section strengthens tender submissions and gives clients confidence in project execution practices."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {systems.map((system) => (
            <article key={system.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-teal" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-navy">{system.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{system.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">HSE commitment</p>
          <h2 className="mt-3 text-3xl font-black text-navy">Every project should leave a clear technical and safety record.</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            HADU&apos;s profile identifies an HSE Manager, HSE Team Leader, site engineers, supervisors, foremen, site personnel and external OSH auditor participation, with weekly meetings supporting implementation.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {hsePersonnel.map((person) => (
              <div key={person} className="rounded-md bg-cloud px-4 py-3 text-sm font-semibold leading-6 text-slate-700">
                {person}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
