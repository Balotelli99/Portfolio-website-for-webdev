import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, GraduationCap, Code2, MapPin } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const info = [
    { icon: <GraduationCap size={18} />, label: "Opleiding", value: "Software Developer — GLU Utrecht" },
    { icon: <Code2 size={18} />, label: "Specialisatie", value: "Fullstack Webdevelopment" },
    { icon: <MapPin size={18} />, label: "Locatie", value: "Utrecht, Nederland" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "160px 40px",
        background: "#020617",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem", color: "#10b981",
            letterSpacing: "0.3em", textTransform: "uppercase",
            marginBottom: "24px", display: "block",
          }}
        >
          01 // OVER MIJ
        </motion.span>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "80px", alignItems: "start" }}>
          {/* Left: tekst */}
          <div>
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                color: "#f8fafc",
                letterSpacing: "-0.02em",
                margin: "0 0 40px 0"
              }}
            >
              Hey, ik ben <span style={{ color: "#10b981" }}>Sultan Avdi</span>
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {[
                {
                  title: "Wie ik ben",
                  text: "Ik ben een Software Developer student aan het Grafisch Lyceum Utrecht (GLU). Ik ben gepassioneerd over het bouwen van moderne, functionele websites en applicaties die er ook geweldig uitzien.",
                },
                {
                  title: "Wat ik doe",
                  text: "Ik richt me op fullstack webdevelopment — van backend logica tot strakke frontend interfaces. Ik werk graag aan projecten waarbij design en technologie samenkomen tot iets tastbaars en moois.",
                },
                {
                  title: "Mijn doel",
                  text: "Na mijn opleiding wil ik werken aan uitdagende projecten waarbij ik mezelf blijf verbeteren als developer. Ik leer snel, werk hard en lever kwaliteit.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  <h4 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1rem", fontWeight: 600, color: "#f8fafc",
                    marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px"
                  }}>
                    <span style={{ width: "20px", height: "2px", background: "#10b981", flexShrink: 0 }} />
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem", color: "#94a3b8",
                    lineHeight: 1.8, margin: "0 0 0 30px"
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* GitHub link */}
            <motion.a
              href="https://github.com/balotelli99"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                marginTop: "40px",
                padding: "14px 28px", borderRadius: "100px",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
                color: "#f8fafc",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600, fontSize: "0.95rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(16,185,129,0.12)";
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(16,185,129,0.06)";
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Github size={20} color="#10b981" />
              github.com/balotelli99
            </motion.a>
          </div>

          {/* Right: info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "20px" }}>
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(16,185,129,0.12)",
                  borderRadius: "16px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                  background: "rgba(16,185,129,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#10b981",
                }}>
                  {item.icon}
                </div>
                <div>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem", color: "#10b981",
                    textTransform: "uppercase", letterSpacing: "0.15em",
                    display: "block", marginBottom: "4px"
                  }}>
                    {item.label}
                  </span>
                  <span style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.95rem", fontWeight: 600, color: "#f8fafc"
                  }}>
                    {item.value}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Status card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                marginTop: "8px",
                background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(16,185,129,0.3)", padding: "20px 24px",
                borderRadius: "16px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem", color: "#10b981",
                display: "block", marginBottom: "10px", letterSpacing: "0.15em", textTransform: "uppercase"
              }}>
                Status
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#10b981", display: "inline-block",
                  boxShadow: "0 0 8px #10b981"
                }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem", fontWeight: 600, color: "#f8fafc"
                }}>
                  Open voor stageplekken &amp; projecten
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
