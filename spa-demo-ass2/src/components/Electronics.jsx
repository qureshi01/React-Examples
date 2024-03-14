import {Link,Outlet} from "react-router-dom";
const Electronics =()=>{
    return(
        <>
        <Link to="electronics/laptop">Laptop</Link>
        <Link to="electronics/mobile">Mobile</Link>
        <Link to="electronics/watch">Watch</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Electronics;