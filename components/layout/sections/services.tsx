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
      "🚀 Future-Ready Websites Designed to Perform. Your website is more than just a platform— It's your brand's digital identity. At Webzaura, we craft high-speed, user-friendly, and scalable websites that deliver seamless experiences across all devices. From custom business websites to eCommerce platforms, we ensure your site stands out and drives results.",
    pro: 0,
    url: "/WebDevelopment",
  },
  {
    title: "Digital Marketing",
    description:
      "📈 Data-Driven Strategies That Deliver Results. We go beyond traditional marketing. At Webzaura, we craft AI-powered, data-driven campaigns that connect with the right audience, increase engagement, and maximize ROI. From SEO and social media marketing to paid ads and content strategy, we help your brand stay ahead in the digital world.",
    pro: 0,
    url: "/DigitalMarketing",
  },
  {
    title: "Social Media Management",
    description:
      "🌟A social media management agency boosts a brand's online presence through tailored strategies and engaging content. They create eye-catching posts, manage community interactions, and run targeted ad campaigns, all while monitoring performance for continuous improvement. By adapting to industry trends, they help brands connect with their audience, driving engagement and growth.",
    pro: 0,
    url: "/SocialMediaManagement",
  },
  {
    title: "UI/UX & Graphic Design",
    description: "🎨 Designs That Feel as Good as They Look. Your digital success starts with an exceptional user experience. At Webzaura, we create sleek, modern, and user-friendly UI/UX designs that keep visitors engaged and drive conversions. Every pixel is carefully placed to ensure effortless navigation, intuitive interactions, and a memorable digital experience.",
    pro: 0,
    url: "/UIUXGD",
  },
  {
    title: "AI Chatbot Integration",
    description: "🤖 Smart Conversations, Seamless Interactions Engage your customers 24/7 with intelligent AI chatbots that automate responses, handle customer queries, and provide real-time assistance. Our chatbots are designed to enhance engagement, improve efficiency, and boost conversions—all while delivering a human-like interaction.",
    pro: 1,
    url: "/AiChatBot",
  },
  {
    title: "App Development",
    description: "📱 Building Apps That Users Love. A great app is more than just functional—it's an experience. Our mobile app development services bring speed, efficiency, and creativity together to build intuitive, high-performance applications for iOS and Android. Whether it's a business app, an eCommerce solution, or a custom-built application, we turn ideas into seamless mobile experiences.",
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
