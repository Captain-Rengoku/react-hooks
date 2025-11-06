"use client";
import { useState, useEffect, useCallback, useRef } from "react";


// --- useLocalStorage Custom Hook --- //


function useLocalStorage(key, initialValue) {
  // Load from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
}


export function LocalStorageExample() {
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


// --- useFetch Custom Hook --- //


function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(0);

  const optionsRef = useRef(options);

  const refetch = useCallback(() => {
    setReload((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!url) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(url, optionsRef.current)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (isMounted) setData(json);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url, reload]); // ✅ only re-run when URL or reload changes

  return { data, error, loading, refetch };
}


export function FetchExample() {
  const { data, error, loading, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    { method: "GET" }
  );

  return (
    <div className="p-6 bg-slate-800/80 rounded-xl shadow-md text-white mt-10">
      <h2 className="text-2xl font-bold text-indigo-300 mb-4">
        🌐 useFetch Hook Example
      </h2>

      {loading && <p className="text-yellow-400 min-h-48">Loading data...</p>}
      {error && <p className="text-red-500">❌ Error: {error}</p>}
      {!loading && !error && data && (
        <ul className="space-y-2 text-left min-h-48">
          {data.slice(0, 5).map((user) => (
            <li key={user.id} className="border-b border-slate-600 pb-1">
              <b className="text-indigo-400">{user.name}</b> —{" "}
              <span className="text-slate-400">{user.email}</span>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={refetch}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer disabled:opacity-50"
      >
        🔁 {loading ? "Refreshing..." : "Refetch"}
      </button>
    </div>
  );
}