import React from 'react';
import { FiPhone } from 'react-icons/fi';

const CallIcon = () => {
  const handleCallClick = () => {
    window.location.href = `tel:917250004455`;
  };

  return (
    <>
      <style>{`
        .call-wrapper {
          position: fixed;
          bottom: 28px;
          left: 28px;
          z-index: 9999;
        }

        .call-group {
          position: relative;
          display: inline-block;
        }

        .call-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(220,38,38,0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          z-index: 1;
        }

        .call-btn:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 10px 32px rgba(220,38,38,0.55);
        }

        .call-btn:active {
          transform: scale(0.95);
        }

        .call-pulse {
          position: absolute;
          inset: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #f87171;
          animation: callPing 1.5s ease-out infinite;
          opacity: 0;
          pointer-events: none;
        }

        @keyframes callPing {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .call-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #dc2626;
          color: white;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.25s ease, transform 0.25s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
        }

        .call-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #dc2626;
        }

        .call-group:hover .call-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* Mobile responsive */
        @media (max-width: 480px) {
          .call-wrapper {
            bottom: 18px;
            left: 16px;
          }
          .call-btn {
            width: 50px;
            height: 50px;
          }
          .call-pulse {
            width: 50px;
            height: 50px;
          }
          .call-tooltip {
            font-size: 12px;
            padding: 7px 12px;
          }
        }
      `}</style>

      <div className="call-wrapper">
        <div className="call-group">
          <button onClick={handleCallClick} className="call-btn" aria-label="Call us">
            <FiPhone size={22} color="white" />
          </button>

          <div className="call-pulse" />

          <div className="call-tooltip">
            Call us 📞
          </div>
        </div>
      </div>
    </>
  );
};

export default CallIcon;