import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
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
    "Speech Recognition"
  ];

  return (
    <section className="section-container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-primary">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-tag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;