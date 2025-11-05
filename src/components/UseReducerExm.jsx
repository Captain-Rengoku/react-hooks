import { useReducer } from "react";

export const ReducerCounterNormal = () => {
  const initialValue = 0;
  function reducerFunction(count, action) {
    if (action.type === "increase") {
      return count + 1;
    }
    if (action.type === "decrease") {
      return count - 1;
    }
  }
  const [count, dispatch] = useReducer(reducerFunction, initialValue);
  const handleIncrease = () => dispatch({ type: "increase" });
  const handleDecrease = () => dispatch({ type: "decrease" });
  return (
    <div className="flex flex-col border-2 bg-gray-800 gap-2 p-2 m-2">
      <p className="text-2xl text-center">counter: {count}</p>
      <div className="flex justify-center">
        <button
          className="bg-green-600 hover:bg-green-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------------

export const ReducerCounterOjbect = () => {
  const initialState = { count: 0 };
  function reducerFunction(state, action) {
    if (action.type === "increase") {
      return { count: state.count + 1 };
    }
    if (action.type === "decrease") {
      return { count: state.count - 1 };
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const handleIncrease = () => dispatch({ type: "increase" });
  const handleDecrease = () => dispatch({ type: "decrease" });
  return (
    <div className="flex flex-col border-2 bg-gray-800 gap-2 p-2 m-2">
      <p className="text-2xl text-center">Counter: {state.count}</p>
      <div className="flex justify-center">
        <button
          className="bg-green-600 hover:bg-green-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------------------------------

export const ReducerCounterSwitchObject = () => {
  const initialState = {
    count: 3,
    increaseBy: 2,
    decreaseBy: 3,
  };
  function reducerFunction(state, action) {
    switch (action.type) {
      case "INCREASE":
        return { ...state, count: state.count + state.increaseBy };
      case "DECREASE":
        return { ...state, count: state.count - state.decreaseBy };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const handleIncrease = () => dispatch({ type: "INCREASE" });
  const handleDecrease = () => dispatch({ type: "DECREASE" });
  return (
    <div className="flex flex-col border-2 bg-gray-800 gap-2 p-2 m-2">
      <p className="text-2xl text-center">Counter: {state.count}</p>
      <div className="flex justify-center">
        <button
          className="bg-green-600 hover:bg-green-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleIncrease}
        >
          Increase by 2
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 mx-2 font-bold text-2xl px-6 py-2 rounded-xl shadow-md transition duration-300 cursor-pointer"
          onClick={handleDecrease}
        >
          Decrease by 3
        </button>
      </div>
    </div>
  );
};
