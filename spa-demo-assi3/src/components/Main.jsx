import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";

import {Link,Route,Routes,BrowserRouter} from "react-router-dom";

const Main = ()=>{
    return(
        <>
        <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>

        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Main;