import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  { name: "PHP", level: 85, category: "Backend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 78, category: "Backend" },
  { name: "React", level: 82, category: "Frontend" },
  { name: "CSS / Tailwind", level: 92, category: "Styling" },
  { name: "MySQL", level: 72, category: "Database" },
  { name: "Git / GitHub", level: 80, category: "Tools" },
  { name: "HTML", level: 95, category: "Frontend" },
];

function SkillBar({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center justify-between">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            color: "#f0eeff",
            fontSize: "0.95rem",
          }}
        >
          {skill.name}
        </span>
        <div className="flex items-center gap-3">
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "#9b5de5",
              background: "rgba(155,93,229,0.1)",
              padding: "2px 8px",
              borderRadius: "100px",
              border: "1px solid rgba(155,93,229,0.2)",
            }}
          >
            {skill.category}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              color: "#8876aa",
            }}
          >
            {skill.level}%
          </span>
        </div>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(155,93,229,0.15)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #9b5de5, #c8b8ff)",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6" style={{ background: "#0a0a15" }}>
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
            02. Vaardigheden
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
            Mijn tech stack
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#8876aa",
              fontSize: "1rem",
            }}
          >
            Tools en technologieën waarmee ik werk. Wordt uitgebreid naarmate ik groei.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
