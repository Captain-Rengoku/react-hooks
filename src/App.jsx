import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import ChildrenProps from "./pages/ChildrenProps";
import UseState from "./pages/UseState";
import LiftingStateUp from "./pages/LiftingStateUp";
import ConditionalRendering from "./pages/ConditionalRendering";
import EventHandling from "./pages/EventHandling";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseTransition from "./pages/UseTransition";
import UseLayoutEffect from "./pages/UseLayoutEffect";
import UseDeferredValue from "./pages/UseDeferredValue";
import UseId from "./pages/UseId";
import UseSyncExternalStore from "./pages/UseSyncExternalStore";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import UseInsertionEffect from "./pages/UseInsertionEffect";
import UseDebugValue from "./pages/UseDebugValue";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/childrenprops" element={<ChildrenProps />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/liftingstateup" element={<LiftingStateUp />} />
        <Route path="/conditionalrendering" element={<ConditionalRendering />} />
        <Route path="/eventhandling" element={<EventHandling/>}/>
        <Route path="/useeffect" element={<UseEffect/>}/>
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usetransition" element={<UseTransition />} />
        <Route path="/uselayouteffect" element={<UseLayoutEffect />} />
        <Route path="/usedeferredvalue" element={<UseDeferredValue />} />
        <Route path="/useid" element={<UseId />} />
        <Route path="/usesyncexternalstore" element={<UseSyncExternalStore />} />
        <Route path="/useimperativehandle" element={<UseImperativeHandle />} />
        <Route path="/useinsertioneffect" element={<UseInsertionEffect />} />
        <Route path="/usedebugvalue" element={<UseDebugValue />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
