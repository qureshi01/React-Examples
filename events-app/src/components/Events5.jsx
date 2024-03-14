import React from 'react'

const Events5 = () => {
    const login =(param1 , param2) =>{
        param1 == `ExcelR` && param2 ==`ExcelR@123` ? console.log(`Login Success`) : console.log(`Login Failed`)
    }
  return (
    <div>
      <button onDoubleClick={() => login(`ExcelR`,`ExcelR@123`)}>Login</button>
    </div>
  )
}

export default Events5
