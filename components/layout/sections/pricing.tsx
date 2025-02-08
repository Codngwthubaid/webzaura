"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  category: string;
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    category: "Web Development",
    title: "Basic",
    popular: 0,
    price: 99,
    description: "A perfect plan for small businesses and startups.",
    buttonText: "Get Started",
    benefitList: [
      "3 team members",
      "5 GB storage",
      "Upto 5 pages",
      "Community support",
      "Basic SEO",
    ],
  },
  {
    category: "Web Development",
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Best for growing businesses.",
    buttonText: "Subscribe Now",
    benefitList: [
      "6 team members",
      "15 GB storage",
      "Upto 10 pages",
      "Priority support",
      "Advanced SEO",
    ],
  },
  {
    category: "Web Development",
    title: "Advanced",
    popular: 0,
    price: 99,
    description: "A perfect plan for small businesses and startups.",
    buttonText: "Get Started",
    benefitList: [
      "3 team members",
      "5 GB storage",
      "Upto 5 pages",
      "Community support",
      "Basic SEO",
    ],
  },
  {
    category: "SEO",
    title: "Basic",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Keyword research",
      "On-page SEO",
      "Backlink analysis",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    category: "SEO",
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Keyword research",
      "On-page SEO",
      "Backlink analysis",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    category: "SEO",
    title: "Advanced",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Start Free Trial",
    benefitList: [
      "Keyword research",
      "On-page SEO",
      "Backlink analysis",
      "Basic reporting",
      "Email support",
    ],
  },
  {
    category: "App Development",
    title: "Basic",
    popular: 0,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Contact Us",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
  {
    category: "App Development",
    title: "Enterprise",
    popular: 1,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Contact Us",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
  {
    category: "App Development",
    title: "Advanced",
    popular: 0,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Contact Us",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
];

export const PricingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const filteredPlans = plans.filter((plan) => plan.category === selectedCategory);

  return (
    <section className="container py-24 sm:py-32 relative px-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Pricing</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get unlimited access</h2>
          <h3 className="text-xl text-muted-foreground pb-4">
            Choose the perfect plan for your needs.
          </h3>
        </div>
        
        {/* Category Selector */}
        <div className="relative">
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md cursor-pointer"
          >
            <option>Web Development</option>
            <option>SEO</option>
            <option>App Development</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredPlans.map(({ title, popular, price, description, buttonText, benefitList }) => (
          <Card
            key={title}
            className={`${
              popular === PopularPlan.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>
              <CardDescription className="pb-4">{description}</CardDescription>
              <div>
                <span className="text-3xl font-bold">${price}</span>
                <span className="text-muted-foreground"> /month</span>
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
                variant={popular === PopularPlan.YES ? "default" : "secondary"}
                className="w-full"
              >
                {buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
