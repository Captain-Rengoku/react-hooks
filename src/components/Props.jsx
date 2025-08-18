import React from 'react'

// export const Card = (props) => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }


// use props after destructuring
export const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}


// use props to pass a function from parent to children component
export const Button = ({handleClick, count}) => {
    return (
        <button onClick={handleClick} className='bg-red-400 rounded-md px-4 cursor-pointer'>
            Count: {count}
        </button>
    )
}
