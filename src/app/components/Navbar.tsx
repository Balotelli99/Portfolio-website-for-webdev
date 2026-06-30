import { motion, AnimatePresence } from "motion/react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none"
    >
      <div 
        className="pointer-events-auto transition-all duration-500 ease-out"
        style={{
          width: scrolled ? "fit-content" : "100%",
          maxWidth: scrolled ? "500px" : "1200px",
          background: scrolled ? "rgba(15, 23, 42, 0.3)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid transparent",
          borderRadius: scrolled ? "100px" : "0",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0 8px 0 24px" : "0 0 0 0",
          boxShadow: scrolled ? "0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(16, 185, 129, 0.05)" : "none",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            color: "#f8fafc",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-0.03em",
            display: scrolled ? "none" : "block",
          }}
        >
          SULTAN<span style={{ color: "#10b981" }}>.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" style={{ margin: scrolled ? "0 auto" : "0" }}>
          {links.map((link) => (
            <button
              key={link.section}
              onClick={() => {
                const el = document.getElementById(link.section);
                if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
              }}
              className="relative px-4 py-2 rounded-full transition-all duration-300"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: active === link.section ? "#10b981" : "#94a3b8",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
              {active === link.section && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500"
                  style={{ marginBottom: "2px" }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
            }}
            className="ml-2 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "#10b981",
              color: "#020617",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
            }}
          >
            LET'S TALK
          </button>
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "#10b981", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed top-24 left-6 right-6 p-6 flex flex-col gap-4 rounded-3xl"
            style={{ 
              background: "rgba(15, 23, 42, 0.95)", 
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
            }}
          >
            {links.map((link) => (
              <button
                key={link.section}
                onClick={() => { 
                  const el = document.getElementById(link.section);
                  if (el) window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
                  setMenuOpen(false); 
                }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  color: active === link.section ? "#10b981" : "#f8fafc",
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
      </AnimatePresence>
    </motion.header>
  );
}
