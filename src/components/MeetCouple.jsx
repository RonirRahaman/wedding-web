/**
 * Chapter II · The Story. Meet the couple — layered elements, frames, flowers.
 */
import { motion } from 'framer-motion'
import { DecorativeFlower, DecorativeFrame, DecorativeGlow } from './DecorativeLayer'
import SectionDivider from './SectionDivider'
import { couple, meetTheCouple, transitions } from '../data/content'

const people = [
  {
    name: couple.groom,
    short: couple.groomShort,
    img: '/image/ronir-pic.jpeg',
    line: meetTheCouple.groomLine,
  },
  {
    name: couple.bride,
    short: couple.brideShort,
    img: '/image/jule-pic.jpeg',
    line: meetTheCouple.brideLine,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

export default function MeetCouple() {
  return (
    <section
      className="relative overflow-hidden bg-stone-100 px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-12"
      aria-labelledby="meet-heading"
    >
      {/* Section dividers */}
      <SectionDivider className="opacity-[0.11]" />
      <SectionDivider position="bottom" className="opacity-[0.08]" />

      {/* Flowers — all corners */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[64px] opacity-[0.1] md:left-8 md:top-28 md:max-w-[80px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-32 right-4 max-w-[72px] opacity-[0.11] md:right-8 md:bottom-40 md:max-w-[90px]"
      />
      <DecorativeFlower
        src="/image/element-flower3.png"
        className="bottom-24 left-4 max-w-[58px] opacity-[0.09] md:left-8 md:max-w-[72px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute right-4 top-1/3 max-w-[56px] opacity-[0.09] md:right-8 md:max-w-[70px]"
        aria-hidden
      />

      {/* element.png + element-base as motifs */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute right-0 top-[45%] w-44 -translate-y-1/2 opacity-[0.08] md:w-56 lg:w-64"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-base.png"
        alt=""
        className="absolute left-0 top-[30%] w-32 opacity-[0.06] md:w-40"
        aria-hidden
      />

      {/* Glow */}
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-1/2 max-w-[180px] -translate-x-1/2 -translate-y-1/2 opacity-[0.09] md:max-w-[220px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-stone-400 sm:mb-5 sm:text-xs md:tracking-[0.3em]"
          {...fadeUp}
        >
          {meetTheCouple.chapterLabel}
        </motion.p>
        <motion.h2 id="meet-heading" className="sr-only" {...fadeUp}>
          Meet the Couple
        </motion.h2>
        <motion.p
          className="mx-auto max-w-xl text-center font-serif text-sm italic text-stone-500 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {transitions.afterGreeting}
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg leading-relaxed text-stone-700 sm:mt-8 sm:text-xl md:text-[1.25rem]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
        >
          {meetTheCouple.intro}
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 sm:gap-14 md:grid-cols-2 md:gap-20">
          {people.map((person, i) => (
            <motion.div
              key={person.short}
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg sm:max-w-[240px] md:max-w-[260px]">
                <DecorativeFrame
                  src="/image/element-base.png"
                  className="inset-0 h-full w-full"
                />
                <img
                  src="/image/element-flower2.png"
                  alt=""
                  className="absolute bottom-0 right-0 z-[1] w-16 opacity-[0.18] sm:w-[4.5rem] md:w-20"
                  aria-hidden
                />
                <img
                  src="/image/element-flower3.png"
                  alt=""
                  className="absolute left-0 top-0 w-14 opacity-[0.12] sm:w-16 md:w-[4.5rem]"
                  aria-hidden
                />
                <motion.img
                  src={person.img}
                  alt={person.name}
                  className="relative z-10 h-full w-full object-cover"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-4 font-serif text-xl font-semibold text-stone-800 sm:mt-5 sm:text-[1.35rem]">
                {person.name}
              </p>
              <p className="mt-2 max-w-[240px] text-center font-serif text-sm italic leading-relaxed text-stone-500 sm:max-w-[260px] sm:text-[15px]">
                {person.line}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative mx-auto mt-16 max-w-2xl space-y-5 text-center font-serif text-[15px] leading-loose text-stone-600 sm:mt-20 sm:space-y-6 sm:text-base md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            data-layer="deco"
            src="/image/element.png"
            alt=""
            className="absolute -left-4 top-1/2 w-24 -translate-y-1/2 opacity-[0.07] md:w-32"
            aria-hidden
          />
          <img
            data-layer="deco"
            src="/image/element-flower.png"
            alt=""
            className="absolute -right-4 top-1/2 w-20 -translate-y-1/2 opacity-[0.08] md:w-28"
            aria-hidden
          />
          {meetTheCouple.ourStory.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </motion.div>
        <motion.p
          className="mx-auto mt-10 max-w-xl text-center font-serif text-base italic text-stone-500 sm:mt-12 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {meetTheCouple.closing}
        </motion.p>
      </div>
    </section>
  )
}
