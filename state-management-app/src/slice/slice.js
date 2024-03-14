import {createSlice} from "@reduxjs/toolkit";
import apiCall from "../apiCall/apiCall";
const slice = createSlice({
    name:"customer-slice",
    initialState:{
        loading:false,
        data:{},
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(apiCall.pending,(state,action)=>{
            state.loading=false;
            state.data={};
            state.error=false;
        })
        builder.addCase(apiCall.fulfilled,(state,action)=>{
            state.loading=true;
            state.data=action.payload;
            state.error=false;
        })
        builder.addCase(apiCall.rejected,(state,action)=>{
            state.loading=true;
            state.data={};
            state.error=true;
        })
    }
});
export default slice.reducer;