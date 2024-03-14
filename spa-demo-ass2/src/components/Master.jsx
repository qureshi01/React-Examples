import Appliances from "./Appliances";
import Electronics from "./Electronics";
import Sports from "./Sports";
import Sport1 from "./Sport1";
import Sport2 from "./Sport2";
import Sport3 from "./Sport3";
import Electronic1 from "./Electronic1";
import Electronic2 from "./Electronic2";
import Electronic3 from "./Electronic3";
import Appliance1 from "./Appliance1";
import Appliance2 from "./Appliance2";
import Appliance3 from "./Appliance3";

import {Link,BrowserRouter,Route,Routes} from "react-router-dom";

const Master =()=>{
    return(
        <>
        <BrowserRouter>
        <Link to="/sports">Sports</Link>
        <Link to="/appliances">Appliances</Link>
        <Link to="/electronics">Electronics</Link>
        <br></br><br></br>
        <Routes>Electronis
            <Route path="/sports" element={<Sports></Sports>}>
                <Route path="sports/cricket" element={<Sport1></Sport1>}></Route>
                <Route path="sports/kabbadi" element={<Sport2></Sport2>}></Route>
                <Route path="sports/hockey" element={<Sport3></Sport3>}></Route>
            </Route>
            <Route path="/appliances" element={<Appliances></Appliances>}>
                <Route path="appliances/fridge" element={<Appliance1></Appliance1>}></Route>
                <Route path="appliances/washing" element={<Appliance2></Appliance2>}></Route>
                <Route path="appliances/ac" element={<Appliance3></Appliance3>}></Route>
            </Route>
            <Route path="/electronics" element={<Electronics></Electronics>}>
                <Route path="electronics/laptop" element={<Electronic1></Electronic1>}></Route>
                <Route path="electronics/mobile" element={<Electronic2></Electronic2>}></Route>
                <Route path="electronics/watch" element={<Electronic3></Electronic3>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Master;