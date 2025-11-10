"use client";

import { useSyncExternalStore } from "react";
import { RefreshCw } from "lucide-react";

// ----------------------------------------------------------
// Step 1: Create a simple external store (global state)
// ----------------------------------------------------------
// This simulates a store outside React (like Redux, Zustand, etc.)
let count = 0;
const listeners = new Set();

// Function to update the count and notify subscribers
function increment() {
  count++;
  listeners.forEach((listener) => listener());
}

function decrement() {
  count--;
  listeners.forEach((listener) => listener());
}

function reset() {
  count = 0;
  listeners.forEach((listener) => listener());
}

// Subscribe to store updates
function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener); // Unsubscribe when unmounted
}

// Provide current snapshot (state value)
function getSnapshot() {
  return count;
}

// ----------------------------------------------------------
// Step 2: React Component using the store
// ----------------------------------------------------------
export default function UseSyncExternalStoreExm() {
  // useSyncExternalStore automatically re-renders when the store changes
  const value = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div className="flex flex-col items-center justify-center bg-slate-900">
      <div className="bg-slate-800 rounded-2xl p-4 shadow-lg w-full text-center text-xl">
        <p className="text-xl text-slate-300 mb-2">
          Keeps React in sync with data that lives <b>outside</b> React (like
          global stores or APIs).
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={decrement}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 cursor-pointer rounded-lg font-semibold transition"
          >
            -
          </button>
          <div className="text-5xl font-bold">{value}</div>
          <button
            onClick={increment}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 cursor-pointer rounded-lg font-semibold transition"
          >
            +
          </button>
          <button
            onClick={reset}
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 cursor-pointer rounded-lg font-semibold transition flex items-center gap-1"
          >
            <RefreshCw size={16} /> Reset
          </button>
        </div>

        <p className="text-lg text-slate-400 mt-6">
          This counter's state exists outside React — React just subscribes to
          updates.
        </p>
      </div>
    </div>
  );
}
