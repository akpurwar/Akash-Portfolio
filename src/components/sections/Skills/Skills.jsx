import { Check } from "lucide-react";
import { skillGroups } from "../../../data/skills";
import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
// styles are provided globally in src/styles/globals.css

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <Container>
        <SectionLabel>04 / TOOLKIT</SectionLabel>

        <div className="section-heading">
          <h2>My technical <em>toolkit.</em></h2>
          <p>Tools I use to turn product ideas into reliable, scalable software.</p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill" key={skill}>
                    <span>{skill}</span>
                    <Check size={15} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
