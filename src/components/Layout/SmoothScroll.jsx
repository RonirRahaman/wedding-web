/**
 * Lenis smooth-scroll provider. root=true uses window scroll (global).
 * Design: film-like, deliberate pace — duration 1.2 for restrained feel.
 */
import { ReactLenis } from 'lenis/react'

const options = {
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
  autoRaf: true,
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  )
}
