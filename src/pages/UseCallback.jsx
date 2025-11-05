import {
  CallbackTextExm,
  CounterCallbackExm,
  Timer,
  WithUseCallback,
} from "../components/UseCallbackExm";

const UseCallback = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseCallback
        </h1>
        <ul className="pl-8 p-2 rounded-lg bg-slate-800 text-start list-decimal">
          <li>
            <b>UseCallback</b> hook memoizes functions so that they are not
            recreated on every render.
          </li>
          <li>
            Every time a React component re-renders, any functions defined
            inside it are re-created.
          </li>
          <li>
            const functionName = useCallback(arrow function, [dependencies])
          </li>
        </ul>
        <CounterCallbackExm />
        <Timer />
        <CallbackTextExm />
        <WithUseCallback />
      </div>
    </div>
  );
};

export default UseCallback;
