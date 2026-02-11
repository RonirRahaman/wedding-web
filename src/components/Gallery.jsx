/**
 * Chapter VII · Frames. Layered elements, film-strip, flowers, light.
 */
import { motion } from 'framer-motion'
import { gallery } from '../data/content'
import { DecorativeFlower } from './DecorativeLayer'

const images = [
  { src: '/image/ronir-jule-1.jpeg', alt: 'Ronir and Jule' },
  { src: '/image/ronir-jule-2.jpeg', alt: 'Ronir and Jule' },
  { src: '/image/ronir-jule-3.jpeg', alt: 'Ronir and Jule' },
]
const ease = [0.22, 1, 0.36, 1]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen overflow-hidden bg-stone-950"
      aria-labelledby="gallery-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.2]"
        style={{ backgroundImage: "url('/image/bg-2.jpeg')" }}
      />

      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute left-0 top-1/2 w-32 -translate-y-1/2 opacity-[0.14] md:w-40"
        aria-hidden
      />
      <img
        data-layer="deco"
        src="/image/element.png"
        alt=""
        className="absolute right-0 top-1/2 w-32 -translate-y-1/2 rotate-180 opacity-[0.14] md:w-40"
        aria-hidden
      />

      <DecorativeFlower
        src="/image/element-flower.png"
        className="left-4 top-24 max-w-[58px] opacity-[0.08] md:left-8 md:top-28 md:max-w-[72px] md:opacity-[0.06]"
      />
      <DecorativeFlower
        src="/image/element-flower2.png"
        className="bottom-28 right-4 max-w-[62px] opacity-[0.08] md:right-8 md:bottom-36 md:max-w-[76px] md:opacity-[0.06]"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
        <motion.p
          className="mb-4 text-center font-body text-[10px] font-medium uppercase tracking-[0.25em] text-amber-200/60 sm:mb-5 sm:text-xs"
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

        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 justify-items-center gap-8 sm:mt-14 sm:gap-10 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-10">
          {images.map((item) => (
            <FilmStripCard key={item.src} {...item} />
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-lg text-center font-body text-[15px] italic leading-loose text-amber-200/70 sm:mt-14 sm:text-base md:mt-16"
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

function FilmStripCard({ src, alt }) {
  return (
    <motion.div
      className="group relative w-full max-w-[280px] overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl sm:max-w-[320px] md:max-w-[300px] lg:max-w-sm"
      initial={{ opacity: 0.3, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        <motion.img
          src={src}
          alt={alt}
          className="aspect-[3/4] w-full object-cover"
          initial={{ filter: 'blur(8px)' }}
          whileInView={{ filter: 'blur(0px)' }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
