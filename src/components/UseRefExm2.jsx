// import React, { useState } from 'react';

// const BrokenStopWatch = () => {
//   const [time, setTime] = useState(0);

//   const startTimer = () => {
//     // ❌ Every render creates a new interval, no way to track or stop it properly
//     setInterval(() => {
//       setTime(prev => prev + 1);
//     }, 1000);
//   };

//   const stopTimer = () => {
//     // ❌ We can't clear the interval here because we don't have its ID!
//     // clearInterval(undefined); ← this does nothing
//   };

//   const resetTimer = () => {
//     // ❌ Still can't clear intervals; time resets but intervals keep running
//     setTime(0);
//   };

//   return (
//     <div className='mt-4'>
//       <h1>StopWatch: {time} seconds</h1>
//       <button className='font-bold bg-green-700 px-2 rounded-sm mx-2' onClick={startTimer}>Start</button>
//       <button className='font-bold bg-blue-700 px-2 rounded-sm mx-2' onClick={stopTimer}>Stop</button>
//       <button className='font-bold bg-red-700 px-2 rounded-sm mx-2' onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };

// export default BrokenStopWatch;

import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  let timerRef = useRef(null);
  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };
  // By using useRef instead of useState for setInterval
  // we prevent unnecessary re-renders.
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };
  return (
    <div className="mt-4 bg-slate-800 p-4 rounded-lg text-xl font-bold">
      <h1>StopWatch: {time} seconds</h1>
      <button
        className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded-sm mr-4 cursor-pointer"
        onClick={startTimer}
      >
        Start
      </button>
      <button
        className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-sm mr-4 cursor-pointer"
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-sm cursor-pointer"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
