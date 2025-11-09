import React, { useEffect, useMemo, useRef, useState } from "react";
import { Command, AtSign, Github, Linkedin, Mail, Home, User, Wrench, FolderGit2, Phone } from "lucide-react";
import { scroller } from "react-scroll";

const actions = [
  { id: "home", label: "Go to Home", icon: Home, run: () => scroller.scrollTo("home", { smooth: true, offset: -90, duration: 500 }) },
  { id: "about", label: "Go to About", icon: User, run: () => scroller.scrollTo("about", { smooth: true, offset: -90, duration: 500 }) },
  { id: "skills", label: "Go to Skills", icon: Wrench, run: () => scroller.scrollTo("skills", { smooth: true, offset: -90, duration: 500 }) },
  { id: "projects", label: "Go to Projects", icon: FolderGit2, run: () => scroller.scrollTo("projects", { smooth: true, offset: -90, duration: 500 }) },
  { id: "contact", label: "Go to Contact", icon: Phone, run: () => scroller.scrollTo("contact", { smooth: true, offset: -90, duration: 500 }) },
  { id: "github", label: "Open GitHub", icon: Github, run: () => window.open("https://github.com/UTKARSH45216", "_blank") },
  { id: "linkedin", label: "Open LinkedIn", icon: Linkedin, run: () => window.open("https://www.linkedin.com/in/utkarsh-avasthi-7a9894397/", "_blank") },
  { id: "email", label: "Email Me", icon: Mail, run: () => window.location.assign("mailto:Utkarshavasthi001@gmail.com") },
  { id: "resume", label: "Download Resume (PDF)", icon: AtSign, run: () => window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank") },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") { e.preventDefault(); onClose(); }
      if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(i + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
      if (e.key === "Enter") { e.preventDefault(); filtered[active]?.run(); onClose(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, filtered, active, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="mx-auto mt-24 max-w-2xl px-4" onClick={(e) => e.stopPropagation()}>
        <div className="rounded-xl border border-cyan-400/20 bg-gray-900/90 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <Command size={18} className="text-cyan-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search…"
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-gray-200"
            />
            <span className="hidden sm:block text-[11px] text-gray-400 border border-white/10 rounded px-1.5 py-0.5">Esc</span>
          </div>
          <ul className="max-h-80 overflow-y-auto py-2">
            {filtered.length === 0 && (
              <li className="px-4 py-6 text-center text-gray-500">No results. Try "projects", "github"…</li>
            )}
            {filtered.map((a, i) => (
              <li key={a.id}>
                <button
                  onClick={() => { a.run(); onClose(); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    i === active ? "bg-cyan-400/10" : "hover:bg-white/5"
                  }`}
                >
                  <a.icon size={18} className="text-cyan-400" />
                  <span className="text-gray-200">{a.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
