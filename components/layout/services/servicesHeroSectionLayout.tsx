"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useTheme } from "next-themes";

const ServicesHeroSectionLayout = (
    {
        serviceBadgeName,
        serviceSpanName,
        headLineFirst,
        headLineSecond
    }: {
        serviceBadgeName: string,
        serviceSpanName: string,
        headLineFirst: string,
        headLineSecond: string
    }
) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section className="container px-10 mx-auto">
            <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
                <div className="text-center space-y-8">
                    <Badge variant="outline" className="text-sm py-2">
                        <span className="mr-2 text-primary">
                            <Badge>{serviceBadgeName}</Badge>
                        </span>
                        <span>{serviceSpanName}</span>
                    </Badge>

                    <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
                        <h1>
                            {headLineFirst}
                            <div className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                                {headLineSecond}
                            </div>
                            <div className="flex items-center justify-center">
                                <SparklesText text="Web" className={`${theme === "dark" ? "text-white" : "text-[#e9590c]"} text-5xl sm:text-7xl`} />
                                <SparklesText text="Zaura" className="text-primary text-5xl sm:text-7xl" />
                            </div>
                        </h1>
                    </div>

                    <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
                        {`Porro esse facere modi iste, earum praesentium suscipit ab obcaecati vitae ut cumque doloremque maiores labore delectus nesciunt qui quam. Qui, maxime.`}
                    </p>

                    <div className="space-y-4 md:space-y-0 md:space-x-4">
                        <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                            Get Started
                            <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHeroSectionLayout


