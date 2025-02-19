"use client"
import React, { useState, useEffect } from "react";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import SectionWorkFlowLayout from "@/components/layout/services/servicesWorkFLowLayout";
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
        serviceBadgeName="AI Chatbot"
        serviceSpanName="Integration"
        headLineFirst='Building'
        headLineSecond='Intelligent Conversations'
      />

      <SectionWorkFlowLayout
        wst1="Define Objectives"
        wst2="Select the Chatbot"
        wst3="Design Conversation Flow"
        wst4="Customize Actions"
        wst5="Test the Chatbot"
        wst6="Train and Optimize"
        wsd1="Before we dive into development, we start with the 'why?' What do you want your chatbot to achieve? Whether it’s increasing customer engagement, improving sales, or providing 24/7 support, we’ll help you define clear goals to ensure your chatbot delivers value right from the start."
        wsd2="Choosing the right platform is key to a chatbot’s success. We’ll help you pick a solution that matches your needs, whether you’re looking for a simple FAQ bot or a more sophisticated AI assistant. From rule-based bots to conversational AI, we’ve got you covered."
        wsd3="A chatbot’s true value comes from creating smooth, natural conversations. We’ll design a conversation flow that guides users seamlessly toward their goals—whether that’s gathering info, solving problems, or making purchases—ensuring your chatbot feels intuitive and engaging."
        wsd4="Every business is unique, and so is every chatbot we build. We customize actions and responses to match your brand’s voice and tone. Whether it’s booking appointments, processing orders, or providing customer support, we ensure your chatbot works as an extension of your team."
        wsd5="Before we go live, we rigorously test the chatbot to iron out any issues. From error handling to conversation consistency, we make sure everything works as it should. Testing is an essential part of the process to ensure your chatbot performs flawlessly under real-world conditions."
        wsd6="AI chatbots need continuous learning to stay relevant. We’ll train your bot on real customer interactions, constantly improving its accuracy and efficiency. And once it’s live, we don’t stop—we optimize its performance regularly, ensuring it adapts to evolving customer needs and new trends."
        desc="Creating a high-performing AI chatbot isn’t just about programming—it’s about crafting a solution that feels natural and drives results. Here’s our step-by-step approach to building the perfect AI-powered chatbot for your business:"
      />

      <ServicesPricingLayout
        wdt1="Basic"
        wdpo1={0}
        wdp1={49}
        wdd1="A perfect plan for small businesses and startups."
        wdt2="Enterprise"
        wdpo2={0}
        wdp2={99}
        wdd2="Best for growing businesses."
        wdt3="Advanced"
        wdpo3={0}
        wdp3={199}
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
