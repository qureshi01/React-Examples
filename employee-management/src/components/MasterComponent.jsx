import {BrowserRouter,Route,Routes} from "react-router-dom";
import AddEmployee from "./AddEmployee.jsx";
import DefaultComponent from "./DefaultComponent.jsx";
import ViewEmployee from "./ViewEmployee.jsx";
const MasterComponent = ()=>{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultComponent></DefaultComponent>}></Route>
                <Route path="/addEmployee" element={<AddEmployee></AddEmployee>}></Route>
                <Route path="/viewEmployee" element={<ViewEmployee></ViewEmployee>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default MasterComponent;