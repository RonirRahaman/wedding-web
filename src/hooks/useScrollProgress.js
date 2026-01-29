import { useState, useEffect } from 'react'

/**
 * Returns scroll progress 0..1 based on document scroll height.
 * Used for top progress bar and optional parallax.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || window.scrollY
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const p = scrollHeight <= 0 ? 0 : Math.min(1, scrollTop / scrollHeight)
      setProgress(p)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

export default useScrollProgress
