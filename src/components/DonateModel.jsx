import { useState } from "react";
import { X, CheckCircle, Copy, Send } from "lucide-react";
import { TRUST_NAME, PAN, DARPAN, ACCOUNT, IFSC, BANK, BRANCH, MOBILE, EMAIL } from "./Constants";

const BANK_ROWS = [
  { label: "Account Name",   value: TRUST_NAME,           key: "name"   },
  { label: "Account Number", value: ACCOUNT,              key: "acc"    },
  { label: "IFSC Code",      value: IFSC,                 key: "ifsc"   },
  { label: "Bank & Branch",  value: `${BANK}, ${BRANCH}`, key: "bank"   },
  { label: "PAN",            value: PAN,                  key: "pan"    },
  { label: "DARPAN ID",      value: DARPAN,               key: "darpan" },
];

const F = "'Outfit', sans-serif";
const S = "'Cormorant Garamond', serif";

export default function DonateModal({ onClose }) {
  const [copied, setCopied]   = useState("");
  const [step, setStep]       = useState("form"); // "form" | "ack" | "done"
  const [txnId, setTxnId]     = useState("");
  const [txnSent, setTxnSent] = useState(false);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = () => setStep("ack");

  const handleSendTxn = () => {
    if (txnId.trim()) {
      setTxnSent(true);
      setTimeout(() => setStep("done"), 1000);
    }
  };

  return (
    <>
      <style>{`
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 100;
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          background: rgba(10,15,40,0.90);
          backdrop-filter: blur(8px);
        }
        .modal-card {
          background: white; border-radius: 1.5rem;
          width: 100%; max-width: 480px; max-height: 94vh;
          display: flex; flex-direction: column;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        .modal-header {
          background: linear-gradient(135deg,#0f172a 0%,#1e3a8a 100%);
          padding: 1.75rem 1.75rem 1.25rem;
          flex-shrink: 0; position: relative;
        }
        .modal-close-btn {
          position: absolute; top: 1rem; right: 1rem;
          width: 32px; height: 32px;
          background: rgba(255,255,255,0.15); border: none; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: white; transition: background 0.2s;
        }
        .modal-close-btn:hover { background: rgba(255,255,255,0.28); }
        .modal-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .modal-body { overflow-y: auto; flex: 1; padding: 1.5rem 1.75rem; }
        .bank-row {
          display: flex; align-items: center; justify-content: space-between;
          background: #f9fafb; border: 1px solid #f3f4f6;
          border-radius: 0.75rem; padding: 0.7rem 1rem;
        }
        .copy-btn {
          margin-left: 0.75rem; width: 32px; height: 32px;
          border-radius: 0.5rem; border: none;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; cursor: pointer; transition: all 0.2s;
        }
        .submit-btn {
          width: 100%; padding: 0.9rem; border-radius: 0.875rem; border: none;
          background: linear-gradient(135deg,#B8860B,#9a7209);
          color: white; font-family: 'Outfit', sans-serif;
          font-size: 1rem; font-weight: 700; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          gap: 0.5rem; transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(184,134,11,0.35); margin-top: 1rem;
        }
        .submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(184,134,11,0.45); }
        .submit-btn:active { transform: translateY(0); }
        .txn-input {
          width: 100%; box-sizing: border-box;
          border: 2px solid #e5e7eb; border-radius: 0.75rem;
          padding: 0.75rem 1rem; font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; color: #111827; outline: none;
          transition: border-color 0.2s; margin-bottom: 0.75rem;
        }
        .txn-input:focus { border-color: #B8860B; }
        .send-btn {
          width: 100%; padding: 0.8rem; border-radius: 0.75rem; border: none;
          background: #0f172a; color: white;
          font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 700;
          cursor: pointer; display: flex; align-items: center;
          justify-content: center; gap: 0.5rem;
          transition: background 0.2s; margin-bottom: 0.5rem;
        }
        .send-btn:hover { background: #1e3a8a; }
        .send-btn:disabled { background: #9ca3af; cursor: not-allowed; }
        .skip-btn {
          background: none; border: none; color: #9ca3af;
          font-family: 'Outfit', sans-serif; font-size: 0.8rem;
          cursor: pointer; text-decoration: underline; display: block; margin: 0 auto;
        }
        .skip-btn:hover { color: #6b7280; }
        @media (max-width: 520px) {
          .modal-backdrop { padding: 0; align-items: flex-end; }
          .modal-card { max-width: 100%; max-height: 96vh; border-radius: 1.5rem 1.5rem 0 0; }
          .modal-header { padding: 1.25rem 1.25rem 1rem; }
          .modal-body { padding: 1.25rem; }
        }
      `}</style>

      <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
        <div className="modal-card">

          {/* ── HEADER ── */}
          <div className="modal-header">
            <button className="modal-close-btn" onClick={onClose}><X size={16} /></button>
            <div style={{ display:"flex", alignItems:"center", gap:"0.875rem", marginBottom:"1rem" }}>
              <div>
                <p style={{ fontFamily:F, fontSize:"0.62rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"#fbbf24", fontWeight:600, margin:0 }}>
                  Donate to
                </p>
                <p style={{ fontFamily:S, color:"white", fontSize:"1.1rem", fontWeight:600, lineHeight:1.2, margin:"2px 0 0" }}>
                  {TRUST_NAME}
                </p>
              </div>
            </div>
            <div className="modal-chips">
              {[["PAN", PAN], ["DARPAN", DARPAN], ["Bihar Govt. Reg.", ""]].map(([k, v]) => (
                <div key={k} style={{ background:"rgba(255,255,255,0.09)", borderRadius:"0.5rem", padding:"0.3rem 0.7rem" }}>
                  <span style={{ fontFamily:F, fontSize:"0.6rem", color:"#93c5fd", letterSpacing:"0.08em", textTransform:"uppercase" }}>{k}: </span>
                  <span style={{ fontFamily:F, fontSize:"0.68rem", color:"white", fontWeight:700 }}>{v || "✔"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-body">

            {/* ═══════════════ STEP 1 — BANK DETAILS ═══════════════ */}
            {step === "form" && (
              <>
                <p style={{ fontFamily:F, fontSize:"0.65rem", color:"#9ca3af", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"0.75rem", fontWeight:600 }}>
                  Bank Transfer Details
                </p>

                <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", marginBottom:"1.25rem" }}>
                  {BANK_ROWS.map(({ label, value, key }) => (
                    <div key={key} className="bank-row">
                      <div style={{ minWidth:0, flex:1 }}>
                        <p style={{ fontFamily:F, fontSize:"0.6rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 2px" }}>
                          {label}
                        </p>
                        <p style={{ fontFamily:F, fontSize:"0.875rem", color:"#111827", fontWeight:700, margin:0, wordBreak:"break-all" }}>
                          {value}
                        </p>
                      </div>
                      <button
                        className="copy-btn"
                        onClick={() => copy(value, key)}
                        style={{
                          background: copied === key ? "#d1fae5" : "#e5e7eb",
                          color: copied === key ? "#059669" : "#6b7280",
                        }}
                      >
                        {copied === key ? <CheckCircle size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ background:"#fffbeb", border:"1px solid #fde68a", borderRadius:"0.75rem", padding:"0.85rem 1rem", marginBottom:"1.25rem" }}>
                  <p style={{ fontFamily:F, fontSize:"0.8rem", color:"#78350f", lineHeight:1.65, margin:0 }}>
                    💡 After transfer, share your transaction ID to{" "}
                    <strong>+91 {MOBILE}</strong> or <strong>{EMAIL}</strong>
                  </p>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  I've Made the Transfer — Continue
                </button>

                <p style={{ fontFamily:F, fontSize:"0.73rem", color:"#9ca3af", textAlign:"center", lineHeight:1.65, margin:"0.75rem 0 0" }}>
                  Donations may be eligible for 80G tax exemption.<br />
                  Contact us for your exemption certificate.
                </p>
              </>
            )}

            {/* ═══════════════ STEP 2 — ACKNOWLEDGMENT ═══════════════ */}
            {step === "ack" && (
              <div style={{ textAlign:"center", paddingTop:"0.5rem" }}>
                <div style={{
                  width:72, height:72,
                  background:"linear-gradient(135deg,#d1fae5,#a7f3d0)",
                  borderRadius:"50%", display:"flex", alignItems:"center",
                  justifyContent:"center", margin:"0 auto 1.25rem",
                  boxShadow:"0 0 0 10px #ecfdf5",
                }}>
                  <CheckCircle size={36} color="#059669" />
                </div>

                <p style={{ fontFamily:S, fontSize:"1.6rem", fontWeight:700, color:"#111827", margin:"0 0 0.4rem" }}>
                  Thank You! 🙏
                </p>
                <p style={{ fontFamily:F, fontSize:"0.95rem", color:"#6b7280", margin:"0 0 1.5rem", lineHeight:1.6 }}>
                  Your contribution to {TRUST_NAME} will help build a better tomorrow.
                </p>

                <div style={{ borderTop:"1px dashed #e5e7eb", margin:"0 0 1.25rem" }} />

                <p style={{ fontFamily:F, fontSize:"0.8rem", color:"#374151", fontWeight:600, margin:"0 0 0.4rem" }}>
                  Share Your Transaction ID / UTR Number
                </p>
                <p style={{ fontFamily:F, fontSize:"0.75rem", color:"#9ca3af", margin:"0 0 0.75rem", lineHeight:1.5 }}>
                  After completing the bank transfer, paste your transaction reference here so we can verify your donation quickly.
                </p>

                <input
                  className="txn-input" type="text"
                  placeholder="e.g. 123456789012 or UTR / Ref number"
                  value={txnId}
                  onChange={e => setTxnId(e.target.value)}
                />

                <button className="send-btn" onClick={handleSendTxn} disabled={!txnId.trim() || txnSent}>
                  <Send size={16} />
                  {txnSent ? "Submitting..." : "Submit Transaction ID"}
                </button>

                <button className="skip-btn" onClick={() => setStep("done")}>
                  I'll share it later
                </button>

                <p style={{ fontFamily:F, fontSize:"0.7rem", color:"#d1d5db", margin:"1.25rem 0 0", lineHeight:1.6 }}>
                  Donations may be eligible for 80G tax exemption.
                </p>
              </div>
            )}

            {/* ═══════════════ STEP 3 — DONE ═══════════════ */}
            {step === "done" && (
              <div style={{ textAlign:"center", padding:"1rem 0.5rem" }}>
                <div style={{
                  width:80, height:80,
                  background:"linear-gradient(135deg,#fffbeb,#fef3c7)",
                  borderRadius:"50%", display:"flex", alignItems:"center",
                  justifyContent:"center", margin:"0 auto 1.25rem",
                  fontSize:"2.5rem", boxShadow:"0 0 0 10px #fffbeb",
                }}>
                  🙏
                </div>

                <p style={{ fontFamily:S, fontSize:"1.7rem", fontWeight:700, color:"#111827", margin:"0 0 0.5rem" }}>
                  Donation Confirmed!
                </p>
                <p style={{ fontFamily:F, fontSize:"0.9rem", color:"#6b7280", margin:"0 0 1.25rem", lineHeight:1.6 }}>
                  Thank you for your generous support to {TRUST_NAME}.
                </p>

                {txnId.trim() && (
                  <div style={{ background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:"0.75rem", padding:"0.75rem 1rem", marginBottom:"1rem" }}>
                    <p style={{ fontFamily:F, fontSize:"0.75rem", color:"#166534", margin:0, lineHeight:1.6 }}>
                      ✅ Transaction ID <strong>{txnId}</strong> received.<br />
                      We will verify and confirm within 24 hours.
                    </p>
                  </div>
                )}

                <div style={{ background:"#fffbeb", border:"1px solid #fde68a", borderRadius:"0.75rem", padding:"0.75rem 1rem", marginBottom:"1.25rem" }}>
                  <p style={{ fontFamily:F, fontSize:"0.78rem", color:"#78350f", lineHeight:1.7, margin:0 }}>
                    For your 80G exemption certificate, contact us:<br />
                    <strong>+91 {MOBILE}</strong> · <strong>{EMAIL}</strong>
                  </p>
                </div>

                <button
                  onClick={onClose}
                  style={{
                    width:"100%", padding:"0.85rem", borderRadius:"0.875rem",
                    border:"2px solid #e5e7eb", background:"white",
                    fontFamily:F, fontSize:"0.9rem", fontWeight:600,
                    color:"#374151", cursor:"pointer", transition:"all 0.2s",
                  }}
                  onMouseEnter={e => { e.target.style.background="#f9fafb"; e.target.style.borderColor="#d1d5db"; }}
                  onMouseLeave={e => { e.target.style.background="white"; e.target.style.borderColor="#e5e7eb"; }}
                >
                  Close
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}