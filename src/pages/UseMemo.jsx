import {
  ChildComponentOne,
  ChildComponentTwo,
  ProblemWithoutUseMemo,
  SolutionWithoutUseMemo,
  WithUseMemo,
  WithoutUseMemo,
  WithoutUseMemoOptimized,
} from "../components/UseMemoExm";

const UseMemo = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseMemo
        </h1>
        <ul className="text-start list-decimal text-xl bg-slate-800 p-2 pl-8 rounded-lg">
          <li>
            <b>Memoization</b> is an optimization technique where the result of
            an expensive function is stored / "cached" so that it doesn&apos;t
            have to run again if the input values haven&apos;t changed.
          </li>
          <li>
            Normally, when a component re-renders, all functions inside it run
            again, even if their values didn&apos;t change.
          </li>
          <li>
            This can slow down the app if there are complex calculations or
            large datasets.
          </li>
          <li>
            <b>useMemo</b> remembers (memoizes) the previous result and only
            recalculates if dependencies change.
          </li>
          <ul className="ml-8 list-disc">
            <li>Manually updating the DOM ✋</li>
            <li>Using setTimeout or setInterval ⏰</li>
            <li>Working with localStorage or cookies</li>
          </ul>
        </ul>
        <ProblemWithoutUseMemo />
        <SolutionWithoutUseMemo />
        <WithoutUseMemo />
        <WithoutUseMemoOptimized />
        <WithUseMemo />
        <ChildComponentOne buttonLabel="Click me One" />
        <ChildComponentTwo buttonLabel="Click me Two" />
      </div>
    </div>
  );
};

export default UseMemo;
