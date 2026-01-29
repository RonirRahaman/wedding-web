/**
 * One tasteful confetti burst on March 23 (Haldi day) only.
 * Triggers on mount when isHaldiDay; no looping or repeated bursts.
 */
import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { useIsHaldiDay } from '../hooks/useIsHaldiDay'

export default function CelebrationEffect() {
  const isHaldiDay = useIsHaldiDay()
  const fired = useRef(false)

  useEffect(() => {
    if (!isHaldiDay || fired.current) return
    fired.current = true

    const run = () => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#f59e0b', '#fcd34d', '#fde68a', '#fef3c7'],
      })
    }

    const t = setTimeout(run, 600)
    return () => clearTimeout(t)
  }, [isHaldiDay])

  return null
}
