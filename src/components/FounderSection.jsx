export default function FounderSection() {
  const timelineItems = [
    {
      year: "1906",
      label: "Born · Darbhanga",
      icon: "✦",
      accent: "#f5c842",
      text: "Born in Darbhanga, he imbibed values of courage from a young age. Member of Bihar Pradesh Congress Committee (1927–1934).",
    },
    {
      year: "1930–31",
      label: "Civil Disobedience",
      icon: "⚑",
      accent: "#f97316",
      text: "Participated in Gandhi's Civil Disobedience Movement. Arrested and imprisoned in 1930–31, emerging more resolute than ever.",
    },
    {
      year: "1942",
      label: "Quit India Movement",
      icon: "⚔",
      accent: "#f43f5e",
      text: "Dramatically escaped from Hazaribagh Central Jail alongside Jayaprakash Narayan and Yogendra Shukla in November 1942.",
    },
    {
      year: "1949–52",
      label: "Kisan Leadership",
      icon: "❧",
      accent: "#a78bfa",
      text: "General Secretary of Hind Kisan Panchayat, Bihar. Championed farmers' rights and gave voice to rural communities.",
    },
    {
      year: "1952",
      label: "Spiritual Awakening",
      icon: "☸",
      accent: "#38bdf8",
      text: "Renounced politics and became a lifelong devotee of Lord Jagannath — a soul at peace after a lifetime of sacrifice.",
    },
    {
      year: "1989",
      label: "Passed Away",
      icon: "✿",
      accent: "#f43f5e",
      text: "Departed on 27 August 1989, leaving behind an eternal legacy of courage, sacrifice, and spiritual devotion that continues to inspire generations.",
    },
  ];

  const milestones = [
    { year: "1927", label: "Congress" },
    { year: "1930", label: "Imprisoned" },
    { year: "1942", label: "Quit India" },
    { year: "1952", label: "Spiritual" },
  ];

  const trustees = [
    {
      name: "Dr. Vidya Nath Jha",
      role: "Trustee",
      title: "Principal, M L S M College Darbhanga",
      image: "/image/img6.jpeg",
      bio: "Academic leader steering trust programs in education and community welfare.",
      tags: ["Academic", "Social Reformer", "Community Leader"],
    },
    {
      name: "Dr. Prof. Binod Kumar",
      role: "Trustee",
      title: "Asst. Professor, M G College Darbhanga",
      image: "/image/img2.jpeg",
      bio: "Drives grassroots education and rural outreach initiatives across Bihar.",
      tags: ["Education", "Rural Welfare", "Leadership"],
    },
    {
      name: "Dr. Paras Mani Singh",
      role: "Trustee",
      title: "Teacher, Govt. Higher Secondary School, Benipur Darbhanga",
      image: "/image/img3.jpeg",
      bio: "Oversees trust administration and ensures ground-level programs run seamlessly.",
      tags: ["Administration", "Outreach", "Strategy"],
    },
    {
      name: "Ghanshyam Kumar Jha",
      role: "Trustee",
      title: "Asst. Professor, Oriental College of Education Darbhanga",
      image: "/image/img5.jpeg",
      bio: "Manages financial stewardship to ensure every contribution creates maximum impact.",
      tags: ["Finance", "Governance", "Transparency"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fs-root {
          background: #060810;
          padding: 6rem 0 5rem;
          width: 100%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .fs-bg-blob1 {
          position: absolute; top: -10%; left: -5%;
          width: 55vw; height: 55vw; max-width: 700px; max-height: 700px;
          background: radial-gradient(ellipse at center, rgba(184,134,11,0.055) 0%, transparent 65%);
          pointer-events: none;
        }
        .fs-bg-blob2 {
          position: absolute; bottom: 5%; right: -10%;
          width: 60vw; height: 60vw; max-width: 800px; max-height: 800px;
          background: radial-gradient(ellipse at center, rgba(99,102,241,0.04) 0%, transparent 65%);
          pointer-events: none;
        }
        .fs-bg-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .fs-wrap {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* ── CHIP ── */
        .fs-chip {
          display: inline-flex; align-items: center; gap: 0.55rem;
          background: rgba(184,134,11,0.1);
          border: 1px solid rgba(184,134,11,0.25);
          border-radius: 9999px;
          padding: 0.3rem 1rem;
          font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: #fbbf24; font-weight: 700;
          margin-bottom: 1rem;
        }
        .fs-chip::before { content: '◆'; font-size: 0.35rem; opacity: 0.7; }

        /* ── DIVIDER ── */
        .sec-div {
          display: flex; align-items: center; gap: 1.2rem;
          margin: 5rem 0 3rem;
        }
        .sec-div-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(184,134,11,0.25), transparent);
        }
        .sec-div-text {
          font-size: 0.58rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: #fbbf24; font-weight: 700; white-space: nowrap;
        }

        /* ════ FOUNDER HERO ════ */
        .founder-hero {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 5rem;
          align-items: flex-start;
        }
        .photo-col {
          display: flex; flex-direction: column; align-items: center;
          position: sticky; top: 2rem;
        }
        .photo-outer-ring {
          position: relative;
          padding: 10px;
          background: linear-gradient(145deg, rgba(184,134,11,0.3), rgba(184,134,11,0.05), rgba(184,134,11,0.2));
          border-radius: 18px;
          margin-bottom: 1rem;
        }
        .photo-outer-ring::before {
          content: ''; position: absolute; inset: -1px; border-radius: 19px;
          background: linear-gradient(145deg, #B8860B55, transparent, #f5c84233);
          z-index: -1;
        }
        .photo-outer-ring::after {
          content: ''; position: absolute; inset: -14px; border-radius: 22px;
          border: 1px dashed rgba(184,134,11,0.18); pointer-events: none;
        }
        .photo-img-wrap {
          width: 210px; height: 265px; border-radius: 12px;
          overflow: hidden; background: #1a1a2e;
        }
        .photo-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: sepia(10%) contrast(1.05);
        }
        .photo-name-tag { text-align: center; margin-bottom: 0.9rem; }
        .pnt-name {
          display: block; font-family: 'Playfair Display', serif;
          color: #fff; font-size: 0.95rem; font-weight: 600;
          line-height: 1.3; margin-bottom: 0.25rem;
        }
        .pnt-years {
          font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: #fbbf24; font-weight: 600;
          background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2);
          border-radius: 9999px; padding: 0.22rem 0.8rem; display: inline-block;
        }
        .milestones-row {
          display: grid; grid-template-columns: repeat(4, 1fr);
          width: 100%; max-width: 240px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(184,134,11,0.18);
          border-radius: 12px; overflow: hidden;
        }
        .milestone-cell {
          padding: 0.65rem 0.2rem; text-align: center;
          border-right: 1px solid rgba(184,134,11,0.12); transition: background 0.2s;
        }
        .milestone-cell:last-child { border-right: none; }
        .milestone-cell:hover { background: rgba(184,134,11,0.07); }
        .milestone-year { display: block; color: #fbbf24; font-size: 0.62rem; font-weight: 700; }
        .milestone-label { display: block; color: rgba(255,255,255,0.38); font-size: 0.42rem; letter-spacing: 0.05em; text-transform: uppercase; margin-top: 3px; }

        .text-col .hero-title {
          font-family: 'Playfair Display', serif; color: #fff;
          font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; line-height: 1.1;
          margin: 0.5rem 0 0.5rem;
        }
        .text-col .hero-title em { font-style: italic; color: #fbbf24; }
        .text-col .hero-sub {
          color: rgba(191,219,254,0.5); font-size: 0.8rem; font-style: italic; margin-bottom: 2rem;
        }

        /* ── TIMELINE CARDS ── */
        .tl-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .tl-card {
          position: relative; border-radius: 16px;
          padding: 1.1rem 1.1rem 1.1rem 1.4rem;
          background: rgba(255,255,255,0.028); border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .tl-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
        .tl-card-bar { position: absolute; top: 0; left: 0; bottom: 0; width: 3px; border-radius: 16px 0 0 16px; }
        .tl-top { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
        .tl-icon { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; flex-shrink: 0; }
        .tl-year { font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em; line-height: 1; }
        .tl-label { font-size: 0.52rem; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase; opacity: 0.6; margin-top: 2px; }
        .tl-text { color: rgba(191,219,254,0.72); font-size: 0.76rem; line-height: 1.75; }
        .tl-full { grid-column: 1 / -1; }

        /* ════ FOUNDER CARD ════ */
        .founder-card {
          position: relative; border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, #0c1225, #111d3d 50%, #0c1225);
          border: 1px solid rgba(184,134,11,0.2);
          display: grid; grid-template-columns: 240px 1fr;
        }
        .founder-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, transparent, #B8860B, #fbbf24, #B8860B, transparent);
        }
        .fc-left {
          padding: 2.5rem 1.75rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;
          border-right: 1px solid rgba(184,134,11,0.12); background: rgba(0,0,0,0.18);
        }
        .fc-photo { width: 180px; height: 200px; border-radius: 12px; border: 2px solid #B8860B; overflow: hidden; }
        .fc-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .fc-badge {
          font-size: 0.55rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
          background: linear-gradient(135deg, #92670a, #fbbf24);
          color: #07091a; padding: 0.25rem 0.9rem; border-radius: 9999px;
        }
        .fc-right { padding: 2.5rem 2.25rem; }
        .fc-eyebrow { font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: #fbbf24; font-weight: 700; margin-bottom: 0.4rem; }
        .fc-name { font-family: 'Playfair Display', serif; color: #fff; font-size: clamp(1.4rem, 2.8vw, 2rem); font-weight: 600; line-height: 1.15; margin-bottom: 0.3rem; }
        .fc-title { color: #fcd34d; font-size: 0.73rem; margin-bottom: 1rem; font-weight: 500; }
        .fc-divider { width: 44px; height: 2px; background: linear-gradient(to right, #B8860B, #fbbf24); border-radius: 1px; margin-bottom: 1rem; }
        .fc-bio { color: rgba(191,219,254,0.8); font-size: 0.84rem; line-height: 1.85; margin-bottom: 1.25rem; }
        .fc-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .fc-pill {
          font-size: 0.6rem; font-weight: 600; padding: 0.28rem 0.85rem;
          border-radius: 9999px; border: 1px solid rgba(251,191,36,0.28);
          color: #fbbf24; background: rgba(251,191,36,0.05); transition: background 0.2s;
        }
        .fc-pill:hover { background: rgba(251,191,36,0.12); }

        /* ════ EXECUTIVE TRUSTEE ════ */
        .trustee-wrap {
          padding: 2px; border-radius: 24px;
          background: linear-gradient(135deg, #7a5400, #f5c842, #f0a800, #7a5400);
        }
        .trustee-inner {
          background: #0d1428; border-radius: 22px; overflow: hidden;
          display: grid; grid-template-columns: 300px 1fr;
        }
        .et-left {
          background: linear-gradient(175deg, #111d3d 0%, #0a1228 100%);
          border-right: 1px solid rgba(184,134,11,0.18);
          padding: 2.8rem 2rem;
          display: flex; flex-direction: column; align-items: center; gap: 1.2rem;
        }
        .et-photo {
          width: 200px; height: 200px; border-radius: 50%;
          border: 3px solid #B8860B; overflow: hidden;
          box-shadow: 0 0 0 7px rgba(184,134,11,0.1), 0 0 40px rgba(184,134,11,0.12);
        }
        .et-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .et-badge {
          background: rgba(184,134,11,0.1); border: 1px solid rgba(184,134,11,0.3);
          color: #fbbf24; font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.3rem 1rem; border-radius: 9999px;
        }
        .et-focus-list { width: 100%; display: flex; flex-direction: column; gap: 0.5rem; }
        .et-focus-item {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0.55rem 0.8rem;
          background: rgba(251,191,36,0.04); border: 1px solid rgba(251,191,36,0.1); border-radius: 10px;
        }
        .et-focus-dot { width: 5px; height: 5px; border-radius: 50%; background: #fbbf24; flex-shrink: 0; opacity: 0.8; }
        .et-focus-text { color: rgba(191,219,254,0.7); font-size: 0.7rem; }
        .et-right { padding: 2.8rem 2.5rem; display: flex; flex-direction: column; justify-content: center; }
        .et-tag { font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: #fbbf24; font-weight: 700; margin-bottom: 0.45rem; }
        .et-name { font-family: 'Playfair Display', serif; color: #fff; font-size: clamp(1.3rem, 2.5vw, 2rem); font-weight: 600; line-height: 1.15; margin-bottom: 0.3rem; }
        .et-title { color: #fcd34d; font-size: 0.73rem; margin-bottom: 1rem; font-weight: 500; }
        .et-divider { width: 44px; height: 2px; background: linear-gradient(to right, #B8860B, #fbbf24); border-radius: 1px; margin-bottom: 1rem; }
        .et-bio { color: rgba(191,219,254,0.8); font-size: 0.84rem; line-height: 1.85; margin-bottom: 1.2rem; }
        .et-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .et-pill { font-size: 0.6rem; font-weight: 600; padding: 0.28rem 0.85rem; border-radius: 9999px; border: 1px solid rgba(251,191,36,0.28); color: #fbbf24; background: rgba(251,191,36,0.05); }

        /* ════ TEAM GRID ════ */
        .members-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .member-card {
          border-radius: 20px; overflow: hidden;
          background: linear-gradient(160deg, #0d1428, #0a1020);
          border: 1px solid rgba(184,134,11,0.14);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
          display: flex; flex-direction: column;
        }
        .member-card:hover {
          transform: translateY(-6px);
          border-color: rgba(184,134,11,0.38);
          box-shadow: 0 20px 50px rgba(0,0,0,0.55), 0 0 30px rgba(184,134,11,0.07);
        }
        /* Banner photo */
        .member-photo-area {
          width: 100%; height: 290px;
          overflow: hidden; position: relative; flex-shrink: 0;
        }
        .member-photo-area::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 65px;
          background: linear-gradient(to bottom, transparent, #0d1428);
          pointer-events: none;
        }
        .member-photo-area img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: top; display: block;
          transition: transform 0.4s ease;
        }
        .member-card:hover .member-photo-area img { transform: scale(1.06); }
        .member-body { padding: 0.85rem 1.2rem 1.4rem; text-align: center; flex: 1; display: flex; flex-direction: column; }
        .member-role-badge {
          display: inline-block; font-size: 0.48rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #fbbf24; background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.2);
          padding: 0.18rem 0.65rem; border-radius: 9999px; margin-bottom: 0.4rem;
        }
        .member-name {
          font-family: 'Playfair Display', serif; color: #fff;
          font-size: clamp(0.88rem, 1.5vw, 1rem); font-weight: 600;
          line-height: 1.3; margin-bottom: 0.3rem;
        }
        .member-title-text {
          color: rgba(252,211,77,0.72); font-size: 0.62rem; line-height: 1.45; margin-bottom: 0.6rem;
        }
        .member-divider { width: 28px; height: 1.5px; background: linear-gradient(to right, #B8860B, #fbbf24); border-radius: 1px; margin: 0 auto 0.65rem; }
        .member-bio { color: rgba(191,219,254,0.62); font-size: 0.71rem; line-height: 1.7; margin-bottom: 0.9rem; flex: 1; }
        .member-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; justify-content: center; margin-top: auto; }
        .member-tag { font-size: 0.5rem; font-weight: 600; padding: 0.18rem 0.6rem; border-radius: 9999px; border: 1px solid rgba(251,191,36,0.2); color: rgba(251,191,36,0.8); }

        /* ════ RESPONSIVE ════ */
        @media (max-width: 1080px) {
          .members-grid { grid-template-columns: repeat(2, 1fr); }
          .trustee-inner { grid-template-columns: 260px 1fr; }
        }
        @media (max-width: 900px) {
          .founder-hero { grid-template-columns: 1fr; gap: 3rem; }
          .photo-col { position: static; align-items: center; }
          .founder-card { grid-template-columns: 1fr; }
          .fc-left { border-right: none; border-bottom: 1px solid rgba(184,134,11,0.12); }
          .trustee-inner { grid-template-columns: 1fr; }
          .et-left { border-right: none; border-bottom: 1px solid rgba(184,134,11,0.18); }
          .et-focus-list { flex-direction: row; flex-wrap: wrap; justify-content: center; }
          .et-focus-item { flex: 1; min-width: 130px; justify-content: center; }
        }
        @media (max-width: 680px) {
          .fs-root { padding: 3.5rem 0 3rem; }
          .fs-wrap { padding: 0 1.25rem; }
          .tl-grid { grid-template-columns: 1fr; }
          .tl-full { grid-column: 1; }
          .photo-img-wrap { width: 185px; height: 235px; }
          .members-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .sec-div { margin: 3.5rem 0 2.5rem; }
          .member-photo-area { height: 295px; }
        }
        @media (max-width: 480px) {
          .fs-wrap { padding: 0 1rem; }
          .members-grid { grid-template-columns: 1fr; }
          .photo-img-wrap { width: 165px; height: 210px; }
          .fc-right { padding: 1.5rem 1.25rem; }
          .et-right { padding: 1.75rem 1.25rem; }
          .et-left { padding: 1.75rem 1.25rem; }
          .trustee-wrap { border-radius: 18px; }
          .trustee-inner { border-radius: 16px; }
          .member-photo-area { height: 300px; }
        }
      `}</style>

      <section className="fs-root">
        <div className="fs-bg-blob1" />
        <div className="fs-bg-blob2" />
        <div className="fs-bg-grid" />

        <div className="fs-wrap">

          {/* ════ FOUNDER HERO ════ */}
          <div className="founder-hero">
            <div className="photo-col">
              <div className="photo-outer-ring">
                <div className="photo-img-wrap">
                  <img src="/image/img1.jpeg" alt="Shri Ramnandan Mishra" />
                </div>
              </div>
              <div className="photo-name-tag">
                <span className="pnt-name">Shri Ramnandan Mishra</span>
                <span className="pnt-years">Our Inspiration · 1906–1989</span>
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

            <div className="text-col">
              <span className="fs-chip">Our Inspiration</span>
              <h2 className="hero-title">Shri <em>Ramnandan Mishra</em></h2>
              <p className="hero-sub">A legacy forged in courage, sacrifice, and devotion</p>
              <div className="tl-grid">
                {timelineItems.map((item, i) => {
                  const isLast = i === timelineItems.length - 1;
                  const isOdd = timelineItems.length % 2 !== 0;
                  return (
                    <div
                      key={i}
                      className={`tl-card${isLast && isOdd ? " tl-full" : ""}`}
                      style={{ borderColor: item.accent + "28" }}
                    >
                      <span className="tl-card-bar" style={{ background: item.accent, opacity: 0.75 }} />
                      <div className="tl-top">
                        <div className="tl-icon" style={{ background: item.accent + "20", color: item.accent }}>{item.icon}</div>
                        <div>
                          <p className="tl-year" style={{ color: item.accent }}>{item.year}</p>
                          <p className="tl-label" style={{ color: item.accent }}>{item.label}</p>
                        </div>
                      </div>
                      <p className="tl-text">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ════ ABOUT FOUNDER ════ */}
          <div className="sec-div">
            <div className="sec-div-line" />
            <span className="sec-div-text">◆ About the Founder ◆</span>
            <div className="sec-div-line" />
          </div>

          <div className="founder-card">
            <div className="fc-left">
              <div className="fc-photo">
                <img src="/image/img4.jpeg" alt="Late Dr. N.P. Mishra" />
              </div>
              <span className="fc-badge">Founder of the Trust</span>
            </div>
            <div className="fc-right">
              <p className="fc-eyebrow">The Man Behind the Mission</p>
              <h3 className="fc-name">Late Dr. N.P. Mishra</h3>
              <p className="fc-title">MMBS(Hons) · MD · FRCP (Edin) · FAMS · Darbhanga, Bihar</p>
              <div className="fc-divider" />
              <p className="fc-bio">
                Late Dr. N.P. Mishra was a distinguished physician and the visionary Founder of this Trust. With his deep-rooted commitment to society and an abiding belief in service, he established this institution to carry forward a mission of education, welfare, and community upliftment. His life and values continue to be the guiding light of everything we do.
              </p>
              <div className="fc-tags">
                {["Physician", "Visionary", "Philanthropist", "Social Reformer", "Bihar Icon"].map((tag) => (
                  <span key={tag} className="fc-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* ════ LEADERSHIP ════ */}
          <div className="sec-div">
            <div className="sec-div-line" />
            <span className="sec-div-text">◆ Executive Trustee ◆</span>
            <div className="sec-div-line" />
          </div>

          <div className="trustee-wrap">
            <div className="trustee-inner">
              <div className="et-left">
                <div className="et-photo">
                  <img src="/image/trustee-image.jpeg" alt="Dr. Prof. Abhaya Raghava Mishra" />
                </div>
                <span className="et-badge">Executive Trustee</span>
                <div className="et-focus-list">
                  {["Academic Leadership", "Community Welfare", "Women Empowerment"].map((s) => (
                    <div key={s} className="et-focus-item">
                      <span className="et-focus-dot" />
                      <span className="et-focus-text">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="et-right">
                <p className="et-tag">Meet Our Leadership</p>
                <h3 className="et-name">Dr. Prof. Abhaya Raghava Mishra</h3>
                <p className="et-title">Executive Trustee, Ramnandan Mishra Mission Trust</p>
                <div className="et-divider" />
                <p className="et-bio">
                  Dr. Prof. Abhaya Raghava Mishra leads the trust's vision with academic rigour and deep social commitment. As Executive Trustee, he steers the organisation's programs in education, community welfare, and women empowerment — carrying forward the ideals of Shri Ramnandan Mishra for a new generation.
                </p>
                <div className="et-pills">
                  {["Academic", "Social Reformer", "Community Leader", "Visionary"].map((tag) => (
                    <span key={tag} className="et-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ════ TEAM ════ */}
          <div className="sec-div">
            <div className="sec-div-line" />
            <span className="sec-div-text">◆ Advisory Board of Trustees ◆</span>
            <div className="sec-div-line" />
          </div>

          <div className="members-grid">
            {trustees.map((member) => (
              <div key={member.name} className="member-card">
                <div className="member-photo-area">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-body">
                  <span className="member-role-badge">{member.role}</span>
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-title-text">{member.title}</p>
                  <div className="member-divider" />
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-tags">
                    {member.tags.map((tag) => (
                      <span key={tag} className="member-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}