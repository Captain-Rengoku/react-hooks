import toast from "react-hot-toast";

let nextId = 0;
let todos = [{ id: nextId++, text: "Todo #" + nextId }];

let listeners: (() => void)[] = [];
// This declares a variable named listeners which is an array of functions —
// specifically, an array where each element is a function that takes no arguments
// and returns nothing (() => void) same as "let listeners = []" in javascript.
// (() => void)[] means “an array of functions that do something but don’t return anything”.
// This listeners array is used to store all the subscriber functions — 
// functions that React components (or other parts of the app) register 
// when they want to be notified of external store changes.
// It’s part of a simple pub-sub (publish–subscribe) pattern.

export const todoStore = {
  getSnapshot() {
    return todos;
  },
  subscribe(listener: () => void) {
    // add the listener
    listeners = [...listeners, listener];
    // clean up the listener
    return () => {
      listeners = listeners.filter((l) => l != listener);
    }
  },
  addTodo() {
    todos = [...todos, { id: nextId++, text: "Todo #" + nextId }];
    toast("Clicked and UI re-render successfully", {
      icon: "✅",
      style: {
        background: "#1e293b",
        color: "#05df72",
        border: "1px solid #334155",
      },
    });
    emitChange();
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}