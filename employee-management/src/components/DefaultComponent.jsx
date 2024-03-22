import { useNavigate } from "react-router-dom";
const DefaultComponent = ()=>{
const navigate = useNavigate();
    const add =()=>{
        navigate("/addEmployee");
    }

    const view = ()=>{
        navigate("/viewEmployee");
    }
    return(
        <>
        <button onClick={add}>Add Employee</button>
        <br></br>        <br></br>
        <br></br>
        <br></br>

        <button onClick={view}>View Employee</button>

        </>
    )
}
export default DefaultComponent;