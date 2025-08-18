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


import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0)
    let timerRef = useRef(null)
    const startTimer = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000);
    }
    // By using useRef instead of useState for setInterval
    // we prevent unnecessary re-renders.
    const stopTimer = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
    }
    const resetTimer = () => {
        stopTimer()
        setTime(0)
    }
    return (
        <div className='mt-4'>
            <h1>StopWatch: {time} seconds</h1>
            <button className='font-bold bg-green-700 px-2 rounded-sm mx-2' onClick={startTimer}>Start</button>
            <button className='font-bold bg-blue-700 px-2 rounded-sm mx-2' onClick={stopTimer}>Stop</button>
            <button className='font-bold bg-red-700 px-2 rounded-sm mx-2' onClick={resetTimer}>Reset</button>
        </div>
    )
}

export default StopWatch
