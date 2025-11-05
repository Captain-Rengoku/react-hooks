import { useState } from "react";
import {
  UseEffectExm,
  DataFetcher,
  SetIntervalExample,
  SetTimeoutExample,
  WidthTracker,
} from "../components/UseEffectExm";
import { ToggleLeft, ToggleRight } from "lucide-react";

const UseEffect = () => {
  const [useEffectExmOn, setUseEffectExmOn] = useState(false);

  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4 text-xl">
        {/* To learn about useEffect we first have to remove the strict mode in main.jsx */}
        {/* which is for development purpose only */}
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseEffect
        </h1>
        <ul className="pl-8 p-4 text-start list-decimal">
          <li>
            useEffect is a React Hook that lets you perform side effects in
            function components.
          </li>
          <li>
            <b>Side Effects</b> = anything that affects the outside world:
          </li>
          <ul className="list-disc bg-slate-800 rounded-lg pl-8 p-2 mt-4">
            <li>Fetching data from an API</li>
            <li>Subscribing to events</li>
            <li>Manually updating the DOM</li>
            <li>Using setTimeout or setInterval</li>
            <li>Working with localStorage or cookies</li>
          </ul>
        </ul>
        <hr className="bg-amber-50" />
        <p className="text-red-400 mt-4 flex gap-2 text-center">
          <span>To learn more add below component UseEffectExm :</span>
          <button
            onClick={() => setUseEffectExmOn((prev) => !prev)}
            className="cursor-pointer outline-none transition-transform duration-200 active:scale-90"
          >
            {useEffectExmOn ? (
              <ToggleRight size={28} className="text-green-500" />
            ) : (
              <ToggleLeft size={28} className="text-red-500" />
            )}
          </button>
        </p>
        {useEffectExmOn ? <UseEffectExm /> : ""}
        <SetTimeoutExample />
        <SetIntervalExample />
        <DataFetcher />
        <WidthTracker />
      </div>
    </div>
  );
};

export default UseEffect;
