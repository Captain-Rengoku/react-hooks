import { useContext } from "react";
import { MyContext } from "./UseContextExmParent";

const UseContextChildTwoB = () => {
  const data = useContext(MyContext);
  return (
    <div className="bg-gray-700 p-4 m-4">
      <p className="text-amber-400">UseContextChildTwoB consumes the Data</p>
      UseContextChildTwoB
      <p>
        The recived data is : <span className="text-red-500">{data.msg}</span>
      </p>
    </div>
  );
};

export default UseContextChildTwoB;
