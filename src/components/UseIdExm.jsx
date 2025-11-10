import { useId } from "react";

export default function UseIdExm() {
  return (
    <div className="p-2 sm:p-4 bg-slate-800 text-white rounded-lg space-y-4">
      <p className="text-slate-400 text-xl text-center">
        useId generates unique and consistent IDs for the form elements.
      </p>

      <div className="bg-slate-900/80 p-2 sm:p-4 rounded-lg">
        <h1 className="text-center text-2xl text-indigo-300/90">
          User One Form
        </h1>
        <form>
          <NameField />
          <EmailField />
          <PasswordField />
        </form>
      </div>

      <div className="bg-slate-900/80 p-2 sm:p-4 rounded-lg">
        <h1 className="text-center text-2xl text-indigo-300/90">
          User Two Form
        </h1>
        <form>
          <NameField />
          <EmailField />
          <PasswordField />
        </form>
      </div>

      <div className="bg-slate-900/80 p-2 sm:p-4 rounded-lg">
        <h1 className="text-center text-2xl text-indigo-300/90">
          User Two Form
        </h1>
        <form>
          <NameField />
          <EmailField />
          <PasswordField />
        </form>
      </div>
    </div>
  );
}

const NameField = () => {
  // Each call gives a unique, stable ID (consistent across renders)
  const nameId = useId();

  return (
    <div className="flex flex-col mt-4">
      {/* Name Field */}
      <label htmlFor={nameId} className="text-indigo-300 font-semibold">
        Name
        <a className="text-slate-400 ml-2">
          ( form ID is :{" "}
          <span className="text-green-400 text-lg">{nameId}</span> )
        </a>
      </label>
      <input
        id={nameId}
        type="text"
        className="p-2 mt-1 rounded bg-slate-900 border border-slate-700"
        placeholder="Enter your name"
      />
    </div>
  );
};

const EmailField = () => {
  // Each call gives a unique, stable ID (consistent across renders)
  const emailId = useId();

  return (
    <div className="flex flex-col mt-4">
      {/* Email Field */}
      <label htmlFor={emailId} className="text-indigo-300 font-semibold">
        Email{" "}
        <a className="text-slate-400 ml-2">
          ( form ID is :{" "}
          <span className="text-green-400 text-lg">{emailId}</span> )
        </a>
      </label>
      <input
        id={emailId}
        type="email"
        className="p-2 mt-1 rounded bg-slate-900 border border-slate-700"
        placeholder="Enter your email"
      />
    </div>
  );
};

const PasswordField = () => {
  // Each call gives a unique, stable ID (consistent across renders)
  const passwordId = useId();

  return (
    <div className="flex flex-col mt-4">
      {/* Password Field */}
      <label htmlFor={passwordId} className="text-indigo-300 font-semibold">
        Password
        <a className="text-slate-400 ml-2">
          ( form ID is :{" "}
          <span className="text-green-400 text-lg">{passwordId}</span> )
        </a>
      </label>
      <input
        id={passwordId}
        type="password"
        className="p-2 mt-1 rounded bg-slate-900 border border-slate-700"
        placeholder="Create a Password"
      />
    </div>
  );
};
