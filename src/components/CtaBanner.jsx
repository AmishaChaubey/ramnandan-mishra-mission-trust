import { IndianRupee } from "lucide-react";

export default function CtaBanner({ onDonate }) {
  return (
    <>
      <style>{`
        .cta-section {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .cta-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.92) 0%,
    rgba(0, 0, 0, 0.82) 25%,
    rgba(0, 0, 0, 0.55) 55%,
    rgba(0, 0, 0, 0.18) 100%
  );
}

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          width: 100%;
        }

        .cta-inner {
          max-width: 560px;
          width: 100%;
        }

        .cta-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          margin-bottom: 0.75rem;
          margin-top: 0;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', serif;
          color: white;
          font-size: clamp(1.7rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 1.25rem;
          margin-top: 0;
        }

        .cta-desc {
          font-family: 'Outfit', sans-serif;
          color: #cbd5e1;
          font-size: clamp(0.82rem, 1.8vw, 0.95rem);
          line-height: 1.8;
          margin-bottom: 2.5rem;
          margin-top: 0;
        }

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
        }

        .cta-btn-primary {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 2vw, 1rem);
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.9rem 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
          white-space: nowrap;
          box-shadow: 0 2px 14px rgba(184,134,11,0.3);
        }
        .cta-btn-primary:hover {
          background: #9a7209;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(184,134,11,0.4);
        }

        .cta-btn-outline {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 2vw, 1rem);
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.8);
          border-radius: 9999px;
          padding: 0.9rem 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
          white-space: nowrap;
        }
        .cta-btn-outline:hover {
          background: white;
          color: #1e3a8a;
          border-color: white;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .cta-section { padding: 5rem 0; }
          .cta-overlay {
            background: linear-gradient(
              to bottom,
              rgba(15,23,42,0.93) 0%,
              rgba(30,58,138,0.82) 55%,
              rgba(15,23,42,0.78) 100%
            );
          }
          .cta-inner { max-width: 100%; }
          .cta-content { padding: 0 1.25rem; }
        }

        /* Small tablet */
        @media (max-width: 680px) {
          .cta-section { padding: 4.5rem 0; }
          .cta-desc { margin-bottom: 2rem; }
        }

        /* Mobile */
        @media (max-width: 540px) {
          .cta-section { padding: 4rem 0; }
          .cta-content { padding: 0 1rem; }
          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          .cta-btn-primary,
          .cta-btn-outline {
            width: 100%;
            padding: 0.9rem 1.5rem;
          }
          .cta-desc { margin-bottom: 1.75rem; }
        }

        /* Very small */
        @media (max-width: 360px) {
          .cta-section { padding: 3rem 0; }
          .cta-content { padding: 0 0.75rem; }
          .cta-tag { font-size: 0.6rem; letter-spacing: 0.12em; }
        }
      `}</style>

      <section className="cta-section">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1800&q=85&fit=crop"
          alt="CTA background"
          className="cta-bg"
        />
        <div className="cta-overlay" />

        <div className="cta-content">
          <div className="cta-inner">
            <p className="cta-tag">Make A Difference</p>

            <h2 className="cta-heading">
              Your Donation{" "}
              <span style={{ fontStyle: "italic", fontWeight: 700, color: "#fbbf24" }}>
                Transforms
              </span>{" "}
              Lives
            </h2>

            <p className="cta-desc">
              Every rupee contributes directly toward education, welfare, and community
              upliftment in Bihar. Fully transparent. Government registered. PAN-certified.
            </p>

            <div className="cta-buttons">
           

              <a href="#contact" className="cta-btn-outline">
                  Volunteer With Us
 </a>
              <button className="">
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}