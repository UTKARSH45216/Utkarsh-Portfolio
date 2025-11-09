import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI Voice Assistant (Jarvis.py)",
      description: "A Python-based voice assistant using speech recognition and NLP",
      techStack: ["Python", "Speech Recognition", "NLP"],
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with React, TailwindCSS, and Framer Motion",
      techStack: ["React", "TailwindCSS", "Framer Motion"],
    },
    {
      title: "PromptFlow: AI Prompt Pack",
      description: "Curated collection of AI prompts for enhanced productivity",
      techStack: ["AI", "NLP", "Content Creation"],
    },
  ];

  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-sm px-2 py-1 bg-primary/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;