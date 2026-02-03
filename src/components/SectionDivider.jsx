/**
 * Shared section divider background (element-top-flower-bg).
 * Ensures consistent responsive coverage across sections.
 */
export default function SectionDivider({ position = 'top', className = '', style = {} }) {
  const positionClass = position === 'bottom' ? 'bottom-0 rotate-180' : 'top-0'

  return (
    <div
      data-layer="deco"
      aria-hidden
      className={`pointer-events-none absolute left-0 w-full min-h-[140px] bg-cover bg-center bg-no-repeat sm:min-h-[180px] md:min-h-[220px] lg:min-h-[260px] ${positionClass} ${className}`}
      style={{ backgroundImage: "url('/image/element-top-flower-bg.png')", ...style }}
    />
  )
}
