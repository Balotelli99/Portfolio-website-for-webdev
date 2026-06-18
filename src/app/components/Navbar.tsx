import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Over mij", section: "about" },
  { href: "#skills", label: "Skills", section: "skills" },
  { href: "#projects", label: "Projecten", section: "projects" },
  { href: "#contact", label: "Contact", section: "contact" },
];

function scrollToSection(id: string) {
  const container = document.getElementById("scroll-container");
  const target = document.getElementById(id);
  if (container && target) {
    container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  }
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;
    const handler = () => {
      const scrollY = container.scrollTop;
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY + 80) {
          setActive(id);
          break;
        }
      }
    };
    container.addEventListener("scroll", handler);
    return () => container.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(8,8,15,0.7)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(155,93,229,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            color: "#f0eeff",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.02em",
          }}
        >
          SA<span style={{ color: "#9b5de5" }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className="relative px-4 py-2 rounded-full transition-all duration-200"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.875rem",
                color: active === link.section ? "#c8b8ff" : "#8876aa",
                background: active === link.section ? "rgba(155,93,229,0.1)" : "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="ml-4 px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #9b5de5)",
              color: "#fff",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(124,58,237,0.3)",
            }}
          >
            Hire me
          </button>
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "#9b5de5", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-6 py-6 flex flex-col gap-4"
          style={{ background: "rgba(8,8,15,0.97)", borderBottom: "1px solid rgba(155,93,229,0.15)" }}
        >
          {links.map((link) => (
            <button
              key={link.section}
              onClick={() => { scrollToSection(link.section); setMenuOpen(false); }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                color: "#c8b8ff",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
