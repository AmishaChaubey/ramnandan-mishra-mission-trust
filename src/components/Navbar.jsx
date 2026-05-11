// Navbar.jsx
import { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
// import { NAV_LINKS } from "./constants";

const TOPBAR_H = 36;
const NAV_H    = 64;

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programs", id: "programs" },
      { label: "Founder", id: "founder" },
      { label: "Achievements", id: "achievement" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ onDonate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > TOPBAR_H);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  



  const handleNavClick = (id) => {
  setActiveNav(id);

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <>
      <style>{`
        /* ── Navbar shell ── */
        .navbar-root {
          position: fixed;
          top: ${TOPBAR_H}px;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
          width: 100%;
          box-sizing: border-box;
        }
        .navbar-root.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 2px 30px rgba(0,0,0,0.10);
          border-bottom: 1px solid rgba(184,134,11,0.13);
        }
        .navbar-root.top {
          background: rgba(255,255,255,0.92);
          box-shadow: 0 1px 8px rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(184,134,11,0.08);
        }

        /* ── Inner row ── */
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: ${NAV_H}px;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── Logo ── */
        .nav-logo img {
          height: 66px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* ── Desktop links ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        .nav-link-btn {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          padding: 4px 0 2px;
          white-space: nowrap;
          color: #1e293b;
        }
        .nav-link-btn.active {
          color: #B8860B;
          border-bottom-color: #B8860B;
        }
        .nav-link-btn:hover {
          color: #B8860B;
        }

        /* ── Donate button ── */
        .nav-donate {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.6rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 2px 12px rgba(184,134,11,0.25);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .nav-donate:hover {
          background: #9a7209;
          transform: translateY(-1px);
          box-shadow: 0 4px 18px rgba(184,134,11,0.35);
        }

        /* ── Hamburger ── */
        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(184,134,11,0.35);
          border-radius: 8px;
          cursor: pointer;
          color: #1e293b;
          padding: 6px 8px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Mobile drawer ── */
        .nav-drawer {
          background: #ffffff;
          border-top: 1px solid rgba(184,134,11,0.12);
          padding: 0.5rem 1.5rem 1.5rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          width: 100%;
          box-sizing: border-box;
        }
        .nav-drawer-btn {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #1e293b;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          cursor: pointer;
          display: block;
          width: 100%;
          text-align: left;
          padding: 0.85rem 0;
          transition: color 0.2s;
        }
        .nav-drawer-btn.active { color: #B8860B; }
        .nav-drawer-donate {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.8rem 0;
          width: 100%;
          margin-top: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 2px 12px rgba(184,134,11,0.25);
        }

        /* ── Breakpoints ── */

        /* Medium screens — shrink gap */
        @media (max-width: 1100px) {
          .nav-links { gap: 1rem; }
          .nav-link-btn { font-size: 0.7rem; }
          .nav-donate { padding: 0.55rem 1rem; font-size: 0.78rem; }
        }

        /* Below 900px — switch to hamburger */
        @media (max-width: 900px) {
          .nav-links   { display: none !important; }
          .nav-donate  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .navbar-inner { padding: 0 1rem; }
          .nav-logo img { height: 54px; }
          .nav-drawer   { padding: 0.5rem 1rem 1.25rem; }
        }

        /* Very small */
        @media (max-width: 360px) {
          .navbar-inner { padding: 0 0.75rem; height: 56px; }
          .nav-logo img { height: 58px; }
        }
      `}</style>

      <nav className={`navbar-root ${scrolled ? "scrolled" : "top"}`}>
        <div className="navbar-inner">

          {/* Logo */}
       <a href="#home">  <div className="nav-logo" style={{ flexShrink: 0 }}>
            <img src="/image/logo2.png" alt="Logo" />
          </div></a> 

          {/* Desktop Links */}
  <ul className="nav-links">
  {NAV_LINKS.map((l) => (
    <li key={l.id}>
      <button
        className={`nav-link-btn${activeNav === l.id ? " active" : ""}`}
        onClick={() => handleNavClick(l.id)}
      >
        {l.id}
      </button>
    </li>
  ))}
</ul>

          {/* Donate */}
          <button className="nav-donate" onClick={onDonate}>
            <Heart size={15} /> Donate Now
          </button>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="nav-drawer">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                className={`nav-drawer-btn${activeNav === l.id ? " active" : ""}`}
                onClick={() => { handleNavClick(l.id); setMenuOpen(false); }}
              >
                {l.id}
              </button>
            ))}
            <button
              className="nav-drawer-donate"
              onClick={() => { onDonate(); setMenuOpen(false); }}
            >
              <Heart size={16} /> Donate Now
            </button>
          </div>
        )}
      </nav>

      {/* ── Spacer so page content starts below TopBar + Navbar ── */}
      <div style={{ height: TOPBAR_H + NAV_H }} />
    </>
  );
}