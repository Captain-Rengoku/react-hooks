import UseImperativeHandleExm from "../components/UseImperativeHandleExm";

const UseImperativeHandle = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseImperativeHandle
        </h1>
        <UseImperativeHandleExm/>
      </div>
    </div>
  );
};

export default UseImperativeHandle;
