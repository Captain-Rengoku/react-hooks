import React, { useState, useCallback, useEffect, useMemo } from "react";

export const CounterCallbackExm = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // No dependencies, so this function remains the same across re-renders

  return (
    <div className="p-4 m-2 border-2 bg-slate-800">
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-2 py-1 rounded font-bold"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export const Timer = () => {
  const [count, setCount] = useState(0);

  const tick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Function stays the same across renders

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return (
    <div className="p-4 m-2 border-2 bg-slate-800">
      <p>Timer: {count}</p>
    </div>
  );
};

export const CallbackTextExm = () => {
  const [text, setText] = useState("Hello");

  const showAlert = useCallback(() => {
    alert(text);
  }, [text]); // Recreates function when `text` changes

  return (
    <div className="p-4 m-2 border-2 bg-slate-800">
      <input
        className="border-2 mx-2 rounded p-1 bg-slate-900"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-2 py-1 rounded font-bold"
        onClick={showAlert}
      >
        Show Alert
      </button>
    </div>
  );
};

// Expensive Calculation handled by useCallback🔙

export const WithUseCallback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = useCallback(() => {
    console.log(
      "Running Expensive calculation on every render but re-creating this expensive function only when count vlaue changes..."
    );
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]);

  // Memoize the result so it runs only when the function (and count) changes
  const result = useMemo(() => expensiveCalculation(), [expensiveCalculation]);

  return (
    <div className="border-2 p-4 m-2 bg-slate-800 flex flex-col justify-start items-start gap-2">
      <h1>
        With<b className="text-green-500"> useCallback </b> and <b className="text-green-500">useMemo </b>
      </h1>
      <h2>Expensive Calculation that runs only on number changes.</h2>

      <input
        className="border-2 p-2 mt-4 rounded bg-slate-900"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* Expensive Calculation */}
      <p>Expensive Calculation Result: {result}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
    </div>
  );
};
