import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Kiosk POS System",
    description:
      "Een geavanceerd kassasysteem (POS) met een klant-interface voor bestellingen en een krachtig beheerderspaneel voor voorraadbeheer.",
    tags: ["PHP", "MySQL", "JavaScript", "PDO", "CSS"],
    github: "#",
    live: "https://kiosk-demo.example.com",
    color: "#9b5de5",
  },
  {
    number: "02",
    title: "SA Real-time Chat",
    description:
      "Een moderne real-time communicatie applicatie gebouwd met Node.js en WebSockets voor directe berichtuitwisseling in live rooms.",
    tags: ["Node.js", "Socket.io", "Express", "JavaScript", "CSS"],
    github: "#",
    live: "https://sa-chat-demo.example.com",
    color: "#7c3aed",
  },
  {
    number: "03",
    title: "U Festival PWA",
    description:
      "Een interactieve Progressive Web App (PWA) met blokkenschema, persoonlijke favorieten en meertalige ondersteuning.",
    tags: ["React", "Motion", "TailwindCSS", "JavaScript", "i18next"],
    github: "#",
    live: "https://ufestival-rpa4.onrender.com",
    color: "#8b5cf6",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#0f0f1a",
        border: "1px solid rgba(155,93,229,0.15)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${project.color}18 0%, transparent 70%)`,
        }}
      />

      {/* Number */}
      <div
        className="absolute top-6 right-8"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "5rem",
          lineHeight: 1,
          color: "rgba(155,93,229,0.06)",
          userSelect: "none",
        }}
      >
        {project.number}
      </div>

      {/* Preview area */}
      <a
        href={project.live || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-44 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group/img-link"
        style={{
          background: "rgba(155,93,229,0.06)",
          border: "1px solid rgba(155,93,229,0.1)",
          display: "flex",
          textDecoration: "none"
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: "rgba(155,93,229,0.35)",
            letterSpacing: "0.15em",
          }}
        >
          // screenshot volgt
        </span>
        <div
          className="absolute bottom-3 left-3 w-2 h-2 rounded-full"
          style={{ background: project.color, opacity: 0.6 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover/img-link:opacity-100 transition-opacity flex items-center justify-center">
          <ExternalLink size={20} className="text-white" />
        </div>
      </a>

      {/* Content */}
      <h3
        className="mb-3"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1.3rem",
          color: "#f0eeff",
        }}
      >
        {project.title}
      </h3>
      <p
        className="mb-5"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#8876aa",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              color: "#c8b8ff",
              background: "rgba(155,93,229,0.12)",
              border: "1px solid rgba(155,93,229,0.2)",
              padding: "3px 10px",
              borderRadius: "100px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 transition-colors duration-200 hover:text-purple-300"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.85rem",
            color: "#8876aa",
          }}
        >
          <Github size={15} /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            className="flex items-center gap-2 transition-colors duration-200 hover:text-purple-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.85rem",
              color: "#8876aa",
            }}
          >
            <ExternalLink size={15} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              color: "#9b5de5",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            03. Projecten
          </span>
          <h2
            className="mt-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f0eeff",
            }}
          >
            Wat ik heb gebouwd
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#8876aa",
              fontSize: "1rem",
            }}
          >
            Een selectie van mijn projecten. Meer volgt — ik werk continu aan nieuwe dingen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
