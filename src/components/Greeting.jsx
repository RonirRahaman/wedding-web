/**
 * Chapter II — Greeting. Video background of the couple, warm embrace.
 */
import { motion } from 'framer-motion'
import { greeting } from '../data/content'

export default function Greeting() {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col items-center justify-end overflow-hidden px-4 pb-12 sm:min-h-[75vh] sm:px-6 sm:pb-16 md:min-h-[80vh] md:px-8 md:pb-20"
      aria-labelledby="greeting-heading"
    >
      {/* Video background — couple (place your video at public/video/couple.mp4) */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-amber-50/50" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src="/image/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" />

      {/* Text only — at bottom of section */}
      <div className="relative z-10 flex flex-col gap-4 pb-4 sm:gap-5 sm:pb-6 md:gap-6">
        <motion.p
          className="max-w-xl text-center font-serif text-lg font-semibold italic leading-relaxed text-white drop-shadow-md sm:text-xl md:text-2xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {greeting.intro}
        </motion.p>
        <motion.p
          className="max-w-xl text-center font-body text-base font-semibold leading-relaxed text-amber-50 drop-shadow-md sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 12 }}
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
