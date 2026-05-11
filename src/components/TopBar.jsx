// TopBar.jsx
import { PAN, DARPAN, ADDRESS } from "./constants";

export default function TopBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "#0a0f1e",
        borderBottom: "1px solid rgba(251,191,36,0.18)",
        position: "fixed",
        height: "36px",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px 16px",
          overflow: "hidden",
        }}
      >
        {/* Left — PAN + DARPAN */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px 12px",
            flexWrap: "nowrap",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              color: "#94a3b8",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#fbbf24", fontWeight: 700, marginRight: 4 }}>
              PAN:
            </span>
            {PAN}
          </span>

          {/* Divider — hidden on very small screens */}
          <span
            className="hidden sm:inline"
            style={{ color: "rgba(251,191,36,0.3)", fontSize: "0.65rem" }}
          >
            |
          </span>

          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.68rem",
              color: "#94a3b8",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#fbbf24", fontWeight: 700, marginRight: 4 }}>
              DARPAN:
            </span>
            {DARPAN}
          </span>
        </div>

        {/* Right — Address (hidden on small screens) */}
        <span
          className="hidden md:inline"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.64rem",
            color: "#475569",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "420px",
          }}
        >
          📍 {ADDRESS}
        </span>
      </div>
    </div>
  );
}