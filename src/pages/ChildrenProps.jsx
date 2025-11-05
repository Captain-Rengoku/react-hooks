import { useState } from "react";
import { Button, Card } from "../components/Props";

const ChildrenProps = () => {
  const [count, setCount] = useState(0);
  const handleClickIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-4">
          Children Props
        </h1>
        <Card children="whatever" />
        <Card
          children={
            <h3 className="bg-blue-600 rounded-md m-4 p-4 font-bold">h3 tag</h3>
          }
        />
        <Card>
          <div className="border-2 rounded-lg m-4 p-4">
            <p>Whatever Paragraph</p>
            <h2>Whatever h2</h2>
          </div>
        </Card>
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mt-8 mb-4">
          Function Props
        </h1>
        <Button handleClick={handleClickIncrease} count={count} />
      </div>
    </div>
  );
};

export default ChildrenProps;
