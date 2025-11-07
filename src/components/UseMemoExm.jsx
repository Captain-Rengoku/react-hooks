// import React, { useState } from 'react';
import React, { useEffect, useRef, useState } from "react";
import { useMemo } from "react";

// 1 ////////////////////////////////////////////////////////////////////////////

export const ProblemWithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  function expensiveTask(num) {
    console.log("🧠 Normal First expensive Task runs...");
    for (let i = 0; i < 1000000000; i++) {
      num = num + 1;
    }
    return num;
  }
  let result = expensiveTask(0);
  return (
    <div className="border-2 border-red-500 p-4 my-4 flex flex-col justify-start items-start gap-2">
      <h1 className="text-xl">
        Problem <b className="text-red-500">Without</b> UseMemo and Not
        Optimized
      </h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
      <div>Result: {result}</div>
    </div>
  );
};

// 2 ////////////////////////////////////////////////////////////////////////////

export const SolutionWithoutUseMemo = () => {
  const [count, setCount] = useState(0);
  function expensiveTask(num) {
    console.log("🧠 expensive Task runs when dependency changes...");
    for (let i = 0; i < 1000000000; i++) {
      num = num + 1;
    }
    return num;
  }
  let result = useMemo(() => expensiveTask(0), []);
  return (
    <div className="border-2 border-yellow-500 p-4 my-4 flex flex-col justify-start items-start gap-2">
      <h1 className="text-xl">
        Solution without UseMemo but <b className="text-green-500">Optimized</b>
      </h1>
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
      <div>Result: {result}</div>
    </div>
  );
};

// 3 ////////////////////////////////////////////////////////////////////////////

export const WithoutUseMemo = () => {
  const [number, setNumber] = useState(1000000000);
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("🧠 Running expensive calculation Without UseMemo...");
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  };

  const result = expensiveCalculation(number); // This runs every time!

  return (
    <div className="border-2 border-red-500 p-4 my-4 flex flex-col justify-start items-start gap-2">
      <h1 className="text-xl">
        <b className="text-red-500">Without</b> UseMemo and Not Optimized
      </h1>
      <h2>
        Expensive Result that runs on every render: <br /> {result}
      </h2>
      <input
        className="border-2 p-2 rounded"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
    </div>
  );
};

// 4 ////////////////////////////////////////////////////////////////////////////

export const WithoutUseMemoOptimized = () => {
  const [number, setNumber] = useState(1000000000);
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log(
      "🧠 Running expensive calculation Without UseMemo but Optimized..."
    );
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  };

  // const result = expensiveCalculation(number); // 👈 This runs every time!
  // To solve this problem
  let result = useRef(null);

  useEffect(() => {
    result.current = expensiveCalculation(Number(number));
  }, [number]);

  return (
    <div className="border-2 border-yellow-500 p-4 my-4 flex flex-col justify-start items-start gap-2">
      <h1 className="text-xl">
        <b className="text-yellow-500">Without</b> UseMemo but Optimized
      </h1>
      {/* <h2>Expensive Result that runs on every render: {result}</h2> */}
      {/* Now this is optimized to run only on every number change only*/}
      <h2>
        Expensive Result that runs on every number change: {result.current}
      </h2>
      <input
        className="border-2 p-2 rounded"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
    </div>
  );
};

// 5 ////////////////////////////////////////////////////////////////////////////

export const WithUseMemo = () => {
  const [number, setNumber] = useState(1000000000);
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("🧠 Running expensive calculation With UseMemo...");
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  };

  // 👇 useMemo only recalculates when `number` changes
  const result = useMemo(() => expensiveCalculation(Number(number)), [number]);

  return (
    <div className="border-2 border-green-500 p-4 my-4 flex flex-col justify-start items-start gap-2">
      <h1 className="text-xl">
        <b className="text-green-500">With</b> UseMemo
      </h1>
      <h2>Expensive Result that runs only on number change: {result}</h2>

      <input
        className="border-2 p-2 rounded"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded p-2 font-bold"
        onClick={() => setCount(count + 1)}
      >
        Increment Count: {count}
      </button>
    </div>
  );
};

// React.memo
// React.memo() wraps the component
// to make the component rerender only when the props changes

export const ChildComponentOne = (props) => {
  console.log("React.memo Example Component One re-rendered");
  return (
    <div className="flex justify-center items-center rounded-lg p-2">
      <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-1 rounded-lg">
        {props.buttonLabel}
      </button>
    </div>
  );
};

export const ChildComponentTwo = React.memo((props) => {
  console.log("React.memo Example Component Two re-rendered");
  return (
    <div className="flex justify-center items-center rounded-lg p-2">
      <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer px-4 py-1 rounded-lg">
        {props.buttonLabel}
      </button>
    </div>
  );
});
