import { useState } from "react";
const State = ()=>{
    const [str, setStr]=useState("Excelr");
    const [num, setNum]=useState(100);
    const [boolean, setBoolean]=useState(true);
    const [arr,setArr]=useState([10,20,30,40,50]);
    const [obj,setObj]=useState({"key1":"React","key2":"Angular","key3":"MongoDB"})
    const [products,setProducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                                             {"p_id":222,"p_name":"p_two","p_cost":20000},
                                             {"p_id":333,"p_name":"p_three","p_cost":30000},
                                             {"p_id":444,"p_name":"p_four","p_cost":40000},
                                             {"p_id":555,"p_name":"p_five","p_cost":50000}]);

    return(
        <>
          <table border={1}
                   align="center"
                   cellSpacing={10}
                   cellPadding={10}>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>p_id</th>
                        <th>p_name</th>
                        <th>p_cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.p_id}</td>
                                    <td>{element.p_name}</td>
                                    <td>{element.p_cost}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>

        {
            arr.map((element,index)=>{
                return(<h1 key={index}>{element}......{index}</h1>)
            })
        }
        <h1>
            {obj.key1}...... {obj.key2}........ {obj.key3}
        </h1>
            <h1>{str}</h1>
            <h1>{num}</h1>
            <h1>{JSON.stringify(boolean)}</h1>
        </>
    )
}
export default State;