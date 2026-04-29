"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import { Flame, TrendingUp, BarChart3 } from "lucide-react";

const moods = [
  { label: "Happy", emoji: "😄" },
  { label: "Calm", emoji: "🙂" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😔" },
  { label: "Stressed", emoji: "😣" },
  { label: "Angry", emoji: "😡" },
];

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

interface Analytics {
  totalMoods: number;
  mostFrequentMood: string;
  streak: number;
  monthlyDistribution: { mood: string; count: number }[];
  weeklyTrend: Record<string, string[]>;
}

interface MoodAnalyticsResponse {
  analytics: Analytics;
}
interface MoodStatusResponse {
  mood: string;
  advice: string;
}

export default function MoodInputPage() {
  const [selectedMood, setSelectedMood] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ mood: string; advice: string } | null>(
    null,
  );
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(true);

  useEffect(() => {
    apiFetch<MoodAnalyticsResponse>("/getMoodSts/analytics")
      .then((res) => setAnalytics(res.analytics))
      .catch(() => {})
      .finally(() => setAnalyticsLoading(false));
  }, []);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setSubmitting(true);
    setResult(null);
    try {
      const data = await apiFetch<MoodStatusResponse>("/moodSts/moodStatus", {
        method: "POST",
        body: JSON.stringify({ text }),
      });
      setResult({ mood: data.mood, advice: data.advice });
      setText("");
      setSelectedMood("");
      // Refresh analytics
      apiFetch<MoodAnalyticsResponse>("/getMoodSts/analytics")
        .then((res) => setAnalytics(res.analytics))
        .catch(() => {});
    } catch (e: unknown) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Mood Input Card */}
          <div className="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50 mb-8">
            <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How Are You Feeling Today?
            </h1>
            <p className="text-neutral-400 mb-6">
              Your mood helps us understand and support you better.
            </p>

            <label className="block text-neutral-300 mb-2">
              Describe your day:
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Write anything... even one sentence is okay."
              className="w-full p-4 bg-black border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <p className="mt-5 text-neutral-300">Select your mood:</p>
            <div className="flex gap-3 flex-wrap mt-3">
              {moods.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setSelectedMood(m.label)}
                  className={`px-4 py-2 rounded-xl border transition text-md cursor-pointer ${
                    selectedMood === m.label
                      ? "bg-blue-600 border-blue-700 text-white"
                      : "bg-black border-neutral-700 text-neutral-300 hover:bg-neutral-900"
                  }`}
                >
                  {m.emoji} {m.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              disabled={submitting || !text.trim()}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold disabled:opacity-50 cursor-pointer"
            >
              {submitting ? "Analyzing..." : "Save Mood"}
            </button>
          </div>

          {/* AI Result */}
          {result && (
            <div className="mb-8 border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-5">
              <p className="text-emerald-400 font-semibold mb-2">
                AI detected mood:{" "}
                {moodEmojis[result.mood?.toLowerCase()] || "🫥"} {result.mood}
              </p>
              <p className="text-neutral-300 text-sm">{result.advice}</p>
            </div>
          )}

          {/* Analytics Section */}
          {!analyticsLoading && analytics && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">
                Your Mood Analytics
              </h2>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 text-center">
                  <BarChart3 className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics.totalMoods}</p>
                  <p className="text-xs text-neutral-500">Total Check-ins</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 text-center">
                  <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{analytics.streak}</p>
                  <p className="text-xs text-neutral-500">Day Streak 🔥</p>
                </div>
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 text-center">
                  <TrendingUp className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold capitalize">
                    {moodEmojis[analytics.mostFrequentMood?.toLowerCase()] ||
                      ""}{" "}
                    {analytics.mostFrequentMood}
                  </p>
                  <p className="text-xs text-neutral-500">Most Frequent</p>
                </div>
              </div>

              {/* Distribution */}
              {analytics.monthlyDistribution.length > 0 && (
                <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
                  <h3 className="font-semibold mb-3">Monthly Distribution</h3>
                  <div className="space-y-2">
                    {analytics.monthlyDistribution.map((item) => {
                      const maxCount =
                        analytics.monthlyDistribution[0]?.count || 1;
                      const pct = Math.round((item.count / maxCount) * 100);
                      return (
                        <div
                          key={item.mood}
                          className="flex items-center gap-3"
                        >
                          <span className="text-lg w-6">
                            {moodEmojis[item.mood?.toLowerCase()] || "🫥"}
                          </span>
                          <span className="text-sm w-20 capitalize">
                            {item.mood}
                          </span>
                          <div className="flex-1 bg-neutral-800 rounded-full h-3 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <span className="text-xs text-neutral-500 w-6 text-right">
                            {item.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
