import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          01 // PHILOSOPHY
        </motion.span>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "80px", alignItems: "start" }}>
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
                margin: "0 0 48px 0"
              }}
            >
              Building with <span style={{ color: "#10b981" }}>Purpose</span> & <br />
              Digital Elegance.
            </motion.h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {[
                {
                  title: "De Visie",
                  text: "Ik ben Sultan Avdi, een developer die gelooft dat code meer is dan logica — het is een canvas voor interactief design. Bij Grafisch Lyceum Utrecht leer ik hoe ik technologie kan inzetten om verhalen te vertellen.",
                },
                {
                  title: "De Aanpak",
                  text: "Elk project begint met de vraag: 'Hoe maken we dit memorabel?' Of het nu een kiosk systeem is of een festival app, de focus ligt op naadloze performance en een interface die spreekt.",
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                >
                  <h4 style={{ 
                    fontFamily: "'Outfit', sans-serif", 
                    fontSize: "1.1rem", fontWeight: 600, color: "#f8fafc",
                    marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px"
                  }}>
                    <span style={{ width: "20px", height: "2px", background: "#10b981" }} />
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.05rem", color: "#94a3b8",
                    lineHeight: 1.8, margin: 0
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", paddingTop: "60px" }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                width: "100%", aspectRatio: "4/5",
                background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(15,23,42,1) 100%)",
                borderRadius: "24px",
                border: "1px solid rgba(16,185,129,0.2)",
                padding: "20px", position: "relative", zIndex: 2
              }}
            >
              {/* Abstract Shape */}
              <div style={{
                width: "100%", height: "100%",
                background: "rgba(16,185,129,0.03)",
                borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "20px"
              }}>
                 <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#10b981" }} />
                 <div style={{ width: "120px", height: "8px", borderRadius: "4px", background: "rgba(16,185,129,0.2)" }} />
                 <div style={{ width: "90px", height: "8px", borderRadius: "4px", background: "rgba(16,185,129,0.1)" }} />
              </div>
            </motion.div>
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", top: "0", right: "-20px",
                background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(10px)",
                border: "1px solid rgba(16,185,129,0.3)", padding: "20px",
                borderRadius: "16px", zIndex: 3, boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
               <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#10b981", display: "block", marginBottom: "8px" }}>STATUS</span>
               <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#f8fafc" }}>Currently building in Utrecht</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
