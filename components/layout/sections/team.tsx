import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import ubaidImg from "@/public/img/ubaidImg.jpg"
import alamgeerImg from "@/public/img/alamgeerImg.png"
import arshImg from "@/public/img/arshImg.png"
import zubairImg from "@/public/img/zubairImg.jpg"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import { Dot } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";

interface TeamProps {
    imageUrl: StaticImageData;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
    name: string;
    url: string;
}
export const TeamSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl: ubaidImg,
            firstName: "Mohammed",
            lastName: "Ubaid",
            positions: ["Full Stack Developer", "Andriod Developer", "AI Integrator"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/codngwthubaid/",
                },
                {
                    name: "Github",
                    url: "https://github.com/Codngwthubaid",
                },
                {
                    name: "X",
                    url: "https://x.com/codngwthubaid",
                },
            ],
        },
        {
            imageUrl: zubairImg,
            firstName: "Mohammad",
            lastName: "Zubair",
            positions: ["Web Developer", "Digital Marketer", "SEO Expert"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/mohdzubairziy/",
                },
                {
                    name: "Github",
                    url: "https://github.com/Zubairibnyameen",
                },
                {
                    name: "X",
                    url: "https://x.com/zubairibnyameen",
                },
            ],
        },
        {
            imageUrl: arshImg,
            firstName: "Arsh",
            lastName: "Haroon",
            positions: ["UI/UX Designer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "#",
                },
                {
                    name: "Github",
                    url: "#",
                },
            ],
        },
        {
            imageUrl: alamgeerImg,
            firstName: "Alamgeer",
            lastName: "Siwara",
            positions: ["Machine Learning Engineer", "TensorFlow Tinkerer"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "#",
                },
                {
                    name: "Github",
                    url: "#",
                },
            ],
        },
    ];
    const socialIcon = (socialName: string) => {
        switch (socialName) {
            case "LinkedIn":
                return <LinkedInIcon />;
            case "Github":
                return <GithubIcon />;
            case "X":
                return <XIcon />;
        }
    };

    return (
        <section id="team" className="container lg:w-[75%] py-24 sm:py-32 mx-auto px-10">
            <div className="text-center mb-8">
                <SparklesText text="Team" className="mb-4 text-3xl text-center text-primary sm:text-5xl" />
                <TypingAnimation className="text-center text-2xl sm:text-3xl">A team above all</TypingAnimation>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamList.map(
                    (
                        { imageUrl, firstName, lastName, positions, socialNetworks },
                        index
                    ) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                                    />
                                </div>
                                <CardTitle className="py-6 pb-4 px-6">
                                    {firstName}
                                    <span className="text-primary ml-1">{lastName}</span>
                                </CardTitle>
                            </CardHeader>
                            {positions.map((position, index) => (
                                <CardContent
                                    key={index}
                                    className={`pb-0 text-muted-foreground text-sm ${index === positions.length - 1 && "pb-6"
                                        }`}
                                >
                                    <div className="flex items-start justify-start">
                                        <Dot />{position}
                                    </div>
                                </CardContent>
                            ))}

                            <CardFooter className="space-x-4 mt-auto">
                                {socialNetworks.map(({ name, url }, index) => (
                                    <Link
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        className="hover:opacity-80 transition-all"
                                    >
                                        {socialIcon(name)}
                                    </Link>
                                ))}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};
