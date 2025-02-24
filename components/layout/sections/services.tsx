"use client";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import type { StaticImageData } from "next/image";
import forReadme from "@/public/assets/forReadme.png"
import { SparklesText } from "@/components/magicui/sparkles-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useTheme } from "next-themes";
import Link from "next/link";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  url: string;
  light: string;
  dark: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Website Development",
    description:
      "Future-Ready Websites, Built to Perform. At Webzaura, we design high-speed, user-friendly, and scalable websites that elevate your brand and drive results.",
    pro: 0,
    url: "/WebDevelopment",
    light: "assets/lwd.mp4",
    dark: "assets/dwd.mp4",
  },
  {
    title: "Digital Marketing",
    description:
      "Smart Marketing, Real Results. At Webzaura, we craft AI-powered, data-driven campaigns that boost engagement, maximize ROI, and keep your brand ahead.",
    pro: 0,
    url: "/DigitalMarketing",
    light: "assets/ldm.mp4",
    dark: "assets/ldm.mp4",
  },
  {
    title: "Social Media Management",
    description:
      "Elevate Your Brand Online. A social media management agency crafts tailored strategies, creates engaging content, manages interactions, and runs targeted ads to boost growth and engagement.",
    pro: 0,
    url: "/SocialMediaManagement",
    light: "assets/lsmm.mp4",
    dark: "assets/lsmm.mp4",
  },
  {
    title: "UI/UX & Graphic Design",
    description: "Designs That Engage & Convert. At Webzaura, we craft sleek, modern UI/UX designs for seamless navigation, intuitive interactions, and a memorable digital experience.",
    pro: 0,
    url: "/UIUXGD",
    light: "assets/luiux.mp4",
    dark: "assets/luiux.mp4",
  },
  {
    title: "AI Chatbot Integration",
    description: "AI Chatbots: Smart, Seamless, Efficient. Engage customers 24/7 with intelligent chatbots that automate queries, enhance engagement, and drive conversions with human-like interactions.",
    pro: 1,
    url: "/AiChatBot",
    light: "assets/lai.mp4",
    dark: "assets/lai.mp4",
  },
  {
    title: "App Development",
    description: "Apps Users Love, Built to Perform. We create fast, intuitive, and high-performance mobile apps for iOS and Android, turning ideas into seamless digital experiences.",
    pro: 1,
    url: "/AppDevelopment",
    light: "assets/lad.mp4",
    dark: "assets/lad.mp4",
  },
];

export function LensDemo() {
  const { theme } = useTheme();
  const [hovering, setHovering] = useState(false);

  return (
    <section id="services" className="container px-10 mx-auto">
      <SparklesText
        text="Services"
        className="text-4xl sm:text-5xl mb-4 text-center text-primary"
      />
      <TypingAnimation className="text-center text-2xl sm:text-3xl">
        Grow Your Business
      </TypingAnimation>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className={`w-full relative rounded-lg border shadow-lg overflow-hidden max-w-md mx-auto p-8 my-10 ${theme === "dark" ? "bg-[#0c0a09]" : "bg-white"}`}
          >
            <div className="relative z-10">
              <Lens hovering={hovering} setHovering={setHovering}>
                {/* <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="rounded-2xl"
                /> */}
                <video
                  src={service.dark}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hidden dark:block"
                />

                <video
                  src={service.light}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="dark:hidden"
                />
              </Lens>
              <motion.div
                animate={{
                  filter: hovering ? "blur(2px)" : "blur(0px)",
                }}
                className={`py-4 relative z-20 rounded-2xl`}
              >
                <Link className={`text-2xl text-left font-bold ${theme === "dark" ? "text-white hover:text-[#e9590c]" : "text-black hover:text-[#e9590c]"}`} href={service.url}>{service.title}</Link>
                <p className={`text-left mt-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                  {service.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

