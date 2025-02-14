import React from 'react'
import { Button } from "@/components/ui/button";
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

interface ServicesPricingLayoutProps {
  wdt1: string;
  wdpo1: number;
  wdp1: number;
  wdd1: string;
  wdt2: string;
  wdpo2: number;
  wdp2: number;
  wdd2: string;
  wdt3: string;
  wdpo3: number;
  wdp3: number;
  wdd3: string;
  wdbl1_1: string;
  wdbl1_2: string;
  wdbl1_3: string;
  wdbl1_4: string;
  wdbl1_5: string;
  wdbl2_1: string;
  wdbl2_2: string;
  wdbl2_3: string;
  wdbl2_4: string;
  wdbl2_5: string;
  wdbl3_1: string;
  wdbl3_2: string;
  wdbl3_3: string;
  wdbl3_4: string;
  wdbl3_5: string;
}

const servicesPricingLayout = ({
  wdt1,
  wdpo1,
  wdp1,
  wdd1,
  wdt2,
  wdpo2,
  wdp2,
  wdd2,
  wdt3,
  wdpo3,
  wdp3,
  wdd3,
  wdbl1_1,
  wdbl1_2,
  wdbl1_3,
  wdbl1_4,
  wdbl1_5,
  wdbl2_1,
  wdbl2_2,
  wdbl2_3,
  wdbl2_4,
  wdbl2_5,
  wdbl3_1,
  wdbl3_2,
  wdbl3_3,
  wdbl3_4,
  wdbl3_5,
}: ServicesPricingLayoutProps) => {

  const webDevelopmentPlans = [
    {
      title: wdt1,
      popular: wdpo1,
      price: wdp1,
      description: wdd1,
      buttonText: "Buy Now",
      benefitList: [wdbl1_1, wdbl1_2, wdbl1_3, wdbl1_4, wdbl1_5,],
    },
    {
      title: wdt2,
      popular: wdpo2,
      price: wdp2,
      description: wdd2,
      buttonText: "Buy Now",
      benefitList: [wdbl2_1, wdbl2_2, wdbl2_3, wdbl2_4, wdbl2_5,],
    },
    {
      title: wdt3,
      popular: wdpo3,
      price: wdp3,
      description: wdd3,
      buttonText: "Buy Now",
      benefitList: [wdbl3_1, wdbl3_2, wdbl3_3, wdbl3_4, wdbl3_5,],
    },
  ];

  return (
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
  )
}

export default servicesPricingLayout
