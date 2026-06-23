import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(155,93,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(155,93,229,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Purple glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124,58,237,0.18)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(155,93,229,0.12)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm"
          style={{
            borderColor: "rgba(155,93,229,0.4)",
            background: "rgba(155,93,229,0.08)",
            color: "#c8b8ff",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Available for projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#f0eeff",
          }}
        >
          Sultan
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #9b5de5 0%, #c8b8ff 50%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Avdi
          </span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 mb-10"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "#8876aa",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Fullstack Webdev in opleiding &nbsp;·&nbsp; GLU Utrecht
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #9b5de5)",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              boxShadow: "0 0 30px rgba(124,58,237,0.4)",
            }}
          >
            Bekijk projecten
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "rgba(155,93,229,0.4)",
              background: "rgba(155,93,229,0.06)",
              color: "#c8b8ff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        style={{ color: "#8876aa" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  );
}
