import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 4000);
  }

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(15, 23, 42, 0.5)",
    border: "1px solid rgba(16, 185, 129, 0.1)",
    borderRadius: "12px",
    color: "#f8fafc",
    padding: "16px 20px",
    width: "100%",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "160px 40px",
        background: "#020617",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <div style={{
        position: "absolute", top: "50%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none"
      }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "100px", alignItems: "start" }}>
          
          {/* Left Side */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem", color: "#10b981",
                letterSpacing: "0.4em", textTransform: "uppercase",
                marginBottom: "24px", display: "block",
              }}
            >
              04 // CONNECT
            </motion.span>
            
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 1,
                color: "#f8fafc",
                letterSpacing: "-0.03em",
                margin: "0 0 40px 0"
              }}
            >
              Ready to <br />
              <span style={{ color: "#10b981" }}>innovate?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem", color: "#94a3b8",
                lineHeight: 1.8, marginBottom: "56px",
                maxWidth: "400px"
              }}
            >
              Heb je een idee, een project of gewoon een vraag? Stuur me een bericht en laten we samen iets moois bouwen.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: <Mail size={20} />, label: "jouw@email.nl", sub: "Schrijf me een mail" },
                { icon: <Linkedin size={20} />, label: "Sultan Avdi", sub: "Check mijn LinkedIn" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: "rgba(16,185,129,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center", color: "#10b981"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ display: "block", color: "#f8fafc", fontWeight: 600, fontSize: "1rem", fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                    <span style={{ display: "block", color: "#94a3b8", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif" }}>{item.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: "rgba(15, 23, 42, 0.4)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(16, 185, 129, 0.1)",
              borderRadius: "32px",
              padding: "48px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.4)"
            }}
          >
            {sent ? (
               <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ 
                    width: "80px", height: "80px", borderRadius: "50%", background: "rgba(16,185,129,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981",
                    margin: "0 auto 24px"
                  }}>
                    <Send size={32} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", color: "#f8fafc", marginBottom: "12px" }}>Message Received!</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: "#94a3b8" }}>Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={inputContainerStyle}>
                  <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#f8fafc", fontWeight: 500 }}>Volledige Naam</label>
                  <input
                    type="text"
                    required
                    placeholder="Sultan Avdi"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                      e.target.style.background = "rgba(15, 23, 42, 0.8)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(16, 185, 129, 0.1)";
                      e.target.style.background = "rgba(15, 23, 42, 0.5)";
                    }}
                  />
                </div>

                <div style={inputContainerStyle}>
                  <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#f8fafc", fontWeight: 500 }}>Email Adres</label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(16, 185, 129, 0.1)";
                    }}
                  />
                </div>

                <div style={inputContainerStyle}>
                  <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#f8fafc", fontWeight: 500 }}>Jouw Bericht</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Vertel me over je ideeën..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#10b981";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(16, 185, 129, 0.1)";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "18px", borderRadius: "16px",
                    background: "#10b981", color: "#020617",
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700, fontSize: "1.1rem",
                    border: "none", cursor: "pointer",
                    marginTop: "12px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 30px 60px rgba(16, 185, 129, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.2)";
                  }}
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer info */}
        <div style={{ marginTop: "120px", paddingTop: "40px", borderTop: "1px solid rgba(248, 250, 252, 0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#94a3b8", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
           <span>© 2026 Sultan Avdi. All rights reserved.</span>
           <div style={{ display: "flex", gap: "24px" }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Dribbble</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Twitter</a>
           </div>
        </div>
      </div>
    </section>
  );
}
