/**
 * Chapter VII · Frames. Layered elements, film-strip, flowers, light.
 */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gallery } from '../data/content'
import { DecorativeFlower, DecorativeGlow } from './DecorativeLayer'
import SectionDivider from './SectionDivider'

const images = [
  { src: '/image/ronir-jule-1.jpeg', alt: 'Ronir and Jule' },
  { src: '/image/ronir-jule-2.jpeg', alt: 'Ronir and Jule' },
  { src: '/image/ronir-jule-3.jpeg', alt: 'Ronir and Jule' },
]
const ease = [0.22, 1, 0.36, 1]

export default function Gallery() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[240vh] overflow-hidden bg-stone-900 sm:min-h-[260vh] md:min-h-[280vh] lg:min-h-[300vh]"
      aria-labelledby="gallery-heading"
    >
      {/* Subtle bg-2 layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] md:bg-[position:50%_35%] lg:bg-[position:50%_30%]"
        style={{ backgroundImage: "url('/image/bg-2.jpeg')" }}
      />

      {/* Section dividers */}
      <SectionDivider className="opacity-[0.14]" />
      <SectionDivider position="bottom" className="opacity-[0.1]" />

      {/* Flowers — corners */}
      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[64px] opacity-[0.12] md:left-8 md:top-28 md:max-w-[80px]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-28 right-4 max-w-[68px] opacity-[0.12] md:right-8 md:bottom-36 md:max-w-[84px]"
      />
      <img
        data-layer="deco"
        src="/image/element-flower3.png"
        alt=""
        className="absolute bottom-20 left-4 max-w-[56px] opacity-[0.1] md:left-8 md:max-w-[70px]"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-flower.png"
        alt=""
        className="absolute right-4 top-1/3 max-w-[58px] opacity-[0.1] md:right-8 md:max-w-[72px]"
        aria-hidden
      />

      {/* element.png + element-base */}
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-1/2 top-16 w-44 -translate-x-1/2 opacity-[0.1] md:w-56"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-base.png"
        alt=""
        className="absolute left-0 top-1/2 w-40 -translate-y-1/2 opacity-[0.08] md:w-52"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element-base.png"
        alt=""
        className="absolute right-0 top-1/2 w-40 -translate-y-1/2 opacity-[0.08] md:w-52"
        aria-hidden
      />

      {/* Glow */}
      <DecorativeGlow
        src="/image/element-light.png"
        className="left-1/2 top-1/2 max-w-[180px] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] md:max-w-[220px]"
      />

      <div className="relative z-10 sticky top-0 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <motion.p
          className="mb-4 text-center text-[10px] uppercase tracking-[0.25em] text-amber-200/60 sm:mb-5 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
        >
          {gallery.chapterLabel}
        </motion.p>
        <h2 id="gallery-heading" className="sr-only">
          Gallery
        </h2>
        <motion.p
          className="mx-auto max-w-xl text-center font-serif text-base leading-loose text-amber-100/90 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
        >
          {gallery.intro}
        </motion.p>

        <div className="mt-12 flex w-full max-w-4xl flex-col items-center gap-10 sm:mt-14 sm:gap-12 md:mt-16 md:flex-row md:justify-center md:gap-8 lg:gap-10">
          {images.map((item, i) => (
            <FilmStripCard key={item.src} {...item} index={i} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-lg text-center font-serif text-[15px] italic leading-loose text-amber-200/70 sm:mt-14 sm:text-base md:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
        >
          {gallery.outro}
        </motion.p>
      </div>
    </section>
  )
}

function FilmStripCard({ src, alt, index, scrollYProgress }) {
  const start = 0.18 + index * 0.26
  const end = start + 0.2
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
  const scale = useTransform(scrollYProgress, [start, end], [0.96, 1])
  const filter = useTransform(
    scrollYProgress,
    [start, end],
    ['blur(8px)', 'blur(0px)'],
  )

  return (
    <motion.div
      className="relative w-full max-w-[280px] overflow-hidden rounded-xl sm:max-w-[320px] md:max-w-[300px] lg:max-w-sm"
      style={{ opacity, scale }}
    >
      <div className="relative">
        <img
          src="/image/element-base.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden
        />
        <motion.img
          src={src}
          alt={alt}
          className="relative z-10 aspect-[3/4] w-full object-cover"
          style={{ filter }}
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
