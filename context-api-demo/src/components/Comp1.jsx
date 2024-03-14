import global from "../global/global";
import Comp2 from "./Comp2";
const Comp1 = ()=>{
    return(
        <>
        <global.Provider value={{"id":1,"name":"hashim","age":23}}>
        <Comp2></Comp2>
        </global.Provider>
        </>
    )
}
export default Comp1;