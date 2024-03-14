const Child1 = ({obj,bool})=>{
    return(
        <>
            <h1>{obj.key1}....{obj.key2}....{obj.key3}</h1>
            <h1>{JSON.stringify(bool)}</h1>
        </>
    )
}
export default Child1;