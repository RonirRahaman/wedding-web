/**
 * Floating bottom nav — visible on mobile only. Scrolls to sections.
 */
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'save-the-dates', label: 'Events' },
  { id: 'meet-the-couple', label: 'Couple' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'footer', label: 'Thank You' },
]

export default function MobileNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[90] md:hidden"
      aria-label="Page navigation"
    >
      <div className="mx-4 mb-4 flex justify-center gap-1 rounded-2xl bg-white/90 px-2 py-2 shadow-lg backdrop-blur-md">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="flex flex-1 flex-col items-center rounded-xl px-2 py-2 font-body text-[10px] font-medium text-stone-600 transition hover:bg-amber-100/80 hover:text-stone-800 active:scale-[0.98]"
            aria-label={`Go to ${item.label}`}
          >
            <span className="block">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
