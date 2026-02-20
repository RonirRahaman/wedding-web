/**
 * Chapter I — The Beginning. Full-screen hero, countdown prominent, layered elements.
 */
import { motion } from 'framer-motion'
import Countdown from './Countdown'
import { DecorativeFlower } from './DecorativeLayer'
import { couple, hero } from '../data/content'

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

function scrollToSaveTheDates() {
  document.getElementById('save-the-dates')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-stone-100 px-4 pt-14 sm:px-6 sm:pt-16 md:px-8 md:pt-20 lg:px-12"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[position:50%_28%] lg:bg-[position:50%_22%]"
        style={{ backgroundImage: "url('/image/bg-1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-stone-950/50 md:bg-black/45" />

      <img
        data-layer="deco"
        src="/image/welcome.png"
        alt=""
        className="absolute right-0 top-1/2 max-w-[100px] -translate-y-1/2 opacity-[0.18] md:max-w-[120px]"
        aria-hidden
      />

      {/* Flowers — 1–2 corners only */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="right-4 top-20 max-w-[80px] opacity-[0.08] md:right-10 md:top-28 md:max-w-[100px] md:opacity-[0.06]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-24 left-4 max-w-[70px] opacity-[0.07] md:left-8 md:max-w-[90px] md:opacity-[0.06]"
      />

      <motion.div
        className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center"
        initial="initial"
        animate="animate"
        variants={{
          initial: {},
          animate: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.p
          className="mb-3 font-body text-[10px] font-medium uppercase tracking-[0.25em] text-amber-100/90 sm:mb-4 sm:text-xs sm:tracking-[0.3em] md:text-sm"
          variants={fadeIn}
        >
          {hero.chapterLabel}
        </motion.p>
        <motion.img
          src="/image/welcome-wedding.png"
          alt=""
          className="mb-6 max-w-[160px] object-contain sm:mb-8 sm:max-w-[200px] md:mb-10 md:max-w-[260px]"
          variants={fadeIn}
        />
        <motion.h1
          id="hero-heading"
          className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
          variants={fadeIn}
        >
          {couple.groom} <span className="text-amber-300">&</span> {couple.bride}
        </motion.h1>
        <motion.p
          className="mt-2 font-serif text-base text-amber-100/95 sm:mt-3 sm:text-lg md:text-xl"
          variants={fadeIn}
        >
          {hero.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-lg font-body text-[15px] leading-loose text-amber-100/85 sm:mt-8 sm:text-base md:mt-10"
          variants={fadeIn}
        >
          {hero.poeticLine}
        </motion.p>
        <motion.div
          className="relative z-10 mt-10 w-full max-w-sm rounded-2xl bg-white/10 px-5 py-6 backdrop-blur-xl sm:mt-12 sm:max-w-md sm:px-8 sm:py-8 md:mt-16"
          variants={fadeIn}
        >
          <Countdown
            variant="hero"
            prefix={hero.countdownPrefix}
            suffix={hero.countdownSuffix}
            doneMessage="The big day is here!"
          />
        </motion.div>
        <motion.button
          onClick={scrollToSaveTheDates}
          className="mt-8 rounded-xl bg-amber-500 px-8 py-4 font-body text-sm font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98] sm:mt-10 sm:text-base mb-3"
          variants={fadeIn}
        >
          Save the Date
        </motion.button>
      </motion.div>
    </section>
  )
}
