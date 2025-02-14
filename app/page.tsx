"use client"
import React from 'react'
import { BenefitSection } from '@/components/layout/sections/benefits'
import { ContactSection } from '@/components/layout/sections/contact'
import { FAQSection } from '@/components/layout/sections/faq'
import { FeaturesSection } from '@/components/layout/sections/features'
import { HeroSection } from '@/components/layout/sections/hero'
import { PricingSection } from '@/components/layout/sections/pricing'
import { ServicesSection } from '@/components/layout/sections/services'
import { MarqueeDemo } from '@/components/layout/sections/sponsers'
import { TeamSection } from '@/components/layout/sections/team'
import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { FooterSection } from '@/components/layout/sections/footer'

const Page = () => {
    return (
        <>
            <HeroSection /> 
            <MarqueeDemo />
            <BenefitSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <TeamSection />
            <PricingSection />
            <ContactSection />
            <FAQSection />
            <FooterSection />
        </>
    )
}

export default Page