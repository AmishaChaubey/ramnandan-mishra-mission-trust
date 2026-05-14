import { CheckCircle } from "lucide-react";
import { PAN, DARPAN, BANK, BRANCH } from "./Constants";

export default function About({ onDonate }) {
  const checks = [
    `PAN: ${PAN}`,
    `DARPAN: ${DARPAN}`,
    "Registered in Bihar (1995)",
    `Bank: ${BANK}, ${BRANCH}`,
  ];

  return (
    <>
      <style>{`
        .about-section {
          padding: 8rem 0;
          background: white;
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* ── Image column ── */
        .about-image-col {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Est badge — normal flow on mobile, absolute on desktop */
        .est-badge {
          background: #0f172a;
          border-radius: 1rem;
          padding: 0.85rem 1.25rem;
          display: inline-block;
          align-self: flex-start;
          margin-bottom: 0.75rem;
        }

        .about-image {
          border-radius: 1rem;
          width: 100%;
          height: 460px;
          object-fit: cover;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          display: block;
          flex-shrink: 0;
        }

        /* Founder badge — normal flow on mobile, absolute on desktop */
        .founder-badge {
          background: white;
          border-radius: 1rem;
          padding: 0.85rem 1rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.14);
          border: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          align-self: flex-end;
          margin-top: 0.75rem;
          max-width: 210px;
        }

        /* ── Desktop: overlap badges on image ── */
        @media (min-width: 901px) {
          .about-image-col {
            position: relative;
            display: block;
          }

          .est-badge {
            position: absolute;
            top: -3.5rem;
            left: -1rem;
            margin-bottom: 0;
            z-index: 3;
          }

          .about-image {
            position: relative;
            z-index: 1;
          }

          .founder-badge {
            position: absolute;
            bottom: -1.5rem;
            right: -1rem;
            margin-top: 0;
            z-index: 3;
          }
        }

        /* ── Text column ── */
        .checks-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .donate-btn {
          font-weight: 600;
          font-size: 0.9rem;
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.9rem 2rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s, transform 0.25s;
        }
        .donate-btn:hover {
          background: #9a7209;
          transform: translateY(-1px);
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .about-section {
            padding: 5rem 0;
          }
          .about-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .about-image-col {
            max-width: 580px;
            margin: 0 auto;
            width: 100%;
          }
          .about-image {
            height: 380px;
          }
          .founder-badge {
            max-width: 220px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .about-section {
            padding: 3rem 0;
          }
          .about-container {
            padding: 0 1rem;
            gap: 2rem;
          }
          .about-image-col {
            max-width: 100%;
          }
          .about-image {
            height: 220px;
            border-radius: 0.75rem;
          }
          .est-badge {
            padding: 0.65rem 1rem;
            border-radius: 0.75rem;
            margin-bottom: 0.6rem;
          }
          .founder-badge {
            padding: 0.65rem 0.85rem;
            gap: 0.5rem;
            border-radius: 0.75rem;
            margin-top: 0.6rem;
            max-width: 100%;
            align-self: stretch;
          }
          .checks-grid {
            grid-template-columns: 1fr;
            gap: 0.55rem;
          }
          .donate-btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── Very small ── */
        @media (max-width: 380px) {
          .about-image {
            height: 185px;
          }
          .about-section {
            padding: 2.5rem 0;
          }
          .about-container {
            padding: 0 0.75rem;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-container">

          {/* Left — image column */}
          <div className="about-image-col">

            {/* Est. badge */}
            <div className="est-badge">
              <p style={{ fontFamily: "'Cormorant Garamond',serif", color: "#fbbf24", fontSize: "1rem", fontWeight: 700, margin: 0, lineHeight: 1 }}>
                Established in 1995.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", color: "white", fontSize: "0.68rem", margin: "4px 0 0" }}>
                Darbhanga, Bihar
              </p>
            </div>

            {/* Main image */}
            <img
              src="/image/about-img.jpeg"
              alt="Activity"
              className="about-image"
            />

            {/* Founder badge */}
            <div className="founder-badge">
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", color: "#111827", fontWeight: 600, fontSize: "0.88rem", margin: 0, lineHeight: 1.2 }}>
                  Ramnandan Mishra
                </p>
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#b45309", fontSize: "0.68rem", margin: "2px 0 0" }}>
                  Freedom Fighter
                </p>
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#9ca3af", fontSize: "0.65rem", margin: 0 }}>
                  1906 – 1989
                </p>
              </div>
            </div>

          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.7rem", letterSpacing: "0.17em", textTransform: "uppercase", color: "#B8860B", fontWeight: 600, marginBottom: "0.75rem" }}>
              About The Trust
            </p>

            <h2 style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#111827",
              lineHeight: 1.2,
              margin: "0 0 0.5rem",
            }}>
              In Memory of a{" "}
              <span style={{ fontStyle: "italic", fontWeight: 600, color: "#B8860B" }}>
                True Patriot
              </span>
            </h2>
            <div style={{ width: "60px", height: "3px", background: "#B8860B", marginBottom: "1.5rem" }} />

            <p style={{ fontFamily: "'Outfit',sans-serif", color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              Ramnandan Mishra Mission Trust is a registered NGO based in Darbhanga, Bihar, established in honour of freedom fighter Shri Ramnandan Mishra — who participated in the Civil Disobedience Movement, the Quit India Movement, and famously escaped from Hazaribagh Central Jail alongside Jayaprakash Narayan in 1942.
            </p>
            <p style={{ fontFamily: "'Outfit',sans-serif", color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              The trust carries forward his values of service, education, and social justice — working for the welfare of underprivileged communities across Bihar through education, skill development, and community health programs.
            </p>

            <div className="checks-grid">
              {checks.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <CheckCircle size={16} style={{ color: "#059669", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.82rem", color: "#374151" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}