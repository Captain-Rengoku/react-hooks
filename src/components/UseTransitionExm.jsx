import { useState, useTransition } from "react";

//------ EXAMPLE ONE -----------------------------------------------------------------//

export default function TransitionDemo() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();
  const [transitionOn, setTransitionOn] = useState(true);

  const handleTabChange = (newTab) => {
    if (transitionOn) {
      startTransition(() => setTab(newTab)); // low-priority update
    } else {
      setTab(newTab); // normal (blocking) update
    }
  };

  return (
    <div className="p-6 bg-slate-800 text-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">⚙️ useTransition Demo</h2>
        <button
          className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md"
          onClick={() => setTransitionOn((prev) => !prev)}
        >
          {transitionOn ? "Transition: ON" : "Transition: OFF"}
        </button>
      </div>

      <div className="flex gap-3 mb-4">
        {["home", "profile", "settings"].map((t) => (
          <button
            key={t}
            onClick={() => handleTabChange(t)}
            className={`px-3 py-2 rounded ${
              tab === t ? "bg-indigo-600" : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {isPending && <p className="text-yellow-400">⏳ Switching tab...</p>}

      <div className="mt-4 border-t border-slate-600 pt-3">
        {tab === "home" && <p>🏠 Home tab</p>}
        {tab === "profile" && <HeavyProfile />}
        {tab === "settings" && <p>⚙️ Settings tab</p>}
      </div>
    </div>
  );
}

function HeavyProfile() {
  // Render 10,000 items to simulate heavy UI work
  const items = Array.from({ length: 105000 }, (_, i) => `Item ${i + 1}`);

  return (
    <ul className="max-h-60 overflow-y-auto text-sm">
      {items.map((item) => (
        <li key={item} className="border-b border-slate-700 py-0.5">
          {item}
        </li>
      ))}
    </ul>
  );
}


//------ EXAMPLE TWO -----------------------------------------------------------------//

export function SortExample() {
  const [isPending, startTransition] = useTransition();
  const [sortOrder, setSortOrder] = useState("asc");
  const [items, setItems] = useState(
    Array.from({ length: 5000 }, () => Math.floor(Math.random() * 10000))
  );

  const handleSort = () => {
    startTransition(() => {
      const sorted = [...items].sort((a, b) =>
        sortOrder === "asc" ? b - a : a - b
      );
      setItems(sorted);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    });
  };

  return (
    <div className="p-4 mt-8 bg-slate-800 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-2">
        🔀 useTransition: Sorting Example
      </h2>

      <button
        onClick={handleSort}
        className="px-3 py-2 mb-3 bg-indigo-600 hover:bg-indigo-700 rounded"
      >
        Sort ({sortOrder === "asc" ? "⬆️ Asc" : "⬇️ Desc"})
      </button>

      {isPending && <p className="text-yellow-400">⏳ Sorting...</p>}

      <ul className="max-h-64 overflow-y-auto border-t border-slate-700 text-sm">
        {items.slice(0, 100).map((num, i) => (
          <li key={i} className="border-b border-slate-700 p-1">
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}
