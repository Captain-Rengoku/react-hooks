import React, { useEffect, useState } from 'react'

export function UseEffectExm() {
    const [count, setCount] = useState(0)
    function handleClickCount() {
        setCount(prev => prev + 1)
    }
    const [total, setTotal] = useState(1)
    function handleClickTotal() {
        setTotal(prev => prev + 1)
    }

    // first => side-effect function
    // second => return the clean-up function
    // third => dependency list

    // useEffect that does not have any dependency 
    // runs on every render
    useEffect(() => {
        // alert("I will run on each render")
        console.log("I will run on each render")
    })

    // useEffect that does have an empty array dependency 
    // runs only on first render
    useEffect(() => {
        alert("I will run only on first render")
    }, [])

    // useEffect that does have a dependency ( example -- [count] )
    // runs when dependency value changes
    // but runs before rendering
    useEffect(() => {
        alert("I will run when count is updated")
    }, [count])

    // useEffect that does have multi dependency ( example -- [count, total] )
    // runs when any dependency value changes
    // but runs before rendering
    useEffect(() => {
        alert("I will run when count / total is updated")
    }, [count, total])

    // useEffect that does have a cleanup function ( example -- return () => {} )
    // runs when any dependency value gets unmounted
    // but runs before rendering
    useEffect(() => {
        return () => {
            alert("count / total is unmounted")
        }
    }, [count, total])

    return (
        <div>
            <button
                className="bg-green-500 mx-2 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
                onClick={handleClickCount}
            >Count: {count}</button>
            <button
                className="bg-green-500 mx-2 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
                onClick={handleClickTotal}
            >Total: {total}</button>
        </div>
    )
}


export function SetTimeoutExample() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("⏰ This runs once after 2 seconds");
        }, 2000);
        return () => {
            console.log("⏰setTimeout Cleaned up")
            clearTimeout(timer);
        } // cleanup
    }, []);
    return <p className='p-4 border-2 my-2 rounded-lg'>⏰Check the console in 2 seconds...</p>;
}


export function SetIntervalExample() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1); // increment every second
        }, 1000);
        return () => {
            console.log("setInterval Cleaned up")
            clearInterval(interval); // cleanup on unmount
        }
    }, []);
    return <h2 className='p-4 border-2 my-2 rounded-lg'>Timer: <span className='text-blue-400'>{count}</span></h2>;
}


// data fetching on first render
export function DataFetcher() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                setData(json);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("Error fetching data:", error);
                setIsLoading(false)
            })
    }, []);
    // early return for loading
    if (isLoading) {
        return (
            <>
                <p>Loading...</p>
                <p>Please Wait!</p>
            </>
        )
    }
    return (
        <ul className='text-start list-disc pl-8 p-4 my-2 bg-slate-800 rounded-lg'>
            <h1 className='underline-offset-4 underline text-slate-300 mb-4'>fetched data titles</h1>
            {data.map(post => (
                post.id < 6 ? (
                    <li key={post.id}>{post.title}</li>
                ) : null
            ))}
        </ul>
    )
}


// windowwidth tracker
export function WidthTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        console.log("WidthTracker event listener added")
        window.addEventListener('resize', handleResize)
        return () => {
            console.log("WidthTracker event listener removed")
            window.removeEventListener('resize', handleResize);
        }
    },[])
    return (
        <div className="bg-slate-800 my-2 p-2 rounded-lg">
            <h1>Window width: <span className='text-blue-400'>{windowWidth}</span>px</h1>
        </div>
    )
}