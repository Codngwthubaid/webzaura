"use client"
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Build Brand Trust",
    description:
      "Building trust is the foundation of any successful business. With our tailored web and app development solutions, sleek UI/UX design, and seamless social media management, we create a strong, professional online presence that resonates with your target audience. Our strategies ensure that your brand stands out for its reliability, transparency, and value, establishing long-term customer loyalty and trust.",
  },
  {
    icon: "ChartLine",
    title: "More Leads",
    description:
      "Generating high-quality leads is essential to growing your business. Our digital marketing expertise leverages data-driven strategies to ensure your business is visible to the right audience. By optimizing your website, launching targeted campaigns, and integrating AI chatbots that engage potential customers 24/7, we drive more relevant traffic and turn site visitors into valuable leads",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "Turning visitors into paying customers is where the magic happens. Through detailed UX/UI design and optimized digital marketing, we create user journeys that are intuitive, engaging, and conversion-focused. Our integrated strategies, from persuasive call-to-actions to personalized experiences, ensure that your visitors are not just browsing—they're converting into loyal customers",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Curious about how a new marketing strategy or product will perform? We help you test ideas with minimal risk through data-driven A/B testing and market insights. Whether it's testing a new website feature, app functionality, or social media campaign, we provide actionable feedback that lets you adjust and perfect your approach before going full scale",
  },
];


export const BenefitSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="flex flex-col">
        <div className="mx-auto container">
          <SparklesText text="Benefits" className="mb-4 text-primary text-center font-bold text-4xl sm:text-5xl" />
          <TypingAnimation className="text-center text-2xl sm:text-3xl mb-4 sm:mb-0">Your Shortcut to Success</TypingAnimation>
          <p className="text-xl text-center mt-2 text-muted-foreground mb-8 hidden sm:block">
          At WebZaura, we believe in your business potential, and we&apos;rehere to help you unlock it. Our approach is simple: we focus on what truly matters to you—growing your brand, attracting the right people, and turning them into loyal customers. Let&apos;s take a look at how we can make a real impact on your business with these key benefits.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="shadow-md bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground hidden sm:block">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
