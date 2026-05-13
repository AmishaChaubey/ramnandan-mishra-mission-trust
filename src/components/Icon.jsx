import React from 'react';
import { Heart } from 'lucide-react';

const DonateIcon = ({ onDonate }) => {
  return (
    <>
      <style>{`
        .donate-wrapper {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
        }

        .donate-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px 12px 14px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #B8860B, #9a7209);
          box-shadow: 0 6px 24px rgba(184,134,11,0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          white-space: nowrap;
        }

        .donate-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 10px 32px rgba(184,134,11,0.55);
        }

        .donate-btn:active {
          transform: scale(0.97);
        }

        .donate-icon-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .donate-label {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: white;
          letter-spacing: 0.03em;
        }

        .donate-glow {
          position: absolute;
          inset: -4px;
          border-radius: 999px;
          box-shadow: 0 0 0 4px rgba(184,134,11,0.22);
          pointer-events: none;
        }

        .donate-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          right: 0;
          background: #7a5608;
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }

        .donate-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          right: 24px;
          border: 6px solid transparent;
          border-top-color: #7a5608;
        }

        .donate-group:hover .donate-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile responsive */
        @media (max-width: 480px) {
          .donate-wrapper {
            bottom: 18px;
            right: 16px;
          }
          .donate-btn {
            padding: 10px 18px 10px 10px;
            gap: 8px;
          }
          .donate-icon-circle {
            width: 30px;
            height: 30px;
          }
          .donate-label {
            font-size: 13px;
          }
          .donate-tooltip {
            font-size: 12px;
            padding: 7px 12px;
            right: 0;
          }
        }
      `}</style>

      <div className="donate-wrapper">
        <div className="donate-group" style={{ position: 'relative', display: 'inline-block' }}>
          <button onClick={onDonate} className="donate-btn" aria-label="Donate Now">
            <div className="donate-icon-circle">
              <Heart size={16} color="white" fill="white" />
            </div>
            <span className="donate-label">Donate Now</span>
          </button>

          <div className="donate-glow" />

          <div className="donate-tooltip">
            Support our cause 🙏
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateIcon;