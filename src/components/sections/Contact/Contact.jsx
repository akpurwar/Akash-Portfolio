import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Container from "../../common/Container";
import SectionLabel from "../../common/SectionLabel";
import { socialLinks } from "../../../data/socialLinks";
// styles are provided globally in src/styles/globals.css

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <SectionLabel>06 / CONTACT</SectionLabel>

        <h2>
          Have a problem
          <br />
          worth <em>solving?</em>
        </h2>

        <p>
          I'm interested in ambitious products, challenging engineering
          problems and great teams.
        </p>

        <a className="contact-button" href={socialLinks.gmail} target="_blank" rel="noopener noreferrer">
          Start a conversation <ArrowUpRight />
        </a>

        <div className="social-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a href={socialLinks.gmail} target="_blank" rel="noopener noreferrer">
            <Mail size={18} /> Email
          </a>
        </div>
      </Container>
    </section>
  );
}
