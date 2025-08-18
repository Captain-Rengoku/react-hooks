import React from 'react'
import UseContextChildB from './UseContextChildB'

const UseContextChildA = () => {
    return (
        <div className='bg-gray-800 p-4 m-4'>
            UseContextChildA
            <UseContextChildB />
        </div>
    )
}

export default UseContextChildA
