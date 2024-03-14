import React from 'react'

const Events2 = () => {
    const test_func = () => {
        console.log("you clicked");
    }
  return (
    <div>
      <button onClick={test_func}>Click ME</button>
    </div>
  )
}

export default Events2
