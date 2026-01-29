/**
 * One-page immersive scrollytelling wedding site.
 * Lenis smooth scroll; scroll progress; celebration on March 23; chapter-based sections.
 */
import SmoothScroll from './components/Layout/SmoothScroll'
import ScrollProgress from './components/Layout/ScrollProgress'
import CelebrationEffect from './components/CelebrationEffect'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import MeetCouple from './components/MeetCouple'
import SaveTheDates from './components/SaveTheDates'
import SectionHaldi from './components/SectionHaldi'
import SectionShadi from './components/SectionShadi'
import SectionBoubhat from './components/SectionBoubhat'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#main"
        className="fixed left-3 top-3 z-[101] flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-stone-800 px-3 py-2 text-sm text-white opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:left-4 sm:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CelebrationEffect />
      <main id="main">
        <Hero />
        <Greeting />
        <MeetCouple />
        <SaveTheDates />
        <SectionHaldi />
        <SectionShadi />
        <SectionBoubhat />
        <Gallery />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
