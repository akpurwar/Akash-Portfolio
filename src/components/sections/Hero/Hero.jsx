import { ArrowUpRight, Download, Zap, Phone } from "lucide-react";
import { socialLinks } from "../../../data/socialLinks";
// styles are provided globally in src/styles/globals.css

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            Senior Software Engineer
          </div>

          <h1>
            I build
            <br />
            <em>fast, thoughtful</em>
            <br />
            digital products.
          </h1>

          <p className="hero-description">
           Senior Software Engineer focused on React, Node JS , MongoDB ,Javascript, TypeScript and frontend architecture — with a growing edge in AI-assisted engineering and automation
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#work">
              Explore my work <ArrowUpRight size={17} />
            </a>

            <a
              className="btn secondary"
              href="/Akash_Purwar_Resume.pdf"
              download
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="hero-meta">
            <span><Zap size={15} /> 5+ years experience</span>
            <span><i /> Noida, India</span>
            <span>
              <Phone size={15} /> <a href={socialLinks.phone} style={{ color: 'inherit' }}>+91 8860963377</a>
            </span>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className="code-card">
      <div className="code-top">
        <div className="window-dots">
          <span />
          <span />
          <span />
        </div>
        <span>akash.config.ts</span>
      </div>

      <div className="code-body">
        <Line n="01"><b>const</b> <strong>engineer</strong> = {"{"}</Line>
        <Line n="02">&nbsp;&nbsp;name: <i>'Akash Purwar'</i>,</Line>
        <Line n="03">&nbsp;&nbsp;role: <i>'Senior Software Engineer'</i>,</Line>
        <Line n="04">&nbsp;&nbsp;focus: [</Line>
        <Line n="05">&nbsp;&nbsp;&nbsp;&nbsp;<i>'React JS'</i>,</Line>
        <Line n="06">&nbsp;&nbsp;&nbsp;&nbsp;<i>'Node JS'</i>,</Line>
        <Line n="07">&nbsp;&nbsp;&nbsp;&nbsp;<i>'TypeScript'</i>,</Line>
        <Line n="08">&nbsp;&nbsp;&nbsp;&nbsp;<i>'MongoDB'</i>,</Line>
        <Line n="09">&nbsp;&nbsp;&nbsp;&nbsp;<i>'Frontend Architecture'</i>,</Line>
        <Line n="10">&nbsp;&nbsp;&nbsp;&nbsp;<i>'AI + MCP'</i></Line>
        <Line n="11">&nbsp;&nbsp;],</Line>
        <Line n="12">&nbsp;&nbsp;mindset: <i>'Build. Measure. Improve.'</i></Line>
        <Line n="13">{"}"}</Line>
        <span className="cursor" />
      </div>
    </div>
  );
}

function Line({ n, children }) {
  return (
    <div className="code-line">
      <span>{n}</span>
      <code>{children}</code>
    </div>
  );
}
