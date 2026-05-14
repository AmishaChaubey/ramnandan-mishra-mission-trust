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

        /* Wrapper holds extra space so badges don't overlap the image */
        .about-image-wrapper {
          position: relative;
          padding: 3rem 1.5rem 2.5rem 1.5rem;
        }

        .about-image {
          border-radius: 1rem;
          width: 100%;
          height: 460px;
          object-fit: cover;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          display: block;
          position: relative;
          z-index: 1;
        }

        /* Badge sits OUTSIDE the image, inside the padded wrapper */
        .founder-badge {
          position: absolute;
          bottom: 0;
          right: 0.5rem;
          background: white;
          border-radius: 1rem;
          padding: 0.85rem 1rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.14);
          border: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          max-width: 190px;
          z-index: 3;
        }

        .est-badge {
          position: absolute;
          top: 0;
          left: 0.5rem;
          background: #0f172a;
          border-radius: 1rem;
          padding: 0.85rem 1.25rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
          z-index: 3;
        }

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
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-image-wrapper {
            max-width: 580px;
            margin: 0 auto;
            width: 100%;
            padding: 3rem 1.5rem 2.5rem 1.5rem;
          }

          .about-image {
            height: 400px;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .about-section {
            padding: 3.5rem 0;
          }

          .about-container {
            padding: 0 1rem;
            gap: 2rem;
          }

          .about-image-wrapper {
            padding: 2.75rem 1rem 2.25rem 1rem;
            max-width: 100%;
          }

          /* CRITICAL: enough height so image is fully visible */
          .about-image {
            height: 240px;
          }

          .founder-badge {
            bottom: 0;
            right: 0;
            max-width: 165px;
            padding: 0.65rem 0.75rem;
            gap: 0.5rem;
            border-radius: 0.75rem;
          }

          .est-badge {
            top: 0;
            left: 0;
            padding: 0.65rem 0.9rem;
            border-radius: 0.75rem;
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
          .about-image-wrapper {
            padding: 2.5rem 0.75rem 2rem 0.75rem;
          }

          .about-image {
            height: 210px;
          }

          .founder-badge {
            max-width: 150px;
            font-size: 0.78rem;
          }

          .est-badge {
            padding: 0.55rem 0.75rem;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-container">

          {/* Left — image + floating badges */}
          <div className="about-image-wrapper">
            <img
              src="/image/about-img.jpeg"
              alt="Activity"
              className="about-image"
            />

            {/* Founder badge — sits in bottom padding zone */}
            <div className="founder-badge">
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", color: "#111827", fontWeight: 600, fontSize: "0.88rem", margin: 0, lineHeight: 1.2 }}>
                  Ramnandan Mishra
                </p>
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#b45309", fontSize: "0.68rem", margin: "2px 0 0" }}>Freedom Fighter</p>
                <p style={{ fontFamily: "'Outfit',sans-serif", color: "#9ca3af", fontSize: "0.65rem", margin: 0 }}>1906 – 1989</p>
              </div>
            </div>

            {/* Est. badge — sits in top padding zone */}
            <div className="est-badge">
              <p style={{ fontFamily: "'Cormorant Garamond',serif", color: "#fbbf24", fontSize: "1rem", fontWeight: 700, margin: 0, lineHeight: 1 }}>
                Established in 1995.
              </p>
              <p style={{ fontFamily: "'Outfit',sans-serif", color: "white", fontSize: "0.68rem", margin: "4px 0 0" }}>
                Darbhanga, Bihar
              </p>
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