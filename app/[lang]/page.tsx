"use client"
import React, { use , useEffect, useState } from 'react';
import { BenefitSection } from '@/components/layout/sections/benefits';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { ServicesSection } from '@/components/layout/sections/services';
import { MarqueeDemo } from '@/components/layout/sections/sponsers';
import { TestimonialSection } from '@/components/layout/sections/testimonial';
import { FooterSection } from '@/components/layout/sections/footer';
import { useTheme } from 'next-themes';
import { motion, useSpring, useScroll } from "framer-motion";
import Link from 'next/link';
import { getTranslations } from "@/utils/i18n";

// Define the PageProps type
type PageProps = {
    params: Promise<{
      lang: string;
    }>;
  };

const Page = ({ params }: PageProps) => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const unwrappedParams = use(params);
  const translations = getTranslations(unwrappedParams.lang);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
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
            {/* SVG Paths */}
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
  );
};

export default Page;