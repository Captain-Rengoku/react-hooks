import React, { useContext } from 'react'
import { ThemeContext, UserContext } from './UseContextExmParent'

const UseContextChildC = () => {
    const {user, setUser} = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div className={`p-4 m-4 ${theme ? "bg-gray-600" : "bg-gray-900"}`}>
            <p className="text-amber-400">UseContextChildC consumes the Data</p>
            Comsumed Data:
            <input
            className='border-2 border-white rounded p-2 m-2 text-green-500'
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
            <br />
            Theme:
            <button
            className='bg-blue-600 rounded px-2 py-1 m-2 font-bold'
            onClick={() => setTheme(theme => !theme)}
            >
                {theme ? "light" : "dark"}
            </button>
        </div>
    )
}

export default UseContextChildC
