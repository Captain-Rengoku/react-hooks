import React from "react";
import UseContextChildC from "./UseContextChildC";

const UseContextChildB = () => {
  return (
    <div className="bg-gray-700 p-4 m-4">
      UseContextChildB
      <UseContextChildC />
    </div>
  );
};

export default UseContextChildB;
