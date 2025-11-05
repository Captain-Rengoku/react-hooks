import React from "react";

// export const Card = (props) => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

// use props after destructuring
export const Card = ({ children }) => {
  return <div>{children}</div>;
};

// use props to pass a function from parent to children component
export const Button = ({ handleClick, count }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 font-bold cursor-pointer"
    >
      Count: {count}
    </button>
  );
};
