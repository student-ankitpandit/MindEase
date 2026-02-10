"use client";
import { useState } from "react";
const BACKEND_URL = "http://localhost:8000";

const moods = [
  { label: "Happy", emoji: "😄" },
  { label: "Calm", emoji: "🙂" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😔" },
  { label: "Stressed", emoji: "😣" },
  { label: "Angry", emoji: "😡" },
];

export default function MoodInputPage() {
  const [selectedMood, setSelectedMood] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/moodStatus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          moodType: selectedMood,
        }),
      });

      const data = await res.json();
      console.log("Mood saved:", data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-4 py-10">
      <div className="max-w-xl w-full border border-gray-800 shadow-xl rounded-2xl p-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-3 text-white">
          How Are You Feeling Today?
        </h1>
        <p className="text-gray-400 mb-6">
          Tell us about your day. Your mood helps us understand and support you better.
        </p>

        {/* Text Input */}
        <label className="block text-gray-300 mb-2">
          Describe your day:
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 bg-black border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500
          focus:ring-2 focus:ring-blue-500 outline-none"
          rows={4}
          placeholder="Write anything... even one sentence is okay."
        />

        {/* Mood Selector */}
        <p className="mt-5 text-gray-300">Select your mood:</p>

        <div className="flex gap-3 flex-wrap mt-3">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className={`px-4 py-2 rounded-xl border transition text-md
                ${
                  selectedMood === m.label
                    ? "bg-blue-600 border-blue-700 text-white"
                    : "bg-black border-gray-700 text-gray-300 hover:bg-gray-900"
                }`}
            >
              {m.emoji} {m.label}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          Save Mood
        </button>
      </div>
    </div>
  );
}
