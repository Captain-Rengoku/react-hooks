import { useState } from 'react'
import './App.css'
import { Button, Card } from './components/Props'
import Counter from './components/UseStateExm'
import { ChildOne, ChildTwo } from './components/LiftingStateUp'
import { LogInBtn, LogOutBtn } from './components/ConditionalRendering'
import EventHandling from './components/EventHandling'
import { DataFetcher, SetIntervalExample, SetTimeoutExample, WidthTracker } from './components/UseEffectExm'
import UseRefExm from './components/UseRefExm'
import StopWatch from './components/UseRefExm2'
import { ChildComponent, ProblemWithoutUseMemo, WithUseMemo, WithoutUseMemo, WithoutUseMemoOptimized } from './components/UseMemoExm'
import { CallbackTextExm, CounterCallbackExm, Timer, WithUseCallback } from './components/UseCallbackExm'
import { ReducerCounterNormal, ReducerCounterOjbect, ReducerCounterSwitchObject } from './components/UseReducerExm'
import { UseContextExmParent, UseContextExmParentTwo } from './components/UseContextExmParent'


function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState()
  const handleClickIncrease = () => {
    setCount(prev => prev + 1)
  }
  const [isLogedIn, setIsLogedIn] = useState(false)
  const handleClickLogInOut = () => {
    setIsLogedIn(prev => !prev)
  }
  let ButtonLog
  if (isLogedIn) (
    ButtonLog = <LogOutBtn handleClick={handleClickLogInOut} />
  ); else (
    ButtonLog = <LogInBtn handleClick={handleClickLogInOut} />
  )
  return (
    <div>
      <h1 className='text-5xl p-4 text-gray-400'>Children Props</h1>
      <Card children="whatever" />
      <Card children={<h3 className='bg-blue-400 rounded-md px-4'>h3 tag</h3>} />
      <Card>
        <div className='border-2 rounded-lg m-4'>
          <p>Whatever Paragraph</p>
          <h2>Whatever h2</h2>
        </div>
      </Card>
      <h1 className='text-5xl p-4 text-gray-400'>Function Props</h1>
      <Button handleClick={handleClickIncrease} count={count} />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseState</h1>
      <Counter />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4 text-gray-400'>Lifting State Up</h1>
      <ChildTwo setValue={setValue} />
      <p>from Child setValue to Parent value</p>
      <p className="text-xl">
        <b className="text-yellow-500 font-bold">
          Value in Parent is
        </b> {value}
      </p>
      <p>from sibling setValue to other sibling value</p>
      <ChildOne value={value} />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4 text-gray-400'>Conditional Rendering</h1>
      <p>If Else</p>
      {ButtonLog}
      <p>Ternary Operator</p>
      {isLogedIn
        ? <LogOutBtn handleClick={handleClickLogInOut} />
        : <LogInBtn handleClick={handleClickLogInOut} />
      }
      <p>&& AND Logic</p>
      {isLogedIn && <LogOutBtn handleClick={handleClickLogInOut} />}
      {!isLogedIn && <LogInBtn handleClick={handleClickLogInOut} />}
      <p>Early Return</p>
      <ol className='text-start list-decimal'>
        <li>Early return is a coding pattern where you exit a function early, before running the rest of its logic — usually based on a condition.</li>
        <li>In React, it's commonly used to conditionally render different JSX based on props or state — and keep your code clean and readable.</li>
        <li>If something is false/unavailable, stop right here and return something simple. Otherwise, go on with the rest.</li>
      </ol>
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>Event Handling</h1>
      <EventHandling />
      <hr className='my-12 text-red-600' />

      {/* To learn about useEffect we first have to remove the strict mode in main.jsx */}
      {/* which is for development purpose only */}
      <h1 className='text-5xl p-4'>UseEffect</h1>
      <ul className='mx-8 text-start list-decimal'>
        <li>useEffect is a React Hook that lets you perform side effects in function components.</li>
        <li><b>Side Effects</b> = anything that affects the outside world:</li>
        <ul className='ml-8 list-disc'>
          <li>Fetching data from an API 🌐</li>
          <li>Subscribing to events 🧏</li>
          <li>Manually updating the DOM ✋</li>
          <li>Using setTimeout or setInterval ⏰</li>
          <li>Working with localStorage or cookies</li>
        </ul>
      </ul>
      <p className='text-red-500 mt-4'>To learn more uncomment UseEffectExm!</p>
      {/* <UseEffectExm/> */}
      <SetTimeoutExample />
      <SetIntervalExample />
      <DataFetcher />
      <WidthTracker />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseRef</h1>
      <UseRefExm />
      <StopWatch />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseMemo</h1>
      <ul className='mx-8 text-start list-decimal'>
        <li><b>Memoization</b> is an optimization technique where the result of an expensive function is stored / "cached" so that it doesn&apos;t have to run again if the input values haven&apos;t changed.</li>
        <li>Normally, when a component re-renders, all functions inside it run again, even if their values didn&apos;t change.</li>
        <li>This can slow down the app if there are complex calculations or large datasets.</li>
        <li><b>useMemo</b> remembers (memoizes) the previous result and only recalculates if dependencies change.</li>
        <ul className='ml-8 list-disc'>
          <li>Manually updating the DOM ✋</li>
          <li>Using setTimeout or setInterval ⏰</li>
          <li>Working with localStorage or cookies</li>
        </ul>
      </ul>
      <ProblemWithoutUseMemo />
      <WithoutUseMemo />
      <WithoutUseMemoOptimized />
      <WithUseMemo />
      <ChildComponent buttonLabel="Click me" />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseCallback</h1>
      <ul className='mx-8 text-start list-decimal'>
        <li><b>UseCallback</b> hook memoizes functions so that they are not recreated on every render.</li>
        <li>Every time a React component re-renders, any functions defined inside it are re-created.</li>
        <li>const functionName = useCallback(arrow function, [dependencies])</li>
      </ul>
      <CounterCallbackExm />
      <Timer />
      <CallbackTextExm />
      <WithUseCallback />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseReducer</h1>
      <ul className='mx-8 text-start list-disc'>
        <li><b>UseReducer</b> hook is an alternative to useState for managing complex state logic in React functional components.</li>
        <li>It is particularly useful when the next state depends on the previous state or when the state logic is extensive.</li>
        <li>Basic Syntax The useReducer hook takes two arguments:</li>
        <ul className='mx-8 list-decimal'>
          <li>Reducer function - A function that determines how state changes based on actions.</li>
          <li>Initial state - The starting value of the state.</li>
          <li>const [state, dispatch] = useReducer(reducer, initialState);</li>
          <li><b className='text-blue-300'>Dispatch sents an action to the reducer function</b></li>
          <li>Actions: Objects that describe what should happen.</li>
          <li>Reducer Function: A pure function that takes state and an action and returns a new state.</li>
        </ul>
      </ul>
      <ReducerCounterNormal />
      <ReducerCounterOjbect />
      <ReducerCounterSwitchObject />
      <hr className='my-12 text-red-600' />

      <h1 className='text-5xl p-4'>UseContext API</h1>
      <ul className='mx-8 text-start list-disc'>
        <li>Normally, if you want to pass data from a parent component to a deeply nested child, you have to pass it through all intermediate components AKA <i>prop drilling</i>.</li>
        <li><b>useContext</b> avoids this by allowing direct access to the context.</li>
        <li><b>UseContext</b> hook allows you to share state or data across multiple components without passing props manually at every level.</li>
        <li>It's useful for accessing global data like user authentication, themes, language settings, etc.</li>
        <li className='font-bold mt-2'>useContext Steps:</li>
        <ul className='mx-8 list-decimal'>
          <li>Create the Context</li>
          <li>Provide the Context</li>
          <li>Export the Context</li>
          <li>Consume the Context</li>
        </ul>
      </ul>
      <UseContextExmParent />
      <UseContextExmParentTwo />
      <hr className='my-12 text-red-600' />
    </div>
  )
}

export default App