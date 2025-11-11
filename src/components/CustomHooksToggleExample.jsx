"use client";
import useToggle from "../hooks/useToggle";

// --- useToggle Custom Hook --- //
export default function ToggleExample() {
  const [value, toggleValue] = useToggle(true);

  return (
    <div className="p-6 bg-slate-800/80 rounded-xl shadow-md text-white mt-10">
      <h2
        className={`text-2xl font-bold mb-4 h-8 ${
          value ? "text-green-400" : "text-red-400"
        }`}
      >
        {value
          ? "useToggle Hook Value True 🟢 "
          : "useToggle Hook Value False 🔴"}
      </h2>

      <div className="flex gap-4 justify-center items-center font-bold">
        <button
          onClick={toggleValue}
          // onClick={() => toggleValue(345)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer"
        >
          Toggle Heading
        </button>
        <button
          onClick={() => toggleValue(false)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md cursor-pointer"
        >
          Hide Heading
        </button>
        <button
          onClick={() => toggleValue(true)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md cursor-pointer"
        >
          Show Heading
        </button>
      </div>
    </div>
  );
}
