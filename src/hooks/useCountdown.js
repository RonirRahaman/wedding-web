import { useState, useEffect } from 'react'
import { countdownTarget } from '../data/events'

/**
 * Countdown to Shadi (March 24, 2026). Uses local date/time.
 * Returns { days, hours, minutes, seconds } or null if target passed.
 */
export function useCountdown() {
  const [left, setLeft] = useState(null)

  useEffect(() => {
    const parse = () => {
      const [y, m, d] = countdownTarget.date.split('-').map(Number)
      let h = 0
      let min = 0
      if (countdownTarget.time) {
        const match = countdownTarget.time.match(/(\d+):(\d+)\s*(AM|PM)?/i)
        if (match) {
          h = parseInt(match[1], 10)
          const pm = match[3]?.toUpperCase() === 'PM'
          if (pm && h < 12) h += 12
          if (!pm && h === 12) h = 0
          min = parseInt(match[2], 10) || 0
        }
      }
      return new Date(y, m - 1, d, h, min, 0, 0)
    }

    const target = parse()
    const tick = () => {
      const now = new Date()
      const ms = target - now
      if (ms <= 0) {
        setLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true })
        return
      }
      const sec = Math.floor((ms / 1000) % 60)
      const min = Math.floor((ms / 60000) % 60)
      const hr = Math.floor((ms / 3600000) % 24)
      const day = Math.floor(ms / 86400000)
      setLeft({ days: day, hours: hr, minutes: min, seconds: sec, done: false })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return left
}

export default useCountdown
