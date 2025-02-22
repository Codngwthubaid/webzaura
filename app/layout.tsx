import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import SplashCursor from "@/components/animations/SplashCursor"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import WhatsAppIcon from "@/components/layout/sections/whtasappIcon";
import Chatbot from "@/components/Chatbot";


export const metadata: Metadata = {
  title: "WebZaura - Web Development and Digital Marketing Agency",
  description: "Landing template for Agency",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SplashCursor />
          <Chatbot />
          <WhatsAppIcon />
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
