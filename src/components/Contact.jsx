import { useState } from "react";
import { Phone, Mail, MapPin, CreditCard, Globe, ArrowRight, CheckCircle, XCircle, Loader } from "lucide-react";
import { MOBILE, EMAIL, ADDRESS, PAN, DARPAN } from "./Constants";

const CONTACT_ITEMS = [
  { Icon: Phone,      label: "Mobile",    val: `+91 ${MOBILE}` },
  { Icon: Mail,       label: "Email",     val: EMAIL },
  { Icon: MapPin,     label: "Address",   val: ADDRESS },
  { Icon: CreditCard, label: "PAN",       val: PAN },
  { Icon: Globe,      label: "DARPAN ID", val: DARPAN },
];

// ── CHANGE THIS to your actual backend endpoint ──
const API_URL = "http://localhost/send-mail.php";

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #e5e7eb",
  background: "white",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  fontFamily: "'Outfit',sans-serif",
  fontSize: "0.875rem",
  color: "#111827",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", contact: "", subject: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errMsg, setErrMsg] = useState("");

  const set = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.firstName.trim() || !form.contact.trim() || !form.message.trim()) {
      setStatus("error");
      setErrMsg("Please fill in Name, Contact, and Message.");
      return;
    }

    setStatus("sending");
    setErrMsg("");

    try {
      const res  = await fetch(API_URL, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", contact: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrMsg("Could not reach the server. Please try again later.");
    }
  };

  return (
    <>
      <style>{`
        .contact-section { padding: 7rem 0; background: white; }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-form-box {
          background: #f9fafb;
          border-radius: 1.25rem;
          padding: 2.25rem;
          border: 1px solid #f3f4f6;
        }

        .name-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

        .contact-send-btn {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          background: #B8860B;
          color: white;
          border: none;
          border-radius: 0.875rem;
          padding: 1rem;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.25s, transform 0.15s;
        }
        .contact-send-btn:hover:not(:disabled) {
          background: #9a7209;
          transform: translateY(-1px);
        }
        .contact-send-btn:disabled { background: #d1d5db; cursor: not-allowed; }

        .ack-box {
          border-radius: 0.875rem;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        .ack-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; }
        .ack-error   { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 0.8s linear infinite; }

        @media (max-width: 900px) {
          .contact-container { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 600px) {
          .contact-section   { padding: 3.5rem 0; }
          .contact-container { padding: 0 1rem; gap: 2.5rem; }
          .contact-form-box  { padding: 1.5rem 1.25rem; }
          .name-row          { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-container">

          {/* ── Left — info ── */}
          <div>
            <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.7rem", letterSpacing:"0.17em", textTransform:"uppercase", color:"#B8860B", fontWeight:600, marginBottom:"0.75rem" }}>
              Get In Touch
            </p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:300, color:"#111827", margin:"0 0 0.5rem" }}>
              Contact{" "}
              <span style={{ fontStyle:"italic", fontWeight:600, color:"#B8860B" }}>Us</span>
            </h2>
            <div style={{ width:"60px", height:"3px", background:"#B8860B", marginBottom:"1.5rem" }} />
            <p style={{ fontFamily:"'Outfit',sans-serif", color:"#6b7280", fontSize:"0.93rem", lineHeight:1.75, marginBottom:"2.5rem" }}>
              Reach out for donations, partnerships, volunteering, or any enquiries about our programs and initiatives.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
              {CONTACT_ITEMS.map(({ Icon, label, val }) => (
                <div key={label} style={{ display:"flex", alignItems:"flex-start", gap:"1rem" }}>
                  <div style={{
                    width:"40px", height:"40px", background:"#fffbeb",
                    border:"1px solid #fde68a", borderRadius:"0.75rem",
                    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
                  }}>
                    <Icon size={16} style={{ color:"#92400e" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.1em", margin:"0 0 2px" }}>
                      {label}
                    </p>
                    <p style={{ fontFamily:"'Outfit',sans-serif", color:"#374151", fontSize:"0.875rem", margin:0, wordBreak:"break-word" }}>
                      {val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — form ── */}
          <div className="contact-form-box">
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.6rem", fontWeight:600, color:"#111827", marginBottom:"1.5rem" }}>
              Send A Message
            </h3>

            <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>

              {/* Name */}
              <div className="name-row">
                {[["firstName","First Name","First Name",true],["lastName","Last Name","Last Name",false]].map(([field,lbl,ph,req]) => (
                  <div key={field}>
                    <label style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.5rem" }}>
                      {lbl}{req && <span style={{ color:"#ef4444" }}> *</span>}
                    </label>
                    <input
                      type="text" placeholder={ph}
                      value={form[field]}
                      onChange={set(field)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor="#B8860B"}
                      onBlur={e => e.target.style.borderColor="#e5e7eb"}
                    />
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div>
                <label style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.5rem" }}>
                  Email / Phone <span style={{ color:"#ef4444" }}>*</span>
                </label>
                <input
                  type="text" placeholder="email or mobile number"
                  value={form.contact}
                  onChange={set("contact")}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor="#B8860B"}
                  onBlur={e => e.target.style.borderColor="#e5e7eb"}
                />
              </div>

              {/* Subject */}
              <div>
                <label style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.5rem" }}>
                  Subject
                </label>
                <input
                  type="text" placeholder="Donation / Volunteering / Query"
                  value={form.subject}
                  onChange={set("subject")}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor="#B8860B"}
                  onBlur={e => e.target.style.borderColor="#e5e7eb"}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ fontFamily:"'Outfit',sans-serif", fontSize:"0.65rem", color:"#9ca3af", textTransform:"uppercase", letterSpacing:"0.1em", display:"block", marginBottom:"0.5rem" }}>
                  Message <span style={{ color:"#ef4444" }}>*</span>
                </label>
                <textarea
                  rows={4} placeholder="Write your message here..."
                  value={form.message}
                  onChange={set("message")}
                  style={{ ...inputStyle, resize:"none" }}
                  onFocus={e => e.target.style.borderColor="#B8860B"}
                  onBlur={e => e.target.style.borderColor="#e5e7eb"}
                />
              </div>

              {/* Button */}
              <button
                className="contact-send-btn"
                onClick={handleSubmit}
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? <><Loader size={16} className="spin" /> Sending...</>
                  : <>Send Message <ArrowRight size={16} /></>
                }
              </button>

              {/* ── Acknowledgment ── */}
              {status === "success" && (
                <div className="ack-box ack-success">
                  <CheckCircle size={20} style={{ flexShrink:0, marginTop:2 }} />
                  <div>
                    <strong>Message sent successfully!</strong><br />
                    Thank you for reaching out. We will get back to you within 24–48 hours.
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="ack-box ack-error">
                  <XCircle size={20} style={{ flexShrink:0, marginTop:2 }} />
                  <div>
                    <strong>Could not send message.</strong><br />
                    {errMsg}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>
    </>
  );
}