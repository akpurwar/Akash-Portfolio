import { ArrowUpRight } from "lucide-react";

export default function ExperienceCard({ experience, index }) {
  return (
    <article className="experience-card">
      <div className="experience-index"></div>

      {experience.logo && (
        <div className="experience-logo-wrap">
          <img
            src={experience.logo}
            alt={experience.company}
            className={`experience-logo ${experience.logo.includes("cybage") ? "experience-logo--large" : ""}`}
          />
        </div>
      )}

      <div className="experience-main">
        <div className="experience-header">
          <div>
            <span className="role">{experience.role}</span>
            <h3>{experience.company}</h3>
          </div>
          <span className="period">{experience.period}</span>
        </div>

        <div className="project-pills">
          {experience.projects.map((project) => (
            <span key={project}>{project}</span>
          ))}
        </div>

        <ul>
          {experience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
