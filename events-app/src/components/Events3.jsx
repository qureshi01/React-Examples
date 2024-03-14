import { useState } from "react";

import React from 'react'

const Events3 = () => {
    const [res,setRes] = useState("");
    const login = (param1,param2)=>{
        param1 == `ExcelR` && param2 == `ExcelR@123` ? setRes(`Login Success`) : setRes(`Login Failed`) 
    }
  return (
    <div>
      <button onClick={()=>login(`ExcelR`,`ExcelR@123`)}>Login</button>
        <br></br>
        <h1>{res}</h1>
    </div>
  )
}

export default Events3
