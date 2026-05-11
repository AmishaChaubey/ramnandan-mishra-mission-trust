// Hero.jsx
import { Heart, ArrowRight } from "lucide-react";

export default function Hero({ onDonate }) {
  return (
    <section id="home"
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

        .hero-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          margin-bottom: 1.25rem;
          text-align: left;
        }

        .hero-headline {
          font-family: 'Cormorant Garamond', serif;
          color: white;
          font-size: clamp(2rem, 5vw, 5.5rem);
          font-weight: 300;
          line-height: 1;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 40px rgba(0,0,0,0.5);
          text-align: left;
        }

        .hero-sub {
          font-family: 'Outfit', sans-serif;
          color: #e2e8f0;
          font-size: clamp(0.88rem, 2vw, 1.1rem);
          max-width: 600px;
          margin: 0 0 2.5rem 0;
          line-height: 1.75;
          text-align: left;
        }

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
        }
        .hero-btn-secondary:hover {
          background: white;
          color: #1e3a8a;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: flex-start;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 700px;
          margin: 0;
          padding: 3rem 3rem 4rem 5rem;
          text-align: left;
          width: 100%;
          box-sizing: border-box;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .hero-content {
            padding: 7rem 2rem 3.5rem 2.5rem;
          }
          .hero-tag {
            font-size: 0.62rem;
            letter-spacing: 0.16em;
          }
          .hero-sub {
            max-width: 100%;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .hero-content {
            padding: 6.5rem 1.25rem 3rem 1.25rem;
          }
          .hero-tag {
            font-size: 0.58rem;
            letter-spacing: 0.12em;
            margin-bottom: 1rem;
          }
          .hero-sub {
            margin-bottom: 2rem;
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
            max-width: 320px;
            justify-content: center;
            padding: 0.85rem 1.5rem;
          }
        }

        /* Very small screens */
        @media (max-width: 360px) {
          .hero-content {
            padding: 6rem 1rem 2.5rem 1rem;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            max-width: 100%;
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
        {/* Tag */}
        <p className="hero-tag">
          Ramnandan Mishra Mission Trust — Darbhanga, Bihar
        </p>

        {/* Headline */}
        <h1 className="hero-headline">
          Honouring a Legacy,
          
          <span style={{ fontStyle: "italic", fontWeight: 600, color: "#F5C842" }}>
            Building Tomorrow
          </span>
        </h1>

        {/* Sub-text */}
        <p className="hero-sub">
          A registered trust dedicated to education, community welfare, and social
          upliftment — inspired by the life and values of freedom fighter Ramnandan
          Mishra (1905–1989).
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <button className="hero-btn-primary" onClick={onDonate}>
            Donate Now <Heart size={16} />
          </button>
     <a href="#about" className="hero-btn-secondary">
  Learn Our Mission <ArrowRight size={16} />
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