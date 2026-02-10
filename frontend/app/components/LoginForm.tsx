"use client";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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
import { signIn } from "next-auth/react";
import { projectCompilationEventsSubscribe } from "next/dist/build/swc/generated-native";

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
      console.log("Response", data);

      if (!res.ok) {
        console.log("Login failed", data);
        setErrors({
          submit: data.message || "Login failed. Please try again.",
        });
        return;
      }

      // Store token in localStorage as backup (since we're also setting it as cookie)
      // if(data.token) {
      //   localStorage.setItem("authToken", data.token)
      // }

      // console.log("Success, redirecting to the protected route")
      console.log("Login successful, redirecting to the protected route");
      setTimeout(() => router.push("/chat"), 500);
    } catch (e) {
      console.log(e);
      console.error("Oops, Login failed", e);
      setErrors({
        submit: "Network error. Please try again.",
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
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
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

// "use client"

// import React, { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const BACKEND_URL = "http://localhost:8000"

// export default function LoginPage() {

//     const router = useRouter();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [loading, setLoading] = useState(false)

//     const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
//         e.preventDefault()
//         setLoading(true)

//         // console.log('Sending data:', email, password);

//         try {
//           const res = await fetch(`${BACKEND_URL}/auth/login`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify({email, password})
//           })

//           const data = await res.json();
//           console.log("Response", data);

//           if(!res.ok) {
//             console.log("Oops, Login failed", data)
//             setTimeout(() => router.push('/'), 1000);
//           }

//           // console.log(`Logged In as ${email}`)
//           //<p>Logged In as <strong>{email}</strong></p>
//         } catch (e) {
//           console.log(e)
//           console.error("Login failed", e)
//         }
//         finally{
//           setLoading(false)
//         }
//     }

//     return (
//       <div>
//         <form action="/login" className="flex flex-col items-center" onSubmit={handleSubmit}>
//           <main className="min-h-full w-full flex items-center justify-center p-4">
//           <Card className="w-full max-w-sm">
//           <CardHeader>
//             <CardTitle>Login to your account</CardTitle>
//             <CardDescription>
//               Enter your email below to login to your account
//             </CardDescription>
//             <CardAction>
//             </CardAction>
//           </CardHeader>
//           <CardContent>
//             <form>
//               <div className="flex flex-col gap-6">
//                 <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="m@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <div className="flex items-center">
//                     <Label htmlFor="password">Password</Label>
//                     <a
//                       href="#"
//                       className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                     >
//                       Forgot your password?
//                     </a>
//                   </div>
//                   <Input id="password" type="password" required/>
//                 </div>
//               </div>
//             </form>
//           </CardContent>
//           <CardFooter className="flex-col gap-2">
//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//             <Button variant="outline" className="w-full">
//               Login with Google
//             </Button>
//           </CardFooter>
//         </Card>
//       </main>
//         </form>
//       </div>

// <main className="flex flex-col w-full h-screen items-center justify-center">
//   <h1 className="text-2xl font-bold mb-6">Welcome again!</h1>
//   <div>
//     <form className="flex flex-col items-center" onSubmit={handleSubmit}>
//       <input type="email"
//         placeholder="Enter your email"
//         className="border-2 p-2 rounded-lg mb-4 w-80 block"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input type="password"
//         placeholder="Enter your password"
//         className="border-2 p-2 rounded-lg mb-4 w-80 block"
//         required
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit"
//         value={loading ? "Signing in..." : "Sign In"}
//         disabled={loading}
//         className="bg-blue-500 text-white p-2 rounded-lg w-80 cursor-pointer hover:bg-blue-600 transition"
//       >
//       </button>
//     </form>
//   </div>
// </main>
//    )
// }
