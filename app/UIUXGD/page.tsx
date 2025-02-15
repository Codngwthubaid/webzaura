"use client"
import React, { useState, useEffect } from "react";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesPricingLayout from "@/components/layout/services/servicesPricingLayout";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import { useTheme } from "next-themes";

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
        serviceName="UI/UX & Graphic Designs"
        headLineFirst="Designs"
        headLineSecond="That Make a Lasting Impression"
      />
      <ServicesWorkFLowLayout
        wst1="Understand Client Needs"
        wst2="Conduct Research"
        wst3="Sketch and Wireframe"
        wst4="Design the Interface"
        wst5="Gather Feedback"
        wst6="Final Delivery and Evaluation"
        wsd1="Gather information about the client's brand, goals, and target audience through discussions and a creative brief to ensure alignment on project expectations."
        wsd2="Analyze competitors and market trends to inform design decisions, identifying best practices and inspiration for the project."
        wsd3="Create low-fidelity wireframes or sketches to outline the layout and structure of the design, allowing for initial visualization of user interactions."
        wsd4="Develop high-fidelity designs by adding visual elements such as colors, typography, and imagery, ensuring the design aligns with user experience principles."
        wsd5="Present the designs to stakeholders for review and collect feedback to make necessary adjustments, ensuring the design meets user and business needs."
        wsd6="Deliver the final design in the required formats and conduct post-launch evaluations to assess performance and identify areas for improvement."
        desc="UI/UX graphic designing combines User Interface (UI) and User Experience (UX) to create visually appealing and user-friendly digital products. UI focuses on the aesthetic elements, while UX emphasizes overall usability and satisfaction, ensuring seamless interactions for users."
      />

      <ServicesPricingLayout
        wdt1="SEO"
        wdpo1={0}
        wdp1={999}
        wdd1="A perfect plan for small businesses and startups."
        wdt2="Social Media Marketing"
        wdpo2={0}
        wdp2={1999}
        wdd2="Best for growing businesses."
        wdt3="Content Marketing"
        wdpo3={0}
        wdp3={2999}
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
export default Page
