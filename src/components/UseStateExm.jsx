import React, { useCallback, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(10);

  const handleClickIncrease = useCallback(() => {
    if (count < 20) {
      // stale value - a stale value is an outdated or old value of a variable
      // All the setCount calls below use the same stale value of `count`
      // because state updates in React are asynchronous and done by batched.
      // React batches these updates and only the last one takes effect — which is still `count + 1`
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      // These 5 setCount will be one batch
      // To increment multiple times properly, use the functional form: setCount(prev => prev + 1)
      setCount((prev) => prev + 1);
      // And this will be one batch
      setCount((count) => count + 1);
      // And this will be one batch and should set the count as 13 from 10
      setCount(count + 1);
      // And this will overwrite all the previous setCounts and only the last setCount will be updated
      // so it will only add one and 10 will become 11
      console.log(count);
    }
  }, [count]);

  const handleClickDecrease = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex justify-center items-center bg-green-400 text-black 
        py-4 px-8 text-5xl rounded-xl shadow-lg"
      >
        <h1>
          React Counter <b>{count}</b>
        </h1>
      </div>
      <div className="flex gap-6">
        <button
          onClick={handleClickDecrease}
          className="bg-red-500 hover:bg-red-600 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
        >
          Decrease
        </button>
        <button
          onClick={handleClickIncrease}
          className="bg-blue-500 hover:bg-blue-600 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
