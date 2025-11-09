import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/UTKARSH45216",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/utkarsh-avasthi-7a9894397/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:Utkarshavasthi001@gmail.com",
    },
  ];

  return (
    <section className="section-container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-12 text-primary">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Icon size={32} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-400"
        >
          Utkarshavasthi001@gmail.com
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;