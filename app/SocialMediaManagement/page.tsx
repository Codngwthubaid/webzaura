"use client"
import React, { useState, useEffect } from "react";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesPricingLayout from "@/components/layout/services/servicesPricingLayout";
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
        serviceBadgeName="Social Media"
        serviceSpanName="Management"
        headLineFirst="Social"
        headLineSecond="Expertise at Your Fingertips"
      />

      <ServicesWorkFLowLayout
        wst1="Set Clear Goals"
        wst2="Know Your Audience"
        wst3="Content Planning"
        wst4="Create and Approve Content"
        wst5="Schedule Posts"
        wst6="Monitor and Analyze Performance"
        wsd1="Define specific objectives for your social media efforts, such as increasing brand awareness, driving website traffic, or boosting engagement rates."
        wsd2="Research and identify your target audience's demographics, interests, and preferred platforms to tailor your content effectively."
        wsd3="Develop a content calendar that outlines what to post, when to post it, and on which platforms, ensuring a balanced mix of content types."
        wsd4="Design engaging posts (text, images, videos) and go through an approval process to ensure alignment with brand guidelines before scheduling."
        wsd5="Use scheduling tools to automate the posting process, ensuring that content is published at optimal times for audience engagement."
        wsd6="Track engagement metrics and analyze the effectiveness of your campaigns to identify areas for improvement and adjust strategies accordingly."
        desc="Social media management is the process of creating, scheduling, and analyzing content across social platforms to engage audiences and build brand awareness. It involves strategic planning and community interaction to enhance visibility and support marketing goals."
      />

<ServicesPricingLayout
        wdt1="SEO"
        wdpo1={0}
        wdp1={109}
        wdd1="A perfect plan for small businesses and startups."
        wdt2="Social Media Marketing"
        wdpo2={0}
        wdp2={229}
        wdd2="Best for growing businesses."
        wdt3="Content Marketing"
        wdpo3={0}
        wdp3={449}
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