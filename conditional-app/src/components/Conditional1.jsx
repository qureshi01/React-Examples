import { useState } from "react";
const Conditional1 = ()=>{
    const [str1,setStr1] = useState(`Java`);
    const [str2,setStr2] = useState(`JavaScript`);
    const [flag,setFlag] = useState(true);
    const func_one = () =>{
        setFlag(flag=>!flag);
    } 
    return(
        <>
        {
            flag ? <h1>{str1}</h1> : <h1>{str2}</h1>
        }
        <button onClick={func_one}>Toggle</button>
        </>
    )
}
export default Conditional1;