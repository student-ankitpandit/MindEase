"use client";

import { useState, useEffect } from "react";
import { Save, Edit2, Trash2, Plus, Share2, Eye, Lock, X } from "lucide-react";

export default function JournalInterface() {
  const [journals, setJournals] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [currentJournal, setCurrentJournal] = useState({
    title: "",
    content: "",
    isPrivate: true
  });
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch journals from your API
  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const response = await fetch('/api/journals');
      const data = await response.json();
      setJournals(data);
    } catch (error) {
      console.error('Error fetching journals:', error);
    } finally {
      setLoading(false);
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
        // Update existing journal
        const response = await fetch(`/api/journals/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentJournal)
        });
        const updated = await response.json();
        setJournals(journals.map((j) => (j.id === editingId ? updated : j)));
        showSuccess("Journal updated successfully!");
      } else {
        // Create new journal
        const response = await fetch('/api/journals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentJournal)
        });
        const newJournal = await response.json();
        setJournals([newJournal, ...journals]);
        showSuccess("Journal saved successfully!");
      }

      // Reset form
      setCurrentJournal({ title: "", content: "", isPrivate: true });
      setIsWriting(false);
      setEditingId(null);
    } catch (error) {
      console.error('Error saving journal:', error);
      alert('Failed to save journal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (journal) => {
    setCurrentJournal({
      title: journal.title,
      content: journal.content,
      isPrivate: journal.isPrivate
    });
    setEditingId(journal.id);
    setIsWriting(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this journal entry?")) return;

    try {
      setLoading(true);
      await fetch(`/api/journals/${id}`, { method: 'DELETE' });
      setJournals(journals.filter((j) => j.id !== id));
      showSuccess("Journal deleted successfully!");
    } catch (error) {
      console.error('Error deleting journal:', error);
      alert('Failed to delete journal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (journal) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/journals/${journal.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...journal, isPrivate: !journal.isPrivate })
      });
      const updated = await response.json();
      setJournals(journals.map((j) => (j.id === journal.id ? updated : j)));
      showSuccess(updated.isPrivate ? "Journal set to private" : "Journal shared!");
    } catch (error) {
      console.error('Error updating journal:', error);
    } finally {
      setLoading(false);
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const filteredJournals = journals.filter((j) => {
    if (filter === "private") return j.isPrivate;
    if (filter === "shared") return !j.isPrivate;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white p-4 md:p-8">
      {/* Success Message */}
      {successMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right">
          {successMessage}
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-center">Processing...</p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Journal
          </h1>
          <p className="text-neutral-400">
            Share your thoughts and feelings in a safe space
          </p>
        </div>

        {/* New Entry Button */}
        {!isWriting && (
          <button
            onClick={() => setIsWriting(true)}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 animate-fade-in cursor-pointer"
          >
            <Plus size={20} />
            New Journal Entry
          </button>
        )}

        {/* Writing Interface */}
        {isWriting && (
          <div className="bg-neutral-800 rounded-xl p-6 mb-8 border border-neutral-700 shadow-xl animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {editingId ? "Edit Entry" : "New Entry"}
              </h2>
              <button
                onClick={() => {
                  setIsWriting(false);
                  setEditingId(null);
                  setCurrentJournal({ title: "", content: "", isPrivate: true });
                }}
                className="p-2 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <input
              type="text"
              placeholder="Title your thoughts..."
              value={currentJournal.title}
              onChange={(e) =>
                setCurrentJournal({ ...currentJournal, title: e.target.value })
              }
              className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg mb-4 border border-neutral-600 focus:border-blue-500 focus:outline-none transition-all"
            />

            <textarea
              placeholder="Write your thoughts here... Let it all out, this is your safe space."
              value={currentJournal.content}
              onChange={(e) =>
                setCurrentJournal({ ...currentJournal, content: e.target.value })
              }
              className="w-full bg-neutral-900 text-white px-4 py-3 rounded-lg mb-4 border border-neutral-600 focus:border-blue-500 focus:outline-none min-h-[300px] resize-y transition-all"
            />

            {/* Privacy Toggle */}
            <div className="mb-4 flex items-center gap-3">
              <button
                onClick={() =>
                  setCurrentJournal({
                    ...currentJournal,
                    isPrivate: !currentJournal.isPrivate
                  })
                }
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer ${
                  currentJournal.isPrivate
                    ? "bg-neutral-700 hover:bg-neutral-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {currentJournal.isPrivate ? (
                  <>
                    <Lock size={16} />
                    Private
                  </>
                ) : (
                  <>
                    <Share2 size={16} />
                    Shared
                  </>
                )}
              </button>
              <span className="text-sm text-neutral-400">
                {currentJournal.isPrivate
                  ? "Only you can see this"
                  : "Shared with MindEase community"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer"
              >
                <Save size={18} />
                Save Entry
              </button>
              <button
                onClick={() => {
                  setIsWriting(false);
                  setEditingId(null);
                  setCurrentJournal({ title: "", content: "", isPrivate: true });
                }}
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6 animate-fade-in">
          {["all", "private", "shared"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize transition-all transform hover:scale-105 cursor-pointer ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              {f} ({f === "all" ? journals.length : journals.filter(j => 
                f === "private" ? j.isPrivate : !j.isPrivate
              ).length})
            </button>
          ))}
        </div>

        {/* Journal Entries */}
        <div className="grid gap-4">
          {filteredJournals.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 animate-fade-in">
              <p className="text-xl mb-2">No journal entries yet</p>
              <p className="text-sm">
                Start writing to track your thoughts and feelings
              </p>
            </div>
          ) : (
            filteredJournals.map((journal, index) => (
              <div
                key={journal.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-neutral-600 transition-all hover:shadow-lg hover:scale-[1.02] animate-fade-in-up"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{journal.title}</h3>
                      {journal.isPrivate ? (
                        <Lock size={16} className="text-neutral-500" />
                      ) : (
                        <Share2 size={16} className="text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-neutral-400">
                      {new Date(journal.createdAt || journal.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(journal)}
                      className="p-2 bg-neutral-700 hover:bg-neutral-600 rounded-lg transition-all transform hover:scale-110 cursor-pointer"
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleShare(journal)}
                      className={`p-2 rounded-lg transition-all transform hover:scale-110 cursor-pointer ${
                        journal.isPrivate
                          ? "bg-neutral-700 hover:bg-green-600"
                          : "bg-green-600 hover:bg-neutral-700"
                      }`}
                      title={journal.isPrivate ? "Make Shared" : "Make Private"}
                    >
                      {journal.isPrivate ? (
                        <Eye size={18} />
                      ) : (
                        <Lock size={18} />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(journal.id)}
                      className="p-2 bg-neutral-700 hover:bg-red-600 rounded-lg transition-all transform hover:scale-110 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-neutral-300 whitespace-pre-wrap">
                  {journal.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}