import Child1 from "./Child1.jsx";
import { useState } from "react";
const Parent1 = ()=>{
    const [obj,setObj] = useState({"key1":100,"key2":200,"key3":300});
    const [bool,setBool] = useState(true);
    return(
        <>
            <Child1 obj={obj} bool={bool}></Child1>
        </>
    )
}
export default Parent1;
