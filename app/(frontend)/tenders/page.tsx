import { DocumentCard, ProjectCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { getProjects, getTenderDocuments } from "@/lib/cms";

export const metadata = {
  title: "Tenders & Experience"
};

export default async function TendersPage() {
  const [tenderDocuments, projects] = await Promise.all([getTenderDocuments(), getProjects()]);

  return (
    <>
      <PageHero
        eyebrow="Tenders & experience"
        title="Company profile, compliance documents, and proven project references"
        description="HADU's profile includes registration sections, business competency documentation, project completion certificates, staff resources, OSH personnel, equipment lists, and major UEAP/Safaricom/KEC experience."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Downloads"
            title="Tender document library"
            description="Replace placeholders with signed, approved PDFs before public launch."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tenderDocuments.map((document) => (
              <DocumentCard key={document.title} document={document} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-cloud px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Experience"
            title="Government, telecom, industrial and lighting references"
            description="The profile records MV/LV distribution network contracts, commercial power line connection services, underground cable installation, and street lighting completion certificates."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
