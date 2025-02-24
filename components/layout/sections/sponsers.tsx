import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
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
        img: WD
    },
    {
        name: "Digital Marketing",
        img: DM
    },
    {
        name: "UI/UX & Graphic Designing",
        img: UIUXGD
    },
    {
        name: "Social Media Manangement",
        img: SMM
    },
    {
        name: "Ai Chatbot Integration",
        img: AICB
    },
    {
        name: "App Development",
        img: MAD
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
}: {
    img: StaticImageData;
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 h-[250px] cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] ",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-col items-center gap-2">
                <Image className="rounded-md" width="200" height="100" alt="" src={img} />
                    <figcaption className="text-sm font-medium dark:text-white border">
                        {name}
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
