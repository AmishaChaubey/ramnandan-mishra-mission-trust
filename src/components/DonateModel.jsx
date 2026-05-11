import { useState } from "react";
import { X, Heart, CheckCircle, Copy, Send } from "lucide-react";
import { TRUST_NAME, PAN, DARPAN, ACCOUNT, IFSC, BANK, BRANCH, MOBILE, EMAIL, DONATE_AMOUNTS } from "./constants";

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

// UPI / QR can be added here if needed
const UPI_ID = ""; // e.g. "trust@sbi" — leave empty to hide UPI section

export default function DonateModal({ onClose }) {
  const [amount, setAmount]   = useState(1000);
  const [custom, setCustom]   = useState("");
  const [copied, setCopied]   = useState("");
  const [step, setStep]       = useState("form"); // "form" | "ack" | "done"
  const [txnId, setTxnId]     = useState("");
  const [txnSent, setTxnSent] = useState(false);
  const [payMode, setPayMode] = useState("bank"); // "bank" | "upi"

  const final = custom ? (parseInt(custom) || 0) : amount;

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = () => { if (final > 0) setStep("ack"); };

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
        .amount-grid {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 0.5rem; margin-bottom: 0.75rem;
        }
        .amount-btn {
          font-family: 'Outfit', sans-serif; font-weight: 600;
          font-size: 0.85rem; padding: 0.6rem 0;
          border-radius: 0.75rem; cursor: pointer; transition: all 0.2s;
        }
        .tab-bar {
          display: flex; gap: 0.5rem; margin-bottom: 1.25rem;
        }
        .tab-btn {
          flex: 1; padding: 0.55rem 0;
          border-radius: 0.65rem; border: 2px solid #e5e7eb;
          font-family: 'Outfit', sans-serif; font-size: 0.82rem;
          font-weight: 600; cursor: pointer; transition: all 0.2s;
          background: white; color: #6b7280;
        }
        .tab-btn.active {
          border-color: #1e3a8a; background: #eff6ff; color: #1e3a8a;
        }
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
        .submit-btn:disabled {
          background: #e5e7eb; color: #9ca3af;
          cursor: not-allowed; transform: none; box-shadow: none;
        }
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
          .amount-grid { grid-template-columns: repeat(2,1fr); }
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

            {/* ═══════════════ STEP 1 — FORM ═══════════════ */}
            {step === "form" && (
              <>
                <p style={{ fontFamily:F, fontSize:"0.65rem", color:"#9ca3af", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"0.6rem", fontWeight:600 }}>
                  Select Amount (₹)
                </p>

                <div className="amount-grid">
                  {DONATE_AMOUNTS.map(a => (
                    <button
                      key={a} className="amount-btn"
                      onClick={() => { setAmount(a); setCustom(""); }}
                      style={{
                        border: (!custom && amount === a) ? "2px solid #B8860B" : "2px solid #e5e7eb",
                        background: (!custom && amount === a) ? "#fffbeb" : "white",
                        color: (!custom && amount === a) ? "#92400e" : "#4b5563",
                      }}
                    >
                      ₹{a.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <input
                  type="number" placeholder="Enter custom amount (₹)"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setAmount(0); }}
                  style={{
                    width:"100%", boxSizing:"border-box",
                    border:"2px solid #e5e7eb", borderRadius:"0.75rem",
                    padding:"0.7rem 1rem", fontFamily:F, fontSize:"0.9rem",
                    color:"#111827", marginBottom:"1.5rem", outline:"none", transition:"border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "#B8860B"}
                  onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                />

                {/* ── Payment Mode Tabs ── */}
                <p style={{ fontFamily:F, fontSize:"0.65rem", color:"#9ca3af", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:"0.6rem", fontWeight:600 }}>
                  Payment Method
                </p>
                <div className="tab-bar">
                  <button className={`tab-btn ${payMode === "bank" ? "active" : ""}`} onClick={() => setPayMode("bank")}>
                    🏦 Bank Transfer
                  </button>
                  {UPI_ID && (
                    <button className={`tab-btn ${payMode === "upi" ? "active" : ""}`} onClick={() => setPayMode("upi")}>
                      📱 UPI
                    </button>
                  )}
                </div>

                {/* ── Bank Details ── */}
                {payMode === "bank" && (
                  <>
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
                  </>
                )}

                {/* ── UPI Section ── */}
                {payMode === "upi" && UPI_ID && (
                  <div style={{ textAlign:"center", marginBottom:"1.25rem" }}>
                    <div style={{ background:"#f9fafb", border:"1px solid #f3f4f6", borderRadius:"1rem", padding:"1.25rem", marginBottom:"0.75rem" }}>
                      <p style={{ fontFamily:F, fontSize:"0.75rem", color:"#6b7280", marginBottom:"0.5rem" }}>Scan or pay to UPI ID</p>
                      <p style={{ fontFamily:F, fontSize:"1.1rem", fontWeight:700, color:"#111827", margin:"0 0 0.75rem" }}>{UPI_ID}</p>
                      <button
                        onClick={() => copy(UPI_ID, "upi")}
                        style={{
                          background: copied === "upi" ? "#d1fae5" : "#e5e7eb",
                          color: copied === "upi" ? "#059669" : "#4b5563",
                          border:"none", borderRadius:"0.5rem", padding:"0.4rem 1rem",
                          fontFamily:F, fontSize:"0.8rem", fontWeight:600, cursor:"pointer",
                          display:"inline-flex", alignItems:"center", gap:"0.4rem",
                        }}
                      >
                        {copied === "upi" ? <><CheckCircle size={13}/> Copied!</> : <><Copy size={13}/> Copy UPI ID</>}
                      </button>
                    </div>
                    <p style={{ fontFamily:F, fontSize:"0.75rem", color:"#9ca3af" }}>
                      Pay via Google Pay, PhonePe, Paytm, or any UPI app
                    </p>
                  </div>
                )}

                <div style={{ background:"#fffbeb", border:"1px solid #fde68a", borderRadius:"0.75rem", padding:"0.85rem 1rem", marginBottom:"1.25rem" }}>
                  <p style={{ fontFamily:F, fontSize:"0.8rem", color:"#78350f", lineHeight:1.65, margin:0 }}>
                    💡 After transfer, share your transaction ID to{" "}
                    <strong>+91 {MOBILE}</strong> or <strong>{EMAIL}</strong>
                  </p>
                </div>

                {final > 0 && (
                  <div style={{
                    background:"linear-gradient(135deg,#0f172a,#1e3a8a)",
                    borderRadius:"0.875rem", padding:"0.9rem 1.25rem",
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                  }}>
                    <p style={{ fontFamily:F, color:"#93c5fd", fontSize:"0.875rem", margin:0 }}>Your donation</p>
                    <p style={{ fontFamily:S, color:"#fbbf24", fontSize:"2rem", fontWeight:700, margin:0 }}>
                      ₹{final.toLocaleString("en-IN")}
                    </p>
                  </div>
                )}

                <button className="submit-btn" onClick={handleSubmit} disabled={final <= 0}>
                  <Heart size={18} fill="white" />
                  Donate ₹{final > 0 ? final.toLocaleString("en-IN") : "..."} — Confirm
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
                <p style={{ fontFamily:F, fontSize:"0.95rem", color:"#6b7280", margin:"0 0 0.25rem", lineHeight:1.6 }}>
                  You are donating{" "}
                  <strong style={{ color:"#B8860B", fontSize:"1.1rem" }}>
                    ₹{final.toLocaleString("en-IN")}
                  </strong>{" "}
                  to {TRUST_NAME}.
                </p>
                <p style={{ fontFamily:F, fontSize:"0.85rem", color:"#9ca3af", margin:"0 0 1.5rem", lineHeight:1.6 }}>
                  Your contribution will help build a better tomorrow.
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

                <div style={{
                  background:"linear-gradient(135deg,#0f172a,#1e3a8a)",
                  borderRadius:"1rem", padding:"1rem 1.25rem", margin:"0.75rem 0 1.25rem",
                }}>
                  <p style={{ fontFamily:F, color:"#93c5fd", fontSize:"0.8rem", margin:"0 0 4px" }}>Donated Amount</p>
                  <p style={{ fontFamily:S, color:"#fbbf24", fontSize:"2.2rem", fontWeight:700, margin:0 }}>
                    ₹{final.toLocaleString("en-IN")}
                  </p>
                  <p style={{ fontFamily:F, color:"#64748b", fontSize:"0.75rem", margin:"6px 0 0" }}>
                    {TRUST_NAME}
                  </p>
                </div>

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