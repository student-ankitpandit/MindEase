"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import {
  BarChart3,
  BookOpen,
  MessageCircle,
  Brain,
  TrendingUp,
} from "lucide-react";

interface DashboardData {
  stats: { totalMoods: number; totalJournals: number; totalChats: number };
  recentActivity: {
    moods: { id: string; moodType: string; text: string; createdAt: string }[];
    journals: {
      id: string;
      title: string;
      moodType: string | null;
      createdAt: string;
    }[];
    chats: { id: string; title: string; createdAt: string }[];
  };
  moodDistribution: { mood: string; count: number }[];
  moodTrend: Record<string, string[]>;
}

interface DashboardResponse {
  data: DashboardData;
}

const moodEmojis: Record<string, string> = {
  happy: "😄",
  sad: "😔",
  stressed: "😣",
  angry: "😡",
  neutral: "😐",
  anxious: "😰",
  excited: "🤩",
  calm: "🧘",
  grateful: "🙏",
  lonely: "😢",
};

function getMoodEmoji(mood: string) {
  return moodEmojis[mood?.toLowerCase()] || "🫥";
}

const moodColors: Record<string, string> = {
  happy: "from-yellow-500/20 to-yellow-600/5 border-yellow-500/30",
  sad: "from-blue-500/20 to-blue-600/5 border-blue-500/30",
  stressed: "from-red-500/20 to-red-600/5 border-red-500/30",
  angry: "from-orange-500/20 to-orange-600/5 border-orange-500/30",
  neutral: "from-gray-500/20 to-gray-600/5 border-gray-500/30",
  anxious: "from-purple-500/20 to-purple-600/5 border-purple-500/30",
  excited: "from-pink-500/20 to-pink-600/5 border-pink-500/30",
  calm: "from-teal-500/20 to-teal-600/5 border-teal-500/30",
  grateful: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30",
  lonely: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/30",
};

function getMoodColor(mood: string) {
  return (
    moodColors[mood?.toLowerCase()] ||
    "from-gray-500/20 to-gray-600/5 border-gray-500/30"
  );
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiFetch<DashboardResponse>("/dashboard/summary")
      .then((res) => setData(res.data))
      .catch((err: unknown) => {
        const message =
          err instanceof Error ? err.message : "Failed to load dashboard.";
        setError(message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen text-white bg-neutral-950">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 md:p-8">
        {loading ? (
          <div className="flex items-center justify-center h-full min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-neutral-400 animate-pulse">
                Loading your dashboard...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-full min-h-[60vh]">
            <div className="bg-red-950 border border-red-800 rounded-xl p-6 max-w-md text-center">
              <p className="text-red-400 text-lg font-medium">
                Failed to load dashboard
              </p>
              <p className="text-red-300/70 text-sm mt-2">{error}</p>
            </div>
          </div>
        ) : data ? (
          <div className="max-w-5xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Welcome back 👋</h1>
              <p className="text-neutral-400 mt-1">
                Here&apos;s your mental wellness overview
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Mood Check-ins",
                  value: data.stats.totalMoods,
                  icon: Brain,
                  gradient: "from-purple-600 to-indigo-600",
                },
                {
                  label: "Journal Entries",
                  value: data.stats.totalJournals,
                  icon: BookOpen,
                  gradient: "from-emerald-600 to-teal-600",
                },
                {
                  label: "AI Conversations",
                  value: data.stats.totalChats,
                  icon: MessageCircle,
                  gradient: "from-blue-600 to-cyan-600",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-[border-color,transform] duration-200 hover:border-neutral-700 hover:scale-[1.02]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-10`}
                  />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-neutral-400 text-sm">{card.label}</p>
                      <p className="text-3xl font-bold mt-1">{card.value}</p>
                    </div>
                    <card.icon className="w-10 h-10 text-neutral-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mood Distribution */}
            {data.moodDistribution.length > 0 && (
              <div className="mb-8 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <h2 className="text-xl font-semibold">Mood Distribution</h2>
                  <span className="text-xs text-neutral-500 ml-2">
                    Last 30 days
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.moodDistribution.map((item) => (
                    <div
                      key={item.mood}
                      className={`bg-gradient-to-br ${getMoodColor(item.mood)} border rounded-xl px-4 py-3 flex items-center gap-2 transition-transform duration-200 hover:scale-105`}
                    >
                      <span className="text-2xl">
                        {getMoodEmoji(item.mood)}
                      </span>
                      <div>
                        <p className="text-sm font-medium capitalize">
                          {item.mood}
                        </p>
                        <p className="text-xs text-neutral-400">
                          {item.count} time{item.count !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weekly Mood Trend */}
            {Object.keys(data.moodTrend).length > 0 && (
              <div className="mb-8 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                  <h2 className="text-xl font-semibold">Weekly Trend</h2>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Object.entries(data.moodTrend).map(([date, moods]) => (
                    <div
                      key={date}
                      className="text-center rounded-lg bg-neutral-800 p-3"
                    >
                      <p className="text-xs text-neutral-500 mb-2">
                        {new Date(date).toLocaleDateString("en-US", {
                          weekday: "short",
                        })}
                      </p>
                      <div className="flex flex-col items-center gap-1">
                        {moods.map((mood, i) => (
                          <span key={i} className="text-lg">
                            {getMoodEmoji(mood)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Activity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold">Recent Moods</h3>
                </div>
                {data.recentActivity.moods.length === 0 ? (
                  <p className="text-neutral-500 text-sm">
                    No mood entries yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {data.recentActivity.moods.map((mood) => (
                      <div
                        key={mood.id}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-150"
                      >
                        <span className="text-xl mt-0.5">
                          {getMoodEmoji(mood.moodType)}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-neutral-300 truncate">
                            {mood.text}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {new Date(mood.createdAt).toLocaleDateString(
                              "en-US",
                              { month: "short", day: "numeric" },
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-semibold">Recent Journals</h3>
                </div>
                {data.recentActivity.journals.length === 0 ? (
                  <p className="text-neutral-500 text-sm">
                    No journal entries yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {data.recentActivity.journals.map((journal) => (
                      <div
                        key={journal.id}
                        className="p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-150"
                      >
                        <p className="text-sm text-neutral-300 font-medium truncate">
                          {journal.title || "Untitled"}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {new Date(journal.createdAt).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">Recent Chats</h3>
                </div>
                {data.recentActivity.chats.length === 0 ? (
                  <p className="text-neutral-500 text-sm">
                    No conversations yet
                  </p>
                ) : (
                  <div className="space-y-3">
                    {data.recentActivity.chats.map((chat) => (
                      <div
                        key={chat.id}
                        className="p-2 rounded-lg hover:bg-neutral-800 transition-colors duration-150"
                      >
                        <p className="text-sm text-neutral-300 truncate">
                          {chat.title}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {new Date(chat.createdAt).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric" },
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
