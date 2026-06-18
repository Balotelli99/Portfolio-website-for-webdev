import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const lines = [
  "Ik ben Sultan Avdi,",
  "student aan het Grafisch",
  "Lyceum Utrecht.",
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "#08080f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left — large text */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "80px 40px 40px",
        borderRight: "1px solid rgba(155,93,229,0.1)",
      }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem", color: "#9b5de5",
            letterSpacing: "0.2em", textTransform: "uppercase",
            marginBottom: "40px", display: "block",
          }}
        >
          01 — Over mij
        </motion.span>

        <div>
          {lines.map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.p
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: i === 2 ? "#9b5de5" : "#f0eeff",
                  margin: 0,
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Placeholder photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: "48px",
            width: "100%", maxWidth: "280px",
            aspectRatio: "1",
            borderRadius: "8px",
            background: "#0f0f1a",
            border: "1px solid rgba(155,93,229,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ opacity: 0.15, display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#9b5de5" }} />
            <div style={{ width: "100px", height: "80px", borderRadius: "50px 50px 0 0", background: "#7c3aed" }} />
          </div>
          <span style={{
            position: "absolute", bottom: "12px", left: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.6rem", color: "rgba(155,93,229,0.35)",
            letterSpacing: "0.08em",
          }}>
            // foto volgt
          </span>
        </motion.div>
      </div>

      {/* Right — details */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "80px 48px 40px",
        gap: "40px",
      }}>
        {[
          {
            title: "Wie ben ik?",
            text: "Ik ben een fullstack webdev student die houdt van websites met persoonlijkheid. Niet saai, niet standaard — iets dat bijblijft.",
          },
          {
            title: "Wat drijft me?",
            text: "De combinatie van design en code. Een idee omzetten in iets wat echt werkt en er goed uitziet — dat geeft me energie.",
          },
          {
            title: "Waar naartoe?",
            text: "Groeien als developer, meer bouwen, en uiteindelijk werken aan projecten die ertoe doen.",
          },
        ].map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem", color: "#9b5de5",
              letterSpacing: "0.15em", textTransform: "uppercase",
              marginBottom: "10px",
            }}>
              {block.title}
            </p>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem", color: "#8876aa",
              lineHeight: 1.75,
            }}>
              {block.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Section number */}
      <div style={{
        position: "absolute", bottom: "40px", right: "40px",
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "8rem", lineHeight: 1,
        color: "rgba(155,93,229,0.04)",
        userSelect: "none",
      }}>
        01
      </div>
    </section>
  );
}
