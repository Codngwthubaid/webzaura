import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Contact",
    links: ["Github", "Twitter", "Instagram"],
  },
  {
    title: "Services",
    links: ["Website Development", "Android Development", "Digital Marketing" , "SEO" ],
  },
  {
    title: "Help",
    links: ["Contact Us", "FAQ", "Feedback"],
  },
  {
    title: "Socials",
    links: ["Twitch", "Discord", "Dribbble"],
  },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32 px-10 mx-auto">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Logo Section */}
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Agency</h3>
            </Link>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="font-bold text-lg">{section.title}</h3>
              {section.links.map((link) => (
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
              href="https://github.com/codngwthubaid"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Ubaid
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};