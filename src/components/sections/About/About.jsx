import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
// styles are provided globally in src/styles/globals.css

export default function About() {
  return (
    <section className="section" id="about">
      <Container className="two-column">
        <div>
          <SectionLabel>01 / ABOUT</SectionLabel>
          <h2>Engineering with <em>purpose.</em></h2>
        </div>

        <div className="about-copy">
          <p>
            I'm a Senior Software Engineer with 5+ years of experience
            building and scaling consumer-facing web platforms.
          </p>

          <p>
            My core strength is frontend engineering — React, TypeScript,
            Redux and performance architecture — while also working across
            the stack with Node.js, GraphQL and PostgreSQL.
          </p>

          <p>
            More recently, I've been exploring AI-assisted engineering,
            MCP servers and automation to remove repetitive work from
            design, QA and delivery workflows.
          </p>
        </div>
      </Container>
    </section>
  );
}
