import { useRef, useState } from 'react'

const UseRefExm = () => {
    const [count, setCount] = useState(0)
    const handleClickCount = () => {
        setCount(prev => prev + 1)
    }

    // first use case of useRef
    // to persist values between renders without causing re-renders
    // let value = 10;
    let value = useRef(10)
    const handleClickValue = () => {
        value.current = value.current + 1
        // it's not changing the global value 10 so
        // every time it will still log value 11.
        console.log(`value is ${value.current}`)
        // after using useRef hook the value will change from 10 -> 11 -> 12 ---
        // useState variable --> change --> re-renders the UI
        // useRef variable --> change --> Does not re-renders the UI
    }

    // second and Important use case of useRef
    // to access and reference DOM elements
    // Useful when you need to:
        // Focus an input
        // Scroll a div
        // Measure size
    let divRef = useRef();
    const handleChangeColor = () => {
        divRef.current.style.backgroundColor = "black"
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClickCount}>Increment Count</button>
            <br/><br/>
            <p>Value: {value.current}</p>
            {/* This will not showup in screen immediately as useRef 
            does not re-renders on change*/}
            <button onClick={handleClickValue}>Increment Value</button>
            <br/><br/>

            <div ref={divRef}>Change my color</div>
            <button onClick={handleChangeColor}>
                Change Color
            </button>
        </div>
    )
}

export default UseRefExm
