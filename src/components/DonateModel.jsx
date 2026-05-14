import { useState, useEffect } from "react";
import { X, CheckCircle, Copy, Send, Heart } from "lucide-react";
import { TRUST_NAME, PAN, DARPAN, ACCOUNT, IFSC, BANK, BRANCH, MOBILE, EMAIL } from "./Constants";

const BANK_ROWS = [
  { label: "Account Name",   value: TRUST_NAME,           key: "name"   },
  { label: "Account Number", value: ACCOUNT,              key: "acc"    },
  { label: "IFSC Code",      value: IFSC,                 key: "ifsc"   },
  { label: "Bank & Branch",  value: `${BANK}, ${BRANCH}`, key: "bank"   },
  { label: "PAN",            value: PAN,                  key: "pan"    },
  { label: "DARPAN ID",      value: DARPAN,               key: "darpan" },
];

export default function DonateModal({ onClose }) {
  const [copied, setCopied] = useState("");
  const [step, setStep]     = useState("form"); // "form" | "ack" | "done"
  const [txnId, setTxnId]   = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSend = () => {
    if (!txnId.trim()) return;
    setSending(true);
    setTimeout(() => { setSending(false); setStep("done"); }, 900);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        .dm-modal-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          background: rgba(6, 10, 26, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .dm-card {
          background: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 460px;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.06);
        }

        .dm-head {
          background: #0b1630;
          padding: 1.5rem 1.5rem 1.25rem;
          flex-shrink: 0;
          position: relative;
        }

        .dm-close {
          position: absolute; top: 1rem; right: 1rem;
          width: 30px; height: 30px;
          background: rgba(255,255,255,0.1);
          border: none; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: rgba(255,255,255,0.75);
          transition: background 0.2s;
          padding: 0;
        }
        .dm-close:hover { background: rgba(255,255,255,0.22); }

        .dm-donate-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #7aa3d4;
          margin: 0 0 3px;
        }

        .dm-trust-name {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.25;
        }

        .dm-badges {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
          margin-top: 0.875rem;
        }

        .dm-badge {
          background: rgba(255,255,255,0.07);
          border: 0.5px solid rgba(255,255,255,0.14);
          border-radius: 6px;
          padding: 0.25rem 0.6rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
        }
        .dm-badge-label { color: #7aa3d4; font-weight: 500; }
        .dm-badge-val   { color: rgba(255,255,255,0.9); font-weight: 600; margin-left: 3px; }

        .dm-badge-gold {
          background: rgba(184,134,11,0.2);
          border-color: rgba(184,134,11,0.38);
          color: #fbbf24;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          border-radius: 6px;
          padding: 0.25rem 0.6rem;
        }

        .dm-body {
          flex: 1;
          
          padding: 1.25rem 1.5rem 1.5rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .dm-body::-webkit-scrollbar { display: none; }

        .dm-section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9ca3af;
          margin: 0 0 0.625rem;
        }

        .dm-bank-list {
          display: flex; flex-direction: column; gap: 0.375rem;
          margin-bottom: 1rem;
        }

        .dm-bank-row {
          display: flex; align-items: center; gap: 0.625rem;
          background: #f9fafb;
          border: 0.5px solid #f0f0f0;
          border-radius: 10px;
          padding: 0.3rem 0.85rem;
        }

        .dm-row-text { flex: 1; min-width: 0; }
        .dm-row-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 2px;
        }
        .dm-row-val {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dm-copy-btn {
          flex-shrink: 0;
          width: 30px; height: 30px;
          border: 0.5px solid #e5e7eb;
          border-radius: 8px;
          background: #ffffff;
          color: #9ca3af;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.18s;
          padding: 0;
        }
        .dm-copy-btn:hover { background: #f3f4f6; color: #374151; }
        .dm-copy-btn.copied { border-color: #bbf7d0; background: #f0fdf4; color: #16a34a; }

        .dm-divider {
          border: none;
          border-top: 0.5px solid #f0f0f0;
          margin: 0.875rem 0;
        }

        .dm-info-box {
          background: #fffbeb;
          border: 0.5px solid #fde68a;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          margin-bottom: 1rem;
        }
        .dm-info-head {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #92400e;
          margin: 0 0 4px;
        }
        .dm-info-line {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #78350f;
          margin: 2px 0;
        }

        .dm-btn-primary {
          width: 100%;
          padding: 0.8rem;
          border: none; border-radius: 10px;
          background: #0b1630;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.02em;
        }
        .dm-btn-primary:hover { background: #1e3a6e; transform: translateY(-1px); }
        .dm-btn-primary:active { transform: translateY(0); }

        .dm-txn-input {
          width: 100%; box-sizing: border-box;
          border: 0.5px solid #e5e7eb;
          border-radius: 10px;
          padding: 0.7rem 0.875rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #111827;
          outline: none;
          margin-bottom: 0.75rem;
          transition: border-color 0.2s;
        }
        .dm-txn-input:focus { border-color: #0b1630; }
        .dm-txn-input::placeholder { color: #d1d5db; }

        .dm-btn-send {
          width: 100%;
          padding: 0.78rem;
          border: none; border-radius: 10px;
          background: #B8860B;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          transition: background 0.2s, transform 0.15s;
          margin-bottom: 0.5rem;
        }
        .dm-btn-send:hover:not(:disabled) { background: #9a7209; transform: translateY(-1px); }
        .dm-btn-send:active:not(:disabled) { transform: translateY(0); }
        .dm-btn-send:disabled { background: #e5e7eb; color: #9ca3af; cursor: not-allowed; }

        .dm-skip-btn {
          background: none; border: none;
          color: #9ca3af;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
          display: block; margin: 0 auto;
          transition: color 0.2s;
        }
        .dm-skip-btn:hover { color: #6b7280; }

        .dm-ack-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 1rem;
        }

        .dm-done-wrap {
          text-align: center;
          padding: 1.25rem 0 0.5rem;
        }
        .dm-done-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: #f0fdf4;
          border: 2px solid #bbf7d0;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          color: #16a34a;
        }
        .dm-done-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 0.5rem;
        }
        .dm-done-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.65;
          margin: 0 0 1.5rem;
        }

        @media (max-width: 500px) {
          .dm-modal-backdrop {
            padding: 0;
            align-items: flex-end;
          }
          .dm-card {
            max-width: 100%;
            max-height: 96vh;
            border-radius: 18px 18px 0 0;
          }
          .dm-head { padding: 1.25rem 1.25rem 1rem; }
          .dm-body { padding: 1.1rem 1.25rem 1.5rem; }
          .dm-trust-name { font-size: 1.1rem; }
        }
      `}</style>

      <div
        className="dm-modal-backdrop"
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="dm-card">

          {/* ── HEADER ── */}
          <div className="dm-head">
            <button className="dm-close" onClick={onClose} aria-label="Close">
              <X size={14} />
            </button>
            <p className="dm-donate-label">Donate to</p>
            <p className="dm-trust-name">{TRUST_NAME}</p>
            <div className="dm-badges">
              {[["PAN", PAN], ["DARPAN", DARPAN]].map(([k, v]) => (
                <div key={k} className="dm-badge">
                  <span className="dm-badge-label">{k}</span>
                  <span className="dm-badge-val">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="dm-body">

            {/* ── STEP 1: Bank Details ── */}
            {step === "form" && (
              <>
                <p className="dm-section-label">Bank Transfer Details</p>
                <div className="dm-bank-list">
                  {BANK_ROWS.map(({ label, value, key }) => (
                    <div key={key} className="dm-bank-row">
                      <div className="dm-row-text">
                        <p className="dm-row-label">{label}</p>
                        <p className="dm-row-val">{value}</p>
                      </div>
                      <button
                        className={`dm-copy-btn${copied === key ? " copied" : ""}`}
                        onClick={() => copy(value, key)}
                        title={`Copy ${label}`}
                      >
                        {copied === key ? <CheckCircle size={13} /> : <Copy size={13} />}
                      </button>
                    </div>
                  ))}
                </div>

                <hr className="dm-divider" />

                <div className="dm-info-box">
                  <p className="dm-info-head">💡 After transfer, share your transaction ID</p>
                  <p className="dm-info-line"><strong>{EMAIL}</strong></p>
                  <p className="dm-info-line"><strong>+91 {MOBILE}</strong></p>
                </div>

              
              </>
            )}

               

        

          </div>
        </div>
      </div>
    </>
  );
}