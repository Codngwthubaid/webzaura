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
      "Building brand trust involves transparent communication, showcasing social proof through customer reviews, and maintaining consistency in messaging and actions. These strategies foster long-term relationships and enhance customer loyalty.",
  },
  {
    icon: "ChartLine",
    title: "More Leads",
    description:
      "To generate more leads, businesses can enhance visibility through SEO, utilize PPC advertising for targeted reach, and employ lead generation ads on social media. Engaging content, such as videos, can also attract and retain potential customers effectively.",
  },
  {
    icon: "Wallet",
    title: "Higher Conversions",
    description:
      "To achieve higher conversions, focus on optimizing your website by using high-quality images and videos, offering multiple payment options, and creating a sense of urgency to encourage quick action",
  },
  {
    icon: "Sparkle",
    title: "Test Marketing Ideas",
    description:
      "Testing marketing ideas means running small trials to gauge customer reactions, using methods like A/B testing and surveys to refine strategies before a full launch.",
  },
];


export const BenefitSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div className="mx-auto container">
          <SparklesText text="Benefits" className="mb-4 text-primary text-center font-bold text-4xl sm:text-5xl" />
          <TypingAnimation className="text-center text-2xl sm:text-3xl">Your Shortcut to Success</TypingAnimation>
          <p className="text-xl text-center mt-2 text-muted-foreground mb-8">
          We combine creativity with the latest technology to develop powerful websites, engaging apps, and intelligent automation that help businesses thrive. Whether you&apos;re starting from scratch or upgrading your brand, we&apos;re here to transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
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

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
