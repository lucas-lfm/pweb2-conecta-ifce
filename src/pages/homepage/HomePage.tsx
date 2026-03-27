import CtaSection from '@/components/homepage/cta-section'
import FaqSection from '@/pages/homepage/faq-section'
import FeatureSection from '@/pages/homepage/feature-section'
import HeroSection from '@/pages/homepage/hero-section'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CtaSection />
      <FaqSection />
    </>
  )
}

export default HomePage
