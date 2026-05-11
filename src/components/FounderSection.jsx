export default function FounderSection() {
  const timelineItems = [
    {
      year: "1905 — Born · Darbhanga",
      text: "Member of Bihar Pradesh Congress Committee (1927–1934). Participated in the Civil Disobedience Movement; imprisoned in 1930–31.",
    },
    {
      year: "1942 — Quit India Movement",
      text: "Founding member of the Congress Socialist Party. Famously escaped from Hazaribagh Central Jail alongside Jayaprakash Narayan and Yogendra Shukla in November 1942.",
    },
    {
      year: "1949–52 — Kisan Leadership",
      text: "General Secretary of Hind Kisan Panchayat, Bihar. Left politics for spiritual life in 1952, becoming a lifelong devotee of Lord Jagannath.",
    },
    {
      year: "1989 — Passed Away",
      text: "Departed on 27 August 1989, leaving behind a legacy of courage, sacrifice, and spiritual devotion.",
    },
  ];

  const milestones = [
    { year: "1927", label: "Congress" },
    { year: "1930", label: "Imprisoned" },
    { year: "1942", label: "Quit India" },
    { year: "1952", label: "Spiritual" },
  ];

  return (
    <>
      <style>{`
        /* ── Pull Quote ── */
        .pq-section {
          position: relative;
          min-height: 260px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pq-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,15,35,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem;
        }
        .pq-text {
          text-align: center;
          max-width: 700px;
          width: 100%;
        }
        .pq-quote-mark {
          font-size: 2.2rem;
          color: #fbbf24;
          opacity: 0.6;
          font-family: Georgia, serif;
          margin-bottom: 0.4rem;
          line-height: 1;
        }
        .pq-body {
          font-family: 'Cormorant Garamond', serif;
          color: #fff;
          font-size: clamp(1rem, 2.5vw, 1.65rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.65;
          margin: 0;
        }
        .pq-attr {
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          margin-top: 1.1rem;
          margin-bottom: 0;
        }

        /* ── Main section ── */
        .founder-section {
          background: #0a0f23;
          padding: 4rem 0 3rem;
          width: 100%;
          box-sizing: border-box;
        }
        .founder-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          width: 100%;
        }

        /* ── Founder row ── */
        .founder-row {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 3.5rem;
          align-items: center;
          margin-bottom: 4.5rem;
        }

        /* ── Photo col ── */
        .photo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .photo-frame {
          position: relative;
          width: 240px;
          height: 290px;
          flex-shrink: 0;
        }
        .photo-ring-outer {
          position: absolute;
          inset: -22px;
          border-radius: 5%;
          border: 1px solid rgba(184,134,11,0.08);
        }
        .photo-ring-inner {
          position: absolute;
          inset: -10px;
          border-radius: 5%;
          border: 1px solid rgba(184,134,11,0.2);
        }
        .photo-img-wrap {
          width: 240px;
          height: 290px;
          border-radius: 5%;
          border: 3px solid #B8860B;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }
        .photo-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .photo-badge {
          margin-top: -14px;
          position: relative;
          z-index: 2;
        }
        .photo-badge span {
          display: inline-block;
          background: #B8860B;
          color: #0f172a;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.58rem;
          padding: 0.32rem 1.1rem;
          border-radius: 9999px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .milestones-row {
          display: flex;
          width: 100%;
          max-width: 260px;
          margin-top: 1.5rem;
          border: 1px solid rgba(184,134,11,0.2);
          border-radius: 10px;
          overflow: hidden;
        }
        .milestone-cell {
          flex: 1;
          padding: 0.7rem 0.4rem;
          text-align: center;
          background: rgba(184,134,11,0.05);
          border-right: 1px solid rgba(184,134,11,0.2);
          min-width: 0;
        }
        .milestone-cell:last-child { border-right: none; }
        .milestone-year {
          display: block;
          color: #fbbf24;
          font-size: 0.68rem;
          font-weight: 700;
        }
        .milestone-label {
          display: block;
          color: rgba(255,255,255,0.45);
          font-size: 0.5rem;
          letter-spacing: 0.05em;
          margin-top: 2px;
        }

        /* ── Text col ── */
        .text-col .tag {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .text-col h2 {
          font-family: 'Cormorant Garamond', serif;
          color: #fff;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 300;
          line-height: 1.15;
          margin-bottom: 1.75rem;
          margin-top: 0;
        }
        .timeline {
          border-left: 2px solid rgba(251,191,36,0.25);
          padding-left: 1.25rem;
        }
        .timeline-item {
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -1.47rem;
          top: 5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #B8860B;
          border: 2px solid #0a0f23;
          flex-shrink: 0;
        }
        .timeline-year {
          font-family: 'Outfit', sans-serif;
          color: #fbbf24;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          margin-bottom: 3px;
          margin-top: 0;
        }
        .timeline-text {
          font-family: 'Outfit', sans-serif;
          color: rgba(191,219,254,0.85);
          font-size: clamp(0.75rem, 1.5vw, 0.82rem);
          line-height: 1.7;
          margin-top: 0;
        }

        /* ── Divider ── */
        .section-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }
        .divider-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ── Trustee card ── */
        .trustee-border {
          padding: 2px;
          border-radius: 20px;
          background: linear-gradient(135deg,#7a5400 0%,#f5c842 40%,#f0a800 60%,#7a5400 100%);
        }
        .trustee-inner {
          background: #0d1428;
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 320px 1fr;
        }
        .trustee-left {
          background: linear-gradient(180deg,#111d3d 0%,#0a1228 100%);
          border-right: 1px solid rgba(184,134,11,0.2);
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }
        .trustee-photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 3px solid #B8860B;
          overflow: hidden;
          flex-shrink: 0;
        }
        .trustee-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .trustee-badge {
          background: rgba(184,134,11,0.12);
          border: 1px solid rgba(184,134,11,0.35);
          color: #fbbf24;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.28rem 0.9rem;
          border-radius: 9999px;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
        }
        .trustee-stats {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .trustee-stat-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.75rem;
          background: rgba(251,191,36,0.05);
          border-radius: 8px;
          border: 1px solid rgba(251,191,36,0.1);
        }
        .trustee-stat-icon { color: #fbbf24; font-size: 0.75rem; }
        .trustee-stat-label {
          color: rgba(191,219,254,0.7);
          font-size: clamp(0.65rem, 1.2vw, 0.7rem);
          font-family: 'Outfit', sans-serif;
        }
        .trustee-right {
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .trustee-tag {
          font-family: 'Outfit', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fbbf24;
          font-weight: 600;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }
        .trustee-name {
          font-family: 'Cormorant Garamond', serif;
          color: #fff;
          font-size: clamp(1.2rem, 2.5vw, 1.9rem);
          font-weight: 600;
          line-height: 1.15;
          margin-bottom: 0.3rem;
          margin-top: 0;
        }
        .trustee-title {
          font-family: 'Outfit', sans-serif;
          color: #fcd34d;
          font-size: clamp(0.7rem, 1.3vw, 0.76rem);
          margin-bottom: 1.1rem;
          margin-top: 0;
        }
        .trustee-divider {
          width: 40px;
          height: 2px;
          background: #B8860B;
          border-radius: 1px;
          margin-bottom: 1.1rem;
        }
        .trustee-bio {
          font-family: 'Outfit', sans-serif;
          color: rgba(191,219,254,0.8);
          font-size: clamp(0.78rem, 1.4vw, 0.84rem);
          line-height: 1.85;
          margin-bottom: 1.4rem;
          margin-top: 0;
        }
        .trustee-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .trustee-tag-pill {
          font-family: 'Outfit', sans-serif;
          font-size: 0.64rem;
          font-weight: 600;
          padding: 0.28rem 0.85rem;
          border-radius: 9999px;
          border: 1px solid rgba(251,191,36,0.3);
          color: #fbbf24;
          letter-spacing: 0.04em;
        }

        /* ── RESPONSIVE ── */

        /* Medium desktop */
        @media (max-width: 1100px) {
          .trustee-inner {
            grid-template-columns: 260px 1fr;
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .founder-row {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            margin-bottom: 3rem;
          }
          .photo-col {
            align-items: center;
          }
          .trustee-inner {
            grid-template-columns: 1fr;
          }
          .trustee-left {
            border-right: none;
            border-bottom: 1px solid rgba(184,134,11,0.2);
            padding: 2rem 1.5rem;
          }
          .trustee-stats {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .trustee-stat-item {
            flex: 1;
            min-width: 140px;
            justify-content: center;
          }
          .trustee-right {
            padding: 2rem 1.5rem;
          }
        }

        /* Small tablet */
        @media (max-width: 680px) {
          .founder-wrapper { padding: 0 1.25rem; }
          .founder-section { padding: 3rem 0 2rem; }
          .photo-frame {
            width: 200px;
            height: 245px;
          }
          .photo-img-wrap {
            width: 200px;
            height: 245px;
          }
          .milestones-row { max-width: 220px; }
          .milestone-year { font-size: 0.6rem; }
          .milestone-label { font-size: 0.45rem; }
          .trustee-border { border-radius: 16px; }
          .trustee-inner { border-radius: 14px; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .founder-wrapper { padding: 0 1rem; }
          .founder-section { padding: 2.5rem 0 1.5rem; }
          .founder-row { gap: 2rem; margin-bottom: 2.5rem; }
          .photo-frame {
            width: 180px;
            height: 220px;
          }
          .photo-img-wrap {
            width: 180px;
            height: 220px;
          }
          .photo-ring-outer { inset: -14px; }
          .photo-ring-inner { inset: -7px; }
          .milestones-row { max-width: 200px; }
          .milestone-cell { padding: 0.55rem 0.2rem; }
          .trustee-left { padding: 1.5rem 1rem; }
          .trustee-right { padding: 1.5rem 1rem; }
          .trustee-photo { width: 130px; height: 130px; }
          .trustee-stat-item { min-width: 100px; }
          .trustee-border { border-radius: 14px; }
          .trustee-inner { border-radius: 12px; }
          .section-divider { margin-bottom: 2rem; }
        }

        /* Very small */
        @media (max-width: 360px) {
          .founder-wrapper { padding: 0 0.75rem; }
          .photo-frame { width: 160px; height: 195px; }
          .photo-img-wrap { width: 160px; height: 195px; }
          .milestones-row { max-width: 180px; }
          .trustee-stats { flex-direction: column; }
          .trustee-stat-item { min-width: unset; }
        }
      `}</style>

      {/* ── MAIN SECTION ── */}
      <section className="founder-section">
        <div className="founder-wrapper">

          {/* FOUNDER ROW */}
          <div className="founder-row">

            {/* Photo + Milestones */}
            <div className="photo-col">
              <div className="photo-frame">
                <div className="photo-ring-outer" />
                <div className="photo-ring-inner" />
                <div className="photo-img-wrap">
                  <img src="/image/img1.jpeg" alt="Ramnandan Mishra" />
                </div>
              </div>
              <div className="photo-badge">
                <span>Freedom Fighter · 1905–1989</span>
              </div>
              <div className="milestones-row">
                {milestones.map((m) => (
                  <div key={m.year} className="milestone-cell">
                    <span className="milestone-year">{m.year}</span>
                    <span className="milestone-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text + Timeline */}
            <div className="text-col">
              <span className="tag">Our Inspiration</span>
              <h2>
                Shri{" "}
                <em style={{ fontStyle: "italic", fontWeight: 600, color: "#fbbf24" }}>
                  Ramnandan Mishra
                </em>
              </h2>
              <div className="timeline">
                {timelineItems.map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item"
                    style={{ paddingBottom: i < timelineItems.length - 1 ? "1.1rem" : 0 }}
                  >
                    <div className="timeline-dot" />
                    <p className="timeline-year">{item.year}</p>
                    <p className="timeline-text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="section-divider">
            <div className="divider-line" />
            <span className="divider-text">Leadership</span>
            <div className="divider-line" />
          </div>

          {/* TRUSTEE CARD */}
          <div className="trustee-border">
            <div className="trustee-inner">

              {/* Left panel */}
              <div className="trustee-left">
                <div className="trustee-photo">
                  <img src="/image/trustee-image.jpeg" alt="Dr. Prof. Abhaya Raghava Mishra" />
                </div>
                <span className="trustee-badge">Executive Trustee</span>
                <div className="trustee-stats">
                  {["Academic Leadership", "Community Welfare", "Women Empowerment"].map((s) => (
                    <div key={s} className="trustee-stat-item">
                      <span className="trustee-stat-icon">✦</span>
                      <span className="trustee-stat-label">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="trustee-right">
                <p className="trustee-tag">Meet Our Leadership</p>
                <h3 className="trustee-name">Dr. Prof. Abhaya Raghava Mishra</h3>
                <p className="trustee-title">Executive Trustee, Ramnandan Mishra Mission Trust</p>
                <div className="trustee-divider" />
                <p className="trustee-bio">
                  Dr. Prof. Abhaya Raghava Mishra leads the trust's vision with academic rigour and deep social commitment. As Executive Trustee, he steers the organisation's programs in education, community welfare, and women empowerment — carrying forward the ideals of Shri Ramnandan Mishra for a new generation.
                </p>
                <div className="trustee-tags">
                  {["Academic", "Social Reformer", "Community Leader"].map((tag) => (
                    <span key={tag} className="trustee-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}