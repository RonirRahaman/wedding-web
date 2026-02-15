/**
 * Chapter III · The Days. Auto-rotating carousel of event cards.
 */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { events } from '../data/events'
import { saveTheDates } from '../data/content'
import { DecorativeFlower } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

function formatDate(str) {
  const d = new Date(str + 'T12:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getMapsUrl(ev) {
  if (ev.address) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.address)}`
  if (ev.lat != null && ev.lng != null) return `https://www.google.com/maps/search/?api=1&query=${ev.lat},${ev.lng}`
  return null
}

const ease = [0.22, 1, 0.36, 1]
const AUTO_ROTATE_INTERVAL = 4000 // 4 seconds

export default function SaveTheDates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    // Auto-rotate carousel
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, AUTO_ROTATE_INTERVAL)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    // Reset auto-rotate timer when manually changing slide
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length)
    }, AUTO_ROTATE_INTERVAL)
  }

  return (
    <section
      id="save-the-dates"
      className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50/30"
      aria-labelledby="dates-heading"
    >
      <SectionDivider className="opacity-[0.09]" />
      <SectionDivider position="bottom" className="opacity-[0.06]" />

      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-32 max-w-[56px] opacity-[0.07] md:left-8 md:top-40 md:max-w-[68px] md:opacity-[0.06]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-32 right-4 max-w-[58px] opacity-[0.07] md:right-8 md:max-w-[72px] md:opacity-[0.06]"
      />
      <img
        data-layer="deco"
        src="/image/element-light.png"
        alt=""
        className="absolute left-1/2 top-24 max-w-[140px] -translate-x-1/2 opacity-[0.18] md:top-28 md:max-w-[180px]"
        aria-hidden
      />

      <div className="sticky top-0 z-10 bg-stone-50/95 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-7 md:px-8 md:py-8">
        <p className="text-center font-body text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 sm:text-xs md:tracking-[0.3em]">
          {saveTheDates.chapterLabel}
        </p>
        <h2
          id="dates-heading"
          className="mt-2 text-center font-serif text-xl font-semibold text-stone-800 sm:text-2xl md:text-3xl"
        >
          Save the Dates
        </h2>
        <p className="mt-2 text-center font-body text-sm text-stone-600 sm:mt-3 sm:text-base">
          {saveTheDates.intro}
        </p>
        <p className="mt-1 text-center font-body text-xs uppercase tracking-[0.12em] text-stone-500 sm:tracking-widest">
          {saveTheDates.subtitle}
        </p>
        {/* Progress indicators */}
        <div className="mx-auto mt-4 flex justify-center gap-2 sm:mt-5">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-amber-500' : 'w-1.5 bg-stone-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <br />
        <br />
      </div>

      <div className="relative min-h-[50vh] overflow-visible px-4 pb-20 sm:px-6 sm:pb-24 md:px-8 md:pb-28">
        <div className="relative flex h-full min-h-[50vh] items-center justify-center overflow-visible">
          {events.map((ev, i) => {
            const mapsUrl = getMapsUrl(ev)
            const isActive = i === currentIndex
            const distance = Math.abs(i - currentIndex)
            const isLeft = i < currentIndex
            const isRight = i > currentIndex

            // Calculate x position: show 20% of adjacent cards
            // max-w-lg is 32rem, so 80% offset = ~25.6rem to show 20% on side
            const offsetRem = '25.6rem' // 80% of max-w-lg (32rem)
            
            let xPosition = '0rem'
            if (isLeft) {
              xPosition = `-${offsetRem}` // Move left to show 20% on left side
            } else if (isRight) {
              xPosition = offsetRem // Move right to show 20% on right side
            }

            return (
              <motion.div
                key={ev.id}
                onClick={() => goToSlide(i)}
                className={`absolute w-full max-w-lg cursor-pointer ${
                  isActive ? 'z-30' : distance === 1 ? 'z-20' : 'z-10'
                }`}
                animate={{
                  scale: isActive ? 1 : distance === 1 ? 0.95 : 0.85,
                  y: isActive ? 0 : distance * 10,
                  x: xPosition,
                  opacity: isActive ? 1 : distance === 1 ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.5, ease }}
                whileHover={!isActive ? { scale: distance === 1 ? 0.97 : 0.87, y: distance * 8 } : {}}
              >
                <div
                  className={`relative w-full rounded-2xl border border-amber-200/20 bg-white px-5 py-6 shadow-xl transition-all duration-300 sm:px-7 sm:py-8 md:px-8 md:py-9 ${
                    isActive
                      ? 'shadow-2xl ring-2 ring-amber-300/30'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <p className="font-body text-xs font-medium text-amber-700 sm:text-sm">
                    {formatDate(ev.date)}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-stone-800 sm:mt-3 sm:text-2xl">
                    {ev.title}
                  </h3>
                  <p className="mt-1 font-serif text-sm italic text-amber-600/90 sm:text-base">
                    {ev.poeticLine}
                  </p>
                  <p className="mt-4 font-body text-[15px] leading-loose text-stone-600 sm:mt-5 sm:text-base">
                    {ev.narrative}
                  </p>
                  <p className="mt-4 font-serif text-sm italic text-stone-500 sm:mt-5">
                    {ev.feeling}
                  </p>
                  {ev.venue && (
                    <p className="mt-4 font-body text-sm font-medium text-stone-700 sm:mt-5">
                      {ev.venue}
                    </p>
                  )}
                  {mapsUrl && (
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-5 inline-flex items-center rounded-xl bg-amber-500 px-5 py-2.5 font-body text-sm font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98]"
                    >
                      View on Map
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.p
          className="relative z-10 mx-auto max-w-md pb-8 text-center font-body text-[15px] italic leading-loose text-stone-500 sm:pb-10 sm:text-base md:pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          <br />
          <br />
          {saveTheDates.outro}
        </motion.p>
      </div>
    </section>
  )
}
