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
        serviceBadgeName="App"
        serviceSpanName="Development"
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
        wsd1="Great apps start with great ideas, and we specialize in turning your vision into something tangible. Through deep research and brainstorming, we identify the right problem to solve and ensure there’s a real market for your solution. This is where innovation meets strategy."
        wsd2="With a validated idea, we map out the full journey. Our team takes your vision and creates a detailed blueprint that outlines the app’s functionality, features, and user experience. We turn complex ideas into clear, actionable plans—laying the foundation for a seamless development process."
        wsd3="Design is everything. We craft user experiences that are not only intuitive and easy to navigate but also visually stunning. Our design team ensures that every touchpoint of your app feels natural, delightful, and aligned with your brand—creating an experience users won’t forget."
        wsd4="This is where the magic happens. Our skilled developers bring your app to life with clean, scalable code. We use the latest technologies to create apps that are fast, secure, and efficient—ensuring a smooth experience on every device and platform."
        wsd5="Before your app goes live, we put it through its paces. Rigorous testing ensures everything functions perfectly, from performance to security. We test for bugs, glitches, and any issues that could affect the user experience—making sure your app is flawless before launch."
        wsd6="Launching your app is just the beginning. We handle the deployment process, ensuring a smooth app store launch. But we don’t stop there. We provide ongoing maintenance, updates, and optimizations to keep your app performing at its best and evolving with your business needs."
        desc="Bringing an app idea to life is an exciting journey, and we’re here to guide you every step of the way. From the first spark of inspiration to a fully-functioning product, we build apps that are designed to engage, perform, and grow with your business."
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