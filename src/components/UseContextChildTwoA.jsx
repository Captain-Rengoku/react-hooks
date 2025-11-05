import React from "react";
import UseContextChildTwoB from "./UseContextChildTwoB";

const UseContextChildTwoA = () => {
  return (
    <div className="bg-gray-800 p-4 m-4">
      UseContextChildTwoA
      <UseContextChildTwoB />
    </div>
  );
};

export default UseContextChildTwoA;
