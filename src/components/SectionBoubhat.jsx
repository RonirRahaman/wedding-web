/**
 * Chapter VI · Boubhat. Layered elements, food-greet, flowers, map.
 */
import { motion } from 'framer-motion'
import { events } from '../data/events'
import VenueMap from './VenueMap'
import { DecorativeFlower } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

const boubhat = events.find((e) => e.id === 'boubhat')
const formatDate = (str) =>
  new Date(str + 'T12:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
const boubhatMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(boubhat.address)}`
const ease = [0.22, 1, 0.36, 1]

export default function SectionBoubhat() {
  return (
    <section
      className="relative overflow-hidden bg-amber-50/80 px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28"
      aria-labelledby="boubhat-heading"
    >
      <SectionDivider className="opacity-[0.1]" />
      <SectionDivider position="bottom" className="opacity-[0.07]" />

      <img
        data-layer="deco"
        src={boubhat.asset}
        alt=""
        className="absolute bottom-20 left-0 max-h-20 w-auto opacity-[0.18] sm:max-h-24 md:max-h-28"
        aria-hidden
      />
      <img
        data-layer="deco"
        src={boubhat.asset}
        alt=""
        className="absolute bottom-20 right-0 max-h-20 w-auto scale-x-[-1] opacity-[0.18] sm:max-h-24 md:max-h-28"
        aria-hidden
      />

      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[58px] opacity-[0.3] md:left-8 md:top-28 md:max-w-[72px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-36 right-4 max-w-[60px] opacity-[0.08] md:right-8 md:max-w-[76px] md:opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          className="mb-4 text-center font-body text-[10px] font-medium uppercase tracking-[0.25em] text-amber-700/70 sm:mb-5 sm:text-xs"
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
          className="mx-auto mt-8 max-w-xl text-center font-body text-[15px] leading-loose text-stone-600 sm:mt-10 sm:text-base md:mt-12"
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
        <a
          href={boubhatMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-body text-sm font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98] sm:mt-5"
        >
          View on Map
        </a>
        <p className="mt-2 text-center font-body text-sm font-medium text-stone-700 sm:mt-3 sm:text-base">
          {boubhat.venue}
        </p>
        <p className="mt-1 text-center font-body text-xs leading-relaxed text-stone-600 sm:text-sm md:px-4">
          {boubhat.address}
        </p>
      </div>
    </section>
  )
}
