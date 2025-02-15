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
    <>
      <ServicesHeroSectionLayout
        serviceName="Web Development"
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
        wsd1="Understanding client requirements, market analysis, and setting project goals to ensure a strong foundation."
        wsd2="Creating wireframes and prototypes with a focus on user experience, aesthetics, and brand consistency."
        wsd3="Building the website using modern technologies, ensuring performance, security, and best coding practices."
        wsd4="Conducting rigorous testing for responsiveness, cross-browser compatibility, and performance optimization."
        wsd5="Launching the website on a secure server with SEO optimizations and analytics integration."
        wsd6="Providing ongoing updates, security patches, and feature enhancements based on user feedback."
        desc=" A structured approach to web development ensures high-quality web solutions from the initial planning stages to the final deployment and maintenance, focusing on organization, user experience, and clear objectives. This involves a systematic methodology that incorporates key elements such as defining goals, planning site structure, and employing agile practices. By prioritizing these aspects, developers can create websites that are both effective and user-friendly"
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
    </>
  );
};


export default Page;
