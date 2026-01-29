import { useState, useEffect } from 'react'

const HALDI_DATE = '2026-03-23'

/**
 * True only when local date is March 23, 2026 (Haldi day).
 * Used to trigger confetti and "It's Haldi Day" message.
 */
export function useIsHaldiDay() {
  const [isHaldiDay, setIsHaldiDay] = useState(false)

  useEffect(() => {
    const now = new Date()
    const y = now.getFullYear()
    const m = String(now.getMonth() + 1).padStart(2, '0')
    const d = String(now.getDate()).padStart(2, '0')
    const today = `${y}-${m}-${d}`
    setIsHaldiDay(today === HALDI_DATE)
  }, [])

  return isHaldiDay
}

export default useIsHaldiDay
