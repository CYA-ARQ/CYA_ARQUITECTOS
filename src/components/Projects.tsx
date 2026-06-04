import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/siteData";
import { assetPath } from "../lib/assets";
import { cn } from "../lib/utils";

type ProjectsProps = {
  isDark: boolean;
};

export function Projects({ isDark }: ProjectsProps) {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const secondaryProjects = projects.filter((project) => project.name !== featuredProject.name);

  return (
    <section
      id="proyectos"
      className={cn(
        "px-4 py-20 transition-colors duration-500 md:px-6 md:py-28",
        isDark ? "bg-[#0b0f14]" : "bg-white",
      )}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#c9a46a]">
              Portafolio
            </p>
            <h2
              className={cn(
                "font-display text-3xl font-medium leading-tight transition-colors md:text-5xl",
                isDark ? "text-white" : "text-[#0a1b33]",
              )}
            >
              Proyectos con lectura espacial, técnica y constructiva
            </h2>
          </div>
          <p
            className={cn(
              "max-w-sm text-[15px] leading-relaxed transition-colors",
              isDark ? "text-slate-300" : "text-[#64748b]",
            )}
          >
            Selección basada en el brochure y portafolios adjuntos: vivienda, interiorismo,
            concursos, multifamiliar y supervisión de obra.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <ProjectCard
            project={featuredProject}
            featured
            isDark={isDark}
            className="lg:col-span-7 lg:row-span-2"
          />
          {secondaryProjects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              isDark={isDark}
              className={cn("lg:col-span-5", index > 1 && "lg:col-span-6")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
  featured?: boolean;
  isDark: boolean;
  className?: string;
};

function ProjectCard({ project, featured = false, isDark, className }: ProjectCardProps) {
  const image = isDark && project.darkImage ? project.darkImage : project.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "group overflow-hidden rounded-[32px] border shadow-sm transition-colors duration-500",
        featured && "lg:flex lg:h-full lg:flex-col",
        isDark ? "border-white/10 bg-[#111820]" : "border-slate-200/70 bg-[#f9fafb]",
        className,
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "h-[460px] lg:h-auto lg:flex-1" : "h-[260px]")}>
        <img
          src={assetPath(image)}
          alt={`Proyecto ${project.name}`}
          loading={featured ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div
          className={cn(
            "absolute left-5 top-5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-xl transition-colors",
            isDark
              ? "border-white/20 bg-black/45 text-white"
              : "border-white/45 bg-white/85 text-[#0a1b33]",
          )}
        >
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <h3
            className={cn(
              "font-display text-2xl font-medium leading-tight transition-colors",
              isDark ? "text-white" : "text-[#0a1b33]",
            )}
          >
            {project.name}
          </h3>
          <p
            className={cn(
              "inline-flex items-center gap-1.5 text-[12px] font-semibold md:max-w-[220px] md:justify-end md:text-right",
              isDark ? "text-slate-400" : "text-slate-500",
            )}
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#c9a46a]" aria-hidden="true" />
            {project.location}
          </p>
        </div>
        <p
          className={cn(
            "mt-4 text-[14px] leading-relaxed transition-colors",
            isDark ? "text-slate-300" : "text-[#64748b]",
          )}
        >
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
