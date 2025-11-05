import React from "react";

const EventHandlingExm = () => {
  const handleClick = () => {
    alert("Button Clicked through handleClick");
  };

  function handleMouseOver() {
    alert("Mouse Over");
  }

  // let handleInputChange = () => {
  //   console.log("Value changed in Input");
  // };

  let handleInputChangeNew = (e) => {
    console.log("Value till now", e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Custom behaviour
    alert("Form Submited check console");
  }

  return (
    <div>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer text-xl
          font-semibold p-2 sm:px-4 rounded-lg shadow-md transition duration-300"
        onClick={handleClick}
      >
        Click me
      </button>

      <button
        // Immediate Invokation
        // onClick={alert("Button Clicked by Immediate Invokation")}
        // pass the function reference not invok it directly
        onClick={() => alert("Button Clicked Immediate Invokation")}
        className="bg-blue-500 hover:bg-blue-600 text-black cursor-pointer text-lg
          font-semibold px-4 py-2 mx-4 rounded-lg shadow-md transition duration-300"
      >
        Click me
      </button>

      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          className="border-2 p-2 rounded-lg"
          placeholder="Type Something..."
          // onChange={handleInputChange}
          onChange={handleInputChangeNew}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-black cursor-pointer text-lg
            font-semibold px-6 py-2 my-2 mx-1 rounded-lg shadow-md transition duration-300"
        >
          Submit
        </button>

        <p
          className="my-4 w-fit bg-slate-800 p-4 rounded-lg"
          onMouseOver={handleMouseOver}
        >
          I am a Paragraph hover over me.
        </p>
      </form>
    </div>
  );
};

export default EventHandlingExm;
