import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import GoBackButton from "@/components/GoBackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | MindEase",
};

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white px-6"
      style={{ fontFamily: "var(--font-geist-sans, sans-serif)" }}
    >
      {/* Background ambient orbs */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          top: "10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          maxWidth: 600,
          maxHeight: 600,
          background:
            "radial-gradient(circle, rgba(45,212,191,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          bottom: "10%",
          right: "-10%",
          width: "35vw",
          height: "35vw",
          maxWidth: 500,
          maxHeight: 500,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        {/* 404 display */}
        <div className="relative mb-6 select-none">
          <span
            className="text-[10rem] font-extrabold leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(45,212,191,0.15))",
            }}
          >
            404
          </span>
          {/* Outlined overlay */}
          <span
            className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold leading-none tracking-tighter"
            style={{
              WebkitTextStroke: "1px rgba(45,212,191,0.25)",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden
          >
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
          Lost in the digital calm?
        </h1>
        <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-sm">
          This page doesn&apos;t exist — but your mental wellness journey does.
          Let&apos;s get you back on track.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-500 px-6 py-3 text-sm font-bold text-neutral-950 transition-all hover:bg-teal-400 hover:scale-105 hover:shadow-[0_0_24px_rgba(45,212,191,0.35)]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/chat"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
          >
            <MessageCircle className="w-4 h-4" />
            Start a Chat
          </Link>
        </div>

        <GoBackButton />
      </div>
    </main>
  );
}
