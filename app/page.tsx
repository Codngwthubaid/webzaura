"use client"
import React, { useEffect, useState } from 'react'
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
import { useTheme } from 'next-themes'

const Page = () => {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); 
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        // Return a neutral state during SSR to avoid hydration mismatch
        return null;
    }

    return loading ? (
        <div className={`flex justify-center items-center h-screen ${theme === "dark" ? "bg-[#0c0a09]" : "bg-white"}`}>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
        </div>
    ) : (
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