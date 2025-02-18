import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { SparklesText } from "@/components/magicui/sparkles-text";
import WD from "../../../public/ServicesImg/WD.jpg"
import DM from "../../../public/ServicesImg/DM.jpg"
import MAD from "../../../public/ServicesImg/MAD.jpg"
import SMM from "../../../public/ServicesImg/SMM.jpg"
import UIUXGD from "../../../public/ServicesImg/UIUXGD.jpg"
import AICB from "../../../public/ServicesImg/AICB.webp"

const reviews = [
    {
        name: "Web Development",
        body: "Your website isn't just a URL — It's your digital identity. We create high-performing, visually stunning, and fully optimized websites that don't just exist but leave a lasting impression and drive results.",
        img: WD
    },
    {
        name: "Digital Marketing",
        body: "Marketing isn't just about visibility — It's about impact. Our data-driven digital marketing strategies ensure that your brand not only reaches the right audience but converts them into loyal customer.",
        img: DM
    },
    {
        name: "UI/UX & Graphic Designing",
        body: "Design is more than aesthetics — It's about experience. We craft intuitive, visually stunning, and user-friendly designs that captivate, engage, and turn visitors into customers.",
        img: UIUXGD
    },
    {
        name: "Social Media Manangement",
        body: "Every brand tells a story. Our graphic designs ensure yours is bold, beautiful, and unforgettable—whether it's a logo, social media visuals, or complete branding.",
        img: SMM
    },
    {
        name: "Ai Chatbot Integration",
        body: "AI-driven chatbots that do more than just chat—they enhance customer engagement, automate workflows, and create seamless interactions that feel as natural as human conversation",
        img: AICB
    },
    {
        name: "App Development",
        body: "Your business deserves an app that's fast, intuitive, and built to scale. We develop mobile experiences that engage users, boost efficiency, and keep you ahead in a mobile-first world",
        img: MAD
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: any;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 h-[250px] cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] ",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-rowitems-center gap-2">
                <Image className="rounded-md" width="64" height="64" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white ">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
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
                    <ReviewCard key={review.name} {...review}/>
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
