import {Link,Outlet} from "react-router-dom";
const Appliances =()=>{
    return(
        <>
        <Link to="appliances/fridge">Fridge</Link>
        <Link to="appliances/washing">Washing</Link>
        <Link to="appliances/ac">AC</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Appliances;