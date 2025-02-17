"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";
import TitledImg from "@/components/animations/titledImg";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    containerHeight: "500px",
    containerWidth: "1000px",
    imageHeight: "500px",
    imageWidth: "1000px",
  });

  // Function to update dimensions based on screen size
  const updateDimensions = (): void => {
    if (typeof window === "undefined") return;

    if (window.innerWidth < 640) {
      setDimensions({
        containerHeight: "300px",
        containerWidth: "300px",
        imageHeight: "300px",
        imageWidth: "300px",
      });
    } else if (window.innerWidth < 768) {
      setDimensions({
        containerHeight: "400px",
        containerWidth: "400px",
        imageHeight: "400px",
        imageWidth: "400px",
      });
    } else if (window.innerWidth < 1024) {
      setDimensions({
        containerHeight: "500px",
        containerWidth: "500px",
        imageHeight: "500px",
        imageWidth: "500px",
      });
    } else {
      setDimensions({
        containerHeight: "600px",
        containerWidth: "600px",
        imageHeight: "600px",
        imageWidth: "600px",
      });
    }
  };

  useEffect(() => {
    setMounted(true);
    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Render nothing until the component mounts
  if (!mounted) {
    return null;
  }

  return (
    <section className="container w-full px-10 mx-auto">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design your web right now! </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-2xl md:text-6xl font-bold">
            <h1>
              Transform your ideas to digital
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                perfection with
              </span>
              <SparklesText text="WebZaura" className="text-primary text-5xl sm:text-7xl" />
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Porro esse facere modi iste, earum praesentium suscipit ab obcaecati vitae ut cumque doloremque maiores labore delectus nesciunt qui quam. Qui, maxime.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="#pricing" passHref>
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          {/* Render TitledImg only after mounting */}
          {mounted && (
            <TitledImg
              imageSrc={
                theme === "light"
                  ? "/hero-image-light.png"
                  : "/hero-image-dark.png"
              }
              altText="WebZaura - Web Agency"
              captionText="WebZaura - Web Agency"
              containerHeight={dimensions.containerHeight}
              containerWidth={dimensions.containerWidth}
              imageHeight={dimensions.imageHeight}
              imageWidth={dimensions.imageWidth}
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={true}
              showTooltip={true}
              displayOverlayContent={true}
            />
          )}

          <div suppressHydrationWarning={true} className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};