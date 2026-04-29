"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BACKEND_URL } from "@/app/lib/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    submit?: string;
  }>({}); //by default it's empty

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const res = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // This allows cookies to be sent/received
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok && !data.success) {
        console.log("Login failed", data);
        setErrors({
          submit: data.message || "Login failed. Please try again.",
        });
        return;
      }

      console.log("Login successful!");

      // Save token to both localStorage and a cookie for middleware to read
      localStorage.setItem("token", data.token);
      document.cookie = `token=${data.token}; Path=/; SameSite=Lax; Max-Age=86400`;
      router.push("/dashboard");
    } catch (e) {
      // console.log(e);
      console.error("Oops, Login failed", e);
      setErrors({
        submit: "Network error, Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full flex items-center justify-center p-4 py-20">
      <Card className="relative z-10 w-full max-w-sm glass-panel bg-[#0d1a2a]/70 backdrop-blur-xl border-white/10 text-white shadow-2xl rounded-3xl overflow-hidden">
        <CardHeader className="pb-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <CardTitle className="text-2xl font-extrabold tracking-tight">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-white/60">
              Enter your email below to login
            </CardDescription>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white/80 font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="something@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500 rounded-xl"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="text-white/80 font-semibold"
                  >
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-teal-500 rounded-xl"
                />
                {errors.password && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            {errors.submit && (
              <p className="text-red-400 text-xs font-medium text-center mt-4 bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                {errors.submit}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex-col gap-4 pb-8 pt-4">
            <Button
              type="submit"
              className="w-full bg-teal-500 text-neutral-950 hover:bg-teal-400 font-bold rounded-xl h-11 transition-all hover:scale-[1.02]"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </Button>

            <div className="relative w-full text-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0d1a2a] px-2 text-white/50">
                  Or continue with
                </span>
              </div>
            </div>

            <a href={`${BACKEND_URL}/auth/google`} className="w-full">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-white/5 border-white/10 hover:bg-white/10 text-white rounded-xl h-11 transition-all"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
            </a>

            <p className="text-center text-sm text-white/60 mt-2">
              Do not have an account?{" "}
              <Link
                href="/signup"
                className="text-teal-400 hover:text-teal-300 font-semibold underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
