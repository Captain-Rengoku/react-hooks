import { useState } from "react";
import { NavLink } from "react-router";
import { FormInput } from "lucide-react";

const navLinks = [
  // { to: "/", label: "Home" },
  { to: "/childrenprops", label: "Children Props" },
  { to: "/usestate", label: "useState" },
  { to: "/liftingstateup", label: "State Lifting" },
  { to: "/conditionalrendering", label: "Conditional" },
  { to: "/eventhandling", label: "Event Handling" },
  { to: "/useeffect", label: "useEffect" },
  { to: "/useref", label: "useRef" },
  { to: "/usememo", label: "useMemo" },
  { to: "/usecallback", label: "useCallback" },
  { to: "/usereducer", label: "useReducer" },
  { to: "/usecontext", label: "useContext" },
  // { to: "/allinputs", label: "All Inputs" },
  { to: "/random-url", label: "Random URL" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute w-full bg-slate-900 text-white shadow-md px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-slate-300">
            <FormInput size={24} />
          </NavLink>
        </div>

        {/* Hamburger icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 14"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h19"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-x-6 text-lg bg-slate-800 px-2 rounded-lg">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-1 text-lg hover:text-slate-300
                ${
                  isActive ? "text-indigo-400 underline underline-offset-4" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute w-full z-99 right-0 md:hidden mt-14 border-t-2 rounded-b-lg border-gray-50 bg-slate-900 text-white px-4 pb-4 space-y-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-1 text-lg hover:text-slate-300
                ${
                  isActive ? "text-indigo-500 underline underline-offset-4" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
