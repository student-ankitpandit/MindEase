"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageCircle,
  BookOpen,
  Brain,
  Sparkles,
  Users,
  Mail,
  Home,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "AI Chat", href: "/chat", icon: MessageCircle },
  { label: "Journal", href: "/journaling", icon: BookOpen },
  { label: "Mood Tracker", href: "/mood", icon: Brain },
  { label: "Self-Care", href: "/self-care-toolkit", icon: Sparkles },
  { label: "Community", href: "/community", icon: Users },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax;";
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 h-full bg-neutral-950 border-r border-neutral-800/50 flex flex-col flex-shrink-0 z-10 relative">
      {/* Logo */}
      <div className="pt-8 pb-6 px-6 border-b border-neutral-800/50">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            MindEase
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 text-blue-300 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-blue-500/10"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 border border-transparent"
              }`}
            >
              <item.icon
                className={`w-[18px] h-[18px] transition-colors ${isActive ? "text-blue-400" : "text-neutral-500 group-hover:text-neutral-300"}`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-neutral-800/50 space-y-1.5 bg-neutral-950/20">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 border border-transparent transition-all duration-300"
        >
          <Home className="w-[18px] h-[18px] text-neutral-500" />
          Home
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm text-neutral-400 hover:bg-red-500/10 hover:text-red-400 border border-transparent transition-all duration-300 w-full cursor-pointer"
        >
          <LogOut className="w-[18px] h-[18px] text-neutral-500" />
          Log out
        </button>
      </div>
    </aside>
  );
}
