"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectExm() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [color, setColor] = useState("skyblue");

  // useLayoutEffect runs synchronously after DOM updates but before the browser paints.
  useLayoutEffect(() => {
    if (boxRef.current) {
      const width = boxRef.current.getBoundingClientRect().width;
      console.log("Measured width:", width);
      setBoxWidth(width);
    }
  }, [color]);

  // useEffect runs later (after paint) — useful for logging or async work.
  useEffect(() => {
    console.log("useEffect ran — screen already painted.");
  }, [boxWidth]);

  return (
    <div className="flex flex-col items-center gap-4 bg-slate-900 text-white p-2 sm:p-4 rounded-lg">
      <UseLayoutEffectGuidelines/>
      <div
        ref={boxRef}
        className="h-20 transition-all duration-300"
        style={{
          width: color === "skyblue" ? "200px" : "300px",
          backgroundColor: color,
        }}
      ></div>

      <p className="text-sm text-slate-300">
        Measured Width Previously:{" "}
        <span className="text-yellow-400 font-semibold">{boxWidth}px</span>
      </p>

      <button
        onClick={() =>
          setColor((prev) => (prev === "skyblue" ? "lightcoral" : "skyblue"))
        }
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold cursor-pointer"
      >
        Change Box Size
      </button>
    </div>
  );
}

function UseLayoutEffectGuidelines() {
  const useList = [
    "Measure DOM elements immediately after rendering (like width/height).",
    "Synchronously re-position or scroll something before the browser paints.",
    "Avoid flicker in tooltips, modals, or animations."
  ];

  const avoidList = [
    "Data fetching.",
    "API calls.",
    "Anything async or heavy.",
    "Non-DOM-related logic."
  ];

  return (
    <div className="p-6 bg-slate-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-400">🧠 When to Use useLayoutEffect</h2>

      {/* ✅ Use List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-green-400 mb-2">✅ Use when:</h3>
        <ul className="list-disc list-inside space-y-1 text-slate-200">
          {useList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* 🚫 Avoid List */}
      <div>
        <h3 className="text-lg font-semibold text-red-400 mb-2">🚫 Avoid for:</h3>
        <ul className="list-disc list-inside space-y-1 text-slate-200">
          {avoidList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-yellow-400">
        ⚠️ Because <code>useLayoutEffect</code> blocks painting, excessive use can hurt performance.
      </p>
    </div>
  );
}
