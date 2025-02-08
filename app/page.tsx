import React from 'react'
import { HeroSection } from '@/components/layout/sections/hero'
import { MarqueeDemo } from '@/components/layout/sections/sponsers'
import { BenefitSection } from '@/components/layout/sections/benefits'
import { FeaturesSection } from '@/components/layout/sections/features'
import { ServicesSection } from '@/components/layout/sections/services'
import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { PricingSection } from '@/components/layout/sections/pricing'
import { ContactSection } from '@/components/layout/sections/contact'
import { FooterSection } from '@/components/layout/sections/footer'
import { FAQSection } from '@/components/layout/sections/faq'

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
        <PricingSection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  )
}

export default page
