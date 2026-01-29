/**
 * Chapter I — The Beginning. Full-screen hero, countdown prominent, layered elements.
 */
import { motion } from 'framer-motion'
import Countdown from './Countdown'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'
import { couple, hero } from '../data/content'

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-stone-100 px-4 pt-14 sm:px-6 sm:pt-16 md:px-8 md:pt-20 lg:px-12"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/bg-1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-stone-900/40 md:bg-stone-900/35" />

      {/* Top divider */}
      <img
        data-layer="deco"
        src="/image/element-top-flower-bg.png"
        alt=""
        className="absolute left-0 top-0 w-full max-w-2xl opacity-[0.14] sm:opacity-[0.16] md:max-w-3xl"
        aria-hidden
      />
      {/* Bottom divider */}
      <img
        data-layer="deco"
        src="/image/element-top-flower-bg.png"
        alt=""
        className="absolute bottom-0 left-0 w-full max-w-2xl rotate-180 opacity-[0.1] md:max-w-3xl"
        aria-hidden
      />

      {/* Flowers — corners */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="right-2 top-16 max-w-[72px] sm:right-4 sm:top-20 sm:max-w-[90px] md:right-10 md:top-28 md:max-w-[120px] md:opacity-[0.14]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-20 left-2 max-w-[64px] opacity-[0.1] sm:bottom-24 sm:left-4 sm:max-w-[80px] md:left-8 md:max-w-[100px]"
      />
      <DecorativeFlower
        src="/image/element-flower3.png"
        className="left-2 top-1/3 max-w-[56px] opacity-[0.09] sm:left-4 sm:max-w-[72px] md:left-8 md:max-w-[90px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute bottom-24 right-2 max-w-[60px] opacity-[0.1] sm:bottom-28 sm:right-4 sm:max-w-[76px] md:right-8 md:max-w-[90px]"
        aria-hidden
      />

      {/* Glow behind countdown */}
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-[72%] max-w-[180px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] md:top-[70%] md:max-w-[220px]"
      />

      {/* Welcome as subtle accent */}
      <img
        data-layer="deco"
        src="/image/welcome.png"
        alt=""
        className="absolute right-0 top-1/2 max-w-[100px] -translate-y-1/2 opacity-[0.08] sm:max-w-[120px] md:max-w-[140px]"
        aria-hidden
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
          className="mb-3 text-[10px] uppercase tracking-[0.25em] text-amber-100/90 sm:mb-4 sm:text-xs sm:tracking-[0.3em] md:text-sm"
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
          className="font-serif text-[1.5rem] font-semibold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl"
          variants={fadeIn}
        >
          {couple.groom} <span className="text-amber-200">&</span> {couple.bride}
        </motion.h1>
        <motion.p
          className="mt-2 font-serif text-base text-amber-100/95 sm:mt-3 sm:text-lg md:text-xl"
          variants={fadeIn}
        >
          {hero.tagline}
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-lg font-serif text-[15px] leading-loose text-amber-100/80 sm:mt-8 sm:text-base md:mt-10"
          variants={fadeIn}
        >
          {hero.poeticLine}
        </motion.p>
        <motion.div
          className="relative z-10 mt-10 w-full max-w-sm rounded-2xl border border-amber-200/20 bg-white/15 px-5 py-6 backdrop-blur-md sm:mt-12 sm:max-w-md sm:px-8 sm:py-8 md:mt-16"
          variants={fadeIn}
        >
          <Countdown
            variant="hero"
            prefix={hero.countdownPrefix}
            suffix={hero.countdownSuffix}
            doneMessage="The big day is here!"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
