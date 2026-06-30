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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "160px 40px",
        background: "#020617",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           style={{ marginBottom: "80px" }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
            color: "#10b981", letterSpacing: "0.3em", textTransform: "uppercase",
            display: "block", marginBottom: "16px",
          }}>
            02 // EXPERTISE
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            letterSpacing: "-0.02em", color: "#f8fafc", margin: 0,
          }}>
            Technical <span style={{ color: "#10b981" }}>Arsenal</span>
          </h2>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "24px" 
        }}>
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
              style={{
                background: "rgba(15, 23, 42, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(16, 185, 129, 0.1)",
                borderRadius: "20px",
                padding: "32px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.background = "rgba(16, 185, 129, 0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "rgba(15, 23, 42, 0.4)";
              }}
            >
              <div style={{
                position: "absolute", top: "0", left: "0", width: "100%", height: "2px",
                background: "linear-gradient(90deg, transparent, #10b981, transparent)",
                opacity: 0, transition: "opacity 0.3s"
              }} className="group-hover:opacity-100" />

              <span style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: "1.5rem", color: "#f8fafc",
                display: "block", marginBottom: "8px"
              }}>
                {tech.name}
              </span>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem", color: "#94a3b8",
                lineHeight: 1.6, margin: 0
              }}>
                {tech.note}
              </p>
              
              <div style={{ 
                marginTop: "24px", 
                width: "40px", height: "1px", 
                background: "rgba(16, 185, 129, 0.3)",
                transition: "width 0.3s"
              }} className="group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
