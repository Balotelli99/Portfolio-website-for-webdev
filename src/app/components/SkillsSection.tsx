import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const techStack = [
  { name: "PHP", note: "Backend logic" },
  { name: "JavaScript", note: "DOM, events, async" },
  { name: "Node.js", note: "Server-side JS, APIs" },
  { name: "React", note: "Component-based UI" },
  { name: "CSS", note: "Animaties, responsive layouts" },
  { name: "MySQL", note: "Databases, relaties, queries" },
  { name: "HTML", note: "Semantisch, toegankelijk" },
  { name: "Git", note: "Versiebeheer, GitHub" },
];

const traits = ["Creatief", "Detail-gericht", "Leergierig", "Doorzetter", "Teamspeler"];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 40px 40px",
        background: "#09090f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        {/* Header row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          marginBottom: "60px", flexWrap: "wrap", gap: "16px",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem",
              color: "#9b5de5", letterSpacing: "0.2em", textTransform: "uppercase",
              display: "block", marginBottom: "12px",
            }}>
              02 — Vaardigheden
            </span>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 0.9,
              letterSpacing: "-0.03em", color: "#f0eeff", margin: 0,
            }}>
              Tech<br />
              <span style={{ color: "#9b5de5" }}>Stack</span>
            </h2>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}
          >
            {traits.map((trait, i) => (
              <motion.span
                key={trait}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem", color: "#3d3060",
                  fontStyle: "italic",
                }}
              >
                {trait}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Tech list — horizontal table style */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 0",
                borderBottom: "1px solid rgba(155,93,229,0.1)",
                cursor: "default",
                transition: "padding-left 0.25s",
                gap: "20px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem", color: "#3d3060",
                  minWidth: "24px",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "clamp(1rem, 2.5vw, 1.6rem)", color: "#f0eeff",
                  letterSpacing: "-0.01em",
                }}>
                  {tech.name}
                </span>
              </div>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.8rem", color: "#8876aa",
                textAlign: "right",
              }}>
                {tech.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Big bg number */}
      <div style={{
        position: "absolute", bottom: "20px", right: "40px",
        fontFamily: "'Syne', sans-serif", fontWeight: 800,
        fontSize: "8rem", lineHeight: 1,
        color: "rgba(155,93,229,0.04)",
        userSelect: "none",
      }}>
        02
      </div>
    </section>
  );
}
