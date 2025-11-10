import UseSyncExternalStoreExm from "../components/UseSyncExternalStoreExm";
import { UseSyncExternalStoreExmFour } from "../components/UseSyncExternalStoreExmFour";
import { UseSyncExternalStoreExmThree } from "../components/UseSyncExternalStoreExmThree";
import { UseSyncExternalStoreExmTwo } from "../components/UseSyncExternalStoreExmTwo";

const UseSyncExternalStore = () => {
  return (
    <div className="w-xl flex justify-center items-start gap-4 p-2 sm:p-4 bg-slate-800 rounded-lg">
      <div className="flex justify-center flex-col w-full bg-slate-900 rounded-xl p-2 sm:p-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2">
          UseSyncExternalStore
        </h1>
        <UseSyncExternalStoreExm/>
        <h1 className="text-2xl sm:text-3xl font-bold text-indigo-400 text-center mb-2 mt-8">
          UseSyncExternalStore Example Two
        </h1>
        <UseSyncExternalStoreExmTwo/>
        <UseSyncExternalStoreExmThree/>
        <UseSyncExternalStoreExmFour/>
      </div>
    </div>
  );
};

export default UseSyncExternalStore;
