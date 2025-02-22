"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useEffect, useState, useRef } from "react";

export const HeroSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: any) => {
      if (!videoRef.current) return;
      const video = videoRef.current;
      const rect = video.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / rect.height) * 24; 
      const rotateY = -(x / rect.width) * 24;
      video.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full">
      {/* Hero Content Section */}
      <section className="container px-10 mx-auto py-20">
        <div className="grid place-items-center gap-8">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>New</Badge>
              </span>
              <span>Design your web right now!</span>
            </Badge>

            <div className="max-w-screen-md mx-auto text-center text-2xl md:text-6xl font-bold">
              <h1>
                Transform your ideas to digital
                <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  perfection with
                </span>
                <div className="flex items-center justify-center">
                  <SparklesText 
                    text="Web" 
                    className={`${theme === "dark" ? "text-white" : "text-[#e9590c]"} text-5xl sm:text-7xl`} 
                  />
                  <SparklesText 
                    text="Zaura" 
                    className="text-primary text-5xl sm:text-7xl" 
                  />
                </div>
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              We craft digital experiences that ignite passion and elevate your brand's impact. Let us help you redefine your online presence and take your business to new heights!
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
        </div>
      </section>

      {/* Full-Screen Video Section with Tilt Effect */}
      <section className="relative w-full overflow-hidden my-14">
        <div className="relative w-[70%] h-auto mx-auto">
          <video
            ref={videoRef}
            src="/assets/WebZaura.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>
      </section>
    </div>
  );
};