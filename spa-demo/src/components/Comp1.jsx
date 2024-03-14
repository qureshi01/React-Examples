import React from 'react'
import { Link,Outlet,useParams } from "react-router-dom";

const Comp1 = () => {
  const {p_id,p_name,p_cost} = useParams();
  return (
    <div>
      <h1>{p_id}......{p_name}......{p_cost}</h1> 
    <Link to ="comp1/link1">Link1</Link>
    <Link to ="comp1/link2">Link2</Link>
    <br></br>
    <Outlet></Outlet>
    </div> 
  )
}

export default Comp1
