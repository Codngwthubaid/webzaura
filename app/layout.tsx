import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"
import SplashCursor from "@/components/animations/SplashCursor"

export const metadata: Metadata = {
  title: "WebZaura - Web Development and Digital Marketing Agency",
  description: "Landing template for Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
