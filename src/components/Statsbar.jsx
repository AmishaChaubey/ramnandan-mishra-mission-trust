import { useState } from "react";
import { Award, Globe, CreditCard, Building2, X, ZoomIn, ZoomOut } from "lucide-react";

const STATS = [
  {
    value: "Bihar",
    label: "State Registered",
    Icon: Award,
    image: "/image/bihar.jpeg",
    imageLabel: "Bihar State Registration",
  },
  {
    value: "2025",
    label: "DARPAN Certified",
    Icon: Globe,
    image: "/image/darpan.jpeg",
    imageLabel: "DARPAN Certification 2025",
  },
  {
    value: "PAN",
    label: "Income Tax Recognised",
    Icon: CreditCard,
    image: "/image/pan.jpeg",
    imageLabel: "Income Tax Recognition",
  },
  {
    value: "BOI",
    label: "Bank of India A/C",
    Icon: Building2,
    image: "/image/account.jpeg",
    imageLabel: "Bank of India Account",
  },
];

export default function StatsBar() {
  const [active, setActive] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleOpen = (idx) => {
    setActive(idx);
    setZoomed(false);
  };
  const handleClose = () => {
    setActive(null);
    setZoomed(false);
  };
  const toggleZoom = (e) => {
    e.stopPropagation();
    setZoomed((z) => !z);
  };

  const activeItem = active !== null ? STATS[active] : null;
  const ActiveIcon = activeItem ? activeItem.Icon : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Outfit:wght@400;500&display=swap');

        .stats-section {
          background: #1e3a8a;
          padding: 2.5rem 0;
          width: 100%;
          box-sizing: border-box;
        }

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
          cursor: pointer;
          position: relative;
          transition: background 0.22s ease, transform 0.18s ease;
          border-radius: 0;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .stat-item:last-child { border-right: none; }

        .stat-item:hover {
          background: rgba(255,255,255,0.06);
        }

        .stat-item:active {
          transform: scale(0.97);
        }

        .stat-icon {
          color: #F5C842;
          margin-bottom: 0.75rem;
          flex-shrink: 0;
          transition: transform 0.22s ease;
        }

        .stat-item:hover .stat-icon {
          transform: scale(1.15) translateY(-2px);
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

        .stat-hint {
          font-family: 'Outfit', sans-serif;
          color: rgba(245,200,66,0.6);
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          margin-top: 0.55rem;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .stat-item:hover .stat-hint {
          color: rgba(245,200,66,1);
        }

        /* ── MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 12, 35, 0.92);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          box-sizing: border-box;
          animation: fadeIn 0.22s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 32px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1);
          background: #0f1f4d;
          width: min(94vw, 700px);
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          animation: popIn 0.28s cubic-bezier(0.34,1.56,0.64,1);
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85) translateY(24px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .modal-header {
          padding: 1.2rem 1.4rem 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .modal-header-icon {
          color: #F5C842;
          flex-shrink: 0;
        }

        .modal-header-text {
          flex: 1;
        }

        .modal-header-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-weight: 600;
          color: white;
          line-height: 1;
          margin: 0;
        }

        .modal-header-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          margin: 0.2rem 0 0;
        }

        .modal-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .modal-btn {
          background: rgba(255,255,255,0.10);
          border: none;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          transition: background 0.18s, transform 0.15s;
          flex-shrink: 0;
          padding: 0;
        }

        .modal-btn:hover {
          background: rgba(255,255,255,0.22);
          transform: scale(1.08);
        }

        /* Image container — scrollable so zoomed image can be panned */
        .modal-image-wrap {
          flex: 1;
          overflow: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.30);
          padding: 1.5rem;
          box-sizing: border-box;
          min-height: 0;
          /* nice scrollbar */
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.15) transparent;
        }

        .modal-image-wrap::-webkit-scrollbar { width: 5px; height: 5px; }
        .modal-image-wrap::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }

        .modal-image {
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.55);
          transition: transform 0.3s cubic-bezier(0.34,1.3,0.64,1), max-width 0.3s, max-height 0.3s;
          display: block;
          /* default: fill most of modal */
          max-width: 100%;
          max-height: 68vh;
          width: auto;
          height: auto;
          animation: imgFadeIn 0.35s ease 0.05s both;
          cursor: zoom-in;
        }

        .modal-image.zoomed {
          max-width: none;
          max-height: none;
          width: auto;
          height: auto;
          /* scale up to fill screen */
          transform: scale(1.9);
          cursor: zoom-out;
          transform-origin: center center;
        }

        @keyframes imgFadeIn {
          from { opacity: 0; transform: scale(0.93); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-footer {
          flex-shrink: 0;
          padding: 0.65rem 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }

        .modal-footer-text {
          font-family: 'Outfit', sans-serif;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.05em;
        }

        /* ── RESPONSIVE ── */
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
          .modal-image {
            max-height: 55vh;
          }
          .modal-image.zoomed {
            transform: scale(1.6);
          }
        }

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
          .modal-card {
            width: 98vw;
            border-radius: 14px;
          }
          .modal-image {
            max-height: 50vh;
          }
          .modal-image.zoomed {
            transform: scale(1.5);
          }
        }

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

      <section className="stats-section">
        <div className="stats-wrapper">
          {STATS.map(({ value, label, Icon }, idx) => (
            <div
              key={label}
              className="stat-item"
              onClick={() => handleOpen(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen(idx)}
              aria-label={`View ${label} certificate`}
            >
              <Icon size={26} className="stat-icon" />
              <p className="stat-value">{value}</p>
              <p className="stat-label">{label}</p>
              <p className="stat-hint">Tap to view</p>
            </div>
          ))}
        </div>
      </section>

      {activeItem && (
        <div
          className="modal-overlay"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.imageLabel}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <ActiveIcon size={24} className="modal-header-icon" />
              <div className="modal-header-text">
                <p className="modal-header-value">{activeItem.value}</p>
                <p className="modal-header-label">{activeItem.label}</p>
              </div>
              <div className="modal-actions">
                <button
                  className="modal-btn"
                  onClick={toggleZoom}
                  aria-label={zoomed ? "Zoom out" : "Zoom in"}
                  title={zoomed ? "Zoom out" : "Zoom in"}
                >
                  {zoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                </button>
                <button className="modal-btn" onClick={handleClose} aria-label="Close">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="modal-image-wrap">
              <img
                src={activeItem.image}
                alt={activeItem.imageLabel}
                className={`modal-image${zoomed ? " zoomed" : ""}`}
                onClick={toggleZoom}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<p style="color:rgba(255,255,255,0.4);font-family:Outfit,sans-serif;font-size:0.85rem;text-align:center;padding:2rem">Image not available</p>';
                }}
              />
            </div>

            {/* Footer hint */}
            <div className="modal-footer">
              <p className="modal-footer-text">
                {zoomed ? "Tap image or 🔍 to zoom out" : "Tap image or 🔍 to zoom in · Tap outside to close"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}