import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

const footercontent = [
  {
    title: "Contact",
    content: ["WhatsApp", "webzaura@gmail.com", "+91-91490-97947", "+91-90685-07572"],
    links: ["", ""]
  },
  {
    title: "Services",
    content: ["Web Development", "Digital Marketing", "Social Media Management", "UI/UX & Graphic Desiging", "AI Chatbot Integration", "Android Development",],
    links: ["https://webzaura.vercel.app/WebDevelopment", "https://webzaura.vercel.app/DigitalMarketing", "https://webzaura.vercel.app/SocialMediaManagement", "https://webzaura.vercel.app/UIUXGD", "https://webzaura.vercel.app/AiChatBot", "https://webzaura.vercel.app/AppDevelopment"]

  },
  {
    title: "Help",
    content: ["Contact Us", "FAQ", "Feedback"],
    links: ["", ""]
  },
  {
    title: "Socials",
    content: ["Instagram", "Facebook", "Twitch", "Discord", "Dribbble"],
    links: ["", ""]
  },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="font-bold text-lg flex items-center">
              <Image src={
                "/LogoImg/logoLight.png"
              }
                width={64}
                height={64}
                alt="logo"
              />
              Web<span className="text-primary">Zaura</span>
            </Link>
          </div>

          {/* Footer content */}
          {footercontent.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{section.title}</h3>
              {section.content.map((link) => (
                <div key={link}>
                  <Link href="#" className="opacity-60 hover:opacity-100">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Designed and developed by
            <Link
              target="_blank"
              href="/"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              WebZaura
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};