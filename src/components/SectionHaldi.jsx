/**
 * Chapter IV · Haldi. Layered elements, girl/man haldi, sun-glasses.
 */
import { motion } from 'framer-motion'
import { useIsHaldiDay } from '../hooks/useIsHaldiDay'
import { events } from '../data/events'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

const haldi = events.find((e) => e.id === 'haldi')
const formatDate = (str) =>
  new Date(str + 'T12:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
const ease = [0.22, 1, 0.36, 1]

export default function SectionHaldi() {
  const isHaldiDay = useIsHaldiDay()

  return (
    <section
      className="relative overflow-hidden bg-amber-50/90 px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28"
      aria-labelledby="haldi-heading"
    >
      {/* Section dividers */}
      <SectionDivider className="opacity-[0.12]" />
      <SectionDivider position="bottom" className="opacity-[0.09]" />

      {/* Flowers — corners */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[64px] opacity-[0.11] md:left-8 md:top-28 md:max-w-[80px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-28 right-4 max-w-[68px] opacity-[0.11] md:right-8 md:bottom-36 md:max-w-[84px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower3.png"
        alt=""
        className="absolute bottom-20 left-4 max-w-[52px] opacity-[0.1] md:left-8 md:max-w-[64px]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute right-4 top-1/3 max-w-[56px] opacity-[0.09] md:right-8 md:max-w-[70px]"
        aria-hidden
      />

      {/* Haldi accents — small copies in corners */}
      <img
        data-layer="deco"
        src={haldi.assets.left}
        alt=""
        className="absolute bottom-12 left-0 max-h-20 w-auto opacity-[0.15] sm:max-h-24 md:max-h-28"
        aria-hidden
      />
      <img
        data-layer="deco"
        src={haldi.assets.right}
        alt=""
        className="absolute bottom-12 right-0 max-h-20 w-auto opacity-[0.15] sm:max-h-24 md:max-h-28"
        aria-hidden
      />

      {/* element.png + glow */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-1/2 top-16 w-40 -translate-x-1/2 opacity-[0.08] md:w-52"
        aria-hidden
      />
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-1/2 max-w-[160px] -translate-x-1/2 -translate-y-1/2 opacity-[0.1] md:max-w-[200px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {isHaldiDay && (
          <motion.p
            className="mb-6 text-center font-serif text-xl font-semibold text-amber-700 sm:mb-8 sm:text-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
          >
            It&apos;s Haldi Day!
          </motion.p>
        )}

        <motion.p
          className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-amber-700/70 sm:mb-5 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
        >
          Chapter IV · Joy Before the Vow
        </motion.p>
        <motion.h2
          id="haldi-heading"
          className="text-center font-serif text-2xl font-semibold text-stone-800 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {haldi.title}
        </motion.h2>
        <motion.p
          className="mt-2 text-center font-serif text-base text-amber-700 sm:mt-3 sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          {formatDate(haldi.date)}
        </motion.p>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center font-serif text-[15px] leading-loose text-stone-600 sm:mt-10 sm:text-base md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          {haldi.narrative}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 text-center font-serif text-sm italic text-amber-700/80 sm:mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {haldi.feeling}
        </motion.p>

        <div className="relative mt-12 flex flex-col items-center gap-8 sm:mt-14 sm:flex-row sm:justify-center sm:gap-10 md:mt-16 md:gap-16">
          <motion.img
            src={haldi.assets.left}
            alt=""
            className="max-h-40 w-auto object-contain sm:max-h-48 md:max-h-56"
            loading="lazy"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.85, ease }}
          />
          <motion.img
            src={haldi.assets.right}
            alt=""
            className="max-h-40 w-auto object-contain sm:max-h-48 md:max-h-56"
            loading="lazy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.85, ease }}
          />
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-lg text-center font-serif text-base italic text-stone-500 sm:mt-12 md:mt-14"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          {haldi.poeticLine}
        </motion.p>
      </div>
    </section>
  )
}
