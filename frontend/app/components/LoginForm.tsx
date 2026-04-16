"use client";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
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

      // Store token in localStorage as backup (since we're also setting it as cookie)
      localStorage.setItem("authToken", data.token)
      console.log(localStorage.getItem('authToken'));
      router.push("/chat");
    } catch (e) {
      // console.log(e);
      console.error("Oops, Login failed", e);
      setErrors({
        submit: "Network error, Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription className="mt-2">
                Enter your email below to login to your account
              </CardDescription>
            </div>
            <Link href="/signup">
              <Button variant="link" className="px-0 cursor-pointer">
                Sign Up
              </Button>
            </Link>
          </div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="something@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link> */}
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>

            {errors.submit && (
              <p className="text-red-500 text-sm text-center mt-4">
                {errors.submit}
              </p>
            )}
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full mt-3 cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </CardFooter>
        </form>

        <div className="w-full max-w-sm">
          <div className="px-6 pb-6 flex flex-col gap-2">
            <a href={`${BACKEND_URL}/auth/google`} className="w-full">
              <button className="w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-md">
                Sign in with Google
              </button>
            </a>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Dont have an account?{" "}
              <Link href="/signup" className="underline hover:text-primary">
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
}