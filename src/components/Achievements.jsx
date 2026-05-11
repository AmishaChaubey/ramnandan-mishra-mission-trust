import { CheckCircle, Building2 } from "lucide-react";
import { ACHIEVEMENTS, BANK, BRANCH, ACCOUNT, IFSC } from "./Constants";

export default function Achievements() {
  return (
    <>
      <style>{`
        .ach-section {
          padding: 7rem 0;
          background: white;
        }

        .ach-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .ach-image {
          border-radius: 1rem;
          width: 100%;
          height: 500px;
          object-fit: cover;
          box-shadow: 0 25px 60px rgba(0,0,0,0.18);
          display: block;
        }

        .ach-image-wrapper {
          position: relative;
        }

        .ach-bank-overlay {
          position: absolute;
          bottom: 1.25rem;
          left: 1.25rem;
          right: 1.25rem;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(8px);
          border-radius: 0.875rem;
          padding: 1rem 1.25rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ach-bank-icon {
          width: 44px;
          height: 44px;
          background: #fef3c7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ach-bank-name {
          font-family: 'Cormorant Garamond', serif;
          color: #111827;
          font-weight: 600;
          font-size: 0.95rem;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ach-bank-details {
          font-family: 'Outfit', sans-serif;
          color: #9ca3af;
          font-size: 0.72rem;
          margin: 2px 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ach-item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #f3f4f6;
          transition: background 0.2s, transform 0.2s;
          cursor: default;
        }

        .ach-item:hover {
          background: #fffbeb;
          transform: translateX(4px);
        }

        /* Tablet */
        @media (max-width: 900px) {
          .ach-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .ach-image-wrapper {
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }

          .ach-image {
            height: 380px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .ach-section {
            padding: 3.5rem 0;
          }

          .ach-container {
            padding: 0 1rem;
            gap: 2.5rem;
          }

          .ach-image {
            height: 260px;
          }

          .ach-bank-overlay {
            left: 0.75rem;
            right: 0.75rem;
            bottom: 0.75rem;
            padding: 0.75rem 1rem;
            gap: 0.5rem;
          }

          .ach-bank-icon {
            width: 36px;
            height: 36px;
          }

          .ach-bank-name {
            font-size: 0.82rem;
          }

          .ach-bank-details {
            font-size: 0.65rem;
          }

          .ach-item {
            padding: 0.75rem 0.875rem;
          }
        }

        /* Very small */
        @media (max-width: 360px) {
          .ach-bank-overlay {
            flex-direction: column;
            align-items: flex-start;
          }

          .ach-bank-name,
          .ach-bank-details {
            white-space: normal;
            word-break: break-all;
          }
        }
      `}</style>

      <section className="ach-section" id="achievement">
        <div className="ach-container">

          {/* Left — list */}
          <div>
            <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: "0.7rem", letterSpacing: "0.17em", textTransform: "uppercase", color: "#B8860B", fontWeight: 600, marginBottom: "0.75rem" }}>
              Recognition & Credentials
            </p>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 300,
                color: "#111827",
                margin: "0 0 0.5rem",
              }}
            >
              Our{" "}
              <span style={{ fontStyle: "italic", fontWeight: 600, color: "#B8860B" }}>Achievements</span>
            </h2>
            <div style={{ width: "60px", height: "3px", background: "#B8860B", marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'Outfit',sans-serif", color: "#6b7280", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Fully registered and government-recognised, the trust operates with complete transparency and commitment to its founding mission.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {ACHIEVEMENTS.map(item => (
                <div key={item} className="ach-item">
                  <CheckCircle size={18} style={{ color: "#b45309", flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontFamily: "'Outfit',sans-serif", color: "#374151", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="ach-image-wrapper">
            <img
              src="https://i.pinimg.com/1200x/7e/0d/45/7e0d45b524c28d8fe7d22e353fe32231.jpg"
              alt="Achievement"
              className="ach-image"
            />
            <div className="ach-bank-overlay">
              <div className="ach-bank-icon">
                <Building2 size={20} style={{ color: "#92400e" }} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <p className="ach-bank-name">{BANK} — {BRANCH}</p>
                <p className="ach-bank-details">A/C: {ACCOUNT} | IFSC: {IFSC}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

        <section className="pq-section" id="founder">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1800&q=85&fit=crop"
          alt="Education"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="pq-overlay">
          <div className="pq-text">
            <p className="pq-quote-mark">"</p>
            <h2 className="pq-body">
              He left politics for spiritual pursuits in 1952 and spent his remaining life as a devotee of Lord Jagannath, embodying selfless service.
            </h2>
            <p className="pq-attr">— About Ramnandan Mishra</p>
          </div>
        </div>
      </section>
    </>
  );
}