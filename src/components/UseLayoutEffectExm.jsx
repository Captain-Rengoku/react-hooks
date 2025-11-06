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
    <div className="flex flex-col items-center gap-4 bg-slate-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-400">
        useLayoutEffect Example
      </h2>

      <div
        ref={boxRef}
        className="h-20 transition-all duration-300"
        style={{
          width: color === "skyblue" ? "200px" : "350px",
          backgroundColor: color,
        }}
      ></div>

      <p className="text-sm text-slate-300">
        Measured Width:{" "}
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
