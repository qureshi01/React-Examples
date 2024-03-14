
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import apiCall from "./apiCall/apiCall";

function App() {

    const dispatch = useDispatch();

    useEffect(()=>{
      console.log("hello");
      dispatch(apiCall())
    },[]);

    const res = useSelector(state=>state);

    return (
      <>
        <p>{JSON.stringify(res)}</p>
      </>
    )
}

export default App
