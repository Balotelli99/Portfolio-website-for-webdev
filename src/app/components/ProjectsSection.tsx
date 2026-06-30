import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import uFestivalImg from "@/imports/Schermafbeelding_2026-06-17_105535.png";
import saChatImg from "@/imports/Schermafbeelding_2026-06-17_113754.png";
import kioskImg from "@/imports/kiosk.png";

type Project = {
  id: string;
  title: string;
  year: string;
  type: string;
  role: string;
  status: string;
  description: string;
  features: string[];
  tags: string[];
  github: string;
  live: string | null;
  image?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Kiosk POS System",
    year: "2025",
    type: "E-commerce & Management",
    role: "Full-stack Developer",
    status: "Completed",
    description: "Een geavanceerd kassasysteem (POS) ontworpen voor winkels en kiosken. Dit project omvat een volledige klant-interface voor bestellingen gekoppeld aan een krachtig admin-panel voor voorraad- en orderbeheer.",
    features: [
      "Dynamisch product- en categoriebeheer",
      "Real-time orderstatus monitoring",
      "Administratief dashboard met statistieken",
      "Responsieve interface voor tablets en desktop",
      "PDO Prepared statements voor database veiligheid"
    ],
    tags: ["PHP", "MySQL", "JavaScript", "PDO", "CSS"],
    github: "#",
    live: "https://kiosk-demo.example.com", // Placeholder URL so it's clickable
    image: kioskImg,
  },
  {
    id: "02",
    title: "SA Real-time Chat",
    year: "2025",
    type: "Full-stack WebSockets",
    role: "Backend & DevOps",
    status: "Active Development",
    description: "Een moderne chat-applicatie die gebruik maakt van WebSockets voor instant messaging. Het platform ondersteunt meerdere kamers en biedt een vloeiende ervaring zonder dat de pagina ververst hoeft te worden.",
    features: [
      "Low-latency real-time communicatie",
      "Room-based chat architecture",
      "Gebruikersidentificatie en status",
      "Event-driven server architectuur",
      "Modern, donker thema design"
    ],
    tags: ["Node.js", "Socket.io", "Express", "JavaScript", "CSS"],
    github: "#",
    live: "https://sa-chat-demo.example.com", // Placeholder URL so it's clickable
    image: saChatImg,
  },
  {
    id: "03",
    title: "U Festival PWA",
    year: "2025",
    type: "Interactive Event App",
    role: "Frontend Architect",
    status: "Live",
    description: "Een uitgebreide festival-app voor Utrechtse evenementen. De focus ligt op gebruiksvriendelijkheid en snelheid, met een volledig interactief blokkenschema en meertalige ondersteuning voor internationale bezoekers.",
    features: [
      "Interactief blokkenschema (drag/scroll)",
      "Persoonlijk programma maker",
      "Meertaligheid (Nederlands & Engels)",
      "Progressive Web App (PWA) mogelijkheden",
      "Geoptimaliseerd voor mobiel gebruik"
    ],
    tags: ["React", "Motion", "TailwindCSS", "JavaScript", "i18next"],
    github: "#",
    live: "https://ufestival-rpa4.onrender.com",
    image: uFestivalImg,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "160px 24px",
        background: "#020617",
        position: "relative",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           style={{ marginBottom: "100px", textAlign: "center" }}
        >
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem",
            color: "#10b981", letterSpacing: "0.4em", textTransform: "uppercase",
            display: "block", marginBottom: "16px",
          }}>
            03 // CASE STUDIES
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif", fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1,
            letterSpacing: "-0.02em", color: "#f8fafc", margin: 0,
          }}>
            Selected <span style={{ color: "#10b981" }}>Works</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "60px",
                alignItems: "center"
              }}
            >
              {/* Media Part */}
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <a
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{
                    display: "block",
                    borderRadius: "32px",
                    overflow: "hidden",
                    background: "rgba(15, 23, 42, 0.5)",
                    border: "1px solid rgba(16, 185, 129, 0.1)",
                    aspectRatio: "16/10",
                    position: "relative",
                    textDecoration: "none"
                  }}
                >
                   {project.image ? (
                     <ImageWithFallback
                       src={project.image}
                       alt={project.title}
                       style={{ 
                         width: "100%", height: "100%", objectFit: "cover",
                         transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
                       }}
                       className="group-hover:scale-105"
                     />
                   ) : (
                     <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(16,185,129,0.3)" }}>// PREVIEW MOCKUP</span>
                     </div>
                   )}
                   <div style={{
                     position: "absolute", inset: 0,
                     background: "linear-gradient(to top, rgba(2, 6, 23, 0.4), transparent)",
                     opacity: 0, transition: "opacity 0.3s"
                   }} className="group-hover:opacity-100" />
                   
                   <div style={{
                     position: "absolute", bottom: "32px", right: "32px",
                     opacity: 0, transform: "translateY(10px)", transition: "all 0.3s"
                   }} className="group-hover:opacity-100 group-hover:translateY(0)">
                      <div style={{
                        padding: "12px 24px", background: "#f8fafc", color: "#020617",
                        borderRadius: "100px", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600
                      }}>
                         Go to Project ↗
                      </div>
                   </div>
                </a>
              </div>

              {/* Text Part */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <span style={{ color: "#10b981", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 600 }}>{project.year}</span>
                   <div style={{ width: "40px", height: "1px", background: "rgba(16,185,129,0.3)" }} />
                   <span style={{ color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", textTransform: "uppercase" }}>{project.type}</span>
                </div>
                
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f8fafc",
                  margin: "0 0 24px 0", letterSpacing: "-0.02em"
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: "1.1rem",
                  color: "#94a3b8", lineHeight: 1.7, margin: "0 0 32px 0"
                }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
                   {project.tags.map(tag => (
                     <span key={tag} style={{
                       padding: "6px 14px", borderRadius: "100px",
                       background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.1)",
                       color: "#10b981", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", fontWeight: 500
                     }}>
                        {tag}
                     </span>
                   ))}
                </div>

                <div style={{ display: "flex", gap: "32px" }}>
                   <a href={project.github} style={{ 
                     display: "flex", alignItems: "center", gap: "8px", 
                     color: "#f8fafc", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
                     fontFamily: "'Inter', sans-serif", opacity: 0.6, transition: "opacity 0.2s"
                   }} onMouseEnter={e => e.currentTarget.style.opacity = "1"} onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}>
                      <Github size={18} /> GITHUB REPO
                   </a>
                   {project.live && (
                     <a href={project.live} style={{ 
                       display: "flex", alignItems: "center", gap: "8px", 
                       color: "#10b981", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600,
                       fontFamily: "'Inter', sans-serif", transition: "gap 0.2s"
                     }} onMouseEnter={e => e.currentTarget.style.gap = "12px"} onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
                        LIVE PREVIEW <ExternalLink size={18} />
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
