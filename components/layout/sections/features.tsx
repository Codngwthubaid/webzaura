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
      "We ensure every website and app is fully optimized for mobile, providing a seamless experience across all devices. No matter where your audience is, they’ll enjoy smooth, intuitive navigation.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Great content isn’t just about what you say—it’s about what your audience needs to hear. We craft content that speaks directly to your target market, ensuring it resonates, engages, and drives action. With the right message at the right time, we help your business connect with the people who matter most.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "The right visuals can make all the difference. We create stunning designs that capture attention and tell your brand’s story. Whether it’s a website, app, or social media post, we ensure your visuals not only look great but also drive engagement and make a lasting impression.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Your visitors shouldn’t have to guess what’s next. We design intuitive, bold calls to action that seamlessly guide them towards the next step—whether it's making a purchase, signing up, or reaching out. With our clear CTAs, we create an experience where taking action feels natural, not forced.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "A headline isn’t just text—it’s your first impression. We create precision-driven headlines that immediately communicate value, using data-backed strategies to ensure they resonate with your audience. With the right combination of clarity and relevance, we ensure your message stands out in a crowded digital landscape."
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

                <CardTitle className="hover:text-[#e9590c]">{title}</CardTitle>
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
