"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import {
  Save,
  Edit2,
  Trash2,
  Plus,
  Share2,
  Lock,
  X,
  Sparkles,
} from "lucide-react";

interface Journal {
  id: string;
  title: string;
  content: string;
  isPrivate: boolean;
  moodType?: string;
  moodScore?: number;
  tags?: string[];
  createdAt: string;
}

interface JournalListResponse {
  entries?: Journal[];
}
interface JournalEntryResponse {
  journal: Journal;
}
interface JournalAnalysis {
  moodType: string;
  moodScore: number;
  themes?: string[];
  reflection: string;
}
interface JournalAnalyzeResponse {
  analysis: JournalAnalysis;
}

export default function JournalInterface() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentJournal, setCurrentJournal] = useState({
    title: "",
    content: "",
    isPrivate: true,
  });
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [analyzing, setAnalyzing] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<JournalAnalysis | null>(
    null,
  );

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      setPageLoading(true);
      const data = await apiFetch<JournalListResponse>("/startJournaling");
      setJournals(data.entries || []);
    } catch (error) {
      console.error("Error fetching journals:", error);
    } finally {
      setPageLoading(false);
    }
  };

  const handleSave = async () => {
    if (!currentJournal.title.trim() || !currentJournal.content.trim()) {
      alert("Please fill in both title and content");
      return;
    }
    try {
      setLoading(true);
      if (editingId) {
        const data = await apiFetch<JournalEntryResponse>(
          `/startJournaling/${editingId}`,
          {
            method: "PUT",
            body: JSON.stringify(currentJournal),
          },
        );
        setJournals(
          journals.map((j) => (j.id === editingId ? data.journal : j)),
        );
        showSuccess("Journal updated!");
      } else {
        const data = await apiFetch<JournalEntryResponse>("/startJournaling", {
          method: "POST",
          body: JSON.stringify(currentJournal),
        });
        setJournals([data.journal, ...journals]);
        showSuccess("Journal saved!");
      }
      setCurrentJournal({ title: "", content: "", isPrivate: true });
      setIsWriting(false);
      setEditingId(null);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to save journal.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (journal: Journal) => {
    setCurrentJournal({
      title: journal.title,
      content: journal.content,
      isPrivate: journal.isPrivate,
    });
    setEditingId(journal.id);
    setIsWriting(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this journal entry?")) return;
    try {
      setLoading(true);
      await apiFetch(`/startJournaling/${id}`, { method: "DELETE" });
      setJournals(journals.filter((j) => j.id !== id));
      showSuccess("Journal deleted!");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to delete journal.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (journal: Journal) => {
    try {
      setLoading(true);
      const data = await apiFetch<JournalEntryResponse>(
        `/startJournaling/${journal.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ isPrivate: !journal.isPrivate }),
        },
      );
      setJournals(
        journals.map((j) => (j.id === journal.id ? data.journal : j)),
      );
      showSuccess(data.journal.isPrivate ? "Set to private" : "Shared!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async (id: string) => {
    try {
      setAnalyzing(id);
      setAnalysisResult(null);
      const data = await apiFetch<JournalAnalyzeResponse>(
        `/startJournaling/${id}/analyze`,
        { method: "POST" },
      );
      setAnalysisResult(data.analysis);
      // Refresh journals to get updated mood info
      fetchJournals();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to analyze journal.";
      alert(message);
    } finally {
      setAnalyzing(null);
    }
  };

  const showSuccess = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const filteredJournals = journals.filter((j) => {
    if (filter === "private") return j.isPrivate;
    if (filter === "shared") return !j.isPrivate;
    return true;
  });

  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {successMessage && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {successMessage}
          </div>
        )}
        {loading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-neutral-800 p-6 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" />
              <p className="mt-4 text-center">Processing...</p>
            </div>
          </div>
        )}

        {/* Analysis Result Modal */}
        {analysisResult && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            onClick={() => setAnalysisResult(null)}
          >
            <div
              className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-purple-400">
                  AI Mood Analysis
                </h3>
                <button
                  onClick={() => setAnalysisResult(null)}
                  className="p-1 hover:bg-neutral-700 rounded cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="text-neutral-400">Mood:</span>{" "}
                  <span className="font-semibold capitalize">
                    {analysisResult.moodType}
                  </span>{" "}
                  (Score: {analysisResult.moodScore}/10)
                </p>
                <div>
                  <span className="text-neutral-400">Themes:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {analysisResult.themes?.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/20 border border-purple-500/30 px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-neutral-300 bg-neutral-700/50 p-3 rounded-lg">
                  {analysisResult.reflection}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Journal
            </h1>
            <p className="text-neutral-400">
              Share your thoughts and feelings in a safe space
            </p>
          </div>

          {!isWriting && (
            <button
              onClick={() => setIsWriting(true)}
              className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Plus size={20} /> New Journal Entry
            </button>
          )}

          {isWriting && (
            <div className="bg-neutral-800 rounded-xl p-6 mb-8 border border-neutral-700 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {editingId ? "Edit Entry" : "New Entry"}
                </h2>
                <button
                  onClick={() => {
                    setIsWriting(false);
                    setEditingId(null);
                    setCurrentJournal({
                      title: "",
                      content: "",
                      isPrivate: true,
                    });
                  }}
                  className="p-2 hover:bg-neutral-700 rounded-lg cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <input
                type="text"
                placeholder="Title your thoughts..."
                value={currentJournal.title}
                onChange={(e) =>
                  setCurrentJournal({
                    ...currentJournal,
                    title: e.target.value,
                  })
                }
                className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg mb-4 border border-neutral-600 focus:border-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Write your thoughts here..."
                value={currentJournal.content}
                onChange={(e) =>
                  setCurrentJournal({
                    ...currentJournal,
                    content: e.target.value,
                  })
                }
                className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg mb-4 border border-neutral-600 focus:border-blue-500 focus:outline-none min-h-[300px] resize-y"
              />
              <div className="mb-4 flex items-center gap-3">
                <button
                  onClick={() =>
                    setCurrentJournal({
                      ...currentJournal,
                      isPrivate: !currentJournal.isPrivate,
                    })
                  }
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all hover:scale-105 cursor-pointer ${
                    currentJournal.isPrivate
                      ? "bg-neutral-700 hover:bg-neutral-600"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {currentJournal.isPrivate ? (
                    <>
                      <Lock size={16} /> Private
                    </>
                  ) : (
                    <>
                      <Share2 size={16} /> Shared
                    </>
                  )}
                </button>
                <span className="text-sm text-neutral-400">
                  {currentJournal.isPrivate
                    ? "Only you can see this"
                    : "Shared with community"}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  <Save size={18} /> Save Entry
                </button>
                <button
                  onClick={() => {
                    setIsWriting(false);
                    setEditingId(null);
                    setCurrentJournal({
                      title: "",
                      content: "",
                      isPrivate: true,
                    });
                  }}
                  className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6">
            {["all", "private", "shared"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg capitalize transition-all hover:scale-105 cursor-pointer ${
                  filter === f
                    ? "bg-blue-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                {f} (
                {f === "all"
                  ? journals.length
                  : journals.filter((j) =>
                      f === "private" ? j.isPrivate : !j.isPrivate,
                    ).length}
                )
              </button>
            ))}
          </div>

          {/* Journal Entries */}
          <div className="grid gap-4">
            {filteredJournals.length === 0 ? (
              <div className="text-center py-12 text-neutral-500">
                <p className="text-xl mb-2">No journal entries yet</p>
                <p className="text-sm">
                  Start writing to track your thoughts and feelings
                </p>
              </div>
            ) : (
              filteredJournals.map((journal) => (
                <div
                  key={journal.id}
                  className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-neutral-600 transition-all hover:shadow-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">
                          {journal.title || "Untitled"}
                        </h3>
                        {journal.isPrivate ? (
                          <Lock size={16} className="text-neutral-500" />
                        ) : (
                          <Share2 size={16} className="text-green-500" />
                        )}
                        {journal.moodType && (
                          <span className="text-xs bg-purple-500/20 border border-purple-500/30 px-2 py-0.5 rounded-full capitalize">
                            {journal.moodType}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-400">
                        {new Date(journal.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAnalyze(journal.id)}
                        disabled={analyzing === journal.id}
                        className="p-2 bg-purple-600/20 hover:bg-purple-600 rounded-lg transition-all hover:scale-110 cursor-pointer"
                        title="AI Analyze"
                      >
                        {analyzing === journal.id ? (
                          <div className="w-[18px] h-[18px] border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <Sparkles size={18} />
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(journal)}
                        className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-all hover:scale-110 cursor-pointer"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleShare(journal)}
                        className={`p-2 rounded-lg transition-all hover:scale-110 cursor-pointer ${journal.isPrivate ? "bg-neutral-700 hover:bg-green-600" : "bg-green-600 hover:bg-neutral-700"}`}
                        title={
                          journal.isPrivate ? "Make Shared" : "Make Private"
                        }
                      >
                        {journal.isPrivate ? (
                          <Share2 size={18} />
                        ) : (
                          <Lock size={18} />
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(journal.id)}
                        className="p-2 bg-neutral-700 hover:bg-red-600 rounded-lg transition-all hover:scale-110 cursor-pointer"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-neutral-300 whitespace-pre-wrap">
                    {journal.content}
                  </p>
                  {journal.tags && journal.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {journal.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-500/10 border border-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
