import global from "../global/global";
import { useContext } from "react";

const Comp2=()=>{
    const str = useContext(global);
    return (
        <>
        <h1>{str}</h1>
        </>
    )
}
export default Comp2;