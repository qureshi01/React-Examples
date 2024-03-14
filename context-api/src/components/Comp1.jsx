import global from "../global/global";
import Comp2 from "./Comp2";
const Comp1 =()=>{
    return(
        <>
        <global.Provider value="Excelr">
            <Comp2></Comp2>
        </global.Provider>
        </>
    )
}
export default Comp1;