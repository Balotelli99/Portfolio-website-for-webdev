import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Placeholder image / avatar block */}
        <FadeIn>
          <div className="relative">
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ background: "#0f0f1a", border: "1px solid rgba(155,93,229,0.2)" }}
            >
              {/* Placeholder silhouette */}
              <div className="flex flex-col items-center gap-3 opacity-30">
                <div
                  className="w-24 h-24 rounded-full"
                  style={{ background: "rgba(155,93,229,0.4)" }}
                />
                <div
                  className="w-40 h-32 rounded-t-full"
                  style={{ background: "rgba(155,93,229,0.3)" }}
                />
              </div>
              <div
                className="absolute inset-0 flex items-end p-6"
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    color: "rgba(155,93,229,0.5)",
                    letterSpacing: "0.1em",
                  }}
                >
                  // foto volgt later
                </p>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-4 right-4 w-3 h-3 rounded-full"
                style={{ background: "#9b5de5" }}
              />
            </div>
            {/* Floating tag */}
            <motion.div
              className="absolute -bottom-5 -right-5 px-4 py-2 rounded-xl border"
              style={{
                background: "#0f0f1a",
                borderColor: "rgba(155,93,229,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#c8b8ff",
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              🎓 GLU Utrecht
            </motion.div>
          </div>
        </FadeIn>

        {/* Text block */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.1}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#9b5de5",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              01. Over mij
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                lineHeight: 1.1,
                color: "#f0eeff",
              }}
            >
              Hey, ik ben{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9b5de5, #c8b8ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sultan
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "#8876aa",
                lineHeight: 1.8,
              }}
            >
              Ik ben een fullstack webdev student aan het Grafisch Lyceum Utrecht. Ik ben gepassioneerd over het bouwen van unieke, geanimeerde websites en creatieve digitale ervaringen.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.05rem",
                color: "#8876aa",
                lineHeight: 1.8,
              }}
            >
              Ik hou van projecten waarbij design en functionaliteit samenkomen. Of het nu een slimme webshop is, een AI-chatbot, of een festival app — ik pak het aan met energie en een scherp oog voor detail.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
