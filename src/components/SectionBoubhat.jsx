/**
 * Chapter VI · Boubhat. Layered elements, food-greet, flowers, map.
 */
import { motion } from 'framer-motion'
import { events } from '../data/events'
import VenueMap from './VenueMap'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'

const boubhat = events.find((e) => e.id === 'boubhat')
const formatDate = (str) =>
  new Date(str + 'T12:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
const ease = [0.22, 1, 0.36, 1]

export default function SectionBoubhat() {
  return (
    <section
      className="relative overflow-hidden bg-amber-50/80 px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28"
      aria-labelledby="boubhat-heading"
    >
      {/* Section dividers */}
      <img
        data-layer="deco"
        src="/image/element-top-flower-bg.png"
        alt=""
        className="absolute left-0 top-0 w-full max-w-2xl opacity-[0.12] md:max-w-3xl"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-top-flower-bg.png"
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-2xl rotate-180 opacity-[0.09] md:max-w-3xl"
        aria-hidden
      />

      {/* food-greet as corner accents */}
      <img
        data-layer="deco"
        src={boubhat.asset}
        alt=""
        className="absolute bottom-20 left-0 max-h-24 w-auto opacity-[0.12] sm:max-h-28 md:max-h-32"
        aria-hidden
      />
      <img
        data-layer="deco"
        src={boubhat.asset}
        alt=""
        className="absolute bottom-20 right-0 max-h-24 w-auto scale-x-[-1] opacity-[0.12] sm:max-h-28 md:max-h-32"
        aria-hidden
      />

      {/* Flowers */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[62px] opacity-[0.11] md:left-8 md:top-28 md:max-w-[78px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-36 right-4 max-w-[66px] opacity-[0.11] md:right-8 md:max-w-[82px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower3.png"
        alt=""
        className="absolute left-4 top-1/2 max-w-[50px] -translate-y-1/2 opacity-[0.09] md:max-w-[62px]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute right-4 top-1/3 max-w-[54px] opacity-[0.09] md:max-w-[68px]"
        aria-hidden
      />

      {/* element.png + glow */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-1/2 top-20 w-44 -translate-x-1/2 opacity-[0.08] md:w-56"
        aria-hidden
      />
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-1/2 max-w-[150px] -translate-x-1/2 -translate-y-1/2 opacity-[0.1] md:max-w-[190px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-amber-700/70 sm:mb-5 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
        >
          Chapter VI · The Feast
        </motion.p>
        <motion.h2
          id="boubhat-heading"
          className="text-center font-serif text-2xl font-semibold text-stone-800 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {boubhat.title}
        </motion.h2>
        <motion.p
          className="mt-2 text-center font-serif text-base text-amber-700 sm:mt-3 sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          {formatDate(boubhat.date)}
        </motion.p>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center font-serif text-[15px] leading-loose text-stone-600 sm:mt-10 sm:text-base md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, delay: 0.06, ease }}
        >
          {boubhat.narrative}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 text-center font-serif text-sm italic text-amber-700/80 sm:mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {boubhat.feeling}
        </motion.p>

        <motion.div
          className="relative mx-auto mt-10 flex justify-center sm:mt-12"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.85, ease }}
        >
          <img
            src={boubhat.asset}
            alt=""
            className="relative z-10 max-h-36 w-auto object-contain sm:max-h-44 md:max-h-52"
            loading="lazy"
          />
        </motion.div>
        <motion.p
          className="mx-auto mt-6 max-w-lg text-center font-serif text-base italic text-stone-500 sm:mt-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          {boubhat.poeticLine}
        </motion.p>

        <motion.div
          className="relative mt-12 sm:mt-14 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
        >
          <VenueMap
            lat={boubhat.lat}
            lng={boubhat.lng}
            label={boubhat.mapLabel}
            address={boubhat.address}
          />
        </motion.div>
        <p className="mt-4 text-center text-sm font-medium text-stone-700 sm:mt-5 sm:text-base">
          {boubhat.venue}
        </p>
        <p className="mt-1 text-center text-xs leading-relaxed text-stone-600 sm:text-sm md:px-4">
          {boubhat.address}
        </p>
      </div>
    </section>
  )
}
