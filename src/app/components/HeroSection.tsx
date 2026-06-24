import { motion } from "motion/react";
import { useEffect, useRef } from "react";

function scrollToSection(id: string) {
  const container = document.getElementById("scroll-container");
  const target = document.getElementById(id);
  if (container && target) container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}

export function HeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px 60px",
        overflow: "hidden",
        background: "#08080f",
      }}
    >
      {/* Custom cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: "24px", height: "24px",
          borderRadius: "50%",
          border: "1px solid rgba(155,93,229,0.7)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.08s linear",
          mixBlendMode: "difference",
        }}
      />

      {/* Top-right label */}
      <div style={{
        position: "absolute", top: "80px", right: "40px",
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px",
      }}>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem", color: "#9b5de5",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}
        >
          Fullstack Webdev
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem", color: "#3d3060",
            letterSpacing: "0.1em",
          }}
        >
          GLU Utrecht — 2026
        </motion.span>
      </div>

      {/* Vertical line accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "80px", left: "40px",
          width: "1px", height: "180px",
          background: "linear-gradient(to bottom, #9b5de5, transparent)",
          transformOrigin: "top",
        }}
      />

      {/* Big name */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              color: "#f0eeff",
              margin: 0,
            }}
          >
            SULTAN
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(5rem, 18vw, 16rem)",
              lineHeight: 0.85,
              letterSpacing: "-0.04em",
              WebkitTextStroke: "2px #9b5de5",
              color: "transparent",
              margin: 0,
            }}
          >
            AVDI
          </motion.h1>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
          color: "#8876aa", maxWidth: "380px", lineHeight: 1.7,
          margin: 0,
        }}>
          Ik bouw websites die opvallen — van kiosks tot festival apps, altijd met aandacht voor detail en animatie.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              padding: "12px 28px", borderRadius: "4px",
              background: "#9b5de5", color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, fontSize: "0.85rem",
              border: "none", cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7c3aed")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#9b5de5")}
          >
            Projecten ↗
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              padding: "12px 28px", borderRadius: "4px",
              background: "transparent", color: "#8876aa",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600, fontSize: "0.85rem",
              border: "1px solid #3d3060", cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#9b5de5"; e.currentTarget.style.color = "#c8b8ff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#3d3060"; e.currentTarget.style.color = "#8876aa"; }}
          >
            Contact
          </button>
        </div>
      </motion.div>

      {/* Horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "0", left: "0", right: "0",
          height: "1px", background: "rgba(155,93,229,0.15)",
          transformOrigin: "left",
        }}
      />
    </section>
  );
}
