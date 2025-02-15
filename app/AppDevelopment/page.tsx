"use client"
import React, { useState, useEffect } from "react";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesPricingLayout from "@/components/layout/services/servicesPricingLayout";

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
        serviceName="App Development"
        headLineFirst='Unlocking'
        headLineSecond='Digital Doors'
      />

      <ServicesWorkFLowLayout
        wst1="Idea Generation and Research"
        wst2="Planning and Conceptualization"
        wst3="UI/UX Design"
        wst4="Development"
        wst5="Testing"
        wst6="Deployment and Maintenance"
        wsd1="Define the app's purpose, analyze market needs, and identify target users to generate feasible ideas."
        wsd2="Outline the app's features, create user personas, and develop a project roadmap with timelines and milestones."
        wsd3="Create wireframes and prototypes to design the app's interface and user experience, ensuring intuitive navigation and visual appeal."
        wsd4="Code the app's frontend and backend, integrating all necessary functionalities and ensuring compatibility across devices."
        wsd5="Conduct thorough testing to identify and fix bugs, ensuring the app functions correctly and provides a seamless user experience."
        wsd6="Launch the app on relevant platforms, followed by ongoing maintenance and updates based on user feedback and performance metrics."
        desc=" A structured approach to App development is the process of creating software applications for mobile devices, involving stages such as ideation, design, coding, testing, and deployment. It focuses on delivering user-friendly and functional apps that meet specific needs and provide a seamless experience across platforms."
      />

      <ServicesPricingLayout 
              wdt1="Basic"
              wdpo1={0}
              wdp1={1199}
              wdd1="A perfect plan for small businesses and startups."
              wdt2="Enterprise"
              wdpo2={0}
              wdp2={2999}
              wdd2="Best for growing businesses."
              wdt3="Advanced"
              wdpo3={0}
              wdp3={5999}
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