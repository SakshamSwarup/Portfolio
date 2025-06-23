import { AnimatedTestimonialsDemo } from './components/ui/AnimatedTestimonialsDemo'
import { DraggableSkill } from './components/ui/DraggableSkill'
import { BentoGridDemo } from './components/ui/Grid'
import Hero from './components/ui/Hero'
import RecentProject from './components/ui/RecentProject'
import ReachOutForm from './components/ui/ReachOutForm'
import { TextRevealDemo } from './components/ui/Text_demo'
import Footer from './components/ui/footer'
import GlassNavbar from './components/ui/glassNavbar'
import { ScrollBasedVelocityDemo } from './components/ui/Velocitydemo'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden px-5 scheme-dark sm:px-10 dark:bg-black">
      <GlassNavbar />

      <Hero />
      <DraggableSkill />
      <TextRevealDemo />
      <div id="about" className="h-xl -mt-20 flex w-full justify-center">
        <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-bold tracking-wider whitespace-pre-wrap text-transparent uppercase lg:text-9xl dark:from-white dark:to-slate-900/10">
          About{' '}
          <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-bold tracking-tight whitespace-pre-wrap text-transparent uppercase lg:text-9xl dark:from-white dark:to-slate-900/10">
            Me
          </span>
        </span>
      </div>
      <BentoGridDemo />
      <section id="projects">
        <RecentProject />
      </section>
      <ScrollBasedVelocityDemo />
      <div className="mt-10 lg:mt-20">
        <AnimatedTestimonialsDemo />
      </div>

      <ReachOutForm />
      <Footer />
    </main>
  )
}
