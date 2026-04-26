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
import { getPayload } from 'payload'
import config from '@payload-config'

const HomePage = async () => {
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'listings',
    limit: 4,
    where: {
      'category.status': { not_equals: 'sold' },
    },
    sort: '-createdAt',
    depth: 2,
  })

  const properties = res.docs

  return (
    <>
      <HeroSection />
      <PropertyListings properties={properties} />
      {/*<InvestmentPerformance />*/}
      {/*<HowItWorks />*/}
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
