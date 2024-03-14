import React from 'react'
import {Link,Outlet} from "react-router-dom"

const Comp3 = () => {
  return (
    <div>
      <h1>Comp3....</h1>
    <Link to="comp3/link5">Link5</Link>
    <Link to="comp3/link6">Link6</Link>
    <br></br>
    <Outlet></Outlet>
    </div>
  )
}

export default Comp3