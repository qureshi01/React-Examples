import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Update this line

const AddEmployee = () =>{
    const name =useRef(null);
    const job =useRef(null);
    const salary = useRef(null);

    //const axios = require('axios');

    const username = 'admin1@excelr.com';
    const password = '$2a$12$g1n2Hrq250OtHp.BxYnLa.qYgJvavVmztBKgJTSnxtIyw4FrLkx4C';
      
    const navigate = useNavigate();
    const add = ()=>{
        axios.post("http://localhost:8500/save",{"name":name.current.value,"job":job.current.value,"salary":parseInt(salary.current.value)},{
            auth: {
              username: username,
              password: password
            }
          }).then((posRes)=>{
            navigate("/viewEmployee");
            
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>
         <input type="text" ref={name} placeholder="enter name"></input>
            <br></br><br></br>
            <input type="text" ref={job} placeholder="enter job"></input>
            <br></br><br></br>
            <input type="number" ref={salary} placeholder="enter salary"></input>
            <br></br><br></br>
            <button onClick={add}>Add Employee</button>
        </>
    )
}
export default AddEmployee;