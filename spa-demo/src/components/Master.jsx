import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import React from 'react'
import Link1 from "./Link1";
import Link2 from "./Link2";
import Link3 from "./Link3";
import Link4 from "./Link4";
import Link5 from "./Link5";
import Link6 from "./Link6";



const Master = () => {
  return (
    <div>
    <BrowserRouter>
      <Link to="/comp1/111/p_one/10000">Comp1</Link>
      <Link to="/comp2">Comp2</Link>
      <Link to="/comp3">Comp3</Link>
      <br></br><br></br>
      <Routes>
        <Route path="/comp1/:p_id/:p_name/:p_cost" element={<Comp1></Comp1>}>
            <Route path="comp1/link1" element={<Link1></Link1>}></Route>
            <Route path="comp1/link2" element={<Link2></Link2>}></Route>
        </Route>
        <Route path="/comp2" element={<Comp2></Comp2>}>
            <Route path="comp2/link3" element={<Link3></Link3>}></Route>
            <Route path="comp2/link4" element={<Link4></Link4>}></Route>
        </Route>
        <Route path="/comp3" element={<Comp3></Comp3>}>
            <Route path="comp3/link5" element={<Link5></Link5>}></Route>
            <Route path="comp3/link6" element={<Link6></Link6>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Master
