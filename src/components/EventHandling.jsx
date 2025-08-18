import React from 'react'

const EventHandling = () => {
    const handleClick = () => {
        alert("Button Clicked")
    }
    function handleMouseOver() {
        alert("Mouse Over")
    }
    let handleInputChange = () => {
        console.log("Value changed in Input")
    }
    handleInputChange = (e) => {
        console.log("Value till now", e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        // Custom behaviour
        alert("Form Submited")
    }

    return (
        <div>
            <button
                className='bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer text-2xl
            font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300'
                onClick={handleClick}
            >Click me</button>

            <p
                className='m-4 w-fit border-1 p-2'
                onMouseOver={handleMouseOver}
            >I am a Paragraph hover over me.</p>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='border-2 p-2'
                    placeholder='Type Something...'
                    // onChange={handleInputChange}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 text-black cursor-pointer text-lg
                font-semibold px-6 py-2 mx-2 rounded-xl shadow-md transition duration-300'
                >Submit</button>
            </form>

            <button 
                // Immediate Invokation
                // onClick={alert("Button Clicked by Immediate Invokation")}
                // pass the function reference not invok it directly
                onClick={() => alert("Button Clicked")}
                className='bg-blue-500 hover:bg-blue-600 text-black cursor-pointer text-lg
                font-semibold px-6 py-2 mt-4 rounded-xl shadow-md transition duration-300'
            >
                Click me
            </button>


        </div>
    )
}

export default EventHandling