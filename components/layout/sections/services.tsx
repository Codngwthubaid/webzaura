"use client";
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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    pro: 0,
    url: "/WebDevelopment",
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    pro: 0,
    url: "/DigitalMarketing",
  },
  {
    title: "UI/UX & Graphic Design",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 0,
    url: "/UIUXGD",
  },
  {
    title: "AI Chatbot Integration",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 1,
    url: "/AiChatBot",
  },
  {
    title: "App Development",
    description: "Lorem dolor sit amet adipisicing.",
    pro: 1,
    url: "/AppDevelopment",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 px-10 mx-auto">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
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
