import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, img, tags = [], href }) {
  return (
    <motion.article
      className="group card overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <a href={href} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-800/60">
          <motion.img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
        <p className="text-gray-400 mt-2">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
