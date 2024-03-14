import Component1 from "./Component1";
import Component2 from "./Component2";
import { useState } from "react";

import React from 'react'

const Conditional2 = () => {
    const [flag,setFlag] = useState(true);
    const func_one = ()=>{
        setFlag(flag=>!flag);
    }
  return (
    <div>
      {
        flag ? <h1><Component1></Component1></h1> : <h1><Component2></Component2></h1>
      }
      <button onClick={func_one}>Toggle</button>
    </div>
  )
}

export default Conditional2
