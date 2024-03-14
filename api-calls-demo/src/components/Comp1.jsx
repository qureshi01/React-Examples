import axios from "axios";
import {useEffect,useState} from "react"; 

const Comp1 = () =>{
    const [array,setArray] = useState([]);
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            const {data}=posRes;
            const {records}=data;
            setArray(records);
        },
        (errRes)=>{

        })
    },[])

    return(
        <>
            <table border={2}
                    cellSpacing={10}
                    cellPadding={10}
                    align="center">
                <thead>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </thead>
                <tbody>
                    {
                        array.map((element,index)=>{
                            return(
                              <tr>
                                <td>{element.Name}</td>
                                <td>{element.City}</td>
                                <td>{element.Country}</td>
                              </tr>
                            )

                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default Comp1;