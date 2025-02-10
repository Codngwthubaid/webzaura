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

const plans = [
  {
    category: "Web Development",
    title: "Basic",
    popular: 0,
    price: 99,
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
    category: "Web Development",
    title: "Enterprise",
    popular: 1,
    price: 199,
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
    category: "Web Development",
    title: "Advanced",
    popular: 0,
    price: 99,
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
    category: "Digital Marketing",
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
    category: "Digital Marketing",
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
    category: "Digital Marketing",
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
  },
  {
    category: "App Development",
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
    category: "App Development",
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
    category: "App Development",
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

export const PricingSection = () => {
  const categories = ["Web Development", "Digital Marketing", , "UI/UX & Graphic Design", "AI Chatbot Integration", "App Development"];

  return (
    <section className="container py-24 sm:py-32 relative px-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">Pricing</h2>

      {categories.map((category) => (
        <div key={category} className="mt-2">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{category}</h2>
          <h3 className="text-xl text-muted-foreground pb-4 mb-4">Choose the perfect plan for your needs.</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans
              .filter((plan) => plan.category === category)
              .map(({ title, popular, price, description, buttonText, benefitList }) => (
                <Card
                  key={title}
                  className={`mb-20 ${popular === 1
                    ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary transition-all hover:lg:scale-[1.1]"
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
                      variant={popular === 1 ? "default" : "secondary"}
                      className="w-full"
                    >
                      <Link href={"#contact"}>
                      {buttonText}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};
