import { Routes, Route } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ChildrenProps from "./pages/ChildrenProps";
import UseState from "./pages/UseState";
import LiftingStateUp from "./pages/LiftingStateUp";
import ConditionalRendering from "./pages/ConditionalRendering";
import EventHandling from "./pages/EventHandling";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseReducer from "./pages/UseReducer";
import UseContext from "./pages/UseContext";

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
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usememo" element={<UseMemo/>}/>
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
