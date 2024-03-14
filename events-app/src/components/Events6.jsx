import { useRef,useState } from "react";

import React from 'react'

const Events6 = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [res,setRes] = useState("");
    const login = ()=>{
        ref1.current.value==`ExcelR` && ref2.current.value == `ExcelR@123` ? setRes(`Login Success`) : setRes(`Login Failed`);
    }
  return (
    <div>
      <input type="text" ref={ref1} placeholder="Enter Username : "></input>
      <br></br>
      <br></br>
      <input type="password" ref={ref2} placeholder="Enter Password : "></input>
      <br></br>
      <br></br>
      <button onClick={login}>Login</button>
      <br></br>
      <br></br>
      <h1>{res}</h1>
    </div>
  )
}
export default Events6
