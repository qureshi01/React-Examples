import axios from "axios";
import { useState,useRef } from "react";
const Comp3 = ()=>{
    
    const ref1 = useRef(null);
    const [product,setProduct] = useState({});
    const search_product=()=>{
        axios.get(`https://reqres.in/api/users?page=${ref1.current.value}`).then((posRes)=>{
            setProduct(posRes);
        },(errRes)=>{
            console.log(errRes);
        });
    }
    
    return(
        <>
            <input type="number" ref={ref1} placeholder="enter page number"></input>
            <button onClick={search_product}>Search</button>
            <p>{JSON.stringify(product)}</p>
        </>
    )
}
export default Comp3;