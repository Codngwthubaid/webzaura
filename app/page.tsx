import React from 'react'
import { HeroSection } from '@/components/layout/sections/hero'
import { MarqueeDemo } from '@/components/layout/sections/sponsers'
import { BenefitSection } from '@/components/layout/sections/benefits'
import { FeaturesSection } from '@/components/layout/sections/features'
import { ServicesSection } from '@/components/layout/sections/services'
import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { TeamSection } from '@/components/layout/sections/team'

export const metadata = {
  title: "Agency - Landing template",
  description: "Landing template for Agency",
}
const page = () => {
  return (
    <>
      <main className='mx-auto container'>
        <HeroSection />
        <MarqueeDemo />
        <BenefitSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialSection />
        <TeamSection />
      </main>
    </>
  )
}

export default page
