import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { Mail, Github, Linkedin, Command, ArrowRight } from "lucide-react";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import ProjectCard from "./components/ProjectCard";

const navItems = ["home", "about", "skills", "projects", "contact"];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  // Global hotkeys: Ctrl/Cmd+K or "/" to open palette
  useEffect(() => {
    const onKey = (e) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      const isSlash = !e.ctrlKey && !e.metaKey && e.key === "/";
      if (isCmdK || isSlash) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const spotlightStyle = useMemo(
    () => ({
      background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(56,189,248,0.10), transparent 40%)`,
    }),
    [mouse]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white" onMouseMove={handleMouseMove}>
      {/* Scroll progress */}
      <ScrollProgress />

      {/* Spotlight effect */}
      <div className="pointer-events-none fixed inset-0 z-0" style={spotlightStyle} />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-white/5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-gray-300 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-sm text-cyan-400">UA</span>
            <span className="hidden sm:inline text-sm text-gray-500">Press</span>
            <span className="hidden sm:inline text-xs text-gray-400 border border-white/10 rounded px-1.5 py-0.5">Ctrl/⌘ K</span>
          </div>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                className="nav-link px-2 py-1 cursor-pointer"
                activeClass="nav-link active"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden md:inline-flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Open command palette"
            >
              <Command size={16} />
              <span>Cmd</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Home */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <img src="/images/hero-grid.svg" alt="decorative grid" className="absolute inset-0 -z-10 w-full h-full object-cover opacity-30" aria-hidden="true" />
        {/* Background blobs */}
        <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl animate-blob"/>
        <div className="pointer-events-none absolute bottom-10 -right-16 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl animate-blob"/>

        <motion.div variants={reveal} initial="hidden" animate="show" style={{ y: heroY }} className="text-center px-6">
          <div className="animate-float">
            <img src="/images/avatar.svg" alt="Utkarsh Avasthi avatar" className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/10" loading="eager" />
          </div>
          <h1 className="mt-6 text-6xl md:text-8xl font-extrabold gradient-text">Utkarsh Avasthi</h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300">Dream. Code. Create. — Turning ideas into intelligent software 💻</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="contact" smooth={true} offset={-90} duration={600}>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="btn-primary">
                Contact Me <ArrowRight size={18} />
              </motion.button>
            </Link>
            <a href="https://github.com/UTKARSH45216" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-80">
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/60 rounded animate-float" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <motion.div className="max-w-3xl text-center px-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">About Me</h2>
          <div className="decor-line mb-8"/>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-cyan-400 font-semibold">Utkarsh Avasthi</span>, a passionate coder who loves building things that make a difference. Skilled in Python, C++, JavaScript, React and AI. Currently learning Machine Learning, NLP and advanced software development.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <motion.div className="text-center px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Skills</h2>
          <div className="decor-line mb-8"/>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "JavaScript",
              "HTML",
              "CSS",
              "React.js",
              "Git",
              "SQL",
              "Machine Learning",
              "NLP",
              "Speech Recognition",
            ].map((s) => (
              <motion.div key={s} className="px-4 py-2 bg-gray-800/60 rounded-full border border-cyan-400/20 hover:border-cyan-400/50 hover:text-cyan-400 transition" whileHover={{ scale: 1.06 }}>
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <motion.div className="px-6 w-full max-w-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Projects</h2>
          <div className="decor-line mb-10"/>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {[
              {
                title: "AI Voice Assistant (Jarvis.py)",
                desc: "Python voice assistant using speech recognition and NLP",
                img: "/images/projects/jarvis.svg",
                tags: ["Python", "NLP", "Speech Recognition"],
              },
              {
                title: "Portfolio Website",
                desc: "This site: React + Tailwind + Framer Motion",
                img: "/images/projects/portfolio.svg",
                tags: ["React", "Tailwind", "Framer Motion"],
              },
              {
                title: "PromptFlow: AI Prompt Pack",
                desc: "Curated AI prompt collection",
                img: "/images/projects/promptflow.svg",
                tags: ["AI", "NLP"],
              },
            ].map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <motion.div className="text-center px-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Contact</h2>
          <div className="decor-line mb-6"/>
          <p className="text-gray-300">Email: <a className="text-cyan-400" href="mailto:Utkarshavasthi001@gmail.com">Utkarshavasthi001@gmail.com</a></p>

          <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              { src: "/images/logos/gmail.svg", alt: "Gmail", href: "mailto:Utkarshavasthi001@gmail.com" },
              { src: "/images/logos/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/in/utkarsh-avasthi-7a9894397/" },
              { src: "/images/logos/github.svg", alt: "GitHub", href: "https://github.com/UTKARSH45216" },
            ].map((s) => (
              <motion.a
                key={s.alt}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-xl p-6 flex items-center justify-center"
                variants={{ hidden: { opacity: 0, scale: 0.7, y: 30 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 14 } } }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={s.src} alt={s.alt} className="w-14 h-14" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-gray-400 py-8">
        <p>
          © 2025 Utkarsh Avasthi — Built with <span className="text-red-500">❤</span> —
          <span className="ml-2 text-cyan-400">React</span>, JavaScript, HTML, CSS,
          <span className="ml-1 text-cyan-400">Tailwind CSS</span>,
          <span className="ml-1 text-cyan-400">Framer Motion</span>,
          <span className="ml-1 text-cyan-400">PostCSS</span>,
          <span className="ml-1 text-cyan-400">Autoprefixer</span>, Node & npm
        </p>
      </footer>

      {/* Command Palette */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}
