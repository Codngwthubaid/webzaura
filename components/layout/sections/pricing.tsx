"use client";
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

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32 relative px-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Pricing</h2>
      {[
        { category: "Web Development", plans: webDevelopmentPlans },
        { category: "Digital Marketing", plans: digitalMarketingPlans },
        { category: "Social Media Management", plans: socialMediaPlans},
        { category: "UI/UX & Graphic Design", plans: uiuxgdPlans },
        { category: "AI Chatbot Integration", plans: aiChatbotPlans },
        { category: "App Development", plans: appDevelopmentPlans },

      ].map(({ category, plans }) => (
        <div key={category} className="mt-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{category}</h2>
          <h3 className="text-xl text-muted-foreground pb-4 mb-4">Choose the perfect plan for your needs.</h3>
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
};
