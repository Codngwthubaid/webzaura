"use client"
import React, { useState, useEffect } from "react";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesPricingLayout from "@/components/layout/services/servicesPricingLayout";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex justify-center items-center h-screen bg-[#0c0a09]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#ea580c]"></div>
    </div>
  ) : (
    <>
      <ServicesHeroSectionLayout
        serviceName="Digital Marketing"
        headLineFirst="Aligning"
        headLineSecond="Strategy with Stories"
      />

      <ServicesWorkFLowLayout
        wst1="Market Research & Audience Understanding"
        wst2="Set Goals & Define KPIs"
        wst3="Content Strategy & Creation"
        wst4="Execution & Promotion"
        wst5="Monitor & Analyze Performance"
        wst6="Refine & Optimize"
        wsd1="Begin by conducting thorough market research to identify your target audience, industry trends, and competitors. Utilize tools like Google Analytics and social media insights to create detailed buyer personas that represent your ideal customers"
        wsd2=" Clearly outline your marketing objectives using the SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound). This will help you establish key performance indicators (KPIs) to measure success"
        wsd3="Develop a content strategy that includes planning, creating, and distributing valuable content tailored to your audience's needs. Incorporate various content types such as blog posts, videos, and infographics while optimizing them for SEO"
        wsd4="Launch your marketing campaigns across selected digital channels. This may include social media platforms, email marketing, and paid advertising. Ensure that your content is scheduled for optimal engagement times"
        wsd5="rack the performance of your campaigns using analytics tools. Evaluate metrics such as traffic, engagement rates, and conversion rates to assess how well you are meeting your goals"
        wsd6="Based on the data collected, make necessary adjustments to improve future campaigns. This could involve tweaking your content strategy, adjusting your target audience, or experimenting with different promotional tactics"
        desc="A digital marketing workflow is a structured process that outlines the steps and tasks required to achieve specific marketing goals. It helps teams manage their projects efficiently, ensuring that all necessary actions are completed in a timely manner. Here's a detailed breakdown of how to create and implement an effective digital marketing workflow."
      />
      
      <ServicesPricingLayout
        wdt1="SEO"
        wdpo1={0}
        wdp1={229}
        wdd1="A perfect plan for small businesses and startups."
        wdt2="Social Media Marketing"
        wdpo2={0}
        wdp2={229}
        wdd2="Best for growing businesses."
        wdt3="Content Marketing"
        wdpo3={0}
        wdp3={229}
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
  )
}

export default Page;