import axios from "axios";
import { useState,useEffect } from "react";
import "./Comp2.css";
const Comp2=()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9000/products").then((posRes)=>{
            const {data} = posRes;
            setProducts(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <>
              <section className="parent">
                  {
                    products.map((element,index)=>{
                        return(<section className="child" key={index}>
                            <img src={element.image} width={200}></img>
                            <h1>{element.name}</h1>
                            <p>{element.cost}</p>
                        </section>)
                    })
                  }
              </section>       
        </>
    )
}
export default Comp2;