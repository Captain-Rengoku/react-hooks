// Lifting State Up
// using one state of the parent in two or more child child
export const ChildOne = ({ value }) => {
  return (
    <p className="text-xl">
      <b className="text-blue-500 font-bold">Value in Sibling is </b>
      {value}
    </p>
  );
};

export const ChildTwo = ({ setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Type something..."
      className="border border-gray-400 p-2 rounded"
    />
  );
};
