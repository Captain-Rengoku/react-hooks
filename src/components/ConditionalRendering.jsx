import React from 'react'

export const LogInBtn = ({ handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 w-32 hover:bg-blue-600 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
        >
            LogIn
        </button>
    )
}

export const LogOutBtn = ({ handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="bg-red-500 w-32 hover:bg-red-600 text-white text-2xl font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300"
        >
            LogOut
        </button>
    )
}
