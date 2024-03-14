import React from 'react'

const Events4 = () => {
    const func_one = ()=>{
        console.log("Double Clicked")
    }
  return (
    <div>
      <button onDoubleClick={func_one}>Click Me</button>
    </div>
  )
}

export default Events4
