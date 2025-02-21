"use client";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import Link from "next/link";



enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  url: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Website Development",
    description:
      "Future-Ready Websites, Built to Perform. At Webzaura, we design high-speed, user-friendly, and scalable websites that elevate your brand and drive results.",
    pro: 0,
    url: "/WebDevelopment",
  },
  {
    title: "Digital Marketing",
    description:
"Smart Marketing, Real Results. At Webzaura, we craft AI-powered, data-driven campaigns that boost engagement, maximize ROI, and keep your brand ahead.",
    pro: 0,
    url: "/DigitalMarketing",
  },
  {
    title: "Social Media Management",
    description:
"Elevate Your Brand Online. A social media management agency crafts tailored strategies, creates engaging content, manages interactions, and runs targeted ads to boost growth and engagement.",
    pro: 0,
    url: "/SocialMediaManagement",
  },
  {
    title: "UI/UX & Graphic Design",
    description: "Designs That Engage & Convert. At Webzaura, we craft sleek, modern UI/UX designs for seamless navigation, intuitive interactions, and a memorable digital experience.",
    pro: 0,
    url: "/UIUXGD",
  },
  {
    title: "AI Chatbot Integration",
    description: "AI Chatbots: Smart, Seamless, Efficient. Engage customers 24/7 with intelligent chatbots that automate queries, enhance engagement, and drive conversions with human-like interactions.",
    pro: 1,
    url: "/AiChatBot",
  },
  {
    title: "App Development",
    description: "Apps Users Love, Built to Perform. We create fast, intuitive, and high-performance mobile apps for iOS and Android, turning ideas into seamless digital experiences.",
    pro: 1,
    url: "/AppDevelopment",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 px-10 mx-auto">
      <SparklesText text="Services" className="text-4xl sm:text-5xl mb-4 text-center text-primary" />
       <TypingAnimation className="text-center text-2xl sm:text-3xl">Grow Your Business</TypingAnimation>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-3 gap-4 w-full mx-auto">
        {serviceList.map(({ title, description, pro, url }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader >
              <div className="flex items-center hover:text-primary">
                <CardTitle>
                  <Link href={url}>{title}</Link>
                </CardTitle>
                <Dialog>
                  <DialogContent className="w-80 sm:w-auto">
                    <DialogHeader>
                      <DialogTitle>{title}</DialogTitle>
                      <DialogDescription>
                        {description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
