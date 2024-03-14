import { useState } from "react";
const State = ()=>{
    const [str,setStr] = useState('ReactJs18.x');
    const [num1,setNum1] = useState(1000);
    const [num2,setNum2] = useState(2000);
    const [product,setproduct] = useState([{"p_id":111,"p_name":"prod_1","p_image":"https://reqres.in/img/faces/7-image.jpg"},
                                            {"p_id":222,"p_name":"prod_2","p_image":"https://reqres.in/img/faces/8-image.jpg"},
                                            {"p_id":333,"p_name":"prod_3","p_image":"https://reqres.in/img/faces/9-image.jpg"},
                                            {"p_id":444,"p_name":"prod_4","p_image":"https://reqres.in/img/faces/10-image.jpg"}]);
    return(
        <>
        <h1>{str}</h1>
        <h1>{num1+num2}</h1>
        <table border={2}
                cellSpacing={2}
                cellPadding={2}>
            <thead>
                <tr>
                    <th>sno</th>
                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
            {
                        product.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.p_id}</td>
                                    <td>{element.p_name}</td>
                                    <td>
                                        <img src ={element.p_image} alt="error"></img>
                                    </td>
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
export default State;