"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Separator } from "../components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#testimonials", label: "Testimonials" },
  { href: "/TeamMembers", label: "Team" },
  { href: "#contact", label: "Contact" },
  { href: "#faq", label: "FAQ" },
];

const servicesList: RouteProps[] = [
  { href: "/WebDevelopment", label: "Web Development" },
  { href: "/DigitalMarketing", label: "Digital Marketing" },
  { href: "/UIUXGD", label: "Social Media Marketing" }, 
  { href: "/SocialMediaManagement", label: "UI/UX & Graphic Design" },
  { href: "/AiChatBot", label: "Ai ChatBot Integration" },
  { href: "/AppDevelopment", label: "App Development" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src="/LogoImg/logoLight.png"
          width={64}
          height={64}
          alt="logo"
        />
        Web<span className="text-primary">Zaura</span>
      </Link>

      {/* Mobile */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer lg:hidden" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="font-bold text-lg flex items-center">
                    <Image
                      src="/LogoImg/logoLight.png"
                      width={64}
                      height={64}
                      alt="logo"
                    />
                    Web<span className="text-primary">Zaura</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold text-base ml-4">
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-y-3">
                      {servicesList.map(({ href, label }) => (
                        <ul key={href}>
                          <li>
                            <Link
                              href={href}
                              className="ml-4 cursor-pointer lg:hidden hover:bg-primary/40 rounded-md p-2"
                              onClick={() => setIsOpen(false)}
                            >
                              {label}
                            </Link>
                          </li>
                        </ul>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">Services</DropdownMenuTrigger>
              <DropdownMenuContent>
                {servicesList.map(({ href, label }) => (
                  <DropdownMenuItem key={href}>
                    <Link href={href}>{label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>

          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center">
        <ToggleTheme />
      </div>
    </header>
  );
};