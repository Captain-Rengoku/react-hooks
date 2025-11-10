"use client";

import { Toaster } from "react-hot-toast";
import React, { useSyncExternalStore } from "react";
import { todoStore } from "../store/todoStore";

export function UseSyncExternalStoreExmFour() {
  const todos = useSyncExternalStore(
    todoStore.subscribe,
    todoStore.getSnapshot
  );

  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 mt-4">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="bg-slate-800 rounded-2xl p-4 shadow-lg w-full text-center text-xl">
        <p className="text-xl text-slate-300 mb-4">
          External State Example with{" "}
          <code className="text-green-400">useSyncExternalStore </code>
        </p>

        <button
          onClick={todoStore.addTodo}
          className="px-4 py-2 font-bold rounded-lg bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
        >
          Add
        </button>

        <ul>
          {todos.map((t, i) => (
            <li key={i} className="text-2xl text-green-400 mt-2">
              {t.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
