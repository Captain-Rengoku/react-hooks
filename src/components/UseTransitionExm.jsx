import { useState, useTransition } from "react";

export default function UseTransitionExm() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Create a large dataset
  const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  function handleChange(e) {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // Defer heavy list filtering using startTransition
    startTransition(() => {
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setList(filtered);
    });
  }

  return (
    <div className="p-4 text-white bg-slate-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">⚡ useTransition Example</h2>

      <input
        className="p-2 w-full mb-4 rounded bg-slate-900 border border-slate-700"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to filter 10,000 items..."
      />

      {isPending && <p className="text-yellow-400">⏳ Updating list...</p>}

      <ul className="max-h-64 overflow-y-auto border-t border-slate-700 mt-2 text-sm">
        {list.map((item) => (
          <li key={item} className="p-1 border-b border-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
