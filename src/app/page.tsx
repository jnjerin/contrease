import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { HowItWorks } from '@/components/landing/how-it-works'
import { CTASection } from '@/components/landing/cta-section'
import { NavHeader } from '@/components/landing/nav-header'
// import { Testimonials } from '@/components/landing/testimonials'

export default function Home() {
  return (
    <main>
      <NavHeader />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTASection />
    </main>
  )
}
