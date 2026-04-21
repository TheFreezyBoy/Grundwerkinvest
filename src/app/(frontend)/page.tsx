// app/page.tsx
import { HeroSection } from '@/components/HeroSection'
import { InvestmentPerformance } from '@/components/InvestmentPerformance'
import { HowItWorks } from '@/components/HowItWorks'
import { WhyProfitable } from '@/components/WhyProfitable'
import { WhyGermany } from '@/components/WhyGermany'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { PropertyListings } from '@/components/PropertyListings'
import { ProfitCalculator } from '@/components/ProfitCalculator'
import { Testimonials } from '@/components/Testimonials'
import { ContactSection } from '@/components/ContactSection'
import payload from 'payload'
import config from '@/payload.config'

const HomePage = async () => {
  // Server-side fetch

  const res = await payload.find({
    collection: 'listings', // твоя коллекция
    limit: 4,
    where: {
      isFeatured: true,
      isSold: false,
    },
    depth: 2,
  })

  const properties = res.docs

  return (
    <>
      <HeroSection />
      <PropertyListings properties={properties} />
      <InvestmentPerformance />
      <HowItWorks />
      <WhyProfitable />
      <WhyGermany />
      <WhyChooseUs />
      <ProfitCalculator />
      <Testimonials />
      <ContactSection />
    </>
  )
}

export default HomePage
