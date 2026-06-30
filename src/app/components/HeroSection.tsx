import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
        overflow: "hidden",
        background: "#020617",
      }}
    >
      {/* Background Orbs */}
      <div style={{
        position: "absolute", top: "10%", left: "10%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: "35vw", height: "35vw",
        background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none"
      }} />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem", color: "#10b981",
            letterSpacing: "0.4em", textTransform: "uppercase",
            background: "rgba(16,185,129,0.05)",
            padding: "8px 24px", borderRadius: "100px",
            border: "1px solid rgba(16,185,129,0.15)",
            display: "inline-block", marginBottom: "32px"
          }}>
            Available for Projects — 2026
          </span>
        </motion.div>

        <div style={{ position: "relative" }}>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
              margin: 0,
            }}
          >
            CREATING <br />
            <span style={{ 
              color: "transparent", 
              WebkitTextStroke: "1px rgba(248, 250, 252, 0.3)",
              fontStyle: "italic" 
            }}>DIGITAL</span> BOLDNESS
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "#94a3b8", maxWidth: "700px", lineHeight: 1.5,
            margin: "40px auto 0", fontWeight: 400
          }}
        >
          Sultan Avdi — Fullstack Developer gepassioneerd door impactvolle 
          <span style={{ color: "#f8fafc", fontWeight: 600 }}> web experiences </span> 
          en hoogwaardige interface designs.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "56px" }}
        >
          <button
            onClick={() => window.scrollTo({ top: document.getElementById("projects")?.offsetTop, behavior: "smooth" })}
            style={{
              padding: "16px 40px", borderRadius: "100px",
              background: "#10b981", color: "#020617",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700, fontSize: "1rem",
              border: "none", cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)",
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
            Bekijk mijn werk
          </button>
          <button
            onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
            style={{
              padding: "16px 40px", borderRadius: "100px",
              background: "rgba(248, 250, 252, 0.03)", color: "#f8fafc",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600, fontSize: "1rem",
              border: "1px solid rgba(248, 250, 252, 0.1)", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(248, 250, 252, 0.08)";
              e.currentTarget.style.borderColor = "rgba(248, 250, 252, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(248, 250, 252, 0.03)";
              e.currentTarget.style.borderColor = "rgba(248, 250, 252, 0.1)";
            }}
          >
            Samenwerken?
          </button>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
          opacity: 0.5
        }}
      >
        <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, #10b981, transparent)" }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.2em" }}>SCROLL</span>
      </motion.div>
    </section>
  );
}
