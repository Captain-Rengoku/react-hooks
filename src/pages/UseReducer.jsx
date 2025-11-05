import {
  ReducerCounterNormal,
  ReducerCounterOjbect,
  ReducerCounterSwitchObject,
} from "../components/UseReducerExm";

const UseReducer = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseReducer
        </h1>
        <ul className="pl-8 p-4 bg-slate-800 rounded-lg text-xl text-start list-disc">
          <li>
            <b>UseReducer</b> hook is an alternative to useState for managing
            complex state logic in React functional components.
          </li>
          <li>
            It is particularly useful when the next state depends on the
            previous state or when the state logic is extensive.
          </li>
          <li>Basic Syntax The useReducer hook takes two arguments:</li>
          <ul className="mx-8 list-decimal">
            <li>
              Reducer function - determines how state changes based on actions.
            </li>
            <li>Initial state - The starting value of the state.</li>
            <li>
              const [state, dispatch] = useReducer(reducer, initialState);
            </li>
            <li>
              <b className="text-blue-300">
                Dispatch sents an action to the reducer function
              </b>
            </li>
            <li>Actions: Objects that describe what should happen.</li>
            <li>
              Reducer Function: A pure function that takes state and an action
              and returns a new state.
            </li>
          </ul>
        </ul>
        <ReducerCounterNormal />
        <ReducerCounterOjbect />
        <ReducerCounterSwitchObject />
      </div>
    </div>
  );
};

export default UseReducer;
