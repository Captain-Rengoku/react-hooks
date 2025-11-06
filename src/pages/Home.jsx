import React from "react";
import { BookOpen, Cpu, Code, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[60svh] flex flex-col justify-baseline items-center">
      {/* Header */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-2">
          <Sparkles className="text-yellow-400" size={36} />
          React Hooks Learning Project
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Welcome! 🚀 This project is a hands-on journey through every major
          React Hook — from <span className="text-green-400">useState</span> and{" "}
          <span className="text-green-400">useEffect</span> to advanced concepts
          like <span className="text-green-400">useReducer</span>,{" "}
          <span className="text-green-400">useCallback</span>, and{" "}
          <span className="text-green-400">custom hooks</span>.
        </p>
      </div>

      {/* Hook Topics Section */}
        <div className="bg-slate-900 px-8 py-10 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition">
            <BookOpen className="text-blue-400 mb-3" size={30} />
            <h2 className="text-xl font-semibold mb-2">Core Hooks</h2>
            <p className="text-gray-400 text-sm">
              Learn the basics — useState, useEffect, and useRef for managing
              data, side effects, and DOM references.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition">
            <Cpu className="text-purple-400 mb-3" size={30} />
            <h2 className="text-xl font-semibold mb-2">Performance Hooks</h2>
            <p className="text-gray-400 text-sm">
              Explore useMemo, useCallback, and React.memo to optimize renders
              and manage heavy computations efficiently.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition">
            <Code className="text-pink-400 mb-3" size={30} />
            <h2 className="text-xl font-semibold mb-2">Custom Hooks</h2>
            <p className="text-gray-400 text-sm">
              Build your own reusable logic to make React code cleaner, more
              modular, and easier to maintain.
            </p>
          </div>
        </div>

      {/* Footer */}
      <footer className="absolute bottom-8 mt-12 text-gray-500 text-sm">
        🌱 Built to master{" "}
        <span className="text-green-400 font-semibold">React Hooks</span> — one
        concept at a time.
      </footer>
    </div>
  );
}
