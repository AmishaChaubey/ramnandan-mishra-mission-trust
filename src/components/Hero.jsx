// Hero.jsx
import { Heart, ArrowRight } from "lucide-react";

export default function Hero({ onDonate }) {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(-10px); }
        }

        /* ── TAG ── */
        .hero-tag {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(0.78rem, 2.2vw, 1.15rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 800;
          margin-bottom: 1.1rem;
          text-align: left;
          text-shadow: 0 2px 12px rgba(251, 191, 36, 0.35);
          line-height: 1.5;
        }

        /* ── HEADLINE ── */
        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          color: white;
          font-size: clamp(2rem, 6.5vw, 4.5rem);
          font-weight: 300;
          line-height: 1.05;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 40px rgba(0,0,0,0.5);
          text-align: left;
          word-break: break-word;
          hyphens: auto;
        }

        /* ── SUB-TEXT ── */
        .hero-sub {
          font-family: 'Outfit', sans-serif;
          color: #e2e8f0;
          font-size: clamp(0.88rem, 2.2vw, 1.1rem);
          max-width: 600px;
          margin: 0 0 2.5rem 0;
          line-height: 1.75;
          text-align: left;
        }

        /* ── BUTTONS ── */
        .hero-btn-primary {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 2vw, 1rem);
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.85rem 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s, transform 0.25s;
          white-space: nowrap;
        }
        .hero-btn-primary:hover {
          background: #9a7209;
          transform: translateY(-2px);
        }

        .hero-btn-secondary {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: clamp(0.85rem, 2vw, 1rem);
          background: transparent;
          color: white;
          border: 2px solid white;
          border-radius: 9999px;
          padding: 0.85rem 2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s;
          white-space: nowrap;
          text-decoration: none;
        }
        .hero-btn-secondary:hover {
          background: white;
          color: #1e3a8a;
        }

        /* ── CTA ROW ── */
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: flex-start;
        }

        /* ── CONTENT WRAPPER ── */
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 760px;
          padding: 1.5rem 3rem 3rem 5rem;
          text-align: left;
          width: 100%;
          box-sizing: border-box;
        }

        /* ── TABLET  (≤ 1024px) ── */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 3rem 2.5rem 3rem 3rem;
            max-width: 680px;
          }
          .hero-headline {
            font-size: clamp(2rem, 5.5vw, 3.8rem);
          }
        }

        /* ── SMALL TABLET  (≤ 768px) ── */
        @media (max-width: 768px) {
          .hero-content {
            padding: 3rem 1.75rem 2.5rem 1.75rem;
            max-width: 100%;
          }
          .hero-headline {
            font-size: clamp(2.1rem, 6vw, 3.6rem);
            line-height: 1.08;
          }
          .hero-tag {
            font-size: clamp(0.72rem, 2vw, 1rem);
            letter-spacing: 0.14em;
          }
          .hero-sub {
            max-width: 100%;
          }
        }

        /* ── MOBILE  (≤ 480px) ── */
        @media (max-width: 480px) {
          .hero-content {
            padding: 1rem 1.25rem 2rem 1.25rem;
          }
          .hero-headline {
            font-size: clamp(2rem, 8.5vw, 2.8rem);
            line-height: 1.1;
            margin-bottom: 0.9rem;
          }
          .hero-tag {
            font-size: 0.75rem;
            letter-spacing: 0.1em;
            margin-bottom: 0.75rem;
          }
          .hero-sub {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
            line-height: 1.65;
            max-width: 100%;
          }
          .hero-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            max-width: 340px;
            justify-content: center;
            padding: 0.85rem 1.5rem;
          }
        }

        /* ── VERY SMALL  (≤ 360px) ── */
        @media (max-width: 360px) {
          .hero-content {
            padding: 0.75rem 1rem 1.75rem 1rem;
          }
          .hero-headline {
            font-size: clamp(1.8rem, 9vw, 2.4rem);
            line-height: 1.12;
            margin-bottom: 0.75rem;
          }
          .hero-tag {
            font-size: 0.68rem;
            letter-spacing: 0.08em;
            margin-bottom: 0.6rem;
          }
          .hero-sub {
            font-size: 0.82rem;
            margin-bottom: 1.25rem;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            max-width: 100%;
          }
        }

        /* ── LANDSCAPE PHONES ── */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-content {
            padding-top: 4rem;
            padding-bottom: 1.5rem;
          }
          .hero-headline {
            font-size: clamp(1.8rem, 5vw, 3rem);
            margin-bottom: 0.75rem;
          }
          .hero-sub {
            margin-bottom: 1rem;
          }
        }
      `}</style>

      {/* Background Image */}
      <img
        src="/image/banner2.png"
        alt="Students"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Ramnandan Mishra Mission Trust —{" "}
          <span style={{ fontStyle: "italic", fontWeight: 600, color: "#F5C842" }}>
            Darbhanga, Bihar
          </span>
        </h1>

        <p className="hero-tag">Honouring a Legacy, Building Tomorrow</p>

        <p className="hero-sub">
          A registered trust dedicated to education, community welfare, and social
          upliftment — inspired by the life and values of freedom fighter Ramnandan
          Mishra (1905–1989).
        </p>

        <div className="hero-cta">
          <a href="#contact">
            <button className="hero-btn-primary" onClick={onDonate}>
              Contact Now <Heart size={16} />
            </button>
          </a>
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          animation: "bounce 2s infinite",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "rgba(255,255,255,0.3)",
            borderRadius: "9999px",
          }}
        />
        <div
          style={{
            width: "1px",
            height: "10px",
            background: "#fbbf24",
            borderRadius: "9999px",
          }}
        />
      </div>
    </section>
  );
}