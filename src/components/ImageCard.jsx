import { motion } from 'framer-motion';

export default function ImageCard({ image, caption, className = '', imgClassName = 'aspect-[4/5]' }) {
  return (
    <motion.figure
      className={`group overflow-hidden rounded-[2rem] bg-white shadow-soft ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className={`overflow-hidden ${imgClassName}`}>
        <img
          src={image.src}
          alt={image.alt}
          className="image-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-night">
          <span>{caption}</span>
          <span className="h-px flex-1 bg-night/10" aria-hidden="true" />
        </figcaption>
      )}
    </motion.figure>
  );
}
