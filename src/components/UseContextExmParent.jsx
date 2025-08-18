import { createContext, useState } from "react"
import UseContextChildA from "./UseContextChildA"
import UseContextChildTwoA from "./UseContextChildTwoA"

// 1. Create the context
const ThemeContext = createContext()
const UserContext = createContext()

// 2. provide the context 
// to provide the context to all the child,
// wrap all the child inside a provider
// create a provider wraper component
export const UseContextExmParent = () => {
    const [theme, setTheme] = useState(true)
    const [user, setUser] = useState("UserName")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                <div className='bg-gray-900 border-2 border-blue-500 p-4 m-4'>
                    <p className="text-amber-400">UseContextParent provides the Data <span className="text-green-500">{user}</span></p>
                    <UseContextChildA />
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

// 3. Export the Context
export { ThemeContext, UserContext}

// 4. consume the context in a child component
// Go to UseContextChildC.jsx file to see


// Example - 2

const MyContext = createContext()

export const UseContextExmParentTwo = () => {
    const sharedData = {msg: "SharedData from Parent!"}
    return (
        <MyContext.Provider value={sharedData}>
            <div className='bg-gray-900 border-2 border-blue-500 mt-4 p-4 m-4'>
                <p className="text-amber-400">UseContextParentTwo provides the Data <span className="text-green-500"></span></p>
                <UseContextChildTwoA />
            </div>
        </MyContext.Provider>
    )
}

export { MyContext }