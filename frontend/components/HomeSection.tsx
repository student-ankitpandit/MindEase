'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import logo from "@/public/logo.png";
import { Spotlight } from "./ui/spotlight-new";
import { Button } from "./ui/button";


const BACKEND_URL = "http://localhost:8000"

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

const handleLogout = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    })
    if(!res.ok) {
      console.log("Logout failed", res.status);
    }

    window.location.href = "/"; // Redirect to home page after logout
  } catch (e) {
    console.error("An error occurred during logout", e);
  }
}

function HomeSection() {
//   const { setTheme } = useTheme();
  return (
    <>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
          <div className="flex justify-between w-screen px-30">
          <h2 className="text md:text-xl lg:text-2xl font-bold">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="MindEase Logo"
                className="w-13 h-13 inline-block mr-2"
              />
            </Link>
            <Link href={"/"}>MindEase</Link>
          </h2>
            <Button onClick={handleLogout} className="bg-white text-black cursor-pointer ml-auto">Logout</Button>
            <Button onClick={() => window.location.href = 'http://localhost:8000/auth/v1/logout'}>
              Logout
            </Button>
          </div>
        </div>
        <div className="p-4 relative z-10 w-full text-center ">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-snug py-2">
            {/* We care about your mental health. */}
            A Platform where you can feel free of mind.
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            AI mental wellness companion providing confidential support for Indian youth through empathetic conversations, personalized coping strategies, and resource guidance. Breaking mental health stigma by offering accessible, culturally-sensitive, private support that empowers students to seek help.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <Link href={"/chat"}>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-black text-white dark:text-white flex items-center space-x-2 cursor-pointer justify-center"
              >
                Chat with AI
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
