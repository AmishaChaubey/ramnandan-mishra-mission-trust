import { Star } from "lucide-react";
import { TESTIMONIALS } from "./constants";

// ─── TESTIMONIALS SECTION ─────────────────────────────────────
// No props needed.

export default function Testimonials() {
  return (
    <section style={{ padding: "6rem 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.7rem", letterSpacing: "0.17em", textTransform: "uppercase", color: "#B8860B", fontWeight: 600, marginBottom: "0.75rem" }}>
            Voices of Change
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#111827",
              margin: "0 0 0.5rem",
            }}
          >
            Stories That{" "}
            <span style={{ fontStyle: "italic", fontWeight: 600, color: "#B8860B" }}>Inspire</span>
          </h2>
          <div style={{ width: "60px", height: "3px", background: "#B8860B", margin: "0 auto" }} />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {TESTIMONIALS.map(({ name, role, image, text, stars }) => (
            <div
              key={name}
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "1.75rem",
                border: "1px solid #f3f4f6",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.05)"; }}
            >
              {/* Quote mark */}
              <p style={{ fontSize: "2rem", color: "#fbbf24", opacity: 0.7, margin: "0 0 0.75rem", lineHeight: 1, fontFamily: "Georgia, serif" }}>"</p>

              <p style={{ fontFamily: "'Outfit',sans-serif", color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.75, fontStyle: "italic", marginBottom: "1.25rem" }}>
                {text}
              </p>

              {/* Stars */}
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {Array(stars).fill(0).map((_, i) => (
                  <Star key={i} size={14} style={{ fill: "#fbbf24", color: "#fbbf24" }} />
                ))}
              </div>

              {/* Author */}
              <div
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  borderTop: "1px solid #f3f4f6", paddingTop: "1rem",
                }}
              >
                <img
                  src={image} alt={name}
                  style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #fcd34d",
                  }}
                />
                <div>
                  <p style={{ fontFamily: "'Outfit',sans-serif", color: "#111827", fontWeight: 600, fontSize: "0.875rem", margin: 0 }}>{name}</p>
                  <p style={{ fontFamily: "'Outfit',sans-serif", color: "#b45309", fontSize: "0.75rem", margin: "1px 0 0" }}>{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}