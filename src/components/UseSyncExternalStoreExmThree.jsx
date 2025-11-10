"use client";

import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #" + nextId }];

export function UseSyncExternalStoreExmThree() {
  const todoRef = useRef(todos);
  // Simple addTodo without re-render but with useRef
  function addTodo() {
    todoRef.current = [...todoRef.current, { id: nextId++, text: "Todo #" + nextId }];
    toast("Button clicked, but UI didn't re-render!", {
      icon: "⚠️",
      style: {
        background: "#1e293b",
        color: "oklch(70.4% 0.191 22.216)",
        border: "1px solid #334155",
      },
    });
  }

  // Simple Re-render
  const [, forceRender] = useState(0);
  function handleRerender() {
    // Increment dummy state to trigger re-render
    forceRender((n) => n + 1);
    toast("Component re-rendered manually!", {
      icon: "🔁",
      style: {
        background: "#1e293b",
        color: "#facc15",
        border: "1px solid #334155",
      },
    });
  }

  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 mt-4">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="bg-slate-800 rounded-2xl p-4 shadow-lg w-full text-center text-xl">
        <p className="text-xl text-slate-300 mb-4">
          Broken State Example without <code>useSyncExternalStore </code>
          <br /> but with <code className="text-yellow-400">useRef(Same Result)</code>
        </p>

        <button
          onClick={addTodo}
          className="px-4 py-2 font-bold rounded-lg bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
        >
          Add
        </button>

        <ul>
          {todoRef.current.map((t, i) => (
            <li key={i} className="text-2xl text-red-400 mt-2">
              {t.text}
            </li>
          ))}
        </ul>

        <button
          onClick={handleRerender}
          className="px-4 py-2 mt-4 font-bold rounded-lg bg-yellow-600 hover:bg-yellow-700 cursor-pointer"
        >
          Force Rerender
        </button>
      </div>
    </div>
  );
}
