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
        wsd1="Clearly identify your business needs and what you want the chatbot to achieve, such as improving customer service or cutting down response times"
        wsd2="Choose the right AI chatbot platform, considering pre-programmed options or customizable solutions"
        wsd3="Design the chatbot conversation using a chatbot editor, creating building blocks by dragging and dropping them"
        wsd4="Edit the chatbot profile with a welcome message and customize the bot's actions based on whether the visitor is new, returning, or engaging with all visitors"
        wsd5="Evaluate whether everything is functioning appropriately by testing it out, and rectify the sequence if modifications are necessary"
        wsd6="Train the bot by analyzing conversations and identifying frequently raised queries to 'nourish' the NLP engine, enabling the chatbot to recognize comparable questions in the future"
        desc="Engage your customers 24/7 with intelligent AI chatbots that automate responses, handle customer queries, and provide real-time assistance. Our chatbots are designed to enhance engagement, improve efficiency, and boost conversions—all while delivering a human-like interaction."
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
