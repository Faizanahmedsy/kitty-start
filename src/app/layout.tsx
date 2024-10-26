import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Poppins } from "next/font/google";
import "./custom.css";
import "./globals.css";
import { FooterSection, NavbarSection, Providers } from "@/components";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kitty Start",
  description: "Generated by create next app",
};

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased light",
          fontSans.variable,
          poppins.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
