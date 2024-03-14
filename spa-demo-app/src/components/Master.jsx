import Dashboard from "./Dashboard";
import Login from "./Login";
import Error from "./Error";
import {Route,Routes,BrowserRouter} from "react-router-dom";

const Master = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path ="/" element={<Login></Login>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/error" element={<Error></Error>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Master;