import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectCard({ project, Icon, isOpen, onToggle }) {
  return (
    <article className={`project-card ${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="project-accordion-toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? `Collapse ${project.title}` : `Expand ${project.title}`}
      >
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      <div className="project-card-content">
        <div className="project-top">
          <span className="project-number">{project.number}</span>
          <div className={project.id === "resume-now" ? "project-icon resume-now-logo" : "project-icon"}>
            {project.logo ? (
              <img src={project.logo} alt={project.title} style={{ width: 36, height: 36, objectFit: "contain" }} />
            ) : Icon ? (
              <Icon size={23} />
            ) : (
              <div className="project-icon-placeholder" />
            )}
          </div>
        </div>

        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <div className={`project-card-body ${isOpen ? "open" : ""}`}>
          <ul className="project-description-list">
            {project.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="tags">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <a href={project.link || "#"} className="project-link" target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined}>
            View case study <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}
