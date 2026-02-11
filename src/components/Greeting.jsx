/**
 * Chapter II — Greeting. Layered elements, warm embrace.
 */
import { motion } from 'framer-motion'
import { DecorativeFlower } from './DecorativeLayer'
import SectionDivider from './SectionDivider'
import { greeting } from '../data/content'

export default function Greeting() {
  return (
    <section
      className="relative flex min-h-[55vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-stone-50 to-amber-50/30 px-4 py-20 sm:min-h-[60vh] sm:px-6 sm:py-24 md:min-h-[65vh] md:px-8 md:py-28"
      aria-labelledby="greeting-heading"
    >
      <SectionDivider className="opacity-[0.1]" />
      <SectionDivider position="bottom" className="opacity-[0.06]" />

      <img
        data-layer="deco"
        src="/image/element-religion.png"
        alt=""
        className="absolute right-0 top-1/2 w-32 -translate-y-1/2 opacity-[0.07] md:w-40 md:opacity-[0.08]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/reliion-element.png"
        alt=""
        className="absolute bottom-16 left-0 w-28 opacity-[0.06] md:bottom-20 md:w-36 md:opacity-[0.07]"
        aria-hidden
      />

      <DecorativeFlower
        src="/image/element-flower.png"
        className="right-4 top-20 max-w-[60px] opacity-[0.07] md:right-10 md:max-w-[76px] md:opacity-[0.06]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-24 left-4 max-w-[56px] opacity-[0.07] md:left-10 md:max-w-[70px] md:opacity-[0.06]"
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
          className="relative z-10 max-w-[260px] object-contain sm:max-w-[300px] md:max-w-[360px]"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.img
          data-layer="deco"
          src="/image/sun-glasses.png"
          alt=""
          className="relative z-10 mt-4 max-w-[80px] object-contain md:max-w-[100px]"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        />
        <motion.p
          className="font-body text-[15px] leading-loose text-stone-500 sm:text-base"
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
