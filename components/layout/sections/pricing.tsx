"use client";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
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
import Link from "next/link";
import { useEffect, useState } from "react";

const uiuxgdPlans = [
  {
    category: "UI/UX & Graphic Design",
    title: "Basic",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Wireframing & prototyping",
      "Basic UI design",
      "Logo design",
      "Branding guidelines",
      "Email support",
    ],
  },
  {
    category: "UI/UX & Graphic Design",
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Ideal for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "Advanced UX research",
      "High-fidelity UI design",
      "Custom illustrations",
      "User testing & feedback",
      "Priority support",
    ],
  },
  {
    category: "UI/UX & Graphic Design",
    title: "Advanced",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Comprehensive design system",
      "Interactive prototypes",
      "Motion graphics",
      "Detailed usability reports",
      "Email & chat support",
    ],
  },
];

const aiChatbotPlans = [
  {
    category: "AI Chatbot Integration",
    title: "Basic",
    popular: 0,
    price: 79,
    description: "Ideal for small businesses and startups.",
    buttonText: "Buy Now",
    benefitList: [
      "Pre-built chatbot templates",
      "Basic NLP capabilities",
      "Simple user interactions",
      "Email support",
      "Integration with websites",
    ],
  },
  {
    category: "AI Chatbot Integration",
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Ideal for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "Advanced AI & NLP",
      "Multi-platform support",
      "Custom chatbot flows",
      "Real-time analytics",
      "Priority support",
    ],
  },
  {
    category: "AI Chatbot Integration",
    title: "Advanced",
    popular: 0,
    price: 79,
    description: "Ideal for enterprises requiring automation.",
    buttonText: "Buy Now",
    benefitList: [
      "Conversational AI & ML models",
      "API integrations",
      "Voice-enabled chatbot",
      "Detailed chatbot analytics",
      "24/7 customer support",
    ],
  }
];

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
      "Upto 5 pages",
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
      "Upto 10 pages",
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
      "Upto 5 pages",
      "Community support",
      "Basic SEO",
    ],
  },
];

const appDevelopmentPlans = [
  {
    title: "Basic",
    popular: 0,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Buy Now",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
  {
    title: "Enterprise",
    popular: 1,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Buy Now",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
  {
    title: "Advanced",
    popular: 0,
    price: 299,
    description: "A solid plan for new mobile applications.",
    buttonText: "Buy Now",
    benefitList: [
      "iOS & Android support",
      "API integration",
      "Basic analytics",
      "3-month support",
      "Bug fixes",
    ],
  },
];

const digitalMarketingPlans = [
  {
    title: "Basic",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Social media management",
      "Content marketing",
      "PPC advertising",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Ideal for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "Advanced social media strategy",
      "SEO & content optimization",
      "Paid ad campaigns",
      "In-depth analytics",
      "Priority support",
    ],
  },
  {
    title: "Advanced",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Comprehensive marketing strategy",
      "Influencer marketing",
      "Conversion rate optimization",
      "Detailed performance reports",
      "Email & chat support",
    ],
  },
];

const socialMediaPlans = [
  {
    title: "Basic",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Social media management",
      "Content marketing",
      "PPC advertising",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    title: "Enterprise",
    popular: 1,
    price: 199,
    description: "Ideal for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "Advanced social media strategy",
      "SEO & content optimization",
      "Paid ad campaigns",
      "In-depth analytics",
      "Priority support",
    ],
  },
  {
    title: "Advanced",
    popular: 0,
    price: 79,
    description: "Ideal for individuals and freelancers.",
    buttonText: "Buy Now",
    benefitList: [
      "Comprehensive marketing strategy",
      "Influencer marketing",
      "Conversion rate optimization",
      "Detailed performance reports",
      "Email & chat support",
    ]
  }
];


const servicePlans = [
  { category: "Web Development", plans: webDevelopmentPlans },
  { category: "Digital Marketing", plans: digitalMarketingPlans },
  { category: "Social Media Management", plans: socialMediaPlans },
  { category: "UI/UX & Graphic Design", plans: uiuxgdPlans },
  { category: "AI Chatbot Integration", plans: aiChatbotPlans },
  { category: "App Development", plans: appDevelopmentPlans },
];

export const PricingSection = () => {
  const [currency, setCurrency] = useState("INR");
  const [conversionRate, setConversionRate] = useState(1);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipwhois.app/json/");
        console.log(response)
        const data = await response.json();
        console.log(data)

        if (data.country_code !== "IN") {
          setCurrency("USD");
          setConversionRate(1 / 87);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <section id="pricing" className="container py-24 sm:py-32 relative px-10 mx-auto">
      <SparklesText text="Pricing" className="mb-4 text-4xl sm:text-5xl text-start text-primary" />

      {servicePlans.map(({ category, plans }) => (
        <div key={category} className="mt-10">
          <TypingAnimation className="text-2xl sm:text-3xl">{category}</TypingAnimation>
          <h3 className="text-xl text-muted-foreground pb-4 mb-4">
            Choose the perfect plan for your needs.
          </h3>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4  scrollbar-hide">
            {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
              <Card
                key={title}
                className={`min-w-[80%] sm:min-w-[60%] md:w-full flex-shrink-0 md:flex-shrink ${popular === 1
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary transition-all"
                    : ""
                  }`}
              >
                <CardHeader>
                  <CardTitle className="pb-2">{title}</CardTitle>
                  <CardDescription className="pb-4">{description}</CardDescription>
                  <div>
                    <span className="text-2xl font-bold">Starts from / </span>
                    <span className="text-3xl font-bold">
                      {currency} {Math.round(price * conversionRate)}
                    </span>
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
                  <Link href={"#contact"} passHref>
                    <Button variant={popular === 1 ? "default" : "secondary"} className="w-full">
                      {buttonText}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

        </div>
      ))}
    </section>
  );
};
