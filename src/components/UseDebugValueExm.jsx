"use client";

import { useState, useEffect, useDebugValue } from "react";

// Custom hook with useDebugValue
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // 👇 This adds a debug label in React DevTools
  useDebugValue(isOnline ? "🟢 Online" : "🔴 Offline");

  return isOnline;
}

// Component using the custom hook
export default function UseDebugValueExm() {
  const isOnline = useOnlineStatus();

  return (
    <div className="p-4 bg-slate-800 rounded-lg text-white">
      <h2 className="text-xl mb-2">useDebugValue Example</h2>
      <p>
        <b>Status:</b>{" "}
        <span
          className={`font-bold ${
            isOnline ? "text-green-400" : "text-red-400"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>

      <p className="text-slate-400 mt-4">
        Open React DevTools → Components → select this component → see{" "}
        <code>useOnlineStatus</code> hook showing a debug label.
      </p>
    </div>
  );
}
