/**
 * Final chapter — Thank you. Layered elements, bg-1, flowers, light, welcome.
 */
import { motion } from 'framer-motion'
import { DecorativeFlower } from './DecorativeLayer'
import { couple, thankYouMessage, footer, rsvp } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Footer() {
  return (
    <section
      id="footer"
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[65vh] sm:px-6 sm:py-24 md:min-h-[70vh] md:px-8 md:py-28"
      aria-labelledby="thanks-heading"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-[position:50%_32%] lg:bg-[position:50%_26%]"
        style={{ backgroundImage: "url('/image/bg-1.jpeg')" }}
      />
      <div className="absolute inset-0 bg-stone-950/50 md:bg-black/45" />

      <img
        data-layer="deco"
        src="/image/welcome.png"
        alt=""
        className="absolute bottom-16 left-1/2 max-w-[100px] -translate-x-1/2 opacity-[0.22] md:max-w-[120px]"
        aria-hidden
      />

      <DecorativeFlower
        src="/image/element-flower3.png"
        className="bottom-16 right-4 max-w-[64px] opacity-[0.09] sm:bottom-20 sm:right-6 md:bottom-24 md:right-8 md:max-w-[80px] md:opacity-[0.07]"
      />
      <DecorativeFlower
        src="/image/element-flower.png"
        className="bottom-20 left-4 max-w-[58px] opacity-[0.08] md:left-8 md:max-w-[72px] md:opacity-[0.06]"
      />

      <motion.div
        id="thanks-heading"
        className="relative z-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease }}
      >
        <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          Thank you
        </h2>
        <p className="mt-2 font-serif text-sm italic text-amber-200/80 sm:text-base">
          {footer.signOff}
        </p>
        <p className="mt-4 font-serif text-lg text-amber-100/95 sm:mt-5 sm:text-xl">
          {couple.groom} & {couple.bride}
        </p>
        <div className="mx-auto mt-8 space-y-4 font-body text-[15px] leading-loose text-amber-100/90 sm:mt-10 sm:space-y-5 sm:text-base md:mt-12">
          {thankYouMessage.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        {rsvp.type === 'bless' && (
          <p className="mt-10 font-serif text-xl font-semibold italic text-amber-300 sm:mt-12 sm:text-2xl">
            {footer.cta}
          </p>
        )}
        {rsvp.type === 'whatsapp' && rsvp.whatsapp && (
          <a
            href={rsvp.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-body font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98] sm:mt-12"
          >
            RSVP via WhatsApp
          </a>
        )}
        {rsvp.type === 'form' && rsvp.formUrl && (
          <a
            href={rsvp.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-body font-semibold text-stone-900 transition hover:bg-amber-400 active:scale-[0.98] sm:mt-12"
          >
            RSVP
          </a>
        )}
      </motion.div>
    </section>
  )
}
