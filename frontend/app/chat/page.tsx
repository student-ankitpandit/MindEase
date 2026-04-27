"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { apiFetch } from "@/app/lib/api";
import {
  Send, Plus, MessageCircle, Trash2, User, Bot, Mic, MicOff,
  Volume2, VolumeX, FileText, X, ChevronDown, ChevronUp, Sparkles, Globe, Phone, PhoneOff
} from "lucide-react";
import ReactMarkdown from "react-markdown";

interface ConvItem { id: string; title: string; externalId: string; createdAt: string; }
interface Message { id: string; content: string; role: string; createdAt: string; }
interface Summary { summary: string; keyTakeaways: string[]; actionItems: string[]; }

export default function ChatPage() {
  const [conversations, setConversations] = useState<ConvItem[]>([]);
  const [activeConvId, setActiveConvId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sideLoading, setSideLoading] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  // Voice state
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [speechLang, setSpeechLang] = useState("en-US");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Summary state
  const [showSummary, setShowSummary] = useState(false);
  const [summaryData, setSummaryData] = useState<Summary | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  // Voice call mode
  const [voiceCallMode, setVoiceCallMode] = useState(false);
  const [callPhase, setCallPhase] = useState<"idle" | "listening" | "thinking" | "speaking">("idle");
  const voiceCallRef = useRef(false);
  const callInputRef = useRef("");

  const languages = [
    { code: "en-US", label: "English", flag: "🇺🇸" },
    { code: "hi-IN", label: "Hindi", flag: "🇮🇳" },
    { code: "en-IN", label: "English (India)", flag: "🇮🇳" },
  ];

  useEffect(() => {
    apiFetch("/chatWithMe/conversations")
      .then((res) => setConversations(res.conversations || []))
      .catch(() => {})
      .finally(() => setSideLoading(false));
    synthRef.current = window.speechSynthesis;
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  // Initialize speech recognition
  const manualStopRef = useRef(false);
  const silenceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const SILENCE_TIMEOUT = 7000; // 7 seconds of silence before auto-stop

  const clearSilenceTimer = () => {
    if (silenceTimerRef.current) { clearTimeout(silenceTimerRef.current); silenceTimerRef.current = null; }
  };

  const startSilenceTimer = () => {
    clearSilenceTimer();
    silenceTimerRef.current = setTimeout(() => {
      // Auto-stop after silence
      manualStopRef.current = true;
      recognitionRef.current?.stop();
      setIsListening(false);
    }, SILENCE_TIMEOUT);
  };

  const initRecognition = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = speechLang;

    recognition.onresult = (event: any) => {
      // Reset silence timer on every new speech detected
      startSilenceTimer();
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInput(transcript);
    };
    recognition.onerror = (e: any) => {
      if (e.error !== "no-speech") {
        clearSilenceTimer();
        setIsListening(false);
        manualStopRef.current = false;
      }
    };
    recognition.onend = () => {
      if (!manualStopRef.current) {
        try { recognition.start(); } catch { clearSilenceTimer(); setIsListening(false); }
      } else {
        clearSilenceTimer();
        setIsListening(false);
        manualStopRef.current = false;
      }
    };
    return recognition;
  }, [speechLang]);

  const toggleListening = () => {
    if (isListening) {
      manualStopRef.current = true;
      clearSilenceTimer();
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      manualStopRef.current = false;
      const recognition = initRecognition();
      if (!recognition) { alert("Voice input is not supported in your browser. Try Chrome."); return; }
      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
      startSilenceTimer(); // Start initial silence timer
    }
  };

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Text-to-speech for AI responses using ElevenLabs backend proxy
  const speakText = useCallback(async (text: string, onEnd?: () => void) => {
    try {
      const response = await fetch("http://localhost:8000/voice/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      if (!response.ok) throw new Error("Failed to fetch audio");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => { if (onEnd) onEnd(); };
      audio.onerror = () => { if (onEnd) onEnd(); };

      await audio.play();
    } catch (err) {
      console.error("Error playing audio:", err);
      if (onEnd) onEnd();
    }
  }, []);

  const speakTextIfEnabled = useCallback((text: string) => {
    if (voiceEnabled) speakText(text);
  }, [voiceEnabled, speakText]);

  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const loadConversation = async (externalId: string) => {
    setActiveConvId(externalId);
    setMessages([]);
    setShowSummary(false);
    setSummaryData(null);
    try {
      const data = await apiFetch(`/chatWithMe/conversations/${externalId}`);
      setMessages(data.conversation?.messages || []);
    } catch (e) { console.error(e); }
  };

  const startNewChat = () => {
    setActiveConvId(null);
    setMessages([]);
    setShowSummary(false);
    setSummaryData(null);
    stopSpeaking();
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setLoading(true);
    stopSpeaking();

    const tempUserMsg: Message = { id: `temp-${Date.now()}`, content: userMsg, role: "user", createdAt: new Date().toISOString() };
    setMessages((prev) => [...prev, tempUserMsg]);

    try {
      let data;
      if (activeConvId) {
        data = await apiFetch(`/chatWithMe/conversations/${activeConvId}/messages`, {
          method: "POST", body: JSON.stringify({ question: userMsg }),
        });
      } else {
        data = await apiFetch("/chatWithMe/chat", {
          method: "POST", body: JSON.stringify({ question: userMsg }),
        });
        setActiveConvId(data.conversationId);
        apiFetch("/chatWithMe/conversations").then((r) => setConversations(r.conversations || [])).catch(() => {});
      }

      const aiResponse = data.res?.response || "Sorry, I couldn't generate a response.";
      const aiMsg: Message = { id: `ai-${Date.now()}`, content: aiResponse, role: "assistant", createdAt: new Date().toISOString() };
      setMessages((prev) => [...prev, aiMsg]);

      // Speak the response if voice is enabled
      speakTextIfEnabled(aiResponse);
    } catch (e: any) {
      const errMsg: Message = { id: `err-${Date.now()}`, content: "Failed to get response. Please try again.", role: "assistant", createdAt: new Date().toISOString() };
      setMessages((prev) => [...prev, errMsg]);
    } finally { setLoading(false); }
  };

  const deleteChat = async (execId: string) => {
    try {
      await apiFetch(`/chatWithMe/delete-chat/${execId}`, { method: "DELETE" });
      setConversations(conversations.filter((c) => c.id !== execId));
      if (conversations.find((c) => c.id === execId)?.externalId === activeConvId) {
        setActiveConvId(null); setMessages([]);
      }
    } catch (e) { console.error(e); }
  };

  const generateSummary = async () => {
    if (!activeConvId || summaryLoading) return;
    setSummaryLoading(true);
    setShowSummary(true);
    try {
      const data = await apiFetch(`/chatWithMe/conversations/${activeConvId}/summarize`, { method: "POST" });
      setSummaryData({ summary: data.summary, keyTakeaways: data.keyTakeaways || [], actionItems: data.actionItems || [] });
    } catch (e) { console.error(e); setSummaryData(null); }
    finally { setSummaryLoading(false); }
  };

  // === VOICE CALL MODE ===
  const startVoiceCall = () => {
    setVoiceCallMode(true);
    voiceCallRef.current = true;
    setCallPhase("listening");
    callInputRef.current = "";
    setInput("");
    // Start listening
    manualStopRef.current = false;
    const recognition = initRecognition();
    if (!recognition) { alert("Voice not supported. Try Chrome."); setVoiceCallMode(false); return; }
    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
    startSilenceTimer();
  };

  const endVoiceCall = () => {
    voiceCallRef.current = false;
    setVoiceCallMode(false);
    setCallPhase("idle");
    manualStopRef.current = true;
    clearSilenceTimer();
    recognitionRef.current?.stop();
    setIsListening(false);
    stopSpeaking();
  };

  // Voice call: send message and speak response, then auto-listen again
  const voiceCallSend = async (text: string) => {
    if (!text.trim() || !voiceCallRef.current) return;
    setCallPhase("thinking");
    setInput("");

    const tempUserMsg: Message = { id: `temp-${Date.now()}`, content: text, role: "user", createdAt: new Date().toISOString() };
    setMessages((prev) => [...prev, tempUserMsg]);

    try {
      let data;
      if (activeConvId) {
        data = await apiFetch(`/chatWithMe/conversations/${activeConvId}/messages`, {
          method: "POST", body: JSON.stringify({ question: text }),
        });
      } else {
        data = await apiFetch("/chatWithMe/chat", {
          method: "POST", body: JSON.stringify({ question: text }),
        });
        setActiveConvId(data.conversationId);
        apiFetch("/chatWithMe/conversations").then((r) => setConversations(r.conversations || [])).catch(() => {});
      }

      const aiResponse = data.res?.response || "Sorry, I couldn't generate a response.";
      const aiMsg: Message = { id: `ai-${Date.now()}`, content: aiResponse, role: "assistant", createdAt: new Date().toISOString() };
      setMessages((prev) => [...prev, aiMsg]);

      if (!voiceCallRef.current) return; // Call ended while waiting

      // Speak response, then auto-listen again
      setCallPhase("speaking");
      speakText(aiResponse, () => {
        if (!voiceCallRef.current) return;
        // After speaking, start listening again
        setCallPhase("listening");
        callInputRef.current = "";
        setInput("");
        manualStopRef.current = false;
        const recognition = initRecognition();
        if (recognition) {
          recognitionRef.current = recognition;
          recognition.start();
          setIsListening(true);
          startSilenceTimer();
        }
      });
    } catch (e) {
      if (voiceCallRef.current) {
        setCallPhase("listening");
        manualStopRef.current = false;
        const recognition = initRecognition();
        if (recognition) { recognitionRef.current = recognition; recognition.start(); setIsListening(true); startSilenceTimer(); }
      }
    }
  };

  // Override silence timer auto-stop behavior for voice call mode
  useEffect(() => {
    if (!isListening && voiceCallRef.current && callPhase === "listening") {
      // Silence timer ended — send whatever we have
      const currentInput = callInputRef.current;
      if (currentInput.trim()) {
        voiceCallSend(currentInput);
      } else {
        // No speech detected, restart listening
        manualStopRef.current = false;
        const recognition = initRecognition();
        if (recognition) { recognitionRef.current = recognition; recognition.start(); setIsListening(true); startSilenceTimer(); }
      }
    }
  }, [isListening]);

  // Track input changes for voice call
  useEffect(() => { callInputRef.current = input; }, [input]);

  return (
    <div className="flex flex-col h-screen">
      {/* Voice Call Overlay — redirects to /voice */}
      {voiceCallMode && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <div className="text-center">
            <p className="text-neutral-400 mb-4">Redirecting to Voice Conversation...</p>
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
          <script dangerouslySetInnerHTML={{ __html: `window.location.href = '/voice';` }} />
        </div>
      )}

      {/* Top Header */}
      <div className="h-14 border-b border-neutral-800 bg-neutral-950 flex items-center px-6 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-purple-400" />
          <h1 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">MindEase AI</h1>
          <span className="text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded-full ml-1">Voice + Text</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          {/* Voice Output Toggle */}
          <button onClick={() => { setVoiceEnabled(!voiceEnabled); if (voiceEnabled) stopSpeaking(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition cursor-pointer ${
              voiceEnabled ? "bg-green-600/20 text-green-400 border border-green-500/30" : "bg-neutral-800 text-neutral-500 border border-neutral-700"}`}
            title={voiceEnabled ? "Disable voice responses" : "Enable voice responses"}>
            {voiceEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            {voiceEnabled ? "Voice On" : "Voice Off"}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 transition cursor-pointer">
              <Globe className="w-3.5 h-3.5" />
              {languages.find((l) => l.code === speechLang)?.flag}
            </button>
            {showLangMenu && (
              <div className="absolute right-0 top-full mt-1 bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden z-50 shadow-xl">
                {languages.map((lang) => (
                  <button key={lang.code} onClick={() => { setSpeechLang(lang.code); setShowLangMenu(false); }}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-neutral-800 transition cursor-pointer ${
                      speechLang === lang.code ? "text-blue-400" : "text-neutral-300"}`}>
                    <span>{lang.flag}</span> {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Voice Conversation Link */}
          <a href="/voice"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-purple-600/20 text-purple-400 border border-purple-500/30 hover:bg-purple-600/30 transition">
            <Mic className="w-3.5 h-3.5" /> Voice Talk
          </a>

          {/* Summary Button */}
          {activeConvId && messages.length >= 2 && (
            <button onClick={generateSummary} disabled={summaryLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 disabled:opacity-50 transition cursor-pointer">
              <FileText className="w-3.5 h-3.5" /> Summarize
            </button>
          )}

          <div className="h-5 w-px bg-neutral-700" />
          <a href="/dashboard" className="text-sm text-neutral-400 hover:text-white transition">Dashboard</a>
          <a href="/" className="text-sm text-neutral-400 hover:text-white transition">Home</a>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-72 border-r border-neutral-800/50 bg-neutral-950/40 backdrop-blur-2xl flex flex-col z-10 relative">
          <div className="p-5 border-b border-neutral-800/50">
            <button onClick={startNewChat}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-medium">
              <Plus size={18} /> New Chat
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
            {sideLoading ? (
              <div className="flex justify-center py-8"><div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" /></div>
            ) : conversations.length === 0 ? (
              <p className="text-neutral-500 text-sm text-center py-8">No conversations yet</p>
            ) : (
              conversations.map((conv) => (
                <div key={conv.id}
                  className={`group flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeConvId === conv.externalId 
                      ? "bg-gradient-to-r from-blue-600/20 to-purple-600/10 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-blue-500/10" 
                      : "text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-200 border border-transparent"}`}
                  onClick={() => conv.externalId && loadConversation(conv.externalId)}>
                  <MessageCircle size={16} className={`flex-shrink-0 transition-colors ${activeConvId === conv.externalId ? "text-blue-400" : "text-neutral-500 group-hover:text-neutral-300"}`} />
                  <span className="text-sm truncate flex-1 font-medium">{conv.title}</span>
                  <button onClick={(e) => { e.stopPropagation(); deleteChat(conv.id); }}
                    className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/20 rounded-lg transition-all duration-300 cursor-pointer">
                    <Trash2 size={14} className="text-red-400 hover:text-red-300" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative">
          {/* Summary Panel */}
          {showSummary && (
            <div className="absolute inset-0 bg-black/80 z-40 flex items-center justify-center p-4" onClick={() => setShowSummary(false)}>
              <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-purple-400 flex items-center gap-2"><Sparkles className="w-5 h-5" /> Conversation Summary</h2>
                  <button onClick={() => setShowSummary(false)} className="p-1 hover:bg-neutral-700 rounded cursor-pointer"><X size={18} className="text-neutral-400" /></button>
                </div>
                {summaryLoading ? (
                  <div className="flex flex-col items-center py-8">
                    <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-neutral-400 text-sm mt-3">Generating summary...</p>
                  </div>
                ) : summaryData ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-neutral-300 mb-2">Overview</h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">{summaryData.summary}</p>
                    </div>
                    {summaryData.keyTakeaways.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-teal-400 mb-2">💡 Key Takeaways</h3>
                        <ul className="space-y-1.5">
                          {summaryData.keyTakeaways.map((t, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                              <span className="text-teal-400 mt-0.5">•</span> {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {summaryData.actionItems.length > 0 && (
                      <div>
                        <h3 className="text-sm font-medium text-blue-400 mb-2">📋 Action Items</h3>
                        <ul className="space-y-1.5">
                          {summaryData.actionItems.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                              <span className="text-blue-400 mt-0.5">☐</span> {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-neutral-500 text-sm text-center py-4">Could not generate summary.</p>
                )}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="max-w-3xl mx-auto space-y-4">
              {messages.length === 0 && !loading && (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="relative mb-6">
                    <Bot className="w-16 h-16 text-neutral-700" />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <Mic className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-400 mb-2">MindEase AI</h2>
                  <p className="text-neutral-600 max-w-sm mb-4">Ask me anything about managing stress, academics, relationships, or personal growth.</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-xs bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-full text-neutral-400">🎤 Voice input supported</span>
                    <span className="text-xs bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-full text-neutral-400">🔊 Voice responses available</span>
                    <span className="text-xs bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-full text-neutral-400">🇮🇳 Hindi supported</span>
                  </div>
                </div>
              )}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-blue-600" : "bg-purple-600"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`max-w-xl px-4 py-3 rounded-2xl group relative ${
                    msg.role === "user" ? "bg-blue-600 text-white rounded-tr-sm" : "bg-neutral-800 text-neutral-100 border border-neutral-700 rounded-tl-sm"}`}>
                    <div className={`text-sm leading-relaxed space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>h3]:font-bold [&>h3]:text-base ${msg.role === 'user' ? '[&>p]:whitespace-pre-wrap' : ''}`}>
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                    {msg.role === "assistant" && (
                      <button onClick={() => speakText(msg.content)}
                        className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-100 bg-neutral-700 hover:bg-neutral-600 rounded-full p-1.5 transition cursor-pointer"
                        title="Read aloud">
                        <Volume2 className="w-3 h-3 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>
                  <div className="bg-neutral-800 border border-neutral-700 px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-neutral-800 px-4 py-4">
            <div className="max-w-3xl mx-auto flex gap-2 items-center">
              <button onClick={toggleListening}
                className={`flex-shrink-0 p-3 rounded-full transition cursor-pointer ${
                  isListening
                    ? "bg-red-600 text-white animate-pulse"
                    : "bg-neutral-800 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`}
                title={isListening ? "Stop listening" : "Start voice input"}>
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>

              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder={isListening ? "Listening..." : "Type or speak your message..."}
                disabled={loading}
                className={`flex-1 px-4 py-3 bg-neutral-800 border text-white placeholder-neutral-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${
                  isListening ? "border-red-500/50 ring-1 ring-red-500/30" : "border-neutral-700"}`} />

              <button onClick={sendMessage} disabled={!input.trim() || loading}
                className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer">
                <Send className="w-5 h-5" />
              </button>
            </div>
            {isListening && (
              <div className="max-w-3xl mx-auto mt-2 flex items-center justify-center gap-2">
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(i => (
                    <div key={i} className="w-1 bg-red-400 rounded-full animate-pulse" style={{ height: `${12 + Math.random() * 16}px`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <span className="text-xs text-red-400">Listening in {languages.find(l => l.code === speechLang)?.label}...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
