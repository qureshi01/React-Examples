import React from 'react'
import {Link,Outlet} from "react-router-dom";

const Comp2 = () => {
  return (
    <div>
      <h1>Comp2.......</h1>
      <Link to="comp2/link3">Link3</Link>
      <Link to="comp2/link4">Link4</Link>
      <br></br>
      <Outlet></Outlet>
    </div>
  )
}

export default Comp2