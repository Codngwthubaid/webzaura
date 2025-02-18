import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "A mobile-friendly design ensures that websites and applications are easily accessible and user-friendly on smartphones and tablets, enhancing the overall user experience and engagement.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Social proof is the influence of others' actions and opinions on individual decisions, often seen in reviews and testimonials.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Targeted content is a digital advertising strategy focused on delivering ads or content to a specific audience based on their demographics, interests, or online behavior",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Strong visuals capture attention and enhance communication by conveying messages quickly and effectively through compelling images, graphics, and design.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "A clear CTA (Call to Action) prompts users to take specific actions, guiding them through the customer journey with concise and compelling instructions.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "A clear headline grabs attention and conveys the main message succinctly, encouraging readers to engage with the content.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 px-10 mx-auto">
      <SparklesText text="Features" className="mb-4 text-center text-4xl text-primary sm:text-5xl" />
      <TypingAnimation className="text-center text-2xl sm:text-3xl">What Makes Us Different</TypingAnimation>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Innovation. Performance. Affordability. We don&apos;t just build digital solutions—we create experiences that drive success. Explore the features that make Webzaura your ultimate digital partner.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
