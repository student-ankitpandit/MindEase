"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! How can I help you to improve your mental health?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const BACKEND_URL = "http://localhost:8000";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // // Simulate AI response
    // setTimeout(() => {
    //   const aiMessage = {
    //     id: Date.now() + 1,
    //     role: 'assistant',
    //     content: `I received your message: "${userMessage.content}". This is a demo response. In a real application, this would connect to an AI API.`
    //   };
    //   setMessages(prev => [...prev, aiMessage]);
    //   setIsLoading(false);
    // }, 1000);

    try {
      const response = await fetch(`${BACKEND_URL}/chatWithMe/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ message: userMessage.content }),
      });

      const data = await response.json();
      console.log("R", data);

      if (data.success) {
        const aiMessage = {
          role: "assistant",
          content: data.message,
          id: Date.now() + 1,
        };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        console.log("Error:", data.message);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 shadow-lg">
        {/* <h1 className="text-2xl font-bold text-white">AI Chat Assistant</h1> */}
        {/* <p className="text-sm text-slate-400">Powered by Youth Mental Wellness</p> */}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === "user" ? "bg-blue-500" : "bg-purple-500"
                }`}
              >
                {message.role === "user" ? (
                  <User className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`flex-1 max-w-xl px-4 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-sm"
                    : "bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg- slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-black border-t border-slate-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim() || isLoading}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
