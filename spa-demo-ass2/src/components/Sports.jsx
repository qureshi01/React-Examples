import {Link,Outlet} from "react-router-dom";
const Sports =()=>{
    return(
        <>
        <Link to="sports/cricket">Cricket</Link>
        <Link to="sports/kabbadi">Kabbadi</Link>
        <Link to="sports/hockey">Hockey</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Sports;