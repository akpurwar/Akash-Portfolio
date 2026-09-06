import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { socialLinks } from "../../data/socialLinks";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Skills", "skills"],
  ["Contact", "contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={close}>
          <img src="/avatar.jpg" alt="AP" />
        </a>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={`#${href}`} onClick={close}>
              {label}
            </a>
          ))}

          <a className="nav-talk" href={socialLinks.gmail} target="_blank" rel="noopener noreferrer">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
