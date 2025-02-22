"use client"
import React, { useState, useEffect } from "react";

import { ContactSection } from "@/components/layout/sections/contact";
import { useTheme } from "next-themes";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesTechStackLayout from "@/components/layout/services/servicesTechStackLayout";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import ServicesPricingLayout from "@/components/layout/services/servicesPricingLayout";
import { FooterSection } from "@/components/layout/sections/footer";

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
    <div className={`flex justify-center items-center h-screen  ${theme === "dark" ? "bg-[#0c0a09]" : "bg-white"}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
    </div>
  ) : (
    <div>
      <ServicesHeroSectionLayout
        serviceBadgeName="Web"
        serviceSpanName="Development"
        headLineFirst="Designed"
        headLineSecond="Your Digital Identity"
      />

      <ServicesWorkFLowLayout
        wst1="Research & Planning"
        wst2="UI/UX Design"
        wst3="Development"
        wst4="Testing & QA"
        wst5="Deployment"
        wst6="Maintenance & Support"
        wsd1="Every successful project starts with a strong foundation. We dive deep into understanding your business, audience, and goals. Through competitor analysis, market research, and brainstorming sessions, we craft a strategic roadmap tailored to your needs."
        wsd2="Design is more than just aesthetics—it's about creating seamless experiences. Our designers blend creativity with usability, crafting intuitive, visually appealing, and user-friendly interfaces. Wireframes, prototypes, and design iterations ensure perfection before development begins."
        wsd3="Once the blueprint is set, our developers bring it to life with clean, efficient, and scalable code. Whether it's a dynamic website, a robust web app, or a powerful e-commerce platform, we build solutions that are fast, secure, and future-ready."
        wsd4="Before your project goes live, we put it through rigorous testing. From functionality and performance checks to security and responsiveness testing, we leave no stone unturned. Every feature is refined to ensure a flawless experience for your users."
        wsd5="Going live is an exciting milestone! We handle everything—from server setup and domain configuration to launching your website smoothly. Our team ensures a hassle-free deployment with zero downtime and optimal performance."
        wsd6="Our relationship doesn't end at launch. We offer ongoing maintenance, updates, and support to keep your website running smoothly. Whether it's fixing bugs, optimizing speed, or adding new features, we're always here to help."
        desc="At Webzaura, we follow a structured yet flexible approach to ensure every project meets the highest standards. Here's how we bring your ideas to life:"
      />

      <ServicesTechStackLayout />

      <ServicesPricingLayout
        wdt1="Basic"
        wdpo1={0}
        wdp1={179}
        wdd1="A perfect plan for small businesses and startups."
        wdt2="Enterprise"
        wdpo2={0}
        wdp2={299}
        wdd2="Best for growing businesses."
        wdt3="Advanced"
        wdpo3={0}
        wdp3={599}
        wdd3="A perfect plan for small businesses and startups."
        wdbl1_1="wdbl1_1"
        wdbl1_2="wdbl1_2"
        wdbl1_3="wdbl1_3"
        wdbl1_4="wdbl1_4"
        wdbl1_5="wdbl1_5"
        wdbl2_1="wdbl2_1"
        wdbl2_2="wdbl2_2"
        wdbl2_3="wdbl2_3"
        wdbl2_4="wdbl2_4"
        wdbl2_5="wdbl2_5"
        wdbl3_1="wdbl3_1"
        wdbl3_2="wdbl3_2"
        wdbl3_3="wdbl3_3"
        wdbl3_4="wdbl3_4"
        wdbl3_5="wdbl3_5"
      />
      <ContactSection />
      <FooterSection />
    </div>
  );
};


export default Page;
