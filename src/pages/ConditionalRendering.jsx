import { useState } from "react";
import { LogInBtn, LogOutBtn } from "../components/ConditionalRendering";

const ConditionalRendering = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const handleClickLogInOut = () => {
    setIsLogedIn((prev) => !prev);
  };
  let ButtonLog;
  if (isLogedIn) ButtonLog = <LogOutBtn handleClick={handleClickLogInOut} />;
  else ButtonLog = <LogInBtn handleClick={handleClickLogInOut} />;
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center items-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-4">
          Conditional Rendering
        </h1>
        <p className="text-2xl mt-4">If Else</p>
        {ButtonLog}
        <p className="text-2xl mt-4">Ternary Operator</p>
        {isLogedIn ? (
          <LogOutBtn handleClick={handleClickLogInOut} />
        ) : (
          <LogInBtn handleClick={handleClickLogInOut} />
        )}
        <p className="text-2xl mt-4">&& AND Logic</p>
        {isLogedIn && <LogOutBtn handleClick={handleClickLogInOut} />}
        {!isLogedIn && <LogInBtn handleClick={handleClickLogInOut} />}
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mt-8 mb-4">
          Early Return
        </h1>
        <ol className="text-start list-decimal text-slate-300 pl-4">
          <li>
            Early return is a coding pattern where you exit a function early,
            before running the rest of its logic — usually based on a condition.
          </li>
          <li>
            In React, it's commonly used to conditionally render different JSX
            based on props or state — and keep your code clean and readable.
          </li>
          <li>
            If something is false/unavailable, stop right here and return
            something simple. Otherwise, go on with the rest.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ConditionalRendering;
