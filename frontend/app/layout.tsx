import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youth Mental Wellness",
  description: "A platform for youth mental health awareness and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased home-shell relative overflow-x-hidden text-white`}>
        {/* Dynamic Global Background Orbs */}
        <div className="home-orb home-orb-left fixed" />
        <div className="home-orb home-orb-right fixed" />
        
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
          </ThemeProvider> */}
        
      </body>
    </html>
  );
}
