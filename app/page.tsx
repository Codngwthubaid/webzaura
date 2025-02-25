"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useScroll } from "framer-motion";
import { BenefitSection } from '@/components/layout/sections/benefits';
import { ContactSection } from '@/components/layout/sections/contact';
import { FAQSection } from '@/components/layout/sections/faq';
import { FeaturesSection } from '@/components/layout/sections/features';
import { HeroSection } from '@/components/layout/sections/hero';
import { PricingSection } from '@/components/layout/sections/pricing';
import { LensDemo } from '@/components/layout/sections/services';
import { MarqueeDemo } from '@/components/layout/sections/sponsers';
import { FooterSection } from '@/components/layout/sections/footer';
import BottomGravity from '@/components/animations/bottomGravity';
import { TestimonialSection } from '@/components/layout/sections/testimonial';


const Page = () => {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
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
    <div>
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
      <HeroSection />
      <MarqueeDemo />
      <BenefitSection />
      <LensDemo />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
      <BottomGravity />
    </div>
  );
};

export default Page;