import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div style={{ background: "#020617", color: "#f8fafc", minHeight: "100vh" }}>
      <Navbar />
      <main
        style={{
          scrollBehavior: "smooth",
        }}
        id="scroll-container"
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
