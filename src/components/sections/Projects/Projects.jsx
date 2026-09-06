import { useState } from "react";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { projects } from "../../../data/projects";
import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
import ProjectCard from "./ProjectCard";
// styles are provided globally in src/styles/globals.css

const icons = [Sparkles, Layers3, Code2];

export default function Projects() {
  const [openProjectIds, setOpenProjectIds] = useState(() =>
    Object.fromEntries(projects.map((project) => [project.id, true]))
  );

  const toggleProject = (projectId) => {
    setOpenProjectIds((current) => ({
      ...current,
      [projectId]: !current[projectId],
    }));
  };

  return (
    <section className="section" id="work">
      <Container>
        <SectionLabel>03 / SELECTED WORK</SectionLabel>

        <div className="section-heading">
          <h2>Things I've <em>worked on.</em></h2>
          <p>
            Products, platforms and engineering systems I've helped build.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              Icon={icons[index % icons.length]}
              isOpen={!!openProjectIds[project.id]}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
