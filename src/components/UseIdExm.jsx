import { useId } from "react";

export default function UseIdExm() {
  // Each call gives a unique, stable ID (consistent across renders)
  const nameId = useId();
  const emailId = useId();

  return (
    <div className="p-4 bg-slate-800 text-white rounded-lg space-y-4">
      <p className="text-slate-400 text-xl">
        useId generates unique and consistent IDs for the form elements.
      </p>

      {/* Name Field */}
      <div className="flex flex-col">
        <label htmlFor={nameId} className="text-indigo-300 font-semibold">
          Name
        </label>
        <input
          id={nameId}
          type="text"
          className="p-2 mt-1 rounded bg-slate-900 border border-slate-700"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col">
        <label htmlFor={emailId} className="text-indigo-300 font-semibold">
          Email
        </label>
        <input
          id={emailId}
          type="email"
          className="p-2 mt-1 rounded bg-slate-900 border border-slate-700"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
}
