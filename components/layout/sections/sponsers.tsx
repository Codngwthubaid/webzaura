import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { SparklesText } from "@/components/magicui/sparkles-text";
import Link from "next/link";



const reviews = [
    {
        href: "/WebDevelopment",
        name: "Web Development",
        light: "assets/lwd.mp4",
        dark: "assets/dwd.mp4",
    },
    {
        href: "/DigitalMarketing",
        name: "Digital Marketing",
        light: "assets/ldm.mp4",
        dark: "assets/ldm.mp4",
    },
    {
        href: "/SocialMediaManagement",
        name: "Social Media Management",
        light: "assets/lsmm.mp4",
        dark: "assets/lsmm.mp4",
    },
    {
        href: "/UIUXGD",
        name: "UI/UX & Graphic Designing",
        light: "assets/luiux.mp4",
        dark: "assets/luiux.mp4",
    },
    {
        href: "/AiChatBot",
        name: "AI ChatBot Integration",
        light: "assets/lai.mp4",
        dark: "assets/lai.mp4",
    },
    {
        href: "/AppDevelopment",
        name: "App Development",
        light: "assets/lad.mp4",
        dark: "assets/lad.mp4",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    href,
    light,
    dark,
    name,
}: {
    href: string;
    name: string;
    light: string;
    dark: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 h-[250px] cursor-pointer overflow-hidden rounded-xl border",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] ",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-col items-center gap-2">
                <video
                    src={dark}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden dark:block"
                />

                <video
                    src={light}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="dark:hidden"
                />

                <figcaption className="text-sm font-medium absolute top-4 z-10 text-[#e9590c] border p-3 rounded-md">
                    <Link href={href}>{name}</Link>
                </figcaption>
            </div>
        </figure>
    );
};

export const MarqueeDemo = () => {
    return (
        <div className="mx-auto container relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background px-10">
            <SparklesText text="What we serve" className="text-4xl mb-4 text-primary sm:text-5xl" />
            <p className="text-xl text-center mt-2 text-muted-foreground mb-8">
                From powerful websites and mobile apps to AI-driven chatbots, high-impact branding, and result-oriented digital marketing, Webzaura delivers smart, scalable, and stunning solutions—all at a price that makes sense.</p>
            <Marquee pauseOnHover className="[--duration:20s] ">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] ">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
