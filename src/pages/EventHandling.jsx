import EventHandlingExm from "../components/EventHandlingExm";

const EventHandling = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center items-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-4">
          Event Handling
        </h1>
        <EventHandlingExm />
      </div>
    </div>
  );
};

export default EventHandling;
