import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Hi! I'm Utkarsh Avasthi, a 14-year-old passionate coder with a deep love for technology and innovation. 
            From the moment I wrote my first line of code, I knew I had discovered my calling.
          </p>
          <p>
            With expertise in Python, C++, JavaScript, React, and AI, I'm constantly pushing the boundaries of what's possible. 
            My journey in tech has led me to explore fascinating areas like Machine Learning, Natural Language Processing, 
            and Software Development.
          </p>
          <p>
            I believe in the power of code to transform ideas into reality, and I'm excited to contribute to the 
            future of technology. When I'm not coding, you'll find me learning new technologies or working on 
            innovative projects that challenge my skills.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;