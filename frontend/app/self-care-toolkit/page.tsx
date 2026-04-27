"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import { Sparkles, Bookmark, BookmarkCheck, Trash2, CheckCircle, Star, ChevronDown, ChevronUp, Clock, Trophy, TrendingUp } from "lucide-react";

interface Strategy {
  id: string; category: string; title: string; description: string;
  practiceType: string; steps: string[]; duration: number;
  difficulty: string; isSaved: boolean; completedCount: number;
  rating: number | null; culturalNote: string | null; createdAt: string;
}

interface Progress {
  totalCompleted: number; currentLevel: string; totalStrategies: number;
}

const categories = [
  { value: "general", label: "General" },
  { value: "academics", label: "Academics" },
  { value: "career", label: "Career" },
  { value: "relationships", label: "Relationships" },
  { value: "personal_growth", label: "Personal Growth" },
  { value: "family", label: "Family" },
  { value: "social", label: "Social" },
];

const practiceTypeIcons: Record<string, string> = {
  breathing: "🌬️", meditation: "🧘", yoga: "🧘‍♂️", cbt: "🧠",
  journaling: "📝", grounding: "🌿", habit: "📋", general: "✨",
};

const difficultyColors: Record<string, string> = {
  beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

const levelColors: Record<string, string> = {
  beginner: "from-green-500 to-emerald-500",
  intermediate: "from-yellow-500 to-orange-500",
  advanced: "from-red-500 to-pink-500",
};

export default function CopingPage() {
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [situation, setSituation] = useState("");
  const [category, setCategory] = useState("general");
  const [generating, setGenerating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"all" | "saved">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>({ totalCompleted: 0, currentLevel: "beginner", totalStrategies: 0 });

  useEffect(() => { fetchStrategies(); }, []);

  const fetchStrategies = async () => {
    try {
      const data = await apiFetch("/coping");
      setStrategies(data.strategies || []);
      if (data.progress) setProgress(data.progress);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const generateStrategies = async () => {
    if (!situation.trim() || generating) return;
    setGenerating(true);
    try {
      const data = await apiFetch("/coping/generate", {
        method: "POST", body: JSON.stringify({ situation, category }),
      });
      setStrategies([...(data.strategies || []), ...strategies]);
      setSituation("");
      fetchStrategies(); // refresh progress
    } catch (e: any) { alert(e.message); }
    finally { setGenerating(false); }
  };

  const toggleSave = async (id: string) => {
    try {
      const data = await apiFetch(`/coping/${id}/save`, { method: "POST" });
      setStrategies(strategies.map((s) => s.id === id ? data.strategy : s));
    } catch (e) { console.error(e); }
  };

  const markComplete = async (id: string) => {
    try {
      const data = await apiFetch(`/coping/${id}/complete`, { method: "POST" });
      setStrategies(strategies.map((s) => s.id === id ? data.strategy : s));
      setProgress((p) => ({ ...p, totalCompleted: p.totalCompleted + 1 }));
    } catch (e) { console.error(e); }
  };

  const rateStrategy = async (id: string, rating: number) => {
    try {
      const data = await apiFetch(`/coping/${id}/rate`, { method: "POST", body: JSON.stringify({ rating }) });
      setStrategies(strategies.map((s) => s.id === id ? data.strategy : s));
    } catch (e) { console.error(e); }
  };

  const deleteStrategy = async (id: string) => {
    try {
      await apiFetch(`/coping/${id}`, { method: "DELETE" });
      setStrategies(strategies.filter((s) => s.id !== id));
    } catch (e) { console.error(e); }
  };

  const filtered = tab === "saved" ? strategies.filter((s) => s.isSaved) : strategies;

  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Self-Care Toolkit
            </h1>
            <p className="text-neutral-400 mt-1">AI-powered strategies tailored to your situation</p>
          </div>

          {/* Progress Bar */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <h3 className="font-semibold">Your Progress</h3>
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[progress.currentLevel] || levelColors.beginner} text-white capitalize`}>
                {progress.currentLevel} Level
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{progress.totalCompleted} completed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>{progress.totalStrategies} total strategies</span>
              </div>
            </div>
            <div className="mt-3 h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${levelColors[progress.currentLevel] || levelColors.beginner} transition-all duration-500`}
                style={{ width: `${Math.min(100, (progress.totalCompleted / 15) * 100)}%` }}
              />
            </div>
            <p className="text-xs text-neutral-500 mt-1.5">
              {progress.currentLevel === "advanced" ? "You've reached the highest level! 🎉" : `${progress.currentLevel === "beginner" ? 5 - progress.totalCompleted : 15 - progress.totalCompleted} more to level up`}
            </p>
          </div>

          {/* Generator */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-teal-400" /> Generate New Strategies
            </h2>
            <textarea value={situation} onChange={(e) => setSituation(e.target.value)} rows={3}
              placeholder="Describe what you're going through... (e.g., 'I'm feeling overwhelmed with exams and can't sleep')"
              className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-teal-500 outline-none mb-4" />
            <div className="w-full flex justify-center">
              <div className="inline-flex gap-3 items-center">
                <select value={category} onChange={(e) => setCategory(e.target.value)}
                  className="px-1 py-2.5 bg-black border border-neutral-700 rounded-xl text-white focus:ring-2 focus:ring-teal-500 outline-none">
                  {categories.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
                <button onClick={generateStrategies} disabled={generating || !situation.trim()}
                  className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-semibold px-6 py-2.5 rounded-xl transition cursor-pointer">
                  {generating ? (
                    <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Generating...</>
                  ) : (
                    <><Sparkles className="w-4 h-4" /> Generate</>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button onClick={() => setTab("all")}
              className={`px-4 py-2 rounded-lg transition cursor-pointer ${tab === "all" ? "bg-teal-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}>
              All ({strategies.length})
            </button>
            <button onClick={() => setTab("saved")}
              className={`px-4 py-2 rounded-lg transition cursor-pointer ${tab === "saved" ? "bg-teal-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}>
              Saved ({strategies.filter((s) => s.isSaved).length})
            </button>
          </div>

          {/* Strategy Cards */}
          {loading ? (
            <div className="flex justify-center py-12"><div className="w-10 h-10 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" /></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <p className="text-xl mb-2">{tab === "saved" ? "No saved strategies" : "No strategies yet"}</p>
              <p className="text-sm">Describe your situation above to get personalized strategies</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((s) => {
                const isExpanded = expandedId === s.id;
                return (
                  <div key={s.id} className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden hover:border-neutral-700 transition group">
                    {/* Card Header */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start gap-3 flex-1">
                          <span className="text-2xl mt-0.5">{practiceTypeIcons[s.practiceType] || "✨"}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-white">{s.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-1.5">
                              <span className="text-xs bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded-full capitalize">{s.category.replace("_", " ")}</span>
                              <span className={`text-xs border px-2 py-0.5 rounded-full capitalize ${difficultyColors[s.difficulty] || difficultyColors.beginner}`}>{s.difficulty}</span>
                              <span className="text-xs bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {s.duration} min
                              </span>
                              {s.completedCount > 0 && (
                                <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <CheckCircle className="w-3 h-3" /> ×{s.completedCount}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <button onClick={() => toggleSave(s.id)} className="p-1.5 hover:bg-neutral-800 rounded-lg transition cursor-pointer">
                            {s.isSaved ? <BookmarkCheck size={18} className="text-teal-400" /> : <Bookmark size={18} className="text-neutral-500" />}
                          </button>
                          <button onClick={() => deleteStrategy(s.id)} className="p-1.5 hover:bg-red-600/20 rounded-lg transition opacity-0 group-hover:opacity-100 cursor-pointer">
                            <Trash2 size={16} className="text-red-400" />
                          </button>
                        </div>
                      </div>

                      <p className="text-sm text-neutral-400 leading-relaxed mt-2">{s.description}</p>

                      {s.culturalNote && (
                        <p className="text-xs text-amber-400/70 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-1.5 mt-3 italic">
                          🪷 {s.culturalNote}
                        </p>
                      )}

                      {/* Expand/Collapse Steps */}
                      {s.steps && s.steps.length > 0 && (
                        <button onClick={() => setExpandedId(isExpanded ? null : s.id)}
                          className="mt-3 text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer">
                          {isExpanded ? <><ChevronUp className="w-3.5 h-3.5" /> Hide steps</> : <><ChevronDown className="w-3.5 h-3.5" /> Show {s.steps.length} steps</>}
                        </button>
                      )}
                    </div>

                    {/* Expanded Steps */}
                    {isExpanded && s.steps && s.steps.length > 0 && (
                      <div className="border-t border-neutral-800 bg-neutral-950/50 px-5 py-4">
                        <ol className="space-y-2.5">
                          {s.steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/20 text-teal-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                              <span className="text-sm text-neutral-300 pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>

                        {/* Actions */}
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-800">
                          <button onClick={() => markComplete(s.id)}
                            className="flex items-center gap-2 bg-green-600/20 hover:bg-green-600 text-green-400 hover:text-white px-4 py-2 rounded-lg text-sm transition cursor-pointer">
                            <CheckCircle className="w-4 h-4" /> Mark Completed
                          </button>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-neutral-500 mr-1">Rate:</span>
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button key={star} onClick={() => rateStrategy(s.id, star)}
                                className="cursor-pointer p-0.5 hover:scale-125 transition">
                                <Star className={`w-4 h-4 ${s.rating && star <= s.rating ? "text-yellow-400 fill-yellow-400" : "text-neutral-600"}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
