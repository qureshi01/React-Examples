import React from 'react'
import { useState } from 'react'

const Events1 = () => {
    const [num,setNum] = useState(0);
    const incr = () =>{
        setNum(num=>num+1);
    }
    const decr = ()=>{
        setNum(num=>num-1);
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
    </div>
  )
}

export default Events1
