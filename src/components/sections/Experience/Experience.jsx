import { experience } from "../../../data/experience";
import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
import ExperienceCard from "./ExperienceCard";
// styles are provided globally in src/styles/globals.css

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <Container>
        <SectionLabel>02 / EXPERIENCE</SectionLabel>

        <div className="section-heading">
          <h2>Where I've <em>made an impact.</em></h2>
          <p>Product engineering, architecture, performance and technical leadership.</p>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.company}
              experience={item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
