import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";
const apiCall = createAsyncThunk("customers",async ()=>{
    //console.log("hello1");
    const res = await axios.get("https://www.w3schools.com/angular/customers.php");
    //console.log(res);
    return res;
})
export default apiCall;