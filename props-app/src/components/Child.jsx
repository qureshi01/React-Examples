const Child = ({key1,key2,key3})=>{
    return(
        <>
            {
                key3.map((element,index)=>{
                    return(<h1 key={index}>{element}</h1>)
                })
            }
            <h1>{key2}</h1>
            <h1>{key1}</h1>
        </>
    )
}
export default Child;