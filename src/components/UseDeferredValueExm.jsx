import { useState, useDeferredValue, useMemo } from "react";

export default function UseDeferredValueExm() {
  const [query, setQuery] = useState("");

  // ✅ Defer the query so list updates lag slightly behind typing
  const deferredQuery = useDeferredValue(query);

  // Simulate a heavy computation (like filtering 10,000 items)
  const bigList = useMemo(
    () => Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`),
    []
  );

  const filteredList = useMemo(() => {
    return bigList.filter((item) =>
      item.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery, bigList]);

  return (
    <div className="p-4 text-white bg-slate-800 rounded-lg">
      <input
        className="p-2 w-full mb-2 rounded bg-slate-900 border border-slate-700"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to filter 10,000 items..."
      />

      {/* If deferredQuery lags behind query */}
      {deferredQuery !== query ? (
        <p className="text-yellow-400">⏳ Rendering deferred results...</p>
      ) : (
        <div className="h-6"></div>
      )}

      <ul className="h-96 overflow-y-auto border-t border-slate-700 mt-2 text-sm">
        {filteredList.map((item) => (
          <li key={item} className="p-1 border-b border-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
