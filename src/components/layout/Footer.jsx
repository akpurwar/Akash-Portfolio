import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Akash Purwar</span>

        <div className="footer-socials">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <Github size={16} />
          </a>
          <a href={socialLinks.gmail} target="_blank" rel="noopener noreferrer">
            <Mail size={16} />
          </a>
        </div>



        <a
          href="#top"
          className="back-to-top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="top"
        >
         Scroll Top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
