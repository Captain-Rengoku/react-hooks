"use client";

import React from "react";

const hooksData = [
  {
    hook: "useState",
    rating: "✅⭐⭐⭐⭐⭐",
    note: "The most used hook — manages local component state.",
  },
  {
    hook: "useEffect",
    rating: "✅⭐⭐⭐⭐⭐",
    note: "Core hook for side effects, data fetching, timers, and DOM updates.",
  },
  {
    hook: "useContext",
    rating: "✅⭐⭐⭐⭐⭐",
    note: "Eliminates prop drilling; key for global state (auth, theme, etc.).",
  },
  {
    hook: "useReducer",
    rating: "✅⭐⭐⭐⭐☆",
    note: "Complex or dependent state logic; alternative to `useState`.",
  },
  {
    hook: "useRef",
    rating: "✅⭐⭐⭐⭐☆",
    note: "For DOM access, timers, and persisting mutable values.",
  },
  {
    hook: "useMemo",
    rating: "✅⭐⭐⭐⭐☆",
    note: "Memoizes expensive calculations or derived values.",
  },
  {
    hook: "useCallback",
    rating: "✅⭐⭐⭐⭐☆",
    note: "Memoizes callback functions to prevent re-renders.",
  },
  {
    hook: "useTransition",
    rating: "✅⭐⭐⭐⭐☆",
    note: "Allows smooth UI transitions during heavy renders.",
  },
  {
    hook: "useLayoutEffect",
    rating: "✅⭐⭐⭐☆☆",
    note: "Runs *before paint* — useful for DOM measurements or layout sync.",
  },
  {
    hook: "useDeferredValue",
    rating: "✅⭐⭐⭐☆☆",
    note: "Defers value updates for smoother performance.",
  },
  {
    hook: "useId",
    rating: "✅⭐⭐⭐☆☆",
    note: "Generates unique, stable IDs (e.g., for forms, accessibility).",
  },
  {
    hook: "useSyncExternalStore",
    rating: "✅⭐⭐☆☆☆",
    note: "For subscribing to external stores (Zustand, Redux); mainly library-level use.",
  },
  {
    hook: "useImperativeHandle",
    rating: "✅⭐⭐☆☆☆",
    note: "Advanced ref customization; used with `forwardRef`.",
  },
  {
    hook: "useInsertionEffect",
    rating: "✅⭐☆☆☆☆",
    note: "Rare; mainly for CSS-in-JS libs like Emotion or Styled Components.",
  },
  {
    hook: "useDebugValue",
    rating: "✅⭐☆☆☆☆",
    note: "Used inside custom hooks for React DevTools debugging.",
  },
];

export default function HooksRatingTable() {
  return (
      <div className="max-w-4xl mx-auto bg-slate-800/60 rounded-2xl p-4 shadow-lg mt-12">
        <header className="mb-4">
          <h2 className="text-2xl font-semibold text-indigo-300">
            React Hooks — Popularity & Practical Use
          </h2>
          <p className="text-slate-300 mt-1">
            Star ratings represent practical importance & frequency of use in
            modern React apps.
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <caption className="sr-only">React Hooks rating table</caption>
            <thead>
              <tr className="text-left text-slate-300 border-b border-slate-700">
                <th className="py-3 px-2">Hook</th>
                <th className="py-3 px-2 w-36">Rating</th>
                <th className="py-3 px-2">Notes</th>
              </tr>
            </thead>

            <tbody>
              {hooksData.map((row, idx) => (
                <tr
                  key={row.hook + idx}
                  className={
                    idx % 2 === 0 ? "bg-slate-900/30" : "bg-transparent"
                  }
                >
                  <td className="py-3 px-2 align-top">
                    <code className="bg-slate-800 px-2 py-1 rounded text-indigo-200">
                      {row.hook}
                    </code>
                  </td>

                  <td className="py-3 px-2 align-top">
                    <span className="text-yellow-300 font-medium">
                      {row.rating}
                    </span>
                  </td>

                  <td className="py-3 px-2 text-slate-300">
                    <span dangerouslySetInnerHTML={{ __html: row.note }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
