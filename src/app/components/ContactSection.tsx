import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 4000);
  }

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(155,93,229,0.25)",
    color: "#f0eeff",
    padding: "12px 0",
    width: "100%",
    outline: "none",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1rem",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#09090f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left — big heading + socials */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: "80px 40px 60px",
        borderRight: "1px solid rgba(155,93,229,0.1)",
      }}>
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem", color: "#9b5de5",
              letterSpacing: "0.2em", textTransform: "uppercase",
              display: "block", marginBottom: "40px",
            }}
          >
            04 — Contact
          </motion.span>

          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9,
                letterSpacing: "-0.03em", color: "#f0eeff", margin: 0,
              }}
            >
              Laten
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 0.9,
                letterSpacing: "-0.03em",
                WebkitTextStroke: "2px #9b5de5",
                color: "transparent",
                margin: 0,
              }}
            >
              we praten
            </motion.h2>
          </div>
        </div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {[
            { icon: <Mail size={14} />, label: "jouw@email.nl", href: "mailto:jouw@email.nl" },
            { icon: <Github size={14} />, label: "github.com/sultan", href: "https://github.com/" },
            { icon: <Linkedin size={14} />, label: "linkedin.com/in/sultan", href: "https://linkedin.com/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem", color: "#8876aa",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b8ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8876aa")}
            >
              {link.icon} {link.label}
            </a>
          ))}

          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem", color: "#3d3060",
            letterSpacing: "0.08em", marginTop: "24px",
          }}>
            © {new Date().getFullYear()} Sultan Avdi
          </p>
        </motion.div>
      </div>

      {/* Right — form */}
      <div style={{
        display: "flex", alignItems: "center",
        padding: "80px 48px 60px",
      }}>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ width: "100%" }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <span style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 800,
                fontSize: "2rem", color: "#9b5de5",
              }}>
                Verstuurd ✓
              </span>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem", color: "#8876aa",
              }}>
                Ik neem zo snel mogelijk contact op.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                { key: "name", label: "Naam", type: "text", placeholder: "Jouw naam" },
                { key: "email", label: "Email", type: "email", placeholder: "jouw@email.nl" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem", color: "#9b5de5",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                  }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderBottomColor = "rgba(155,93,229,0.7)")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(155,93,229,0.25)")}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", color: "#9b5de5",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>
                  Bericht
                </label>
                <textarea
                  placeholder="Vertel me over je project..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = "rgba(155,93,229,0.7)")}
                  onBlur={(e) => (e.target.style.borderBottomColor = "rgba(155,93,229,0.25)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  alignSelf: "flex-start",
                  padding: "12px 28px",
                  borderRadius: "3px",
                  background: "#9b5de5", color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: "0.85rem",
                  border: "none", cursor: "pointer",
                  letterSpacing: "0.05em",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#7c3aed"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#9b5de5"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                Stuur bericht <Send size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Big number bg */}
      <div style={{
        position: "absolute", bottom: "20px", right: "40px",
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "8rem", lineHeight: 1,
        color: "rgba(155,93,229,0.04)",
        userSelect: "none",
      }}>
        04
      </div>
    </section>
  );
}
