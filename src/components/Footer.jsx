import { GraduationCap, Heart, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TRUST_NAME, PAN, DARPAN, BANK, BRANCH, ACCOUNT, IFSC, ADDRESS } from "./Constants";

// ─── FOOTER ───────────────────────────────────────────────────
// Props:
//   onDonate — function to open DonateModal

const SOCIAL = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube];

const ORG_LINKS = [
  { label: "About the Trust",   id: "about"   },
  { label: "About the Founder", id: "founder"  },
  { label: "Our Programs",          id: "programs"       },
  { label: "Achievement",    id: "achievement" },
  { label: "Contact Us",        id: "contact"     },
];

export default function Footer({ onDonate }) {
  return (
    <footer style={{ background: "linear-gradient(175deg,#0f172a 0%,#1e3a8a 100%)", color: "white" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem 2rem" }}>

        {/* Top grid — 4 cols on desktop, stacks on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* ── Brand ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", color: "white", fontWeight: 600, fontSize: "1rem", margin: 0, lineHeight: 1 }}>Ramnandan Mishra</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#fcd34d", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", margin: "3px 0 0" }}>Mission Trust</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Outfit',sans-serif", color: "#93c5fd", fontSize: "0.82rem", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Carrying forward the legacy of a freedom fighter through education, welfare and service to the people of Bihar.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {SOCIAL.map((Icon, i) => (
                <button
                  key={i}
                  style={{
                    width: "36px", height: "36px",
                    background: "rgba(255,255,255,0.08)",
                    border: "none", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", color: "white",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#B8860B"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* ── Organisation ── */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "white", marginBottom: "1.25rem" }}>
              Organisation
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {ORG_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    id={`footer-link-${id}`}
                    style={{ fontFamily: "'Outfit',sans-serif", color: "#93c5fd", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"}
                    onMouseLeave={e => e.currentTarget.style.color = "#93c5fd"}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Donate / Bank ── */}
          <div>
            <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "white", marginBottom: "1.25rem" }}>
              Donate / Bank
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {[
                ["Trust",   TRUST_NAME],
                ["Bank",    `${BANK}, ${BRANCH}`],
                ["A/C No.", ACCOUNT],
                ["IFSC",    IFSC],
                ["PAN",     PAN],
                ["DARPAN",  DARPAN],
              ].map(([k, v]) => (
                <div key={k}>
                  <p style={{ fontFamily: "'Outfit',sans-serif", color: "#60a5fa", fontSize: "0.65rem", margin: 0 }}>{k}</p>
                  <p style={{ fontFamily: "'Outfit',sans-serif", color: "white", fontSize: "0.72rem", fontWeight: 600, margin: "1px 0 0", wordBreak: "break-all" }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Address ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <h4 style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "white", marginBottom: "1.25rem" }}>
                Address
              </h4>
              <div style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                <MapPin size={15} color="#fcd34d" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#93c5fd", fontSize: "0.82rem", lineHeight: 1.75, margin: 0 }}>
                  {ADDRESS}
                </p>
              </div>
            </div>
            <button
              onClick={onDonate}
              style={{
                fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: "0.8rem",
                background: "#B8860B", color: "white", border: "none",
                borderRadius: "9999px", padding: "0.65rem 1.25rem",
                width: "100%", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#9a7209"}
              onMouseLeave={e => e.currentTarget.style.background = "#B8860B"}
            >
              <Heart size={14} /> Donate Now
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontFamily: "'Outfit',sans-serif", color: "#60a5fa", fontSize: "0.72rem", margin: 0, textAlign: "center" }}>
            © 2025 {TRUST_NAME}. All rights reserved. &nbsp;|&nbsp; PAN: {PAN} &nbsp;|&nbsp; DARPAN: {DARPAN}
          </p>
        </div>

      </div>
    </footer>
  );
}