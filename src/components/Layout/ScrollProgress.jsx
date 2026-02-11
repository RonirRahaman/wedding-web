/**
 * Thin progress bar at top — fill based on scroll %.
 * Premium "wow" touch; fixed, non-intrusive.
 */
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-1 w-full bg-amber-200/80 md:h-1.5"
      role="presentation"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-amber-500/90"
        style={{ width: '100%' }}
        initial={false}
        animate={{ scaleX: progress }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
    </div>
  )
}
