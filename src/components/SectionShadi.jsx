/**
 * Chapter V · Shadi. Layered elements, religion, quote, map.
 */
import { motion } from 'framer-motion'
import { events } from '../data/events'
import VenueMap from './VenueMap'
import { DecorativeFlower } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

const shadi = events.find((e) => e.id === 'shadi')
const formatDate = (str) =>
  new Date(str + 'T12:00:00').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
const shadiMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shadi.address)}`
const ease = [0.22, 1, 0.36, 1]

export default function SectionShadi() {
  return (
    <section
      className="relative overflow-hidden bg-stone-100 px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28"
      aria-labelledby="shadi-heading"
    >
      <SectionDivider className="opacity-[0.09]" />
      <SectionDivider position="bottom" className="opacity-[0.06]" />

      <img
        data-layer="deco"
        src="/image/element-religion.png"
        alt=""
        className="absolute right-0 top-20 w-24 opacity-[0.07] sm:w-32 md:top-24 md:w-36 md:opacity-[0.08]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/reliion-element.png"
        alt=""
        className="absolute bottom-24 left-0 w-28 opacity-[0.06] md:bottom-32 md:w-36 md:opacity-[0.07]"
        aria-hidden
      />

      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-32 max-w-[54px] opacity-[0.07] md:left-8 md:top-40 md:max-w-[66px] md:opacity-[0.06]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-36 right-4 max-w-[56px] opacity-[0.07] md:right-8 md:max-w-[70px] md:opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.img
          src="/image/shadi"
          alt=""
          className="mx-auto mb-6 max-w-[140px] object-contain opacity-80 md:max-w-[180px]"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
        <motion.p
          className="mb-4 text-center font-body text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400 sm:mb-5 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
        >
          Chapter V · The Vow
        </motion.p>
        <motion.h2
          id="shadi-heading"
          className="text-center font-serif text-2xl font-semibold text-stone-800 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {shadi.title}
        </motion.h2>
        <motion.p
          className="mt-2 text-center font-serif text-base text-amber-700 sm:mt-3 sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
        >
          {formatDate(shadi.date)}
        </motion.p>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center font-body text-[15px] leading-loose text-stone-600 sm:mt-10 sm:text-base md:mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, delay: 0.06, ease }}
        >
          {shadi.narrative}
        </motion.p>
        <motion.p
          className="mx-auto mt-4 text-center font-serif text-sm italic text-stone-500 sm:mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {shadi.feeling}
        </motion.p>

        <motion.div
          className="relative mx-auto mt-10 max-w-lg rounded-2xl border border-amber-200/20 bg-white px-5 py-6 text-center shadow-xl transition-shadow duration-300 sm:mt-12 sm:px-6 sm:py-8 md:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.85, ease }}
        >
          <img
            src="/image/god-element message.png"
            alt=""
            className="mx-auto mb-4 max-h-14 w-auto object-contain opacity-90 sm:mb-5 sm:max-h-16"
            loading="lazy"
          />
          <p className="font-serif text-base italic leading-loose text-stone-700 sm:text-lg">
            {shadi.poeticLine}
          </p>
          <p className="mt-3 font-body text-[15px] text-stone-600 sm:text-base">
            {shadi.shortLine}
          </p>
        </motion.div>

        <div className="relative mt-12 sm:mt-14 md:mt-16">
          <VenueMap
            lat={shadi.lat}
            lng={shadi.lng}
            label={shadi.mapLabel}
            address={shadi.address}
          />
        </div>
        <a
          href={shadiMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-body text-sm font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98] sm:mt-5"
        >
          View on Map
        </a>
        <motion.p
          className="mt-2 text-center font-body text-sm font-medium text-stone-700 sm:mt-3 sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {shadi.venue}
        </motion.p>
        <p className="mt-1 text-center font-body text-xs leading-relaxed text-stone-600 sm:text-sm md:px-4">
          {shadi.address}
        </p>
      </div>
    </section>
  )
}
