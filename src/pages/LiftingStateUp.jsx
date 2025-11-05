import { useState } from "react";
import { ChildOne, ChildTwo } from "../components/LiftingStateUp";

const LiftingStateUp = () => {
  // this state is at parent component
  const [value, setValue] = useState();

  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-4">
          Lifting State Up
        </h1>
        <ChildTwo setValue={setValue} />
        <p>the child two sets the value and sends it to the parent</p>
        <p className="text-xl">
          <b className="text-yellow-500 font-bold">Value in Parent is</b>{" "}
          {value}
        </p>
        <p>child one uses the value set by child two which is it's own sibling</p>
        <ChildOne value={value} />
      </div>
    </div>
  );
};

export default LiftingStateUp;
