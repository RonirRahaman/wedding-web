/**
 * Chapter III · The Days. Sticky timeline, layered elements.
 */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { events } from '../data/events'
import { saveTheDates } from '../data/content'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

function formatDate(str) {
  const d = new Date(str + 'T12:00:00')
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

const ease = [0.22, 1, 0.36, 1]

export default function SaveTheDates() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 0.38, 0.68, 1],
    ['0%', '33%', '66%', '100%'],
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-stone-50"
      aria-labelledby="dates-heading"
    >
      {/* Section dividers */}
      <SectionDivider className="opacity-[0.11]" />
      <SectionDivider position="bottom" className="opacity-[0.08]" />

      {/* element.png — both sides */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute right-0 top-[30%] w-44 opacity-[0.08] sm:w-52 md:top-[35%] md:w-64 md:opacity-[0.1] lg:w-72"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-0 top-[55%] w-36 rotate-180 opacity-[0.06] sm:w-44 md:w-52"
        aria-hidden
      />

      {/* Flowers */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-32 max-w-[60px] opacity-[0.1] md:left-8 md:top-40 md:max-w-[76px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-40 right-4 max-w-[64px] opacity-[0.1] md:right-8 md:max-w-[80px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower3.png"
        alt=""
        className="absolute bottom-24 left-4 max-w-[52px] opacity-[0.09] md:left-8 md:max-w-[64px]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute right-4 top-[60%] max-w-[56px] opacity-[0.08] md:right-8 md:max-w-[68px]"
        aria-hidden
      />

      {/* Glow near progress */}
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-24 max-w-[140px] -translate-x-1/2 opacity-[0.09] md:top-28 md:max-w-[180px]"
      />

      <div className="sticky top-0 z-10 bg-stone-50/95 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-7 md:px-8 md:py-8">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-stone-400 sm:text-xs md:tracking-[0.3em]">
          {saveTheDates.chapterLabel}
        </p>
        <h2
          id="dates-heading"
          className="mt-2 text-center font-serif text-xl font-semibold text-stone-800 sm:text-2xl md:text-3xl"
        >
          Save the Dates
        </h2>
        <p className="mt-2 text-center font-serif text-sm text-stone-600 sm:mt-3 sm:text-base">
          {saveTheDates.intro}
        </p>
        <p className="mt-1 text-center font-serif text-xs uppercase tracking-[0.12em] text-stone-500 sm:tracking-widest">
          {saveTheDates.subtitle}
        </p>
        <div className="mx-auto mt-4 h-0.5 w-full max-w-[200px] overflow-hidden rounded-full bg-stone-200 sm:mt-5 sm:max-w-xs">
          <motion.div
            className="h-full bg-amber-400/80"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <div className="relative space-y-0 px-4 pb-20 sm:px-6 sm:pb-24 md:px-8 md:pb-28">
        {events.map((ev, i) => (
          <motion.div
            key={ev.id}
            className="relative flex min-h-[65vh] flex-col items-center justify-center py-12 sm:min-h-[70vh] sm:py-16 md:min-h-[75vh] md:py-20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.85, ease }}
          >
            {/* Small accent per card */}
            <img
              data-layer="deco"
              src="/image/element-base.png"
              alt=""
              className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] md:w-56"
              aria-hidden
            />
            <div className="relative z-10 w-full max-w-lg rounded-2xl border border-amber-200/15 bg-white/95 px-5 py-7 shadow-sm sm:px-7 sm:py-8 md:px-8 md:py-10">
              <p className="font-serif text-xs text-amber-700 sm:text-sm">
                {formatDate(ev.date)}
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-stone-800 sm:mt-3 sm:text-2xl">
                {ev.title}
              </h3>
              <p className="mt-1 font-serif text-sm italic text-amber-600/90 sm:text-base">
                {ev.poeticLine}
              </p>
              <p className="mt-4 text-[15px] leading-loose text-stone-600 sm:mt-5 sm:text-base">
                {ev.narrative}
              </p>
              <p className="mt-4 font-serif text-sm italic text-stone-500 sm:mt-5">
                {ev.feeling}
              </p>
              {ev.venue && (
                <p className="mt-4 text-sm font-medium text-stone-700 sm:mt-5">
                  {ev.venue}
                </p>
              )}
            </div>
          </motion.div>
        ))}
        <motion.p
          className="relative z-10 mx-auto max-w-md pb-8 text-center font-serif text-[15px] italic leading-loose text-stone-500 sm:pb-10 sm:text-base md:pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
        >
          {saveTheDates.outro}
        </motion.p>
      </div>
    </section>
  )
}
