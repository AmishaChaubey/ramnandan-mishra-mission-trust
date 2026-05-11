import { Award, Globe, CreditCard, Building2 } from "lucide-react";

const STATS = [
  { value: "Bihar", label: "State Registered",     Icon: Award      },
  { value: "2025",  label: "DARPAN Certified",      Icon: Globe      },
  { value: "PAN",   label: "Income Tax Recognised", Icon: CreditCard },
  { value: "BOI",   label: "Bank of India A/C",     Icon: Building2  },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#1e3a8a", padding: "2.5rem 0", width: "100%", boxSizing: "border-box" }}>
      <style>{`
        .stats-wrapper {
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.75rem 1rem;
          border-right: 1px solid rgba(255,255,255,0.12);
          box-sizing: border-box;
          min-width: 0;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-icon {
          color: #F5C842;
          margin-bottom: 0.75rem;
          flex-shrink: 0;
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          color: white;
          font-size: clamp(1.4rem, 3vw, 2.25rem);
          font-weight: 600;
          margin: 0;
          line-height: 1;
          word-break: break-word;
        }

        .stat-label {
          font-family: 'Outfit', sans-serif;
          color: #93c5fd;
          font-size: clamp(0.6rem, 1.2vw, 0.72rem);
          letter-spacing: 0.05em;
          margin-top: 0.4rem;
          margin-bottom: 0;
          line-height: 1.4;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .stats-wrapper {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 1rem;
          }
          .stat-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.12);
            padding: 1.5rem 0.75rem;
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.12);
          }
          .stat-item:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .stats-wrapper {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 0.5rem;
          }
          .stat-item {
            padding: 1.25rem 0.5rem;
          }
          .stat-label {
            font-size: 0.6rem;
            letter-spacing: 0.02em;
          }
        }

        /* Very small screens */
        @media (max-width: 320px) {
          .stats-wrapper {
            grid-template-columns: 1fr;
          }
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.12) !important;
            padding: 1.25rem 1rem;
          }
          .stat-item:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>

      <div className="stats-wrapper">
        {STATS.map(({ value, label, Icon }) => (
          <div key={label} className="stat-item">
            <Icon size={26} className="stat-icon" />
            <p className="stat-value">{value}</p>
            <p className="stat-label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}