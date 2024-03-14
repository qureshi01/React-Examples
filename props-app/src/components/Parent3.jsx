import Child3 from "./Child3.jsx";
import { useState } from "react";
const Parent3 = ()=>{
    const [str,setStr] = useState("Hello");
    return(
        <>
           <Child3 str={str}
                   num={100}></Child3>
        </>
    )
}
export default Parent3;
