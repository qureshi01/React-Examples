import {useNavigate} from "react-router-dom";
import { useRef } from "react";

const Login=()=>{
    const ref1 =useRef(null);
    const ref2 =useRef(null);
    const navigate = useNavigate();
    const login = ()=>{
        ref1.current.value == "ExcelR" && ref2.current.value == "ExcelR@123" ? navigate ("/dashboard") : navigate ("/error");
    }
    return(
        <>
            <input type="text" ref={ref1} placeholder="Enter username"></input>
            <br></br><br></br>
            <input type="password" ref={ref2} placeholder="Enter password"></input>
            <br></br><br></br>
            <button onClick={login}>Login</button>
        </>
    )
}
export default Login;