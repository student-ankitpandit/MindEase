"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { apiFetch, getToken } from "@/app/lib/api";

export default function AuthButtons() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = getToken();
        if (!token) {
          setLoading(false);
          return;
        }

        const data = await apiFetch<{ user: { email: string } }>("/auth/me");
        if (data && data.user && data.user.email) {
          setUserEmail(data.user.email);
          setUserInitial(data.user.email[0].toUpperCase());
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "";
        if (message === "Unauthorized" || message === "Auth token invalid") {
          localStorage.removeItem("token");
          document.cookie = "token=; Path=/; Max-Age=0";
        }
        console.warn("User is not authenticated (or token expired).");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; Path=/; Max-Age=0";
    window.location.href = "/";
  };

  if (loading) {
    return <div className="w-10 h-10 rounded-full bg-neutral-800 animate-pulse"></div>;
  }

  if (userEmail) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-neutral-950 font-bold hover:scale-105 transition-transform"
        >
          {userInitial || <User className="w-5 h-5" />}
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl py-2 z-50">
            <div className="px-4 py-2 border-b border-neutral-800">
              <p className="text-xs text-neutral-400">Signed in as</p>
              <p className="text-sm font-medium text-white truncate">{userEmail}</p>
            </div>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-neutral-800 hover:text-red-300 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="hidden md:inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
      >
        Log in
      </Link>
      <Link
        href="/signup"
        className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-bold text-neutral-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
      >
        Get Started
      </Link>
    </>
  );
}
