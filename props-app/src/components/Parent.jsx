import Child from "./Child.jsx";
const Parent = ()=>{
    return(
        <>
            <Child key1={"ReactJS"} 
                   key2={100}
                   key3={[10,20,30,40,50]}
                   ></Child>
        </>
    )
}
export default Parent;
