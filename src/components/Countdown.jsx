/**
 * Countdown to Shadi. Optional prefix/suffix. variant="hero" for light text on dark.
 */
import { useCountdown } from '../hooks/useCountdown'
import { motion } from 'framer-motion'

function Block({ value, label, light }) {
  return (
    <div className="flex min-w-[4rem] flex-col items-center sm:min-w-0">
      <motion.span
        className={`font-serif text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl ${
          light ? 'text-amber-100' : 'text-stone-800'
        }`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {String(value).padStart(2, '0')}
      </motion.span>
      <span
        className={`mt-0.5 text-[10px] uppercase tracking-[0.2em] sm:mt-1 sm:text-xs sm:tracking-widest ${
          light ? 'text-amber-200/80' : 'text-stone-500'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

export default function Countdown({
  prefix,
  suffix,
  doneMessage = 'The big day is here!',
  variant = 'default',
}) {
  const left = useCountdown()
  const light = variant === 'hero'

  if (!left) {
    return (
      <p
        className={`font-serif text-base sm:text-lg ${
          light ? 'text-amber-100/90' : 'text-stone-600'
        }`}
      >
        Counting down…
      </p>
    )
  }

  if (left.done) {
    return (
      <p
        className={`font-serif text-lg sm:text-xl ${
          light ? 'text-amber-100' : 'text-stone-700'
        }`}
      >
        {doneMessage}
      </p>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5">
      {prefix && (
        <p
          className={`font-serif text-sm italic sm:text-base ${
            light ? 'text-amber-100/90' : 'text-stone-600'
          }`}
        >
          {prefix}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
        <Block value={left.days} label="Days" light={light} />
        <Block value={left.hours} label="Hours" light={light} />
        <Block value={left.minutes} label="Minutes" light={light} />
        <Block value={left.seconds} label="Seconds" light={light} />
      </div>
      {suffix && (
        <p
          className={`font-serif text-sm italic sm:text-base ${
            light ? 'text-amber-200/80' : 'text-stone-500'
          }`}
        >
          {suffix}
        </p>
      )}
    </div>
  )
}
