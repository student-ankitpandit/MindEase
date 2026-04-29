"use client";

import { useState, useEffect } from "react";
import { apiFetch } from "@/app/lib/api";
import Sidebar from "@/components/Sidebar";
import {
  Heart,
  Flame,
  HandHeart,
  Send,
  Plus,
  X,
  MessageCircle,
  Sparkles,
  Users,
  ChevronDown,
  ChevronUp,
  Trash2,
  type LucideIcon,
} from "lucide-react";

interface Story {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  isAnonymous: boolean;
  displayName: string;
  supportCount: number;
  commentCount: number;
  userSupport: string | null;
  createdAt: string;
  isApproved?: boolean;
}

interface Comment {
  id: string;
  content: string;
  displayName: string;
  createdAt: string;
  isOwn: boolean;
}

interface StoriesResponse {
  stories?: Story[];
}
interface ModerationResponse {
  moderation?: { isApproved?: boolean };
}
interface SupportResponse {
  supported: boolean;
}
interface CommentsResponse {
  comments?: Comment[];
}
interface CommentCreateResponse {
  isApproved: boolean;
  comment: Comment;
}

const categories = [
  { value: "all", label: "All Stories" },
  { value: "academics", label: "Academics" },
  { value: "career", label: "Career" },
  { value: "relationships", label: "Relationships" },
  { value: "personal_growth", label: "Personal Growth" },
  { value: "family", label: "Family" },
  { value: "social", label: "Social" },
  { value: "general", label: "General" },
];

const reactionIcons: Record<
  string,
  { icon: LucideIcon; label: string; color: string }
> = {
  heart: {
    icon: Heart,
    label: "Love",
    color: "text-pink-400 hover:text-pink-300",
  },
  strength: {
    icon: Flame,
    label: "Strong",
    color: "text-orange-400 hover:text-orange-300",
  },
  hug: {
    icon: HandHeart,
    label: "Support",
    color: "text-purple-400 hover:text-purple-300",
  },
};

export default function CommunityPage() {
  const [tab, setTab] = useState<"browse" | "matched" | "mine">("browse");
  const [stories, setStories] = useState<Story[]>([]);
  const [matchedStories, setMatchedStories] = useState<Story[]>([]);
  const [myStories, setMyStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [showNewStory, setShowNewStory] = useState(false);
  const [newStory, setNewStory] = useState({
    title: "",
    content: "",
    category: "general",
    isAnonymous: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Comments state
  const [expandedComments, setExpandedComments] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [commentInput, setCommentInput] = useState("");
  const [commentLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    fetchStories();
    fetchMatched();
  }, []);

  const fetchStories = async (cat = "all") => {
    setLoading(true);
    try {
      const params = cat !== "all" ? `?category=${cat}` : "";
      const data = await apiFetch<StoriesResponse>(`/stories${params}`);
      setStories(data.stories || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchMatched = async () => {
    try {
      const data = await apiFetch<StoriesResponse>("/stories/matched");
      setMatchedStories(data.stories || []);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchMyStories = async () => {
    try {
      const data = await apiFetch<StoriesResponse>("/stories/mine");
      setMyStories(data.stories || []);
    } catch (e) {
      console.error(e);
    }
  };

  const handleTabChange = (t: "browse" | "matched" | "mine") => {
    setTab(t);
    if (t === "mine") fetchMyStories();
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    fetchStories(cat);
  };

  const submitStory = async () => {
    if (!newStory.title.trim() || !newStory.content.trim() || submitting)
      return;
    setSubmitting(true);
    try {
      const data = await apiFetch<ModerationResponse>("/stories", {
        method: "POST",
        body: JSON.stringify(newStory),
      });
      if (data.moderation?.isApproved) {
        setSuccessMsg("Your story has been published! 🎉");
        fetchStories();
      } else {
        setSuccessMsg(
          "Your story has been submitted for review. We'll publish it once verified.",
        );
      }
      setNewStory({
        title: "",
        content: "",
        category: "general",
        isAnonymous: true,
      });
      setShowNewStory(false);
      setTimeout(() => setSuccessMsg(""), 5000);
    } catch (e: unknown) {
      const message =
        e instanceof Error ? e.message : "Failed to submit story.";
      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSupport = async (storyId: string, type: string) => {
    try {
      const data = await apiFetch<SupportResponse>(
        `/stories/${storyId}/support`,
        {
          method: "POST",
          body: JSON.stringify({ type }),
        },
      );
      const updateStory = (s: Story) =>
        s.id === storyId
          ? {
              ...s,
              supportCount: data.supported
                ? s.supportCount + 1
                : s.supportCount - 1,
              userSupport: data.supported ? type : null,
            }
          : s;
      setStories((prev) => prev.map(updateStory));
      setMatchedStories((prev) => prev.map(updateStory));
    } catch (e) {
      console.error(e);
    }
  };

  const deleteStory = async (id: string) => {
    if (!confirm("Delete this story?")) return;
    try {
      await apiFetch(`/stories/${id}`, { method: "DELETE" });
      setMyStories(myStories.filter((s) => s.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  // Comments
  const toggleComments = async (storyId: string) => {
    if (expandedComments === storyId) {
      setExpandedComments(null);
      return;
    }
    setExpandedComments(storyId);
    if (!comments[storyId]) {
      try {
        const data = await apiFetch<CommentsResponse>(
          `/stories/${storyId}/comments`,
        );
        setComments((prev) => ({ ...prev, [storyId]: data.comments || [] }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const submitComment = async (storyId: string) => {
    if (!commentInput.trim() || commentLoading) return;
    setCommentLoading(true);
    try {
      const data = await apiFetch<CommentCreateResponse>(
        `/stories/${storyId}/comments`,
        {
          method: "POST",
          body: JSON.stringify({ content: commentInput }),
        },
      );
      if (data.isApproved) {
        setComments((prev) => ({
          ...prev,
          [storyId]: [...(prev[storyId] || []), data.comment],
        }));
      }
      setCommentInput("");
    } catch (e) {
      console.error(e);
    } finally {
      setCommentLoading(false);
    }
  };

  const renderStoryCard = (story: Story, showDelete = false) => (
    <div
      key={story.id}
      className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 hover:border-neutral-700 transition"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-white text-lg">{story.title}</h3>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-xs text-neutral-500">
              {story.displayName}
            </span>
            <span className="text-xs text-neutral-700">•</span>
            <span className="text-xs text-neutral-500">
              {new Date(story.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="text-xs bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded-full capitalize">
              {story.category.replace("_", " ")}
            </span>
            {story.isApproved === false && (
              <span className="text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded-full">
                Pending Review
              </span>
            )}
          </div>
        </div>
        {showDelete && (
          <button
            onClick={() => deleteStory(story.id)}
            className="p-1.5 hover:bg-red-600/20 rounded-lg transition cursor-pointer"
          >
            <Trash2 size={16} className="text-red-400" />
          </button>
        )}
      </div>

      <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap mb-4">
        {story.content}
      </p>

      {story.tags && story.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {story.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Reactions + Comments toggle */}
      <div className="flex items-center justify-between border-t border-neutral-800 pt-3">
        <div className="flex items-center gap-1">
          {Object.entries(reactionIcons).map(
            ([type, { icon: Icon, label, color }]) => (
              <button
                key={type}
                onClick={() => handleSupport(story.id, type)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition cursor-pointer hover:bg-neutral-800 ${story.userSupport === type ? "bg-neutral-800" : ""} ${color}`}
              >
                <Icon
                  className={`w-4 h-4 ${story.userSupport === type ? "fill-current" : ""}`}
                />
                <span className="text-xs">{label}</span>
              </button>
            ),
          )}
          <span className="text-xs text-neutral-500 ml-2">
            {story.supportCount}
          </span>
        </div>

        <button
          onClick={() => toggleComments(story.id)}
          className="flex items-center gap-1.5 text-neutral-400 hover:text-white text-sm transition cursor-pointer px-3 py-1.5 rounded-lg hover:bg-neutral-800"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{story.commentCount || 0}</span>
          {expandedComments === story.id ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Comments Section */}
      {expandedComments === story.id && (
        <div className="mt-3 border-t border-neutral-800 pt-3">
          <div className="space-y-2.5 max-h-60 overflow-y-auto mb-3">
            {!comments[story.id] || comments[story.id].length === 0 ? (
              <p className="text-xs text-neutral-500 text-center py-2">
                No comments yet. Be the first!
              </p>
            ) : (
              comments[story.id].map((c) => (
                <div key={c.id} className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0 text-xs text-neutral-400">
                    {c.displayName[0]?.toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-neutral-300">
                        {c.displayName}
                      </span>
                      <span className="text-xs text-neutral-600">
                        {new Date(c.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 mt-0.5">
                      {c.content}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submitComment(story.id);
              }}
              placeholder="Write a supportive comment..."
              className="flex-1 px-3 py-2 bg-black border border-neutral-700 rounded-lg text-sm text-white placeholder-neutral-600 focus:ring-1 focus:ring-teal-500 outline-none"
            />
            <button
              onClick={() => submitComment(story.id)}
              disabled={commentLoading || !commentInput.trim()}
              className="p-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 rounded-lg transition cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-screen text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 py-8">
        {successMsg && (
          <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {successMsg}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-400" /> Community
              </h1>
              <p className="text-neutral-400 mt-1">
                Share your story, support others, grow together
              </p>
            </div>
            <button
              onClick={() => setShowNewStory(true)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl transition cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Share Story
            </button>
          </div>

          {/* New Story Modal */}
          {showNewStory && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              onClick={() => setShowNewStory(false)}
            >
              <div
                className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-purple-400">
                    Share Your Story
                  </h2>
                  <button
                    onClick={() => setShowNewStory(false)}
                    className="p-1 hover:bg-neutral-700 rounded cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
                <input
                  type="text"
                  value={newStory.title}
                  onChange={(e) =>
                    setNewStory({ ...newStory, title: e.target.value })
                  }
                  placeholder="Give your story a title..."
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-purple-500 outline-none mb-3"
                />
                <textarea
                  value={newStory.content}
                  onChange={(e) =>
                    setNewStory({ ...newStory, content: e.target.value })
                  }
                  rows={6}
                  placeholder="Share how you overcame a challenge or what you learned from a difficult time..."
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-xl text-white placeholder-neutral-600 focus:ring-2 focus:ring-purple-500 outline-none mb-3 resize-y"
                />
                <div className="flex flex-wrap gap-3 mb-4">
                  <select
                    value={newStory.category}
                    onChange={(e) =>
                      setNewStory({ ...newStory, category: e.target.value })
                    }
                    className="px-1 py-2 bg-black border border-neutral-700 rounded-lg text-sm text-white outline-none"
                  >
                    {categories
                      .filter((c) => c.value !== "all")
                      .map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                  </select>
                  <button
                    onClick={() =>
                      setNewStory({
                        ...newStory,
                        isAnonymous: !newStory.isAnonymous,
                      })
                    }
                    className={`px-3 py-2 rounded-lg text-sm border cursor-pointer transition ${newStory.isAnonymous ? "bg-neutral-800 border-neutral-700 text-neutral-400" : "bg-purple-600/20 border-purple-500/30 text-purple-400"}`}
                  >
                    {newStory.isAnonymous ? "🕶️ Anonymous" : "👤 Show Name"}
                  </button>
                </div>
                <p className="text-xs text-neutral-500 mb-4">
                  🛡️ All stories are reviewed by our AI moderator to ensure a
                  safe community
                </p>
                <button
                  onClick={submitStory}
                  disabled={
                    submitting ||
                    !newStory.title.trim() ||
                    !newStory.content.trim()
                  }
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-xl transition cursor-pointer"
                >
                  {submitting ? "Submitting..." : "Share Story"}
                </button>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { key: "browse" as const, label: "Browse All" },
              { key: "matched" as const, label: "✨ For You" },
              { key: "mine" as const, label: "My Stories" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => handleTabChange(t.key)}
                className={`px-4 py-2 rounded-lg text-sm transition cursor-pointer ${tab === t.key ? "bg-purple-600 text-white" : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Category Filters (Browse only) */}
          {tab === "browse" && (
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => handleCategoryChange(c.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition cursor-pointer ${category === c.value ? "bg-neutral-700 text-white" : "bg-neutral-800/50 text-neutral-500 hover:bg-neutral-800"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          {loading && tab === "browse" ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : tab === "matched" ? (
            matchedStories.length === 0 ? (
              <div className="text-center py-12 text-neutral-500">
                <Sparkles className="w-12 h-12 mx-auto mb-3 text-neutral-700" />
                <p className="text-lg mb-1">No matched stories yet</p>
                <p className="text-sm">
                  Log some moods first so we can find stories that resonate with
                  you
                </p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-neutral-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" /> Stories
                  matched to your recent moods
                </p>
                <div className="space-y-4">
                  {matchedStories.map((s) => renderStoryCard(s))}
                </div>
              </div>
            )
          ) : tab === "mine" ? (
            myStories.length === 0 ? (
              <div className="text-center py-12 text-neutral-500">
                <p className="text-lg mb-1">You have not shared any stories</p>
                <p className="text-sm">
                  Your experience could help someone else
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {myStories.map((s) => renderStoryCard(s, true))}
              </div>
            )
          ) : stories.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <Users className="w-12 h-12 mx-auto mb-3 text-neutral-700" />
              <p className="text-lg mb-1">No stories yet</p>
              <p className="text-sm">Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {stories.map((s) => renderStoryCard(s))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
