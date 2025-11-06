import { useInsertionEffect, useState } from "react";

export default function UseInsertionEffectExm() {
  const [color, setColor] = useState("#0f172b");

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .heading {
        background-color: ${color};
        transition: background-color 0.4s ease;
      }
    `;
    document.head.appendChild(style);

    // Cleanup when color changes or component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
      <h1 className="heading rounded-lg text-2xl sm:text-3xl font-bold text-center mb-2">
        UseInsertionEffect
      </h1>
      <div className="flex flex-col justify-center items-center text-xl bg-slate-800 p-4 rounded-lg">
        <p className="mb-6 text-gray-300">
          Dynamically injecting a background color style before DOM updates.
        </p>

        <div className="flex gap-4 font-bold">
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg cursor-pointer"
          >
            Red
          </button>
          <button
            onClick={() => setColor("#1d293d")}
            className="bg-slate-900 hover:bg-slate-900/50 px-4 py-2 border-2 rounded-lg cursor-pointer"
          >
            #1d293d
          </button>
        </div>
      </div>
    </div>
  );
}
