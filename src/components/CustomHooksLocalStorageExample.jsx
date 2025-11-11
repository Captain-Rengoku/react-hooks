"use client";
import useLocalStorage from "../hooks/useLocalStorage.jsx";

// --- useLocalStorage Custom Hook --- //
export default function LocalStorageExample() {
  const [name, setName] = useLocalStorage("username", "");
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="p-6 bg-slate-800/80 rounded-xl shadow-md text-white mt-10">
      <h2 className="text-2xl font-bold text-indigo-300 mb-4">
        🗂️ useLocalStorage Hook Example
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-indigo-300 mb-1">Name</label>
          <input
            className="w-full p-2 bg-slate-900 border border-slate-700 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3 font-bold">
          <button
            onClick={() => setCount(count - 1)}
            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer"
          >
            Decrease
          </button>
          <span className="text-xl font-mono">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md cursor-pointer"
          >
            Increase
          </button>
        </div>

        <div className="text-slate-400 pt-2">
          Data is saved in <code>localStorage</code> and persists after reload.
        </div>
      </div>
    </div>
  );
}
