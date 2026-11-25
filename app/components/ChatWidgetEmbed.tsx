"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaMessage, FaXmark } from "react-icons/fa6";
import { io } from "socket.io-client";
import { useLocation } from "@/app/context/LocationContext";

type Language = "en" | "hi";

interface ChatReply {
  type: "faq" | "category" | "lead" | "support" | "menu";
  label: string;
  value?: string | number;
}

interface ChatMessage {
  id: string;
  role: "assistant" | "user" | "agent";
  text: string;
  replies?: ChatReply[];
}

interface ChatConfig {
  mode: "day" | "night";
  welcomeMessage: Record<Language, string>;
  menu: Array<{ id: string; en: string; hi: string }>;
}

interface Category {
  id: number;
  slug: string;
  name: Record<Language, string>;
}

export default function ChatWidgetEmbed() {
  const { selectedLocation, availableLocations } = useLocation();
  const pathname = usePathname();
  const routeLocation = pathname?.split("/").filter(Boolean)[0];
  const locationSlug = selectedLocation ?? (
    routeLocation && availableLocations.includes(routeLocation)
      ? routeLocation
      : "global"
  );
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [config, setConfig] = useState<ChatConfig | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sessionToken, setSessionToken] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [menu, setMenu] = useState<Category[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [pollError, setPollError] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const [agentTyping, setAgentTyping] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const agentTypingTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!open || initialized) return;
    let active = true;

    async function initialize() {
      setLoading(true);
      setError("");
      try {
        const [configResponse, categoriesResponse, sessionResponse] = await Promise.all([
          fetch("/api/chat/config", { cache: "no-store" }),
          fetch("/api/chat/faqs/categories", { cache: "no-store" }),
          fetch("/api/chat/sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ languageCode: "en", locationSlug }),
          }),
        ]);

        if (!configResponse.ok || !categoriesResponse.ok || !sessionResponse.ok) {
          throw new Error("Chat service is temporarily unavailable.");
        }

        const [configData, categoryData, sessionData] = await Promise.all([
          configResponse.json(),
          categoriesResponse.json(),
          sessionResponse.json(),
        ]);
        if (!active) return;

        setConfig(configData as ChatConfig);
        setCategories(categoryData.categories as Category[]);
        setSessionToken(sessionData.sessionToken as string);
        setMessages([
          {
            id: "welcome",
            role: "assistant",
            text: (configData as ChatConfig).welcomeMessage.en,
          },
        ]);
        setInitialized(true);
      } catch (initializeError) {
        if (active) {
          setError(
            initializeError instanceof Error
              ? initializeError.message
              : "Chat service is temporarily unavailable.",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void initialize();
    return () => {
      active = false;
    };
  }, [open, initialized, locationSlug]);

  useEffect(() => {
    const realtimeUrl = process.env.NEXT_PUBLIC_CHAT_REALTIME_URL;
    if (!open || config?.mode !== "day" || !sessionToken || !realtimeUrl) return;

    const socket = io(realtimeUrl, {
      auth: { sessionToken },
      reconnection: true,
      timeout: 5000,
    });
    socket.on("connect", () => setRealtimeConnected(true));
    socket.on("disconnect", () => {
      setRealtimeConnected(false);
      setAgentTyping(false);
    });
    socket.on("connect_error", () => setRealtimeConnected(false));
    socket.on("chat:agent-message", (event: unknown) => {
      if (!event || typeof event !== "object") return;
      const message = event as { id?: unknown; text?: unknown };
      if (typeof message.id !== "string" || typeof message.text !== "string") return;
      const id = message.id;
      const text = message.text;
      setAgentTyping(false);
      if (agentTypingTimer.current !== null) {
        window.clearTimeout(agentTypingTimer.current);
        agentTypingTimer.current = null;
      }
      setMessages((current) => current.some((item) => item.id === message.id)
        ? current
        : [...current, { id, role: "agent", text }]);
    });
    socket.on("agent:typing", (event: unknown) => {
      if (!event || typeof event !== "object" || typeof (event as { typing?: unknown }).typing !== "boolean") return;
      const typing = (event as { typing: boolean }).typing;
      setAgentTyping(typing);
      if (agentTypingTimer.current !== null) window.clearTimeout(agentTypingTimer.current);
      if (typing) {
        agentTypingTimer.current = window.setTimeout(() => {
          setAgentTyping(false);
          agentTypingTimer.current = null;
        }, 3000);
      }
    });

    return () => {
      socket.disconnect();
      if (agentTypingTimer.current !== null) {
        window.clearTimeout(agentTypingTimer.current);
        agentTypingTimer.current = null;
      }
    };
  }, [open, config?.mode, sessionToken]);

  useEffect(() => {
    if (!open || config?.mode !== "day" || !sessionToken) return;
    let active = true;
    let polling = false;

    async function checkForAgentReplies() {
      if (polling) return;
      polling = true;
      try {
        const response = await fetch("/api/chat/messages", {
          headers: { Authorization: `Bearer ${sessionToken}` },
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Agent replies are temporarily unavailable.");
        const data = await response.json() as { messages?: Array<{ id: string; author: string; text: string }> };
        if (!active) return;
        setPollError("");
        const agentMessages = (data.messages ?? [])
          .filter((message) => message.author === "agent")
          .map((message) => ({ id: message.id, role: "agent" as const, text: message.text }));
        setMessages((current) => {
          const currentIds = new Set(current.map((message) => message.id));
          const newMessages = agentMessages.filter((message) => !currentIds.has(message.id));
          if (newMessages.length) {
            setAgentTyping(false);
            if (agentTypingTimer.current !== null) {
              window.clearTimeout(agentTypingTimer.current);
              agentTypingTimer.current = null;
            }
            return [...current, ...newMessages];
          }
          return current;
        });
      } catch (pollingError) {
        if (active) {
          setPollError(pollingError instanceof Error ? pollingError.message : "Agent replies are unavailable.");
        }
      } finally {
        polling = false;
      }
    }

    void checkForAgentReplies();
    const timer = window.setInterval(
      () => void checkForAgentReplies(),
      realtimeConnected ? 15000 : 5000,
    );
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [open, config?.mode, sessionToken, realtimeConnected]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function addMessage(role: ChatMessage["role"], text: string, replies?: ChatReply[]) {
    setMessages((current) => [
      ...current,
      { id: `${Date.now()}-${Math.random()}`, role, text, replies },
    ]);
  }

  async function postMessage(input: { text: string; faqId?: number; categoryId?: number }) {
    if (!sessionToken) {
      setError(language === "hi" ? "चैट सत्र तैयार नहीं है।" : "Chat session is not ready.");
      return;
    }
    setLoading(true);
    setError("");
    addMessage("user", input.text);
    try {
      const response = await fetch("/api/chat/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, sessionToken, languageCode: language }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error("Your message could not be sent.");
      setPollError("");
      const result = data.response as {
        text: string;
        quickReplies: ChatReply[];
        relatedQuestions?: Array<{ id: number; question: string }>;
      };
      if (result.text) {
        addMessage("assistant", result.text, [
          ...result.quickReplies,
          ...(result.relatedQuestions ?? []).map((faq) => ({
            type: "faq" as const,
            label: faq.question,
            value: faq.id,
          })),
        ]);
      }
      if (data.queued === false) {
        setAgentTyping(true);
        if (agentTypingTimer.current !== null) window.clearTimeout(agentTypingTimer.current);
        agentTypingTimer.current = window.setTimeout(() => {
          setAgentTyping(false);
          agentTypingTimer.current = null;
        }, 30000);
      }
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "Your message could not be sent.");
    } finally {
      setLoading(false);
    }
  }

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    if (config) {
      setMessages((current) =>
        current.length === 1
          ? [{ ...current[0], text: config.welcomeMessage[nextLanguage] }]
          : current,
      );
    }
  }

  function selectReply(reply: ChatReply) {
    if (reply.type === "category" && typeof reply.value === "number") {
      void postMessage({ text: reply.label, categoryId: reply.value });
    } else if (reply.type === "faq" && typeof reply.value === "number") {
      void postMessage({ text: reply.label, faqId: reply.value });
    } else if (reply.type === "lead") {
      addMessage(
        "assistant",
        language === "hi"
          ? "पूछताछ भेजने के लिए नीचे यात्रा विवरण भरें और भेजें."
          : "To send an enquiry, enter your trip details and send it below.",
      );
    } else if (reply.type === "menu") {
      setMenu(categories);
    } else if (reply.type === "support") {
      void postMessage({
        text: language === "hi" ? "सहायता से बात करें" : "Talk to Support",
      });
    }
  }

  const isHindi = language === "hi";
  const activeMenu = config?.menu ?? [];

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open Urban Cruise chat"
          className="animate-chat-launcher fixed bottom-5 right-4 z-[70] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#087F35] text-white shadow-[0_10px_28px_rgba(8,127,53,0.35)] transition-transform hover:-translate-y-0.5 sm:right-6"
        >
          <FaMessage className="text-xl" aria-hidden="true" />
        </button>
      )}

      {open && (
        <section
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="urban-cruise-chat-title"
          className="animate-chat-widget-in fixed bottom-3 right-3 z-[70] flex h-[min(760px,calc(100dvh-24px))] w-[min(430px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-[#087F35]/20 bg-[#F8F8F4] shadow-[0_18px_60px_rgba(7,20,12,0.35)] sm:bottom-5 sm:right-5"
        >
          <header className="flex min-h-[76px] items-center justify-between rounded-t-2xl bg-[#111733] px-5 text-white">
            <div>
              <h2 id="urban-cruise-chat-title" className="text-base font-extrabold">Urban Cruise</h2>
              <p className="mt-1 text-xs text-white/75">
                {isHindi ? "सहायता और यात्रा पूछताछ" : "Support & vehicle enquiry"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="urban-chat-language" className="sr-only">Language</label>
              <select
                id="urban-chat-language"
                value={language}
                onChange={(event) => changeLanguage(event.target.value as Language)}
                className="h-9 rounded-md border border-white/50 bg-[#111733] px-2 text-xs text-white outline-none"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-9 w-9 place-items-center rounded-md text-white hover:bg-white/10"
              >
                <FaXmark aria-hidden="true" />
              </button>
            </div>
          </header>

          {loading && !messages.length ? (
            <div className="flex flex-1 items-center justify-center text-sm text-slate-600" role="status">
              {isHindi ? "चैट लोड हो रही है..." : "Loading chat..."}
            </div>
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
                {messages.map((chatMessage) => (
                  <div
                    key={chatMessage.id}
                    className={`flex ${chatMessage.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        chatMessage.role === "user"
                          ? "rounded-br-sm bg-[#087F35] text-white"
                          : "rounded-bl-sm bg-white text-slate-900 shadow-[0_2px_12px_rgba(15,23,42,0.06)]"
                      }`}
                    >
                      {chatMessage.role === "agent" && (
                        <span className="mb-1 block text-xs font-semibold text-[#087F35]">
                          Urban Cruise agent
                        </span>
                      )}
                      <p className="whitespace-pre-wrap break-words">{chatMessage.text}</p>
                      {chatMessage.replies && chatMessage.replies.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {chatMessage.replies.map((reply, index) => (
                            <button
                              key={`${reply.type}-${String(reply.value ?? reply.label)}-${index}`}
                              type="button"
                              onClick={() => selectReply(reply)}
                              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                                index === 0
                                  ? "border-[#087F35] bg-[#087F35] text-white"
                                  : "border-[#087F35]/25 bg-white text-[#087F35]"
                              }`}
                            >
                              {reply.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {agentTyping && (
                  <p className="text-xs text-slate-600" role="status" aria-label="Agent is typing">
                    {isHindi ? "टाइप कर रहा है..." : "Typing..."}
                  </p>
                )}
                {(error || pollError) && (
                  <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800" role="alert">
                    {error || pollError}
                  </p>
                )}
              </div>

              {messages.length === 1 && (
                <nav className="border-t border-slate-200 px-5 py-3" aria-label="Chat topics">
                  <div className="flex flex-wrap gap-2">
                    {activeMenu.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          if (item.id === "faqs") setMenu(categories);
                          else if (item.id === "booking") {
                            addMessage(
                              "assistant",
                              language === "hi"
                                ? "आपकी यात्रा की जानकारी इकट्ठा करने के लिए नीचे जानकारी भेजें।"
                                : "Send your trip details below to open an enquiry.",
                            );
                            void postMessage({
                              text: language === "hi" ? "पूछताछ भेजें" : "Send an enquiry",
                            });
                          } else if (item.id === "support") {
                            void postMessage({
                              text: language === "hi" ? "सहायता से बात करें" : "Talk to Support",
                            });
                          } else {
                            const category = categories.find((entry) => entry.slug === item.id);
                            if (category) void postMessage({ text: category.name[language], categoryId: category.id });
                          }
                        }}
                        className="rounded-full border border-[#087F35]/30 bg-white px-3 py-2 text-xs font-semibold text-[#087F35]"
                      >
                        {item[language]}
                      </button>
                    ))}
                  </div>
                </nav>
              )}

              {menu.length > 0 && (
                <div className="border-t border-slate-200 px-5 py-3">
                  <div className="flex flex-wrap gap-2">
                    {menu.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => {
                          setMenu([]);
                          void postMessage({
                            text: category.name[language],
                            categoryId: category.id,
                          });
                        }}
                        className="rounded-full border border-[#087F35]/30 bg-white px-3 py-2 text-xs font-semibold text-[#087F35]"
                      >
                        {category.name[language]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const text = message.trim();
                  if (!text || loading) return;
                  setMessage("");
                  void postMessage({ text });
                }}
                className="flex gap-2 border-t border-slate-200 bg-white px-5 py-3"
              >
                <label htmlFor="urban-chat-message" className="sr-only">Chat message</label>
                <input
                  id="urban-chat-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  maxLength={1000}
                  disabled={!sessionToken || loading}
                  placeholder={isHindi ? "अपना प्रश्न लिखें..." : "Type your question..."}
                  className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-[#087F35]"
                />
                <button
                  type="submit"
                  disabled={!sessionToken || loading || !message.trim()}
                  className="flex h-10 items-center gap-2 rounded-lg bg-[#087F35] px-4 text-sm font-bold text-white disabled:opacity-60"
                >
                  <span>{isHindi ? "भेजें" : "Send"}</span>
                  <FaArrowRight aria-hidden="true" />
                </button>
              </form>

              <p className="bg-[#F2F3EF] px-5 py-2 text-center text-[10px] text-slate-600">
                {isHindi
                  ? "चैट में OTP, पासवर्ड या कार्ड विवरण साझा न करें."
                  : "Never share OTPs, passwords, or card details in chat."}
              </p>

            </>
          )}
        </section>
      )}
    </>
  );
}