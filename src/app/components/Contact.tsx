import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  const inputStyle = {
    background: "#0f0f1a",
    border: "1px solid rgba(155,93,229,0.2)",
    color: "#f0eeff",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    outline: "none",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.95rem",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-32 px-6" style={{ background: "#0a0a15" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#9b5de5",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            04. Contact
          </span>
          <h2
            className="mt-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f0eeff",
            }}
          >
            Laten we samenwerken
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#8876aa",
              fontSize: "1rem",
            }}
          >
            Heb je een project, een vraag, of gewoon een goed idee? Stuur me een bericht.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl p-8"
          style={{ background: "#0f0f1a", border: "1px solid rgba(155,93,229,0.15)" }}
        >
          {sent ? (
            <div className="flex flex-col items-center gap-4 py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(155,93,229,0.15)", border: "1px solid rgba(155,93,229,0.3)" }}
              >
                <Send size={24} style={{ color: "#9b5de5" }} />
              </motion.div>
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#f0eeff",
                }}
              >
                Bericht verstuurd!
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8876aa", fontSize: "0.9rem" }}>
                Ik neem zo snel mogelijk contact op.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      color: "#c8b8ff",
                    }}
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    placeholder="Jouw naam"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.2)")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      color: "#c8b8ff",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jouw@email.nl"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.2)")}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem",
                    color: "#c8b8ff",
                  }}
                >
                  Bericht
                </label>
                <textarea
                  placeholder="Vertel me over je project of idee..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(155,93,229,0.2)")}
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #9b5de5)",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(124,58,237,0.35)",
                }}
              >
                <Send size={16} /> Verstuur bericht
              </button>
            </form>
          )}
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-8"
        >
          {[
            { icon: <Mail size={18} />, label: "jouw@email.nl", href: "mailto:jouw@email.nl" },
            { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/" },
            { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://linkedin.com/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 transition-colors duration-200 hover:text-purple-300"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "#8876aa",
              }}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
