"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User, LogOut } from "lucide-react";
import { apiFetch, getToken } from "@/app/lib/api";

export default function AuthButtons() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const clearUser = useCallback(() => {
    setUserEmail(null);
    setUserInitial(null);
    setShowDropdown(false);
  }, []);

  const checkAuth = useCallback(async () => {
    const token = getToken();
    if (!token) {
      clearUser();
      setLoading(false);
      return;
    }

    try {
      const data = await apiFetch<{ user: { email: string } }>("/auth/me");
      if (data?.user?.email) {
        setUserEmail(data.user.email);
        setUserInitial(data.user.email[0].toUpperCase());
      } else {
        clearUser();
      }
    } catch {
      // Token is invalid or expired — clear everything
      localStorage.removeItem("token");
      document.cookie =
        "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax;";
      clearUser();
    } finally {
      setLoading(false);
    }
  }, [clearUser]);

  // Initial check
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  // Re-check whenever the user removes the token from localStorage in DevTools
  // or another tab logs out (storage event fires cross-tab)
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "token") {
        checkAuth();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [checkAuth]);

  // Re-check when user switches back to this tab
  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        checkAuth();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [checkAuth]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedTrigger = dropdownRef.current?.contains(target);
      const clickedMenu = menuRef.current?.contains(target);

      if (!clickedTrigger && !clickedMenu) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await apiFetch("/auth/logout", { method: "POST" });
    } catch {
      // Even if the request fails, clear local state to avoid a stuck UI.
    }

    localStorage.removeItem("token");
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax;";
    clearUser();
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="w-10 h-10 rounded-full bg-neutral-800 animate-pulse" />
    );
  }

  if (userEmail) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-neutral-950 font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          {userInitial ?? <User className="w-5 h-5" />}
        </button>

        {showDropdown && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-2 w-56 bg-neutral-900 border border-neutral-800 rounded-xl shadow-xl py-2 z-50"
          >
            <div className="px-4 py-2 border-b border-neutral-800">
              <p className="text-xs text-neutral-400">Signed in as</p>
              <p className="text-sm font-medium text-white truncate">
                {userEmail}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-neutral-800 hover:text-red-300 flex items-center gap-2 transition-colors cursor-pointer"
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
