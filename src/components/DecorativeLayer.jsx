/**
 * Layer B: decorative elements (flowers, frames, light).
 * Opacity 0.08–0.18, slow float/rotate, always behind content.
 * data-layer="deco" for pointer-events: none.
 */
import { motion } from 'framer-motion'

const floatVariants = {
  float: {
    y: [0, 6, 0],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
  rotate: {
    rotate: [0, 5, 0],
    transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
  },
}

export function DecorativeFlower({ src, className = '', alt = '' }) {
  return (
    <motion.img
      data-layer="deco"
      src={src}
      alt={alt}
      className={`absolute max-w-[120px] object-contain opacity-[0.12] md:max-w-[160px] ${className}`}
      variants={floatVariants}
      animate="float"
      aria-hidden
    />
  )
}

export function DecorativeGlow({ src, className = '' }) {
  return (
    <motion.img
      data-layer="deco"
      src={src}
      alt=""
      className={`absolute max-w-[200px] object-contain opacity-[0.14] ${className}`}
      animate={{ opacity: [0.1, 0.18, 0.1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    />
  )
}

export function DecorativeFrame({ src, className = '' }) {
  return (
    <img
      data-layer="deco"
      src={src}
      alt=""
      className={`pointer-events-none absolute max-h-full max-w-full object-contain opacity-[0.15] ${className}`}
      aria-hidden
    />
  )
}

export default { DecorativeFlower, DecorativeGlow, DecorativeFrame }
