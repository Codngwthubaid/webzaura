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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ContactForm from "./form";


const uiuxgdPlans = [
  {
    category: "UI/UX & Graphic Design",
    title: "Basic",
    popular: 0,
    price: 34999,
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
    price: 149999,
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
    price: 74999,
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
    price: 17999,
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
    price: 99999,
    description: "Ideal for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "Custom chatbot development",
      "Advanced NLP & ML models",
      "Multi-channel support",
      "24/7 customer support",
      "Integration with CRM systems",
    ]
  },
  {
    category: "AI Chatbot Integration",
    title: "Advanced",
    popular: 0,
    price: 34999,
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
    price: 19999,
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
    price: 99999,
    description: "A perfect plan for growing businesses.",
    buttonText: "Buy Now",
    benefitList: [
      "10 team members",
      "20 GB storage",
      "Upto 20 pages",
      "Priority support",
      "Advanced SEO",
    ],
  },
  {
    title: "Advanced",
    popular: 0,
    price: 54999,
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
    price: 49999,
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
    price: 99999,
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
    price: 149999,
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
    price: 17999,
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
    price: 39999,
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
    price: 29999,
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
    price: 17999,
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
    price: 39999,
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
    price: 34999,
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
        const data = await response.json();

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
    <section id="pricing" className="container py-24 sm:py-32 px-10 mx-auto">
      <SparklesText text="Pricing" className="mb-4 text-4xl sm:text-5xl text-start text-primary" />

      {servicePlans.map(({ category, plans }) => (
        <div key={category} className="mt-10">
          <TypingAnimation className="text-2xl sm:text-3xl">{category}</TypingAnimation>
          <h3 className="text-xl text-muted-foreground pb-4 mb-4">
            Choose the perfect plan for your needs.
          </h3>

          {/* Swiper for Mobile */}
          <div className="block md:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
                <SwiperSlide key={title}>
                  <Card className={`p-6 ${popular ? "border-2 border-primary shadow-lg" : ""}`}>
                    <CardHeader>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
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
                      <Dialog >
                        <DialogTrigger asChild >
                          <Button variant={popular ? "default" : "secondary"} className="w-full">
                            {buttonText}
                          </Button>

                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            {/* form */}
                            <ContactForm />
                          </DialogHeader>
                          <DialogFooter>
                            {/* send btn */}
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid for Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
              <Card
                key={title}
                className={`p-6 ${popular ? "border-2 border-primary shadow-lg" : ""}`}
              >
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
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
                  <Dialog >
                    <DialogTrigger asChild >
                      <Button variant={popular ? "default" : "secondary"} className="w-full">
                        {buttonText}
                      </Button>

                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogTitle>
                        <ContactForm />
                      </DialogTitle>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
