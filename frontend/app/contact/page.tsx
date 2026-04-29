"use client";

import { useState } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FeedbackResponse {
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await apiFetch<FeedbackResponse>("/feedback", {
        method: "POST",
        body: JSON.stringify(form),
      });
      setStatus("success");
      setStatusMsg(res.message);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setStatusMsg(message);
    }
  };

  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto flex justify-center px-4 py-10">
        <div className="max-w-xl w-full">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-neutral-400 mt-2">
              Have feedback or need support? We&apos;re here to listen.
            </p>
          </div>

          {status === "success" && (
            <div className="mb-6 flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <p className="text-emerald-300 text-sm">{statusMsg}</p>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm">{statusMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-400 mb-1.5">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-1.5">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1.5">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                minLength={3}
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                minLength={10}
                rows={5}
                placeholder="Tell us what's on your mind..."
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all hover:scale-[1.01] cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />{" "}
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Feedback
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
