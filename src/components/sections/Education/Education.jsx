import { education } from "../../../data/education";
import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
// styles are provided globally in src/styles/globals.css

export default function Education() {
  return (
    <section className="section" id="education">
      <Container>
        <SectionLabel>05 / EDUCATION</SectionLabel>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.degree}>
              <span>{item.year}</span>
              <h3>{item.degree}</h3>
              <p>{item.institute}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
