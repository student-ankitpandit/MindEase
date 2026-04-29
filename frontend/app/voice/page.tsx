"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { apiFetch } from "@/app/lib/api";
import { Mic, X, Globe, ArrowLeft } from "lucide-react";

type Phase = "idle" | "listening" | "thinking" | "speaking";

type SpeechRecognitionResultItem = { 0: { transcript: string } };
type SpeechRecognitionEventLike = {
  results: ArrayLike<SpeechRecognitionResultItem>;
};
type SpeechRecognitionErrorEventLike = { error: string };
type SpeechRecognitionLike = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEventLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;
type SpeechRecognitionWindow = Window & {
  SpeechRecognition?: SpeechRecognitionCtor;
  webkitSpeechRecognition?: SpeechRecognitionCtor;
};

interface ChatResponse {
  res?: { response?: string };
  conversationId?: string;
}

const languages = [
  { code: "en-US", label: "English", flag: "🇺🇸" },
  { code: "hi-IN", label: "Hindi", flag: "🇮🇳" },
  { code: "en-IN", label: "English (India)", flag: "🇮🇳" },
];

export default function VoicePage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [transcript, setTranscript] = useState("");
  const [aiText, setAiText] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [speechLang, setSpeechLang] = useState("en-US");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [callActive, setCallActive] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const callActiveRef = useRef(false);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transcriptRef = useRef("");
  const conversationIdRef = useRef<string | null>(null);
  const sendToAIRef = useRef<(text: string) => void>(() => {});
  const startListeningRef = useRef<() => void>(() => {});

  const SILENCE_TIMEOUT = 5000;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    conversationIdRef.current = conversationId;
  }, [conversationId]);

  const clearSilenceTimer = useCallback(() => {
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
  }, []);
  const stopRecognition = useCallback(() => {
    try {
      recognitionRef.current?.stop();
    } catch {}
    recognitionRef.current = null;
  }, []);
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const speak = useCallback(async (text: string, onDone: () => void) => {
    try {
      const response = await fetch("http://localhost:8000/voice/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        onDone();
      };

      audio.onerror = () => {
        onDone();
      };

      await audio.play();
    } catch (err) {
      console.error("Error playing audio:", err);
      onDone(); // Ensure conversation continues even if audio fails
    }
  }, []);

  const startListening = useCallback(() => {
    if (!callActiveRef.current) return;
    setPhase("listening");
    setTranscript("");
    setAiText("");
    transcriptRef.current = "";

    const SpeechRecognitionCtor =
      (window as SpeechRecognitionWindow).SpeechRecognition ??
      (window as SpeechRecognitionWindow).webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) return;
    const r = new SpeechRecognitionCtor();
    r.continuous = true;
    r.interimResults = true;
    r.lang = speechLang;

    r.onresult = (e) => {
      let t = "";
      for (let i = 0; i < e.results.length; i++)
        t += e.results[i][0].transcript;
      setTranscript(t);
      transcriptRef.current = t;
      clearSilenceTimer();
      silenceTimerRef.current = setTimeout(() => {
        stopRecognition();
        const ft = transcriptRef.current.trim();
        if (ft && callActiveRef.current) sendToAIRef.current(ft);
        else if (callActiveRef.current) startListening();
      }, SILENCE_TIMEOUT);
    };
    r.onerror = (e) => {
      if (e.error === "no-speech" && callActiveRef.current) {
        stopRecognition();
        startListening();
      }
    };
    r.onend = () => {
      if (callActiveRef.current && !transcriptRef.current.trim()) {
        try {
          const n = new SpeechRecognitionCtor();
          n.continuous = true;
          n.interimResults = true;
          n.lang = speechLang;
          n.onresult = r.onresult;
          n.onerror = r.onerror;
          n.onend = r.onend;
          recognitionRef.current = n;
          n.start();
        } catch {}
      }
    };
    recognitionRef.current = r;
    r.start();
    clearSilenceTimer();
    silenceTimerRef.current = setTimeout(() => {
      stopRecognition();
      if (callActiveRef.current) startListening();
    }, SILENCE_TIMEOUT);
  }, [clearSilenceTimer, speechLang, stopRecognition]);

  const sendToAI = useCallback(
    async (text: string) => {
      if (!callActiveRef.current) return;
      setPhase("thinking");
      setTranscript("");
      try {
        let data: ChatResponse;
        const cid = conversationIdRef.current;
        if (cid) {
          data = await apiFetch<ChatResponse>(
            `/chatWithMe/conversations/${cid}/messages`,
            { method: "POST", body: JSON.stringify({ question: text }) },
          );
        } else {
          data = await apiFetch<ChatResponse>("/chatWithMe/chat", {
            method: "POST",
            body: JSON.stringify({ question: text }),
          });
          setConversationId(data.conversationId ?? null);
        }
        const resp = data.res?.response || "Sorry, I couldn't understand that.";
        if (!callActiveRef.current) return;
        setPhase("speaking");
        setAiText(resp);
        speak(resp, () => {
          if (callActiveRef.current) startListeningRef.current();
        });
      } catch {
        if (callActiveRef.current) {
          setPhase("speaking");
          setAiText("I had trouble with that. Let me try again.");
          speak("I had trouble with that.", () => {
            if (callActiveRef.current) startListeningRef.current();
          });
        }
      }
    },
    [speak],
  );

  useEffect(() => {
    sendToAIRef.current = sendToAI;
  }, [sendToAI]);
  useEffect(() => {
    startListeningRef.current = startListening;
  }, [startListening]);

  const startConversation = () => {
    setCallActive(true);
    callActiveRef.current = true;
    setTranscript("");
    setAiText("");
    setConversationId(null);
    const g = "Hi there! I'm MindEase AI. How are you feeling today?";
    setPhase("speaking");
    setAiText(g);
    speak(g, () => {
      if (callActiveRef.current) startListening();
    });
  };

  const endConversation = () => {
    callActiveRef.current = false;
    setCallActive(false);
    setPhase("idle");
    clearSilenceTimer();
    stopRecognition();
    stopSpeaking();
    setTranscript("");
    setAiText("");
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden select-none">
      {/* Top controls */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5">
        <Link
          href="/chat"
          className="text-neutral-600 hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="text-neutral-600 hover:text-white transition cursor-pointer text-sm flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4" />{" "}
            {languages.find((l) => l.code === speechLang)?.flag}
          </button>
          {showLangMenu && (
            <div className="absolute right-0 top-full mt-2 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl min-w-[160px]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSpeechLang(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-neutral-800 transition cursor-pointer ${speechLang === lang.code ? "text-purple-400" : "text-neutral-400"}`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main content — centered orb */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Ambient glow behind orb */}
        {callActive && (
          <div
            className={`absolute w-80 h-80 rounded-full blur-[100px] transition-all duration-1000 ${
              phase === "listening"
                ? "bg-blue-600/15"
                : phase === "thinking"
                  ? "bg-amber-500/10"
                  : phase === "speaking"
                    ? "bg-purple-600/15"
                    : "bg-neutral-800/10"
            }`}
          />
        )}

        {/* The Orb */}
        <div
          className="relative z-10"
          onClick={!callActive ? startConversation : undefined}
          style={{ cursor: !callActive ? "pointer" : "default" }}
        >
          {/* Outer ring */}
          <div
            className={`w-52 h-52 rounded-full flex items-center justify-center transition-all duration-700 ${
              !callActive
                ? "bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
                : phase === "listening"
                  ? "bg-blue-950/40 border-2 border-blue-500/50 shadow-[0_0_80px_rgba(59,130,246,0.15)]"
                  : phase === "thinking"
                    ? "bg-amber-950/30 border-2 border-amber-500/40 shadow-[0_0_80px_rgba(245,158,11,0.1)]"
                    : phase === "speaking"
                      ? "bg-purple-950/40 border-2 border-purple-500/50 shadow-[0_0_80px_rgba(168,85,247,0.15)]"
                      : "bg-neutral-900/50 border border-neutral-700"
            }`}
          >
            {/* Inner orb */}
            <div
              className={`w-36 h-36 rounded-full flex items-center justify-center transition-all duration-700 ${
                !callActive
                  ? "bg-gradient-to-br from-purple-800/20 to-blue-800/20"
                  : phase === "listening"
                    ? "bg-gradient-to-br from-blue-600/20 to-cyan-600/20"
                    : phase === "thinking"
                      ? "bg-gradient-to-br from-amber-600/15 to-orange-600/15"
                      : phase === "speaking"
                        ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
                        : "bg-neutral-800/30"
              }`}
            >
              {/* Core */}
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                  !callActive
                    ? "bg-gradient-to-br from-purple-600/30 to-blue-600/30"
                    : phase === "listening"
                      ? "bg-blue-500/20 animate-pulse"
                      : phase === "thinking"
                        ? "bg-amber-500/15"
                        : phase === "speaking"
                          ? "bg-purple-500/20 animate-pulse"
                          : "bg-neutral-700/30"
                }`}
              >
                {!callActive ? (
                  <Mic className="w-8 h-8 text-purple-400/70" />
                ) : phase === "thinking" ? (
                  <div className="w-8 h-8 border-2 border-amber-400/60 border-t-transparent rounded-full animate-spin" />
                ) : (
                  /* Animated bars for listening/speaking */
                  <div className="flex items-center gap-[3px] h-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-[3px] rounded-full transition-colors duration-300 ${
                          phase === "listening"
                            ? "bg-blue-400"
                            : "bg-purple-400"
                        }`}
                        style={{
                          height:
                            phase === "listening" || phase === "speaking"
                              ? `${8 + Math.sin(Date.now() / 200 + i) * 12 + Math.random() * 8}px`
                              : "4px",
                          animation:
                            phase === "listening" || phase === "speaking"
                              ? `pulse ${0.4 + i * 0.1}s ease-in-out infinite alternate`
                              : "none",
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ripple rings when active */}
          {callActive && (phase === "listening" || phase === "speaking") && (
            <>
              <div
                className={`absolute inset-0 rounded-full border animate-ping ${
                  phase === "listening"
                    ? "border-blue-500/10"
                    : "border-purple-500/10"
                }`}
                style={{ animationDuration: "2s" }}
              />
              <div
                className={`absolute -inset-4 rounded-full border animate-ping ${
                  phase === "listening"
                    ? "border-blue-500/5"
                    : "border-purple-500/5"
                }`}
                style={{ animationDuration: "3s" }}
              />
            </>
          )}
        </div>

        {/* Status text */}
        <div className="mt-8 text-center z-10">
          {!callActive ? (
            <>
              <p className="text-neutral-500 text-sm">
                Tap to start a voice conversation
              </p>
            </>
          ) : (
            <>
              <p
                className={`text-base font-medium transition-colors duration-300 ${
                  phase === "listening"
                    ? "text-blue-400/80"
                    : phase === "thinking"
                      ? "text-amber-400/80"
                      : phase === "speaking"
                        ? "text-purple-400/80"
                        : "text-neutral-500"
                }`}
              >
                {phase === "listening"
                  ? "Listening"
                  : phase === "thinking"
                    ? "Thinking"
                    : phase === "speaking"
                      ? "Speaking"
                      : ""}
              </p>
            </>
          )}
        </div>

        {/* Transcript / AI response — subtle, at the bottom */}
        {callActive && (
          <div className="absolute bottom-32 left-0 right-0 px-8">
            <div className="max-w-lg mx-auto text-center">
              {phase === "listening" && transcript && (
                <p className="text-sm text-neutral-400 leading-relaxed animate-fade-in">
                  {transcript}
                </p>
              )}
              {phase === "speaking" && aiText && (
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-4">
                  {aiText}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom area */}
      <div className="absolute bottom-0 left-0 right-0 pb-8 flex justify-center z-20">
        {callActive && (
          <button
            onClick={endConversation}
            className="w-14 h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex items-center justify-center transition cursor-pointer group"
          >
            <X className="w-6 h-6 text-neutral-400 group-hover:text-white transition" />
          </button>
        )}
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
