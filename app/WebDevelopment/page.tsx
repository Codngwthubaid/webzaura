"use client"
import React, { useState, useEffect } from "react";

import { FooterSection } from "@/components/layout/sections/footer";
import { ContactSection } from "@/components/layout/sections/contact";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServicesHeroSectionLayout from "@/components/layout/services/servicesHeroSectionLayout";
import ServicesWorkFLowLayout from "@/components/layout/services/servicesWorkFLowLayout";
import ServicesTechStackLayout from "@/components/layout/services/servicesTechStackLayout";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const webDevelopmentPlans = [
    {
      title: "Basic",
      popular: 0,
      price: 179,
      description: "A perfect plan for small businesses and startups.",
      buttonText: "Buy Now",
      benefitList: [
        "3 team members",
        "5 GB storage",
        "Upto 5 Pages",
        "Community support",
        "Basic SEO",
      ],
    },
    {
      title: "Enterprise",
      popular: 1,
      price: 299,
      description: "Best for growing businesses.",
      buttonText: "Buy Now",
      benefitList: [
        "6 team members",
        "15 GB storage",
        "Upto 10 Pages",
        "Priority support",
        "Advanced SEO",
      ],
    },
    {
      title: "Advanced",
      popular: 0,
      price: 599,
      description: "A perfect plan for small businesses and startups.",
      buttonText: "Buy Now",
      benefitList: [
        "3 team members",
        "5 GB storage",
        "Upto 5 Pages",
        "Community support",
        "Basic SEO",
      ],
    },
  ];
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
      />
      <ServicesTechStackLayout />

      <section className="container py-24 sm:py-32 relative px-10 mx-auto">
        {[{ category: "Web Development", plans: webDevelopmentPlans }].map(({ category, plans }) => (
          <div key={category} className="mt-2">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ea580c]">Pricing</h2>
              <h3 className="text-xl text-muted-foreground pb-4 mb-4">Choose the perfect plan for your needs.</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
                <Card
                  key={title}
                  className={`mb-20 ${popular === 1
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary transition-all hover:lg:scale-[1.1]"
                    : ""}`}
                >
                  <CardHeader>
                    <CardTitle className="pb-2">{title}</CardTitle>
                    <CardDescription className="pb-4">{description}</CardDescription>
                    <div>
                      <span className="text-2xl font-bold">Starts from / </span>
                      <span className="text-3xl font-bold">${price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {benefitList.map((benefit) => (
                        <span key={benefit} className="flex">
                          <Check className="text-primary mr-2" />
                          <h3>{benefit}</h3>
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={popular === 1 ? "default" : "secondary"}
                      className="w-full"
                    >
                      <Link href={"#contact"}>{buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
      <ContactSection />
      <FooterSection />

    </>
  );
};


export default Page;
