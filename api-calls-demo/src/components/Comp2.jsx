import axios from "axios";
import {useEffect,useState} from "react";

const Comp2 = ()=>{
    const [array,setArray] = useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/unknown").then((posRes)=>{
            const {data:x}=posRes;
            const {data}=x;
            setArray(data);
        },
        (errRes)=>{

        })
    },[])
    
    return(
        <>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>year</th>
                <th>color</th>
                <th>pantone_value</th>
            </thead>
            <tbody>
                {
                    array.map((element,index)=>{
                        return(
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.year}</td>
                                <td >
                                    <div style={{ border:`7px solid ${element.color}`   }}>

                                    </div>
                                </td>
                                <td>{element.pantone_value}</td>
                            </tr>
                        )

                    })
                }
            </tbody>
            <tfoot>

            </tfoot>
        </table>
        </>
    )
}
export default Comp2;