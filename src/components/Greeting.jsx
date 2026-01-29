/**
 * Chapter II — Greeting. Layered elements, warm embrace.
 */
import { motion } from 'framer-motion'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'
import { greeting } from '../data/content'

export default function Greeting() {
  return (
    <section
      className="relative flex min-h-[55vh] flex-col items-center justify-center overflow-hidden bg-stone-50 px-4 py-20 sm:min-h-[60vh] sm:px-6 sm:py-24 md:min-h-[65vh] md:px-8 md:py-28"
      aria-labelledby="greeting-heading"
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
        className="absolute bottom-0 left-0 w-full max-w-2xl rotate-180 opacity-[0.08] md:max-w-3xl"
        aria-hidden
      />

      {/* Religion elements — both sides */}
      <img
        data-layer="deco"
        src="/image/element-religion.png"
        alt=""
        className="absolute right-0 top-1/2 w-36 -translate-y-1/2 opacity-[0.1] sm:w-44 md:w-56 md:opacity-[0.12]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/reliion-element.png"
        alt=""
        className="absolute bottom-16 left-0 w-32 opacity-[0.09] sm:w-40 md:bottom-20 md:w-52 md:opacity-[0.11]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-religion.png"
        alt=""
        className="absolute left-0 top-20 w-28 rotate-180 opacity-[0.07] sm:w-36 md:opacity-[0.09]"
        aria-hidden
      />

      {/* Flowers */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="right-4 top-20 max-w-[70px] opacity-[0.1] sm:right-6 sm:top-24 md:right-10 md:max-w-[90px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-24 left-4 max-w-[60px] opacity-[0.1] sm:left-6 md:left-10 md:max-w-[80px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower3.png"
        alt=""
        className="absolute right-6 bottom-32 max-w-[56px] opacity-[0.09] md:right-10 md:max-w-[70px]"
        aria-hidden
      />

      {/* Glow */}
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-1/2 max-w-[160px] -translate-x-1/2 -translate-y-1/2 opacity-[0.1] md:max-w-[200px]"
      />

      {/* element.png motif */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-1/2 top-12 w-40 -translate-x-1/2 opacity-[0.08] md:top-16 md:w-52"
        aria-hidden
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-10 text-center sm:gap-12 md:gap-14">
        <motion.p
          className="font-serif text-base italic leading-loose text-stone-600 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {greeting.intro}
        </motion.p>
        <motion.img
          src="/image/greet-assalamualaikum.png"
          alt="Assalamualaikum — a warm welcome"
          className="relative z-10 max-w-[220px] object-contain sm:max-w-[260px] md:max-w-[340px]"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="font-serif text-[15px] leading-loose text-stone-500 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {greeting.outro}
        </motion.p>
      </div>
      <h2 id="greeting-heading" className="sr-only">
        Greeting
      </h2>
    </section>
  )
}
