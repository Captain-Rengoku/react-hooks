"use client";
import useFetch from "../hooks/useFetch";

// --- useFetch Custom Hook --- //
export default function FetchExample() {
  const { data, error, loading, refetch, reload } = useFetch(
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

      <div className="flex justify-between items-center gap-2 mt-4 font-bold">
        <button
          onClick={refetch}
          disabled={loading}
          className=" px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔁 {loading ? "Refreshing..." : "Refetch"}
        </button>
        <p className="text-slate-400">Refetch Count : {reload}</p>
      </div>
    </div>
  );
}
