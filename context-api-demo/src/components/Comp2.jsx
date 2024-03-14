import global from "../global/global";
import { useContext } from "react";

const Comp2= ()=>{
    const {id,name,age} = useContext(global);
    return(
        <>
        <h1>{JSON.stringify(id)}</h1>
        <h1>{JSON.stringify(name)}</h1>
        <h1>{JSON.stringify(age)}</h1>


        </>
    )

}
export default Comp2;