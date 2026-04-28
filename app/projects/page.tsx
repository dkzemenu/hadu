import { ProjectCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  const completed = projects.filter((project) => project.status === "Completed");
  const ongoing = projects.filter((project) => project.status === "Ongoing");

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed and ongoing work from HADU's company profile"
        description="Project entries are based on the submitted company profile, including UEAP distribution networks, Safaricom commercial power line connection services, Bonga street lighting and KEC underground cable works."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatusGroup title="Completed projects" projects={completed} />
          <div className="mt-14">
            <StatusGroup title="Ongoing projects" projects={ongoing} />
          </div>
        </div>
      </section>
    </>
  );
}

function StatusGroup({ title, projects }: { title: string; projects: typeof import("@/data/projects").projects }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
