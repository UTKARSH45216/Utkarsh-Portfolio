import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-4 animate-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Utkarsh Avasthi
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Dream. Code. Create. — Turning ideas into intelligent software 💻
        </motion.p>
        <motion.button 
          className="btn-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;