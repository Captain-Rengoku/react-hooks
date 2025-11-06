import { useRef, useImperativeHandle, forwardRef, useState } from "react";

// Create a child component that exposes methods via useImperativeHandle
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  // Expose custom methods to parent via ref
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      setValue("");
    },
    getValue: () => {
      return value;
    },
  }));

  return (
    <div className="flex flex-col gap-2">
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="p-2 rounded bg-slate-900 border border-slate-700 text-white"
      />
    </div>
  );
});

// Parent Component uses exposed methods
export default function UseImperativeHandleExm() {
  const customInputRef = useRef();

  return (
    <div className="p-4 bg-slate-800 text-white rounded-lg flex flex-col gap-4">
      <p className="text-slate-400 text-xl">
        Allows parent to trigger child methods using ref.
      </p>

      <CustomInput ref={customInputRef} />

      <div className="flex justify-center gap-3 font-bold">
        <button
          onClick={() => customInputRef.current.focusInput()}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded cursor-pointer"
        >
          Focus Input
        </button>
        <button
          onClick={() => customInputRef.current.clearInput()}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded cursor-pointer"
        >
          Clear Input
        </button>
        <button
          onClick={() =>
            alert("Current value: " + customInputRef.current.getValue())
          }
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded cursor-pointer"
        >
          Show Value
        </button>
      </div>
    </div>
  );
}
