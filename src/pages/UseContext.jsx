import {
  UseContextExmParent,
  UseContextExmParentTwo,
} from "../components/UseContextExmParent";

const UseContext = () => {
  return (
    <div className="w-2xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseContext
        </h1>
        <ul className="pl-8 p-4 text-xl bg-slate-800 rounded-lg text-start list-disc">
          <li>
            Normally, if you want to pass data from a parent component to a
            deeply nested child, you have to pass it through all intermediate
            components AKA <i>prop drilling</i>.
          </li>
          <li>
            <b>useContext</b> avoids this by allowing direct access to the
            context.
          </li>
          <li>
            <b>UseContext</b> hook allows you to share state or data across
            multiple components without passing props manually at every level.
          </li>
          <li>
            It's useful for accessing global data like user authentication,
            themes, language settings, etc.
          </li>
          <li className="font-bold mt-2">useContext Steps:</li>
          <ul className="mx-8 list-decimal">
            <li>Create the Context</li>
            <li>Provide the Context</li>
            <li>Export the Context</li>
            <li>Consume the Context</li>
          </ul>
        </ul>
        <UseContextExmParent />
        <UseContextExmParentTwo />
      </div>
    </div>
  );
};

export default UseContext;
