import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import uFestivalImg from "@/imports/Schermafbeelding_2026-06-17_105535.png";
import saChatImg from "@/imports/Schermafbeelding_2026-06-17_113754.png";

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  image?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "CMS Webshop",
    year: "2025",
    type: "E-commerce",
    description: "Volledig functionele webshop met een custom CMS. Producten, categorieën en bestellingen beheerbaar via een eigen admin panel.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
  {
    id: "02",
    title: "SA Chat",
    year: "2025",
    type: "Real-time App",
    description: "Real-time chat applicatie met live chatrooms. Gebruikers verbinden en sturen berichten zonder page refresh.",
    tags: ["Node.js", "JavaScript", "CSS"],
    github: "#",
    live: null,
    image: saChatImg,
  },
  {
    id: "03",
    title: "Kapper Website",
    year: "2025",
    type: "Business Website",
    description: "Stijlvolle website voor een kapper met online boekingssysteem en responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "#",
    live: "#",
  },
  {
    id: "04",
    title: "U Festival App",
    year: "2025",
    type: "Festival App",
    description: "Festival app voor Utrecht met artiesten lineup, tijdschema en persoonlijk schema. Mobiel-first.",
    tags: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "https://ufestival-rpa4.onrender.com",
    image: uFestivalImg,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.id === active);

  return (
    <section
      id="projects"
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
      {/* Left — project list */}
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
          03 — Projecten
        </motion.span>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActive(project.id)}
              onMouseLeave={() => setActive(null)}
              style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 0",
                borderBottom: "1px solid rgba(155,93,229,0.08)",
                cursor: "pointer",
                transition: "padding-left 0.3s",
                paddingLeft: active === project.id ? "16px" : "0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  color: active === project.id ? "#9b5de5" : "#3d3060",
                  transition: "color 0.3s",
                }}>
                  {project.id}
                </span>
                <span style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
                  color: active === project.id ? "#f0eeff" : "#8876aa",
                  letterSpacing: "-0.01em",
                  transition: "color 0.3s",
                }}>
                  {project.title}
                </span>
              </div>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.65rem", color: "#3d3060",
              }}>
                {project.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right — project detail */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "80px 48px 40px",
        position: "relative",
      }}>
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Preview */}
              <div style={{
                width: "100%", aspectRatio: "16/9",
                borderRadius: "8px", overflow: "hidden",
                border: "1px solid rgba(155,93,229,0.15)",
                position: "relative",
              }}>
                {activeProject.image ? (
                  <ImageWithFallback
                    src={activeProject.image}
                    alt={`Screenshot van ${activeProject.title}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                ) : (
                  <div style={{
                    width: "100%", height: "100%", background: "#0f0f1a",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.6rem", color: "rgba(155,93,229,0.3)",
                      letterSpacing: "0.1em",
                    }}>
                      // screenshot volgt
                    </span>
                  </div>
                )}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, #7c3aed, #9b5de5, transparent)",
                }} />
              </div>

              <div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem", color: "#9b5de5",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                }}>
                  {activeProject.type}
                </span>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.95rem", color: "#8876aa",
                  lineHeight: 1.75, marginTop: "10px",
                }}>
                  {activeProject.description}
                </p>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {activeProject.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem", color: "#9b5de5",
                    background: "rgba(155,93,229,0.08)",
                    border: "1px solid rgba(155,93,229,0.15)",
                    padding: "4px 10px", borderRadius: "3px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "20px" }}>
                <a href={activeProject.github} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.85rem", color: "#8876aa",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b8ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8876aa")}
                >
                  <Github size={15} /> GitHub
                </a>
                {activeProject.live && (
                  <a href={activeProject.live} style={{
                    display: "flex", alignItems: "center", gap: "6px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.85rem", color: "#8876aa",
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#c8b8ff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8876aa")}
                  >
                    <ExternalLink size={15} /> Live bekijken
                  </a>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem", color: "#3d3060",
                fontStyle: "italic",
              }}>
                ← Hover over een project voor details
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Big number bg */}
        <div style={{
          position: "absolute", bottom: "20px", right: "40px",
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "8rem", lineHeight: 1,
          color: "rgba(155,93,229,0.04)",
          userSelect: "none",
        }}>
          03
        </div>
      </div>
    </section>
  );
}
