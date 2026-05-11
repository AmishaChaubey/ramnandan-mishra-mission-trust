import { BookOpen, Lightbulb, Globe, Heart, Target, Award } from "lucide-react";
import { PROGRAMS } from "./constants";

const ICON_MAP = { BookOpen, Lightbulb, Globe, Heart, Target, Award };

const GRAD_MAP = {
  "from-amber-500 to-orange-600":  "linear-gradient(135deg,#f59e0b,#ea580c)",
  "from-blue-500 to-indigo-600":   "linear-gradient(135deg,#3b82f6,#4f46e5)",
  "from-emerald-500 to-teal-600":  "linear-gradient(135deg,#10b981,#0d9488)",
  "from-rose-500 to-pink-600":     "linear-gradient(135deg,#f43f5e,#db2777)",
  "from-violet-500 to-purple-600": "linear-gradient(135deg,#8b5cf6,#9333ea)",
  "from-cyan-500 to-sky-600":      "linear-gradient(135deg,#06b6d4,#0284c7)",
};

export default function Programs() {
  return (
    <section style={{ padding: "6rem 0", background: "#f9fafb", width: "100%", boxSizing: "border-box" }}>
      <style>{`
        .programs-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          width: 100%;
        }

        .programs-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .programs-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          color: #B8860B;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .programs-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 300;
          color: #111827;
          margin: 0 0 0.5rem;
          line-height: 1.2;
        }

        .programs-divider {
          width: 60px;
          height: 3px;
          background: #B8860B;
          margin: 0 auto 1.5rem;
        }

        .programs-subtitle {
          font-family: 'Outfit', sans-serif;
          color: #6b7280;
          font-size: clamp(0.85rem, 1.8vw, 0.95rem);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Grid ── */
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        /* ── Card ── */
        .program-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid #f3f4f6;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 1px 4px rgba(0,0,0,0.05);
          box-sizing: border-box;
          width: 100%;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
        }

        .program-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .program-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.75rem;
          margin-top: 0;
        }

        .program-card-desc {
          font-family: 'Outfit', sans-serif;
          color: #6b7280;
          font-size: clamp(0.8rem, 1.5vw, 0.85rem);
          line-height: 1.7;
          margin-bottom: 0;
          margin-top: 0;
        }

        /* Tablet — 2 columns */
        @media (max-width: 1024px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        /* Small tablet — 2 columns tighter */
        @media (max-width: 768px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
          .programs-wrapper {
            padding: 0 1.25rem;
          }
          .program-card {
            padding: 1.5rem;
          }
          .programs-header {
            margin-bottom: 2.5rem;
          }
        }

        /* Mobile — 1 column */
        @media (max-width: 540px) {
          .programs-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .programs-wrapper {
            padding: 0 1rem;
          }
          .program-card {
            padding: 1.25rem;
          }
          .program-icon-wrap {
            width: 48px;
            height: 48px;
            margin-bottom: 1.1rem;
          }
        }

        /* Very small */
        @media (max-width: 360px) {
          .programs-wrapper {
            padding: 0 0.75rem;
          }
          .program-card {
            padding: 1rem;
            border-radius: 0.75rem;
          }
        }
      `}</style>

      <div className="programs-wrapper" id="programs">

        {/* Header */}
        <div className="programs-header">
          <p className="programs-tag">What We Do</p>
          <h2 className="programs-title">
            Our{" "}
            <span style={{ fontStyle: "italic", fontWeight: 600, color: "#B8860B" }}>
              Programs
            </span>
            {" "}& Initiatives
          </h2>
          <div className="programs-divider" />
          <p className="programs-subtitle">
            Rooted in the spirit of Ramnandan Mishra, our programs address education,
            livelihood and social welfare at the grassroots level.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="programs-grid">
          {PROGRAMS.map(({ title, desc, color, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <div key={title} className="program-card">
                {/* Icon */}
                <div
                  className="program-icon-wrap"
                  style={{ background: GRAD_MAP[color] || "#B8860B" }}
                >
                  {Icon && <Icon size={24} color="white" />}
                </div>

                <h3 className="program-card-title">{title}</h3>
                <p className="program-card-desc">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}