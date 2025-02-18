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
import { TestimonialSection } from '@/components/layout/sections/testimonial'
import { FooterSection } from '@/components/layout/sections/footer'
import { useTheme } from 'next-themes'
import { motion, useSpring, useScroll } from "motion/react"
import Link from 'next/link'
import { getTranslations } from "@/utils/i18n";

const Page = ({ params }: { params: { lang: string } }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const translations = getTranslations(params.lang);

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


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
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#e9590c",
                }}
            />
            <div className="fixed bottom-3 right-3 z-10">
                <Link
                    href="https://wa.me/9068507572?text=Hi%20I%20want%20to%20buy%20your%20services.%20Can%20you%20help%20me%20please%20?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* WhatsApp Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 175.216 175.552"
                        className="w-16 transition-transform duration-300 ease-in-out hover:scale-125"
                    >
                        <defs>
                            <linearGradient
                                id="b"
                                x1="85.915"
                                x2="86.535"
                                y1="32.567"
                                y2="137.092"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#57d163" />
                                <stop offset="1" stopColor="#23b33a" />
                            </linearGradient>
                            <filter
                                id="a"
                                width="0.115"
                                height="0.114"
                                x="-.057"
                                y="-.057"
                                colorInterpolationFilters="sRGB"
                            >
                                <feGaussianBlur stdDeviation="3.531" />
                            </filter>
                        </defs>
                        <path
                            fill="#b3b3b3"
                            d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                            filter="url(#a)"
                        />
                        <path
                            fill="#fff"
                            d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                        />
                        <path
                            fill="url(#b)"
                            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                        />
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                        />
                    </svg>

                    {/* Tooltip on Hover */}
                    {isHovered && (
                        <div className="absolute w-40 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-sm px-3 py-1 rounded-md shadow-lg">
                            Chat with us on WhatsApp!
                        </div>
                    )}
                </Link>
            </div>
            <HeroSection translations={translations.hero} />
            <MarqueeDemo />
            <BenefitSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <PricingSection />
            <ContactSection />
            <FAQSection />
            <FooterSection />
        </>
    )
}

export default Page